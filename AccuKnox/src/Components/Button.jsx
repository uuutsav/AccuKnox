import React, { useEffect, useRef } from 'react'

const Button = ({ className, text, onClickHandler }) => {
    const tempRef = useRef()
    useEffect(() => {

    }, [])
    return (
        <div className='m-2 '>
            <div ref={tempRef} 
            className={`p-3 text-center bg-indigo-900 text-white rounded-lg cursor-pointer ${className} hover:scale-110 hover:transition-all `}
            onClick={onClickHandler}
            >{text}</div>
        </div>
    )
}

export default Button