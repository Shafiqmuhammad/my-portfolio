import Image from "next/image";
import MyPhoto1 from 'public/aboutme.png'


const About = () => {
    return (
        <div className="about-container ml-60">
            <h2 className="text-5xl text-white font-extrabold ... mb-3">About Me</h2>
            <div className="flex-about grid grid-cols-2 text-justify text-black text-lg">
                <div className="about-text">
                    <b>
                    <p>
                        As a developer, I have always been passionate about creating elegant and effective solutions to complex problems. I have a strong foundation in software development, with a focus on web technologies such as HTML, CSS, and JavaScript. I enjoy working on both the front-end and back-end of applications, and I am always looking for ways to optimize performance, improve user experience, and ensure the highest level of code quality.
                    </p>
                    <p>Throughout my career, I have worked on a wide range of projects, from simple static websites to complex enterprise-level applications. I am experienced in working with a variety of development tools and frameworks, including React, Angular, Vue.js, Node.js, and Laravel. I am always eager to learn and explore new technologies, and I am constantly seeking out opportunities to improve my skills and knowledge.</p>
                    </b>
                </div>
                <div className="about-img ml-20 py-20 animate-bounce">
                <figure className="max-w-lg " >
        
            <Image 
            src={MyPhoto1} 
            alt={"Panaverse Logo"}
            height={400}
            width={400}
            
            
            
            className="w-60 h-60  object-cover rounded-full object-top" />
      
            </figure>                </div>
            </div>
        </div>

    )
}

export default About;