import { faBars, faClock, faPlus, faRefresh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const HeadingBar = () => {
  return (
    <div className='mx-10 mt-10 flex justify-between '>
        <h3 className='inline-block font-bold text-2xl'>CNAPP Dashboard</h3>
        <div className='flex gap-5 items-center'>
          <div className='flex items-center gap-2 p-2 bg-white border-2 border-gray-300 hover:border-blue-800 rounded-md '>
            Add Widget <FontAwesomeIcon icon={faPlus} />
          </div>
          <div className='flex items-center gap-2 p-3 bg-white border-2 border-gray-300 hover:border-blue-800 rounded-md'><FontAwesomeIcon icon={faRefresh} /></div>
          <div className='flex items-center gap-2 p-3 bg-white border-2 border-gray-300 hover:border-blue-800 rounded-md'><FontAwesomeIcon icon={faBars} /></div>
          <div className='flex gap-2 p-2 bg-white border-2 border-blue-800 rounded-md'>
            <FontAwesomeIcon icon={faClock} className='text-xl'/>
            <select id='filter' className='bg-white'>
              <option value={"today"}>Today</option>
              <option value={"yesterday"}>Yesterday</option>
              <option value={2} selected>Last 2 days</option>
            </select>
          </div>
        </div>
    </div>
  )
}

export default HeadingBar