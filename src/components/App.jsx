import userData from "../data/userData.json";
import friends from "../data/friends.json";
import "./App.css";
import Profile from "./profile/Profile.jsx";
import FriendList from "./friendlist/FriendList.jsx";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
}

export default App;
