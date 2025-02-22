import { formatDistanceToNow } from "date-fns";
import ar from "date-fns/locale/ar-SA";
import { toast } from "vue3-toastify";
import Swal from "sweetalert2";

export default {
  /**
   * Transforms a date to a written format (ex: 5 minutes ago) in Arabic
   * @param {Date} dateToConvert
   * @returns {String} written date
   */
  formatDateToWritten(dateToConvert) {
    if (dateToConvert === null || dateToConvert === "") return null;
    return formatDistanceToNow(new Date(dateToConvert), {
      timeZone: "Asia/Riyadh",
      addSuffix: true,
      locale: ar,
    });
  },

  /**
   * Transforms a date to a full date format (ex: Saturday, March 25, 2017 at 10:30 PM) in Arabic
   * @param {Date} dateToConvert
   * @returns {String} full date
   */
  formatFullDate(dateToConvert, withTime = true) {
    return new Date(dateToConvert).toLocaleString("ar", {
      timeZone: "Asia/Riyadh",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: withTime ? "numeric" : undefined,
      minute: withTime ? "numeric" : undefined,
      hour12: withTime ? true : undefined,
    });
  },

  formatDayInArabic(dateToConvert, withTime = false) {
    const options = { timeZone: "Asia/Riyadh", weekday: "long" };
    if (withTime) {
      options.day = "numeric";
    }
    return new Date(dateToConvert).toLocaleString("ar-EG", options);
  },

  /**
   * Toggle a toast message with a specific type
   * @param {String} message
   * @param {String} type
   */
  toggleToast(message, type, position = "bottom-center") {
    /**
     * position could be "top-left" - "top-right" - "top-center" - "bottom-left" - "bottom-right" - "bottom-center" 
     */
    let backgroundColor;
    let icon;
    switch (type) {
      case "success":
        backgroundColor = "#278036";
        icon = "✅"; // Emoji or custom icon
        break;
      case "error":
        backgroundColor = "#d63031";
        icon = "❌";
        break;
      case "warning":
        backgroundColor = "#ffc107";
        icon = "⚠️";
        break;
      case "info":
        backgroundColor = "#17a2b8";
        icon = "ℹ️";
        break;
      case "notification":
        backgroundColor = "#eb755b";
        icon = "🔔";
        break;
      default:
        backgroundColor = "#278036";
        icon = "ℹ️";
        break;
    }
    toast(message, {
      type,
      position: position,
      icon,
      toastStyle: {
        "background-color": `${backgroundColor}`,
      },
      autoClose: type === "success" ? 1000 : 2000,
    });
  },

  toggleErrorToast(message = "حدث خطأ ما, يرجى المحاولة لاحقاً") {
    return this.toggleToast(message, "error");
  },

  /**
   * Toggle Swal alert (error type)
   * @param {String} title
   * @returns Swal.fire
   */
  handleErrorSwal(title = "حدث خطأ ما, يرجى المحاولة لاحقاً") {
    return Swal.fire({
      position: "top-end",
      title: title,
      icon: "error",
      showConfirmButton: true,
      confirmButtonText: "حسناً",
    });
  },

  /**
   * Toggle Swal alert (success type)
   * @param {String} title
   * @param {Number} timer
   * @returns Swal.fire
   * @default timer = 1500
   */
  handleSuccessSwal(title, timer = 1500) {
    return Swal.fire({
      position: "top-end",
      title: title,
      icon: "success",
      showConfirmButton: false,
      timer,
    });
  },

  /**
   * format a number to have a comma every 3 digits
   * @param {Number} number
   * @returns {String} formatted number
   */
  formatNumber(number) {
    if (!number) return "0";
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },

  generateRandomId() {
    return Math.floor(Math.random() * 1000000).toString();
  },

  minutesToHoursAndMinutes(minutes) {
    if (minutes === 0) return "0";

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    let str = "";

    if (hours > 0) {
      str += `${hours} ساعة`;
    }

    if (remainingMinutes > 0) {
      if (str.length > 0) str += " و ";

      str += `${remainingMinutes} دقيقة`;
    }

    return str;
  },

  convertTZ(date, tzString) {
    return new Date(
      (typeof date === "string" ? new Date(date) : date).toLocaleString(
        "en-US",
        { timeZone: tzString },
      ),
    );
  },

  getAssetsUrl() {
    return process.env.VUE_APP_BASE_URL.replace("api/v1", "assets/images");
  },

  getMonthAndYear(date) {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;

    return {
      year,
      month: month < 10 ? `0${month}` : month,
    };
  },

  getDifferenceBetweenDates(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    const diffTime = Math.abs(d1 - d2);
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));

    return {
      hours: diffHours,
      minutes: diffHours * 60,
    };
  },

  objectToArray(object) {
    if (!object) return [];
    return Object.entries(object).map(([key, value]) => ({
      key,
      value,
    }));
  },

  styleUrlsAndHashtags(text) {
    if (!text) return;

    //style urls
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    text = text.replace(urlRegex, function (url) {
      return (
        '<a href="' +
        url +
        '"  target="_blank" direction: rtl;">' +
        url +
        "</a>"
      );
    });

    //style hashtags
    const hashtagRegex = /#([\u0600-\u06FF\w]+)/g;
    text = text.replace(hashtagRegex, function (hashtag) {
      return (
        '<span style="font-weight: bold; color: #1d1a55;">' +
        hashtag +
        "</span>"
      );
    });

    return text;
  },
};
