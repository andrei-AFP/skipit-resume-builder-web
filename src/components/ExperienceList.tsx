'use client';

import { IExperience } from '@/interfaces/IExperience';
import ExperienceItem from '@/components/ExperienceItem';

interface IExperienceListProps {
  experiences?: IExperience[];
}

const ExperienceList = ({ experiences }: IExperienceListProps) => {
  return (
    <>
      {experiences?.map((experience) => (
        <ExperienceItem key={experience.id} experience={experience} />
      ))}
    </>
  );
};

export default ExperienceList;
