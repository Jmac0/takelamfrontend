import React, { useState } from 'react';
import axios from 'axios';
import { Property } from 'interfaces';
import { AdminContainer, Button } from '../styles/Admin.Styles';
import PageListItem from '../components/PageListItem';
import TextEditor from '../components/TextEditor';
import PropertyForm from '../components/PropertyForm';
import fetchProperties from '../hooks/fetchProperties';
import PropertyListItem from '../components/PropertyListItem';

interface Props {
  pages: [];
  setIndex: (_arg: (_index: number) => number) => void;
}

interface Page {
  componentName: string;
  _id: string;
  heading: string;
  bodyText: string;
}

function Admin({ pages, setIndex }: Props) {
  /* get property data, setPropertyIndex is a
   counter that can be used to re-call the get
    request for properties */
  const [properties, setPropertyIndex] = fetchProperties([]);
  /* current property id to edit */
  const [currentProperty, setCurrentProperty] = useState({});
  const [error, setErr] = useState<string>('');
  /* set & store id of page content document from
     mongo */
  const [pageId, setPageId] = useState<string>('');
  const [pageTitle, setPageTitle] = useState<string>('');
  const [pageContent, setPageContent] = useState<string>('');
  /* close or open edit page form */
  const [editing, setEditing] = useState<boolean>(false);
  /* status of page update */
  const [success, setSuccess] = useState<boolean>(false);
  /* show or hide property form */
  const [showPropertyForm, setShowPropertyForm] = useState<boolean>(false);
  /* show different button in property form for
     post/patch methods */
  const [requestMethod, setRequestMethod] = useState('POST');

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
          //   show saved icon above editor
          setSuccess(true);
          /* Updates the index dependency in
                     FetchContent to cause re-render and get
                     the updated data  */
          setIndex((index: number) => index + 1);
        }
      })
      .catch(() => setErr('Page not saved'));
  };
  const handleOpenPropertyForm = (useMethod: string) => {
    /* show/hide property form */
    setShowPropertyForm(!showPropertyForm);
    /* show different button in form depending on
         method */
    setRequestMethod(useMethod);
  };
  /* open form, set current property id & request
   method */
  const editProperty = (id: string) => {
    const curProperty = properties.filter(
      (el: { _id: string }) => el._id === id,
    );
    setCurrentProperty(() => curProperty[0]);
    setRequestMethod('PATCH');
    setShowPropertyForm(true);
  };
  const handleFormClosed = () => {
    setRequestMethod('POST');
    setShowPropertyForm(false);
  };

  // @ts-ignore
  return (
    <AdminContainer>
      {/* show property Form */}
      <Button type="button" onClick={() => handleOpenPropertyForm('POST')}>
        Create New
      </Button>
      <PropertyForm
        showPropertyForm={showPropertyForm}
        setShowPropertyForm={setShowPropertyForm}
        handleFormClosed={handleFormClosed}
        requestMethod={requestMethod}
        currentProperty={currentProperty as Property}
      />
      <h1>ADMIN</h1>
      {/* show list of pages */}
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

      {properties.map((property: Property) => (
        <PropertyListItem
          key={property._id}
          id={property._id}
          title={property.title}
          editProperty={editProperty}
        />
      ))}
      {editing && (
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
