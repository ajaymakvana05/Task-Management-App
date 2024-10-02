import { FaTasks, FaStar, FaCheckCircle, FaExclamationCircle, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const data = [
    { title: "All Tasks", icon: <FaTasks />, link: "/" },
    { title: "Important Tasks", icon: <FaStar />, link: "/Importanttask" },
    { title: "Completed Tasks", icon: <FaCheckCircle />, link: "/Completetask" },
    { title: "Incompleted Tasks", icon: <FaExclamationCircle />, link: "/Incompletetask" }
  ];

  return (
    <div className="d-flex flex-column align-items-start p-3 h-100">
      <div className="text-center w-100 mb-4">
        <h2 className="text-light" style={{ fontSize: "1.5rem" }}>Ajay Makvana</h2>
        <h5 className="text-muted" style={{ fontSize: "0.875rem" }}>dummy45@gmail.com</h5>
        <hr className="border-light" />
      </div>

      <div className="w-100 flex-grow-1">
        {data.map((item, index) => (
          <Link to={item.link} key={index} className="d-flex align-items-center mb-3 py-2 px-3 bg-secondary text-white rounded w-100 text-decoration-none"
            style={{ fontSize: "1rem", textAlign: "left" }}>
            <div className="me-2">{item.icon}</div>
            {item.title}
          </Link>
        ))}
      </div>

      <div className="w-100 mt-auto">
        <div className="d-flex justify-content-around w-100 mt-3">
          <button className="btn btn-outline-light" style={{ width: "45%" }}>
            <FaCog className="me-2" /> Settings
          </button>
          <button className="btn btn-danger" style={{ width: "45%" }}>
            <FaSignOutAlt className="me-2" /> Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
