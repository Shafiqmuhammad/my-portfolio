import MyPhoto from '../public/shafiq-pic.png'
import Image from 'next/image'
import About from './components/About'
import Hero from './components/Hero'
import Nav from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Project'
import Contact from './components/Contact'
export default function Home(){
  return(
    <>
    <Nav />

  
  <div className="ml-64 container flex origin-center">
  <figure className="max-w-lg " >
        
        <Image 
            src={MyPhoto} 
            alt={"Panaverse Logo"}
            height={100}
            width={100}
            
            
            
            className="w-60 h-60  object-cover rounded-full object-top" />
      
            </figure>
  <div className="details pr-10 ml-10 mt-28 ">
 
  <div className="text-5xl font-extrabold ... ">
    <div>
  <span className="text-black">
     Hey, I am 👋

  </span></div>
  <span className="animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-pink-100 to-yellow-300">
    Muhammad Shafiq 

  </span>
</div>
    <p className="outline outline-offset-2 outline-black mt-3 text-black text-center font-bold">Metaverse / Web Developer  Ui/Ux Designer</p>
    <br />
   
   
  </div>

  
</div>
<Hero />
<About />
<Skills />
<Projects />
<Contact />



</>
  
  )
}