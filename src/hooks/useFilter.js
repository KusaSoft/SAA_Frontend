import React, {useEffect, useState} from 'react';
import {MOTIVES, ORDER_DATE} from '../services/Constant';
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
      label: ORDER_DATE.PROXIMOS,
      value: true,
    },
    {
      label: ORDER_DATE.LEJANOS,
      value: false,
    },
  ]);
  const [loading, setLoading] = useState(false);

  const fetchList = async () => {
    setLoading(true);
    const data = await requestType();
    if (dateType === ORDER_DATE.LEJANOS) {
      data.sort((a, b) => {
        return new Date(a.register_date) - new Date(b.register_date);
      });
      setDate([
        {
          label: ORDER_DATE.PROXIMOS,
          value: false,
        },
        {
          label: ORDER_DATE.LEJANOS,
          value: true,
        },
      ]);
    } else {
      data.sort((a, b) => {
        return new Date(a.reservation_date) - new Date(b.reservation_date);
      });
      setDate([
        {
          label: ORDER_DATE.PROXIMOS,
          value: true,
        },
        {
          label: ORDER_DATE.LEJANOS,
          value: false,
        },
      ]);
      data.reverse();
    }
    setList(data);
    setFilteredList(data);
    setLoading(false);
  };

  const updateFilteredList = (data) => {
    let newDataF = [...data];
    let newData = newDataF.filter((element) => {
      return checkedList.find((item) => {
        return item.checked && item.label === element.request_reason;
      });
    });
    if (dateType === ORDER_DATE.LEJANOS) {
      newData = newData.sort((a, b) => {
        return new Date(a.register_date) - new Date(b.register_date);
      });
      if (date[0].value) {
        setFilteredList([...newData.reverse()]);
      } else {
        setFilteredList([...newData]);
      }
    } else {
      newData = newData.sort((a, b) => {
        return new Date(a.reservation_date) - new Date(b.reservation_date);
      });
      if (date[1].value) {
        setFilteredList(newData);
      } else {
        setFilteredList([...newData.reverse()]);
      }
    }
  };
  const fetchListUpdate = async () => {
    const data = await requestType();
    updateFilteredList(data);
    setList(data);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      fetchListUpdate();
    }, 6500);
    return () => clearInterval(timer);
  });

  useEffect(() => {
    fetchList();
  }, []);
  const handleChangeMotive = (event) => {
    const {checked, value, name} = event.target;
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
    setCheckedList(newCheckedList);
    setFilteredList(
      list.filter((element) => {
        return newCheckedList.some((element2) => {
          const res =
            element2.checked === true
              ? element.request_reason === element2.label
                ? true
                : element2.label === 'Otros' &&
                  !MOTIVES.includes(element.request_reason)
              : false;
          return res;
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

    if (value === ORDER_DATE.LEJANOS) {
      setFilteredList([...newFilteredList]);
      setDate([
        {
          label: ORDER_DATE.PROXIMOS,
          value: false,
        },
        {
          label: ORDER_DATE.LEJANOS,
          value: true,
        },
      ]);
    } else {
      newFilteredList.reverse();
      setFilteredList([...newFilteredList]);
      setDate([
        {
          label: ORDER_DATE.PROXIMOS,
          value: true,
        },
        {
          label: ORDER_DATE.LEJANOS,
          value: false,
        },
      ]);
    }
  };
  const handleChangeDateByReservation = (event) => {
    const {value, name} = event.target;
    const newFilteredList = filteredList;
    newFilteredList.sort(
      (a, b) => new Date(a.reservation_date) - new Date(b.reservation_date)
    );

    if (value === ORDER_DATE.PROXIMOS) {
      setFilteredList([...newFilteredList]);
      setDate([
        {
          label: ORDER_DATE.PROXIMOS,
          value: true,
        },
        {
          label: ORDER_DATE.LEJANOS,
          value: false,
        },
      ]);
    } else {
      newFilteredList.reverse();
      setFilteredList([...newFilteredList]);
      setDate([
        {
          label: ORDER_DATE.PROXIMOS,
          value: false,
        },
        {
          label: ORDER_DATE.LEJANOS,
          value: true,
        },
      ]);
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
    loading,
  ];
}
