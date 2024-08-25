import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const NavSearchBar = () => {
    return (
        <div className='flex bg-[#f1f5fa] w-[30vw] border-2 border-[#e1ebfe] rounded-sm '>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-[#f1f5fa] p-1 font- text-lg mt-1 mx-1 text-gray-500' />
            <input
                type='text' placeholder='Search anything...'
                className='bg-[#f1f5fa] p-1 w-full'
            ></input>
        </div>
    )
}

export default NavSearchBar