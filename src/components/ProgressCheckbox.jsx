import React from 'react';

const ProgressCheckbox = ({ task, phase, completed, toggleComplete }) => (
  <>
    <input
      type="checkbox"
      checked={completed[phase]?.[task] || false}
      onChange={() => toggleComplete(task)}
      className="mr-2"
    />
    <span className={completed[phase]?.[task] ? 'line-through text-gray-500' : ''}>{task}</span>
  </>
);

export default ProgressCheckbox;
