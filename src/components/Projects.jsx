import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../utils/ProjectSlice';

const Project = () => {
  const [projectLink, setProjectLink] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.Project.item);

  const handleAddProject = () => {
    if (projectLink.trim() && description.trim()) {
      dispatch(addItem({ link: projectLink.trim(), description: description.trim() }));
      setProjectLink('');
      setDescription('');
    }
  };

  const handleRemoveProject = (index) => {
    dispatch(removeItem(index));
  };

  return (
    <div className='min-h-screen bg-gray-900 text-white flex flex-col items-center p-6'>
      <h1 className='text-2xl font-bold mb-6'>Add Project</h1>

      <div className='w-full max-w-md bg-gray-800 p-6 rounded shadow'>
        <input
          type="text"
          placeholder="Project Link (URL)"
          className="input input-bordered w-full mb-3 bg-gray-700 text-white"
          value={projectLink}
          onChange={(e) => setProjectLink(e.target.value)}
        />

        <textarea
          placeholder="Project Description"
          className="textarea textarea-bordered w-full mb-3 bg-gray-700 text-white"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          onClick={handleAddProject}
          className="w-full btn bg-indigo-500 hover:bg-indigo-600 border-none text-white"
        >
          Add
        </button>
      </div>

      <div className="w-full max-w-md mt-10">
        <h2 className="text-xl font-semibold mb-4">Project List</h2>
        {projects.length === 0 && (
          <p className="text-gray-400 text-sm italic">No projects added yet.</p>
        )}
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white text-black p-4 rounded shadow mb-3 transition-all hover:shadow-lg"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-indigo-600 hover:underline break-all"
            >
              {project.link}
            </a>
            <p className="text-sm mt-1">{project.description}</p>
            <button
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded mt-2"
              onClick={() => handleRemoveProject(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
