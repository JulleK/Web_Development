import useFormInput from "./useFormInput";

export default function Form() {
  const firstNameProps = useFormInput("Mary");
  const lastNameProps = useFormInput("poppin");

  return (
    <>
      <label>
        First name:
        <input {...firstNameProps} />
      </label>
      <label>
        Last name:
        <input value={lastNameProps.value} onChange={lastNameProps.onChange} />
      </label>
      <p>
        <b>
          Good morning, {firstNameProps.value} {lastNameProps.value}.
        </b>
      </p>
    </>
  );
}
