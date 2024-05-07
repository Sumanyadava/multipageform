import React, { useState } from 'react'

const FormTwo = ({formData,setFormData}) => {
    
  return (
    <div className="h-full w-full flex justify-around items-center flex-col ">
      
      <input type="text" placeholder="Permanent add" className="input input-bordered w-full max-w-xs" value={formData.padd}
        onChange={(e)=>setFormData({...formData ,padd: e.target.value})} required />

      
      <input type="text" placeholder="Current add" className="input input-bordered w-full max-w-xs"value={formData.cadd}
        onChange={(e)=>setFormData({...formData ,cadd: e.target.value})} required />

      
      <input type="number" placeholder="Pin add" className="input input-bordered w-full max-w-xs" value={formData.pin}
        onChange={(e)=>setFormData({...formData ,pin: e.target.value})} required  />

    </div>
  )
}

export default FormTwo
