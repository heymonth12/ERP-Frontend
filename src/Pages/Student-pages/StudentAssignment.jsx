import React from "react";

const StudentAssignment = () => {
  const assignments = [
    {
      id: 1,
      title: "Math Assignment 1",
      subject: "Mathematics",
      classSection: "10-A",
      postedBy: "Prof. John",
      deadline: "2024-01-15",
      content: "Solve the problems on quadratic equations from pages 45-50.",
    },
    {
      id: 2,
      title: "Physics Lab Report",
      subject: "Physics",
      classSection: "10-B",
      postedBy: "Prof. Emily",
      deadline: "2024-01-20",
      content: "Prepare a lab report on the laws of motion experiment conducted last week.",
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Heading */}
      <h1
        className="text-4xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-gray-900"
      >
        Student Assignments
      </h1>

      {/* Assignment Table */}
      <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left border">ID</th>
            <th className="p-3 text-left border">Title</th>
            <th className="p-3 text-left border">Subject</th>
            <th className="p-3 text-left border">Class & Section</th>
            <th className="p-3 text-left border">Posted By</th>
            <th className="p-3 text-left border">Deadline</th>
            <th className="p-3 text-left border">Content</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment) => (
            <tr key={assignment.id}>
              <td className="p-3 border">{assignment.id}</td>
              <td className="p-3 border">{assignment.title}</td>
              <td className="p-3 border">{assignment.subject}</td>
              <td className="p-3 border">{assignment.classSection}</td>
              <td className="p-3 border">{assignment.postedBy}</td>
              <td className="p-3 border">{assignment.deadline}</td>
              <td className="p-3 border">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi id aliquid explicabo iste nobis recusandae quasi, illum porro! Sit ratione alias ipsum sapiente unde provident nostrum culpa doloribus fugiat, beatae exercitationem quos corporis earum dolores quidem tenetur ab obcaecati vitae. Incidunt recusandae placeat culpa dolore magnam hic nemo iusto alias labore deleniti sint, nobis quibusdam! Voluptate temporibus, facilis, obcaecati illum eligendi sequi illo officiis voluptas accusamus ut tempore nihil nostrum in culpa assumenda optio provident tempora sit. Iusto voluptates nam cupiditate tenetur, et nemo explicabo atque. Nobis quasi tenetur esse est, beatae laborum dolor temporibus repudiandae suscipit amet illum, deserunt qui, ea optio possimus aperiam minima. Voluptatem nulla ipsum delectus? Repudiandae at inventore officiis deleniti eveniet ab assumenda suscipit ea, aspernatur molestiae laudantium nihil repellat quibusdam laborum veniam odit doloremque animi sint reprehenderit aliquid obcaecati vitae! Inventore harum dolor tenetur ab cum totam pariatur molestiae blanditiis et assumenda ducimus, similique obcaecati debitis libero? Et impedit nemo distinctio iure harum cumque assumenda numquam, magnam aliquid dolorem quos aspernatur nesciunt ipsum non delectus porro veniam eaque quibusdam. Assumenda temporibus asperiores alias ducimus cupiditate. Similique, iusto illo possimus nisi impedit, corporis illum perferendis autem earum nulla repudiandae nam dolore labore voluptates qui.{assignment.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentAssignment;
