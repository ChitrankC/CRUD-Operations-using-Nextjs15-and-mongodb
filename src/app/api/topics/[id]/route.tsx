import connect from "@/utils/db";
import Topic from "@/models/Topics";
import { NextResponse } from "next/server";




export async function PUT(request:any , { params }:any) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connect();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request:any, { params }:any) {
  const { id } = params;
  await connect();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}