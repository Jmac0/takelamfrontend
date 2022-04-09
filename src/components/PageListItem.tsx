import React from 'react';
import { PageItem, Button } from '../styles/Admin.Styles';

interface Props {
  componentName: string;
  id: string;
  isEditing: boolean;
  pageTitle: string;
  pageContent: string;
  showPropertiesOrPages: string;
    // eslint-disable-next-line no-unused-vars
  editPage: (arg1: string, arg2: string, arg3: string) => void;

}
/* Simple component. This is a list item for each page
 with an edit button */
function PageListItem({
  componentName, id, pageTitle, pageContent, editPage, showPropertiesOrPages
 , isEditing}: Props) {
  const handleEdit = () => {
    // function to open TextEditor in Admin component
    editPage(id, pageTitle, pageContent);
  };

  return (
    <PageItem isEditing={isEditing} showPropertiesOrPages={showPropertiesOrPages}>
      <h1>{componentName}</h1>
      <Button className="edit-btn" type="submit" onClick={handleEdit}>
        EDIT
      </Button>
    </PageItem>
  );
}

export default PageListItem;
