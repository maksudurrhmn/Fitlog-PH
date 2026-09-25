import Image from 'next/image';

function Banner() {
  return (
    <section className="bg-[#0C0D10] py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-8 md:p-16 bg-[#15171D] text-white rounded-2xl">
          <div className="max-w-xl space-y-4">
            <span className="font-inter text-xs md:text-sm font-semibold tracking-wider text-[#C2F800] uppercase">
              WORKOUT LIBRARY
            </span>

            <h1 className="font-oswald text-3xl md:text-5xl font-bold uppercase leading-tight tracking-tight mr-10">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>

            <p className="text-[#9CA3AF] text-sm md:text-base leading-relaxed">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan,
              and watch the week's work add up.
            </p>

            <div className="pt-2">
              <button
                type="button"
                className="font-inter bg-[#C2F800] hover:bg-[#c2f800bd] text-black font-bold px-6 py-3 rounded-lg text-sm tracking-wide transition-colors duration-300 cursor-pointer"
              >
                BROWSE WORKOUTS
              </button>
            </div>
          </div>

          <div className="shrink-0">
            <Image
              src="/assets/banner.png"
              alt="Banner"
              width={300}
              height={300}
              className="w-auto h-auto max-w-62.5 md:max-w-75 object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
