import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Widget from './Components/Widget'
import Category from './Components/Category'
import { data } from './dummyData'

function App() {

    useEffect(() => {
        // console.log(data.categories[0].category)
    }, [])

    return (
        <>
            <Navbar />
            <div className='flex flex-col min-h[94vh] m-10 p-5 '>

            {data.categories.map((elem, index) => {
                // console.log(index)
                return <Category key={index} categoryName={elem.category} widgets={elem.widgets} />
            })}
            </div>
        </>
    )
}

export default App
