import ContactBox from "./ContactBox";

const Contact = () => {
    return ( 
        <div className="flex flex-col items-center gap-6 h-screen bg-fixed bg-center bg-cover bg-none background" id="contact">
            <div className="p-4 w-3/4 flex mt-10 flex-col items-center">
                <h2 className="my-5 text-center">Like what you see?</h2>
                <h3 className="font-bold text-center mb-10">Contact me today!</h3>
                <ContactBox/>
            </div>
        </div>
     );
}
 
export default Contact;