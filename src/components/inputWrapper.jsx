export default function InputWrapper({
  type = "text",
  className,
  id,
  name,
  placeholder,
  onChangeHandler,
  value,
}) {
  return (
    <input
      className={
        "shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline " +
        className
      }
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onChangeHandler}
      value={value}
    />
  );
}
