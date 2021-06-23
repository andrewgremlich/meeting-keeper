export const meeting = (): void => {
  const meetingKeeperRoot: HTMLElement | null = document.getElementById(
    "meeting-keeper-root"
  );

  if (meetingKeeperRoot) {
    meetingKeeperRoot.innerHTML = `<h1>Hello world</h1>`;
  }
};
