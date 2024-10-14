"use client";

import React, { useState } from "react";
import styles from "./PrimaryTestimonials.module.css";
import { FaLinkedin, FaFacebook, FaTwitter, FaBars, FaTimes } from "react-icons/fa";

interface Testimonial {
  name: string;
  jobTitle: string;
  location: string;
  preScaler: string;
  postScaler: string;
  salaryHike: string;
}

const testimonials: Testimonial[] = [
    {
      name: "Sudhanshu Gera",
      jobTitle: "Software Engineer III",
      location: "Gurgaon",
      preScaler: "Wipro Limited",
      postScaler: "Walmart",
      salaryHike: "300%",
    },
    {
      name: "Saliq Saifi",
      jobTitle: "Application Developer 3",
      location: "Hapur",
      preScaler: "Mahindra Comviva",
      postScaler: "Oracle",
      salaryHike: "500%",
    },
    {
      name: "Mohini Bansal",
      jobTitle: "Software Engineer 3",
      location: "Bangalore",
      preScaler: "Khoros",
      postScaler: "Adobe",
      salaryHike: "500%",
    },
    {
      name: "Ayush Mishra",
      jobTitle: "SDE 2",
      location: "Kanpur",
      preScaler: "Samsung",
      postScaler: "Microsoft",
      salaryHike: "424%",
    },
    {
      name: "Aswin",
      jobTitle: "SDE 2",
      location: "Chennai",
      preScaler: "Pfizer Healthcare",
      postScaler: "Microsoft",
      salaryHike: "200%",
    },
    {
      name: "Prakash Shukla",
      jobTitle: "Software Engineer",
      location: "Delhi",
      preScaler: "Self-employed",
      postScaler: "Townscript",
      salaryHike: "600%",
    },
    {
      name: "Ravi Sharma",
      jobTitle: "Data Scientist",
      location: "Hyderabad",
      preScaler: "TCS",
      postScaler: "Google",
      salaryHike: "320%",
    },
    {
      name: "Nidhi Agarwal",
      jobTitle: "Senior Analyst",
      location: "Pune",
      preScaler: "Infosys",
      postScaler: "Deloitte",
      salaryHike: "220%",
    },
    {
      name: "Karan Mehta",
      jobTitle: "Software Developer",
      location: "Mumbai",
      preScaler: "Capgemini",
      postScaler: "Amazon",
      salaryHike: "400%",
    },
    {
      name: "Ankita Verma",
      jobTitle: "Backend Engineer",
      location: "Chennai",
      preScaler: "Zoho",
      postScaler: "Facebook",
      salaryHike: "380%",
    },
    {
      name: "Manoj Pandey",
      jobTitle: "Tech Lead",
      location: "Bangalore",
      preScaler: "Flipkart",
      postScaler: "Apple",
      salaryHike: "450%",
    },
    {
      name: "Ishita Saxena",
      jobTitle: "ML Engineer",
      location: "Kolkata",
      preScaler: "Cognizant",
      postScaler: "IBM",
      salaryHike: "310%",
    },
    {
      name: "Vikas Raj",
      jobTitle: "DevOps Engineer",
      location: "Jaipur",
      preScaler: "Ericsson",
      postScaler: "Netflix",
      salaryHike: "350%",
    },
    {
      name: "Ritika Sharma",
      jobTitle: "Frontend Developer",
      location: "Delhi",
      preScaler: "HCL",
      postScaler: "Uber",
      salaryHike: "280%",
    },
    {
      name: "Deepak Gupta",
      jobTitle: "Full Stack Developer",
      location: "Lucknow",
      preScaler: "Self-employed",
      postScaler: "Stripe",
      salaryHike: "500%",
    },
    {
      name: "Shruti Patel",
      jobTitle: "QA Engineer",
      location: "Ahmedabad",
      preScaler: "Tech Mahindra",
      postScaler: "Tesla",
      salaryHike: "330%",
    },
    {
      name: "Rohit Verma",
      jobTitle: "Cloud Architect",
      location: "Mumbai",
      preScaler: "L&T Infotech",
      postScaler: "Microsoft",
      salaryHike: "290%",
    },
    {
      name: "Sumanth Rao",
      jobTitle: "Security Analyst",
      location: "Bangalore",
      preScaler: "Accenture",
      postScaler: "McAfee",
      salaryHike: "340%",
    },
    {
      name: "Pooja Jain",
      jobTitle: "Product Manager",
      location: "Gurgaon",
      preScaler: "Paytm",
      postScaler: "Stripe",
      salaryHike: "420%",
    },
    {
      name: "Harish Kumar",
      jobTitle: "Senior Developer",
      location: "Chennai",
      preScaler: "IBM",
      postScaler: "Oracle",
      salaryHike: "310%",
    },
    {
      name: "Neha Singh",
      jobTitle: "Data Engineer",
      location: "Hyderabad",
      preScaler: "Virtusa",
      postScaler: "Snowflake",
      salaryHike: "320%",
    },
    {
      name: "Aditya Patil",
      jobTitle: "Android Developer",
      location: "Pune",
      preScaler: "Wipro",
      postScaler: "Meta",
      salaryHike: "450%",
    },
    {
      name: "Priya Raj",
      jobTitle: "AI Researcher",
      location: "Mumbai",
      preScaler: "AI Labs",
      postScaler: "OpenAI",
      salaryHike: "500%",
    },
    {
      name: "Vikram Singh",
      jobTitle: "Network Engineer",
      location: "Bangalore",
      preScaler: "Airtel",
      postScaler: "Cisco",
      salaryHike: "340%",
    },
    {
      name: "Anjali Yadav",
      jobTitle: "Mobile Developer",
      location: "Chennai",
      preScaler: "Mindtree",
      postScaler: "Snapchat",
      salaryHike: "320%",
    },
    {
      name: "Arjun Nair",
      jobTitle: "Frontend Engineer",
      location: "Kochi",
      preScaler: "Zomato",
      postScaler: "Airbnb",
      salaryHike: "410%",
    },
    {
      name: "Anisha Kapoor",
      jobTitle: "Blockchain Developer",
      location: "Noida",
      preScaler: "IBM",
      postScaler: "Coinbase",
      salaryHike: "370%",
    },
    {
      name: "Naveen Thomas",
      jobTitle: "System Administrator",
      location: "Pune",
      preScaler: "Infosys",
      postScaler: "Slack",
      salaryHike: "290%",
    },
    {
      name: "Sushmita Ghosh",
      jobTitle: "Business Analyst",
      location: "Kolkata",
      preScaler: "WNS",
      postScaler: "Walmart",
      salaryHike: "350%",
    },
    {
      name: "Rajiv Joshi",
      jobTitle: "DevOps Architect",
      location: "Delhi",
      preScaler: "Cognizant",
      postScaler: "RedHat",
      salaryHike: "320%",
    },
  ];

const PrimaryTestimonials = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  const toggleSidebar = (testimonial: Testimonial | null) => {
    setSelectedTestimonial(testimonial);
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <section id="primary-testimonials">
      <div className={`${styles.wrapper} container`}>
        <div className={styles.mainContent}>
          <div className={styles.testimonialGrid}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={styles.testimonialCard}
                onClick={() => toggleSidebar(testimonial)} 
              >
                <h5>{testimonial.name}</h5>
                <p className={styles.jobTitle}>{testimonial.jobTitle}</p>
                <p className={styles.location}>{testimonial.location}</p>
                <div className={styles.companyInfo}>
                  <span className={styles.preScaler}>{testimonial.preScaler}</span>
                  <span className={styles.arrow}>→</span>
                  <span className={styles.postScaler}>{testimonial.postScaler}</span>
                </div>
                {testimonial.salaryHike && (
                  <p className={styles.salaryHike}>
                    <span className={styles.hikeText}>
                      ↑ {testimonial.salaryHike} Salary Hike after Scaler
                    </span>
                  </p>
                )}
                {/* Action buttons */}
                <div className={styles.actions}>
                  <button className={`${styles.connectButton} text-xs`}>
                    Read more <FaLinkedin />
                  </button>
                  <button className={`${styles.viewProfileButton} text-xs`}>
                    View Profile
                  </button>
                </div>
                {/* Social icons */}
                <div className={styles.socialIcons}>
                  <FaFacebook />
                  <FaTwitter />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sliding Sidebar for more information (testimonial details) */}
        <div className={`${styles.detailedSidebar} ${isSidebarOpen ? styles.open : ""}`}>
          {selectedTestimonial && (
            <div className={styles.sidebarContent}>
              <FaTimes
                className={styles.closeIcon}
                onClick={() => toggleSidebar(null)}
              />
              <h4>{selectedTestimonial.name}</h4>
              <p className={styles.jobTitle}>{selectedTestimonial.jobTitle}</p>
              <p className={styles.location}>{selectedTestimonial.location}</p>
              <p><strong>Pre-Scaler: </strong>{selectedTestimonial.preScaler}</p>
              <p><strong>Post-Scaler: </strong>{selectedTestimonial.postScaler}</p>
              <p><strong>Salary Hike: </strong>{selectedTestimonial.salaryHike}</p>
              <div className={styles.socialIcons}>
                <FaLinkedin />
                <FaFacebook />
                <FaTwitter />
              </div>
            </div>
          )}
        </div>

        {/* Persistent Notification Sidebar */}
        {/* <div className={`${styles.sidebar}`}>
          <div className={styles.sidebarContent}>
            <h4>Notifications</h4>
            <ul>
              <li>New course available: AI for Beginners</li>
              <li>Scaler raised $10M in funding</li>
              <li>Workshop on Machine Learning next week</li>
              <li>Special discount on Scaler programs</li>
            </ul>
          </div>
        </div> */}

        {/* Overlay for detailed sidebar when open */}
        {isSidebarOpen && (
          <div className={styles.overlay} onClick={() => toggleSidebar(null)}></div>
        )}
      </div>
    </section>
  );
};

export default PrimaryTestimonials;
