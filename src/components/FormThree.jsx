import React, { useState } from 'react'

const FormThree = ({formData,setFormData}) => {
    
  return (
    <div className="h-full w-full flex justify-around items-center flex-col ">
      <input type="number" placeholder="10th marks" className="input input-bordered w-full max-w-xs" value={formData.ten}
        onChange={(e)=>setFormData({...formData ,ten: e.target.value})} required />

      <input type="number" placeholder="12th " className="input input-bordered w-full max-w-xs" value={formData.twe}
        onChange={(e)=>setFormData({...formData ,twe: e.target.value})} required />

      <input type="number" placeholder="Grad cgps" className="input input-bordered w-full max-w-xs"value={formData.Grad}
        onChange={(e)=>setFormData({...formData ,Grad: e.target.value})} required />

    </div>
  )
}

export default FormThree
