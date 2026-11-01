document.addEventListener("DOMContentLoaded", () => {

    const userDataString = sessionStorage.getItem("codingConfUser");
    if (!userDataString) {
        window.location.href = "index.html";
        return; 
    }

    const userData = JSON.parse(userDataString);

    document.getElementById("display-name").textContent = userData.name;
    document.getElementById("display-email").textContent = userData.email;
    document.getElementById("ticket-name").textContent = userData.name;
    document.getElementById("display-avatar").src = userData.avatar;
    
    // Handle GitHub Link
    const githubElement = document.getElementById("ticket-github");
    const githubSpan = githubElement.querySelector("span");
    githubSpan.textContent = userData.github;
    
    const githubUsername = userData.github.replace('@', '');
    githubElement.href = `https://github.com/${githubUsername}`;

    // 4. Generate Ticket ID
    const randomId = Math.floor(10000 + Math.random() * 90000);
    document.getElementById("ticket-id").textContent = `#${randomId}`;
});