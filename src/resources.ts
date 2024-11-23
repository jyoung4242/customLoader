// resources.ts
import { ImageSource } from "excalibur";
import playerlegs from "./Assets/playerlegs.png"; // replace this
import playerUpper from "./Assets/playerupper.png";
import playerupperweapon from "./Assets/playerupperweapon.png";
import spaceship from "./Assets/spaceship.png";

import { CustomLoader } from "./customLoader";

export const Resources = {
  legs: new ImageSource(playerlegs),
  upper: new ImageSource(playerUpper),
  upperweapon: new ImageSource(playerupperweapon),
  spaceship: new ImageSource(spaceship),
};

export const loader = new CustomLoader();

for (let res of Object.values(Resources)) {
  loader.addResource(res);
}
