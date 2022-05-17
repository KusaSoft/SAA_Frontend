import React, {useState} from 'react';

export const useRegister = () => {
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });
  const handleRegister = (e, newValue, nameValue) => {
    e.preventDefault();
    const newUserForm = {
      ...newUser,
      [nameValue]: newValue,
    };

    setNewUser({
      ...newUserForm,
    });
    console.log(newUserForm);
  };
  return [newUser, handleRegister];
};
