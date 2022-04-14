const DateController = {
  getToday: () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  },
  getHour: () => {
    const today = new Date();
    const hh = String(today.getHours()).padStart(2, "0");
    const mm = String(today.getMinutes()).padStart(2, "0"); //January is 0!
    const ss = String(today.getSeconds()).padStart(2, "0");
    return `${hh}:${mm}:${ss}`;
  },
};

export default DateController;
