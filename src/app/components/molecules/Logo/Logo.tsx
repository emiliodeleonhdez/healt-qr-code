'use client';
import { Heart } from 'lucide-react';
import React from 'react';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push('/')}
      className="flex items-center gap-2 p-2 hover:cursor-pointer"
    >
      <Heart className="h-8 w-8 text-red-500" />{' '}
      <h1 className="text-2xl font-bold text-gray-900">mediscanid.info</h1>
    </div>
  );
};

export default Logo;
