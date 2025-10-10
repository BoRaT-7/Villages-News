import { EyeIcon, Share2Icon, StarIcon } from "lucide-react";

const NewsCard = (props ={}) => {
  const{news} =props ||{};
  return (
    <div className="card  bg-base-100 shadow-md border border-gray-100 rounded-2xl overflow-hidden mb-4">
      {/* Author Info */}
      <div className="flex justify-between items-center px-5 pt-4">
        <div className="flex items-center gap-3">
          <img
            src={news.author?.img}
            alt={news.author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-gray-800 text-sm">
              {news.author?.name || "Unknown Author"}
            </h2>
            <p className="text-xs text-gray-500">
              {news.author?.published_date?.split(" ")[0] || "No Date"}
            </p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <Share2Icon size={18} />
        </button>
      </div>

      {/* News Image */}
      {news.image_url && (
        <figure className="px-4 pt-4">
          <img
            src={news.image_url}
            alt={news.title}
            className="rounded-xl w-full object-cover "
          />
        </figure>
      )}

      {/* Content */}
      <div className="card-body px-5 pb-4">
        <h2 className="card-title text-base font-semibold leading-snug">
          {news.title}
        </h2>

        <p className="text-sm text-gray-600">
          {news.details?.slice(0, 200) || "No description available."}
          {news.details?.length > 200 && (
            <span className="text-orange-500 font-medium cursor-pointer hover:underline ml-1">
              Read More
            </span>
          )}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-3 text-sm text-gray-500 border-t pt-3">
          {/* Rating */}
          <div className="flex items-center gap-1 text-orange-500">
            <StarIcon fill="#f97316" size={16} />
            <span className="text-gray-700 font-medium">
              {news.rating?.number || "N/A"}
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1">
            <EyeIcon size={16} />
            <span>{news.total_view || 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
