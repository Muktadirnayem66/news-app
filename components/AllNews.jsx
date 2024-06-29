import { formatDate } from "@/lib/date-info";
import Thumbnail from "@/public/news.png";
import Image from "next/image";

const AllNews = ({ news }) => {
  const date = formatDate(news.publishedAt);
  return (
   
        <div className="max-w-sm mx-auto shadow-lg rounded-lg overflow-hidden">
      <Image
        className="w-full h-48 object-cover"
        src={Thumbnail}
        width={150}
        height={150}
        alt="Card Image"
      />
      <div className="p-4">
        <h1 className="text-2xl font-semibold text-gray-800">{news.title}</h1>
        <p className="mt-2 text-gray-600">{news.content}</p>
        <div className="flex items-center mt-4">
          <Image
            className="w-10 h-10 object-cover rounded-full"
            src={Thumbnail}
            width={40}
            height={40}
            alt="Avatar"
          />
          <div className="ml-3">
            <h2 className="text-sm font-semibold text-gray-800">
              {news.author}
            </h2>
            <p className="text-sm text-gray-600"></p>
          </div>
        </div>
        
      </div>
    </div>
    
  );
};

export default AllNews;
