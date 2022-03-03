import React from 'react';
import { PageItem, EditButton } from '../styles/Admin.Styles';

interface Props {
  componentName: string;
  id: string;
  pageTitle: string;
  pageContent: string;
    // eslint-disable-next-line no-unused-vars
  editPage: (arg1: string, arg2: string, arg3: string) => void;

}
/* Simple component. This is a list item for each page
 with an edit button */
function PageListItem({
  componentName, id, pageTitle, pageContent, editPage,
}: Props) {
  const handleEdit = () => {
    // function to open TextEditor in Admin component
    editPage(id, pageTitle, pageContent);
  };

  return (
    <PageItem>
      <p>{componentName}</p>
      <EditButton type="submit" onClick={handleEdit}>
        EDIT
      </EditButton>
    </PageItem>
  );
}

export default PageListItem;
