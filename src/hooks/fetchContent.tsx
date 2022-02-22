import { useState, useEffect } from 'react';
import axios from 'axios';

interface Content {
    data: {
    content?: [text: {}]
        text?: any

    }
}

function FetchContent() {
  const [state, setState] = useState<any>({});

  // @ts-ignore
  useEffect(() => {
    async function getContent(): Promise<void> {
      const response = await axios.get(
        'http://localhost:8000/api/v1/content',
      );

      // @ts-ignore
      const { data: { content: [text] } }: Content = response;

      setState(text);
    }

    getContent();
  }, [state.aboutTitle]);
  return [state, setState];
}

export default FetchContent;
