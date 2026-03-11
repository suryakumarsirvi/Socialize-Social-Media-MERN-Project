import { Route, Routes } from "react-router";
import Login from "../src/pages/Auth/Login";
import Feed from "../src/pages/Feed";
import Messages from "../src/pages/Messages";
import ChatBox from "../src/pages/ChatBox";
import Connections from "../src/pages/Connections";
import Discover from "../src/pages/Discover";
import Profile from "../src/pages/Profile";
import CreatePost from "../src/pages/CreatePost";
import { useUser } from "@clerk/react";
import Layout from "./layout/Layout";

const App = () => {
  const {user} = useUser();

  return (
    <>
      <Routes>
        <Route path="/" element={!user ? <Login /> : <Layout/>}>
          <Route index element={<Feed />} />
          <Route path="messages" element={<Messages />} />
          <Route path="messages/:userId" element={<ChatBox />} />
          <Route path="connections" element={<Connections />} />
          <Route path="discover" element={<Discover />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/:profileId" element={<Profile />} />
          <Route path="create-post" element={<CreatePost />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
