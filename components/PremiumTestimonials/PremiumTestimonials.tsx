"use client";
import React, { useState, useEffect } from "react";
import { FaPlay, FaQuoteRight } from "react-icons/fa"; // Importing play and quote-right icons
import styles from "./PremiumTestimonials.module.css";

const testimonials = [
  {
    text: "The AI courses at OpenCV University exceeded my expectations! The curriculum is well-structured and highly practical, allowing me to immediately apply what I learned to real-world projects. The hands-on labs were particularly.",
    subtext: "John Doe, AI Researcher at Tech Innovations.",
    image: "/Satyas-Image-Coloured.jpg",
    video: "/Hubspot Customer Testimonial.mp4",
  },
  {
    text: "Completing the AI course at OpenCV University was a game-changer for my career. The instructors were incredibly knowledgeable, and the learning resources were top-notch. The mix of theory and practical application gave me the confidence to take on complex AI challenges at work. This course truly elevated my skill set.",
    subtext: "Jane Smith, ML Engineer at VisionTech Labs.",
    image: "/Satyas-Image-Coloured.jpg",
    video: "/Hubspot Customer Testimonial.mp4",
  },
  {
    text: "The AI course at OpenCV University offered a fantastic blend of cutting-edge AI theory and hands-on computer vision projects. I particularly enjoyed the focus on real-world applications, which helped me improve my problem-solving skills. The certification from OpenCV University is now a key highlight on my resume, helping me stand out in the competitive AI industry.",
    subtext: "Michael Johnson, Data Scientist at AI Pioneers.",
    image: "/Satyas-Image-Coloured.jpg",
    video: "/Hubspot Customer Testimonial.mp4",
  },
];

const PremiumTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000000);
    return () => clearInterval(autoSlide);
  }, []);

  const handleDotClick = (index:any) => {
    setCurrentIndex(index);
  };

  return (
    <section id="premium-testimonials" className="bg-[#f5f5f5]">
      <div className="container">
        <div className={styles.testimonialsSection}>
        <h1 className={`${styles.testimonialsHeading} flex items-center gap-3`}>
          <span className={ `${styles.gradientText} text-5xl`}>My Journey</span> to Mastery
          <FaQuoteRight className={styles.iconRight} />
        </h1>
          <div className={styles.slideshow}>
            <div className={styles.slideContainer}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`${styles.slide} ${
                    index === currentIndex ? styles.activeSlide : ""
                  }`}
                >
                  <div className={styles.contentContainer}>
                    <div className={styles.textContainer}>
                      <div className={styles.profileContainer}>
                        <img
                          src={testimonial.image}
                          alt="dp"
                          className={styles.roundedImg}
                        />
                        <span className={`${styles.boldText} text-lg`}>{testimonial.subtext}</span>
                      </div>
                      <p className={styles.fancyGradientText}>
                        {testimonial.text}
                      </p>
                      <a
                        href="/success_story"
                        className={`${styles.viewMoreButton} text-sm font-thin`}
                        target="_blank"
                      >
                        View More
                      </a>
                    </div>
                    <div className={styles.videoContainer}>
                      <div className={styles.thumbnailContainer}>
                        <video
                          className={styles.media}
                          controls
                          poster={testimonial.image}
                        >
                          <source src={testimonial.video} type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.navigation}>
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`${styles.dot} ${
                    index === currentIndex ? styles.activeDot : ""
                  }`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumTestimonials;
