import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className='flex gap-2 justify-center bg-gray-200 p-2'>
      <p className='bg-red-500 text-white py-1 font-semibold text-2xl px-3'>Latest</p>
     
      
<Marquee pauseOnHover={true} speed={50} className="text-xl  space-x-10">
  <Link>Match Highlights: Bangladesh Vs India — as it happened!</Link>
  <Link>‘500 bhoris’ gold looted from Dhaka jewelry shop.</Link>
  <Link>Israel-Gaza live updates: Explosions across Gaza as expected ceasefire nears.</Link>
</Marquee>
    
    </div>
  );
};

export default LatestNews;