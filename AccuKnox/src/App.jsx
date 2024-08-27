import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Category from './Components/Category'
import { data } from './dummyData'
import HeadingBar from './Components/HeadingBar'

function App() {

    useEffect(() => {
        // console.log(data.categories[0].category)
    }, [])

    return (
        <>
            <Navbar />
            <HeadingBar />
            <div className='flex flex-col min-h[94vh] m-10 mt-0 p-5 '>
                {data.categories.map((elem, index) => {
                    // console.log(index)
                    return <Category key={index} categoryName={elem.category} widgets={elem.widgets} />
                })}
            </div>
        </>
    )
}

export default App
