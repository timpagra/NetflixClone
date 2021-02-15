/* eslint-disable react/prop-types */
import React from "react";
import "../App.css";





export default function Card({cardDetails, searchResult}) {
  return (
    <div>
      <div className="list">
        {searchResult ? searchResult.map((tile) => (
          <div className="item" key={tile.id}>
            <img  alt={tile.title} src={`https://image.tmdb.org/t/p/original/${tile.poster_path}`}/>
          </div>
        )) : 
          cardDetails.map((tile) => (
            <div className="item" key={tile.id}>
              <img  alt={tile.title} src={`https://image.tmdb.org/t/p/original/${tile.poster_path}`}/>
            </div>
          ))    
        }
      </div>
    </div>
  );
}

