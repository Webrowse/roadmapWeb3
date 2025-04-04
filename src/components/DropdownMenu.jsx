import React from 'react';

const DropdownMenu = ({ roadmapData, selectedPhase, setSelectedPhase }) => (
  <select
    value={selectedPhase}
    onChange={(e) => setSelectedPhase(e.target.value)}
    className="mb-4 p-2 border rounded"
  >
    {roadmapData.map(({ phase }) => (
      <option key={phase} value={phase}>{phase}</option>
    ))}
  </select>
);

export default DropdownMenu;
