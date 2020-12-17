// Code your solution here
function findMatching(drivers, string) {
  return drivers.filter((e) => e.toUpperCase() === string.toUpperCase());
}

function fuzzyMatch(driver, string) {
  return driver.filter(
    (e) => e.toUpperCase().indexOf(string.toUpperCase()) === 0
  );
}

function matchName(driver, name) {
  return driver.filter((e) => e.name === name);
}
