import React, { useState } from 'react';
import axios from 'axios';
import { AdminContainer } from '../styles/Admin.Styles';
import PageListItem from '../components/PageListItem';
import TextEditor from '../components/TextEditor';
import PropertyForm from '../components/PropertyForm';

interface Props {
  pages: [];
  setIndex: (arg: (index: number) => number) => void;
}

interface Page {
  componentName: string;
  _id: string;
  heading: string;
  bodyText: string
}
function Admin({ pages, setIndex }: Props) {
  const [error, setErr] = useState<string>('');
  const [pageId, setPageId] = useState<string>('');
  const [pageTitle, setPageTitle] = useState<string>('');
  const [pageContent, setPageContent] = useState<string>('');
  const [editing, setEditing] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  // called from pageListItem updates props in
  // TextEditor inside its useEffect()
  const editPage = (id: string, title: string, content: string) => {
    setPageId(id);
    setPageTitle(title);
    setPageContent(content);
    setEditing(true);
  };

  const savePage = async (id: any, heading: any, bodyText: any) => {
    await axios
      .patch(
        `http://192.168.0.14.:8000/api/v1/content/${id}`,

        {
          heading,
          bodyText,
        },

        {
          headers: { 'Content-type': 'application/json' },
        },
      )
      .then((res) => {
        if (res.status === 200) {
          console.log(res.status);
          // show saved icon above editor
          setSuccess(true);
          /* Updates the index dependency in
           FetchContent to cause re-render and get
            the updated data  */
          setIndex((index: number) => index + 1);
        }
      })
      .catch(() => setErr('Page not saved'));
  };

  return (
    <AdminContainer>
      <PropertyForm />
      <h1>ADMIN</h1>
      {pages.map((page: Page) => (
        <PageListItem
          key={page._id}
          id={page._id}
          pageTitle={page.heading}
          componentName={page.componentName}
          pageContent={page.bodyText}
          editPage={editPage}
        />
      ))}
      { editing
            && (
            <TextEditor
              pageId={pageId}
              pageTitle={pageTitle}
              pageContent={pageContent}
              savePage={savePage}
              isEditing={setEditing}
              setSuccess={setSuccess}
              success={success}
              error={error}
            />
            )}
    </AdminContainer>
  );
}

export default Admin;
