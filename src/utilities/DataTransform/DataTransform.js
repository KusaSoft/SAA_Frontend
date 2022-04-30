const DataTransform = {
  getOriginalTeachersList: (teachersSelected, originalTeachersList) => {
    let teachersList = [];
    const teachersOriginal = [...originalTeachersList.values()];
    console.log(teachersSelected, "teachersSelected");
    console.log(teachersOriginal, "teachersOriginal");
    teachersSelected.map((teacher) => {
      teachersOriginal.map((teacherOriginal) => {
        teacherOriginal.map((teacherO) => {
          if (teacher === `G${teacherO.id} ${teacherO.name}`) {
            teachersList.push(teacherO.id);
          }
        });
      });
    });
    console.log(teachersList, "GOOOOOOOOOOOO");
    return teachersList;
  },

  getOriginalMyGroupList: (myGroupList, originalMyGroupList) => {
    let myGroupListOriginal = [];
    const myGroupListOriginal2 = [...originalMyGroupList.values()];
    myGroupList.map((group) => {
      myGroupListOriginal2.map((groupOriginal) => {
        groupOriginal.map((groupO) => {
          if (group === `G${groupO.id} ${groupO.name}`) {
            myGroupListOriginal.push(groupO.id);
          }
        });
      });
    });
    return myGroupListOriginal;


  }


};

export default DataTransform;
