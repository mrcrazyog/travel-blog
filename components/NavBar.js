import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";

const navBar = () => (
  <nav className="nav-container">
    <div className="nav-item-container">
      <Link href="/">
        <Image src={logo} alt="Travel Blog Logo" width={140} height={140} />
      </Link>
    </div>
    <div className="nav-item-container">
      <p>XXX</p>
    </div>
  </nav>
);

export default navBar;
