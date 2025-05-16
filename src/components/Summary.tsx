'use client';

import { observer } from 'mobx-react-lite';
import { calculatePeriod } from '@/lib/helpers';
import Image from 'next/image';
import { Smartphone, Mail, Linkedin, Github } from 'lucide-react';
import { IUser } from '@/interfaces/IUser';

interface ISummaryProps {
  user: IUser;
}

const Summary = observer(({ user }: ISummaryProps) => {
  const age = user.birthday ? calculatePeriod(new Date(user.birthday), new Date(), true) : null;

  return (
    <>
      {user.avatar && (
        <div className="relative mx-auto mb-4 w-[150px] h-[150px] overflow-hidden rounded-full border-4 border-black bg-[#1a1a1a] shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.5)] lg:mx-0 lg:my-4">
          <Image
            src={`${process.env.NEXT_PUBLIC_STORAGE_URL}${user.avatar}`}
            alt={`${user.name}'s avatar`}
            width={150}
            height={150}
            priority
          />
        </div>
      )}
      <h1 className="text-3xl font-bold">{user.name}</h1>
      {age && <p>Age: {age}</p>}
      <div className="mt-4">
        {user.location && <p>{user.location}</p>}
        {user.email && (
          <p>
            <a href={`mailto:${user.email}`} className="text-decoration-none">
              {user.email}
            </a>
          </p>
        )}
        {user.phone_number && <p className="no-underline">{user.phone_number}</p>}
      </div>
      <div className="mt-4">
        <div className="flex space-x-4 items-center justify-center">
          {user.email && (
            <a
              href={`mailto:${user.email}`}
              className="text-gray-400 hover:text-white"
              title={user.email}
            >
              <Mail size={24} />
            </a>
          )}
          {user.phone_number && (
            <a
              href={`tel:${user.phone_number?.replace(/\s+/g, '')}`}
              className="text-gray-400 hover:text-white"
              title={user.phone_number}
            >
              <Smartphone size={24} />
            </a>
          )}
          {user.github_url && (
            <a
              href={user.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
              title={user.github_url}
            >
              <Github size={24} />
            </a>
          )}
          {user.linkedin_url && (
            <a
              href={user.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
              title={user.linkedin_url}
            >
              <Linkedin size={24} />
            </a>
          )}
        </div>
      </div>
    </>
  );
});

export default Summary;
