import { useEffect, useState } from "react";

const LeftNavber = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  return (
    <div>
      <h2 className="font-bold text-center mb-3">
        All Category 
      </h2>
      <div className=" flex flex-col gap-2">
        {categories.map((category) =>(
          <button className="btn bg-base-50 border-none" key={category.category_id}>
            {category.category_name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftNavber;
