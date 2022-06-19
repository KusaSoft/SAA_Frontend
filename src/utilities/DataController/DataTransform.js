import {invalidDates, PERIODSRANGE} from '../../services/Constant';
const DataTransform = {
  getOriginalTeachersList: (
    teachersSelected,
    originalTeachersList,
    subjectSelected
  ) => {
    let teachersList = [];
    const teachersOriginal = [...originalTeachersList.values()];
    teachersSelected.map((teacher) => {
      teachersOriginal.map((teacherOriginal) => {
        teacherOriginal.map((teacherO) => {
          if (
            teacher === `G${teacherO.group} ${teacherO.name}` &&
            teacherO.subject === subjectSelected
          ) {
            teachersList.push(teacherO.id);
          }
        });
      });
    });
    return teachersList;
  },
  getMyOriginalGroup: (
    teachersSelected,
    originalTeachersList,
    subject
  ) => {
    let teachersList = [];
    originalTeachersList.get(subject).map((teacher) => {
      teachersSelected.map((teacherSelected) => {
        if (teacherSelected === `G${teacher.group}`) {
          teachersList.push(teacher.id);
        }
      });
    });
    return teachersList;
  },

  getGroupsById: (idList, groupList) => {
    let groupListId = [];
    const newIdList = idList.split(' ');
    newIdList.map((id) => {
      [...groupList.values()].map((group) => {
        group.map((specificGroup) => {
          if (id == specificGroup.id) {
            groupListId.push(
              `G${specificGroup.group} ${specificGroup.name}`
            );
          }
        });
      });
    });
    return groupListId;
  },

  getMyGroupById: (idList, groupList) => {
    let groupListId = [];
    const newIdList = idList.split(' ');
    newIdList.map((id) => {
      [...groupList.values()].map((group) => {
        group.map((specificGroup) => {
          if (id == specificGroup.id) {
            groupListId.push(`G${specificGroup.group}`);
          }
        });
      });
    });
    return groupListId;
  },

  castStringToSrray: (list) => {
    return list.split(' ');
  },

  isEnabledDate: (date) => {
    let enabled = true;
    if (date.getDay() === 0) {
      enabled = false;
    }
    return enabled;
  },

  stringToList: (e) => {
    const {
      target: {value},
    } = e;
    return typeof value === 'string' ? value.split(',') : value;
  },

  getQuantityPeriod: (periodIni, periodEnd) => {
    const period =
      PERIODSRANGE.indexOf(periodEnd) - PERIODSRANGE.indexOf(periodIni);
    return period;
  },

  getClassroomsGroupByEdifice: (classrooms) => {
    let classroomsGroupByEdifice = new Map();
    classrooms.map((classroom) => {
      if (!classroomsGroupByEdifice.has(classroom.building)) {
        classroomsGroupByEdifice.set(classroom.building, []);
      }
      classroomsGroupByEdifice.get(classroom.building).push(classroom);
    });
    return classroomsGroupByEdifice;
  },
  isValidCapacity: (listClassrooms, capacity) => {
    let quantity = 0;
    listClassrooms.map((classroom) => {
      quantity += classroom.amount;
    });
    return quantity >= capacity;
  },
  getCapacity: (listClassrooms) => {
    let quantity = 0;
    listClassrooms.map((classroom) => {
      quantity += classroom.amount;
    });
    return quantity;
  },
};

export default DataTransform;
