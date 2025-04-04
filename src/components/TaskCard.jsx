import React from 'react';
import ProgressCheckbox from './ProgressCheckbox';
import { Card } from './ui/Card';
import { CardContent } from './ui/CardContent';

const TaskCard = ({ phase, months, description, completed, setCompleted }) => {
  const toggleComplete = (task) => {
    setCompleted(prev => {
      const updated = { ...prev };
      if (!updated[phase]) updated[phase] = {};
      updated[phase][task] = !updated[phase][task];
      return updated;
    });
  };

  return (
    <Card className="rounded-2xl shadow-lg p-4">
      <CardContent>
        <h2 className="text-xl font-bold mb-2">{phase}</h2>
        <p className="text-sm text-gray-600 mb-2">{months}</p>
        <ul>
          {description.map((task, index) => (
            <li key={index} className="flex items-center mb-2">
              <ProgressCheckbox 
                task={task} 
                phase={phase} 
                completed={completed} 
                toggleComplete={toggleComplete} 
              />
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
