// in src/admin/App.jsx
import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { authProvider } from "../../auth/authProvider";
import { FirebaseDataProvider } from "react-admin-firebase";
import { firebaseConfig } from "../../utils/firebase";
import { UserEdit, UserList } from "./user";
import { ProductCreate, ProductEdit, ProductList, ProductShow } from "./product";

export const dataProvider = FirebaseDataProvider(firebaseConfig);

const AdminPage = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={<UserList />} edit={<UserEdit />}/>
    <Resource name="Products" list={<ProductList />} show={<ProductShow />} create={<ProductCreate />} edit={<ProductEdit />}/>
  </Admin>
);

export default AdminPage;
