import React from 'react'

function Card({className, children, ...props}) {
  const base = "relative flex flex-col w-200 bg-slate-200 shadow-md p-6 gap-4 rounded rounded-bl-4xl rounded-tr-4xl"
  return (
    <div className={[base, className].join(" ")} {...props}>
      
      {children}
    </div>
  )
}

export default Card
