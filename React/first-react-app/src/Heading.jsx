export default function Heading({
  color = "olive",
  text = "I'm a Heading!",
  fontSize,
}) {
  return <h1 style={{ color, fontSize }}>{text}</h1>;
}
