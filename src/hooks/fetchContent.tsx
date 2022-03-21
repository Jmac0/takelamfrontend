import { useState, useEffect } from 'react';
import axios from 'axios';

function FetchContent(initialState: []) {
  const [state, setState] = useState<any>(initialState);
  const [index, setIndex] = useState<number>(0);

  // @ts-ignore
  useEffect(() => {
    async function getContent(): Promise<void> {
      await axios
        .get('http://localhost:8000/api/v1/content')
        .then((res) => {
          const {
            data: { content },
          } = res;
          setState(content);
        })
        .catch((err) => {
          console.log(`${err} The connection has been refused 😭`);
        });
    }

    getContent();
  }, [index]);
  return [state, setIndex];
}

export default FetchContent;
