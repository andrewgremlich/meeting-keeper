import { FC } from "react";
import Link from "next/link";
import { FiBluetooth } from "react-icons/fi";

export const Nav: FC = () => {
  return (
    <>
      <Link href="/">
        <a>Attend Meeting</a>
      </Link>
      <Link href="/meeting">
        <a>Meeting</a>
      </Link>
      <FiBluetooth size="50px" />
    </>
  );
};
