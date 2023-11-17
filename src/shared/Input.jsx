import React from 'react'

export default function Input({value,id,title,type,name,handelData,customClasses,errors}) {
  return (
    <div className="mb-3">
        <label htmlFor={id} className="form-label">{title}</label>
        <input value={value} type={type} name={name} className={`form-control ${customClasses}`} id={id} onChange={handelData} />
        {errors[name] && <p className='text-danger rounded-pill'>{errors[name]}</p>}
    </div>
  )
}
