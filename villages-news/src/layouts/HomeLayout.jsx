import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftNavber from "../Components/layout-component/LeftNavber";
import Navber from "../Components/Navber";


const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto"><LatestNews></LatestNews></section>

      </header>
      <nav className="w-11/12 mx-auto"> <Navber></Navber></nav>
    <main className="w-11/12 mx-auto pt-5 grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-4">
  <aside className="left col-span-12 md:col-span-3 lg:col-span-3 bg-gray-300 p-3 rounded">
   <LeftNavber></LeftNavber>
  </aside>
  <section className="col-span-12 md:col-span-5 lg:col-span-6 bg-white p-3 rounded shadow">
    Main Center
  </section>
  <aside className="col-span-12 md:col-span-3 lg:col-span-3 bg-gray-100 p-3 rounded">
    Right Navbar
  </aside>
</main>

    </div>
  );
};


export default HomeLayout;