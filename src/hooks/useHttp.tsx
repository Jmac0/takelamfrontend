// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import baseUrl from '../utils/urls';
import { initialUserMessageState } from '../utils/initialStates';
import { UserMessageInterface } from '../utils/interfaces';

interface RequestConfig {
  url: string;
  method: 'POST' | 'GET' | 'PATCH';
  withCredentials: boolean;
  token?: string;
}

function useHttp(requestConfig: RequestConfig) {
  // loading state for button
  const [loading, setLoading] = useState(false);
  // state for user message component
  const [message, setMessage] = useState<UserMessageInterface>(
    initialUserMessageState,
  );
  // function returned from this hook
  const sendRequest = async (body:any = null, callback: any = null) => {
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
        // set message info
        setMessage({
          isErrorMessage: false,
          showUserMessage: true,
          message: response.data.message,
        });
        setLoading(false);
        // callback from hook call
        if (callback) callback(response.data);
      })

      .catch((err) => {
        setMessage({
          isErrorMessage: true,
          showUserMessage: true,
          message: err.response.data.message,
        });
        setLoading(false);
      });
  };
  return { loading, setLoading, message, setMessage, sendRequest };
}

export default useHttp;
