import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex flex-row justify-evenly items-center">
      <Image src="/post-it.png" alt="Gummy Notes logo" width={50} height={50} />
      <span className="text-white font-extrabold tracking-widest text-xl text-center">
        Gummy Notes
      </span>
    </div>
  );
}
