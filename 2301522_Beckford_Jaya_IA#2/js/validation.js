document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registration-form");
    const avatarInput = document.getElementById("avatar");
    
    const uploadPlaceholder = document.getElementById("upload-placeholder");
    const uploadPreview = document.getElementById("upload-preview");
    const previewImg = document.getElementById("preview-img");
    const removeImgBtn = document.getElementById("remove-img");
    const changeImgBtn = document.getElementById("change-img");
    const uploadGroup = document.getElementById("upload-group");
    const avatarMessage = document.getElementById("avatar-message");

    avatarInput.addEventListener("change", function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                previewImg.src = e.target.result;
                uploadPlaceholder.classList.add("hidden");
                uploadPreview.classList.remove("hidden");
                uploadGroup.classList.remove("has-error");
                avatarMessage.textContent = "Upload your photo (JPG or PNG, max size: 500KB).";
            }
            reader.readAsDataURL(file);
        }
    });

    removeImgBtn.addEventListener("click", (e) => {
        e.preventDefault();
        avatarInput.value = "";
        uploadPreview.classList.add("hidden");
        uploadPlaceholder.classList.remove("hidden");
        previewImg.src = "";
    });

    changeImgBtn.addEventListener("click", (e) => {
        e.preventDefault();
        avatarInput.click();
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nameInput = document.getElementById("fullName");
        const emailInput = document.getElementById("email");
        const githubInput = document.getElementById("github");

        const nameError = document.getElementById("name-error");
        const emailError = document.getElementById("email-error");
        const githubError = document.getElementById("github-error");

        let isValid = true;

        const showError = (input, errorContainer, message) => {
            input.closest('.input-group').classList.add('has-error');
            errorContainer.querySelector('span').textContent = message;
            errorContainer.classList.remove('hidden');
            isValid = false;
        };

        const clearError = (input, errorContainer) => {
            input.closest('.input-group').classList.remove('has-error');
            errorContainer.classList.add('hidden');
        };

        clearError(nameInput, nameError);
        clearError(emailInput, emailError);
        clearError(githubInput, githubError);
        uploadGroup.classList.remove("has-error");

        // Validate Name
        if (nameInput.value.trim() === "") {
            showError(nameInput, nameError, "Please enter your full name.");
        }

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            showError(emailInput, emailError, "Please enter a valid email address.");
        }

        // Validate GitHub
        if (!githubInput.value.trim().startsWith("@") || githubInput.value.trim() === "@") {
            showError(githubInput, githubError, "Please enter a valid GitHub username.");
        }

        // Validate Avatar
        const file = avatarInput.files[0];
        if (!file) {
            uploadGroup.classList.add("has-error");
            avatarMessage.textContent = "Please upload an avatar image.";
            isValid = false;
        } else {
            const validTypes = ["image/jpeg", "image/png"];
            if (!validTypes.includes(file.type)) {
                uploadGroup.classList.add("has-error");
                avatarMessage.textContent = "Please upload a valid image format (JPG or PNG).";
                isValid = false;
            } else if (file.size > 500 * 1024) { 
                uploadGroup.classList.add("has-error");
                avatarMessage.textContent = "File too large. Please upload a photo under 500KB.";
                isValid = false;
            }
        }
        
        if (isValid) {
            const userData = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                github: githubInput.value.trim(),
                avatar: previewImg.src
            };
            
            sessionStorage.setItem("codingConfUser", JSON.stringify(userData));
            window.location.href = "ticket.html";
        }
    });
});