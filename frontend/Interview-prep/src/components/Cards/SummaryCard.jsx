import React from 'react'
import { LuTrash2 } from 'react-icons/lu';

const SummaryCard = ({
  colors,
  role,
  topicsToFocus,
  experience,
  questions,
  description,
  lastUpdated,
  onSelect,
  onDelete,
}) => {
  return (
    <div className='bg-white border border-gray-300/40 rounded-xl p-2 overflow-hidden cursor-pointer hover:shadow-xl shadow-gray-100 relative group' 
      onClick={onSelect}>
      
      <div className="rounded-lg p-4 cursor-pointer relative"
        style={{
          background: colors.bgcolor,
        }}>
        
        <div className='flex items-center'>
          <div className='flex-shrink-0 w-12 h-12 bg-white rounded-md flex items-center justify-center mr-4'>
            <span className='text-lg font-semibold text-black'>
              {role.charAt(0)}
            </span>
          </div>

          {/* Content Container */}
          <div className='flex-grow'>
            <div className='flex justify-between items-start'>
              <div>
                <h2 className='text-sm font-medium'>{role}</h2>
                <p className='text-xs text-gray-700 mt-1'>{topicsToFocus}</p>
              </div>
            </div>
          </div>

          {/* Delete Button */}
          <button 
            className='hidden group-hover:flex items-center gap-2 text-xs text-rose-500 font-medium bg-rose-50 px-3 py-1 rounded text-nowrap border border-rose-100 hover:border-rose-200 cursor-pointer absolute top-2 right-2'
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          >
            <LuTrash2/>
          </button>
        </div>
      </div>

      <div className='px-3 pb-3'>
        <div className='flex flex-wrap gap-2 mt-3'>
          <div className='text-[10px] font-medium text-black px-3 py-1 border-[0.5px] border-gray-900 rounded-full whitespace-nowrap'>
            Experience: {experience} {experience == 1 ? "Year" : "Years"}
          </div>
          <div className='text-[10px] font-medium text-black px-3 py-1 border-[0.5px] border-gray-900 rounded-full whitespace-nowrap'>
            {questions} Q&A
          </div>
          <div className='text-[10px] font-medium text-black px-3 py-1 border-[0.5px] border-gray-900 rounded-full whitespace-nowrap'>
            Last Updated: {lastUpdated}
          </div>
        </div>

        <p className='text-[12px] text-gray-500 font-medium line-clamp-2 mt-3'>
          {description}
        </p>
      </div>
    </div>
  )
};

export default SummaryCard;






