import {
  handleToggle,
  handleAutoPress,
  handleDeactivation,
} from "./modules/handlers";

(async () => {
  await asyncWait(0);

  handleToggle();
  handleAutoPress();
  handleDeactivation();
})();
