import { PERIODSRANGE } from "../services/Constant";
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
  findPeriod: (period) => {
    const periodSelected = PERIODSRANGE.find((item) => {
      if (item.key === period) {
        return item.value;
      }
    });
    return periodSelected;
  },
  beforeLimit: (period, periodLimit, direction) => {
    const periodSelected = period;
    const periodLimitSelected = periodLimit;
    console.log(periodSelected, periodLimitSelected);
    if (direction === "up") {
      return periodSelected < periodLimitSelected;
    } else {
      return periodSelected > periodLimitSelected;
    }
  },

  //transform string to date
  stringToStringDate: (date) => {
    const [year, month, day] = date.split("-");
    return `${year}-${month}-${day}`;
  },

  
};

export default DateController;
