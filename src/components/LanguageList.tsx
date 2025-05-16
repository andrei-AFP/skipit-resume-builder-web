'use client';

import { ILanguage } from '@/interfaces/ILanguage';
import LanguageItem from '@/components/LanguageItem';

interface ILanguageListProps {
  languages?: ILanguage[];
}

const LanguageList = ({ languages }: ILanguageListProps) => {
  return (
    <div className="lg:ps-8 lg:border-s lg:border-[#f1f1f1]">
      {languages?.map((language) => <LanguageItem key={language.id} language={language} />)}
    </div>
  );
};

export default LanguageList;
