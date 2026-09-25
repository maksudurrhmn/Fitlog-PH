import Image from 'next/image';

function Footer() {
  return (
    <footer className="bg-[#0C0D10] border-t border-[#1C1F26] ">
      <div className="mx-4 lg:container lg:mx-auto flex flex-col md:flex-row justify-between items-center text-white my-6">
        <div className="flex gap-1 items-center mb-2 md:mb-0">
          <Image src="/assets/Footer.png" alt="Logo" width={24} height={24} />
          <h4 className="font-oswald uppercase text-white font-semibold">Fitlog</h4>
        </div>
        <p className="text-[#6B7280] text-sm font-inter">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
