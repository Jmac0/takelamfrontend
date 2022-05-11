// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import baseUrl from '../utils/urls';

interface RequestConfig {
  url: string;
  method: 'POST' | 'GET' | "PATCH";
  withCredentials: boolean;
  token?: string
}



function useHttp( requestConfig: RequestConfig

) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const sendRequest = async (body: {}) => {
    await axios({
      method: requestConfig.method ? requestConfig.method : 'GET',
      url: `${baseUrl}/${requestConfig.url}`,
      data: body,
      headers: {

        Authorization: `Bearer ${requestConfig.token || ''} `,
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
      withCredentials: requestConfig.withCredentials,
    })
      .then((response) => {
        setMessage(response.data.message);
        setLoading(false);
      })

      .catch((err) => {
        setMessage(err.response.data.message);
        setLoading(false);
      });
  };
  return { loading, setLoading, message, setMessage, sendRequest };
}

export default useHttp;
