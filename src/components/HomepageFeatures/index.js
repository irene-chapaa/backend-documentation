import React, { useState } from "react";
import styles from './Feature.module.css'; // Assuming you have a CSS module for styles

export default function Feature({ title }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleClick = () => setIsClicked(!isClicked);

  return (
    <div
      className={`${styles.feature} ${isHovered ? styles.hovered : ''} ${isClicked ? styles.clicked : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <h3>{title}</h3>

      <img
        src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjM2Y3AxYnRpcHI1NWJpMXI5eTRtbzNlYnNjazRnMzZ1d2kxMnYxcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Eo2l3uYuDl45eRSNSt/giphy.webp"
        alt="Crypto Animation"
        className={styles.image} // Apply hover effects here as well
      />
    </div>
  );
}
