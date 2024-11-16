import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import TopicLists from "../components/TopicLists";

const Dashboard = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/");
  }
  return (
    <>
      <TopicLists />

    </>
  );
};

export default Dashboard;