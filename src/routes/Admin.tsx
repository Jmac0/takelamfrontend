import React, { useState } from 'react';
import axios from 'axios';
import { AdminContainer } from '../styles/Admin.Styles';
import PageListItem from '../components/PageListItem';
import TextEditor from '../components/TextEditor';

interface Props {
  pages: [];
}

interface Page {
  componentName: string;
  _id: string;
  heading: string;
  bodyText: string
}
function Admin({ pages }: Props) {
  const [error, setErr] = useState<string>('');
  const [pageId, setPageId] = useState<string>('');
  const [pageTitle, setPageTitle] = useState<string>('');
  const [pageContent, setPageContent] = useState<string>('');
  const [editing, setEditing] = useState<boolean>(false);

  // called from pageListItem updates props in
  // TextEditor inside its useEffect()
  const editPage = (id: string, title: string, content: string) => {
    setPageId(id);
    setPageTitle(title);
    setPageContent(content);
    setEditing(true);
  };

  const savePage = async (id: any, heading: any, bodyText: any) => {
    console.log('PATCH');
    await axios
      .patch(
        `http://192.168.1.201:8000/api/v1/content/${id}`,

        {
          heading,
          bodyText,
        },

        {
          headers: { 'Content-type': 'application/json' },
        },
      )
      .then((res) => console.log(res))
      .catch(() => setErr('Page not updated'));
  };

  return (
    <AdminContainer>
      <h1>ADMIN</h1>
      {pages.map((page: Page) => (
        <PageListItem
          key={page._id}
          id={page._id}
          pageTitle={page.heading}
          componentName={page.componentName}
          setEditing={setEditing}
          pageContent={page.bodyText}
          updatePage={savePage}
          editPage={editPage}
        />
      ))}
      (
      { editing
            && (
            <TextEditor
              pageId={pageId}
              pageTitle={pageTitle}
              pageContent={pageContent}
              savePage={savePage}
            />
            )}
    </AdminContainer>
  );
}

export default Admin;
