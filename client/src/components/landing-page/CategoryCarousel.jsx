import React from 'react';
import { useState } from "react";

const CategoryCarousel = () => {
  const [activeCarousel, setActiveCarousel] = useState(1);

  const categories = [
    { id: 1, name: 'Action', image: 'https://staticg.sportskeeda.com/editor/2019/03/cedbb-15534102082658-800.jpg' },
    { id: 2, name: 'Adventure', image: 'https://ftw.usatoday.com/wp-content/uploads/sites/90/2022/10/God-of-War-2.jpg?w=1000&h=600&crop=1' },
    { id: 3, name: 'Strategy', image: 'https://assetsio.reedpopcdn.com/best-strategy-games-2022-header.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp' },
    { id: 4, name: 'MMO RPG', image: 'https://beebom.com/wp-content/uploads/2018/11/Best-mmorpg-featured.jpg?resize=730%2C487&quality=75&strip=all' },
    { id: 5, name: 'Racing', image: 'https://www.lifewire.com/thmb/aBS-aiWAFvYjdsWKOYmZHuvmS0Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/offlinecars-asphalt8-5bf393bb46e0fb002650eb20.jpg' },
    { id: 6, name: 'Puzzle', image: 'https://play-lh.googleusercontent.com/fHEYNnbkM3ih-6CN5I4_wcKFpuceaJIx-m2HfN4u-dLhwKk2N7HXzxYcpOLwi7WPgVc=w2560-h1440-rw' },
    { id: 7, name: 'Casual', image: 'https://fgfactory.com/wp-content/uploads/2020/02/cover-2-1594x768.jpg' },
    { id: 8, name: 'Virtual Reality', image: 'https://www.analyticssteps.com/backend/media/thumbnail/9808324/6459437_1636699848_VR%20GamesArtboard%201.jpg' },
    // Add more categories as needed
    
  ];

  return (
    <div className="carousel-container overflow-x-auto p-4 text-cyan-50">
      <div className="carousel-content flex space-x-4">
        {categories.map((category) => (
          <div key={category.id} className="carousel-item flex flex-col items-center ">
            <img
              src={category.image}
              alt={category.name}
              className="w-48 h-32 object-cover rounded-lg hover:shadow-md hover:shadow-[#1A9FFF] mr-2"
            />
            <p className="mt-2 text-lg font-semibold">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCarousel;