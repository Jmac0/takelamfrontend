import React, { useEffect, useState } from 'react';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import colors from '../styles/colors';

interface Props {
  content: string;
  setRichTextContent: (_text: string) => void;
  // eslint-disable-next-line react/require-default-props
}

function WYSIWYG({ content = '', setRichTextContent }: Props) {
  const [editorState, setEditorState] = useState<EditorState>(() =>
    EditorState.createEmpty(),
  );

  /* will run only when edit button is clicked and
	 mounts this component */
  useEffect(() => {
    setRichTextContent(content);
    /// ////////// Convert html string to draft js //
    const contentBlock = htmlToDraft(content);
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks,
    );
    const eDitorState = EditorState.createWithContent(contentState);
    setEditorState(eDitorState);
  }, [content]);

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
        setRichTextContent(
          draftToHtml(convertToRaw(newState.getCurrentContent())),
        );
      }}
      editorClassName="editor-class"
      toolbarClassName="toolbar-class"
      wrapperStyle={{ backgroundColor: 'transparent'}}
      editorStyle={{
        padding: '.5rem',
        minHeight: '300px',
        backgroundColor: 'white',
        borderRadius: '5px',
        borderStyle: 'none',
      }}
      toolbarStyle={{
        backgroundColor: `${colors.grey}`,
        borderStyle: 'none',
      }}
    />
  );
}

export default WYSIWYG;
