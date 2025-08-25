'use client';
import React from 'react';

const Skeleton: React.FC = () => {
  return (
    <div
      role="status"
      aria-busy="true"
      className="w-full max-w-xl animate-pulse rounded-2xl bg-transparent p-4 shadow-sm"
    >
      <div className="h-4 w-11/12 rounded-full bg-gray-200" />
      <div className="mt-3 h-4 w-9/12 rounded-full bg-gray-200" />
      <div className="mt-3 h-4 w-7/12 rounded-full bg-gray-200" />
      <span className="sr-only">Cargando…</span>
    </div>
  );
};

export default Skeleton;
