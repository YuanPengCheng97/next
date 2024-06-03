import Image from "next/image";
import Link from "next/link";
import SetToken from "./_components/set_token";

export default function Home() {
  return (
    <div className="text-center mt-[100px]">
      <div className="w-[100px] inline-block">
        <Link href={"/about"}>about</Link>
      </div>
      <div className="w-[100px] inline-block">
        <Link href={"/history"}>history</Link>
      </div>
      <div className="w-[100px] inline-block">
        <Link href={"/new"}>new</Link>
      </div>
      <SetToken></SetToken>
    </div>
  );
}
