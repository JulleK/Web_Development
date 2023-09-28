export default function Counter() {
  let num = 0;
  const incrementNum = () => {
    num++;
    console.log(num);
  };

  return (
    <div>
      <button onClick={incrementNum}>The count is: {num}</button>
    </div>
  );
}
