import { useState } from "react";
import { Revealonscroll } from "../Revealonscroll";
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_PUBLIC_KEY
        )
            .then(() => {
                setSubmitStatus('success');
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setSubmitStatus(null), 5000);
            })
            .catch(() => {
                setSubmitStatus('error');
                setTimeout(() => setSubmitStatus(null), 5000);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20 relative"
        >
            {/* Green background blobs */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-green-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
                <div className="absolute top-20 right-10 w-80 h-80 bg-green-400/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
            </div>

            <Revealonscroll>
                <div className="px-4 w-full max-w-md mx-auto">
                    <div className="mb-6 text-center">
                        <div className="inline-block mb-4 rounded-full bg-green-500/10 px-5 py-1.5 text-sm text-green-400 backdrop-blur-sm border border-green-500/20 transform transition-all hover:scale-105">
                            Contact Me
                        </div>
                    </div>

                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent text-center">
                        Get in touch
                    </h2>

                    <p className="text-gray-300 text-center mb-8 max-w-sm mx-auto">
                        Have a question or want to work together? Feel free to send me a message.
                    </p>

                    {submitStatus === 'success' && (
                        <div className="mb-6 py-3 px-4 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400 text-center backdrop-blur-sm animate-fadeIn flex items-center justify-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Message sent successfully!
                        </div>
                    )}

                    {submitStatus === 'error' && (
                        <div className="mb-6 py-3 px-4 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400 text-center backdrop-blur-sm animate-fadeIn flex items-center justify-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                            Error occurred. Please try again.
                        </div>
                    )}

                    <form className="space-y-5 backdrop-blur-sm bg-gray-900/20 p-6 rounded-lg border border-gray-800/50" onSubmit={handleSubmit}>
                        <div className="relative group">
                            <label htmlFor="name" className="text-sm text-gray-400 mb-1 block ml-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition-all duration-300 focus:outline-none focus:border-green-500 focus:bg-green-500/5 placeholder-gray-500"
                                placeholder="Your name"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="relative group">
                            <label htmlFor="email" className="text-sm text-gray-400 mb-1 block ml-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition-all duration-300 focus:outline-none focus:border-green-500 focus:bg-green-500/5 placeholder-gray-500"
                                placeholder="Your email"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="relative group">
                            <label htmlFor="message" className="text-sm text-gray-400 mb-1 block ml-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                value={formData.message}
                                rows={5}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition-all duration-300 focus:outline-none focus:border-green-500 focus:bg-green-500/5 placeholder-gray-500 resize-none"
                                placeholder="Your message"
                                onChange={handleChange}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/25 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                            disabled={isSubmitting}
                        >
                            <span className="relative z-10 flex items-center justify-center">
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : "Send Message"}
                            </span>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        </button>
                    </form>
                </div>
            </Revealonscroll>
        </section>
    );
};
