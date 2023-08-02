import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  const { name, src, text, alt, nameColor, href, routeHref } = req.query;

  try {
    const newCard = await prisma.Card.create({
      data: {
        name,
        src,
        text,
        alt,
        nameColor,
        href,
        routeHref,
      },
    });

    res.json({ card: newCard, error: null });
  } catch (error) {
    res.json({ error: error.message, card: null });
  }
}
