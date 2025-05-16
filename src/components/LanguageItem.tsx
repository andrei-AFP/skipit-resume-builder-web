'use client';

import { ILanguage } from '@/interfaces/ILanguage';

interface LanguageItemProps {
  language: ILanguage;
}

const LanguageItem = ({ language }: LanguageItemProps) => {
  return (
    <>
      <h3 className="text-lg">
        <span className="font-medium">{language.name}: </span>
        <span>{language.proficiency}</span>
      </h3>
    </>
  );
};

export default LanguageItem;
