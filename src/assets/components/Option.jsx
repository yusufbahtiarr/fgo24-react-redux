import { Fragment } from "react"

// /**
//  * 
//  * @param {InputProps} props 
//  * @param {string} props.label
//  * @returns 
//  */


// function Option({type, name, value, id, label, ...props}) {
//   if(type === "radio"){
//     return (
//       <div>
//         <label htmlFor={`${id}-1`}>{label}</label>
//         <div>
//           {value.map((val, index)=>{
//             const identifier = `${id}-${index+1}`
//             return (
//               <React.Fragment key={`ip-cb-${val}`}>
//               <input type={type} name={name} id={identifier} value={val} {...props} />
//               <label htmlFor={identifier}>{val}</label>
//               </React.Fragment>
//             )
//           })}
//         </div>
//       </div>
//     )
//   }
// }

/**
 *
 * @typedef {object} CustomProps
 * @property {string} [label]
 *
 * @typedef {CustomProps & React.HTMLAttributes<HTMLInputElement>} InputProps
 */

/**
 *
 * @param {InputProps} props
 * @param {string} props.label label to display above input
 * @returns
 */

import React from "react";

function Option({ id, type, label, value = [], name, ...props }) {
  if (type === "checkbox") {
    return (
      <div>
        <label className="block mb-1">{label}</label>
        <div className="flex flex-col gap-2">
          {value.map((val, index) => {
              const identifier = `${id}-${index + 1}`;
              return (
                <div key={`ip-cb-${val}`} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={identifier}
                    name={name}
                    value={val}
                    {...props}
                  />
                  <label htmlFor={identifier}>{val}</label>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
  if(type === "radio"){
    return (
      <div>
        <label htmlFor={`${id}-1`}>{label}</label>
        <div>
          {value.map((val, index)=>{
            const identifier = `${id}-${index+1}`
            return (
              <React.Fragment key={`ip-cb-${val}`}>
              <input type={type} name={name} id={identifier} value={val} {...props} />
              <label className="p-3" htmlFor={identifier}>{val}</label>
              </React.Fragment>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div>
      <label htmlFor={id} className="block mb-1">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="border border-gray-300 px-3 py-2 rounded-md"
        {...props}
      />
    </div>
  );
}

// export default Input;

export default Option