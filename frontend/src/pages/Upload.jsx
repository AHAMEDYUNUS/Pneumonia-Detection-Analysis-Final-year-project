import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DotBackgroundWrapper from '../components/DotBackgroundWrapper';
import lung from '../assets/lung.png'

export default function Upload() {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    city: '',
    image: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('age', formData.age);
    data.append('gender', formData.gender);
    data.append('city', formData.city);
    data.append('image', formData.image);

    try {
      const response = await axios.post('http://localhost:8010/pneumonia/', data);
      navigate('/report', { state: { ...response.data, name: formData.name } });
    } catch (error) {
      alert('Upload failed');
      console.error(error);
    }
  };

  return (

    <DotBackgroundWrapper>
    <div className='w-screen min-h-screen flex flex-col justify-center items-center'>

      <div className='grid grid-cols-[500px_auto] rounded-lg shadow-2xl overflow-hidden h-[500px]'>
        <div className='w-[500px] h-[500px]'>
          <img src={lung} className='w-full h-full object-cover'/>
        </div>
        <div>
          <form onSubmit={handleSubmit} className='w-[500px] flex flex-col justify-center gap-3 bg-white text-gray-900 rounded-lg p-10'>
            <p>Name</p>
            <input name="name" type="text" onChange={handleChange} placeholder="" required />
            <p>Age</p>
            <input name="age" type="number" onChange={handleChange} placeholder="" required />
            <p>Gender</p>
            <select name="gender" onChange={handleChange} value={formData.gender}>
              <option value="">Select Gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="N">Prefer Not to Say</option>
            </select>
            <p>City</p>
            <input name="city" type="text" onChange={handleChange} placeholder="" required />
            <p>X-Ray image</p>
            <input name="image" type="file" onChange={handleChange} accept="image/*" required />
            <button className='w-full sm:w-auto flex justify-center items-center gap-3 bg-[#005450] border px-6 py-3 text-white shadow-[6px_5px_1px_rgba(0,0,0,1)] active:shadow-[4px_2px_1px_rgba(0,0,0,1)] active:translate-y-2 active:translate-x-0.5'
              type="submit">Submit</button>
          </form>
        </div>
      </div>



    </div>
    </DotBackgroundWrapper>
  );
}

