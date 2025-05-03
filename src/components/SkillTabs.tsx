'use client';

import { observer } from 'mobx-react-lite';
import { ISkill } from '@/interfaces/ISkill';
import { useEffect, useMemo, useState } from 'react';
import SkillButtons from './SkillButtons';
import DraggableScroll from './DraggableScroll';

interface ISkillsTabsProps {
  skills?: [ISkill];
}

const SkillsTabs = observer((props: ISkillsTabsProps) => {
  const [activeTab, setActiveTab] = useState('All');

  const { groupedSkills, skillTypes } = useMemo(() => {
    let grouped: Record<string, [ISkill]> = {};
    if (props.skills) {
      grouped = props.skills.reduce(
        (acc, skill) => {
          const typeName = skill.skill_type.name;
          if (!acc[typeName]) acc[typeName] = [skill];
          else acc[typeName].push(skill);
          return acc;
        },
        {} as Record<string, [ISkill]>
      );
    }

    const types = ['All', ...Object.keys(grouped)];
    return { groupedSkills: grouped, skillTypes: types };
  }, [props.skills]);

  useEffect(() => {
    if (!activeTab && skillTypes.length > 0) {
      setActiveTab(skillTypes[0]);
    }
  }, [skillTypes, activeTab]);

  return (
    props.skills &&
    <>
      <div className="flex overflow-x-auto no-scrollbar lg:justify-end">
        <DraggableScroll>
          {skillTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveTab(type)}
              className={`px-4 py-2 text-sm font-medium whitespace-nowrap cursor-pointer ${
                activeTab === type ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'
              }`}
            >
              {type}
            </button>
          ))}
        </DraggableScroll>
      </div>
      <div className="py-4">
        <ul className="flex flex-wrap gap-2 justify-center lg:justify-end">
          {activeTab && activeTab === 'All' ? (
            <SkillButtons skills={props.skills} />
          ) : (
            <SkillButtons skills={groupedSkills[activeTab]} />
          )}
        </ul>
      </div>
    </>
  );
});

export default SkillsTabs;
