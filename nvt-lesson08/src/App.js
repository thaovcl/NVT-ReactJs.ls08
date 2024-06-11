import React, { useState } from 'react';
import './App.css';
import NvtListStudent from './components/NvtListStudent';
import NvtStudentOrEdit from './components/NvtStudentAddOrEdit';

function App() {
    // Mock data
    const nvt_listStudents = [
        { nvtId: 2210900039, nvtName: "Nguyễn Văn Thạo", nvtAge: 25, nvtIsActive: true },
        { nvtId: 1, nvtName: "Học lập trình frontend", nvtAge: 22, nvtIsActive: true },
        { nvtId: 2, nvtName: "Học lập trình reactjs", nvtAge: 23, nvtIsActive: false },
        { nvtId: 3, nvtName: "Lập trình với Frontend - Reactjs", nvtAge: 24, nvtIsActive: true },
        { nvtId: 4, nvtName: "Lập trình Fullstack (PHP, Java, NetCore)", nvtAge: 26, nvtIsActive: false },
    ]

    const [nvtlistStudents, setNvtListStudents] = useState(nvt_listStudents);
    const [nvtEditingStudent, setNvtEditingStudent] = useState(null);

    const nvtHandleSubmit = (nvtStudent) => {
        if (nvtEditingStudent !== null) {
            setNvtListStudents(prev => prev.map((Student, index) => index === nvtEditingStudent.index ? nvtStudent : Student));
            setNvtEditingStudent(null);
        } else {
            setNvtListStudents(prev => [...prev, nvtStudent]);
        }
    }

    const nvtHandleEditStudent = (index) => {
        setNvtEditingStudent({ ...nvtlistStudents[index], index });
    }

    const nvtHandleRemoveStudent = (index) => {
        setNvtListStudents(prev => prev.filter((_, i) => i !== index));
    }

    return (
        <div className="container border">
            <h1>Nguyễn Văn Thạo</h1>
            <hr />
            <div>
                {/*danh sach list Students*/}
                <NvtListStudent renderNvtListStudents={nvtlistStudents} onEditStudent={nvtHandleEditStudent} onRemoveStudent={nvtHandleRemoveStudent} />
            </div>
            <div>
                <NvtStudentOrEdit nvtOnSubmit={nvtHandleSubmit} nvtEditingStudent={nvtEditingStudent} />
            </div>
        </div>
    );
}

export default App;