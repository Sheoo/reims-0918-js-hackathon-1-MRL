const K_CIRCLE_SIZE = 30;

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: "absolute",
  width: K_CIRCLE_SIZE,
  left: -K_CIRCLE_SIZE / 2,
  top: -K_CIRCLE_SIZE
};

export { greatPlaceStyle };
