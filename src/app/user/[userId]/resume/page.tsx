'use client';

import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import userStore from '@/stores/userStore';
import SkillButtons from '@/internal/SkillButtons';
import Image from 'next/image';
import { calculatePeriod } from '@/lib/helpers';
import Experiences from '@/internal/Experiences';

const UserPage = observer(() => {
  const params = useParams();

  useEffect(() => {
    userStore.fetchUser(params.userId as string);
  }, [params.userId]);

  if (userStore.loading) return <p>Loading...</p>;

  // const test = Object.keys(userStore.user.skills_by_type);

  return userStore.user ? (
    <>
      <div className="mb-10 lg:mb-[-10rem] lg:sticky lg:top-20 lg:w-[50%] lg:pe-8 lg:flex lg:flex-col lg:items-end lg:text-end">
        <div className="mb-4 relative w-[150px] h-[150px] overflow-hidden rounded-full border-4 border-black">
          <Image
            src={`${process.env.NEXT_PUBLIC_STORAGE_URL}${userStore.user.avatar}`}
            alt="Avatar"
            width="150"
            height="150"
          />
        </div>
        <h1 className="text-3xl font-bold">{userStore.user.name}</h1>
        {userStore.user.birthday && (
          <p>
            Age: {calculatePeriod(new Date(userStore.user.birthday as string), new Date(), true)}
          </p>
        )}
        <div className="mt-4">
          <p>Bucharest, Romania</p>
          <p>
            <a href={`mailto:${userStore.user.email}`} className="text-decoration-none">
              {userStore.user.email}
            </a>
          </p>
          <p>{userStore.user.phone_number}</p>
        </div>
        <>
          <h2 className="text-2xl font-bold my-4">Skills</h2>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <SkillButtons skills={userStore.user.skills} />
            {/* {Object.keys(userStore.user.skills_by_type).forEach((type) => {
              return <>
                {type}
                <SkillButtons skills={userStore.user.skills_by_type[type]} />
              </>;
            })} */}
          </div>
          </>
      </div>
      <div className="lg:w-[50%] lg:ms-auto lg:ps-8">
        <div className="mb-6">
          <>
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            <Experiences experiences={userStore.user.experiences} />
          </>
        </div>
      </div>
    </>
  ) : (
    <div className="w-screen h-screen flex justify-center items-center text-9xl">
      User not found.
    </div>
  );
});

export default UserPage;
