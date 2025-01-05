

import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full h-screen flex items-center justify-center gap-[50px]">
      <Link href={'./Serverside'}><div className="w-[275px] h-[300px] rounded-[40px] bg-[#55a5e9] bg-[url('/7.png')] bg-no-repeat bg-contain bg-center hover:scale-105 duration-500"></div></Link>
      <Link href={'./Clientside'}><div className="w-[275px] h-[300px] rounded-[40px] bg-[#366994] bg-[url('/8.png')] bg-no-repeat bg-contain bg-center hover:scale-105 duration-500"></div></Link>
    </section>
  );
}
