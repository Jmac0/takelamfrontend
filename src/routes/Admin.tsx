import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import { Property } from 'interfaces';
import baseUrl from 'utils/urls';
import EditPageComponent from '../components/EditPageComponent';

import {
  AdminContainer,
  Button,
} from '../styles/Admin.Styles';
import PageListItem from '../components/PageListItem';
import PropertyForm from '../components/PropertyForm';
import fetchProperties from '../hooks/fetchProperties';

import PropertyListItem from '../components/PropertyListItem';
import AdminNav from '../components/AdminNav';

interface Props {
  pages: [];
  setIndex: (_arg: (_index: number) => number) => void;
  setShowPropertiesOrPages: (_arg: string) => void;
  showPropertiesOrPages: string;
}

interface Page {
  componentName: string;
  _id: string;
  heading: string;
  bodyText: string;
}

function Admin({
  pages,
  setIndex,
  setShowPropertiesOrPages,
  showPropertiesOrPages,
}: Props) {
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
  /*
  const [showPropertiesOrPages, setShowPropertiesOrPages] =
    useState('properties');
*/
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

  const savePage = async (id: any, bodyText: any) => {
    setLoading(true);
    await axios
      .patch(
        `${baseUrl}/content/${id}`,

        {
          bodyText,
        },

        {
	  withCredentials: true,
          headers: { 'Content-type': 'application/json' },
        },
      )
      .then((res) => {
        if (res.status === 200) {
          //   show saved icon above editor
          setSuccess(true);
          /* Updates the index dependency in
					 FetchContent to cause re-render and get
					 the updated data  */
          setLoading(false);
          setIndex((index: number) => index + 1);
        }
      })
      .catch(() => setErr('Page not saved'));
  };

  const createProperty = async (data: Property) => {
    setLoading(true);
    // @ts-ignore
    // eslint-disable-next-line no-param-reassign
    delete data._id;
    await axios
      .post(`${baseUrl}/properties`, data, {
	  withCredentials: true
		},
      )
      .then((response) => {
        if (response.status === 201) {
          setPropertyIndex((cur: number) => cur + 1);
          setLoading(false);
          setTimeout(() => {
            setClose(true);
          }, 500);
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
		{withCredentials: true}
      )
      .then((response) => {
        if (response.status === 204) {
          setPropertyIndex((cur: number) => cur + 1);
          setErr('');
          setLoading(false);
        }
      })
      .catch((err) => setErr(err.response.data.message));
  };
  const deleteProperty = async (id: string) => {
    // eslint-disable-next-line no-restricted-globals
    await axios.delete(`${baseUrl}/properties/${id}`, {withCredentials: true}).then((response) => {
      if (response.status === 204) {
        setPropertyIndex((cur: number) => cur + 1);
      }
    });
  };
  /* Open property form with POST method, will set empty form */
  const handleOpenPropertyForm = (useMethod: string) => {
    /* show/hide property form */
    setShowPropertyForm(!showPropertyForm);
    /* show different button in form depending on
		 method */
    setCurrentProperty({});
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
    setShowPropertyForm(true);
    setCurrentProperty(() => curProperty[0]);
    setRequestMethod('PATCH');
  };
  const handleFormClosed = () => {
    setRequestMethod('');
    setEditing(false);
    setShowPropertyForm(false);
    setLoading(false);
  };
  // list of current properties in admin
  const propertiesArray = properties.map((property: Property) => (
    <PropertyListItem
      showPropertiesOrPages={showPropertiesOrPages}
      key={property._id}
      id={property._id}
      title={property.title}
      editProperty={editProperty}
      deleteProperty={deleteProperty}
    />
  ));
  // @ts-ignore
  return (
    <div style={{ position: 'absolute' }}>
      {/*
      <AdminMenu>
        <Button
          type="button"
          onClick={() => setShowPropertiesOrPages('properties')}
        >
          {' '}
          <span>
            <HouseIcon /> Properties
          </span>
        </Button>
        <Button type="button" onClick={() => setShowPropertiesOrPages('pages')}>
          <span>
            <PagesIcon /> Pages
          </span>
        </Button>
        <Button onClick={() => navigate('/users')} >
          Users
        </Button>
        <Button type="button" onClick={auth.signOut}>
          Logout
        </Button>
      </AdminMenu>
*/}
      <AdminNav setShowPropertiesOrPages={setShowPropertiesOrPages} />
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
        {showPropertyForm && (
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
        )}

        {pages.map((page: Page) => (
          <PageListItem
            showPropertiesOrPages={showPropertiesOrPages}
            key={page._id}
            id={page._id}
            pageTitle={page.heading}
            componentName={page.componentName}
            pageContent={page.bodyText}
            isEditing={editing}
            editPage={editPage}
          />
        ))}
        { /* sort properties in alphabetical order */ }

        {propertiesArray.sort((a: Property, b: Property) => (a.title > b.title ? 1 : -1))}

      </AdminContainer>
      {editing && (
        <EditPageComponent
          pageTitle={pageTitle}
          content={pageContent}
          pageId={pageId}
          savePage={savePage}
          loading={loading}
          error={error}
          setEditing={setEditing}
          setSuccess={setSuccess}
        />
      )}
      <Outlet />
    </div>
  );
}

export default Admin;
