export interface GymAutoPress {
  active: boolean;
  interval: int;
}

export const gymAutoPress: GymAutoPress = {
  active: false,
  interval: 50 as int,
};

export let wasF3Pressed = false;

export function setWasF3Pressed(value: boolean): void {
  wasF3Pressed = value;
}
