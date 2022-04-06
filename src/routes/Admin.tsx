import React, { useState } from 'react';
import axios from 'axios';
import { Property } from 'interfaces';
import baseUrl from 'utils/urls';
import { AdminContainer, AdminMenu, Button } from '../styles/Admin.Styles';
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

  /* show property or pages items in admin */

  const [showPropertiesOrPages, setShowPropertiesOrPages] =
    useState('properties');
  /* loading boolean */
  const [loading, setLoading] = useState<boolean>(false);
  /* show or hide property form */
  const [showPropertyForm, setShowPropertyForm] = useState<boolean>(false);
  /* show different button in property form for
     post/patch methods */
  const [requestMethod, setRequestMethod] = useState('POST');
  /* show close button in form after creating property  */
  const [close, setClose] = useState(false);
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
        `${baseUrl}/content/${id}`,

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
  const createProperty = async (data: Property) => {
      setLoading(true)

    // @ts-ignore
    // eslint-disable-next-line no-param-reassign
    delete data._id;
    await axios
      .post(`${baseUrl}/properties`, data, {
        headers: { 'Content-type': 'application/json' },
      })
      .then((response) => {
        console.log(data);
        if (response.status === 201) {
          setPropertyIndex((cur: number) => cur + 1);
          setLoading(false);
          setTimeout(() => {

          setClose(true);
          }, 1000)
        }
      })
      .catch((err) => setErr(err.response.data.message));
  };
  const updateProperty = async (id: string, body: any, images: string) => {
    setLoading(true);
    const data = new FormData();
    Object.values(images).forEach((file) => {
      data.append('images', file);
    });
    Object.entries(body).forEach(([key, value]) => {
      data.append(`${key}`, `${value}`);
    });
    await axios
      .patch(
        `${baseUrl}/properties/${id}`,

        data,
      )
      .then((response) => {
        if (response.status === 204) {
          console.log(response);
          setPropertyIndex((cur: number) => cur + 1);
          setErr('');
          setLoading(false);
        }
      })
      .catch((err) => setErr(err.response.data.message));
  };
  const deleteProperty = async (id: string) => {
    await axios.delete(`${baseUrl}/properties/${id}`).then((response) => {
      if (response.status === 204) {
        console.log(response);
        setPropertyIndex((cur: number) => cur + 1);
      }
      console.log(response);
    });
  };
  /* Open property form with POST method, will set empty form */
  const handleOpenPropertyForm = (useMethod: string) => {
    /* show/hide property form */
    setShowPropertyForm(!showPropertyForm);
    /* show different button in form depending on
         method */
    setRequestMethod(useMethod);
    setLoading(false);
    setClose(false);
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
    setRequestMethod('');
    setShowPropertyForm(false);
    setLoading(false);
  };
  // @ts-ignore

  return (
    <div style={{ overflowX: 'hidden' }}>
      <AdminMenu>
        <h1 className="logo">ADMIN</h1>
        <div style={{ gridArea: 'side' }}>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
          <Button
            type="button"
            onClick={() => setShowPropertiesOrPages('properties')}
          >
            {' '}
            Properties
          </Button>
          <Button
            type="button"
            onClick={() => setShowPropertiesOrPages('pages')}
          >
            Pages
          </Button>
        </div>
      </AdminMenu>
      {/* button to create new property */}
      <div
        style={{
          flexDirection: 'row',
          marginBottom: '1rem',
          justifyContent: 'center',
          display: `${showPropertyForm ? 'none' : 'flex'}`,
        }}
      >
        <Button type="button" onClick={() => handleOpenPropertyForm('POST')}>
          Create New Property
        </Button>

      </div>

        <AdminContainer>
            <PropertyForm
          showPropertyForm={showPropertyForm}
          handleFormClosed={handleFormClosed}
          requestMethod={requestMethod}
          currentProperty={currentProperty as Property}
          createProperty={createProperty}
          updateProperty={updateProperty}
          error={error}
          loading={loading}
          close={close}
        />
        {/* show list of pages */}

        {pages.map((page: Page) => (
          <PageListItem
            showPropertiesOrPages={showPropertiesOrPages}
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
            showPropertiesOrPages={showPropertiesOrPages}
            key={property._id}
            id={property._id}
            title={property.title}
            editProperty={editProperty}
            deleteProperty={deleteProperty}
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
    </div>
  );
}
export default Admin;