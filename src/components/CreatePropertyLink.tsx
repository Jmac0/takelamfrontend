import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '../styles/Admin.Styles';

interface Props {
  id: string;
}

function CreatePropertyLink({ id }: Props) {
  const [clientLink, setClientLink] = useState('');
  const [copied, setCopied] = useState(false);
  const createLink = async () => {
    await axios
      .get(`http://localhost:8000/api/v1/link/${id}`)
      .then((response) => {
        const {
          data: { link },
        } = response;
        setClientLink(() => link);
      });
  };
  function copyToClipboard(newLink: string) {
    navigator.clipboard
      .writeText(newLink)
      .then((res) => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          setClientLink('');
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  console.log(clientLink);
  return (
    <div>
      {clientLink === '' ? (
        <Button onClick={createLink}>Create Link</Button>
      ) : (
        <Button onClick={() => copyToClipboard(clientLink)}>
          {copied ? 'COPIED' : 'Click to Copy'}
        </Button>
      )}
    </div>
  );
}

export default CreatePropertyLink;
