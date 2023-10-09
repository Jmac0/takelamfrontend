import { useState, useEffect } from 'react';
import axios from 'axios';
import baseUrl from 'utils/urls';

function FetchContent(initialState: []) {
  const [state, setState] = useState<any>(initialState);
  const [index, setIndex] = useState<number>(0);

  // @ts-ignore
  useEffect(() => {
    async function getContent(): Promise<void> {
      await axios
        .get(`${baseUrl}/content`)
        .then((res) => {
          const {
            data: { content },
          } = res;
          setState(content);
        })
        .catch((err) => {
          throw new Error(err.message);
        });
    }

    getContent();
  }, [index]);
  return [state, setIndex];
}

export default FetchContent;
