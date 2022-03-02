import { useState, useEffect } from 'react';
import axios from 'axios';

function FetchContent() {
  const [state, setState] = useState<any>([]);

  // @ts-ignore
  useEffect(() => {
    async function getContent(): Promise<void> {
      await axios.get(
        'http://localhost:8000/api/v1/content',
      ).then((res) => {
        const { data: { content } } = res;
        setState(content);
      }).catch((err) => {
        console.log(`${err} The connection has been refused 😭`);
      });
    }

    getContent();
  }, []);
  return [state, setState];
}

export default FetchContent;
