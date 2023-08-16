import { NextApiResponse, NextApiRequest } from "next";
import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export const PUT = async (req: Request, res: NextApiResponse) => {
  try {
    const { id, name, text, src, href, alt, category } = (await req.json()) as {
      id: string;
      name: string;
      text: string;
      src: string;
      href: string;
      alt: string;
      category: string;
    };

    const cardToUpdate = await prisma.card.update({
      where: { id: id },
      data: {
        name: name,
        text: text,
        src: src,
        href: href,
        alt: alt,
        category: category,
      },
    });

    return NextResponse.json({
      cardToUpdate: {
        name: cardToUpdate.name,
        text: cardToUpdate.text,
        src: cardToUpdate.src,
        href: cardToUpdate.href,
        alt: cardToUpdate.alt,
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
