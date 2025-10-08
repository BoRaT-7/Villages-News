import logo from "../assets/logo.png";
import moment from "moment";


const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-6">
      <div className="">
        <img src={logo} alt="Logo" className="w-full" />
      </div>
      <p className="text-gray-500 text-xl mt-2">
        Journalism Without Fear or Favour
      </p>
     <p className="text-xl">
  <span className="font-semibold">{moment().format("dddd")}</span>
  {moment().format(", MMMM Do YYYY, h:mm:ss a")}
</p>
    </div>
  );
};


export default Header;



