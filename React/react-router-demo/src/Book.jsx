import { useOutletContext, useParams } from "react-router-dom";

export default function Book() {
  const { id } = useParams();
  const obj = useOutletContext();
  return (
    <>
      <h4>book #{id}</h4>
      <p>{obj.hello}</p>
    </>
  );
}
