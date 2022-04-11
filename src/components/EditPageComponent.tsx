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
  pageTitle: string;
  setSuccess: (_arg: boolean) => void;
  loading: boolean;
  error: string;
}

function EditPageComponent({
  pageId,
  pageTitle,
  content,
  savePage,
  setEditing,
  loading,
  error,
}: Props) {
	// holds the editor text content
  const [richTextContent, setRichTextContent] = useState<string>('');
  const handleSave = (evt: any): void => {
    evt.preventDefault();
	// call to http request
    savePage(pageId, richTextContent);
  };

  return (
    <PageEditor>
      <h1>{pageTitle}</h1>
      <WYSIWYGForm onSubmit={handleSave}>
        <WYSIWYG content={content} setRichTextContent={setRichTextContent} />
        {error}
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Button type="button" onClick={() => setEditing(false)}>CLOSE</Button>
          <div style={{ width: 'fit-content', height: '56px' }}>
            <ButtonLoader loading={loading}>Save</ButtonLoader>
          </div>
        </div>
      </WYSIWYGForm>
	</PageEditor>
  );
}

export default EditPageComponent;
