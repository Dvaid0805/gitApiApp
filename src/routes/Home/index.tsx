import React, {useEffect} from 'react';
import {Navigation} from '../../components';
import {useSearchUsersQuery} from "../../store/GitHub/github.api";
import {useDebounce} from "../../hooks/debounce";

const Home = () => {
  const [search, setSearch] = React.useState('');
  const { data, isError, isLoading } = useSearchUsersQuery("dvaid");
  const debounce = useDebounce(search);

  useEffect(() => {
    console.log(debounce);
  }, [debounce]);

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      { isError && <p className="text-center text-red-600">Something went wrong</p> }

      <div className="relative w-[560px]">
        <input
          className="border py-2 px-4 w-full h-[42px] mb-2"
          type="text"
          placeholder="Search for Github userName"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        
        <div className="absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, nobis!
        </div>
      </div>
    </div>
  );
};

export default Home;
