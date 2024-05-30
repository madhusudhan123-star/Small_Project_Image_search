import { useState } from "react";
import './App.css';
import Search from "./component/Search";
import Images from "./component/Images";
import Cards from "./component/Cards"

function App() {
  const [search, setSearch] = useState('')
  console.log(search);
  return (
    <div className="flex justify-center flex-col items-center gap-20 bg-white">
      <div className="w-full bg-white h-16 flex justify-center items-center ">
        <h1 className="text-3xl"> You Can Search Any Image</h1>
      </div>
      <div className=" w-full flex justify-center mt-20 ">
        <Search setSearch={setSearch} setSearch={setSearch} />
      </div>
      {/* <Cards /> */}
      <Images search={search} />
    </div>
  );
}

export default App;
