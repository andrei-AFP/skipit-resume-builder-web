'use client';

import { observer } from 'mobx-react-lite';
import { calculatePeriod } from '@/lib/helpers';
import Image from 'next/image';
import { IUser } from '@/interfaces/IUser';

interface ISummaryProps {
  user: IUser;
}

const Summary = observer(({ user }: ISummaryProps) => {
  const age = user.birthday ? calculatePeriod(new Date(user.birthday), new Date(), true) : null;

  return (
    <>
      {user.avatar && (
        <div className="relative mx-auto mb-4 w-[150px] h-[150px] overflow-hidden rounded-full border-4 border-black bg-[#1a1a1a] lg:mx-0">
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
        {user.phone_number && <p>{user.phone_number}</p>}
      </div>
    </>
  );
});

export default Summary;
