import React, { useState, useEffect } from 'react';

export default function NvtStudentOrEdit({ nvtOnSubmit, nvtEditingStudent }) {
    const nvtStudentsObj = {
        nvtId: 0,
        nvtName: "",
        nvtAge: 0,
        nvtIsActive: false
    }
    const [nvtStudent, setNvtStudent] = useState(nvtStudentsObj);

    // Update form state if editing Student changes
    useEffect(() => {
        if (nvtEditingStudent !== null) {
            setNvtStudent(nvtEditingStudent);
        } else {
            setNvtStudent(nvtStudentsObj);
        }
    }, [nvtEditingStudent]); // eslint-disable-line react-hooks/exhaustive-deps

    const nvtHandleChange = (nvtEvent) => {
        let Name = nvtEvent.target.name;
        let value = nvtEvent.target.type === 'checkbox' ? nvtEvent.target.checked : nvtEvent.target.value;

        setNvtStudent(prev => {
            return {
                ...prev,
                [Name]: value,
            }
        })
    }

    const nvtHandleSubmit = (nvtEvent) => {
        nvtEvent.preventDefault();
        nvtOnSubmit(nvtStudent);
        setNvtStudent(nvtStudentsObj); // Reset form
    }

    return (
        <div className="card mt-4">
            <div className="card-header">
                <h2>{nvtEditingStudent ? "Sửa Student" : "Thêm mới Student"}</h2>
            </div>
            <div className="card-body">
                <form onSubmit={nvtHandleSubmit}>
                    <div className="form-group mb-3">
                        <label>Student ID</label>
                        <input
                            type="text"
                            name='nvtId'
                            value={nvtStudent.nvtId}
                            onChange={nvtHandleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>Student Name</label>
                        <input
                            type="text"
                            name='nvtName'
                            value={nvtStudent.nvtName}
                            onChange={nvtHandleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>Age</label>
                        <input
                            type="number"
                            name='nvtAge'
                            value={nvtStudent.nvtAge}
                            onChange={nvtHandleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>Status</label>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                name='nvtIsActive'
                                checked={nvtStudent.nvtIsActive}
                                onChange={nvtHandleChange}
                                className="form-check-input"
                            />
                            <label className="form-check-label">Active</label>
                        </div>
                    </div>
                    <button type='submit' className="btn btn-primary">Ghi lại</button>
                </form>
            </div>
        </div>
    )
}