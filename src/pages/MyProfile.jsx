import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Manira Singh",
    image: assets.profile_pic,
    email: "example@gmail.com",
    phone: '+91 0000000000'
  })

  const [isEdit, setIsEdit] = useState(false)
  return (
    <div>
      <img src={userData.image} alt="" />
    {
      isEdit ? <input value={userData.name} onChange={e => setUserData(prev => ({...prev, name:e.target.value}))} type="text" /> : <p>{userData.name}</p>
    }
    <hr />
    <div>
      <p>CONTACT INFORMATION</p>
      <div>
        <p>Email Id:</p>
        <p>{userData.email}</p>
      </div>
    </div>
    </div>
  )
}

export default MyProfile