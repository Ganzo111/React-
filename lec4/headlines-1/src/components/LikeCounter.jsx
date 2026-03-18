import { useState } from "react";

export default function LikeCounter() {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <p>Likes: {likes}</p>

      <button onClick={() => setLikes(likes + 1)}>👍 Like</button>
      <button onClick={() => setLikes(likes - 1)}>👎 Dislike</button>
    </div>
  );
}