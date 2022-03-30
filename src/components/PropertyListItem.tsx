import React, { useState } from 'react';
import { Button, PropertyItem, WarningIcon } from 'styles/Admin.Styles';
import {NavElement} from 'styles/Container.styles'
import CreatePropertyLink from './CreatePropertyLink'

interface Props {
  id: string;
  title: string;
  editProperty: (_id: string) => void;
  deleteProperty: (_id: string) => void;
}
function PropertyListItem({ id, title, editProperty, deleteProperty }: Props) {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  return (
    <PropertyItem>
      <h1>
        <NavElement target="blank" to={`/property/${id}`}>
          {title}
        </NavElement>
      </h1>
        <CreatePropertyLink id={id} />

            <Button type="button" onClick={() => editProperty(id)}>
                Edit Property
            </Button>

        { isChecked && (
            <Button
                style={{background: 'indianred'}}
                type="button"
                disabled={!isChecked}
                onClick={() => deleteProperty(id)}
            >
               DELETE PROPERTY
            </Button>
        )}
        <div style={{backgroundColor: 'indianred', padding: '0.5rem'}}>

            <WarningIcon/>
            <input

                type="checkbox"
                id="delete"
                name="delete"
                value="delete"
                checked={isChecked}
                onChange={handleCheck}
            />
            <label htmlFor="delete" style={{color: 'wheat', marginLeft: '0.5rem'}}>Check to delete  ️</label>
        </div>
    </PropertyItem>
  );
}

export default PropertyListItem;
