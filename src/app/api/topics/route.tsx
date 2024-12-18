import connect from "@/utils/db";
import Topic from "@/models/Topics";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const { title, description } = await request.json();
  await connect();
  await Topic.create({ title, description });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET() {
  await connect();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request: any) {
  const id = request.nextUrl.searchParams.get("id");
  await connect();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}