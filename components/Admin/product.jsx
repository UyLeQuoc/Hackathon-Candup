import { BooleanField, BooleanInput, Create, Datagrid, DeleteButton, Edit, EditButton, ImageField, ImageInput, List, NumberField, NumberInput, SelectInput, SimpleForm, TextField, TextInput } from 'react-admin';
import ImageProduct from './ImageProduct';
const categories = [
  {
    id: "Đồ Ăn",
    name: "Đồ Ăn",
  },
  {
    id: "Đồ Uống",
    name: "Đồ Uống",
  },
  {
    id: "Khác",
    name: "Khác",
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
        <TextInput source='name' label="Product Name"/>
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