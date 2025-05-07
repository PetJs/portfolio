import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    // service_rpr7ad9
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true);
        try{
            await emailjs.send(
                'service_rpr7ad9', 
                'template_3b2nbhs',
                {
                    from_name: form.name,
                    to_name: 'Peter Fagoroye',
                    from_email: form.email,
                    to_email: 'peterfagoroye76@gmail.com',
                    message: form.message
                },
                'XR5cWDaUpFo010AeZ'
            )
            setLoading(false);
            alert('Your Message has been Sent')
            setForm({
                name: '',
                email: '',
                message: ''
            })
        }catch(error: any){
            setLoading(false);
            console.log(error)
            alert("Something Went Wrong");
        }

        
    }

    return (
        <section className="sm:px-10 px-5 my-20">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen" />

                <div className="max-w-xl relative z-10 sm:px-10 px-5 mt-12">
                    <h3 className="sm:text-4xl text-3xl font-semibold text-gray_gradient">Let's Talk</h3>
                    <p className="text-lg text-[#AFB0B6]">Whether you're looking to build a new website, improve your existing platform, or build a unique project to life, I'm here to help.</p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-2 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="text-lg text-[#AFB0B6]">Full Name</span>
                            <input 
                                type="text"
                                name="name"
                                value={form.name} 
                                onChange={handleChange}
                                required
                                className=" w-full bg-black-300 px-5 py-2 min-h-14 rounded-lg placeholder:text-[#62646C] text-lg text-[#E4E4E6] shadow-[#0E0E10] shadow-2xl focus:outline-none"
                                placeholder="Your Name"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="text-lg text-[#AFB0B6]">Email</span>
                            <input 
                                type="email"
                                name="email"
                                value={form.email} 
                                onChange={handleChange}
                                required
                                className=" w-full bg-black-300 px-5 py-2 min-h-14 rounded-lg placeholder:text-[#62646C] text-lg text-[#E4E4E6] shadow-[#0E0E10] shadow-2xl focus:outline-none"
                                placeholder="@gmail.com"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="text-lg text-[#AFB0B6]">Your Message</span>
                            <textarea 
                                name="message"
                                value={form.message} 
                                onChange={handleChange}
                                required
                                rows={5}
                                className=" w-full bg-black-300 px-5 py-2 min-h-14 rounded-lg placeholder:text-[#62646C] text-lg text-[#E4E4E6] shadow-[#0E0E10] shadow-2xl focus:outline-none"
                                placeholder="Hi, I want to give you a job ..."
                            />
                        </label>
                        <button 
                            className="bg-[#3A3A49] px-5 py-2 min-h-12 rounded-lg shadow-black-200 shadow-2xl flex justify-center items-center text-lg text-white gap-3" 
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Sending ..." : "Send Message"}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="w-2.5 h-2.5 object-contain invert brightness-0" />
                        </button>
                    </form>
                </div>
                
            </div>
        </section>
    )
}

export default Contact;