import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Property } from '../interfaces';
import { PropertyFormList, Button, XIcon } from '../styles/Admin.Styles';

interface Props {
  showPropertyForm: boolean;
  setShowPropertyForm: (_arg: boolean) => void;
  requestMethod: string;
  currentProperty: Property;
  handleFormClosed: () => void;
}

// eslint-disable-next-line react/prop-types
function PropertyForm({
  showPropertyForm,
  handleFormClosed,
  requestMethod,
  currentProperty,
}: Props) {
  const initialState: Property = {
    title: '',
    _id: '',
    tag: '',
    location: '',
    price: 0,
    cords: '',
    bedrooms: 0,
    bathrooms: 0,
    buildSize: '',
    plotSize: '',
    description: '',
    ownership: '',
  };

  const handleUpdateDB = async (id: string, data: Property) => {
    console.log('hello');
    await axios
      .patch(
        `http://192.168.0.24:8000/api/v1/properties/${id}`,

        data,

        {
          headers: { 'Content-type': 'application/json' },
        },
      )
      .then((response) => {
        console.log(response);
      });
  };

  const [form, setForm] = useState<Property>(initialState);

  /* todo implement cords logic somewhere */
  // console.log(form.cords.split(',').map((e) =>
  // Number(e)));
  // const [title, setTitle] = useState('');

  const handleUpdate = (
    evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLElement>,
  ) => {
    // set values from form to state
    // @ts-ignore
    setForm({ ...form, [evt.target.name]: evt.target.value });
  };

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    requestMethod === 'PATCH' && setForm({ ...currentProperty });
    // eslint-disable-next-line no-unused-expressions
    requestMethod === 'POST' && setForm({ ...initialState });
  }, [requestMethod]);

  return (
    <PropertyFormList showPropertyForm={showPropertyForm}>
      <XIcon onClick={handleFormClosed} />
      <h1>
        {requestMethod === 'POST' ? 'Create New Listing' : 'Edit Listing'}
      </h1>
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={form.title}
          onChange={handleUpdate}
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          aria-label="price"
          id="price"
          name="price"
          type="number"
          value={form.price}
          onChange={handleUpdate}
        />
      </div>
      <div>
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
      <div>
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
      <div>
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
      <div>
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
      <div>
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
      <div>
        <label htmlFor="location">cords</label>
        <input
          type="text"
          id="cords"
          name="cords"
          value={form.cords}
          onChange={handleUpdate}
        />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <textarea
          style={{ height: '6rem' }}
          aria-label="location"
          id="location"
          name="location"
          value={form.location}
          onChange={handleUpdate}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={form.description}
          onChange={handleUpdate}
        />
      </div>
      <div style={{ justifyContent: 'center' }}>
        {requestMethod === 'POST' ? (
          <Button type="submit">Create</Button>
        ) : (
          <Button onClick={() => handleUpdateDB(form._id, form)} type="button">
            Update
          </Button>
        )}
      </div>
    </PropertyFormList>
  );
}

export default PropertyForm;
