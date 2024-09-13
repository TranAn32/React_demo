import React, { useState } from 'react';
import './Sidebar.scss';
import { toggleMenu } from './helpers';

function Sidebar() {
  const [isOpenTask, setIsOpenTask] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(true); 

  return (
    <>
      {!isOpenSidebar && (
        <div className="sidebar-toggle" onClick={() => setIsOpenSidebar(true)}>
          <i className="fa-solid fa-bars"></i>
        </div>
      )}
     
      <div className={`sidebar ${isOpenSidebar ? 'open' : ''}`}>
        <div className="sidebar__Account">Account
          <div className="sidebar__Account-menu" onClick={() => setIsOpenSidebar(false)}>
            <i className="fa-solid fa-bars"></i> 
          </div>
        </div>
        <div className="sidebar__list">
          <div className="sidebar__item">
            <a className="sidebar__item-text">
              <span className="sidebar__item-text-icon">
                <i className="fa-solid fa-circle-plus"></i>
              </span>
              Thêm nhiệm vụ
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__item-text">
              <span className="sidebar__item-text-icon">
                <i className="fa-solid fa-house"></i>
              </span>
              Trang chủ
            </a>
          </div>
          <div className="sidebar__item" onClick={() => toggleMenu(isOpenTask, setIsOpenTask)}>
            <a className="sidebar__item-text">
              <span className="sidebar__item-text-icon">
                <i className="fa-solid fa-list-check"></i>
              </span>
              Công việc
            </a>
          </div>
          {isOpenTask && (
            <div className="sidebar__list-dropdownMenu">
              <div className="sidebar__list-dropdownMenu-item">
                <span className="sidebar__list-dropdownMenu-item-icon">
                  <i className="fa-solid fa-bullseye"></i>
                </span>
                Project 1
              </div>
              <div className="sidebar__list-dropdownMenu-item">
                <span className="sidebar__list-dropdownMenu-item-icon">
                  <i className="fa-solid fa-bullseye"></i>
                </span>
                Project 2
              </div>
              <div className="sidebar__list-dropdownMenu-item">
                <span className="sidebar__list-dropdownMenu-item-icon">
                  <i className="fa-solid fa-bullseye"></i>
                </span>
                Project 3
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
