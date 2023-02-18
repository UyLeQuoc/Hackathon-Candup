import { Datagrid, DateField, Edit, EmailField, List, SelectInput, SimpleForm, TextField, TextInput } from 'react-admin';
import MyImageField from './MyImageField';

export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="displayName" />
            <MyImageField source="photoURL" />
            <EmailField source="email" />
            <TextField source="role" />
            <DateField source="lastSeen" />
        </Datagrid>
    </List>
);

export const UserEdit= () => (
  <Edit>
      <SimpleForm>
        <SelectInput source="role" choices={[
            { id: 'admin', name: 'Admin' },
            { id: 'client', name: 'Client' },
            { id: 'shipper', name: 'Shipper' },
        ]} />
      </SimpleForm>
  </Edit>
);