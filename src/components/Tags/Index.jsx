import React from "react";

function Tag ({ getTag }) {
  return (
      <li className="product__content__left__tags__tag">{getTag}</li>
  );
};

export default Tag;