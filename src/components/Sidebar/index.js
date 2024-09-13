import React, { useState } from 'react';
import './Sidebar.scss';
import { toggleMenu } from './helpers';

function Sidebar() {
  const [isOpenTask, setIsOpen] = useState(false);
 
  return (
    <div className="sidebar">
      <div className="sidebar__Account">Acc
        <div className="sidebar__Account-menu">
          <i class="fa-solid fa-bars"></i>
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
        <div className={"sidebar__item ${isOpenTask ? 'open' : ''}"} onClick={() => toggleMenu(isOpenTask, setIsOpen)}>
          <a className="sidebar__item-text" >
            <span className="sidebar__item-text-icon">
              <i className="fa-solid fa-list-check"></i>
            </span>
            Công việc
          </a>
          
        </div>
        {isOpenTask && (
            <div className="sidebar__list-dropdownMenu">
              <td className="sidebar__list-dropdownMenu-item">
                <span className='sidebar__list-dropdownMenu-item-icon'><i class="fa-solid fa-bullseye"></i></span>
                project 1
              </td> 
                <br></br>
              <td className="sidebar__list-dropdownMenu-item">
              <span className='sidebar__list-dropdownMenu-item-icon'><i class="fa-solid fa-bullseye"></i></span>
                project 2</td> <br></br>
              <td className="sidebar__list-dropdownMenu-item">
              <span className='sidebar__list-dropdownMenu-item-icon'><i class="fa-solid fa-bullseye"></i></span>
                project 3</td>
            </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
