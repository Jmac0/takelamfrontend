import React, { useState } from 'react';
import { Button, PropertyItem, WarningIcon } from 'styles/Admin.Styles';
import { NavElement } from 'styles/Container.styles';
import CreatePropertyLink from './CreatePropertyLink';

interface Props {
  id: string;
  title: string;
  editProperty: (_id: string) => void;
  deleteProperty: (_id: string) => void;
  showPropertiesOrPages: string;
}
function PropertyListItem({
  id,
  title,
  editProperty,
  deleteProperty,
  showPropertiesOrPages,
}: Props) {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  return (
    <PropertyItem showPropertiesOrPages={showPropertiesOrPages}>
      <div>
        <h1>
          <NavElement target="blank" to={`/property/${id}`}>
           <h1> {title}</h1>
          </NavElement>
        </h1>
      </div>
      {isChecked ?
        <Button
          className="delete-btn"
          type="button"
          disabled={!isChecked}
          onClick={() => deleteProperty(id)}
        >
          DELETE PROPERTY
        </Button> :(

<>
           <CreatePropertyLink id={id} />
          <Button
          className="edit-btn"
          type="button"
          onClick={() => editProperty(id)}
          >
          Edit Property
          </Button>
</>



      )}
      <span style={{ display: 'flex', flexDirection: 'row' }}>
        <p style={{ color: 'red', marginLeft: '0.5rem' }}>
          <input
            type="checkbox"
            id="delete"
            name="delete"
            value="delete"
            checked={isChecked}
            onChange={handleCheck}
          />
          Check to delete ️
          <WarningIcon />
        </p>
      </span>
    </PropertyItem>
  );
}

export default PropertyListItem;
