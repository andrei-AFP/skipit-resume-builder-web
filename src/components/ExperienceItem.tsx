'use client';

import dayjs from 'dayjs';
import { IExperience } from '@/interfaces/IExperience';
import SkillButtonList from '@/components/SkillButtonList';
import { calculatePeriod } from '@/lib/helpers';

interface ExperienceItemProps {
  experience: IExperience;
}

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  const startDate = dayjs(experience.start_date).format('MMM/YYYY');
  const endDate = experience.end_date ? dayjs(experience.end_date).format('MMM/YYYY') : 'Present';
  const period = experience.start_date
    ? calculatePeriod(
        experience.start_date as Date,
        experience.end_date ? (experience.end_date as Date) : new Date()
      )
    : null;

  return (
    <div className="mb-4 lg:ps-8 lg:border-s lg:border-[#f1f1f1]">
      <h3 className="text-lg font-medium">{experience.company}</h3>
      <h4 className="text-md font-medium">{experience.position}</h4>
      <p className="text-sm">
        <span className="me-1">{startDate}</span>-<span className="mx-1">{endDate}</span>
        {period && <span> ({period})</span>}
      </p>
      <p className="text-sm">{experience.location}</p>
      {!!experience.skills && !!experience.skills.length && (
        <div className="flex flex-wrap gap-3 justify-center mt-4 lg:justify-start">
          <SkillButtonList skills={experience.skills} hideIcons />
        </div>
      )}
    </div>
  );
};

export default ExperienceItem;
