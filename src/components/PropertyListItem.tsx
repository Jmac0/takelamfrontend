import React, {useState} from 'react';
import { Button, PropertyItem } from 'styles/Admin.Styles';

interface Props {
  id: string;
  title: string;
  editProperty: (_id: string) => void;
  deleteProperty: (_id: string) => void;
}
function PropertyListItem({ id, title, editProperty, deleteProperty }: Props) {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheck = () => {
        setIsChecked(!isChecked)

    }
  return (
    <PropertyItem>
     <h1>{title}</h1>
        <div className="topping">
            <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Paneer"
                checked={isChecked}
                onChange={handleCheck}
            />
            Check to delete
        </div>
      <Button type="button" onClick={() => editProperty(id)}>
        Edit Property
      </Button>

      <Button  type="button" disabled={!isChecked} onClick={() => deleteProperty(id)}>
        DELETE Property
      </Button>
    </PropertyItem>
  );
}

export default PropertyListItem;
