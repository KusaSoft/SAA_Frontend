import {
  invalidDates,
  PERIODSRANGE,
} from '../../services/Constant';

const dateValidation = (date, valid) => {
  if (date !== '') {
    const newDate = new Date(date);
    if (newDate.getDay() === 6) {
      return [false, false];
    } else {
      return [true, valid];
    }
  } else {
    return [true, valid];
  }
};

const isValidRange = (ini, end, valid) => {
  if (ini === '' || end === '') {
    return [true, valid];
  } else {
    if (
      PERIODSRANGE.indexOf(ini) !== PERIODSRANGE.indexOf(end) &&
      PERIODSRANGE.indexOf(ini) < PERIODSRANGE.indexOf(end)
    ) {
      return [true, valid];
    } else {
      return [false, false];
    }
  }
};

const empty = (value, valid) => {
  if (value === '') {
    valid = false;
    return [true, valid];
  } else {
    return [false, valid];
  }
};

const DataValidation = {
  validateStringField: () => {},
  validateArrayField: () => {},
  validateOnSave: (reservationRequest, errors) => {
    let allFilled = true;

    const formatInput = (method) => {
      console.log(method);
      const [value, correctly] = method;
      allFilled = correctly;
      return value;
    };

    const newErrors = {
      ...errors,
      subject: {
        isUnsaveable: formatInput(
          empty(reservationRequest.subject, allFilled)
        ),
        isEmpty: false,
      },
      totalStudents: {
        isEmpty: false,
      },
      motive: {
        isUnsaveable: formatInput(
          empty(reservationRequest.motiveRequest, allFilled)
        ),
        isEmpty: false,
      },
      date: {
        ...errors.date,
        isEmpty: false,
        isError: !formatInput(
          dateValidation(
            reservationRequest.dateReservation,
            allFilled
          )
        ),
      },
      iniPeriod: {
        ...errors.iniPeriod,
        isEmpty: false,
        isError: !formatInput(
          isValidRange(
            reservationRequest.periodIniSelected,
            reservationRequest.periodEndSelected,
            allFilled
          )
        ),
      },
      endPeriod: {
        ...errors.endPeriod,
        isEmpty: false,
        isError: !formatInput(
          isValidRange(
            reservationRequest.periodIniSelected,
            reservationRequest.periodEndSelected,
            allFilled
          )
        ),
      },
    };
    return [allFilled, newErrors];
  },

  validateOnSubmit: (reservationRequest, errors) => {
    let allFilled = true;
    const empty = (value) => {
      if (value === '') {
        allFilled = false;
        return true;
      } else {
        return false;
      }
    };
    const newErrors = {
      ...errors,
      subject: {
        isUnsaveable: false,
        isEmpty: empty(reservationRequest.subject),
      },
      mygroup: {
        isEmpty: empty(
          reservationRequest.myGroupList.length.toString()
        ),
      },
      totalStudents: {
        isEmpty: empty(reservationRequest.totalStudents),
      },
      motive: {
        isUnsaveable: false,
        isEmpty: empty(reservationRequest.motiveRequest),
      },
      date: {
        ...errors.date,
        isEmpty: empty(reservationRequest.dateReservation),
      },
      iniPeriod: {
        ...errors.iniPeriod,
        isEmpty: empty(reservationRequest.periodIniSelected),
      },
      endPeriod: {
        ...errors.endPeriod,
        isEmpty: empty(reservationRequest.periodEndSelected),
      },
    };
    return [allFilled, newErrors];
  },
};

export default DataValidation;
