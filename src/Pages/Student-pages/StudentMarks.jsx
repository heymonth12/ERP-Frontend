import React from 'react'

const StudentMarks = () => {
    return (
      <div className="p-8 bg-gray-50 min-h-screen">
        <h2 className="text-2xl font-bold text-center mb-8">My Marks</h2>
        <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left border">Exam Type</th>
              <th className="p-3 text-left border">Sub Type</th>
              <th className="p-3 text-left border">Subject</th>
              <th className="p-3 text-left border">Class & Section</th>
              <th className="p-3 text-left border">Marks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">Mid Sem</td>
              <td className="p-3 border">Theory</td>
              <td className="p-3 border">Mathematics</td>
              <td className="p-3 border">B.Tech CS-A</td>
              <td className="p-3 border">85</td>
            </tr>
            {/* Add more rows dynamically as needed */}
          </tbody>
        </table>
      </div>
    );
  };

export default StudentMarks