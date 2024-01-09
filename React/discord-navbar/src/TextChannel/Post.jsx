import Avatar from "boring-avatars";

export default function Post({ name, timestamp, text }) {
  return (
    <div className="post">
      <div className="avatar-wrapper">
        <Avatar size={30} name={name} variant="beam" />
      </div>
      <div className="post-content">
        <p className="post-owner">
          {name}
          <small className="timestamp">{timestamp}</small>
        </p>
        <p className="post-text">{text}</p>
      </div>
    </div>
  );
}
