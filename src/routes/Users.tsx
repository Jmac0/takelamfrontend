import React from 'react';
import AdminNav from "../components/AdminNav";
import UpdateAdminInfo from "../components/UpdateAdminInfo";

interface Props {
  setShowPropertiesOrPages: (_arg: string) => void;
}

function Users( {setShowPropertiesOrPages}: Props) {
  return (
    <div style={{ width: '100%' }}>
<AdminNav setShowPropertiesOrPages={setShowPropertiesOrPages}   />
		<UpdateAdminInfo />
    </div>
  );
}

export default Users;
