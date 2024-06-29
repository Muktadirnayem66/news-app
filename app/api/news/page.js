import NewsCard from '@/components/NewsCard';
import { Getnews } from '@/lib/get-news';
import Link from 'next/link';



const AllNews = async () => {
    const allnews = await Getnews("business");
    
    
    return (
        <div>
            {
               
                allnews.articles.map((item, i)=>(
                    < Link href={`news/${item.author}`} key={i}> <NewsCard  item={item} /> </Link>
                    
                ))
            }

        </div>
    );
};

export default AllNews;