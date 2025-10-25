import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { Button } from "../ui/button";

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <FaHome className="w-6 h-6"></FaHome>
      </Link>
    </Button>
  );
}

export default Logo;
