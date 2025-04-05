<template>
  <div>
    <ChatHeader :unreadMessages="unreadMessages" />
    <modal ref="newMessageModalRef" id="newMessageModal" tabindex="-1" aria-labelledby="newMessageModalLabel"
      :aria-hidden="true" dialogClass="modal-md modal-dialog-centered modal-dialog-scrollable"
      style="height: 95%; padding-top: 9%">
      <model-header>
        <h4>رسالة جديدة</h4>
        <a href="javascript:void(0);" class="lh-1" ref="commentModalCloseBtn" @click="closeModal">
          <span class="material-symbols-outlined">close</span>
        </a>
      </model-header>

      <model-body>
        <form class="add-room-form" @submit.prevent="createRoom">
          <div class="input-group search-input">
            <div class="search-icon btn">
              <span class="material-symbols-outlined"> search </span>
            </div>

            <input type="text" class="form-control" placeholder="إلى:" @input="searchUsers" v-model="searchQuery" />

            <button class="btn close-icon" type="button" v-if="searchQuery.length > 0" @click="clearSearch">
              <span class="material-symbols-outlined"> close </span>
            </button>
          </div>

          <div class="mt-2">
            <div v-if="showEmpty" class="dropdown-list-item">
              <span>لا يوجد نتائج</span>
            </div>
            <div class="text-center justify-content-center dropdown-list-item" v-if="fetchingUsers">
              <img src="@/assets/images/gif/page-load-loader.gif" alt="loader" style="height: 50px" />
            </div>
            <div class="dropdown-list-item" v-for="user in users" :key="user.id" @click="openNewRoom(user)">
              <BaseAvatar :profileImg="user?.profile.profile_picture" :profile_id="user?.profile.id" :title="user?.name"
                :gender="user?.gender" avatarClass="rounded-circle avatar-40" />
              <span class="me-2">{{ user.name }}</span>
            </div>
          </div>
        </form>
      </model-body>
    </modal>

    <vue-advanced-chat dir="ltr" height="calc(100vh - 20px)" :current-user-id="currentUserId" :rooms="rooms"
      :room-id="currentRoomId" :loading-rooms="roomsLoading" :rooms-loaded="roomsLoaded" :messages="messages"
      :messages-loaded="messagesLoaded" :show-audio="false" :show-reaction-emojis="false"
      :message-actions="JSON.stringify(messageActions)" :load-first-room="true"
      @fetch-messages="fetchMessages($event.detail[0])" @send-message="sendMessage($event.detail[0])"
      @delete-message="deleteMessage($event.detail[0])" @add-room="addRoom($event.detail[0])"
      @open-file="openFile($event.detail[0])" />
    <!-- @fetch-more-rooms="fetchMoreRooms" -->
  </div>
</template>

<script>
import { register } from "vue-advanced-chat";
import helper from "@/utilities/helper";
import ChatHeader from "@/components/chat/header.vue";
import MessageService from "@/API/services/messages.service";
import RoomService from "@/API/services/room.service";
import UserService from "@/API/services/user.service";
import { watchEffect } from "vue";
import { Modal } from "bootstrap";

register();

export default {
  components: { ChatHeader },
  async mounted() {
    this.newMessageModalRef = new Modal(this.$refs.newMessageModalRef.$el);

    await this.loadRooms();

    //open a new room if user_id is passed in the query params
    const queryParams = this.$route.query;
    if (queryParams.user_id) {
      // console.log("queryParams", queryParams.user_id);
      this.loadUserRoom(queryParams.user_id);
    } else {
      // console.log("queryParams not found before");

      this.selectedRoom = this.rooms[0];
      // console.log("queryParams not found after");
    }
  },

  async created() {
    this.unreadMessages = await MessageService.unreadMessages();

    const channel = this.Echo.channel("rooms-channel." + this.user.id);
    channel.listen(".new-messages", (response) => {
      if (response) {
        this.rooms = response.rooms;
        this.roomsLoaded = true;
        this.unreadMessages = response.unreadMessages;
      }
    });

    watchEffect(() => {
      // console.log("selectedRoom before", this.selectedRoom);
      // Subscribe to the 'chat' channel
      if (this.selectedRoom) {
        if (this.selectedRoom.roomId != this.currentRoomId) {
          this.Echo.leaveChannel("single-room-channel." + this.currentRoomId);
          this.currentRoomId = this.selectedRoom.roomId;
        }
        const channel = this.Echo.channel(
          "single-room-channel." + this.currentRoomId,
        );
        // Listen for 'new-message' events
        channel.listen(".new-message", (response) => {
          if (!this.displayedMessageIds.includes(response.message._id)) {
            this.messages = [...this.messages, response.message];
            this.displayedMessageIds.push(response.message._id);
          }
        });
      }

      // console.log("selectedRoom after", this.selectedRoom);
    });
  },
  watch: {
    $route(to, from) {
      this.newMessageModalRef.hide();
    },
    selectedRoom(newVal, old) {
      // console.log("selectedRoom OldVal", old, "selectedRoom newVal", newVal);

      // const user = newVal.users.find((user) => user.id !== this.currentUserId);
      // this.$router.push({
      //   query: {
      //     user_id: user.id,
      //   },
      // });

      // console.log("Route param", this.$route.query.user_id);
    },
    currentRoomId(newVal, old) {
      // console.log("currentRoomId OldVal", old, "currentRoomId newVal", newVal);
    },
  },
  data() {
    return {
      unreadMessages: 0,
      pusher: null,
      currentRoomId: 0,
      displayedMessageIds: [],
      searchQuery: "",
      roomsLoading: false,
      roomsLoaded: false,
      rooms: [],
      roomsPerPage: 4,
      roomsPage: 1,
      totalRooms: 0,
      lastRoomPage: 1,
      selectedRoom: null,
      messages: [],
      messagesLoaded: false,
      lastMessagePage: 1,
      messagesPerPage: 20,
      messagesPage: 1,
      messageActions: [
        {
          name: "replyMessage",
          title: "Reply",
        },
        // {
        //   name: "deleteMessage",
        //   title: "Delete Message",
        //   onlyMe: true,
        // },
      ],
      users: [],
      delayTimer: null,
      showEmpty: false,
      fetchingUsers: false,
      options: null,
      newMessageModalRef: null,
      createRoomLoading: false,
    };
  },
  computed: {
    currentUserId() {
      return this.$store.getters.getUser.id.toString();
    },
    user() {
      return this.$store.getters.getUser;
    },
    Echo() {
      return this.$store.getters.getEcho;
    },
  },
  methods: {
    resetRooms() {
      this.loadingRooms = true;
      this.roomsLoaded = true;
      this.rooms = [];
      this.roomsPage = 1;
      this.totalRooms = 0;
      this.lastRoomPage = 1;
      //reset messages
    },

    resetMessages() {
      this.messages = [];
      this.messagesLoaded = false;
      this.messagesPage = 1;
      this.lastMessagePage = 1;
    },

    async loadRooms() {
      this.resetRooms();
      await this.fetchMoreRooms();
    },

    async fetchMoreRooms() {
      // if (this.roomsPage > this.lastRoomPage) {
      //   this.roomsLoaded = true;
      //   return;
      // }

      this.roomsLoading = true;
      try {
        const response = await MessageService.listRooms(this.roomsPage);
        // this.totalRooms = response.data?.total;
        // this.lastRoomPage = response.data?.last_page;
        // this.roomsPage++;
        // this.roomsLoaded =
        //   response.data?.rooms?.length === 0 ||
        //   response.data?.rooms?.length < this.roomsPerPage;
        // this.rooms =
        //   response.data?.rooms?.length &&
        //   this.rooms?.concat(response.data?.rooms);

        this.rooms = response.data?.rooms;
        this.roomsLoaded = true;
      } catch (error) {
        helper.toggleToast("حدث خطأ ما, حاول مرة أخرى", "error");
      } finally {
        this.roomsLoading = false;
      }
    },

    fetchMessages({ room, options = {} }) {
      // console.log("fetchMessages room", room);
      if (Object.keys(room).length === 0) return;

      this.options = options;
      if (options.reset) {
        this.resetMessages();
      }

      if (this.messagesPage > this.lastMessagePage) {
        this.messagesLoaded = true;
        return;
      }

      // console.log("fetchMessages before");
      this.selectedRoom = room;
      // console.log("fetchMessages after");

      if (room?.isFake) {
        this.messagesLoaded = true;
        return;
      }

      MessageService.listRoomMessages(room.roomId, this.messagesPage)
        .then((response) => {
          if (
            response.data?.messages?.length === 0 ||
            response.data?.messages?.length < this.messagesPerPage
          ) {
            setTimeout(() => {
              this.messagesLoaded = true;
            }, 0);
          }

          if (options.reset) this.messages = [];

          response.data?.messages?.forEach((message) => {
            this.displayedMessageIds.push(message._id);
            this.messages.unshift(message);
          });

          this.lastMessagePage = response.data?.last_page;
          this.messagesPage++;

          //mark messages as read
          MessageService.markMessagesAsRead(room.roomId).then((response) => {
            const selected = this.rooms.find(
              (room) => room.roomId === this.selectedRoom?.roomId,
            );

            if (selected) {
              selected.unreadCount = 0;
              this.rooms = [...this.rooms];
            }
          });
        })
        .catch((error) => {
          helper.toggleToast("حدث خطأ ما, حاول مرة أخرى", "error");
        });
    },

    async sendMessage(message) {
      try {
        const newMessage = message;

        const response = await MessageService.create(newMessage);

        if (!this.displayedMessageIds.includes(response.data?.message._id)) {
          this.messages = [...this.messages, response.data?.message];
          this.displayedMessageIds.push(response.data?.message._id);
        }

        //update last message in rooms
        const roomIndex = this.rooms.findIndex(
          (room) => room.roomId === response.data?.room.roomId,
        );
        const newRoom = {
          ...this.rooms[roomIndex],
          lastMessage: response.data?.message,
          index: response.data?.message?.indexId,
        };

        this.rooms[roomIndex] = newRoom;
        this.rooms = [...this.rooms];

        // console.log("sendMessage before");
        this.selectedRoom = newRoom;
        // console.log("sendMessage after");
      } catch (error) {
        helper.toggleToast("حدث خطأ ما, حاول مرة أخرى", "error");
      }
    },

    async deleteMessage({ message }) {
      try {
        await MessageService.delete(message._id);
        this.messages = this.messages.filter((m) => m._id !== message._id);
      } catch (error) {
        helper.toggleToast("حدث خطأ ما, حاول مرة أخرى", "error");
      }
    },

    addRoom() {
      this.newMessageModalRef.show();
    },

    clearSearch() {
      this.searchQuery = "";
      this.fetchingUsers = false;
      this.users = [];
      this.showEmpty = false;
    },

    closeModal() {
      this.newMessageModalRef.hide();
      this.clearSearch();
    },

    async searchUsers() {
      clearTimeout(this.delayTimer);

      this.delayTimer = setTimeout(() => {
        this.fetchUsers();
      }, 1000);
    },

    async fetchUsers() {
      if (this.searchQuery === "") {
        return;
      }

      if (this.fetchingUsers) return;

      this.fetchingUsers = true;

      try {
        const response = await UserService.searchUsers(this.searchQuery);
        this.users = response.data;
      } catch (error) {
        helper.toggleToast("حدث خطأ ما, حاول مرة أخرى", "error");
      } finally {
        if (this.users.length === 0 && this.searchQuery !== "") {
          this.showEmpty = true;
        } else if (this.users.length > 0 && this.searchQuery !== "") {
          this.showEmpty = false;
        } else if (this.users.length === 0 && this.searchQuery === "") {
          this.showEmpty = false;
        }

        this.fetchingUsers = false;
      }
    },

    openNewRoom(user) {
      //check room if exists
      const room =
        this.rooms?.length > 0
          ? this.rooms.find((room) => {
            //check first user
            if (parseInt(room.users[0]._id) === parseInt(user.id)) {
              return true;
            }

            //check second user
            if (parseInt(room.users[1]._id) === parseInt(user.id)) {
              return true;
            }

            return false;
          })
          : null;

      // console.log("roomFound", room);

      if (room) {
        // console.log("openNewRoom found before");
        this.selectedRoom = room;
        // console.log("openNewRoom found after");
        this.fetchMessages({ room });
        this.closeModal();
        return;
      } else {
        this.createNewRoom(user);
      }

      // console.log("openNewRoom after");
    },

    async createNewRoom(user) {
      if (this.createRoomLoading) return;

      this.createRoomLoading = true;
      this.roomsLoading = true;
      this.roomsLoaded = false;

      try {
        const room = await RoomService.create(user.id);
        // console.log(room);
        // this.rooms = [...(this.rooms || []), room];
        // console.log(this.rooms);

        // console.log("createNewRoom before");

        this.selectedRoom = room;
        // console.log("createNewRoom after");

        this.closeModal();

        // this.$router.push({
        //   query: {
        //     user_id: user.id,
        //   },
        // });

        //reload rooms
        // await this.loadRooms();
      } catch (error) {
        helper.toggleToast(
          "حدث خطأ أثناء إنشاء المحادثة, حاول مرة أخرى",
          "error",
        );
      } finally {
        this.createRoomLoading = false;
        this.roomsLoading = false;
        this.roomsLoaded = true;
      }
    },

    openFile({ file }) {
      window.open(file.file.url, "_blank");
    },

    async loadUserRoom(user_id) {
      this.roomsLoading = true;
      this.roomsLoaded = false;
      try {
        const user = await UserService.getInfo(user_id);
        this.openNewRoom(user);
      } catch (error) {
        helper.toggleErrorToast();
      } finally {
        this.roomsLoading = false;
        this.roomsLoaded = true;
      }
    },
  },
};
</script>

<style>
.new-room {
  direction: ltr;
  padding: 10px 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.3s ease-in-out;
}

.add-room-form {
  width: 100%;
}

.searchable-dropdown {
  position: relative;
  width: 100%;
}

.search-input {
  border-radius: 5px;
  border: 1px solid #ccc;
  max-width: 500px;
  width: 100%;
}

.search-input input {
  border: none;
  outline: none;
  width: 100%;
  padding: 10px 20px;
  font-size: 16px;
}

.search-input .btn {
  border: none;
}

/* .search-input {
  position: relative;
  width: 100%;
}

.search-input input {
  width: 100%;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
}

.search-input .button-cancel {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: none;
} */

.dropdown-list {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  z-index: 1000;
  box-shadow: 0 0 5px #ccc;
  display: none;
}

.dropdown-list-item {
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.dropdown-list-item img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}

.dropdown-list-item span {
  font-size: 16px;
  font-weight: 600;
}

.dropdown-list-item .user-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  background: #278036;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
}

.dropdown-list-item:hover {
  background: #eee;
}

.dropdown-list-item:not(:last-child) {
  border-bottom: 1px solid #ccc;
}

.dropdown-list-item:last-child {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.searchable-dropdown.active .dropdown-list {
  display: block;
}

.search-input.active .button-cancel {
  display: block;
}
</style>