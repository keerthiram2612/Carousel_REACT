import React from 'react'
import "./App.css"
import {Carousel} from './Components/Carousel'

const slides = [
  {
    "src":" https://picsum.photos/seed/img1/600/400",
     "alt":" Image 1 for carousel"
},
{
    "src":" https://picsum.photos/seed/img2/600/400",
     "alt":" Image 2 for carousel"
},
{
    "src":" https://picsum.photos/seed/img3/600/400",
     "alt":" Image 3 for carousel"
}
]
const App=() =>{
  return (
    <div>
      <Carousel data = {slides}/>
    </div>
  )
}
export default App;
