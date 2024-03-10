document.addEventListener('DOMContentLoaded', function () {
    // Select elements
    const progressBar = document.getElementById('progress-bar');
    const titleElement = document.getElementById('title');
    const contentElement = document.getElementById('content');

    // Function to update the progress bar
    function updateProgressBar() {
        let value = progressBar.value;
        value += 1;
        progressBar.value = value;

        if (value === 100) {
            fetchData(); // Fetch new data when progress bar reaches 100%
        } else {
            setTimeout(updateProgressBar, 20);
        }
    }

    // Function to fetch data from an external source
    function fetchData() {
        // Simulate fetching data from an API
        const postId = Math.floor(Math.random() * 100) + 1; // Fetch random post
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then(data => {
                // Update the card content
                titleElement.innerText = data.title;
                contentElement.innerText = data.body;

                // Reset progress bar
                progressBar.value = 0;

                // Start updating progress bar again
                setTimeout(updateProgressBar, 20);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    // Initial call to start the process
    updateProgressBar();
});
