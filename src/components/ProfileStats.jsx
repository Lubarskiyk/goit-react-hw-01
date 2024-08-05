import css from './ProfileStats.module.css';
export function ProfileStats(props) {
  const stats2 = Object.entries(props.stats);
  return (
    <ul className={css.stats_list}>
      {stats2.map(([name, value], index) => {
        return (
          <li key={index}>
            <span className={css.span}>{name}</span>
            <span className={css.span}>{value}</span>
          </li>
        );
      })}
    </ul>
  );
}
