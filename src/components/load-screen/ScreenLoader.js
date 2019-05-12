import React from 'react';
import Loader from './Loader';
import './ScreenLoader.scss';
const ScreenLoader = ({ isActive }) => (
  <div className={`modal ${isActive && 'is-active'}`}>
    <div className="modal-background screen-background" />
    <div className="modal-content">
      <Loader />
    </div>
  </div>
);

export default ScreenLoader;
