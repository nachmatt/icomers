import React from 'react'
import Destacados from './Highlighted'
import MainSlider from './MainSlider'
import '../../styles/main/Main.scss'
// import data from './Data'

const Main = () => {
    return (
        <div className='main__container'>
            <MainSlider />
            <Destacados /> 
        </div>
    )
}

export default Main

// LibraryManagedAttributess cambio en index.d.ts por conflicto de duplicación