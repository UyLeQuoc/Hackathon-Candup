import { Avatar, Image } from "antd";
import { useRecordContext } from "react-admin";

const MyImageField = ({ source }: any) => {
  const record = useRecordContext();
  if (!record) return null;
  return <Avatar src={record[source]} alt={"avatar"}/>;
};

export default MyImageField;
