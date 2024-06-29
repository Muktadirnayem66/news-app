import AllNews from '@/components/AllNews';
import { Getnews } from '@/lib/get-news';
import React from 'react';

const Home = async () => {
  const allnews = await Getnews("business");
  return (
    <div className=" min-h-screen flex flex-wrap gap-6 p-6">
      {
        allnews.articles.map((news, i)=>(
          <AllNews key={i} news={news}/>
        ))
      }
    </div>
  );
};

export default Home;