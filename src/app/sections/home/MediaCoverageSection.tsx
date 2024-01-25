import MediaCoverageList from '@/components/organisms/mediaCoverageList/mediaCoverageList';
import React from 'react'

const MediaCoverageSection = () => {
  return (
    <div className='box-border flex flex-col'>
        <p className='lg:text-4xl text-3xl my-5 px-2.5 text-center text-primaryBlue lg:font-bold font-semibold'>Rextie en los medios</p>
        <p className='my-4 px-2.5 text-center lg:text-sm text-xs'>Encuentra artículos y noticias en medios que hablan de nuestra casa de cambio online.</p>
        <div className='box-border lg:px-60 w-full flex lg:flex-row flex-col justify-center lg:items-start items-center gap-7'>
            <iframe className='rounded-xl lg:w-2/4 lg:h-72 w-11/12 h-48' src="https://www.youtube.com/embed/j3s5nfNl12Q?si=JYslYU-iIhbtRUql" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <MediaCoverageList/>
        </div>
    </div>
  )
}

export default MediaCoverageSection; 