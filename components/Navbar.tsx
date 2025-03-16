"use client";
import Link from "next/link";
import Theme from "./Theme";

export default function Navbar() {
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  return (
    <div>
      <div className="navbar h-16 lg:h-20 text-base lg:text-lg">
        <div className="flex-1">
          <Link href={"/"} className="hidden sm:block btn btn-ghost text-xl">
            TKJ
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal">
            <li>
              <Link href="/sejarah">Sejarah</Link>
            </li>
            <li>
              <a onClick={() => scrolltoHash("card")}>Wisata</a>
            </li>
            <li>
              <a onClick={() => scrolltoHash("jam-operasional")}>
                Jam Operasional
              </a>
            </li>
            <li>
              <Theme />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
