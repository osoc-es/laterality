export function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

export function checkWin(correct, wrong, word) {
  let status = "";

  // Check for win
  if (word == correct.join("")) {
    status = "win";
  }
  // Check for lose
  //else if (wrong.length === 6) status = "lose";

  return status;
}
