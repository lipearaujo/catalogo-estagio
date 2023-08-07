import React from "react";
import { usePathname } from "next/navigation";

import { IoIosArrowDropupCircle } from "react-icons/io";

type Props = {
  show: boolean;
};

const ArrowButton = ({ show }: Props) => {
  const currentRoute = usePathname();

  const ArrowButtonColor = () => {
    let color = "";

    if (
      currentRoute === "/assistenciais" ||
      currentRoute === "/assistenciais/farmacia" ||
      currentRoute === "/assistenciais/sil" ||
      currentRoute === "/assistenciais/pulseiras" ||
      currentRoute === "/assistenciais/nutricao"
    ) {
      color = "text-[#c62828]";
    }
    if (currentRoute === "/administrativos") {
      color = "text-[#558b2f]";
    }
    if (currentRoute === "/ensino" || currentRoute === "/ensino/pesquisa") {
      color = "text-[#283593]";
    }
    if (currentRoute === "/formularios") {
      color = "text-[#00695c]";
    }
    if (
      currentRoute === "/relatorios" ||
      currentRoute === "/relatorios/paineis"
    ) {
      color = "text-[#37474f]";
    }
    if (currentRoute === "/emails-institucionais") {
      color = "text-[#0277bd]";
    }
    if (currentRoute === "/portais") {
      color = "text-[#4527a0]";
    }
    if (currentRoute === "/treino-homologacao") {
      color = "text-[#f9a825]";
    }
    if (currentRoute === "/restritos") {
      color = "text-[#263238]";
    }
    if (currentRoute === "/manuais") {
      color = "text-[#263238]";
    }
    if (currentRoute === "/ajuda") {
      color = "text-[#263238]";
    }

    return color;
  };

  const scrollingToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={
        show === true
          ? "block animate-showButton"
          : "opacity-0 ease-in duration-300"
      }
      onClick={scrollingToTop}
    >
      <IoIosArrowDropupCircle className={ArrowButtonColor()} size={60} />
    </button>
  );
};

export default ArrowButton;
