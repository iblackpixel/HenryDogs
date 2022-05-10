import React from "react";

export default function Paginado(totalDogs, paginado) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalDogs.totalDogs / 8); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNumbers &&
          pageNumbers.map((number) => {
            return (
              <button
                key={number}
                onClick={(e) => {
                  e.preventDefault();
                  totalDogs.paginado(number);
                }}
              >
                {number}
              </button>
            );
          })}
      </ul>
    </nav>
  );
}
