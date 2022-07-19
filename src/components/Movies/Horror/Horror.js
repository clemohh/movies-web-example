import React from 'react'
import hell from './images/Hell.png'
import innocent from './images/innocents.png'
import master from './images/master.png'
import worldfear from './images/worldfear.png'
import notmymother from './images/notmymother.png'
import sadness from './images/sadness.png'
import screem from './images/screem.png'
import x from './images/x.png'
import blackphone from './images/blackphone.png'

const Horror = () => {
  return (
    <div className="horror padding:1rem">
  <div className="max-w-2xl mx-auto py-16 px-4 sm:py-2 sm:px-5 lg:max-w-7xl lg:px-8">
    <h2 className="text text-gray-100 ">HORROR</h2>

    <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-1 gap-x-4
     md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-1">
      <a href="#" className="group border">
        <div className=" gap-3 bg-gray-200 rounded-lg 
        overflow-hidden sm:w-5/6 md:w-5/6 lg:w-3/6 xl:h-42 xl:w-42">
          <img src= {hell}
           alt="" 
           className=" w-full h-full  object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 font-medium text-lg text-gray-100">HELLBENDER</h3>
        <p className="flex mt-1 text-lg font-medium  text-black-900">
         <h3 className=''> Synopsis:</h3> A teen and her mother live simply in a home in the woods, 
          spending their time making metal music.</p>
          <p className="mt-1 text-sm font-medium text-black-900">
          Starring: Zelda Adams, Toby Poser, Lulu Adams, John Adams
          </p>
      </a>
      <a href="#Action" className="group border">
        <div className=" gap-3 bg-gray-200 rounded-lg 
        overflow-hidden sm:w-5/6 md:w-4/6 lg:w-3/6 xl:h-42 xl:w-42">
          <img src= {innocent}
           alt="" 
           className=" w-full h-full  object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 font-medium text-lg text-black-700">THE INNOCENTS</h3>
        <p className="flex mt-1 text-lg font-medium text-black-900">
         <h3 className=''> Synopsis:</h3> Terror strikes when a group of Nordic children reveals mysterious powers 
         that take a dark and violent turn</p>
          <p className="mt-1 text-sm font-medium text-black-900">
          Starring: Rakel Lenora Fløttum, Alva Brynsmo Ramstad, Sam Ashraf, Mina Yasmin Bremseth Asheim
          Directed By: Eskil Vogt
          </p>
      </a>
      <a href="#Action" className="group border">
        <div className=" gap-3 bg-gray-200 rounded-lg 
        overflow-hidden sm:w-5/6 md:w-4/6 lg:w-3/6 xl:h-42 xl:w-42">
          <img src= {worldfear}
           alt="" 
           className=" w-full h-full  object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 font-medium text-lg text-black-700">WE'RE ALL GOING TO THE WORLD'S FAIR</h3>
        <p className="flex mt-1 text-lg font-medium text-black-900">
         <h3 className=''> Synopsis:</h3>Late on a cold night somewhere in the U.S., 
         teenage Casey (Anna Cobb in her feature debut) sits alone. </p>
          <p className="mt-1 text-sm font-medium text-black-900">
          Starring: Anna Cobb, Michael J. Rogers
          Directed By: Jane Schoenbrun          </p>
      </a>
      <a href="#Action" className="group border">
        <div className=" gap-3 bg-gray-200 rounded-lg 
        overflow-hidden sm:w-5/6 md:w-4/6 lg:w-3/6 xl:h-42 xl:w-42">
          <img src= {blackphone}
           alt="" 
           className=" w-full h-full  object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 font-medium text-lg text-black-700">THE BLACK PHONE</h3>
        <p className="flex mt-1 text-lg font-medium text-black-900">
         <h3 className=''> Synopsis:</h3>  Finney, a shy but clever 13-year-old boy, 
         is abducted by a sadistic killer and trapped in a soundproof basement where. </p>
          <p className="mt-1 text-sm font-medium text-black-900">
          Starring: Ethan Hawke, Mason Thames, Madeleine McGraw, Jeremy Davies
          Directed By: Scott Derrickson
          </p>
      </a>
      <a href="#Action" className="group border">
        <div className=" gap-3 bg-gray-200 rounded-lg 
        overflow-hidden sm:w-5/6 md:w-4/6 lg:w-3/6 xl:h-42 xl:w-42">
          <img src= {screem}
           alt="" 
           className=" w-full h-full  object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 font-medium text-lg text-black-700">SCREAM</h3>
        <p className="flex mt-1 text-lg font-medium text-black-900">
         <h3 className=''> Synopsis:</h3> Twenty-five years after a streak of brutal murders shocked the
          quiet town of Woodsboro, Calif., a new killer dons </p>
          <p className="mt-1 text-sm font-medium text-black-900">
          Starring: Neve Campbell, Courteney Cox, David Arquette, Melissa Barrera
          Directed By: Matt Bettinelli-Olpin, Tyler Gillett

          </p>
      </a>
      <a href="#Action" className="group border">
        <div className=" gap-3 bg-gray-200 rounded-lg 
        overflow-hidden sm:w-5/6 md:w-4/6 lg:w-3/6 xl:h-42 xl:w-42">
          <img src= {notmymother}
           alt="" 
           className=" w-full h-full  object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 font-medium text-lg text-black-700">YOU ARE NOT MY MOTHER</h3>
        <p className="flex mt-1 text-lg font-medium text-black-900">
         <h3 className=''> Synopsis:</h3>  It's the week before Halloween. Char's bedridden mother, Angela, has mysteriously gone missing. 
         All that remains is her abandoned car. </p>
          <p className="mt-1 text-sm font-medium text-black-900">
          Starring: Jade Jordan, Carolyn Bracken, Hazel Doupe, Paul Reid
          Directed By: Kate Dolan
          </p>
      </a>
      <a href="#Action" className="group border">
        <div className=" gap-3 bg-gray-200 rounded-lg 
        overflow-hidden sm:w-5/6 md:w-4/6 lg:w-3/6 xl:h-42 xl:w-42">
          <img src= {sadness}
           alt="" 
           className=" w-full h-full  object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 font-medium text-lg text-black-700">THE SADNESS</h3>
        <p className="flex mt-1 text-lg font-medium text-black-900">
         <h3 className=''> Synopsis:</h3> The city of Taipei suddenly erupts into bloody chaos as ordinary people are 
         compulsively driven to enact the most cruel. </p>
          <p className="mt-1 text-sm font-medium text-black-900">
          Starring: Regina Lei, Tzu-Chiang Wang, Berant Zhu, Ying-Ru Chen
          Directed By: Rob Jabbaz
          </p>
      </a>
      <a href="#Action" className="group border">
        <div className=" gap-3 bg-gray-200 rounded-lg 
        overflow-hidden sm:w-5/6 md:w-4/6 lg:w-3/6 xl:h-42 xl:w-42">
          <img src= {x}
           alt="" 
           className=" w-full h-full  object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 font-medium text-lg text-black-700">X</h3>
        <p className="flex mt-1 text-lg font-medium text-black-900">
         <h3 className=''> Synopsis:</h3> A group of actors sets
          out to make an adult film in rural Texas under the noses of their reclusive.</p>
          <p className="mt-1 text-sm font-medium text-black-900">
          Starring: Mia Goth, Jenna Ortega, Martin Henderson, Brittany Snow
          Directed By: Ti West
          </p>
      </a>
      <a href="#Action" className="group border">
        <div className=" gap-3 bg-gray-200 rounded-lg 
        overflow-hidden sm:w-5/6 md:w-4/6 lg:w-3/6 xl:h-42 xl:w-42">
          <img src= {master}
           alt="" 
           className=" w-full h-full  object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 font-medium text-lg text-black-700">MASTER</h3>
        <p className="flex mt-1 text-lg font-medium text-black-900">
         <h3 className=''> Synopsis:</h3> At an elite New England university built on the
          site of a Salem-era gallows hill, three women strive to find.</p>
          <p className="mt-1 text-sm font-medium text-black-900">
          Starring: Regina Hall, Zoe Renee, Talia Ryder, Talia Balsam
          Directed By: Mariama Diallo

          </p>
      </a>
       


     
    </div>
  </div>
</div>
  )
}

export default Horror
