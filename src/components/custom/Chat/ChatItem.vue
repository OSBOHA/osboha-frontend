<template>
  <div class="d-flex align-items-center">
    <div class="avatar me-2">
      <img :src="item.image" :alt="item.image" class="avatar-50 ">
      <span class="avatar-status">
      </span>
    </div>
    <div class="chat-sidebar-name">
      <h6 class="mb-0">{{ item.name }}</h6>
    </div>
    <div class="chat-meta float-right text-center mt-2 me-1" v-if="item.isPrivate">
      <div class="chat-msg-counter bg-primary text-white">20</div>
      <span class="text-nowrap">29 min</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ChatItem',
  props: {
    item: { type: Object }
  }
}
</script>
