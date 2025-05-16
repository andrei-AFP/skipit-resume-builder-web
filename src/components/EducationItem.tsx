'use client';

import dayjs from 'dayjs';
import { IEducation } from '@/interfaces/IEducation';

interface EducationItemProps {
  education: IEducation;
}

const EducationItem = ({ education }: EducationItemProps) => {
  const startDate = dayjs(education.start_date).format('YYYY');
  const endDate = education.end_date ? dayjs(education.end_date).format('YYYY') : 'Present';

  return (
    <div className="mb-4 lg:ps-8 lg:border-s lg:border-[#f1f1f1]">
      <h3 className="text-lg font-medium">
        {education.degree} - {education.institution}
      </h3>
      <h4 className="text-md font-medium">Specialization: {education.specialization}</h4>
      <p className="text-sm">
        <span className="me-1">{startDate}</span>-<span className="mx-1">{endDate}</span>
      </p>
      <p className="text-sm">{education.location}</p>
    </div>
  );
};

export default EducationItem;
