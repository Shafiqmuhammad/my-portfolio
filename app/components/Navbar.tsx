'use client'
import Link from "next/link";
import Image from "next/image";
import logoPic from "public/shafiq.png";

export default function Nav () {

    return (  
    
  <nav className="flex p-3 sticky top-0">
  <div className="flex  items-center flex-shrink-0 text-white font-bold mr-6">
      <figure className="max-w-lg" >
        
      <Image 
      src={logoPic} 
      alt={"Panaverse Logo"}
      height={30}
      width={30}
      
      className="rounded-full"  />

      </figure>
      <span className="font-semibold text-xl tracking-tight " style={{paddingLeft:"10px"}} > Shafiq Portfolio</span>
    </div>



    
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">

      <div className="text-xl lg:flex-grow font-semibold tracking-tight" >
  
       </div>
      <div>
        <a href="https://docs.google.com/document/d/10ZosQ38Z3804KYPcb_aZp9bceoXK-q3GrkHjYshqIRE/edit#heading=h.yk8luflkpwij/" className="inline-block text-sm px-4  py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-purple-700 hover:bg-white mt-4 lg:mt-0">Resume</a>
      </div>
    </div>  
  </nav>
  
    )
  }