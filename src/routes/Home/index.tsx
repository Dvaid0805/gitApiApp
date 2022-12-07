import React, {useEffect} from 'react';
import {Navigation, RepoCart} from '../../components';
import {useSearchUsersQuery, useLazyGetUserReposQuery} from '../../store/GitHub/github.api';
import {useDebounce} from "../../hooks/debounce";

const Home = () => {
  const [search, setSearch] = React.useState('');
  const [dropdown, setDropdown] = React.useState(false);
  const debounce = useDebounce(search);
  const { data, isError, isLoading } = useSearchUsersQuery(debounce, {
    skip: debounce.length < 3,
  });
  const [ fetchRepos, { isLoading: areReposLoading, data: repos } ] = useLazyGetUserReposQuery();

  useEffect(() => {
    setDropdown(debounce.length > 3 && data?.length! > 0)
  }, [debounce, data]);

  const clickHandler = (username: string) => {
    fetchRepos(username);
    setDropdown(false)
  };

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen">
      { isError && <p className="text-center text-red-600">Something went wrong</p> }

      <div className="relative w-[560px]">
        <input
          className="border py-2 px-4 w-full h-[42px] mb-2"
          type="text"
          placeholder="Search for Github userName"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        { dropdown && <ul
          className="list-none absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white">
          {isLoading && <p className="text-center">Loading...</p>}
          {data?.map(user => (
            <li
              className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
              key={user.id}
              onClick={() => clickHandler(user.login)}
            >
              {user.login}
            </li>
          ))}
        </ul> }
        <div className="container">
          { areReposLoading && <div className="text-center">Loading...</div> }
          { repos?.map(repo => <RepoCart repo={repo} key={repo.id}/>) }
        </div>
      </div>
    </div>
  );
};

export default Home;
