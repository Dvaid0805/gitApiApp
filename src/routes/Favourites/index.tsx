import React from 'react';
import {useAppSelector} from "../../hooks/redux";

const Favourites = () => {
  const {favourites} = useAppSelector(state => state.githubReducer)

  if (favourites.length === 0) return <p className="text-center">No items</p>

  return (
    <div className="justify-center pt-10 mx-auto h-screen">
      <ul className="list-none">
        { favourites.map(i => (<li key={i}><a href={i}>{i}</a></li>)) }
      </ul>
    </div>
  );
};

export default Favourites;
