import { useState } from "react";

const ContactBox = () => {
    const [canSend, setCanSend] = useState(false);
    return ( 
        <div className="h-[400px] w-[500px] bg-white bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl flex flex-col items-center gap-5">
            <form className="flex flex-col items-center justify-center h-[300px] w-[500px]">
                <label htmlFor="email" className="text-white p-1 mt-4 ">Your Email</label>
                <input type="text" className="w-3/4 p-1 text-gray-600"/>
                <label htmlFor="Subject" className="text-white p-1 mt-4">Subject</label>
                <input type="text" className="w-3/4 p-1 text-gray-600"/>
                <label htmlFor="Subject" className="text-white p-1 mt-4">Message</label>
                <textarea name="Message" id="" cols="30" rows="10" className="w-3/4 p-1 text-gray-600"></textarea>
            </form>
            <button className='hover:bg-gray-700 hover:border-gray-700 text-white py-2 px-5 border-2 border-white rounded-full w-1/2'>Send</button>
        </div>
     ); 
}
 
export default ContactBox;