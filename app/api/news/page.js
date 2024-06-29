import NewsCard from "@/components/NewsCard";
import { Getnews } from "@/lib/get-news";
import Link from "next/link";

const AllNews = async () => {
  let  allnews = await Getnews("business");
  
  return (
    <div>
      { allnews.articles.length > 0 ? (
        allnews.articles.map((item, i) => (
            <Link href={`news/${item.author}`} key={i}>
              <NewsCard item={item} />
            </Link>
          ))
      ) : ( <p>No Data Available</p>)}
    </div>
  );
};

export default AllNews;
