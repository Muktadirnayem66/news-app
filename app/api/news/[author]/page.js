import { Getnews } from '@/lib/get-news';
import Image from 'next/image';
import React from 'react';
import Thumbnail from "@/public/news.png"

const SingleNews = async ({params}) => {
    const author = params?.author
    const response = await Getnews("business")
    const news = response.articles.find((item)=>item.author?.toLowerCase() === author?.toLowerCase())
    
    const {title, content} = news
    return (
        <div className=" flex">
        <div className="">
          <Image
            className="p-4"
            src={Thumbnail}
            width={180}
            height={180}
            alt="news"
          />
        </div>
        <div className="mt-14">
          
          <p>{title? title : "The title is unpublished"}</p>
          <p>{content? content : "The content is not published"}</p>

        </div>
      </div>
    );
};

export default SingleNews;