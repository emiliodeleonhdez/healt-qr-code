import Skeleton from '../../atoms/Skeleton/Skeleton';
import Banner from '../Profile/Banner';

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

export default SkeletonMap;
