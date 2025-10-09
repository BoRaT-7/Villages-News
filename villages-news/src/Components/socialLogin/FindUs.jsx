
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const FindUs = () => {
  return (
    <div>
      <h2 className="mt-10 font-semibold">Find Us On</h2>
     
<div className="flex flex-col gap-3 mt-2 w-full">
  <button className="flex items-center justify-start gap-2 text-blue-600 border border-gray-300 rounded-lg py-2 px-4 hover:bg-blue-50 transition w-full">
    <FaFacebook className=" text-xl" />
    <span className="text-gray-700 font-medium">Facebook</span>
  </button>
  <button className="flex items-center justify-start gap-2 text-sky-500 border border-gray-300 rounded-lg py-2 px-4 hover:bg-sky-50 transition w-full">
    <FaTwitter className=" text-xl" />
    <span className="text-gray-700 font-medium">Twitter</span>
  </button>
  <button className="flex items-center justify-start gap-2 text-pink-500 border border-gray-300  rounded-lg py-2 px-4 hover:bg-pink-50 transition w-full">
    <FaInstagram className="text-pink-500 text-xl" />
    <span className="text-gray-700 font-medium">Instagram</span>
  </button>
</div>
    </div>
  );
};

export default FindUs;