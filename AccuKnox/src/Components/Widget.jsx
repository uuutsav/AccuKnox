import React, { useEffect } from 'react'
import Graphs from './Graphs'

const Widget = ({title, text, isGraph}) => {

    useEffect(()=> {
        console.log("redered : Widget")
    
      }, [])
    return (
        <div className='h-[30vh] w-1/3 bg-white py-2 px-5 rounded-2xl'>
            <h2 className='h-1/6 flex items-center font-semibold '>{title}</h2>
            <div className='flex h-5/6'>
                <div className='w-[100%]'>
                    {isGraph ? <Graphs graphData={text}/> : <h3>{text}</h3>}
                    {/* <Graphs /> */}
                </div>
            </div>
        </div>
    )
}

export default Widget