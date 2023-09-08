import * as React from "react";
import { Link } from "gatsby";
import Image from "../components/image";

const Header = () => {
  return (
    <header className="global-header">
      <div>
        <Image filename="icon.png" alt="アイコン画像" />
      </div>

      <div>
        <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile/">Profile</Link></li>
            <li><Link to="/skill/">Skill</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header
