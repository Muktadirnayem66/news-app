const Getnews = async ( cateName ) => {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${cateName}&pageSize=10&apiKey=${process.env.NEWS_API_KEY}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        
        return data;
    } catch (error) {
        
        return { error: 'Error fetching news' };  
    }
};

export { Getnews };
