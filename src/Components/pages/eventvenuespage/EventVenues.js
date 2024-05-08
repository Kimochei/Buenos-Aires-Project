import React, { useState } from 'react';
import styles from './EventVenues.css';

const EventVenues = () => {
  const [venues, setVenues] = useState([
    { id: 1, title: 'Villa Catalina Covered Court', image: 'url_to_image_1' },
    { id: 2, title: 'Villa Luisa PH-1 Covered Court', image: 'url_to_image_2' },
    { id: 3, title: 'Villa Luisa PH-3 Covered Court', image: 'url_to_image_3' },
    { id: 4, title: 'Villa Luisa PH-4 Covered Court', image: 'url_to_image_4' },
    { id: 4, title: 'DEV Covered Court', image: 'url_to_image_4' },
    { id: 4, title: 'DEV Clubhouse', image: 'url_to_image_4' },
  ]);

  return (
    <div className={styles.container}>
      {venues.map((venue) => (
        <div key={venue.id} className={styles.frame}>
          <img src={venue.image} alt={venue.title} className={styles.image} />
          <h2 className={styles.title}>{venue.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default EventVenues;
