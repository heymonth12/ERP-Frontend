import React, { useState } from "react";

const Marks = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-8">Marks Management</h2>
      <div className="flex justify-center gap-8 mb-8">
        <button
          onClick={() => setShowForm(true)}
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
        >
          Add Marks
        </button>
        <button
          onClick={() => setShowForm(false)}
          className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
        >
          View Marks
        </button>
      </div>

      {showForm ? (
        <form className="bg-white p-6 rounded-lg shadow-lg">
          <div className="grid grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Student Name:</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Roll Number:</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Class & Section:</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Subject:</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Exam Type:</label>
              <select
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="mid-sem">Mid Sem</option>
                <option value="end-sem">End Sem</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Sub Type:</label>
              <select
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="theory">Theory</option>
                <option value="practical">Practical</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Marks:</label>
              <input
                type="number"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
          >
            Submit
          </button>
        </form>
      ) : (
        <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left border">Roll Number</th>
              <th className="p-3 text-left border">Student Name</th>
              <th className="p-3 text-left border">Class & Section</th>
              <th className="p-3 text-left border">Subject</th>
              <th className="p-3 text-left border">Exam Type</th>
              <th className="p-3 text-left border">Sub Type</th>
              <th className="p-3 text-left border">Marks</th>
              <th className="p-3 text-left border">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">20CS001</td>
              <td className="p-3 border">John Doe</td>
              <td className="p-3 border">10A</td>
              <td className="p-3 border">Mathematics</td>
              <td className="p-3 border">Mid Sem</td>
              <td className="p-3 border">Theory</td>
              <td className="p-3 border">85</td>
              <td className="p-3 border">
                <button className="m-2 px-4 py-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 transition-all">
                  Edit
                </button>
                <button className="m-2 px-4 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition-all">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Marks;
