import React from "react";
import {Link} from "../../../node_modules/react-router"

export default function MainBtn({ btnInfo }) {
  return (
    <Link to={btnInfo.to} className={`${btnInfo.rounded} min-[375px]:w-full flex items-center justify-center ${btnInfo.width} ${btnInfo.padding} ${btnInfo.hover} ${btnInfo.text} cursor-pointer text-white font-semibold bg-linear-to-l from-orange-600 to-orange-500 duration-300`}>
      <span>{btnInfo.title}</span>
    </Link>
  );
}
