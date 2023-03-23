
import { useRouter } from "next/router";
import { useState } from "react";

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onSearch = (event) => {
     event.preventDefault();
     const router=useRouter();
     router.push('/search')
     
  };

  return (
    <form className="flex justify-center" onSubmit={onSearch}>
      <input
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="flex w-full h-[90%] items center bg-slate-100"
        placeholder="Search.."
      />
    </form>
  );
};
export default Searchbar;
