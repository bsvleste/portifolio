import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

export async function POST() {
  //  revalidateTag("prismic");
  const pathsToRevalidate = ['/','/blog', '/projetos']; // Add paths to revalidate
  await Promise.all(pathsToRevalidate.map((path) => revalidatePath(path)));
  return NextResponse.json({ revalidated: true });
}
