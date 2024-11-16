"use client";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./removeBtn";
import { useRouter } from "next/navigation";   


const getTopics = async () => {
  const router = useRouter();
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });
    if (res.ok) {
      router
    }
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function TopicsList() {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((t:any) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/dashboard/EditTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

// export default function TopicLists() {
//     return (
//         <>
//         <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
//             <div>
//                 <h2 className="font-bold text-2xl">Topic Title</h2>
//                 <div>Topic Description</div>

//             </div>
//             <div className="flex gap-2">
//                 <RemoveBtn />
//                 <Link href={'dashboard/EditTopic/123'}>
//                     <HiPencilAlt size = {24} />
//                 </Link>
//             </div>
//         </div>

//         </>
//     )
// }