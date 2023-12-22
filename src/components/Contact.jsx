import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>To Do | Contact</title>
            </Helmet>
            <h3 className="text-3xl font-medium my-5 text-center lg:my-10">Contact with Us</h3>
            <div className="flex md:ml-4 lg:ml-0 justify-center items-center md:gap-10 flex-col lg:flex-row ">
                <div className="md:w-1/3 mt-5 mx-2 lg:mx-0 ">
                    <h3 className="text-xl md:text-3xl font-medium ">Check Our Social Media</h3>
                    <p className="my-5">Let's Know more about us. </p>
                    <div className="flex gap-6 flex-col md:flex-row md:justify-center">
                        <div className="border-2 border-gray-400 rounded-xl p-4 my-2">
                            <Link to="https://twitter.com/">
                                <div className="flex gap-3 items-center">
                                    <CiTwitter />
                                    <span>Twitter</span>
                                </div>
                            </Link>
                        </div>
                        <div className="border-2 border-gray-400 rounded-xl p-4 my-2">
                            <Link to="https://www.youtube.com/">
                                <div className="flex gap-3 items-center">
                                    <CiYoutube />
                                    <span>Youtube</span>
                                </div>
                            </Link>
                        </div>
                        <div className="border-2 border-gray-400 rounded-xl p-4 my-2">
                            <Link to="https://www.facebook.com/">
                                <div className="flex gap-3 items-center">
                                    <CiFacebook />
                                    <span>Facebook</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="md:px-6 lg:px-8 w-2/3">

                    <form className="mx-auto mt-5 max-w-xl">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

                            <div className="sm:col-span-2">
                                <label htmlFor="company" className="block text-sm font-semibold leading-6 ">
                                    Full Name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 ">
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 ">
                                    Phone Number
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text" className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>


                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 ">
                                    Message
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        rows={4}
                                        className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-info  w-full mt-5 ">Send Message</button>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default Contact;