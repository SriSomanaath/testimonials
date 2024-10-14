"use client";

import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import styles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  // const [scrolled, setScrolled] = useState(false);
  // const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (event:any) => {
    event.preventDefault();
  };

  const handleDropdown = (menu:any) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 50) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      //   setIsOpen(false);
      //   setOpenDropdown(null);
      // }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    // <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <header className={styles.header}>
      <div className="container">
      <nav className={styles.nav}>
        <div className={styles.logoWrapper}>
          <a href="https://opencv.org/university/?utm_source=jobs&utm_medium=menu" >
            <div className={styles.img_conatiner}>
              <img
                // src={scrolled ? "https://opencv.org/university/wp-content/uploads/sites/4/2023/04/logo.png" : "https://opencv.org/university/wp-content/uploads/sites/4/2023/02/FooterLogoBlack.png"}
                src={"https://opencv.org/university/wp-content/uploads/sites/4/2023/02/FooterLogoBlack.png"}
                alt="logo"
                className={styles.logoImage}
              />
            </div>
          </a>
        </div>
        <div className={styles.menuWrapper}>
          <ul className={styles.navMenu}>
            <li>
              <a href="#" onClick={handleClick}>Courses
              <span className={styles.subArrow}><IoIosArrowDown fontSize={"1.2rem"} className={styles.subArrowIcon}/></span>  
              </a>   
              <ul className={styles.dropdownMenu}>
                <li><a href="https://opencv.org/university/courses/?utm_source=jobs&utm_medium=menu" className={styles.dropdownItem}>All Courses</a></li>
                <li><a href="https://opencv.org/university/mastering-opencv-with-python/?utm_source=jobs&utm_medium=menu" className={styles.dropdownItem}>Mastering OpenCV with Python</a></li>
                <li><a href="https://opencv.org/university/fundamentals-of-computer-vision-and-image-processing/?utm_source=jobs&utm_medium=menu" className={styles.dropdownItem}>Fundamentals of CV & IP</a></li>
                <li><a href="https://opencv.org/university/deep-learning-with-pytorch/?utm_source=jobs&utm_medium=menu" className={styles.dropdownItem}>Deep Learning with PyTorch</a></li>
                <li><a href="https://opencv.org/university/deep-learning-with-tensorflow-keras/?utm_source=jobs&utm_medium=menu" className={styles.dropdownItem}>Deep Learning with TensorFlow & Keras</a></li>
                <li><a href="https://opencv.org/university/computer-vision-and-deep-learning-applications/?utm_source=jobs&utm_medium=menu" className={styles.dropdownItem}>Computer Vision & DL Applications</a></li>
                <li><a href="https://opencv.org/university/mastering-generative-ai-for-art/?utm_source=jobs&utm_medium=menu" className={styles.dropdownItem}>Mastering Generative AI for Art</a></li>
              </ul>                   
            </li>

            <li>
              <a href="#" onClick={handleClick}>Programs
              <span className={styles.subArrow}><IoIosArrowDown fontSize={"1.2rem"} className={styles.subArrowIcon}/></span>
              </a>            
              <ul className={styles.dropdownMenu}>
                <li><a href="https://opencv.org/university/cvdl-master/?utm_source=jobs&utm_medium=menu" className={styles.dropdownItem}>CVDL Master</a></li>
              </ul>                     
            </li>

            <li>
              <a href="#" onClick={handleClick}>FREE Courses
              <span className={styles.subArrow}><IoIosArrowDown fontSize={"1.2rem"} className={styles.subArrowIcon}/></span>  
              </a>            
      
                <ul className={styles.dropdownMenu}>
                  <li><a href="https://opencv.org/university/free-opencv-course/?utm_source=jobs&utm_medium=menu&utm_campaign=obc" className={styles.dropdownItem}>OpenCV Bootcamp</a></li>
                  <li><a href="https://opencv.org/university/free-tensorflow-keras-course/?utm_source=jobs&utm_medium=menu&utm_campaign=tbc" className={styles.dropdownItem}>TensorFlow Bootcamp</a></li>
                  <li><a href="https://opencv.org/university/python-for-beginners/?utm_source=jobs&utm_medium=menu&utm_campaign=obc/" className={styles.dropdownItem}>Python for Beginners</a></li>
                </ul>             
            </li>

            <li>
              <a href="#" onClick={handleClick}>Pricing
              <span className={styles.subArrow}><IoIosArrowDown fontSize={"1.2rem"} className={styles.subArrowIcon}/></span>    
              </a>            
              <ul className={styles.dropdownMenu}>
                <li><a href="https://opencv.org/university/?utm_source=jobs&utm_medium=menu#pricing" className={styles.dropdownItem}>All</a></li>
                <li><a href="https://opencv.org/university/student-offer-opencv-university/?utm_source=jobs&utm_medium=menu" className={styles.dropdownItem}>Student</a></li>
                <li><a href="https://opencv.org/university/for-organizations/?utm_source=jobs&utm_medium=menu" className={styles.dropdownItem}>Corporate</a></li>
              </ul>                
            </li>

            <li>
              <a href="https://opencv.org/university/student-offer-opencv-university/?utm_source=jobs&utm_medium=menu">Student Discount</a>         
            </li>
            <li>
              <a href="https://opencv.org/university/careerx/?utm_source=jobs&utm_medium=menu">CareerX
              <span className={styles.subArrow}><IoIosArrowDown fontSize={"1.2rem"} className={styles.subArrowIcon}/></span>    
              </a>            
              <ul className={styles.dropdownMenu}>
                <li><a href="https://jobs.opencv.org" className={styles.dropdownItem}>Explore Jobs</a></li>
              </ul> 
            </li>
          </ul>
        </div>
      </nav>
      </div>
    </header>
  );
};

export default Header;
