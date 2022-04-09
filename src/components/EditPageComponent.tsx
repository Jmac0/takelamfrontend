import React, { useState } from 'react';
import { PageEditor, WYSIWYGForm } from '../styles/FormStyles';
import WYSIWYG from './WYSIWYG';
import { Button } from '../styles/Admin.Styles';
import ButtonLoader from './ButtonLoading';

interface Props {
  pageId: string;
  content: string;
  savePage: (_arg1: string, _arg3: any) => void;
  setEditing: (_arg: boolean) => void;
  setSuccess: (_arg: boolean) => void;
  loading: boolean;
  error: string;
}

function EditPageComponent({
  pageId,
  content,
  savePage,
  setEditing,
  loading,
  error,
}: Props) {
  const [body, setBody] = useState<string>('');
  const handleSave = (evt: any): void => {
    evt.preventDefault();
    savePage(pageId, body);
  };

  return (
    <PageEditor>
      <WYSIWYGForm onSubmit={handleSave}>
        <WYSIWYG content={content} setBody={setBody} />
		  {error}
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Button onClick={() => setEditing(false)}>CLOSE</Button>
          <div style={{ width: 'fit-content', height: '56px' }}>
            <ButtonLoader loading={loading}>Save</ButtonLoader>
          </div>
        </div>
      </WYSIWYGForm>
    </PageEditor>
  );
}

export default EditPageComponent;
