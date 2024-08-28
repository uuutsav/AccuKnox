import React, { useEffect } from 'react'
import Graphs from './Graphs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumpster, faRecycle, faTrash, faX } from '@fortawesome/free-solid-svg-icons'
import { useRecoilState } from 'recoil'
import { permanentData } from '../atoms/dataAtom'

const Widget = ({ title, text, isGraph, categoryName, i }) => {
    const [data, setData] = useRecoilState(permanentData)

    useEffect(() => {
        console.log("redered : Widget")

    }, [])

    const onDeleteHandler = () => {

        const currentCategory = data.categories.find(item => item.category === categoryName);
        const tempData = JSON.parse(JSON.stringify(data)); // create deep copy, because data is immutable
        const newWidgetArr = currentCategory.widgets.filter((_, index) => index != i);
        tempData.categories.find(item => item.category === categoryName).widgets = newWidgetArr;
        const originalWidgets = currentCategory.widgets;

        setData(tempData);
    }
    return (
        <div className='h-[30vh] w-1/3 bg-white py-2 px-5 rounded-2xl'>
            <div className='flex justify-between items-center mt-1 '>
                <h2 className='h-1/6 flex items-center font-semibold text-lg '>{title}</h2>
                <FontAwesomeIcon icon={faTrash} className='text-lg cursor-pointer hover:scale-125 ' onClick={onDeleteHandler} />
            </div>
            <div className='flex h-5/6'>
                <div className='w-[100%]'>
                    {isGraph ? <Graphs graphData={text} /> : <h3 className='mt-3'>{text}</h3>}
                    {/* <Graphs /> */}
                </div>
            </div>
        </div>
    )
}

export default Widget