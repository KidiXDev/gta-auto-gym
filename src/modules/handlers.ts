import { TOGGLE_KEY, ACTION_KEY } from "./constants";
import { gymAutoPress, wasF3Pressed, setWasF3Pressed } from "./state";
import { isDoingGymExercise } from "./animations";
import { showNotification } from "./utils";

/**
 * Handles the toggle functionality
 */
export async function handleToggle(): Promise<void> {
  while (true) {
    await asyncWait(0);

    const isF3Pressed = Pad.IsKeyPressed(TOGGLE_KEY);

    if (isF3Pressed && !wasF3Pressed) {
      if (isDoingGymExercise()) {
        gymAutoPress.active = !gymAutoPress.active;
        if (gymAutoPress.active) {
          showNotification("AUTO GYM: ~g~ON");
        } else {
          showNotification("AUTO GYM: ~r~OFF");
        }
      } else {
        showNotification("~y~Not doing a gym exercise.");
        gymAutoPress.active = false;
      }
    }

    setWasF3Pressed(isF3Pressed);
  }
}

/**
 * Handles the auto press functionality
 */
export async function handleAutoPress(): Promise<void> {
  while (true) {
    await asyncWait(0);

    if (gymAutoPress.active && isDoingGymExercise()) {
      Pad.HoldKey(ACTION_KEY);
      await asyncWait(gymAutoPress.interval);
      Pad.ReleaseKey(ACTION_KEY);
      await asyncWait(gymAutoPress.interval);
    }
  }
}

/**
 * Handles the deactivation functionality
 */
export async function handleDeactivation(): Promise<void> {
  while (true) {
    await asyncWait(0);

    if (gymAutoPress.active && !isDoingGymExercise()) {
      gymAutoPress.active = false;
    }
  }
}
