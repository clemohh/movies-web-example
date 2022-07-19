import React from 'react'
import './Movies.css'
import Action from './Action/Action'
import Comedy from './Comedy/Comedy'
import Drama from './Drama/Drama'
import Holywood from './Hollywood/Holywood'
import Horror from './Horror/Horror'
import Scifi from './Sci-fi/Scifi'

const Movies = () => {
  return (
    <div className=" movies max-w-7xl mx-auto py-3 sm:px-6 lg:px-1">
    < div className='border-4 border-dashed border-gray-200 rounded-lg '>
    <h2 className='movies-h2'> Movies </h2>
    <ul>
    <Action/>
    <Drama/>
    <Scifi/>
    <Comedy/>
    <Horror/>
    <Holywood/>
    </ul>
    </div>
    </div>
  )
}

export default Movies