import css from "./Profile.module.css";

export default function Profile({
  image,
  name,
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <div>
      <div>
        <img src={image} alt="User avatar" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={css.stats_list}>
        <li>
          <span className={css.span}>Followers</span>
          <span className={css.span}>{followers}</span>
        </li>
        <li>
          <span className={css.span}>Views</span>
          <span className={css.span}>{views}</span>
        </li>
        <li>
          <span className={css.span}>Likes</span>
          <span className={css.span}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
