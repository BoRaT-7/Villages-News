import { useLoaderData } from "react-router-dom";
import Newscard from "../Components/Newscard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();

  return (
    <div>
      <h2 className="font-semibold mb-3">Dragon News Home</h2>
      <p className="text-gray-400 text-sm">{news.length} News found in this category</p>
      <div>
        {news.map((singleNews) => (
          <Newscard key={singleNews.id} news={singleNews} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
