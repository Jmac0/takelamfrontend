import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseUrl from 'utils/urls';
import { Button } from '../styles/Admin.Styles';
import useAuth from './auth/useAuth';
import ButtonLoading from './ButtonLoading';

interface Props {
  id: string;
}

function CreatePropertyLink({ id }: Props) {
  const {
    user: { token },
  } = useAuth();
  const [clientLink, setClientLink] = useState('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const createLink = async (evt: any) => {
    evt.preventDefault();
    setLoading(true);
    await axios
      .get(`${baseUrl}/link/${id}`, {
        withCredentials: true,

        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const {
          data: { link },
        } = response;
        setTimeout(() => {
          setLoading(false);

          setClientLink(() => link);
        }, 1000);
      });
  };

  useEffect(() => {
    setClientLink('');
  }, []);

  function copyToClipboard(newLink: string) {
    navigator.clipboard
      .writeText(newLink)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          setClientLink('');
        }, 1500);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {clientLink === '' ? (
        <form onSubmit={createLink}>
          <ButtonLoading loading={loading}>Create Link</ButtonLoading>
        </form>
      ) : (
        /*
        <Button className="create-btn" onClick={createLink}>
          Create Link
        </Button>
*/
        <Button
          className="create-btn"
          onClick={() => copyToClipboard(clientLink)}
        >
          {copied ? 'COPIED' : 'COPY LINK'}
        </Button>
      )}
    </>
  );
}

export default CreatePropertyLink;
