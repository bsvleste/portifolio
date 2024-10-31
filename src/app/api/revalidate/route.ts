import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST() {
  revalidateTag("prismic");

  return NextResponse.json({ revalidated: false, now: Date.now() });
}
