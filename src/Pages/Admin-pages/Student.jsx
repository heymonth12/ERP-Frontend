import React, { useState } from "react";

const Student = () => {
  const [showForm, setShowForm] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const handleCreate = () => {
    setShowForm(true);
    setShowTable(false);
  };

  const handleView = () => {
    setShowForm(false);
    setShowTable(true);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Heading with Gradient Text */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12 text-gradient bg-clip-text" 
          style={{ backgroundImage: "linear-gradient(to right, #4facfe, #00f2fe)" }}>
        Student Management
      </h1>

      {/* Action Buttons with Gradient Background */}
      <div className="flex justify-center gap-8 mb-12">
        <button
          onClick={handleCreate}
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
        >
          Create
        </button>
        <button
          onClick={handleView}
          className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
        >
          View
        </button>
      </div>

      {/* Create Form */}
      {showForm && (
        <form className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-2 gap-6 mb-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Student Name:</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Roll Number:</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Course:</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Campus:</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Phone Number:</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Section:</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Semester:</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email:</label>
              <input
                type="email"
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
      )}

      {/* View Table */}
      {showTable && (
        <table className="mt-8 w-full border-collapse bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left border">ID</th>
              <th className="p-3 text-left border">Name</th>
              <th className="p-3 text-left border">Roll Number</th>
              <th className="p-3 text-left border">Course</th>
              <th className="p-3 text-left border">Campus</th>
              <th className="p-3 text-left border">Phone Number</th>
              <th className="p-3 text-left border">Section</th>
              <th className="p-3 text-left border">Semester</th>
              <th className="p-3 text-left border">Email</th>
              <th className="p-3 text-left border">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">1</td>
              <td className="p-3 border">John Doe</td>
              <td className="p-3 border">20CS001</td>
              <td className="p-3 border">B.Tech</td>
              <td className="p-3 border">Delhi Campus</td>
              <td className="p-3 border">9876543210</td>
              <td className="p-3 border">A</td>
              <td className="p-3 border">5</td>
              <td className="p-3 border">john@example.com</td>
              <td className="p-3 border flex gap-4">
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 transition-all">Edit</button>
                <button className="px-4 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition-all">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Student;
