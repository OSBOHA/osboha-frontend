import { handleError } from "vue";
import { api } from "../Intercepter";

class Week {
  constructor() {
    this.prefix = "weeks";
  }

  async getWeeks(limit) {
    try {
      const response = await api.get(`${this.prefix}/get-weeks/${limit}`);
      return response.data.data;
    } catch (error) {
      handleError(error);
    }
  }
  async getNextWeekTitles(limit) {
    try {
      const response = await api.get(
        `${this.prefix}/get-next-weeks-title/${limit}`,
      );
      return response.data.data;
    } catch (error) {
      handleError(error);
    }
  }
  async getWeeksAroundTitle(targetTitle, before = 2, after = 10) {
    try {
      const response = await api.get(
        `${this.prefix}/weeks-around/${targetTitle}/${before}/${after}`,
      );
      return response.data.data;
    } catch (error) {
      handleError(error);
    }
  }
  async getPreviousWeek() {
    try {
      const response = await api.get(`${this.prefix}/get-previous-week`);
      return response.data.data;
    } catch (error) {
      handleError(error);
    }
  }
}

export default new Week();
