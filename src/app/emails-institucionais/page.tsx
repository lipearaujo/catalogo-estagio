import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import Card from "@/components/Card";
import React from "react";

import Image from "next/image";

import EmailEbserh from "../../../public/images/emails/outlook-2019.png";
import EmailUFGD from "../../../public/images/emails/gmail.png";
import Microsoft365 from "../../../public/images/emails/microsoft-365.png";
import MicrosoftTeams from "../../../public/images/emails/microsoft-teams.png";
import Cards from "@/components/Cards";

type Props = {};

const EmailsInstitucionais = (props: Props) => {
  const images = [EmailEbserh, EmailUFGD, Microsoft365, MicrosoftTeams];

  const getInfosFromImages = [
    {
      id: "E-mail Ebserh",
      src: images[0],
      text: "E-mail institucional da Ebserh, utilizando a plataforma Microsoft Outlook Office 365.",
      alt: "E-mail Ebserh",
      idColor: "text-[#0277bd]",
    },
    {
      id: "E-mail UFGD",
      src: images[1],
      text: "E-mail institucional da UFGD, utilizando a plataforma G Suite.",
      alt: "E-mail UFGD",
      idColor: "text-[#0277bd]",
    },
    {
      id: "Microsoft 365",
      src: images[2],
      text: "O Microsoft 365 é uma família de produtos de software de produtividade e serviços baseados em nuvem de propriedade da Microsoft. Focado no trabalho colaborativo simultâneo a equipes de diversos tamanhos, e na segurança, lançado em junho de 2011 e desenvolvido pela empresa Microsoft.",
      alt: "Microsoft 365",
      idColor: "text-[#455A64]",
    },
    {
      id: "Microsoft Teams",
      src: images[3],
      text: "Microsoft Teams é uma plataforma unificada de comunicação e colaboração que combina bate-papo, videoconferências, armazenamento de arquivos e integração de aplicativos no local de trabalho. ",
      alt: "Microsoft Teams",
      idColor: "text-[#455A64]",
    },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <Main title="E-mails Institucionais">
        <div className="flex flex-wrap justify-center gap-5 px-8">
          {getInfosFromImages.map((images) => (
            <Cards
              id={images.id}
              src={images.src}
              text={images.text}
              alt={images.alt}
              idColor={images.idColor}
            />
          ))}
        </div>
      </Main>
    </div>
  );
};

export default EmailsInstitucionais;
