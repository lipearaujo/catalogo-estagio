import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, text, src, href } = (await req.json()) as {
      name: string;
      text: string;
      src: string;
      href: string;
    };

    const card = await prisma.card.create({
      data: {
        name,
        text,
        src,
        href,
      },
    });

    return NextResponse.json({
      card: {
        name: card.name,
        text: card.text,
        src: card.src,
        href: card.href,
      },
    });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 }
    );
  }
}
