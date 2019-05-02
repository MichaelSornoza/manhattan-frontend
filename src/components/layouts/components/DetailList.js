import React from 'react';

const DetailList = ({ details, onClick }) => (
  <div className="navbar-dropdown">
    {details.map(detail => (
      <a className="navbar-item detail" href="#" onClick={onClick} key={detail.id}>
        {detail.name}
      </a>
    ))}
  </div>
);

export default DetailList;
