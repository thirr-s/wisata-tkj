import Theme from "./Theme";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar ">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">TKJ</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal ">
          <li>
            <Link href="#sejarah">Sejarah</Link>
          </li>
          <li>
            <Link href="#card">Wisata</Link>
          </li>
          <li>
            <Link href="#jam-operasional">Jam Operasional</Link>
          </li>
          <li>
            <Theme />
          </li>
        </ul>
      </div>
    </div>
  );
}
