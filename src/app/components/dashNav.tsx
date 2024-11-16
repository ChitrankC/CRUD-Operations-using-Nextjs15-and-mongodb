import Link from "next/link";


export default function dashNav() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className="text-white font-bold" href={"/dashboard"}>
        GTCoding.
      </Link>
      <Link className="bg-black p-2" href={"/dashboard/addTopic"}>
        Add Topic
      </Link>
    </nav>
  );
}