"use client";

import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa'; // Import camera icon from react-icons
import styles from './page.module.css';

interface FormData {
    image: File | null;
    firstName: string;
    lastName: string;
    testimonialContent: string;
    coursesCompleted: string;
    grades: string;
    linkedinProfile: string;
    linkedinPost: string;
}

const TestimonialForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        image: null,
        firstName: '',
        lastName: '',
        testimonialContent: '',
        coursesCompleted: '',
        grades: '',
        linkedinProfile: '',
        linkedinPost: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFormData({
                ...formData,
                image: e.target.files[0],
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const data = new FormData();
        if (formData.image) {
            data.append('image', formData.image);
        }
        data.append('firstName', formData.firstName);
        data.append('lastName', formData.lastName);
        data.append('testimonialContent', formData.testimonialContent);
        data.append('coursesCompleted', formData.coursesCompleted);
        data.append('grades', formData.grades);
        data.append('linkedinProfile', formData.linkedinProfile);
        data.append('linkedinPost', formData.linkedinPost);

        try {
            const response = await fetch('/api/testimonials', {
                method: 'POST',
                body: data,
            });

            if (response.ok) {
                alert('Testimonial submitted successfully!');
            } else {
                alert('Error submitting testimonial.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const renderImage = () => {
        if (formData.image) {
            return URL.createObjectURL(formData.image);
        }
        return '/Satyas-Image-Coloured.jpg';
    };

    return (
        <div className="container">
            <h2>Submit a Testimonial</h2>

            <form onSubmit={handleSubmit}>
                <div className={styles.profileImageContainer}>
                    <div className={styles.imageWrapper}>
                        <img
                            src={renderImage()}
                            alt="Profile"
                            className={styles.profileImage}
                        />
                        <label htmlFor="imageUpload" className={styles.cameraIcon}>
                            <FaCamera size={24} /> 
                        </label>
                        <input
                            id="imageUpload"
                            className={styles.fileInput}
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.left}>
                        <label className={styles.label}>First Name:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                        />
                        <label className={styles.label}>Last Name:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.right}>
                        <label className={styles.label}>Testimonial Content:</label>
                        <textarea
                            className={styles.textarea}
                            name="testimonialContent"
                            value={formData.testimonialContent}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                {/* Other Fields Card */}
                <div className={styles.cardColumn}>
                    <label className={styles.label}>Courses Completed:</label>
                    <input
                        className={styles.input}
                        type="text"
                        name="coursesCompleted"
                        value={formData.coursesCompleted}
                        onChange={handleInputChange}
                    />

                    <label className={styles.label}>Grades:</label>
                    <input
                        className={styles.input}
                        type="text"
                        name="grades"
                        value={formData.grades}
                        onChange={handleInputChange}
                    />

                    <label className={styles.label}>LinkedIn Profile (URL):</label>
                    <input
                        className={styles.input}
                        type="text"
                        name="linkedinProfile"
                        value={formData.linkedinProfile}
                        onChange={handleInputChange}
                    />

                    <label className={styles.label}>LinkedIn Post (URL):</label>
                    <input
                        className={styles.input}
                        type="text"
                        name="linkedinPost"
                        value={formData.linkedinPost}
                        onChange={handleInputChange}
                    />
                </div>

                <button className={styles.submitButton} type="submit">Submit Testimonial</button>
            </form>
        </div>
    );
};

export default TestimonialForm;
