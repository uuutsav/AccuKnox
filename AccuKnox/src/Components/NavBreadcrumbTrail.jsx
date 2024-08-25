import React from 'react'
import { breadcrumb_stack } from '../dummyData'

const NavBreadcrumbTrail = ({ }) => {
    return (
        <div className='my-auto '>
            {breadcrumb_stack.map((elem, index) => {
                return (
                    <div key={index} className='inline-block text-gray-500 cursor-pointer'>
                        {index < breadcrumb_stack.length - 1 && elem}
                        {index < breadcrumb_stack.length - 1 && " > "}
                    </div>
                )
            })}
            <strong>{breadcrumb_stack[breadcrumb_stack.length-1]}</strong>
        </div>
    )
}

export default NavBreadcrumbTrail