import Image from 'next/image';
import Link from 'next/link';

function Banner() {
  return (
    <section className="bg-[#0C0D10] px-4 lg:px-0 py-12 md:py-24">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-10 py-16 lg:px-16 lg:py-24 bg-[#15171D]  text-white rounded-2xl">
          <div className=" w-full md:w-1/2 flex flex-col gap-6">
            <span className="font-inter text-sm font-semibold tracking-wider text-[#C2F800] uppercase">
              WORKOUT LIBRARY
            </span>

            <h1 className="font-oswald text-3xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight tracking-tight">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>

            <p className="text-[#9CA3AF] text-sm md:text-base leading-relaxed font-inter ">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan,
              and watch the week's work add up.
            </p>

            <div>
              <button
                type="button"
                className="font-inter bg-[#C2F800] hover:bg-[#c2f800bd] text-black font-bold px-3 lg:px-6 py-3 rounded-2xl lg:rounded-lg text-sm tracking-wide transition-colors duration-300 cursor-pointer"
              >
                <Link href="#Library">BROWSE WORKOUTS</Link>
              </button>
            </div>
          </div>

          <div className="lg:w-1/3">
            <Image
              src="/assets/banner.png"
              alt="Banner"
              width={340}
              height={340}
              className="h-75 lg:h-full w-full  object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
