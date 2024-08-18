String.prototype.customStartsWith = function (searchString) {
  console.log(this, searchString);
  for (let i = 0; i < this.length; i++) {
    if (
      this.substring(i, searchString.length).toLowerCase() ===
      searchString.toLowerCase()
    ) {
      return true;
    }
  }
  return false;
};

let mainString = "Cricket is played with bat and ball";
let searchString = "Cric";
let retVal = mainString.customStartsWith(searchString);

console.log(retVal);
