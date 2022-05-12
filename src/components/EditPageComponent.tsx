import React, { useEffect, useState } from 'react';
import { PageEditor, WYSIWYGForm } from '../styles/FormStyles';
import WYSIWYG from './WYSIWYG';
import { Button } from '../styles/Admin.Styles';
import ButtonLoader from './ButtonLoading';
import UserMessage from './UserMessage';
import { UserMessageInterface } from '../utils/interfaces';
import { initialUserMessageState } from '../utils/initialStates';

interface Props {
  pageId: string;
  content: string;
  savePage: (_arg1: string, _arg3: any) => void;
  setEditing: (_arg: boolean) => void;
  setMessage: (_arg:UserMessageInterface) => void;
  pageTitle: string;
  message: UserMessageInterface;
  loading: boolean;
}

function EditPageComponent({
  pageId,
  pageTitle,
  content,
  savePage,
  setEditing,
  loading,
  message,
  setMessage,
}: Props) {
  // holds the editor text content
  const [richTextContent, setRichTextContent] = useState<string>('');
  const handleSave = (evt: any): void => {
    evt.preventDefault();
    // call to http request
    savePage(pageId, richTextContent);
  };
useEffect(() => {
  setMessage(initialUserMessageState)
},[])
  return (
    <PageEditor>
      <h1>{pageTitle}</h1>
      <WYSIWYGForm onSubmit={handleSave}>
        <WYSIWYG content={content} setRichTextContent={setRichTextContent} />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ width: 'fit-content', height: '56px' }}>
            <ButtonLoader loading={loading}>Save</ButtonLoader>
          </div>
          <Button type="button" onClick={() => setEditing(false)}>
            CLOSE
          </Button>
        </div>
      </WYSIWYGForm>
        <UserMessage
          isErrorMessage={message.isErrorMessage}
          message={message.message}
          showUserMessage={message.showUserMessage}
        />
    </PageEditor>
  );
}

export default EditPageComponent;
