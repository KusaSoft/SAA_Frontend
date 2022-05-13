import React, {useEffect, useState} from 'react';
import {MOTIVES} from '../services/Constant';
export default function useFilter({requestType}) {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [checkedList, setCheckedList] = useState([
    ...MOTIVES.map((element) => {
      return {
        label: element,
        checked: false,
      };
    }),
  ]);
  const [date_registration, setDateRegistration] = useState([
    {
      label: 'Antiguos',
      value: false,
    },
    {
      label: 'Nuevos',
      value: false,
    },
  ]);
  const [date_reservation, setDateReservation] = useState([
    {
      label: 'Antiguos',
      value: false,
    },
    {
      label: 'Nuevos',
      value: false,
    },
  ]);

  const fetchList = async () => {
    const data = await requestType();
    setList(data);
    setFilteredList(data);
  };

  useEffect(() => {
    fetchList();
  }, []);
  const handleChangeMotive = (event) => {
    const {checked, value} = event.target;
    let newCheckedList = checkedList;
    if (value !== 'Todos') {
      newCheckedList = checkedList.map((element) => {
        if (element.label === value) {
          element.checked = checked;
        }
        return element;
      });
    } else {
      newCheckedList = checkedList.map((element) => {
        return {
          label: element,
          checked: checked,
        };
      });
    }
    setCheckedList(newCheckedList);
    setFilteredList(
      list.filter((element) => {
        return newCheckedList.some((element2) => {
          return element2.checked && element.motive === element2.label;
        });
      })
    );
  };

  const findMotiveValue = (motive, checkedList) => {
    return checkedList.some((element) => {
      return element.label === motive ? element.checked : false;
    });
  };
  return [
    list,
    filteredList,
    checkedList,
    date_registration,
    date_reservation,
    handleChangeMotive,
  ];
}
