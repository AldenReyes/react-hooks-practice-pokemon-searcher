import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, hp, sprites }) {
  const [sprite, setSprite] = useState(sprites.front);

  const handleImageClick = () => {
    setSprite((currentSprite) =>
      currentSprite === sprites.front ? sprites.back : sprites.front
    );
  };

  return (
    <Card>
      <div>
        <div className="image">
          <img src={sprite} alt="A Pokemon!" onClick={handleImageClick} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
