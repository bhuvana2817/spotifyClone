import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'


const DisplayHome = () => {
    return (
        <>
            <Navbar />
            <div className='my-5 font-bold text-2xl'>
                <h1 className='my-5 font-bold'>Featured Charts</h1>
                <div className='flex overflow-auto'>
                    {albumsData.map((items, index) => (<AlbumItem key={index} name={items.name} desc={items.desc} id={items.id} Image={items.image} />))}
                </div>
            </div>
            <div className='my-5 font-bold text-2xl'>
                <h1 className='my-5 font-bold'>Today's Biggest Hit</h1>
                <div className='flex overflow-auto'>
                    {songsData.map((items, index) => (<SongItem key={index} name={items.name} desc={items.desc} id={items.id} Image={items.image} />))}
                </div>
            </div>

        </>
    )
}

export default DisplayHome
