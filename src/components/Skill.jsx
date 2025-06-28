import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from "../utils/SkillSlice";

const Skill = () => {
  const [skillName, setSkillName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.Skill.item);

  const handleAddSkill = () => {
    if (skillName.trim() && description.trim()) {
      dispatch(addItem({ name: skillName.trim(), description: description.trim() }));
      setSkillName('');
      setDescription('');
    }
  };

  const handleRemoveSkill = (index) => {
    dispatch(removeItem(index));
  };

  return (
    <div className='min-h-screen bg-gray-900 text-white flex flex-col items-center p-6'>
      <h1 className='text-2xl font-bold mb-6'>Add Skills</h1>

      <div className='w-full max-w-md bg-gray-800 p-6 rounded shadow'>
        <input
          type="text"
          placeholder="Skill Name"
          className="input input-bordered w-full mb-3 bg-gray-700 text-white"
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
        />

        <textarea
          placeholder="Skill Description"
          className="textarea textarea-bordered w-full mb-3 bg-gray-700 text-white"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          onClick={handleAddSkill}
          className="w-full btn bg-indigo-500 hover:bg-indigo-600 border-none text-white"
        >
          Add
        </button>
      </div>

      <div className="w-full max-w-md mt-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white text-black p-4 rounded shadow mb-3 transition-all hover:shadow-lg"
          >
            <h3 className="text-lg font-bold text-indigo-600">{skill.name}</h3>
            <p className="text-sm mt-1">{skill.description}</p>
            <button
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded mt-2"
              onClick={() => handleRemoveSkill(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
