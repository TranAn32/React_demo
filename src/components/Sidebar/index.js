import "./Sidebar.scss"

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <h3 className="sidebar__logo">LOGO</h3>
        <div className="sidebar__list">
          <div className="sidebar__item">
            <a className="sidebar__item-text">Trang chủ</a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__item-text">Công việc</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar