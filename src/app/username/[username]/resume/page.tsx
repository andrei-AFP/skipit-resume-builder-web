'use client';

import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import userStore from '@/stores/userStore';
import Experiences from '@/internal/Experiences';
import Loading from '@/internal/Loading';
import SkillsTabs from '@/internal/SkillTabs';
import Summary from '@/internal/Summary';

const UserPage = observer(() => {
  const params = useParams();

  useEffect(() => {
    userStore.fetchUserByUsername(params.username as string);
  }, [params.username]);

  if (userStore.loading) return <Loading />;

  return userStore.user ? (
    <>
      <div className="h-full mb-10 text-center lg:sticky lg:top-20 lg:w-[50%] lg:pe-8 lg:flex lg:flex-col lg:items-end lg:text-end">
        <Summary />
        <>
          <h2 className="text-2xl font-bold my-4">Skills</h2>
          <div className="flex flex-wrap justify-center gap-3 w-full lg:justify-end">
            <SkillsTabs skills={userStore.user.skills} />
          </div>
        </>
      </div>
      <div className="text-center lg:w-[50%] lg:ms-auto lg:ps-8 lg:text-left">
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
