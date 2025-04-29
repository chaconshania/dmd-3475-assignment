document.getElementById("searchButton").addEventListener("click", function () {
  let query = document.getElementById("searchInput").value.trim();

  if (query.length < 3) {
    alert("Not valid number of characters");
    return;
  }

  document.getElementById("userList").innerHTML = "";
  document.getElementById("errorMessage").style.display = "none";
  document.getElementById("resultCount").innerText = "";

  //  API
  fetch(`https://github.uconn.edu/api/v3/search/users?q=${query}`)
    .then((response) => response.json())
    .then((data) => {
      // Handle no results
      if (data.items.length === 0) {
        document.getElementById("errorMessage").style.display = "block";
        return;
      }

      //  users
      data.items.forEach((user) => {
        let userElement = document.createElement("div");
        userElement.classList.add("col-md-4", "mb-3");

        userElement.innerHTML = `
          <div class="card">
            <img src="${user.avatar_url}" class="card-img-top" alt="${user.login}">
            <div class="card-body">
              <h5 class="card-title">${user.login}</h5>
              <a href="https://github.uconn.edu/${user.login}" class="btn btn-primary" target="_blank">View Profile</a>
            </div>
          </div>
        `;

        document.getElementById("userList").appendChild(userElement);
      });
    })
    .catch((error) => {
      console.error("Error", error);
    });
});
