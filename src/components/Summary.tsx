'use client';

import { observer } from 'mobx-react-lite';
import { calculatePeriod } from '@/lib/helpers';
import Image from 'next/image';
import { IUser } from '@/interfaces/IUser';

interface ISummaryProps {
  user: IUser;
}

const Summary = observer(({ user }: ISummaryProps) => {
  return (
    <>
      {user.avatar && (
        <div className="mb-4 mx-auto relative w-[150px] h-[150px] overflow-hidden rounded-full border-4 border-black bg-[#1a1a1a] lg:mx-0">
          <Image
            src={`${process.env.NEXT_PUBLIC_STORAGE_URL}${user.avatar}`}
            alt="Avatar"
            width="150"
            height="150"
          />
        </div>
      )}
      <h1 className="text-3xl font-bold">{user.name}</h1>
      {user.birthday && (
        <p>Age: {calculatePeriod(new Date(user.birthday as string), new Date(), true)}</p>
      )}
      <div className="mt-4">
        <p>{user.location}</p>
        <p>
          <a href={`mailto:${user.email}`} className="text-decoration-none">
            {user.email}
          </a>
        </p>
        <p>{user.phone_number}</p>
      </div>
    </>
  );
});

export default Summary;
