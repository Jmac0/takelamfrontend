import React, { useEffect, useState } from 'react';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import colors from '../styles/colors';

interface Props {
  content: string;
  setBody: (_text: string) => void;
}

function WYSIWYG({
  content,
	setBody
}: Props) {
  const [editorState, setEditorState] = useState<EditorState>(() =>
    EditorState.createEmpty(),
  );
  //

  /* will run only when edit button is clicked and
	 mounts this component */
  useEffect(() => {
    setBody(content);
    /// ////////// Convert html string to draft js //
    const contentBlock = htmlToDraft(content);
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks,
    );
    const eDitorState = EditorState.createWithContent(contentState);
    setEditorState(eDitorState);
  }, []);

  /* Options for text editor pasted from
	 react-draft-js website */
  return (
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
        wrapperStyle={{ backgroundColor: 'transparent' }}
        editorStyle={{
          padding: '.5rem',
          minHeight: '400px',
          backgroundColor: 'white',
          borderColor: `${colors.blue}`,
          borderRadius: '5px',
          borderStyle: 'solid',
        }}
        toolbarStyle={{
          backgroundColor: `${colors.blue}`,
          borderColor: 'black',
          borderStyle: 'solid',
        }}
      />

  );
}


export default WYSIWYG;
