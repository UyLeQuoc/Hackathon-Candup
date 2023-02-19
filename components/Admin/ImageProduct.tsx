import { Image } from "antd";
import { useRecordContext } from "react-admin";

const ImageProduct = ({ source }: any) => {
  const record = useRecordContext();
  if (!record) return null;
  return <Image src={record[source].src} alt={record[source].title} width={50} height={50}/>;
};

export default ImageProduct;
