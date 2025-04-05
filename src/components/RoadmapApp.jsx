import React, { useState, useEffect } from 'react';
import { Card } from './ui/Card';
import { CardContent } from './ui/CardContent';
import { Select } from './ui/Select';
import ProgressCheckbox from './ProgressCheckbox';
import roadmapData from '../assets/roadmapData';

export default function RoadmapApp() {
  const [completed, setCompleted] = useState(() => {
    const saved = localStorage.getItem('completedTasks');
    return saved ? JSON.parse(saved) : {};
  });

  const [selectedPhase, setSelectedPhase] = useState(roadmapData[0].phase);

  useEffect(() => {
    localStorage.setItem('completedTasks', JSON.stringify(completed));
  }, [completed]);

  const toggleComplete = (phase, task) => {
    setCompleted(prev => {
      const updated = JSON.parse(JSON.stringify(prev)); // deep copy
      if (!updated[phase]) updated[phase] = {};
      updated[phase][task] = !updated[phase][task];
      return updated;
    });
  };

  return (
    <div className="p-4 space-y-4">
      <Select value={selectedPhase} onChange={(e) => setSelectedPhase(e.target.value)}>
        {roadmapData.map(({ phase }) => (
          <option key={phase} value={phase}>{phase}</option>
        ))}
      </Select>

      {roadmapData.map(({ phase, months, description }) =>
        phase === selectedPhase ? (
          <Card key={phase}>
            <CardContent>
              <h2 className="text-xl font-bold mb-2">{phase}</h2>
              <p className="text-sm text-gray-600 mb-2">{months}</p>
              <ul>
                {description.map((task, i) => (
                  <li key={i} className="flex items-center mb-2">
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
        ) : null
      )}
    </div>
  );
}
