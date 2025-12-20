import {
  GYM_INTERIOR_LS,
  GYM_INTERIOR_SF,
  GYM_INTERIOR_LV,
  BIKE_ANIMATIONS,
  TREADMILL_ANIMATION,
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

function isPlayingAnyAnim(animations: string[]): boolean {
  const player = new Player(0);
  const playerChar = player.getChar();
  return animations.some((anim) => playerChar.isPlayingAnim(anim));
}

export function isRidingExerciseBike(): boolean {
  return isPlayingAnyAnim(BIKE_ANIMATIONS);
}

export function isFreeWeight(): boolean {
  return isPlayingAnyAnim(FREE_WEIGHT_ANIMATION);
}

export function isBenchPress(): boolean {
  return isPlayingAnyAnim(BENCH_PRESS_ANIMATION);
}

export function isTreadmill(): boolean {
  return isPlayingAnyAnim(TREADMILL_ANIMATION);
}

/**
 * Returns true if the player is doing a gym exercise animation
 */
export function isDoingGymExercise(): boolean {
  return (
    isRidingExerciseBike() || isFreeWeight() || isBenchPress() || isTreadmill()
  );
}
