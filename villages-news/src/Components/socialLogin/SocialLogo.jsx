import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const SocialLogo = () => {
  return (
    <div>
      <h2 className="text-center font-semibold">Login With</h2>
      <div className="flex flex-col gap-2 mt-2">
        <button className="btn flex items-center gap-2 text-blue-500 border border-blue-500 hover:bg-blue-50">
    <FaGoogle className="text-blue-500 text-xl" />
    <span>Login with Google</span>
  </button>
     <button className="btn flex items-center gap-2 text-gray-600 border border-gray-900 hover:bg-gray-100">
    <FaGithub className="text-gray-800 text-xl" />
    <span>Login with Github</span>
  </button>
      </div>
    </div>
  );
};

export default SocialLogo;