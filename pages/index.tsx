import { FC } from "react";

import { HeadPiece } from "components/Head";
import { Nav } from "components/Nav";

const Home: FC = () => {
  return (
    <>
      <HeadPiece
        titleName="Meeting Keeper | Register Attendance"
        description="Attend Meetings and let the meeting keeper know you were there."
      />
      <main>
        <Nav />
        <h1>Attend Meeting</h1>

        <p>Use P2P to get an ID, then the user displays it.</p>

        <p>sharedrop?</p>
      </main>
    </>
  );
};

export default Home;
