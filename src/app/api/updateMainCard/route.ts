import { NextApiResponse, NextApiRequest } from "next";
import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export const PUT = async (req: Request, res: NextApiResponse) => {
  try {
    const { id, title, subtitle, text, category } = (await req.json()) as {
      id: string;
      title: string;
      subtitle: string;
      text: string;
      category: string;
    };

    const cardToUpdate = await prisma.mainCard.update({
      where: { id: id },
      data: {
        title: title,
        subtitle: subtitle,
        text: text,
        category: category,
      },
    });

    return NextResponse.json({
      cardToUpdate: {
        title: cardToUpdate.title,
        subtitle: cardToUpdate.subtitle,
        text: cardToUpdate.text,
        category: cardToUpdate.category,
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
};
