import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, text, src, href, alt, category } = (await req.json()) as {
      name: string;
      text: string;
      src: string;
      href: string;
      alt: string;
      category: string;
    };

    const card = await prisma.card.create({
      data: {
        name,
        text,
        src,
        href,
        alt, 
        category,
      },
    });

    return NextResponse.json({
      card: {
        name: card.name,
        text: card.text,
        src: card.src,
        href: card.href,
        alt: card.alt,
        category: card.category,
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
