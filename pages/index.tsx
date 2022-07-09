import type { NextPage } from "next";
import { ref } from "firebase/database";
import { useList } from "react-firebase-hooks/database";

import { database } from "fbase/connect";

const Home: NextPage = () => {
  const [snapshots, loading, error] = useList(ref(database, "hello"));

  return (
    <div>
      <h1>hello world</h1>
      {snapshots?.map((snapshot) => (
        <div key={snapshot.key}>
          {snapshot.key} {snapshot.val()}
        </div>
      ))}
    </div>
  );
};

export default Home;
