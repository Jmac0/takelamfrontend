import React, { useState } from 'react';

import { Property } from '../interfaces';
import { PropertyFormList, Button, XIcon } from '../styles/Admin.Styles';

function PropertyForm() {
  const [form, setForm] = useState<Property>({
    title: '',
    location: '',
    price: 0,
    bedrooms: 0,
    bathrooms: 0,
    buildSize: '',
    plotSize: '',
    description: '',
    ownership: '',
  });
  const [method, setMethod] = useState(true);

  const handleUpdate = (
    evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLElement>,
  ) => {
    // @ts-ignore
    setForm({ ...form, [evt.target.name]: evt.target.value });
  };

  return (

    <PropertyFormList>
      <XIcon />
      <h1>
        Create New Listing
      </h1>
      <div>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
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
          type="number"
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
      {/*
 todo description needs to be a text editor
*/}
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
        { method
          ? <Button type="submit">Create</Button>
          : <Button type="submit">Update</Button>}
      </div>
    </PropertyFormList>
  );
}

export default PropertyForm;
