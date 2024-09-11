import { useEffect, useState } from "react"
import "./Task.scss"
function Task() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/tasks")
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])

  

  console.log(data)
  return (
    <>
      <table className="task">
        <thead>
          <tr className="task__row">
            <th> <button className="task__row-buttonSelectAll">Select all</button></th>
            <th>Số thứ tự</th>
            <th>Tên công việc</th>
            <th>Trạng thái</th>
            <th>Deadline</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr className="task__item clo">
                <td>
                  <input type="checkbox" />
                </td>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.status}</td>
                <td>20/11/2022</td>
                <td>
                  <button className="task__item-buttonEdit">Sửa</button>
                  <button className="task__item-buttonDelete">Xóa</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default Task
