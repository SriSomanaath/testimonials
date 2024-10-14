"use client";

import React, { useState, useEffect } from "react";
import { RiArrowLeftWideLine } from "react-icons/ri";
import styles from "./Feed.module.css";

interface Message {
  text: string;
  isNew: boolean;
}

const initialMessages: Message[] = [
  { text: "Course mention: 'AI for Beginners' course liked by John", isNew: false },
  { text: "New post liked: Your post on 'AI in Healthcare' received 20 likes", isNew: false },
  { text: "New course available: AI for Beginners", isNew: false },
  { text: "New comment: 'Great course on ML!' by Jane", isNew: false },
  { text: "Workshop mention: AI in Finance workshop next week", isNew: false },
  { text: "New follower: Sarah started following you", isNew: false },
  { text: "Scaler raised $10M in funding", isNew: false },
  { text: "Workshop on Machine Learning next week", isNew: false },
  { text: "Special discount on Scaler programs", isNew: false },
  { text: "New post: 'AI in Retail' article published", isNew: false },
];

const newMessages: string[] = [
  "New course: Python for Data Science",
  "New follower: Tom started following you",
  "New comment: 'Loved the explanation on RL!'",
  "Webinar: Understanding AI and Society",
  "Your post received 15 new likes",
  "Event reminder: AI in Healthcare conference tomorrow",
];

const Feed = () => {
  const [feedVisible, setFeedVisible] = useState(false);
  const [feedMessages, setFeedMessages] = useState<Message[]>([...initialMessages]);
  const [messageIndex, setMessageIndex] = useState(0);

  const toggleFeed = () => {
    setFeedVisible(!feedVisible);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFeedMessages((prevMessages) => {
        const newMessage: Message = { text: newMessages[messageIndex % newMessages.length], isNew: true };
        const updatedMessages = [newMessage, ...prevMessages];

        // Ensure we keep a maximum of 25 messages
        if (updatedMessages.length > 25) {
          updatedMessages.pop();
        }

        return updatedMessages;
      });
      setMessageIndex((prevIndex) => prevIndex + 1);
    }, 10000);

    return () => clearInterval(interval);
  }, [messageIndex]);

  return (
    <div className={styles.feedContainer}>
      <div className={`${styles.feed} ${feedVisible ? styles.visible : styles.hidden}`}>
        <div className={styles.FeedContent}>
          <h4>Latest courses feed</h4>
          <ul>
            {feedMessages.map((message, index) =>
              message.text ? (
                <li key={index} className={message.isNew ? styles.newMessage : ""}>
                  {message.text}
                </li>
              ) : null
            )}
          </ul>
        </div>
      </div>
      <button className={styles.feedToggle} onClick={toggleFeed}>
        {feedVisible ? (
          <RiArrowLeftWideLine style={{ transform: "rotate(180deg)" }} />
        ) : (
          <RiArrowLeftWideLine />
        )}
      </button>
    </div>
  );
};

export default Feed;
