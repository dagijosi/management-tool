import React from 'react'
import List from './List'

const ProjectManagementPage = () => {
  return (
    <div className='bg-blue-500 h-screen p-4'>
        <div className='ml-6'>
      <p className='text-3xl not-italic font-semibold text-white mb-4'>Project Management</p>
      <List/>
      </div>
    </div>
  )
}

export default ProjectManagementPage
