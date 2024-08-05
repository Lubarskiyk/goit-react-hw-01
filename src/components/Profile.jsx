import { ProfileStats } from './ProfileStats.jsx';

function Profile(pros) {
  return (
    <div>
      <div>
        <img src={pros.image} alt="User avatar" />
        <p>{pros.name}</p>
        <p>@{pros.tag}</p>
        <p>{pros.location}</p>
      </div>

      <ProfileStats stats={pros.stats} />
      {/*<li>*/}
      {/*  <span>Followers</span>*/}
      {/*  <span>{pros.stats.followers}</span>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*  <span>Views</span>*/}
      {/*  <span>{pros.stats.views}</span>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*  <span>Likes</span>*/}
      {/*  <span>{pros.stats.likes}</span>*/}
      {/*</li>*/}
    </div>
  );
}

export default Profile;
