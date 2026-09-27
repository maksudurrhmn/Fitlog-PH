import Banner from '@/components/homepage/Banner';
import Library from '@/components/homepage/librarysection/Library';
import LibrarySkeleton from '@/components/homepage/librarysection/LibrarySkeleton';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div>
      <Banner />
      <Suspense fallback={<LibrarySkeleton />}>
        <Library />
      </Suspense>
    </div>
  );
}
