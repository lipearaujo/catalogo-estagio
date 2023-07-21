import React from "react";

import { BsPlusCircleFill } from "react-icons/bs";

type Props = {
  //onclick?: () => {}
};

const AddButton = (props: Props) => {
  return (
    <button className="text-[52px] px-5 py-2">
      <BsPlusCircleFill />
    </button>
  );
};

export default AddButton;
