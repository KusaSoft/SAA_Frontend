import {useState, useEffect} from 'react';
import apiSettings from '../services/service';
import DateController from '../utilities/DateController';
import DataTransform from '../utilities/DataController/DataTransform';
import DataValidation from '../utilities/DataController/DataValidation';
import {STATUS, ERRORFORM} from '../services/Constant';

export const useReservationRequest = ({request, user}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [subjectList, setSubjectList] = useState(new Map());
  const [teachers, setTeachers] = useState(new Map());
  const [fillForm, setFillForm] = useState(false);
  const [reservationRequest, setReservationRequest] = useState({
    teacher: user.user,
    subject: '',
    myGroupList: [],
    otherGroupList: [],
    periodIniSelected: '',
    periodEndSelected: '',
    motiveRequest: '',
    totalStudents: '',
    dateReservation: DateController.getToday(),
    status:
      request !== 'new' && request !== undefined
        ? STATUS.DRAFT
        : STATUS.SENT,
  });
  const [errors, setErrors] = useState(ERRORFORM);

  const fetchDataTeachers = async () => {
    const responseF = await apiSettings.getSubjects(user.id);
    const subjectListMapF = new Map();
    responseF.map((subject) => {
      subjectListMapF.set(
        subject.name_subject,
        subject.group_list
      );
    });
    setSubjectList(subjectListMapF);
    const response = await apiSettings.getTeachers(user.id);
    const subjectListMap = new Map();
    response.map((subject) => {
      if (subjectListMap.has(subject.name_subject)) {
        console.log(subject.group_list, 'subject');
        if (
          !subjectListMap
            .get(subject.name_subject)
            .some((group) => group.id === subject.group_list.id)
        ) {
          subjectListMap.set(subject.name_subject, [
            ...subjectListMap.get(subject.name_subject),
            subject.group_list,
          ]);
        }
      } else {
        subjectListMap.set(subject.name_subject, [
          subject.group_list,
        ]);
      }
    });
    setTeachers(subjectListMap);
    if (request !== 'new' && request !== null) {
      const response = await apiSettings.getReservationRequest(
        request
      );
      console.log(
        response,
        'reservation request',
        subjectListMap,
        subjectListMapF
      );
      setReservationRequest({
        teacher: user.user,
        subject:
          response.subject !== null ? response.subject : '',
        myGroupList:
          response.group_list !== ''
            ? [
                ...DataTransform.getMyGroupById(
                  response.group_list,
                  subjectListMapF
                ),
              ]
            : [],
        otherGroupList:
          response.other_groups !== ''
            ? [
                ...DataTransform.getGroupsById(
                  response.other_groups,
                  subjectListMap
                ),
              ]
            : [],
        periodIniSelected:
          response.horario_ini !== null
            ? response.horario_ini
            : '',
        periodEndSelected:
          response.horario_end !== null
            ? response.horario_end
            : '',
        motiveRequest:
          response.request_reason !== null
            ? response.request_reason
            : '',
        totalStudents:
          response.total_students !== null
            ? response.total_students
            : '',
        dateReservation: response.reservation_date
          ? response.reservation_date
          : DateController.getToday(),
        status: STATUS.DRAFT,
      });
      console.log(
        response.reservation_date,
        'reservation request'
      );
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchDataTeachers();
  }, []);

  const validate = () => {
    return true;
  };
  useEffect(() => {
    validate();
  }, [reservationRequest]);

  const getReservationRequest = (state) => {
    return {
      id: parseInt(request !== 'new' ? request : ''),
      name: reservationRequest.teacher.name,
      subject: reservationRequest.subject,
      group_list: reservationRequest.myGroupList,
      total_students: reservationRequest.totalStudents,
      horario_ini: reservationRequest.periodIniSelected,
      horario_end: reservationRequest.periodEndSelected,
      request_reason: reservationRequest.motiveRequest,
      reservation_date: reservationRequest.dateReservation,
      other_group_list: reservationRequest.otherGroupList,
      state: state,
    };
  };

  const handleReservationRequest = (e, newValue, nameValue) => {
    e.preventDefault();
    setReservationRequest({
      ...reservationRequest,
      [nameValue]: newValue,
    });
  };

  //   const handleChangeSubject = (e) => {
  //     setSubjectSelected(e.target.value);
  //     setGroupList([]);
  //     setOtherGroupList([]);
  //   };

  //   const handleDeleteTeachersSelected = (e) => {
  //     setOtherGroupList(
  //       otherGroupList.filter((item) => item !== e)
  //     );
  //   };

  const deleteElementFromMyGroup = (e) => {
    // setReservationRequest({
    //   ...reservationRequest,
    //   [element.name]: element.value,
    // });
    // setGroupList(myGroupList.filter((item) => item !== e));
  };

  const validateAllFilled = () => {
    const [filled, newError] = DataValidation.validateOnSubmit(
      reservationRequest,
      errors
    );
    setErrors(newError);
    return filled;
  };

  const validateSaveFilled = () => {
    const [filled, newError] = DataValidation.validateOnSave(
      reservationRequest,
      errors
    );
    setErrors(newError);
    return filled;
  };

  return {
    subjectList,
    teachers,
    reservationRequest,
    isLoading,
    errors,
    handleReservationRequest,
    deleteElementFromMyGroup,
    validateAllFilled,
    validateSaveFilled,
  };
};
