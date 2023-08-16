import Main from "@/components/Main";
import MainCard from "@/components/MainCard";
import Sidebar from "@/components/Sidebar";
import React from "react";

import Link from "next/link";
import { prisma } from "@/lib/prisma";

type Props = {};

const Ajuda = async (props: Props) => {
  const allCards = await prisma.mainCard.findMany({
    where: {
      category: "ajuda",
    },
  });

  return (
    <div className="flex max-lg:flex-col max-lg:h-screen">
      <Sidebar />
      <Main title="Ajuda">
        <div className="flex flex-col gap-5">
          <MainCard title="Canais de Ajuda" id="">
            <p className="text-[14px] mx-auto w-11/12">
              Para mais informações sobre os sistemas e outros serviços
              prestados e mantidos pelo SETISD, entre em contato pelo ramal
              3009. Solicitação de atendimento técnico em informática deverá ser
              encaminhada através de um novo chamado, utilizando o{" "}
              <strong>
                <Link href="http://helpdesk.hugd.ebserh.net/index.php?redirect=%2Fplugins%2Fformcreator%2Ffront%2Fformdisplay.php%3Fid%3D1">
                  Help Desk
                </Link>
              </strong>{" "}
              do HU-UFGD.
            </p>
          </MainCard>

          <MainCard title="Sobre" id="">
            <ul className="mx-auto w-10/12 list-disc">
              <li className="text-[14px] py-1">
                <strong>Aplicação: </strong>Catálogo de Sistemas do HU-UFGD
              </li>
              <li className="text-[14px] py-1">
                <strong>Versão: </strong>3.2
              </li>
              <li className="text-[14px] py-1">
                <strong>Ambiente: </strong>Produção
              </li>
              <li className="text-[14px] py-1">
                <strong>Unidade responsável: </strong>Unidade de Sistemas de
                Informação e Inteligência de Dados (USID)
              </li>
            </ul>

            <p className="text-[14px] mt-3 mx-auto w-11/12">
              © 2023 – Setor de Tecnologia da Informação e Saúde Digital –
              SETISD/HU-UFGD/Ebserh
            </p>
          </MainCard>

          {allCards.map((card) => (
            <MainCard
              id={card.id}
              title={card.title}
              subtitle={card.subtitle}
              text={card.text}
            >
              {""}
            </MainCard>
          ))}
        </div>
      </Main>
    </div>
  );
};

export default Ajuda;
