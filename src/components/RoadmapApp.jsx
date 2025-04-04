import React, { useState, useEffect } from 'react';
import DropdownMenu from './DropdownMenu';
import TaskCard from './TaskCard';
import roadmapData from '../assets/roadmapData';

const RoadmapApp = () => {
  const [completed, setCompleted] = useState(() => {
    const savedProgress = localStorage.getItem('completedTasks');
    return savedProgress ? JSON.parse(savedProgress) : {};
  });
  const [selectedPhase, setSelectedPhase] = useState(roadmapData[0].phase);

  useEffect(() => {
    localStorage.setItem('completedTasks', JSON.stringify(completed));
  }, [completed]);

  return (
    <div className="p-4 space-y-4">
      <DropdownMenu 
        roadmapData={roadmapData} 
        selectedPhase={selectedPhase} 
        setSelectedPhase={setSelectedPhase} 
      />
      {roadmapData.map(({ phase, months, description }) => (
        phase === selectedPhase && (
          <TaskCard
            key={phase}
            phase={phase}
            months={months}
            description={description}
            completed={completed}
            setCompleted={setCompleted}
          />
        )
      ))}
    </div>
  );
};

export default RoadmapApp;
