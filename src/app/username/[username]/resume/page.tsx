'use client';

import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import userStore from '@/stores/userStore';
import Loading from '@/components/Loading';
import SummarySection from '@/containers/resume-page/SummarySection';
import ExperiencesSection from '@/containers/resume-page/ExperiencesSection';

const UserPage = observer(() => {
  const params = useParams();

  useEffect(() => {
    if (params.username) userStore.fetch(`/user/${params.username}`);
  }, [params.username]);

  if (userStore.loading) return <Loading />;

  return userStore.user ? (
    <>
      <SummarySection />
      <ExperiencesSection />
    </>
  ) : (
    <div className="w-screen h-screen flex justify-center items-center text-9xl">
      User not found.
    </div>
  );
});

export default UserPage;
