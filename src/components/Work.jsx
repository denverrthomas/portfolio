import Image from "next/image";

const Work = () => {
    return ( 
        <div className="flex justify-center h-[2000px]" id="work">
            <div className="flex flex-box p-10 g-3 w-4/5 justify-between">
                <div className="flex flex-col flex-box about-pictures">
                    <div>
                    <video src={'/videos/adhd.mp4'} width="600" height="300" loop autoPlay muted className="object-cover rounded-xl mt-72 scale-100 hover:scale-110 transition border-2 border-pink-400"/>
                    </div>
                    <div className="h-[400px] w-[400px] my-20">
                    <video src={'/videos/adhd.mp4'} width="600" height="300" loop autoPlay muted className="object-cover rounded-xl mt-72 scale-100 hover:scale-110 transition border-2 border-pink-400"/>
                    </div>
                    <div className="h-[500px] w-[500px] my-10 ml-20">
                    <video src={'/videos/adhd.mp4'} width="600" height="300" loop autoPlay muted className="object-cover rounded-xl mt-72 scale-100 hover:scale-110 transition border-2 border-pink-400"/>
                    </div>
                </div>
                <div className="w-[400px] h-[600px] sticky top-0 pt-10 mt-20">
                    <div className="text-left">
                        <h2 className="my-5 font-extrabold">Interactive and responsive websites</h2>
                        <h3 className="font-bold">I'm here to tell a story.</h3>
                        <p className="leading-9 font-light mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsam quos, sit eos quisquam delectus, architecto explicabo veniam nostrum itaque at quasi exercitationem, quae earum rem deserunt doloribus. Eveniet hic veritatis neque, corporis explicabo delectus alias. Ut nam cum voluptatum!</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Work;