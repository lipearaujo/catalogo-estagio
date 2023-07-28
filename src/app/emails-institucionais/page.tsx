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
      href: 'https://login.microsoftonline.com/common/oauth2/authorize?client_id=00000002-0000-0ff1-ce00-000000000000&redirect_uri=https%3a%2f%2foutlook.office365.com%2fowa%2f&resource=00000002-0000-0ff1-ce00-000000000000&response_mode=form_post&response_type=code+id_token&scope=openid&msafed=1&msaredir=1&client-request-id=2e29fc1a-6693-ac26-66e6-50b518fdefba&protectedtoken=true&claims=%7b%22id_token%22%3a%7b%22xms_cc%22%3a%7b%22values%22%3a%5b%22CP1%22%5d%7d%7d%7d&nonce=638258239313068849.fdcd5e3f-dd14-4d2a-b514-d75591e3d2cb&state=DYsxEsAgCMCwXp9jVRDF56jo2rHfL0NyWeIAwBuX4ZIJWiVBFqROmVIVKf05upQ3naCaSyiKI0y20sbc8ybFNZ29d3y_EX8&sso_reload=true'
    },
    {
      id: "E-mail UFGD",
      src: images[1],
      text: "E-mail institucional da UFGD, utilizando a plataforma G Suite.",
      alt: "E-mail UFGD",
      idColor: "text-[#0277bd]",
      href: 'https://accounts.google.com/v3/signin/identifier?dsh=S-1023301569%3A1690227272820628&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&hd=ufgd.edu.br&ifkv=AeDOFXjoz3e0zGUwU6DtyPkk2fcNjrORpd8P86cCAwDDsxJL0F4njmiEWKlJXaxHBZGnzOrSnTrdaw&ltmpl=default&osid=1&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin'
    },
    {
      id: "Microsoft 365",
      src: images[2],
      text: "O Microsoft 365 é uma família de produtos de software de produtividade e serviços baseados em nuvem de propriedade da Microsoft. Focado no trabalho colaborativo simultâneo a equipes de diversos tamanhos, e na segurança, lançado em junho de 2011 e desenvolvido pela empresa Microsoft.",
      alt: "Microsoft 365",
      idColor: "text-[#455A64]",
      href: 'https://www.office.com/'
    },
    {
      id: "Microsoft Teams",
      src: images[3],
      text: "Microsoft Teams é uma plataforma unificada de comunicação e colaboração que combina bate-papo, videoconferências, armazenamento de arquivos e integração de aplicativos no local de trabalho. ",
      alt: "Microsoft Teams",
      idColor: "text-[#455A64]",
      href: 'https://teams.microsoft.com/'
    },
  ];

  return (
    <div className="flex max-lg:flex-col">
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
              href={images.href}
            />
          ))}
        </div>
      </Main>
    </div>
  );
};

export default EmailsInstitucionais;
