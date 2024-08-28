import { faCross, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { activeTabState, categoryWidgetsState, showAddWidgetScreen, tabsState } from '../atoms/dashboardAtom'
import { useRecoilState } from 'recoil'
import Button from './Button'
import AddWidgetForm from './AddWidgetForm'
import { permanentData } from '../atoms/dataAtom'

let modifiedCategory = "";

const AddWidget = () => {
    const [initialData, setInitialData] = useRecoilState(permanentData)
    const [show, setShow] = useRecoilState(showAddWidgetScreen);
    const [activeTab, setActiveTab] = useRecoilState(activeTabState)
    const [tabs, setTabs] = useRecoilState(tabsState)
    const [categoryWidgets, setCategoryWidgets] = useRecoilState(categoryWidgetsState)

    useEffect(() => {
        setCategoryWidgets(getCategoryWidgets(activeTab))

    }, [activeTab])

    const onTabClickHandler = (tabName) => {
        setActiveTab(tabName)
        const widgets = getCategoryWidgets(tabName)
        setCategoryWidgets(widgets)
    }

    const getCategoryWidgets = (categoryName) => {
        const searchCategory = initialData.categories.find((item) => {
            return item.category == categoryName
        })
        modifiedCategory = categoryName;
        return searchCategory.widgets
    }

    const handleCancel = () => {
        setShow(false);
    }
    const handleSubmit = () => {
        if (!modifiedCategory) {
            setShow(false)
            console.log("not hehe, ", modifiedCategory)
            return;
        }

        // update the main JSON initialData to make the change permanent
        const widgets = initialData.categories.find(item => item.category === modifiedCategory);
        const tempData = JSON.parse(JSON.stringify(initialData)); // create deep copy, because initialData is immutable

        // Find the category and update its widgets[]
        const category = tempData.categories.find(item => item.category === modifiedCategory);
        if (category) {
            category.widgets = [...categoryWidgets];
        }
        setInitialData(tempData);
        setShow(false);
        // handle DB storage or API call to server here for permanent storage
    }


    return (
        <div className={`h-[100vh] min-w-[40vw] bg-white  rounded absolute z-10 right-0 shadow-2xl ${show ? "" : "hidden"} `}>
            <div className='flex justify-between bg-indigo-900 text-white font-semibold text-xl h-[5vh] p-3 ' >
                <h3>
                    Add Widget
                </h3>
                <FontAwesomeIcon
                    icon={faX}
                    className='cursor-pointer hover:scale-125 transition-all '
                    onClick={() => setShow(false)}
                />
            </div>
            <div className='p-3 flex flex-col h-[95vh] '>
                <h4>Personalise your dashboard by adding the following widget</h4>
                <div className='flex p-5 '>
                    {tabs.map((elem, index) => (
                        <div
                            className={`p-3 border-b-4 cursor-pointer shadow-md active:border-indigo-900 ${activeTab !== elem ? 'active' : 'border-indigo-900'
                                } `}
                            onClick={() => {
                                onTabClickHandler(elem)
                            }}
                            key={index}
                        >{elem}</div>
                    ))}
                </div>
                <div className='flex flex-col p-3 '>
                    {categoryWidgets.map((item, index) => {

                        return <div className='flex border-2 border-gray-300 rounded-lg p-3 m-2 ' key={index}>
                            <input type='checkbox' className='w-6 ' defaultChecked />
                            <div key={index} className='p-2'>{item.widgetName}</div>
                        </div>
                    })}
                </div>
                {<AddWidgetForm />}
                <div className='flex justify-end mt-auto' >
                    <Button text={"Cancel"} onClickHandler={handleCancel} className={`px-8 bg-white text-slate-900 border-2 border-slate-900 `} />
                    <Button text={"Submit"} onClickHandler={handleSubmit} className={`px-8 bg-slate-900 text-white border-2 border-slate-900 `} />
                </div>
            </div>
        </div>
    )
}

export default AddWidget