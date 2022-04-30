const DataTransform = {
  getOriginalTeachersList: (teachersSelected, originalTeachersList) => {
    let teachersList = [];
    const teachersOriginal = [...originalTeachersList.values()];
    // console.log(teachersSelected, "teachersSelected");
    // console.log(teachersOriginal, "teachersOriginal");
    teachersSelected.map((teacher) => {
      teachersOriginal.map((teacherOriginal) => {
        teacherOriginal.map((teacherO) => {
          if (teacher === `G${teacherO.id} ${teacherO.name}`) {
            teachersList.push(teacherO.id);
          }
        });
      });
    });
    // console.log(teachersList, "GOOOOOOOOOOOO");
    return teachersList;
  },


};

export default DataTransform;
