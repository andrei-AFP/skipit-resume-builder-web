'use client';

import { observer } from 'mobx-react-lite';
import { ISkill } from '@/interfaces/ISkill';
import { useEffect, useMemo, useState } from 'react';
import SkillButtonList from '@/components/SkillButtonList';
import DraggableScroll from '@/components/DraggableScroll';

interface ISkillTabListProps {
  skills?: ISkill[];
}

const SkillTabList = observer(({ skills }: ISkillTabListProps) => {
  const [activeTab, setActiveTab] = useState('All');

  const { groupedSkills, skillTypes } = useMemo(() => {
    let grouped: Record<string, ISkill[]> = {};
    if (skills) {
      grouped = skills.reduce(
        (acc, skill) => {
          const typeName = skill.skill_type.name;
          if (!acc[typeName]) acc[typeName] = [skill];
          else acc[typeName].push(skill);
          return acc;
        },
        {} as Record<string, ISkill[]>
      );
    }

    const types = ['All', ...Object.keys(grouped)];
    return { groupedSkills: grouped, skillTypes: types };
  }, [skills]);

  useEffect(() => {
    if (!activeTab && skillTypes.length > 0) {
      setActiveTab(skillTypes[0]);
    }
  }, [skillTypes, activeTab]);

  return (
    skills && (
      <>
        <div className="flex overflow-x-auto no-scrollbar lg:justify-end">
          <DraggableScroll>
            {skillTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveTab(type)}
                className={`px-4 py-2 text-sm font-medium whitespace-nowrap cursor-pointer ${
                  activeTab === type ? 'border-b-2 border-white text-white' : 'text-gray-500'
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
              <SkillButtonList skills={skills} />
            ) : (
              <SkillButtonList skills={groupedSkills[activeTab]} />
            )}
          </ul>
        </div>
      </>
    )
  );
});

export default SkillTabList;
