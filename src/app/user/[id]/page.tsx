'use client';
import useGetUserById from '@/app/hooks/useGetUserById';
import Alerts from '../../../app/components/molecules/Profile/Alerts';
import Banner from '../../../app/components/molecules/Profile/Banner';
import Conditions from '../../../app/components/molecules/Profile/Conditions';
import Contacts from '../../../app/components/molecules/Profile/Contacts';
import Meds from '../../../app/components/molecules/Profile/Meds';
import User from '../../../app/components/molecules/Profile/User';
import Skeleton from '@/app/components/atoms/Skeleton/Skeleton';
import { useParams } from 'next/navigation';
import { calcAge } from '../../../app/common/utils';

const SkeletonMap: React.FC = () => {
  return (
    <>
      <Banner />
      <div className="flex flex-col items-center gap-2 p-4">
        <Skeleton />
        <Skeleton />

        <section className="flex w-full max-w-md flex-col gap-2 md:max-w-lg md:flex-row lg:max-w-5xl">
          <section className="flex flex-1 flex-col gap-2">
            <Skeleton />
            <Skeleton />
          </section>
          <section className="flex-1">
            <Skeleton />
          </section>
        </section>
      </div>
    </>
  );
};

const UserPage = () => {
  const params = useParams<{ id: string }>();
  const id = params?.id;
  const { user, loading, error } = useGetUserById(id);

  if (loading) return <SkeletonMap />;
  if (error)
    return <div className="p-4 text-red-600">Error cargando usuario.</div>;

  return (
    <>
      <Banner />
      <div className="flex flex-col items-center gap-2 p-4">
        <User
          fullName={user?.fullName as string}
          age={calcAge(user?.dateOfBirth)}
          dateOfBirth={user?.dateOfBirth as string}
          bloodType={user?.bloodType as string}
        />
        <Alerts
          allergies={user?.allergies as string[]}
          additionalInfo={user?.additionalInfo as string}
        />
        <section className="flex w-full max-w-md flex-col gap-2 md:max-w-lg md:flex-row lg:max-w-5xl">
          <section className="flex flex-1 flex-col gap-2">
            <Meds meds={user?.currentTreatment as string[]} />
            <Conditions conditions={user?.existingConditions as string[]} />
          </section>
          <section className="flex-1">
            <Contacts contacts={user?.emergencyContacts as []} />
          </section>
        </section>
      </div>
    </>
  );
};

export default UserPage;
