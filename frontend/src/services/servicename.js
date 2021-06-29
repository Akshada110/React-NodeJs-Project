const url = "http://localhost:3001/api/servicename";

function getAllUsers() {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        response
          .json()
          .then((result) => {
            console.log("getAllUsers result", result);
            console.log(result.channel);
            resolve(result);
          })
          .catch((err) => {
            reject("Parsing Error");
          });
      })
      .catch((err) => {
        reject("Communication Error");
      });
  });
}

export default getAllUsers;
