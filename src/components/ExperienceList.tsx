'use client';

import { IExperience } from '@/interfaces/IExperience';
import ExperienceItem from '@/components/ExperienceItem';

interface IExperienceListProps {
  experiences?: IExperience[];
}

const ExperienceList = ({ experiences }: IExperienceListProps) => {
  return (
    <div className="space-y-6">
      {experiences?.map((experience) => (
        <ExperienceItem key={experience.id} experience={experience} />
      ))}
    </div>
  );
};

export default ExperienceList;
