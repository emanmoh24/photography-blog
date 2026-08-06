import React from "react";
import Alert from "../Alert/Alert";
import {Link} from "../../../node_modules/react-router"

export default function List({ data }) {
  return (
    <>
      <div className="w-3/5 mx-auto pt-10 min-[375px]:w-[90%]">
        <dl>
          <dt className="flex items-center gap-4">
            <span className="font-bold text-sm bg-linear-to-r from-orange-500 to-amber-500 rounded-lg px-3 py-1 text-white">
              {data.section}
            </span>
            <span className="text-white font-bold text-2xl">
              {data.title}
            </span>
          </dt>

          {data.content ? (
            <dd className="ps-11 pt-2 text-neutral-400">{data.content}</dd>
          ) : null}

          {data.details
            ? data.details.map((detail, index) =>
                typeof detail === "object" ? (
                  <dd
                    key={index}
                    className="flex items-center gap-5 ps-11 pt-2 text-neutral-400"
                  >
                    {data.icon}
                    <span className="text-neutral-400">
                      <span className="text-white font-bold">
                        {detail.category}:{" "}
                      </span>
                      {detail.description}
                    </span>
                  </dd>
                ) : (
                  <dd
                    key={index}
                    className="flex items-center gap-5 ps-11 pt-2 text-neutral-400"
                  >
                    {data.icon}
                    <span className="text-neutral-400">{detail}</span>
                  </dd>
                ),
              )
            : null}

          {data.email ? (
            <dd className="ps-11 pt-2 text-orange-500 flex items-center">
              <Link to={`mailto:${data.email}`} className="flex items-center justify-center hover:text-orange-400 duration-300 gap-2">
                <span className="flex items-center justify-center"><i className="fa-regular fa-envelope"></i></span>
                {data.email}
              </Link>
            </dd>
          ) : null}
        </dl>
      </div>
    </>
  );
}
