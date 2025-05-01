import { api } from "../Intercepter";
import { handleError } from "vue";

class RolesService {
  constructor() {
    this.prefix = "roles";
  }
  async assignRole(formData) {
    try {
      const response = await api.post(`${this.prefix}/assign-role`, formData);
      return response.data.data;
    } catch (error) {
      handleError(error);
    }
  }
  async getSecondaryRoles(type) {
    try {
      const response = await api.get(
        `${this.prefix}/get-secondary-roles/${type}`,
      );
      return response.data.data;
    } catch (error) {
      handleError(error);
    }
  }

  async assignNonBasicRole(formData) {
    try {
      const response = await api.post(
        `${this.prefix}/assign-non-basic-role`,
        formData,
      );
      return response.data.data;
    } catch (error) {
      handleError(error);
    }
  }

  async ChangeAdvisingTeam(formData) {
    try {
      const response = await api.post(
        `${this.prefix}/change-advising-team`,
        formData,
      );
      return response.data.data;
    } catch (error) {
      return error.response;
    }
  }
  async supervisorsSwap(formData) {
    try {
      const response = await api.post(
        `${this.prefix}/supervisors-swap`,
        formData,
      );
      return response.data.data;
    } catch (error) {
      return error.response;
    }
  }

  async newSupervisor_currentToAmbassador(formData) {
    try {
      const response = await api.post(
        `${this.prefix}/new-supervisor-current-to-ambassador`,
        formData,
      );
      return response.data.data;
    } catch (error) {
      return error.response;
    }
  }

  async newSupervisor_currentToLeader(formData) {
    try {
      const response = await api.post(
        `${this.prefix}/new-supervisor-current-to-leader`,
        formData,
      );
      return response.data.data;
    } catch (error) {
      return error.response;
    }
  }

  async newLeader_currentToAmbassador(formData) {
    try {
      const response = await api.post(
        `${this.prefix}/new-leader-current-to-ambassador`,
        formData,
      );
      return response.data.data;
    } catch (error) {
      return error.response;
    }
  }
  async transferLeader(formData) {
    try {
      const response = await api.post(
        `${this.prefix}/transfer-leader`,
        formData,
      );
      return response.data.data;
    } catch (error) {
      return error.response;
    }
  }
  async transferAmbassador(formData) {
    try {
      const response = await api.post(
        `${this.prefix}/transfer-ambassador`,
        formData,
      );
      return response.data.data;
    } catch (error) {
      return error.response;
    }
  }

  async switchAdministrators(formData) {
    try {
      const response = await api.post(
        `${this.prefix}/switch-administrators`,
        formData,
      );
      return response.data.data;
    } catch (error) {
      return error.response;
    }
  }
  async getSecondaryRolesByRole() {
    try {
      const response = await api.get(`${this.prefix}/secondary-roles-by-role`);
      return response.data.data;
    } catch (error) {
      handleError(error);
    }
  }

  async removeSecondaryRole(formData) {
    try {
      const response = await api.post(
        `${this.prefix}/remove-secondary-role`,
        formData,
      );
      return response.data.data;
    } catch (error) {
      handleError(error);
    }
  }
}

export default new RolesService();
