import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex flex-row gap-3 justify-evenly items-center">
      <Image src="/post-it.png" alt="Gummy Notes logo" width={30} height={30} />
      <span className="text-white font-extrabold tracking-widest text-2xl text-center">
        Gummy Notes
      </span>
    </div>
  );
}
