const welcomePage = document.getElementById("welcomePage");
const loginPage = document.getElementById("loginPage");
const choicePage = document.getElementById("choicePage");
const getStartedBtn = document.getElementById("getStartedBtn");
const soloChoice = document.getElementById("soloChoice");
const groupChoice = document.getElementById("groupChoice");
const loginContainer = document.getElementById("loginContainer");
const toggleBtn = document.getElementById("toggleBtn");
const overlayText = document.getElementById("overlayText");
const overlayDesc = document.getElementById("overlayDesc");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const logoutBtn = document.getElementById("logoutBtn");
const checkbox = document.getElementById("checkbox");
const appContainer = document.getElementById("appContainer");

const projectContainer = document.getElementById("projectContainer");
const noProjectsMsg = document.getElementById("noProjectsMsg");
const projectPopup = document.getElementById("projectPopup");
const deletePopup = document.getElementById("deletePopup");
const settingsPopup = document.getElementById("settingsPopup");
const projectNameInput = document.getElementById("projectNameInput");
let selectedProject = null;
let userType = null;

window.addEventListener('DOMContentLoaded', function() {
    loginPage.style.display = "none";
    choicePage.style.display = "none";
});

getStartedBtn.addEventListener("click", () => {
    welcomePage.classList.add("hide");

    setTimeout(() => {
        welcomePage.style.display = "none";
        loginPage.style.display = "flex";
        loginPage.style.opacity = "0";
        loginPage.style.transform = "translateY(20px)";
        
        setTimeout(() => {
            loginPage.style.opacity = "1";
            loginPage.style.transform = "translateY(0)";
        }, 50);
    }, 450);  
});

toggleBtn.addEventListener("click", () => {
    loginContainer.classList.toggle("active");
    if (loginContainer.classList.contains("active")) {
        overlayText.innerText = "Hello, Welcome to OnPoint!";
        overlayDesc.innerText = "Already have an account?";
        toggleBtn.innerText = "Login";
    } else {
        overlayText.innerText = "Welcome back to OnPoint";
        overlayDesc.innerText = "Don't have an account?";
        toggleBtn.innerText = "Register";
    }
});

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    
    if (username === "" || password === "") {
        alert("Please enter both username and password");
        return;
    }

    loginPage.classList.add("hide");

    setTimeout(() => {
        loginPage.style.display = "none";
        choicePage.style.display = "flex";
        choicePage.style.opacity = "0";
        choicePage.style.transform = "translateY(20px)";
        
        setTimeout(() => {
            choicePage.style.opacity = "1";
            choicePage.style.transform = "translateY(0)";
            choicePage.classList.add("show");
        }, 50);
    }, 450);
});

registerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const username = document.getElementById("registerUsername").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value.trim();
    
    if (username === "" || email === "" || password === "") {
        alert("Please fill in all fields");
        return;
    }

    loginPage.classList.add("hide");

    setTimeout(() => {
        loginPage.style.display = "none";
        choicePage.style.display = "flex";
        choicePage.style.opacity = "0";
        choicePage.style.transform = "translateY(20px)";
        
        setTimeout(() => {
            choicePage.style.opacity = "1";
            choicePage.style.transform = "translateY(0)";
            choicePage.classList.add("show");
        }, 50);
    }, 450);
});

soloChoice.addEventListener("click", () => {
    userType = 'solo';
    updateSidebar();
    
    choicePage.classList.remove("show");
    choicePage.style.opacity = "0";
    choicePage.style.transform = "translateY(20px)";
    
    setTimeout(() => {
        choicePage.style.display = "none";
        appContainer.style.display = "flex";
        appContainer.style.opacity = "0";
        appContainer.style.transform = "translateY(20px)";
        
        setTimeout(() => {
            appContainer.style.opacity = "1";
            appContainer.style.transform = "translateY(0)";
            appContainer.classList.add("show");
        }, 50);
    }, 450);
});

groupChoice.addEventListener("click", () => {
    userType = 'group';
    updateSidebar();
    
    choicePage.classList.remove("show");
    choicePage.style.opacity = "0";
    choicePage.style.transform = "translateY(20px)";
    
    setTimeout(() => {
        choicePage.style.display = "none";
        appContainer.style.display = "flex";
        appContainer.style.opacity = "0";
        appContainer.style.transform = "translateY(20px)";
        
        setTimeout(() => {
            appContainer.style.opacity = "1";
            appContainer.style.transform = "translateY(0)";
            appContainer.classList.add("show");
        }, 50);
    }, 450);
});

function updateSidebar() {
    const chatsLink = document.getElementById('chatsLink');
    const tasksLink = document.getElementById('tasksLink');
    const myGroupLink = document.getElementById('myGroupLink');
    const upgradeLink = document.getElementById('upgradeLink');
    const profileLink = document.getElementById('profileLink');
    
    if (userType === 'solo') {

        chatsLink.style.display = 'none';
        tasksLink.style.display = 'none';
        myGroupLink.style.display = 'none';
        upgradeLink.style.display = 'flex';
        profileLink.style.display = 'flex';
    } else if (userType === 'group') {
        chatsLink.style.display = 'flex';
        tasksLink.style.display = 'none';
        myGroupLink.style.display = 'flex';
        upgradeLink.style.display = 'none';
        profileLink.style.display = 'none';
    }
}
logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    userType = null;
    
    appContainer.classList.remove("show");
    appContainer.style.opacity = "0";
    appContainer.style.transform = "translateY(20px)";

    setTimeout(() => {
        appContainer.style.display = "none";

        loginPage.style.display = "flex";
        loginPage.style.opacity = "0";
        loginPage.style.transform = "translateY(20px)";
        loginPage.classList.remove("hide");
        
        setTimeout(() => {
            loginPage.style.opacity = "1";
            loginPage.style.transform = "translateY(0)";
        }, 50);
    }, 450);
});

function showProjectPopup() {
    projectNameInput.value = "";
    projectPopup.classList.add("show");
}

function closeProjectPopup() {
    projectPopup.classList.remove("show");
}

function showSettingsPopup() {
    settingsPopup.classList.add("show");
}

function closeSettingsPopup() {
    settingsPopup.classList.remove("show");
}

function addProject() {
    let projectName = projectNameInput.value.trim();
    if (projectName === "") {
        alert("Please enter a project name.");
        return;
    }

    let project = document.createElement("div");
    project.classList.add("card");
    project.textContent = projectName;

    project.addEventListener("contextmenu", function(e) {
        e.preventDefault();
        selectedProject = project;
        deletePopup.classList.add("show");
    });

    project.addEventListener("click", function() {
        console.log("Project clicked:", projectName);
    });

    projectContainer.insertBefore(project, noProjectsMsg);
    noProjectsMsg.style.display = "none";
    closeProjectPopup();
}

function deleteProject() {
    if (selectedProject) {
        projectContainer.removeChild(selectedProject);
        selectedProject = null;
    }
    closeDeletePopup();
    if (projectContainer.children.length === 1) { 
        noProjectsMsg.style.display = "block";
    }
}

function closeDeletePopup() {
    deletePopup.classList.remove("show");
}

function openModal() {
    document.getElementById("subscriptionModal").classList.add("show");
}

function closeModal() {
    document.getElementById("subscriptionModal").classList.remove("show");
}

function togglePlan(type) {
    const soloBtn = document.querySelector(".plan-toggle-btn button:first-child");
    const groupBtn = document.querySelector(".plan-toggle-btn button:last-child");
    
    if (type === 'solo') {
        document.getElementById("solo-plans").style.display = "flex";
        document.getElementById("group-plans").style.display = "none";
        soloBtn.classList.add("active");
        groupBtn.classList.remove("active");
    } else {
        document.getElementById("solo-plans").style.display = "none";
        document.getElementById("group-plans").style.display = "flex";
        soloBtn.classList.remove("active");
        groupBtn.classList.add("active");
    }
}

checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', this.checked);
});

if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    checkbox.checked = true;
}

window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('subscriptionModal')) {
        closeModal();
    }
    if (e.target === projectPopup) {
        closeProjectPopup();
    }
    if (e.target === deletePopup) {
        closeDeletePopup();
    }
    if (e.target === settingsPopup) {
        closeSettingsPopup();
    }
});

window.addEventListener('DOMContentLoaded', () => {
    if (projectContainer.children.length === 1) {
        const sampleProjects = ['Techno', 'Project 2', 'Project 3'];
        sampleProjects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('card');
            projectElement.textContent = project;
            
            projectElement.addEventListener('contextmenu', function(e) {
                e.preventDefault();
                selectedProject = projectElement;
                deletePopup.classList.add('show');
            });
            
            projectContainer.insertBefore(projectElement, noProjectsMsg);
        });
        noProjectsMsg.style.display = 'none';
    }
});

document.addEventListener('touchstart', function() {}, {passive: true});

let lastTouchTime = 0;
document.addEventListener('touchend', function(event) {
    const now = (new Date()).getTime();
    if (now - lastTouchTime <= 300) {
        event.preventDefault();
    }
    lastTouchTime = now;
}, {passive: false});

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
        setTimeout(() => {
            const rect = this.getBoundingClientRect();
            if (rect.top < 100 || rect.bottom > window.innerHeight - 100) {
                this.scrollIntoView({behavior: 'smooth', block: 'center'});
            }
        }, 300);
    });
});

document.querySelectorAll('button, a').forEach(btn => {
    btn.addEventListener('touchstart', function() {
        this.classList.add('touch-active');
    });
    
    btn.addEventListener('touchend', function() {
        this.classList.remove('touch-active');
    });
});