import React, {useEffect, useState} from 'react';
import {MOTIVES} from '../services/Constant';
export default function useFilter({requestType}) {
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
        if (element.label === name) {
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
    console.log(newCheckedList);
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

  const findMotiveValue = (motive, checkedList) => {
    return checkedList.some((element) => {
      return element.label === motive ? element.checked : false;
    });
  };
  return [list, filteredList, checkedList, date, handleChangeMotive];
}
