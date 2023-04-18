import React from 'react'
import '../styles/Main.scss'
import MainSlider from './MainSlider'
import Destacados from './Destacados'


const Main = () => {
    return (
        <div className='main_container'>
            <MainSlider />
            <Destacados />
        </div>
    )
}

export default Main