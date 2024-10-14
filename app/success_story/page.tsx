import React from 'react';
import styles from './page.module.css';

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img 
          src="/Satyas-Image-Coloured.jpg" 
          alt="OpenCV University" 
          className={styles.heroImage}
        />
        <h1 className={styles.title}>From Passion to Profession: My Journey with OpenCV University</h1>
        <p className={styles.subTitle}>
          A success story of mastering Computer Vision and unlocking new career opportunities.
        </p>
      </header>

      <section className={styles.content}>
        <p>
          The world of technology is ever-evolving, and for someone passionate about artificial intelligence, diving into 
          Computer Vision felt like the natural next step. That’s when I discovered the extensive course offerings at OpenCV University. 
          From the very first day, I knew this wasn’t just an ordinary online course—it was a transformative journey.
        </p>

        <p>
          OpenCV University's Computer Vision course offered me the perfect combination of structured learning and hands-on 
          experience. With modules ranging from the basics of image processing to state-of-the-art deep learning techniques, 
          the course covered everything I needed to become a proficient Computer Vision developer. The course curriculum was 
          thoughtfully designed, starting with foundational concepts and gradually advancing to more complex topics.
        </p>

        <p>
          One of the biggest highlights of the course was the comprehensive hands-on projects. These projects weren’t 
          just theoretical; they were real-world applications that truly tested my skills. Building a face detection system, 
          creating object recognition models, and working with neural networks to enhance image quality were just a few 
          examples of the practical projects I tackled during the course.
        </p>

        <p>
          The guidance from the instructors was incredible. Not only were they subject matter experts, but they also provided 
          personalized feedback on my projects. This feedback helped me identify areas for improvement and taught me how to 
          think critically about optimizing performance for real-world applications. The supportive community of learners was 
          another bonus, as we regularly collaborated and shared ideas.
        </p>

        <p>
          The result? A new sense of confidence and mastery in Computer Vision. Completing the course at OpenCV University 
          has opened doors I never imagined. I now have the expertise to work on AI-driven projects and contribute to cutting-edge 
          solutions in the tech industry. From hobbyist projects to professional development, my skills have grown tremendously, 
          thanks to this immersive learning experience.
        </p>

        <blockquote className={styles.quote}>
          "This course was more than just an educational experience—it was the catalyst that transformed my passion for AI into a full-fledged career in Computer Vision."
        </blockquote>

        <p className={styles.conclusion}>
          Today, I am working on advanced AI projects that integrate Computer Vision technologies into real-world solutions. 
          OpenCV University’s course didn’t just give me knowledge—it gave me the tools and the confidence to turn my vision 
          into reality. If you’re serious about Computer Vision and want to accelerate your career in AI, this course is the 
          perfect launchpad.
        </p>
      </section>
    </div>
  );
};

export default BlogPage;
