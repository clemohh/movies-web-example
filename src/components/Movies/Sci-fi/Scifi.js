import React from 'react'
import moon from './images/moon.jpg'
import Adam from './images/Adam.jpg'
import crimes from './images/crimes.jpg'
import After from './images/After.jpg'
import pray from './images/pray.jpg'
import dual from './images/dual.jpg'
import space from './images/space.png'
import division from './images/division.jpg'
import distant from './images/distant.jpg'
import border from './images/border.jpg'


const Scifi = () => {
  return (
    <div className='scifi'>
    <div className=" padding:1rem">
  <div className="max-w-2xl mx-auto py-16 px-4 sm:py-2 sm:px-5 lg:max-w-7xl lg:px-8">
    <h2 className="text text-gray-100">Sci-Fi</h2>

    <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-1 gap-x-4
     md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-1">
      <a href="#Action" className="group border-2 border-dotted">
        <div className=" gap-3 bg-gray-200 rounded-lg 
        overflow-hidden sm:w-5/6 md:w-5/6 lg:w-3/6 xl:h-42 xl:w-42">
          <img src= {moon}
           alt="" 
           className=" w-full h-full  object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 font-medium text-lg text-gray-100">Moonfall</h3>
        <p className="flex mt-1 text-lg font-medium  text-black-900">
         <h3 className=''> Synopsis:</h3> A mysterious force knocks the moon 
         from its orbit and sends it hurtling on a collision course toward earth.</p>
          <p className="mt-1 text-sm font-medium text-black-900">
          Starring:  Halle Berry, Patrick Wilson, John Bradley, Charlie Plummer
          <br/>
          Director: Roland Emmerich
          </p>
      </a>
      <a href="#Action" className="group border-2 border-dotted">
        <div className=" gap-3 bg-gray-200 rounded-lg 
        overflow-hidden sm:w-5/6 md:w-5/6 lg:w-3/6 xl:h-42 xl:w-42">
          <img src= {Adam}
           alt="" 
           className=" w-full h-full  object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 font-medium text-lg text-gray-100">The Adam Project</h3>
        <p className="flex mt-1 text-lg font-medium  text-black-900">
         <h3 className=''> Synopsis:</h3>After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12-year-old
          self for a mission to save the future.</p>
          <p className="mt-1 text-sm font-medium text-black-900">
          Starring: Ryan Reynolds, Walker Scobell, Mark Ruffalo, Jennifer Garner
          <br/>
          Director: Shawn Levy
          </p>
      </a>
      <a href="#Action" className="group border-2 border-dotted">
        <div className=" gap-3 bg-gray-200 rounded-lg 
        overflow-hidden sm:w-5/6 md:w-5/6 lg:w-3/6 xl:h-42 xl:w-42">
          <img src= {crimes}
           alt="" 
           className=" w-full h-full  object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 font-medium text-lg text-gray-100"> Crimes of the Future (2022)</h3>
        <p className="flex mt-1 text-lg font-medium  text-black-900">
         <h3 className=''> Synopsis:</h3>Humans adapt to a synthetic environment, 
         with new transformations and mutations. With his partner Caprice, Saul Tenser, celebrity performance 
         artist, publicly showcases the metamorphosis of his organs in avant-garde performances.</p>
          <p className="mt-1 text-sm font-medium text-black-900">
          Starring: Viggo Mortensen, Léa Seydoux, Kristen Stewart, Scott Speedman
          <br/>
          Director: David Cronenberg
          </p>
      </a>
      <a href="#Action" className="group border-2 border-dotted">
        <div className=" gap-3 bg-gray-200 rounded-lg 
        overflow-hidden sm:w-5/6 md:w-5/6 lg:w-3/6 xl:h-42 xl:w-42">
          <img src= {After}
           alt="" 
           className=" w-full h-full  object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 font-medium text-lg text-gray-100">After Yang</h3>
        <p className="flex mt-1 text-lg font-medium  text-black-900">
         <h3 className=''> Synopsis:</h3> A teen and her mother live simply in a home in the woods, 
          spending their time making metal music.</p>
          <p className="mt-1 text-sm font-medium text-black-900">
          Starring: Zelda Adams, Toby Poser, Lulu Adams, John Adams
          </p>
      </a>
      <a href="#Action" className="group border-2 border-dotted border-2 border-dotted-dotted">
        <div className=" gap-3 bg-gray-200 rounded-lg 
        overflow-hidden sm:w-5/6 md:w-5/6 lg:w-3/6 xl:h-42 xl:w-42">
          <img src= {pray}
           alt="" 
           className=" w-full h-full  object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 font-medium text-lg text-gray-100">Prey</h3>
        <p className="flex mt-1 text-lg font-medium  text-black-900">
         <h3 className=''> Synopsis:</h3>The origin story of the Predator in the world of the Comanche Nation
          300 years ago. Naru, a skilled female warrior, 
          fights to protect her tribe against one of the first highly-evolved Predators to land on Earth.</p>
          <p className="mt-1 text-sm font-medium text-black-900">
          Starring: Amber Midthunder, Dane DiLiegro, Harlan Blayne Kytwayhat, Geronimo Vela
          <br/>
          Director: Dan Trachtenberg
          </p>
      </a>  <a href="#Action" className="group border-2 border-dotted">
        <div className=" gap-3 bg-gray-200 rounded-lg 
        overflow-hidden sm:w-5/6 md:w-5/6 lg:w-3/6 xl:h-42 xl:w-42">
          <img src= {space}
           alt="" 
           className=" w-full h-full  object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 font-medium text-lg text-gray-100">Spaceman (2022)</h3>
        <p className="flex mt-1 text-lg font-medium  text-black-900">
         <h3 className=''> Synopsis:</h3> Jakub Procházka, orphaned as a boy and raised in the Czech countryside 
         by his grandparents, overcomes his odds to become the country's first astronaut.</p>
          <p className="mt-1 text-sm font-medium text-black-900">
          Starring: Adam Sandler, Paul Dano, Carey Mulligan, Isabella Rossellini
          <br/>
          Director: Johan Renck
          </p>
      </a>  <a href="#Action" className="group border-2 border-dotted">
        <div className=" gap-3 bg-gray-200 rounded-lg 
        overflow-hidden sm:w-5/6 md:w-5/6 lg:w-3/6 xl:h-42 xl:w-42">
          <img src= {distant}
           alt="" 
           className=" w-full h-full  object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 font-medium text-lg text-gray-100">Distant (2023)</h3>
        <p className="flex mt-1 text-lg font-medium  text-black-900">
         <h3 className=''> Synopsis:</h3>It follows an asteroid miner who, after crash-landing on an alien planet, 
         must make his way across the harsh terrain, running out of oxygen, hunted by strange creatures, 
         to the only other survivor.</p>
          <p className="mt-1 text-sm font-medium text-black-900">
          Starring: Anthony Ramos, Naomi Scott, Kristofer Hivju, Zachary Quinto
          <br/>
          Directors: Josh Gordon, Will Speck
          </p>
      </a>
      <a href="#Action" className="group border-2 border-dotted">
        <div className=" gap-3 bg-gray-200 rounded-lg 
        overflow-hidden sm:w-5/6 md:w-5/6 lg:w-3/6 xl:h-42 xl:w-42">
          <img src= {dual}
           alt="" 
           className=" w-full h-full  object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 font-medium text-lg text-gray-100">Dual</h3>
        <p className="flex mt-1 text-lg font-medium  text-black-900">
         <h3 className=''> Synopsis:</h3> Quirky and disarmingly deadpan, Dual exists in a future when a clone of yourself 
         can live on in your place if you come down with a terminal illness.</p>
          <p className="mt-1 text-sm font-medium text-black-900">
          Starring: 
          </p>
      </a>
      <a href="#Action" className="group border-2 border-dotted">
        <div className=" gap-3 bg-gray-200 rounded-lg 
        overflow-hidden sm:w-5/6 md:w-5/6 lg:w-3/6 xl:h-42 xl:w-42">
          <img src= {border}
           alt="" 
           className=" w-full h-full  object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 font-medium text-lg text-gray-100">border-2 border-dottedlands</h3>
        <p className="flex mt-1 text-lg font-medium  text-black-900">
         <h3 className=''> Synopsis:</h3> A feature film based on the popular video game set on the abandoned fictional planet
          of Pandora where people search for a mysterious relic.</p>
          <p className="mt-1 text-sm font-medium text-black-900">
          Starring: Stars: Kevin Hart, Cate Blanchett, Jamie Lee Curtis, Haley Bennett
          <br/>
          Director: Eli Roth
          </p>
      </a>
      <a href="#Action" className="group border-2 border-dotted">
        <div className=" gap-3 bg-gray-200 rounded-lg 
        overflow-hidden sm:w-5/6 md:w-5/6 lg:w-3/6 xl:h-42 xl:w-42">
          <img src= {division}
           alt="" 
           className=" w-full h-full  object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 font-medium text-lg text-gray-100">The Division</h3>
        <p className="flex mt-1 text-lg font-medium  text-black-900">
         <h3 className=''> Synopsis:</h3> In the near future, a pandemic virus is spread via paper money on Black Friday, decimating New York. A group of civilians, trained to operate in catastrophic times, are activated in an attempt to save who and what remains.</p>
          <p className="mt-1 text-sm font-medium text-black-900">
          Starring: Jessica Chastain, Jake Gyllenhaal
          <br/>
          Director: Rawson Marshall Thurber
          </p>
      </a>

      </div>
    </div>
  </div>
</div>
  )
}

export default Scifi