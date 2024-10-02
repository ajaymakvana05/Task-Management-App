/* eslint-disable react/prop-types */
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { CiHeart } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import InputData from './InputData'; // Import the InputData component

const Cards = ({ home }) => {
    const [showForm, setShowForm] = useState(false);

    const data = [
        { title: "Task 1", desc: "Description for task 1", status: "Incomplete" },
        { title: "Task 2", desc: "Description for task 2", status: "Complete" },
        { title: "Task 3", desc: "Description for task 3", status: "Incomplete" },
        { title: "Task 4", desc: "Description for task 4", status: "Complete" },
        { title: "Task 5", desc: "Description for task 5", status: "Incomplete" },
        { title: "Task 6", desc: "Description for task 6", status: "Incomplete" },
    ];

    return (
        <div className="container my-5">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {data.map((item, i) => (
                    <div key={i} className="col">
                        <div className="card border rounded-lg shadow-sm p-3">
                            <div className="card-body">
                                <h5 className="card-title mb-2">{item.title}</h5>
                                <p className="card-text mb-3">{item.desc}</p>
                                <button
                                    className={`btn ${item.status === "Incomplete" ? 'btn-warning' : 'btn-success'} mb-3`}
                                >
                                    {item.status}
                                </button>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button className="btn btn-light me-2" aria-label="Favorite">
                                        <CiHeart size={20} />
                                    </button>
                                    <button className="btn btn-light me-2" aria-label="Edit">
                                        <FaRegEdit size={20} />
                                    </button>
                                    <button className="btn btn-light" aria-label="Delete">
                                        <MdDelete size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {home === "true" && (
                    <div className="col text-center">
                        <button
                            className="btn btn-outline-primary w-100 mt-4"
                            style={{
                                borderWidth: '2px',
                                borderStyle: 'dotted',
                                borderRadius: '12px',
                                backgroundColor: '#f8f9fa',
                                color: '#007bff',
                                fontSize: '16px',
                                padding: '10px',
                            }}
                            onClick={() => setShowForm(true)}
                        >
                            + ADD TASK
                        </button>
                    </div>
                )}
            </div>

            {/* Conditional rendering for the InputData form */}
            {showForm && (
                <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center">
                    <div className="card p-4 shadow-sm border-light position-relative">
                        <button
                            className="btn btn-close position-absolute top-0 end-0 m-2"
                            onClick={() => setShowForm(false)}
                        ></button>
                        <InputData />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cards;
