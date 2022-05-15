import React, {useEffect, useState} from 'react';
import {MOTIVES} from '../services/Constant';
export default function useFilter({requestType, dateType}) {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [checkedList, setCheckedList] = useState([
    ...MOTIVES.map((element) => {
      return {
        label: element,
        checked: true,
      };
    }),
  ]);
  const [date, setDate] = useState([
    {
      label: 'Antiguos',
      value: true,
    },
    {
      label: 'Nuevos',
      value: false,
    },
  ]);

  const fetchList = async () => {
    const data = await requestType();
    if (dateType === 'register_date') {
      data.sort((a, b) => {
        return new Date(a.register_date) - new Date(b.register_date);
      });
    } else {
      data.sort((a, b) => {
        return new Date(a.reservation_date) - new Date(b.reservation_date);
      });
    }
    data.reverse();
    setList(data);
    setFilteredList(data);
  };

  useEffect(() => {
    fetchList();
  }, []);
  const handleChangeMotive = (event) => {
    const {checked, value, name} = event.target;
    console.log(checked, value, name);
    let newCheckedList = checkedList;
    if (name !== 'Todos') {
      newCheckedList = checkedList.map((element) => {
        if (name !== 'Otros') {
          if (element.label === name) {
            element.checked = checked;
          }
        } else {
          element.checked = checked;
        }
        return element;
      });
    } else {
      newCheckedList = checkedList.map((element) => {
        return {
          label: element.label,
          checked: checked,
        };
      });
    }
    setCheckedList(newCheckedList);
    setFilteredList(
      list.filter((element) => {
        return newCheckedList.some((element2) => {
          return (
            element2.checked && element.request_reason === element2.label
          );
        });
      })
    );
  };

  const handleChangeDateByRegister = (event) => {
    const {value, name} = event.target;
    const newFilteredList = filteredList;
    newFilteredList.sort(
      (a, b) => new Date(a.register_date) - new Date(b.register_date)
    );

    if (value === 'Antiguos') {
      setFilteredList([...newFilteredList]);
    } else {
      newFilteredList.reverse();
      setFilteredList([...newFilteredList]);
    }
  };
  const handleChangeDateByReservation = (event) => {
    const {value, name} = event.target;
    const newFilteredList = filteredList;
    newFilteredList.sort(
      (a, b) => new Date(a.reservation_date) - new Date(b.reservation_date)
    );

    if (value === 'Antiguos') {
      setFilteredList([...newFilteredList]);
    } else {
      newFilteredList.reverse();
      setFilteredList([...newFilteredList]);
    }
  };

  return [
    list,
    filteredList,
    checkedList,
    date,
    handleChangeMotive,
    handleChangeDateByRegister,
    handleChangeDateByReservation,
  ];
}
