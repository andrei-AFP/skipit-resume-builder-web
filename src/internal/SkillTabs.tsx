'use client';

import { observer } from 'mobx-react-lite';
import { ISkill } from '@/interfaces/ISkill';
import { useEffect, useState } from 'react';
import SkillButtons from './SkillButtons';

interface ISkillsTabsProps {
  skills?: [ISkill];
}

const SkillsTabs  = observer((props: ISkillsTabsProps) => {
  const [activeTab, setActiveTab] = useState('All');
  let skillTypes: string[] = [];
  let groupedSkills: Record<string, ISkill[]> = {};

  useEffect(() => {
    if (!activeTab && skillTypes.length > 0) {
      setActiveTab(skillTypes[0]);
    }
  }, [skillTypes, activeTab]);

  if (props.skills) {
    groupedSkills = props.skills.reduce(
      (acc, skill) => {
        const typeName = skill.skill_type.name;
        if (!acc[typeName]) acc[typeName] = [];
        acc[typeName].push(skill);
        return acc;
      },
      {} as Record<string, ISkill[]>
    );
    skillTypes = ['All', ...Object.keys(groupedSkills)];
  } else {
    return;
  }

  return (
    <div className="w-full">
      <div className="flex border-b overflow-x-auto">
        {skillTypes.map((type) => (
          <button
            key={type}
            onClick={() => setActiveTab(type)}
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
              activeTab === type
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500'
            }`}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="p-4">
        <ul className="flex flex-wrap gap-2">
          {((activeTab && activeTab === 'All')
              ? props.skills
              : groupedSkills[activeTab] || []
            ).map((skill: ISkill) => (
              <SkillButtons skills={[skill]} />
            ))}
        </ul>
      </div>
    </div>
  );
});

export default SkillsTabs ;
