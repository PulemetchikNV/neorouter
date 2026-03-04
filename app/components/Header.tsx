import { Link } from "react-router";
import { Logo } from "./Logo";
import { Spacer } from "./Spacer";
import {Input} from "./retroui/Input";
import { Button } from "./retroui/Button";

const NAV_ITEMS = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  }
];

export const Header = () => {
  return <header className="flex items-center border-b-2 py-4 px-8 gap-6">
    <Logo />
    <Input placeholder="Search" className="w-auto"/>
    <Spacer />
    <nav>
      <ul className="flex items-center gap-4">
        {NAV_ITEMS.map((item) => (
          <li key={item.to}>
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
    <Spacer />
    <div className="flex items-center gap-2">
      <Button variant="outline">Sign in</Button>
      <Button>Sign up</Button>
    </div>
  </header>;
};