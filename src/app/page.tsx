import Main from "@/components/Main";
import MainCard from "@/components/MainCard";
import Sidebar from "@/components/Sidebar";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const allCards = await prisma.mainCard.findMany({
    where: {
      category: "home",
    },
  });

  return (
    <div className="flex max-lg:flex-col">
      <Sidebar />
      <Main title="Catálogo de Sistemas">
        <div className="flex flex-col gap-5">
          <MainCard
            id=""
            title="Olá, seja bem-vindo!"
            text="Esse é o catálogo dos sistemas utilizados no HU-UFGD. Nele, todos os sistemas estão dispostos através da barra lateral esquerda conforme sua finalidade e área de destinação."
          >
            {""}
          </MainCard>

          <MainCard
            id=""
            title="Detalhes"
            subtitle="Central de documentos e sistemas"
            text="Portal de acesso para os principais sistemas, internos e externos, e alguns documentos disponibilizados aos colaboradores do Hospital Universitário da UFGD. Alguns deles estão na lista abaixo:"
          >
            <ul className="mx-auto w-10/12 list-disc">
              <li className="text-[14px] py-1">
                <strong>
                  <Link href="/assistenciais">AGHU</Link>
                </strong>
              </li>
              <li className="text-[14px] py-1">
                <strong>
                  <Link href="/administrativos">SEI!</Link>
                </strong>
              </li>
              <li className="text-[14px] py-1">
                <strong>
                  <Link href="/formularios">Formulários</Link>
                </strong>
              </li>
              <li className="text-[14px] py-1">
                <strong>
                  <Link href="/administrativos">Help Desk</Link>
                </strong>
              </li>
              <li className="text-[14px] py-1">
                <strong>
                  <Link href="/portais">Site institucional</Link>
                </strong>
              </li>
              <li className="text-[14px] py-1">
                Lista de{" "}
                <strong>
                  <Link href="/portais">Telefones</Link>
                </strong>
              </li>
              <li className="text-[14px] py-1">
                Documentos na{" "}
                <strong>
                  <Link href="/portais">Intranet</Link>
                </strong>{" "}
                do HU-UFGD/Ebserh;
              </li>
              <li className="text-[14px] py-1">
                <strong>
                  <Link href="/administrativos">Serviços de TI </Link>
                </strong>
                para desbloqueio de conta e alteração de senha de usuário.
              </li>
            </ul>

            <h5 className="text-[20px] mt-3 mx-auto w-11/12">Busca Rápida</h5>
            <p className="text-[14px] mt-3 mx-auto w-11/12">
              Encontre o sistema desejado rapidamente, digitando o nome ou termo
              referente a ele, utilizando o campo de busca (ícone de lupa) no
              canto superior direito dessa página.
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
}
