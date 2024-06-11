import React from 'react'

export default function NvtListStudent({ renderNvtListStudents, onEditStudent, onRemoveStudent }) {
    console.log(renderNvtListStudents);

    // Render data
    let nvtElementStudent = renderNvtListStudents.map((Student, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{Student.nvtId}</td>
                <td>{Student.nvtName}</td>
                <td>{Student.nvtAge}</td>
                <td>
                        <input
                            type="checkbox"
                            checked={Student.lttIsActive}
                            readOnly
                        />
                    </td>
                <td>
                    <button className='btn btn-success' onClick={() => onEditStudent(index)}>sửa</button>
                    <button className='btn btn-danger' onClick={() => onRemoveStudent(index)}>xóa</button>
                </td>
            </tr>
        )
    })

    return (
        <div>
            <h2>danh sách các nhiệm vụ</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Student ID</th>
                        <th>Student Name</th>
                        <th>Age</th>
                        <th>Status</th>
                        <th>Hoạt động</th>
                    </tr>
                </thead>
                <tbody>
                    {nvtElementStudent}
                </tbody>
            </table>
        </div>
    )
}