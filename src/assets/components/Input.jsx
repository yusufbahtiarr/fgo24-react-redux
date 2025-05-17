import { Fragment } from "react";

/**
 *
 * @param {InputProps} props
 * @param {string} props.label
 * @returns
 */

function Input({ type, name, id, label, ...props }) {
  return (
    <>
      <label htmlFor={id} className="text-lg font-light">
        {label}
      </label>
      <input
        className="text-lg font-light py-2 px-4 outline-0 font-sans border-b-2 border-slate-400"
        type={type}
        name={name}
        id={id}
        {...props}
      />
    </>
  );
}

export default Input;
