import { Eye, Share2, Star } from "lucide-react";
import { motion } from "framer-motion";

const NewsCard = ({ news = {} }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all"
    >
      {/* Author Info */}
      <div className="flex justify-between items-center px-5 pt-4">
        <div className="flex items-center gap-3">
          <img
            src={news.author?.img || "/placeholder-user.jpg"}
            alt={news.author?.name || "Unknown Author"}
            className="w-10 h-10 rounded-full object-cover border border-gray-200"
          />
          <div>
            <h2 className="font-semibold text-gray-800 text-sm">
              {news.author?.name || "অজানা লেখক"}
            </h2>
            <p className="text-xs text-gray-500">
              {news.author?.published_date?.split(" ")[0] || "তারিখ নেই"}
            </p>
          </div>
        </div>
        <button
          title="Share news"
          className="text-gray-400 hover:text-emerald-600 transition-colors"
        >
          <Share2 size={18} />
        </button>
      </div>

      {/* News Image */}
      {news.image_url && (
        <figure className="px-4 pt-4">
          <img
            src={news.image_url}
            alt={news.title}
            className="rounded-xl w-full object-cover h-56 md:h-64 transition-transform duration-300 hover:scale-[1.02]"
          />
        </figure>
      )}

      {/* Content */}
      <div className="px-5 py-4">
        <h2 className="text-lg font-semibold text-gray-900 leading-snug mb-2 line-clamp-2">
          {news.title}
        </h2>

        <p className="text-sm text-gray-600 leading-relaxed">
          {news.details?.slice(0, 200) || "বর্ণনা পাওয়া যায়নি।"}
          {news.details?.length > 200 && (
            <span className="text-emerald-600 font-semibold cursor-pointer hover:underline ml-1">
              আরও পড়ুন →
            </span>
          )}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 text-sm border-t pt-3">
          {/* Rating */}
          <div className="flex items-center gap-1 text-amber-500">
            <Star fill="#fbbf24" size={16} />
            <span className="text-gray-700 font-medium">
              {news.rating?.number || "N/A"}
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1 text-gray-500">
            <Eye size={16} />
            <span>{news.total_view || 0}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsCard;
