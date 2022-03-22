import { useState, useEffect } from 'react';
import axios from 'axios';
import { Property } from '../interfaces';


function fetchProperties(initialState: []) {
  const [propertyData, setPropertyData] = useState<any>(initialState);
  const [propertyIndex, setPropertyIndex] = useState<number>(0);
  console.log(`CALLED: ${  propertyIndex}`)

  // @ts-ignore
  useEffect(() => {
    async function getProperties(): Promise<void> {
      await axios
        .get('http://localhost:8000/api/v1/properties')
        .then((res) => {
          const {
            data: { properties },
          } = res;
          setPropertyData(properties);
        })
        .catch((err) => {
          console.log(`${err} The connection has been refused 😭`);
        });
    }

    getProperties();
  }, [propertyIndex]);
  return [propertyData, setPropertyIndex];
}


export { fetchProperties };
