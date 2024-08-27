import React from 'react'
import Widget from './Widget'

const Category = ({ categoryName, widgets }) => {

    return (
        <div>
            <h2 className='text-xl font-bold my-1'>
                {categoryName ? categoryName : "No category name"}
            </h2>
            <div className='flex flex-row gap-3'>
                {widgets && widgets.map((elem, index) => {
                    // console.log(elem.widgetText)
                    {console.log(elem.isGraph)}

                    return <Widget key={index} title={elem.widgetName} isGraph={elem.isGraph} text={elem.widgetText} />
                })}
            </div>
        </div>
    )
}

export default Category