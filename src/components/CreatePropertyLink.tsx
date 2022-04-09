import React, {useEffect, useState} from 'react';
import axios from 'axios';
import baseUrl from 'utils/urls';
import { Button } from '../styles/Admin.Styles';

interface Props {
  id: string;
}

function CreatePropertyLink({ id }: Props) {
  const [clientLink, setClientLink] = useState('');
  const [copied, setCopied] = useState(false);
  const createLink = async () => {
    await axios
      .get(`${baseUrl}/link/${id}`)
      .then((response) => {
        const {
          data: { link },
        } = response;
        setClientLink(() => link);
      });
  };


  useEffect(() => {
    setClientLink('')
  }, [])



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

  return (
      // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {clientLink === '' ? (
        <Button className="create-btn" onClick={createLink}>Create Link</Button>
      ) : (
        <Button className="create-btn" onClick={() => copyToClipboard(clientLink)}>
          {copied ? 'COPIED' : 'COPY LINK'}
        </Button>
      )}
    </>
  );
}

export default CreatePropertyLink;
