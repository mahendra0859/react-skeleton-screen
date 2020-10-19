import React from 'react';
import './Skelton.css';

const SkeletonElement = ({ type }) => {
  const clasess = `skeleton ${type}`;

  return <div className={clasess}></div>;
};

export default SkeletonElement;
