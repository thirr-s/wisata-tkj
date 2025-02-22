"use client";
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
      <div className="navbar ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">TKJ</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal ">
            <li>
              <a onClick={() => scrolltoHash("sejarah")}>Sejarah</a>
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
