import { handleError } from "vue";
import { customHandleError } from "../../utilities/errors";
import { api, handelErrors } from "../Intercepter";

class DuplicateUserDeletion {
  constructor() {
    this.prefix = "duplicate-deletions";
  }

  async getDuplicateDeletions(viewAsUserId = null) {
    try {
      const url = viewAsUserId
        ? `${this.prefix}/${viewAsUserId}`
        : `${this.prefix}`;

      const response = await api.get(url);
      return response.data.data;
    } catch (error) {
      return error;
    }
  }

async markAsDuplicate(user_group_id, duplicate_in) {
  try {
    return await api.post(`${this.prefix}/mark-duplicate`, {
      user_group_id,
      duplicate_in
    });
  } catch (error) {
    handleError(error);
  }
}
}
export default new DuplicateUserDeletion();
