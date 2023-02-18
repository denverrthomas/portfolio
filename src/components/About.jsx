import { Devonshire } from "@next/font/google";
import Image from "next/image";

const About = () => {
    return ( 
        <div className="flex justify-center h-[2000px]" id="about">
            <div className="flex flex-box p-10 g-3 w-4/5 justify-between">
                <div className="w-[400px] h-[400px] sticky top-0 pt-10 mt-20">
                    <div className="text-left">
                        <h2 className="my-5 font-extrabold">Developer and storyteller</h2>
                        <h3 className="font-bold">Coding, Traveling, and Living.</h3>
                        <p className="leading-9 font-light mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsam quos, sit eos quisquam delectus, architecto explicabo veniam nostrum itaque at quasi exercitationem, quae earum rem deserunt doloribus. Eveniet hic veritatis neque, corporis explicabo delectus alias. Ut nam cum voluptatum!</p>
                    </div>
                </div>
                <div className="flex flex-col flex-box about-pictures">
                    <div className="h-[400px] w-[400px] ml-32">
                        <Image src={'/images/about/newpfp.jpg'} alt={'Picture of author'} width={400} height={400} className='object-cover rounded-lg mt-72 transition hover:scale-110 scale-100'/>
                    </div>
                    <div className="h-[400px] w-[400px] my-20">
                        <Image src={'/images/about/hike.jpg'} alt={'Picture of author'} width={400} height={400} className='object-cover rounded-lg mt-72 transition hover:scale-110 scale-100'/>
                    </div>
                    <div className="h-[500px] w-[500px] my-10 ml-20">
                        <Image src={'/images/about/portland.jpg'} alt={'Picture of author'} width={500} height={500} className='object-cover rounded-lg mt-72 transition hover:scale-110 scale-100'/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default About;