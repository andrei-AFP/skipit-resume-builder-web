'use client';

import { IEducation } from '@/interfaces/IEducation';
import EducationItem from '@/components/EducationItem';

interface IEducationListProps {
  educations?: IEducation[];
}

const EducationList = ({ educations }: IEducationListProps) => {
  return (
    <>
      {educations?.map((education) => <EducationItem key={education.id} education={education} />)}
    </>
  );
};

export default EducationList;
