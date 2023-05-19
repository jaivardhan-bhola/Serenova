let loggedIn = false;
let name = '';

export let setLoggedIn = (value) => {
    loggedIn = value;
  };
export let setName = (value) => {
    name = value;
  }
export { loggedIn, name}