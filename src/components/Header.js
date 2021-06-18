/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/movies-watchlist/">WatchList</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/movies-watchlist/">Watch List</Link>
            </li>
            <li>
              <Link to="/movies-watchlist/watched">Watched</Link>
            </li>
            <li>
              <Link to="/movies-watchlist/add" className="btn">
                + Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
