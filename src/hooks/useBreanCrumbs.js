import React, {useEffect, useState} from 'react';

export default function useBreadBrumbs(initialValue) {
  const [path, setPath] = useState([]);

  useEffect(() => {
    const {pathname} = window.location;
    pathname.split('/').map((item, index) => {
      if (item !== '') {
        setPath((prevState) => [
          ...prevState,
          {
            name: item,
            route: `${pathname
              .split('/')
              .slice(0, index + 1)
              .join('/')}`,
            link: true,
          },
        ]);
      }
    });
  }, []);

  return [path];
}
