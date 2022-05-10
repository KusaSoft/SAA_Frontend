import {invalidDates} from '../../services/Constant';
const DataValidation = {
  validateStringField: () => {},
  validateArrayField: () => {},
  validateOnSubmit: (reservationRequest, errors) => {
    const newErrors = {
      ...errors,
      subject: {
        isEmpty: reservationRequest.subjectSelected === '',
        ...errors.subject,
      },
      mygroup: {
        isEmpty: reservationRequest.myGroupList.length === 0,
      },
      totalStudents: {
        isEmpty: reservationRequest.totalStudents === '',
      },
      motive: {
        isEmpty: reservationRequest.motiveRequest === '',
        ...errors.motive,
      },
      date: {
        isEmpty: reservationRequest.dateSelected === '',
        ...errors.date,
      },
      iniPeriod: {
        isEmpty: reservationRequest.periodIniSelected === '',
        ...errors.iniPeriod,
      },
      endPeriod: {
        isEmpty: reservationRequest.periodEndSelected === '',
        ...errors.endPeriod,
      },
    };
    let allFilled = true;
    errors.map((error) => {
      if (error.isEmpty) {
        allFilled = false;
      }
    });
    return [allFilled, newErrors];
  },
};

export default DataValidation;
