import { api } from "../Intercepter";
import store from "../../store";

class userBookServices {
  constructor() {
    this.prefix = "eligible-userbook";
  }

  async checkAchievement(id) {
    const response = await api.get(`${this.prefix}/check-achievement/${id}`);
    return response.data.data;
  }

  async acceptUserBook(id) {
    const response = await api.post(`${this.prefix}/review`, {
      id: id,
      status: "audit",
      reviewer_id: store.getters.getUser.id,
    });
    return response;
  }
  async rejectRetardUserBook(id, note, status) {
    const response = api.post(`${this.prefix}/review`, {
      id: id,
      status: status,
      reviewer_id: store.getters.getUser.id,
      reviews: note,
    });
    return response;
  }
  async getById(id) {
    const response = await api.get(`${this.prefix}/${id}`);

    return response.data.data;
  }
  async getReadyToAudit() {
    const response = await api.get(`${this.prefix}/ready/to`);

    return response.data.data;
  }
  async getEligibleUserBooksWithAuditStatus() {
    const response = await api.get(`${this.prefix}/get-books/audit-status`);
    return response.data.data;
  }

  async getBooksWithRetardStatus() {
    const response = await api.get(`${this.prefix}/get-books/retard-status`);
    return response.data.data;
  }

  async undoRetard(book_id, retard_type) {
    const response = await api
      .patch(`${this.prefix}/undo/retard/${book_id}`, {
        retard_type: retard_type,
      })
      .catch((error) => {
        console.log(error);
      });
    return response.data.data;
  }

  async getByBookID(id) {
    const response = await api.get(`${this.prefix}/by-book-id/${id}`);
    return response.data.data;
  }

  async updateUserBook(status, id) {
    const response = await api
      .patch(`${this.prefix}/${id}`, { status: status })
      .catch((error) => {
        console.log(error);
      });
    return response;
  }
  async requestCertificate(id) {
    try {
      const response = await api.post(`${this.prefix}`, {
        book_id: id,
      });
      return response.data.data;
    } catch (e) {
      console.log(e);
    }
  }

  async getByStatus(status) {
    try {
      const response = await api.get(`${this.prefix}/status/${status}`);
      return response.data.data;
    } catch (e) {
      console.log(e);
    }
  }

  async lastAchievement() {
    try {
      const response = await api.get(`${this.prefix}/last-achievement/`);
      return response.data.data;
    } catch (e) {
      console.log(e);
    }
  }

  async finishedAchievement() {
    try {
      const response = await api.get(`${this.prefix}/finished-achievement/`);
      return response.data.data;
    } catch (e) {
      console.log(e);
    }
  }

  async changeStatus(status, id) {
    try {
      const response = await api.patch(`${this.prefix}/status/${id}`, {
        status,
      });
      return response.data.data;
    } catch (e) {
      console.log(e);
    }
  }

  async cancel(id) {
    console.log(id);
    try {
      const response = await api.delete(`${this.prefix}/${id}`);
      return response.data.data;
    } catch (e) {
      return e.response.data.data;
    }
  }

  async searchUserBook(id) {
    try {
      const response = await api.get(`${this.prefix}/search-by-id/${id}`);
      return response.data.data;
    } catch (e) {
      return e.response.data.data;
    }
  }
}

export default new userBookServices();
