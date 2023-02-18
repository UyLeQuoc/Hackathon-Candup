// in src/admin/App.jsx
import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from "../Custom/admin-table/users";
import { authProvider } from "../../auth/authProvider";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const AdminPage = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={<UserList />} />
  </Admin>
);

export default AdminPage;
