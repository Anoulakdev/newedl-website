"use client";

import React from "react";
import styles from "./privacy.module.css";

// Privacy policy documents data
const cardData = [
  {
    id: 1,
    link: "/privacy/edlapp",
    title: "Privacy ຂອງລະ​ບົບ EDLAPP",
    badge: "App",
  },
  {
    id: 2,
    link: "/privacy/ev",
    title: "Privacy ຂອງລະ​ບົບ EV",
    badge: "EV",
  },
];

const Privacy = () => {
  return (
    <div className={styles.privacyContainer}>
      <div className="container">
        {/* Card Grid */}
        <div className={styles.cardGrid}>
          {cardData.map((menu_item) => (
            <a
              key={menu_item.id}
              href={menu_item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.privacyCard}
            >
              <div>
                <div className={styles.cardHeader}>
                  <div className={styles.iconContainer}>
                    {/* Security Shield SVG Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <span className={styles.securityBadge}>
                    {menu_item.badge}
                  </span>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{menu_item.title}</h3>
                  <p className={styles.cardDescription}>
                    {menu_item.description}
                  </p>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <span className={styles.readMoreText}>
                  ອ່ານນະໂຍບາຍ
                  <svg
                    className={styles.arrowIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Privacy;
