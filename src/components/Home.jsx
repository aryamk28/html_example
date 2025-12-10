import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Home() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center px-6 md:px-20 lg:px-32 bg-[#fafafa]"
        >
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 items-center" style={{ display: "flex", gap: "100px" }}>

                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col space-y-5 text-blue-600 text-2xl"
                >
                    <a
                        href="https://github.com/aryamk28/html_example"
                        className="hover:text-blue-800 transition"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.instagram.com/__aryyyaa/?hl=en"
                        className="hover:text-blue-800 transition"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/arya-m-k-1998aa320/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-xl hover:text-blue-800 transition"
                    >
                        <FaLinkedin />
                    </a>
                </motion.div>



                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="col-span-2 md:col-span-1"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Arya M K <span className="inline-block">👋</span>
                    </h1>

                    <p className="text-lg mt-2 text-gray-700 flex items-center gap-3">
                        <span className="w-10 h-[2px] bg-gray-400"></span> Java Full-Stack Developer
                    </p>

                    <p className="mt-5 text-gray-600 leading-relaxed max-w-lg">
                        Hi, I’m Arya — a passionate Java Full Stack Developer currently pursuing full-stack development, with a strong foundation in modern front-end technologies. I’ve already completed my front-end training and built several responsive, user-friendly projects using React, JavaScript,etc. I’m now expanding my skills into backend development with Java, Spring Boot, and REST APIs to become a complete full-stack engineer.
                    </p>




                    <br /><br /><br />

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex justify-center md:justify-end"
                    >
                        <img
                            src="arya.jpg"
                            alt="profile"
                            className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full shadow-md"
                        />
                    </motion.div>

                </motion.div>

                <a
                    href="https://wa.me/918138860620?text=Hi%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-15 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-14 rounded-xl items-center  transition text-center " style={{ width: "200px", textAlign: "center" }}
                >
                    Say Hello
                </a>

            </div>
        </section>
    );
}
