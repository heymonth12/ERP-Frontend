import React from 'react'

const StudentAttendance = () => {
    return (
      <div className="p-8 bg-gray-50 min-h-screen">
        <h2 className="text-2xl font-bold text-center mb-8">My Attendance</h2>
        <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left border">Subject</th>
              <th className="p-3 text-left border">Class & Section</th>
              <th className="p-3 text-left border">Total Classes</th>
              <th className="p-3 text-left border">Classes Attended</th>
              <th className="p-3 text-left border">Attendance (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">Physics</td>
              <td className="p-3 border">B.Tech CS-B</td>
              <td className="p-3 border">30</td>
              <td className="p-3 border">28</td>
              <td className="p-3 border">93.33%</td>
            </tr>
            {/* Add more rows dynamically as needed */}
          </tbody>
        </table>
      </div>
    );
  };

export default StudentAttendance