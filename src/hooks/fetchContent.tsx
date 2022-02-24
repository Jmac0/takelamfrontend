import { useState, useEffect } from 'react';
import axios from 'axios';

/*
interface Content {
    data: {
    content?: {}
        text?: any

    }
}
*/

function FetchContent() {
  const [state, setState] = useState<any>([]);

  // @ts-ignore
  useEffect(() => {
    async function getContent(): Promise<void> {
      const response = await axios.get(
        'http://localhost:8000/api/v1/content',
      );

      const { data: { content } } = response;

      setState(content);
    }

    getContent();
  }, []);
  return [state, setState];
}

export default FetchContent;
