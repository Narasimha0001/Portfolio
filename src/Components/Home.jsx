import Narasimha from '../Images/Narasimha.jpg';
import '../Components/Home.css';
import Skills from './Skills';
import ProjectPreview from './ProjectPreview';

export default function Home() {
    return(
        <>
            <div className='img'>
            <img src={Narasimha} alt="" className='project-img'/> 
            </div>
            <h1 className='name'>Mudhena NarasimhaRao</h1>

            <h3 className='objective'>Driven Full Stack Developer with a versatile toolkit (Java, Python, React, MySQL) and a commitment to crafting high-quality, impactful software. My objective is to apply my blend of analytical problem-solving and creative design to develop applications that connect, inspire, and endure, contributing to projects that make a tangible difference in the digital landscape."
</h3>
        <Skills/>
        <ProjectPreview/>
        </>
    )
}