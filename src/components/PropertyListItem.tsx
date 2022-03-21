import React from 'react';
import { Button, PropertyItem } from 'styles/Admin.Styles';

interface Props {
  id: string;
  title: string;
  editProperty: (_id: string) => void;
}
function PropertyListItem({ id, title, editProperty }: Props) {
  return (
    <PropertyItem>
      {title}
      <Button type="button" onClick={() => editProperty(id)}>
        Edit Property
      </Button>
    </PropertyItem>
  );
}

export default PropertyListItem;
