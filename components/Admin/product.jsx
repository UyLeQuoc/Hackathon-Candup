import { BooleanField, BooleanInput, Create, Datagrid, DeleteButton, Edit, EditButton, ImageField, ImageInput, List, NumberField, NumberInput, SelectInput, SimpleForm, TextField, TextInput } from 'react-admin';
import ImageProduct from './ImageProduct';
const categories = [
  {
    id: "Bánh Mì",
    name: "Bánh Mì",
  },
  {
    id: "Nước đóng chai",
    name: "Nước đóng chai",
  },
  {
    id: "Sữa",
    name: "Sữa",
  },
  {
    id: "Snack",
    name: "Snack",
  },
  {
    id: "Kẹo",
    name: "Kẹo",
  },
  {
    id: "Trà",
    name: "Trà",
  },
  {
    id: "Cafe",
    name: "Cafe",
  },
  {
    id: "Món Cơm",
    name: "Món Cơm",
  },
  {
    id: "Món Mì",
    name: "Món Mì",
  },
  {
    id: "Món Ăn",
    name: "Món Ăn",
  },
];
export const ProductList = ({props}) => (
    <List {...props}>
        <Datagrid>
            <TextField source="category" />
            <TextField source="name" />
            <NumberField source="price" />
            <ImageProduct source="image" />
            <TextField source="shop" />
            <NumberField source="quantity" />
            <BooleanField source="isAvailable" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const ProductShow = ({props}) => (
  <Show {...props}>
      <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="category" />
          <TextField source="name" />
          <NumberField source="price" />
          <ImageProduct source="image" />
          <TextField source="shop" />
          <NumberField source="quantity" />
          <BooleanField source="isAvailable" />
          <EditButton />
          <DeleteButton />
      </Datagrid>
  </Show>
);
export const ProductEdit = () => (
  <Edit>
    <SimpleForm>
        <TextInput source='name' label="Product Name" multiline/>
        <SelectInput source="category" choices={categories} />
        <NumberInput source='price' label="Product Price" min={0}/>
        <ImageInput source="image" label="Product-Pic" accept="image/*">
          <ImageField source="src" title="title" />
        </ImageInput>
        <SelectInput source="shop" choices={[{id: '711', name: '711'},{id: 'Laha Coffee', name: 'Laha Coffee'},{id: 'Passio', name: 'Passio'}]} />
        <NumberInput source='quantity' label="Quantity" min={0}/>
        <BooleanInput source='isAvailable' label="Is Available"/>
    </SimpleForm>
  </Edit>
);

export const ProductCreate = () => (
  <Create>
    <SimpleForm>
        <TextInput source='name' label="Product Name" multiline/>
        <SelectInput source="category" choices={categories} />
        <NumberInput source='price' label="Product Price" min={0}/>
        <ImageInput source="image" label="Product-Pic" accept="image/*">
          <ImageField source="src" title="title" />
        </ImageInput>
        <NumberInput source='quantity' label="Quantity" min={0}/>
        <SelectInput source="shop" choices={[{id: '711', name: '711'},{id: 'Laha Coffee', name: 'Laha Coffee'},{id: 'Passio', name: 'Passio'}]} />
        <BooleanInput source='isAvailable' label="Is Available"/>
    </SimpleForm>
  </Create>
);