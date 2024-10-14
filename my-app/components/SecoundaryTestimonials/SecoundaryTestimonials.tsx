import React from 'react';
import styles from './SecoundaryTestimonials.module.css';
import { FaQuoteLeft } from 'react-icons/fa';

const SecoundaryTestimonials = () => {
  const testimonials = [
    {
      text: "Design serves as a connecting bridge and system linking all individuals and elements.",
      name: "Shyam Shahu Shrestha",
      role: "UX Designer"
    },
    {
      text: "Great design brings harmony and balance to any system, making it intuitive for users.",
      name: "Alexis Martin",
      role: "Product Designer"
    },
    {
      text: "Effective design communicates messages clearly, allowing users to navigate effortlessly.",
      name: "Priya Kumar",
      role: "Graphic Designer"
    },
    {
      text: "Innovative design can change the way we perceive and interact with the world.",
      name: "Rajesh Patel",
      role: "Creative Director"
    },
    {
      text: "Good design is about making things easy to use and accessible to everyone.",
      name: "Sofia Garcia",
      role: "UI/UX Designer"
    },
    {
      text: "A well-thought-out design improves user experience and enhances functionality.",
      name: "Michael Lee",
      role: "Interaction Designer"
    },
    {
      text: "Design is not just what it looks like; it's how it works.",
      name: "Jennifer Wong",
      role: "Industrial Designer"
    },
    {
      text: "Every detail matters in design; the small things can make a big difference.",
      name: "Daniel Rodriguez",
      role: "Web Designer"
    },
    {
      text: "User-centered design creates products that resonate with the audience.",
      name: "Emily Davis",
      role: "Product Manager"
    },
    {
      text: "Good design is all about solving problems effectively and beautifully.",
      name: "Amit Joshi",
      role: "Design Researcher"
    },
    {
      text: "Simplicity in design leads to clarity and ease of use.",
      name: "Nina Patel",
      role: "UX Researcher"
    },
    {
      text: "Design is the silent ambassador of your brand.",
      name: "Oliver Smith",
      role: "Brand Strategist"
    },
    {
      text: "A strong design vision can elevate a project to new heights.",
      name: "Lily Thompson",
      role: "Creative Consultant"
    },
    {
      text: "Design should be innovative, functional, and user-friendly.",
      name: "David Chen",
      role: "Digital Designer"
    },
    {
      text: "Good design is a key ingredient for building great products.",
      name: "Maya Williams",
      role: "Software Engineer"
    },
    {
      text: "Design empowers users by giving them control over their experiences.",
      name: "Tom Johnson",
      role: "Product Designer"
    },
    {
      text: "Design is about creating meaningful connections through visual communication.",
      name: "Kiran Mehta",
      role: "Visual Designer"
    },
    {
      text: "A user-friendly design fosters loyalty and satisfaction among customers.",
      name: "Ella Robinson",
      role: "Service Designer"
    },
    {
      text: "Thoughtful design can significantly enhance usability and engagement.",
      name: "Ravi Verma",
      role: "User Experience Analyst"
    },
    {
      text: "Design is an iterative process that evolves with feedback and testing.",
      name: "Sophia Brown",
      role: "Interaction Designer"
    },
    {
      text: "The best designs are born from empathy and understanding user needs.",
      name: "Jack Miller",
      role: "Design Engineer"
    },
    {
      text: "Visual hierarchy in design helps guide users through content seamlessly.",
      name: "Anita Sharma",
      role: "Web Developer"
    },
    {
      text: "A cohesive design system ensures consistency across products and platforms.",
      name: "James Green",
      role: "UI Designer"
    },
    {
      text: "Design should be a balance of creativity and functionality.",
      name: "Maya Singh",
      role: "Graphic Artist"
    },
    {
      text: "Innovative design challenges the norm and opens up new possibilities.",
      name: "Vikram Rao",
      role: "Product Designer"
    },
    {
      text: "Design is a language that communicates without words.",
      name: "Ava Johnson",
      role: "Creative Director"
    },
    {
      text: "Good design is rooted in research and insights from real users.",
      name: "Leo Nguyen",
      role: "UX Researcher"
    },
    {
      text: "Every project is a chance to push the boundaries of design.",
      name: "Isabella Martinez",
      role: "Visual Communication Designer"
    },
    {
      text: "The essence of great design lies in its ability to connect with people.",
      name: "Ethan Kim",
      role: "Interaction Designer"
    },
    {
      text: "Great design is a blend of art and science, appealing to both emotion and logic.",
      name: "Chloe Lee",
      role: "User Interface Designer"
    },
    {
      text: "A thoughtful design process leads to more effective outcomes.",
      name: "Oliver White",
      role: "Senior Designer"
    },
    {
      text: "The best designs create an emotional connection with users.",
      name: "Emily Hall",
      role: "Brand Designer"
    },
    {
      text: "Design is an essential part of the problem-solving process.",
      name: "Jacob Clark",
      role: "Product Designer"
    }
  ];

  return (
    <div className={`${styles.testimonialContainer} mainContent` }>
      {testimonials.map((testimonial, index) => (
        <div key={index} className={styles.testimonialCard}>
          <FaQuoteLeft className={styles.quoteIcon} />
          <p className={styles.testimonialText}>{testimonial.text}</p>
          <div className={styles.authorDetails}>
            <div className={styles.avatar}>
              <span>{testimonial.name.charAt(0)}</span>
            </div>
            <div className={styles.authorInfo}>
              <h4 className={styles.authorName}>{testimonial.name}</h4>
              <p className={styles.authorRole}>{testimonial.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SecoundaryTestimonials;
