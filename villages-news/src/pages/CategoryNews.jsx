import { useLoaderData } from "react-router-dom";

const CategoryNews = () => {
  const { data } = useLoaderData(); // this "data" is the array inside API response

  return (
    <div>
      <h2 className="font-semibold mb-3">Dragon News Home</h2>
      <p className="text-gray-400 text-sm"> {data.length} News found in this category</p>
    </div>
  );
};

export default CategoryNews;
