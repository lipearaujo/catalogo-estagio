import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { title, subtitle, text, category } = (await req.json()) as {
      title: string;
      subtitle: string;
      text: string;
      category: string;
    };

    const mainCard = await prisma.mainCard.create({
      data: {
        title,
        subtitle,
        text,
        category,
      },
    });

    return NextResponse.json({
      mainCard: {
        title: mainCard.title,
        subtitle: mainCard.subtitle,
        text: mainCard.text,
        category: mainCard.category,
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
