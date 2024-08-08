import clsx from "clsx";
import {
  item,
  nameTitle,
  offline,
  online,
  list,
} from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={list}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li className={item} key={id}>
            <img src={avatar} alt="Avatar" width="48" />
            <p className={nameTitle}>{name}</p>
            <p className={clsx(isOnline ? online : offline)}>
              {isOnline ? "online" : "offLine"}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
