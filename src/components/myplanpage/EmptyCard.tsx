import Link from 'next/link';
import React from 'react';

function EmptyCard() {
  return (
    <div className="flex justify-center items-center flex-col py-12 border border-gray-500 border-dashed rounded-2xl space-y-4">
      <h2 className="font-semibold font-oswald text-2xl">NOTHING HERE YET</h2>
      <p className="font-inter text-[#A1A1AA] ">
        Browse the library and add a lift to get today moving.
      </p>
      <Link href="./">
        <button className="bg-[#CCFF00] px-4 py-2 rounded-2xl text-black font-inter font-semibold cursor-pointer">
          Go to workout
        </button>
      </Link>
    </div>
  );
}

export default EmptyCard;
