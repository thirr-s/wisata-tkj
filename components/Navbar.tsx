export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">TKJ</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Sejarah</a>
          </li>
          <li>
            <a>Wisata</a>
          </li>
          <li>
            <a>Jam Operasional</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
