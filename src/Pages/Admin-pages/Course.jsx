import React, { useState } from "react";

const Course = () => {
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
      <h1
        className="text-4xl font-extrabold text-center text-gray-800 mb-12 text-gradient bg-clip-text"
        style={{ backgroundImage: "linear-gradient(to right, #4facfe, #00f2fe)" }}
      >
        Course Management
      </h1>

      {/* Action Buttons with Gradient Background and Hover Effects */}
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
        <form className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="grid grid-cols-2 gap-6 mb-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Course Name:</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Duration (in years):</label>
              <input
                type="number"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Total Credits:</label>
              <input
                type="number"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Subjects:</label>
              <textarea
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter subjects separated by commas"
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
        <table className="mt-8 w-full border-collapse bg-white shadow-lg rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left border">ID</th>
              <th className="p-3 text-left border">Course Name</th>
              <th className="p-3 text-left border">Duration</th>
              <th className="p-3 text-left border">Credits</th>
              <th className="p-3 text-left border">Subjects</th>
              <th className="p-3 text-left border">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">1</td>
              <td className="p-3 border">B.Tech</td>
              <td className="p-3 border">4 Years</td>
              <td className="p-3 border">160</td>
              <td className="p-3 border">Math, Physics, Chemistry</td>
              <td className="p-3 border flex gap-4">
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 transition-all">
                  Edit
                </button>
                <button className="px-4 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition-all">
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

export default Course;
