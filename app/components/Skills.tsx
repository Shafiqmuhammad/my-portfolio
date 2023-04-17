import Image from "next/image";
import MyPhoto1 from 'public/aboutme.png'


const Skills = () => {
    return (
        <div className="about-container ml-60 mt-10">
            <h2 className=" text-5xl text-white font-extrabold ... mb-3">Skills</h2>
            <div className="flex-about text-black text-lg gap-6 grid grid-cols-3 justify-self-auto mr-40">
             
            <a  className="shadow-md shadow-gray-100 inline-block text-lg w-40 h-15 px-4  py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-black font-bold hover:bg-orange-400 mt-4 lg:mt-0 text-center">HTML</a>

            <a  className="shadow-md shadow-gray-100 inline-block text-lg w-40 h-15 px-4  py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-pink-400 font-bold hover:bg-blue-500 mt-4 lg:mt-0 text-center">CSS</a>

            <a  className="shadow-md shadow-gray-100 inline-block text-lg w-40 h-15 px-4  py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-pink-400 font-bold hover:bg-yellow-300 mt-4 lg:mt-0 text-center">JavaScripts</a>

            <a  className="shadow-md shadow-gray-100 inline-block text-lg w-40 h-15 px-4  py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-red-800 font-bold hover:bg-orange-400 mt-4 lg:mt-0 text-center">React</a>

            <a  className="shadow-md shadow-gray-100 inline-block text-lg w-40 h-15 px-4  py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-red-800 font-bold hover:bg-orange-400 mt-4 lg:mt-0 text-center">Node</a>

            <a  className="shadow-md shadow-gray-100 inline-block text-lg w-40 h-15 px-4  py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-red-800 font-bold hover:bg-orange-400 mt-4 lg:mt-0 text-center">TypeScripts</a>

            <a  className="shadow-md shadow-gray-100 inline-block text-lg w-40 h-15 px-4  py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-red-800 font-bold hover:bg-orange-400 mt-4 lg:mt-0 text-center">Figma</a>

            <a  className="shadow-md shadow-gray-100 inline-block text-lg w-40 h-15 px-4  py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-red-800 font-bold hover:bg-orange-400 mt-4 lg:mt-0 text-center">Chakra-UI</a>

            <a  className="shadow-md shadow-gray-100 inline-block text-lg w-40 h-15 px-4  py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-red-800 font-bold hover:bg-orange-400 mt-4 lg:mt-0 text-center">Tailwind CSS</a>

            </div>
        </div>





    )
}

export default Skills;