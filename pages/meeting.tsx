import { FC } from "react";

import { HeadPiece } from "components/Head";
import { Nav } from "components/Nav";

const ClassDetails: FC = () => {
  return (
    <>
      <HeadPiece
        titleName="Meeting Keeper | Meeting Details"
        description="Details of meetings that you create."
      />

      <main>
        <Nav />
        <h1>Meeting Details</h1>

        <h2>Register Meeting</h2>

        <h2>Meeting Attendance</h2>

        <p>Accept attendance.</p>

        <p>Open attendance and close attendance.</p>
      </main>
    </>
  );
};

export default ClassDetails;
