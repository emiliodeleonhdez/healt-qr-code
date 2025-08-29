'use client';
import useGetUserById from '../../../app/hooks/useGetUserById';
import Alerts from '../../../app/components/molecules/Profile/Alerts';
import Banner from '../../../app/components/molecules/Profile/Banner';
import Conditions from '../../../app/components/molecules/Profile/Conditions';
import Contacts from '../../../app/components/molecules/Profile/Contacts';
import Meds from '../../../app/components/molecules/Profile/Meds';
import User from '../../../app/components/molecules/Profile/User';
import { useParams } from 'next/navigation';
import { calcAge } from '../../../app/common/utils';
import SkeletonMap from '../../../app/components/molecules/SkeletonMap/SkeletonMap';
import { Heart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { MEDISCAN_PATHS } from '../../../app/common';

const UserPage = () => {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const id = params?.id;
  const { user, loading, error } = useGetUserById(id);

  if (loading) return <SkeletonMap />;
  if (error)
    return <div className="p-4 text-red-600">Error cargando usuario</div>;

  return (
    <>
      <Banner />
      <div className="flex flex-col items-center gap-2 p-4">
        <User
          fullName={user?.fullName as string}
          age={calcAge(user?.dateOfBirth)}
          dateOfBirth={user?.dateOfBirth as string}
          bloodType={user?.bloodType as string}
          insurance={user?.insurance as string}
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
        <section className="m-1 flex flex-col items-center p-2 text-xs">
          <Heart className="h-4 w-4 font-bold text-red-500" />
          <p> Impulsado por mediscanid.info</p>
          <p>
            Cualquier duda, revisa nuestro{' '}
            <a className="hover:cursor-pointer hover:text-red-800">
              Aviso de Privacidad
            </a>
          </p>
          <p>
            ¿Interesado?{' '}
            <span
              className="hover:cursor-pointer hover:text-red-800"
              onClick={() => router.push(MEDISCAN_PATHS.REGISTER)}
            >
              Crea tu perfil aquí
            </span>
          </p>
        </section>
      </div>
    </>
  );
};

export default UserPage;
