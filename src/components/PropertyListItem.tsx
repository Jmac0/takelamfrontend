import React from 'react';
import { Button, PropertyItem } from 'styles/Admin.Styles';

interface Props {
  id: string;
  title: string;
  editProperty: (_id: string) => void;
  deleteProperty: (_id: string) => void;
}
function PropertyListItem({ id, title, editProperty, deleteProperty }: Props) {
  return (
    <PropertyItem>
     <h1>{title}</h1>
      <Button type="button" onClick={() => editProperty(id)}>
        Edit Property
      </Button>

      <Button type="button" onClick={() => deleteProperty(id)}>
        DELETE Property
      </Button>
    </PropertyItem>
  );
}

export default PropertyListItem;
