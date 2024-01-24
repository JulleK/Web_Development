import { useParams } from "react-router-dom";

export default function Book() {
  const { id } = useParams();
  return <h4>book #{id}</h4>;
}
