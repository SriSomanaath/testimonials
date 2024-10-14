'use client';

import Image from 'next/image';
import styles from './Footer.module.css';
import { BsLinkedin } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

export default function Footer() {

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  return (
    <footer id="footer" className={styles.footer}>
      <div id="copy-right" className={styles.footerHead}>
        <div className={`${styles.footerInnerHead} container`}>
          <div className='col-md-10'>
            <h3>Ready to begin your hiring journey with OpenCV University?</h3>
          </div>
          <div className='col-md-2'>
          <button className='btn btn-secondary' onClick={()=>{scrollToTop()}}>
            Start Hiring
          </button>
          </div>
      </div>
      </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <a href="#">
                <Image 
                  src="/logo_2.png" 
                  alt="Levi's Logo" 
                  className={`${styles.imgFluid} ${styles.logoFooter}`} 
                  width={250}
                  height={250}  
                />
              </a>
              <div className={styles.footerAbout}>
                <p className='paragraph'>
                At OpenCV University, we offer a gateway to hire highly trained professionals in AI, Computer Vision, and Deep Learning. 
                With our featured dashboard, managing your talent pool has never been easier. Track progress, review deliverables, and ensure your 
                projects are on the cutting edge of technology.
                </p>
                <hr className={styles.hrLine}/>
                <h4 className='title_spc'>Why OpenCV?</h4>
                <div className={styles.opencv_features}>
                  <h6>World-Class Training</h6>
                  <h6>Real-World Expertise</h6>
                  <h6>Easy Integration with Your Team</h6>
                  <h6>Advanced Talent Management Dashboard</h6>
                  <h6>Customized Solutions for Your Needs</h6>
                  <h6>Proven Success Stories</h6>
                  <h6>Ongoing Support and Guidance</h6>                  
                </div>

              </div>
            </div>
            <div className="col-md-2">
              <div className={styles.usefulLink}>
                <h4>FREE Courses</h4>
                <ul className={styles.innerLinks}>
                  <li><a href="https://opencv.org/university/free-tensorflow-keras-course/?utm_medium=footer&utm_campaign=tbc">TensorFlow & Keras Bootcamp</a></li>
                  <li><a href="https://opencv.org/university/free-opencv-course/?utm_source=lopcv&utm_medium=footer&utm_campaign=obc">OpenCV Bootcamp</a></li>
                  <li><a href="https://opencv.org/university/python-for-beginners/?utm_medium=footer&utm_campaign=pbc">Python for Beginners</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className={styles.usefulLink}>
                <h4>Categories</h4>
                <ul className={styles.innerLinks}>
                  <li><a href="https://learnopencv.com/category/deep-learning/">Deep Learning</a></li>
                  <li><a href="https://learnopencv.com/category/object-detection/">Object Detection</a></li>
                  <li><a href="https://learnopencv.com/category/image-classification">Image Classification</a></li>
                  <li><a href="https://learnopencv.com/category/yolo/">YOLO</a></li>
                  <li><a href="https://learnopencv.com/category/image-processing/">Image Processing</a></li>
                  <li><a href="https://learnopencv.com/category/image-segmentation/">Image Segmentation</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className={styles.usefulLink}>
                <h4>Getting Started</h4>
                <ul className={styles.innerLinks}>
                  <li><a href="https://learnopencv.com/category/install/">Installation</a></li>
                  <li><a href="https://learnopencv.com/learn-pytorch/">PyTorch</a></li>
                  <li><a href="https://learnopencv.com/getting-started-with-opencv/">Getting Started with OpenCV</a></li>
                  <li><a href="https://learnopencv.com/learn-keras-and-tensorflow/">Keras & Tensorflow</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className={styles.usefulLink}>
                <h4>OpenCV University</h4>
                <ul className={styles.innerLinks}>
                  <li><a href="https://opencv.org/university/cvdl-master/?utm_medium=footer">CVDL Master Program</a></li>
                  <li><a href="https://opencv.org/university/student-offer-opencv-university/?utm_medium=footer">Student Discount</a></li>
                  <li><a href="https://opencv.org/university/careerx/?utm_medium=footer">CareerX</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="copy-right" className={styles.copyRight}>
          <div className={`${styles.copyRightSec} container`}>
            <div>
              <a href="#">© 2022 OpenCV University All Rights Reserved.</a>
            </div>
            <div className={styles.socialLinks}>
              <a href="#">Follow us</a>
              <ul className={styles.innerLinks}>
                <li><a href="https://www.instagram.com/opencvuniversity/"><GrInstagram fontSize={"1.2rem"}/></a></li>
                <li><a href="https://www.facebook.com/OpenCVUniversity/"><BsFacebook fontSize={"1.2rem"}/></a></li>
                <li><a href="https://www.youtube.com/@OpenCVUniversity"><BsYoutube fontSize={"1.2rem"}/></a></li>
                <li><a href="https://www.linkedin.com/company/opencv-university/"><BsLinkedin fontSize={"1.2rem"}/></a></li>
                <li><a href="https://www.instagram.com/opencvuniversity/"><BsTwitterX fontSize={"1.2rem"}/></a></li>
              </ul>
            </div>
            <div>
            <a href="https://opencv.org/terms-and-conditions/">Terms And Conditions</a>   | <a href="https://opencv.org/privacy-policy/">Privacy Policy</a></div>
          </div>
        </div>
      </footer>
  );
}
