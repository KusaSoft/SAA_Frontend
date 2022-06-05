import {invalidDates, PERIODSRANGE} from '../../services/Constant';
const DataTransform = {
  getOriginalTeachersList: (teachersSelected, originalTeachersList) => {
    let teachersList = [];
    const teachersOriginal = [...originalTeachersList.values()];
    teachersSelected.map((teacher) => {
      teachersOriginal.map((teacherOriginal) => {
        teacherOriginal.map((teacherO) => {
          if (teacher === `G${teacherO.group} ${teacherO.name}`) {
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
      if (!classroomsGroupByEdifice.has(classroom.edifice)) {
        classroomsGroupByEdifice.set(classroom.edifice, []);
      }
      classroomsGroupByEdifice.get(classroom.edifice).push(classroom);
    });
    return classroomsGroupByEdifice;
  },
  getClassroomsGroupByFloor: (classrooms) => {
    

  }
};

export default DataTransform;
