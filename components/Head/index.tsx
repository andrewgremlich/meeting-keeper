import Head from "next/head";
import { FC } from "react";

interface HeadProps {
  titleName: string;
  description: string;
}

export const HeadPiece: FC<HeadProps> = ({
  titleName,
  description,
}): JSX.Element => {
  return (
    <Head>
      <title>{titleName}</title>

      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
