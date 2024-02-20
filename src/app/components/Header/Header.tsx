import { Logo } from "@/app/components/Logo/Logo";
import Link from "next/link";
import { SearchCombobox } from "../SearchCombobox/SearchCombobox";

export const Header = () => {
  return (
    <header className="container sm:mx-auto h-24 flex items-center ">
      <nav>
        <Link href="/">
          <Logo />
        </Link>
      </nav>
      <div className="ml-16 flex-1">
        <SearchCombobox />
      </div>
    </header>
  );
};
