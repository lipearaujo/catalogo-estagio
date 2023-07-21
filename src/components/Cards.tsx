import React from "react";

import Card from "./Card";

import Image, { StaticImageData } from "next/image";

type Props = {
  id: string;
  src: string | StaticImageData;
  text: string;
  alt: string;
  idColor: string;
  href: string
};

const Cards = ({ id, src, text, alt, idColor, href }: Props) => {
  return (
    <Card id={id} text={text} idColor={idColor} href={href}>
      <Image src={src} width={230} height={120} alt={alt} />
    </Card>
  );
};

export default Cards;
