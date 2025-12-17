import {
  GYM_INTERIOR_LS,
  GYM_INTERIOR_SF,
  GYM_INTERIOR_LV,
  BIKE_ANIMATIONS,
  BENCH_PRESS_ANIMATION,
  FREE_WEIGHT_ANIMATION,
} from "./constants";

/**
 * @deprecated Use isDoingGymExercise() instead
 * Returns true if the player is inside the gym interiors
 */
export function isInsideGym(): boolean {
  const currentInterior = Streaming.GetAreaVisible();
  return (
    currentInterior === GYM_INTERIOR_LS ||
    currentInterior === GYM_INTERIOR_SF ||
    currentInterior === GYM_INTERIOR_LV
  );
}

/**
 * Returns true if the player is doing an exercise bike animation
 */
export function isRidingExerciseBike(): boolean {
  const player = new Player(0);
  const playerChar = player.getChar();
  for (const anim of BIKE_ANIMATIONS) {
    if (playerChar.isPlayingAnim(anim)) {
      return true;
    }
  }
  return false;
}

/**
 * Returns true if the player is doing a free weight animation
 */
export function isFreeWeight(): boolean {
  const player = new Player(0);
  const playerChar = player.getChar();
  for (const anim of FREE_WEIGHT_ANIMATION) {
    if (playerChar.isPlayingAnim(anim)) {
      return true;
    }
  }
  return false;
}

/**
 * Returns true if the player is doing a bench press animation
 */
export function isBenchPress(): boolean {
  const player = new Player(0);
  const playerChar = player.getChar();
  for (const anim of BENCH_PRESS_ANIMATION) {
    if (playerChar.isPlayingAnim(anim)) {
      return true;
    }
  }
  return false;
}

/**
 * Returns true if the player is doing a gym exercise animation
 */
export function isDoingGymExercise(): boolean {
  return isRidingExerciseBike() || isFreeWeight() || isBenchPress();
}
