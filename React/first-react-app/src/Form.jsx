function handleFormSubmit(evt) {
  evt.preventDefault();
  console.log("SUBMITTED THE FORM!");
}

export default function Form() {
  return (
    <form action="" onSubmit={handleFormSubmit}>
      <button>Submit</button>
    </form>
  );
}
