import { formatDate } from "@/lib/date-info";
import Thumbnail from "@/public/news.png";
import Image from "next/image";

const NewsCard = ({ item }) => {
  const { title, urlToImage, publishedAt } = item;
  const date = formatDate(publishedAt);
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
        <p className=" text-gray-500">{date}</p>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default NewsCard;
