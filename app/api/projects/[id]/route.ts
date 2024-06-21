import { NextRequest, NextResponse } from "next/server";
import { projectDetails } from "@/utils/data/projectDetails";

type Params = {
  id: string;
};

export async function GET(request: Request, context: { params: Params }) {
  const id = context.params.id;
  const project = projectDetails.find((pro) => id === pro.id.toString());

  return NextResponse.json({ project });
}
