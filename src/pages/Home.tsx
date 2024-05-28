import Navbar from "../components/Navbar";
import ShowList from "../components/ShowList";

function Home() {
  return (
    <main className="bg-[#f5f5f5] dark:bg-gray-900 ">
      <Navbar />
      <ShowList />
    </main>
  );
}

export default Home;
