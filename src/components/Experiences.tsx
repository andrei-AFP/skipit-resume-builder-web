'use client';

import { observer } from 'mobx-react-lite';
import { IExperience } from '@/interfaces/IExperience';
import { ISkill } from '@/interfaces/ISkill';
import SkillButtons from './SkillButtons';
import dayjs from 'dayjs';
import { calculatePeriod } from '@/lib/helpers';

interface IExperiencesProps {
  skills?: ISkill[];
  experiences?: [IExperience];
}

const Experiences = observer((props: IExperiencesProps) => {
  return (
    <>
      {props.experiences?.map((experience: IExperience) => (
        <div key={experience.id} className="mb-4 lg:ps-8 lg:border-s lg:border-[#f1f1f1]">
          <h3 className="text-lg font-medium">{experience.company}</h3>
          <h3 className="text-md font-medium">{experience.position}</h3>
          <p className="text-sm">
            <span className="me-1">{dayjs(experience.start_date).format('MMM/YYYY')}</span>-
            <span className="mx-1">
              {!!experience.end_date ? dayjs(experience.end_date).format('MMM/YYYY') : 'Present'}
            </span>
            {!!experience.start_date && (
              <span>
                (
                {calculatePeriod(
                  experience.start_date as Date,
                  !!experience.end_date ? (experience.end_date as Date) : new Date()
                )}
                )
              </span>
            )}
          </p>
          <p className="text-sm mb-4">{experience.location}</p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <SkillButtons skills={experience.skills} hideIcons={true} />
          </div>
        </div>
      ))}
    </>
  );
});

export default Experiences;
