const url = "http://localhost:3001/api/charts/";

function getAllUsers(flag) {
  console.log("channel.js inside getAllUsers");
  return new Promise((resolve, reject) => {
    fetch(url + flag)
      .then((response) => {
        console.log("channel.js inside response");
        response
          .json()
          .then((result) => {
            console.log("getAllUsers result", result);
            resolve(result);
          })
          .catch((err) => {
            console.log("catch1 in getAllusers");
            reject("Parsing Error");
          });
      })
      .catch((err) => {
        console.log("catch2 in getAllusers");
        reject("Communication Error");
      });
  });
}

export default getAllUsers;
