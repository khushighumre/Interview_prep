import React from 'react'


const DeleteAlertContent = ({ content, onDelete }) => {
  return (
    <div className='px-8 py-6 mx-4 my-2'>
        <p className='text-sm text-gray-700 mb-6'>{content}</p>

        <div className="flex justify-end gap-3 mt-8">
            <button
            type="button"
            className='btn-small'
            onClick={onDelete}>
                Delete
            </button>
            
        </div>
      
    </div>
  )
}

export default DeleteAlertContent
