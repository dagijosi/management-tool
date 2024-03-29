
import React from 'react'
import Cards from './Cards'
import { Add } from '@mui/icons-material'

const List = () => {
  return (
    <div className='flex flex-col items-start rounded bg-gray-100 w-80 p-2'>
      <p className='text-black text-lg not-italic font-semibold capitalize'>To Do</p>
      <Cards/>
      <button className='bg-transparent w-full hover:bg-slate-300 flex justify-start p-2 text-sm font-semibold mt-4'>
        <Add className='w-5 h-5 mr-2'/>
        Add New
        </button>
    </div>
  )
}

export default List
