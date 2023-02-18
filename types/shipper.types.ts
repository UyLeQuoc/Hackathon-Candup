export interface Shipper {
  create: Create;
  user: User;
  status: string;
  deliveryFee: number;
  totalPrice: number;
  location: string;
  products: Product[];
  expired: Expired;
}

export interface Create {
  seconds: number;
  nanoseconds: number;
}

export interface User {
  converter: any;
  _key: Key;
  type: string;
  firestore: Firestore;
}

export interface Key {
  path: Path;
}

export interface Path {
  segments: string[];
  offset: number;
  len: number;
}

export interface Firestore {
  app: App;
  databaseId: DatabaseId;
  settings: Settings;
}

export interface App {
  _isDeleted: boolean;
  _options: Options;
  _config: Config;
  _name: string;
  _automaticDataCollectionEnabled: boolean;
  _container: Container;
}

export interface Options {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

export interface Config {
  name: string;
  automaticDataCollectionEnabled: boolean;
}

export interface Container {
  name: string;
  providers: Providers;
}

export interface Providers {}

export interface DatabaseId {
  projectId: string;
  database: string;
}

export interface Settings {
  host: string;
  ssl: boolean;
  ignoreUndefinedProperties: boolean;
  cacheSizeBytes: number;
  experimentalForceLongPolling: boolean;
  experimentalAutoDetectLongPolling: boolean;
  useFetchStreams: boolean;
}

export interface Product {
  quantity: number;
  item: Item;
}

export interface Item {
  image: Image;
  provider: string;
  name: string;
  price: number;
}

export interface Image {
  title: string;
  src: string;
}

export interface Expired {
  seconds: number;
  nanoseconds: number;
}
