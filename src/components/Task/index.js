import { useEffect, useState } from "react";
import "./Task.scss";
import { toggleMenu } from '../Sidebar/helpers';

function Task() {
  const [data, setData] = useState([]);
  const [isOpenProject, setIsOpen] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/tasks")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);
  const handleCheckboxChange = (id) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setData(updatedData);
  };

    return (
      <>
        <div className="page">Công việc / </div>
        <div className="task-container">
          <div className="task__header" onClick={() => toggleMenu(isOpenProject, setIsOpen)}>
            <div className="task__header-name">Tên project</div>
            <div className="task__header-items">
              <span className="task__header-items-item">Lead:</span> Back End
                    <br />
              <span className="task__header-items-item">Ngày khởi tạo:</span> 22/12/2024
            </div>
          </div>
          {isOpenProject && (
            <div className="task">
              {data.map((item) => (
                <div className="task__item" >
                  <div className="task__item-content">
                    <div className="task__item-main">
                      <input type="checkbox" 
                        checked={item.completed}
                        onChange={() => handleCheckboxChange(item.index)}
                      />
                      <span className="task__item-main-text">{item.title}</span>
                    </div>
                    <div className="task__item-info">
                      Status: {item.status}
                      <br />
                      Deadline: 22/12/2024
                    </div>
                  </div>
                  <div className="task__item-actions">
                    <button className="task__item-actions-buttonEdit">
                      <i className="fa-solid fa-pen"></i>
                    </button>
                    <button className="task__item-actions-buttonDelete">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
      </div>
      </>
      
    );
  
} 
export default Task;
