'use client';

import { observer } from 'mobx-react-lite';
import userStore from '@/stores/userStore';
import { calculatePeriod } from '@/lib/helpers';
import Image from 'next/image';

const Summary = observer(() => {
  return userStore.user && (
    <>
      {userStore.user.avatar && (
        <div className="mb-4 mx-auto relative w-[150px] h-[150px] overflow-hidden rounded-full border-4 border-black bg-[#1a1a1a] lg:mx-0">
          <Image
            src={`${process.env.NEXT_PUBLIC_STORAGE_URL}${userStore.user.avatar}`}
            alt="Avatar"
            width="150"
            height="150"
          />
        </div>
      )}
      <h1 className="text-3xl font-bold">{userStore.user.name}</h1>
      {userStore.user.birthday && (
        <p>
          Age: {calculatePeriod(new Date(userStore.user.birthday as string), new Date(), true)}
        </p>
      )}
      <div className="mt-4">
        <p>{userStore.user.location}</p>
        <p>
          <a href={`mailto:${userStore.user.email}`} className="text-decoration-none">
            {userStore.user.email}
          </a>
        </p>
        <p>{userStore.user.phone_number}</p>
      </div>
    </>
  );
});

export default Summary;
