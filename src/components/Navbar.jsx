import { motion } from 'framer-motion';
import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <motion.div
        initial={{opacity:0}}
        animate= {{opacity:1}}
        transition={{ease:"linear",duration:1,delay:0.3}}
        className="text-2xl font-bold">Portfolio</motion.div>
        <motion.div
        initial={{opacity:0}}
        animate= {{opacity:1}}
        transition={{ease:"linear",duration:1,delay:0.3}}
        className="flex space-x-4">
          <a href="https://www.linkedin.com/in/sujith-s-devadiga-b2a80a253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noreferrer">
            <FaLinkedin className="text-xl" />
          </a>
          <a href="https://github.com/Sujith-33" target="_blank" rel="noreferrer">
            <FaGithub className="text-xl" />
          </a>
          <a href="https://www.instagram.com/dsujiths?igsh=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noreferrer">
            <FaInstagram className="text-xl" />
          </a>
          <a href="https://x.com/SujithSDevadig5?t=i7s2hpMGe3GFysDpqNywkg&s=09" target="_blank" rel="noreferrer">
            <FaTimes className="text-xl" />
          </a>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
