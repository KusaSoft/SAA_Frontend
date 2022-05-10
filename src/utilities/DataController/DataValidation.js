import {invalidDates} from '../../services/Constant';
const DataTransform = {
  getOriginalTeachersList: (
    teachersSelected,
    originalTeachersList
  ) => {
    let teachersList = [];
    const teachersOriginal = [...originalTeachersList.values()];
    teachersSelected.map((teacher) => {
      teachersOriginal.map((teacherOriginal) => {
        teacherOriginal.map((teacherO) => {
          if (teacher === `G${teacherO.id} ${teacherO.name}`) {
            teachersList.push(teacherO.id);
          }
        });
      });
    });
    return teachersList;
  },

  getMyOriginalGroup: (
    teachersSelected,
    originalTeachersList
  ) => {
    let teachersList = [];
    const teachersOriginal = [...originalTeachersList.values()];
    teachersSelected.map((teacher) => {
      teachersOriginal.map((teacherOriginal) => {
        teacherOriginal.map((teacherO) => {
          if (teacher === `G${teacherO.id}`) {
            teachersList.push(teacherO.id);
          }
        });
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
              `G${specificGroup.id} ${specificGroup.name}`
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
            groupListId.push(`G${specificGroup.id}`);
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
};

export default DataTransform;
