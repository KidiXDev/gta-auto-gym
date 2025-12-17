export function showNotification(text: string): void {
  Text.ClearHelp();
  FxtStore.insert("GYMMOD", text);
  Text.PrintHelp("GYMMOD");
}
