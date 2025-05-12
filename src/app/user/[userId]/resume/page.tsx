'use client';

import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import userStore from '@/stores/userStore';
import Loading from '@/components/Loading';
import SummarySection from '@/containers/resume-page/SummarySection';
import SkillSection from '@/containers/resume-page/SkillSection';

const UserPage = observer(() => {
  const params = useParams();

  useEffect(() => {
    if (params.userId) userStore.fetch(`/users/${params.userId}`);
  }, [params.userId]);

  if (userStore.loading) return <Loading />;

  return userStore.user ? (
    <>
      <SummarySection />
      <SkillSection />
    </>
  ) : (
    <div className="w-screen h-screen flex justify-center items-center text-9xl">
      User not found.
    </div>
  );
});

export default UserPage;
