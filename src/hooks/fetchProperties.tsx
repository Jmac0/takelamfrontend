import { useState, useEffect } from 'react';
import axios from 'axios';
import baseUrl from 'utils/urls';

export default function fetchProperties(initialState: [], token = '') {
  const [propertyData, setPropertyData] = useState<any>(initialState);
  const [propertyIndex, setPropertyIndex] = useState<number>(0);

  // @ts-ignore
  useEffect(() => {
    async function getProperties(): Promise<void> {
      await axios
        .get(`${baseUrl}/properties`, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          const {
            data: { properties },
          } = res;
          setPropertyData(properties);
        })
        .catch((err) => {
          throw new Error(err.message);
        });
    }

    getProperties();
  }, [propertyIndex]);
  return [propertyData, setPropertyIndex];
}
