import Avatar from "boring-avatars";

export default function Post({ name, timestamp, text }) {
  return (
    <div className="post">
      <div className="post-avatar">
        <Avatar size={30} name={name} variant="beam" />
      </div>
      <div className="post-content">
        <p className="post-info">
          <span className="post-owner">{name}</span>
          <small className="post-timestamp">{timestamp}</small>
        </p>
        <p className="post-text">{text}</p>
      </div>
    </div>
  );
}
