import React, { useEffect, useRef, useState } from 'react';
import ButtonLoader from 'components/ButtonLoading';
import { Property } from '../interfaces';
import { Button } from '../styles/Admin.Styles';
import UserMessage from './UserMessage';
import { UserMessageInterface } from '../utils/interfaces';

import {
  FormButtonContainer,
  PropertyFormList,
  XIcon,
} from '../styles/FormStyles';
import WYSIWYG from './WYSIWYG';

// Format image tag Trim all spaces, removes special chars, and make uppercase
const formatTag = (value: string): string => {
  const formattedTag = value
    .replace(/[^a-zA-Z ]/g, '')
    .replace(/\s/g, '')
    .toUpperCase()
    .trim();

  return formattedTag;
};

interface Props {
  showPropertyForm: boolean;
  requestMethod: string;
  currentProperty: Property;
  handleFormClosed: () => void;
  createProperty: (_data: Property) => void;
  updateProperty: (_id: string, _form: Property, _images: string) => void;
  error: string;
  loading: boolean;
  close: boolean;
  message: UserMessageInterface;
}

// eslint-disable-next-line react/prop-types
function PropertyForm({
  showPropertyForm,
  handleFormClosed,
  requestMethod,
  currentProperty,
  createProperty,
  updateProperty,
  error,
  message,
  loading,
  close,
}: Props) {
  const initialState: Property = {
    title: '',
    tag: '',
    description: '',
    ownership: '',
    plotSize: '',
    buildSize: '',
    bedrooms: 0,
    bathrooms: 0,
    price: '',
    location: '',
    floorPlan: [],
    cords: '',
    _id: '',
  };

  const [form, setForm] = useState<Property>(initialState);
  const [images, setImages] = useState('');
  const [description, setDescription] = useState('');
  const imageInput = useRef(null);
  const handleUpdate = (evt: React.ChangeEvent) => {
    // set values from form to state

    // @ts-ignore
    setForm({ ...form, [evt.target.name]: evt.target.value });
  };
  const handleImageInput = (evt: React.ChangeEvent) => {
    // @ts-ignore
    setImages(evt.target.files);
  };

  const handleSubmit = (evt: Event) => {
    // different http request for different methods
    evt.preventDefault();
    if (requestMethod === 'POST') {
      createProperty({ ...form, description });
    } else if (requestMethod === 'PATCH') {
      updateProperty(currentProperty._id, { ...form, description }, images);
      // @ts-ignore
      imageInput.current.value = '';
    }
  };

  useEffect(() => {
    /* set state to currently editing property or
       empty object */
    // eslint-disable-next-line no-param-reassign
    currentProperty.floorPlan = [];

    requestMethod === 'PATCH' && setForm({ ...currentProperty });
    requestMethod === 'POST' && setForm({ ...initialState });
  }, [showPropertyForm]);

  return (
    <PropertyFormList onSubmit={handleSubmit}>
      <XIcon onClick={handleFormClosed} />
      <h1>
        {requestMethod === 'POST' ? 'Create New Listing' : 'Edit Listing'}
      </h1>
      <div className="inputs">
        <label htmlFor="title">Title</label>
        <input
          ref={imageInput}
          required
          placeholder="Property title, internal use only"
          id="title"
          name="title"
          type="text"
          value={form.title}
          onChange={handleUpdate}
        />
      </div>
      <div className="inputs">
        <label htmlFor="title">Tag</label>
        <input
          disabled={requestMethod === 'PATCH'}
          required
          placeholder="Please enter a tag name to link images to site"
          id="tag"
          name="tag"
          type="text"
          // make sure tag appears correctly formatted
          value={formatTag(form.tag)}
          onChange={handleUpdate}
        />
      </div>
      <div className="inputs">
        <label htmlFor="price">Price</label>
        <input
          aria-label="price"
          id="price"
          name="price"
          type="text"
          value={form.price}
          onChange={handleUpdate}
        />
      </div>
      <div className="inputs">
        <label htmlFor="bedrooms">Bedrooms</label>
        <input
          aria-label="bedrooms"
          id="bedrooms"
          name="bedrooms"
          type="number"
          value={form.bedrooms}
          onChange={handleUpdate}
        />
      </div>
      <div className="inputs">
        <label htmlFor="bathrooms">Bathrooms</label>
        <input
          aria-label="bathrooms"
          id="bathrooms"
          name="bathrooms"
          type="number"
          value={form.bathrooms}
          onChange={handleUpdate}
        />
      </div>
      <div className="inputs">
        <label htmlFor="buildSize">Build Size</label>
        <input
          aria-label="buildSize"
          id="buildSize"
          name="buildSize"
          type="number"
          value={form.buildSize}
          onChange={handleUpdate}
        />
      </div>
      <div className="inputs">
        <label htmlFor="plotSize">Plot Size</label>
        <input
          aria-label="plotSize"
          id="plotSize"
          name="plotSize"
          type="text"
          value={form.plotSize}
          onChange={handleUpdate}
        />
      </div>
      <div className="inputs">
        <label htmlFor="ownership">Ownership</label>
        <input
          aria-label="ownership"
          id="ownership"
          name="ownership"
          type="text"
          value={form.ownership}
          onChange={handleUpdate}
        />
      </div>
      <div className="inputs">
        <label htmlFor="location">Co-ords</label>
        <input
          required
          placeholder="Paste from Google maps only!"
          type="text"
          id="cords"
          name="cords"
          value={form.cords}
          onChange={handleUpdate}
        />
      </div>
      <div
        className="inputs"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <label style={{ marginBottom: '.5rem' }} htmlFor="location">
          Location
        </label>
        <textarea
          style={{ height: '6rem' }}
          aria-label="location"
          id="location"
          name="location"
          value={form.location}
          onChange={handleUpdate}
        />
      </div>
      <div
        style={{ display: 'flex', flexDirection: 'column', minHeight: '300px' }}
        className="inputs"
      >
        <label style={{ marginBottom: '.5rem' }} htmlFor="description">
          Description
        </label>
        <WYSIWYG
          content={currentProperty.description}
          setRichTextContent={setDescription}
        />
      </div>

      <p style={{ display: `${error ? 'block' : 'none'}` }}>{error}</p>
      {requestMethod === 'POST' ? (
        <FormButtonContainer>
          {!close ? (
            <ButtonLoader loading={loading}>Create</ButtonLoader>
          ) : (
            <Button type="button" onClick={handleFormClosed}>
              CLOSE
            </Button>
          )}
        </FormButtonContainer>
      ) : (
        <FormButtonContainer>
          <div style={{ width: 'fit-content', height: '56px' }}>
            <ButtonLoader loading={loading}>Save</ButtonLoader>
          </div>
          <input
            ref={imageInput}
            style={{ padding: '0', height: 'fit-content', width: '14rem' }}
            className="custom-file-input"
            type="file"
            id="images"
            name="images"
            onChange={handleImageInput}
            multiple
          />
        </FormButtonContainer>
      )}
      <UserMessage
        showUserMessage={message.showUserMessage}
        isErrorMessage={message.isErrorMessage}
        message={message.message}
      />
    </PropertyFormList>
  );
}

export default PropertyForm;
