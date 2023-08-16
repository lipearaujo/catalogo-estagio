import { NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export const DELETE = async (req: Request, res: NextApiResponse) => {
  
  try {
    const { id } = (await req.json()) as {
      id: string;
    };

    const mainCard = await prisma.mainCard.delete({
      where: { id: id },
    });

    return NextResponse.json({
        mainCard: {
        id: mainCard.id,
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
