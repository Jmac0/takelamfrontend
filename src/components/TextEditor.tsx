import React, { useEffect, useState } from 'react';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

interface Props {
  pageContent: string;
}

function TextEditor({ pageContent
}: Props) {
  const [editorState, setEditorState] = useState<EditorState>(() => EditorState.createEmpty());
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');

  /* will run only when edit button is clicked and
   mounts this component */
  useEffect(() => {
    setBody(pageContent);
    /// ////////// Convert html string to draft js //
    const contentBlock = htmlToDraft(pageContent);
    const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
    const eDitorState = EditorState.createWithContent(contentState);

    setEditorState(eDitorState);

    // only loads if page id changes
  }, []);

  const handleSave = (evt: any): void => {
    evt.preventDefault();
  };
  /* Options for text editor pasted from
 react-draft-js website */
  return (
    <div style={{ top: '50%', left: '50%', width: '50%' }}>
      <form>
        <label htmlFor="title">
          Title
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(evt) => {
              setTitle(evt.target.value);
            }}
          />
        </label>
        <Editor
          toolbar={{
            options: [
              'inline',
              'blockType',
              'fontSize',
              'fontFamily',
              'list',
              'textAlign',
              'colorPicker',
              'link',
              'embedded',
              'emoji',
              'image',
              'remove',
              'history',
            ],
          }}
          editorState={editorState}
          onEditorStateChange={(newState) => {
            setEditorState(newState);
            setBody(draftToHtml(convertToRaw(newState.getCurrentContent())));
          }}
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          wrapperStyle={{ backgroundColor: 'hotpink' }}
          editorStyle={{
            backgroundColor: 'lightgray',
            borderColor: 'black',
            borderStyle: 'solid',
          }}
          toolbarStyle={{
            backgroundColor: 'lightgray',
            borderColor: 'black',
            borderStyle: 'solid',
          }}
        />
      </form>
      <button style={{ height: '50px', width: '50%', backgroundColor: 'darkcyan' }} type="submit" onClick={handleSave}>Save </button>
    </div>
  );
}

export default TextEditor;
