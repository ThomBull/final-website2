// Ensure the Enter key triggers the search
document.getElementById('search-bar').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { // Check if the pressed key is 'Enter'
        event.preventDefault(); // Prevent default form submission or behavior
        searchPages(); // Call the function that executes the search
    }
});

// Example of the performSearch function (if not defined already)
function performSearch() {
    const searchQuery = document.getElementById('search-bar').value.trim();
    if (searchQuery) {
        searchPages(searchQuery); // Ensure this matches your search implementation
    } else {
        alert('Please enter a search term.');
    }
}



function searchPages() {
  console.log("Search function triggered!");
  const query = document.getElementById("search-bar").value.toLowerCase();
  console.log("Search query:", query);

  const pages = ["web1.html", "web2.html", "web3.html", "web4.html", "web5.html", "web6.html", "web7.html"];
  let results = [];

  let searchPromises = pages.map((page) =>
    fetch(page)
      .then((response) => {
        console.log(`Fetched ${page}:`, response.ok);
        return response.text();
      })
      .then((html) => {
        if (html.toLowerCase().includes(query)) {
          console.log(`Found match in ${page}`);
          results.push(page);
        }
      })
      .catch((error) => console.error(`Error fetching ${page}:`, error))
  );

  Promise.all(searchPromises).then(() => {
    console.log("Search results:", results);

    // Check for results
    if (results.length > 1) {
      // Create popup container
      let popup = document.createElement("div");
      popup.classList.add("search-popup");

      // Add content to the popup
      popup.innerHTML = `
        <div class="popup-content">
          <h3>Search Results</h3>
          ${results
            .map((page) => `<button onclick="location.href='${page}'">${page}</button>`)
            .join("")}
          <button class="close-popup">Close</button>
        </div>
      `;

      document.body.appendChild(popup);

      // Close button event listener
      document.querySelector(".close-popup").addEventListener("click", () => {
        popup.remove(); // Completely remove the popup from the DOM
      });
    } else if (results.length === 1) {
      location.href = results[0];
    } else {
      alert("No results found!");
    }
  });
}
    


