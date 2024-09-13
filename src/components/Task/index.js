import { useEffect, useState } from "react";
import "./Task.scss";

function Task() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/tasks")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  return (
    <>
      <div className="page">Công việc / </div>
      <div className="task-container">
      <div className="task__header">
        <div className="task__header-name">Tên project</div>
        <div className="task__header-items">
          <span className="task__header-items-item">Lead:</span> Back End
                <br />
          <span className="task__header-items-item">Ngày khởi tạo:</span> 22/12/2024
        </div>
      </div>
      <div className="task">
        {data.map((item) => (
          <div className="task__item" >
            <div className="task__item-content">
              <div className="task__item-main">
                <input type="checkbox" />
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
    </div>
    </>
    
  );
}

export default Task;
