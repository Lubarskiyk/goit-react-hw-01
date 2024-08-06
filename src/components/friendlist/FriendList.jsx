import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.friends_list}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li className={css.friends_list_item} key={id}>
            <img src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p>{isOnline ? "online" : "offLine"}</p>
          </li>
        );
      })}
    </ul>
  );
}
