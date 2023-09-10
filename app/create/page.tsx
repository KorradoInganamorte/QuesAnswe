import Dropdown from '@/UI/Dropdown'
import React from 'react'

const Create = () => {
  return (
    <div className='flex flex-col items-center px-[2rem] py-[1.5rem] bg-white rounded-[10px] border border-black'>
        <h3 className='mx-auto text-black text-4xl font-bold mb-[1.5rem]'>Создание QuesAnswe</h3>

        <div className='flex items-center'>
            <p className='mr-[2.5rem] text-black text-2xl font-medium'>Категория:</p>
            <Dropdown />
        </div>
    </div>
  )
}

export default Create