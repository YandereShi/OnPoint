const welcomePage = document.getElementById("welcomePage");
const loginPage = document.getElementById("loginPage");
const choicePage = document.getElementById("choicePage");
const roleChoicePage = document.getElementById("roleChoicePage");
const planChoicePage = document.getElementById("planChoicePage");
const getStartedBtn = document.getElementById("getStartedBtn");
const soloChoice = document.getElementById("soloChoice");
const groupChoice = document.getElementById("groupChoice");
const adminChoice = document.getElementById("adminChoice");
const employeeChoice = document.getElementById("employeeChoice");
const loginContainer = document.getElementById("loginContainer");
const toggleBtn = document.getElementById("toggleBtn");
const overlayText = document.getElementById("overlayText");
const overlayDesc = document.getElementById("overlayDesc");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const logoutBtn = document.getElementById("logoutBtn");
const checkbox = document.getElementById("checkbox");
const appContainer = document.getElementById("appContainer");
const groupCodeInput = document.getElementById("groupCodeInput");
const submitCodeBtn = document.getElementById("submitCodeBtn");
const groupCodePopup = document.getElementById("groupCodePopup");
const groupCodeDisplay = document.getElementById("groupCodeDisplay");
const codeEntryPopup = document.getElementById("codeEntryPopup");
const sortSelect = document.getElementById('sortSelect');
const projectContainer = document.getElementById("projectContainer");
const noProjectsMsg = document.getElementById("noProjectsMsg");
const projectPopup = document.getElementById("projectPopup");
const deletePopup = document.getElementById("deletePopup");
const settingsPopup = document.getElementById("settingsPopup");
const projectNameInput = document.getElementById("projectNameInput");
let selectedProject = null;
let userType = null;
let currentPlan = null;

window.addEventListener('DOMContentLoaded', function() {
    loginPage.style.display = "none";
    choicePage.style.display = "none";
    roleChoicePage.style.display = "none";
    planChoicePage.style.display = "none";
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
    choicePage.classList.remove("show");
    choicePage.style.opacity = "0";
    choicePage.style.transform = "translateY(20px)";
    
    setTimeout(() => {
        choicePage.style.display = "none";
        roleChoicePage.style.display = "flex";
        roleChoicePage.style.opacity = "0";
        roleChoicePage.style.transform = "translateY(20px)";
        
        setTimeout(() => {
            roleChoicePage.style.opacity = "1";
            roleChoicePage.style.transform = "translateY(0)";
            roleChoicePage.classList.add("show");
        }, 50);
    }, 450);
});

adminChoice.addEventListener("click", () => {
    roleChoicePage.classList.remove("show");
    roleChoicePage.style.opacity = "0";
    roleChoicePage.style.transform = "translateY(20px)";
    
    setTimeout(() => {
        roleChoicePage.style.display = "none";
        planChoicePage.style.display = "flex";
        planChoicePage.style.opacity = "0";
        planChoicePage.style.transform = "translateY(20px)";
        
        setTimeout(() => {
            planChoicePage.style.opacity = "1";
            planChoicePage.style.transform = "translateY(0)";
            planChoicePage.classList.add("show");
        }, 50);
    }, 450);
});

employeeChoice.addEventListener("click", () => {
    showCodeEntryPopup();
});

function showCodeEntryPopup() {
    groupCodeInput.value = "";
    codeEntryPopup.classList.add("show");
}

function closeCodeEntryPopup() {
    codeEntryPopup.classList.remove("show");
}

submitCodeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const code = groupCodeInput.value.trim();
    
    if (code.length !== 7) {
        alert("Please enter a valid 7-digit code");
        return;
    }

    userType = 'group';
    updateSidebar();
    
    closeCodeEntryPopup();
    roleChoicePage.classList.remove("show");
    roleChoicePage.style.opacity = "0";
    roleChoicePage.style.transform = "translateY(20px)";
    
    setTimeout(() => {
        roleChoicePage.style.display = "none";
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

document.querySelectorAll('.choose-plan-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        currentPlan = this.parentElement.getAttribute('data-plan');
        userType = 'group';
        updateSidebar();
        
        planChoicePage.classList.remove("show");
        planChoicePage.style.opacity = "0";
        planChoicePage.style.transform = "translateY(20px)";
        
        setTimeout(() => {
            planChoicePage.style.display = "none";
            appContainer.style.display = "flex";
            appContainer.style.opacity = "0";
            appContainer.style.transform = "translateY(20px)";
            
            setTimeout(() => {
                appContainer.style.opacity = "1";
                appContainer.style.transform = "translateY(0)";
                appContainer.classList.add("show");
                
                setTimeout(() => {
                    showGroupCodePopup();
                }, 2000);
            }, 50);
        }, 450);
    });
});

function showGroupCodePopup() {
    const code = generateRandomCode(7);
    groupCodeDisplay.textContent = code;
    groupCodePopup.classList.add("show");
}

function closeGroupCodePopup() {
    groupCodePopup.classList.remove("show");
}

function generateRandomCode(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// [Previous code remains the same until the updateSidebar function]

function updateSidebar() {
    const dashboardLink = document.getElementById('dashboardLink');
    const chatsLink = document.getElementById('chatsLink');
    const calendarLink = document.getElementById('calendarLink');
    const tasksLink = document.getElementById('tasksLink');
    const myGroupLink = document.getElementById('myGroupLink');
    const upgradeLink = document.getElementById('upgradeLink');
    const profileLink = document.getElementById('profileLink');
    const settingsLink = document.getElementById('settingsLink');
    const helpLink = document.getElementById('helpLink');
    
    // Remove all active classes first
    document.querySelectorAll('.sidebar a').forEach(link => {
        link.classList.remove('active');
    });
    
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

// Navigation functions
function showDashboard() {
    document.getElementById('dashboardView').style.display = 'block';
    document.getElementById('calendarView').style.display = 'none';
    document.getElementById('contentTitle').textContent = 'My Projects';
    document.getElementById('dashboardLink').classList.add('active');
    document.getElementById('calendarLink').classList.remove('active');
}

function showCalendar() {
    document.getElementById('dashboardView').style.display = 'none';
    document.getElementById('calendarView').style.display = 'block';
    document.getElementById('contentTitle').textContent = 'Calendar';
    document.getElementById('dashboardLink').classList.remove('active');
    document.getElementById('calendarLink').classList.add('active');
    generateCalendar(currentDate);
}

// Calendar functionality
let currentDate = new Date();

function generateCalendar(date) {
    const calendarDays = document.getElementById('calendarDays');
    const currentMonthYear = document.getElementById('currentMonthYear');
    
    // Clear previous calendar days
    calendarDays.innerHTML = '';
    
    // Set month and year header
    const monthNames = ["January", "February", "March", "April", "May", "June",
                       "July", "August", "September", "October", "November", "December"];
    currentMonthYear.textContent = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
    
    // Get first day of month and total days in month
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const daysInMonth = lastDay.getDate();
    
    // Get days from previous month to show
    const prevMonthDays = firstDay.getDay();
    
    // Get days from next month to show
    const nextMonthDays = 6 - lastDay.getDay();
    
    // Previous month days
    const prevMonthLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    for (let i = prevMonthDays - 1; i >= 0; i--) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('prev-month');
        dayElement.textContent = prevMonthLastDay - i;
        calendarDays.appendChild(dayElement);
    }
    
    // Current month days
    const today = new Date();
    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement('div');
        dayElement.textContent = i;
        
        // Highlight today
        if (date.getFullYear() === today.getFullYear() && 
            date.getMonth() === today.getMonth() && 
            i === today.getDate()) {
            dayElement.classList.add('today');
        }
        
        calendarDays.appendChild(dayElement);
    }
    
    // Next month days
    for (let i = 1; i <= nextMonthDays; i++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('next-month');
        dayElement.textContent = i;
        calendarDays.appendChild(dayElement);
    }
}

// Event listeners for navigation
document.getElementById('dashboardLink').addEventListener('click', (e) => {
    e.preventDefault();
    showDashboard();
});

document.getElementById('calendarLink').addEventListener('click', (e) => {
    e.preventDefault();
    showCalendar();
});

// Event listeners for calendar navigation
document.getElementById('prevMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    generateCalendar(currentDate);
});

document.getElementById('nextMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    generateCalendar(currentDate);
});


// [Rest of your existing JavaScript code remains the same]
logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    userType = null;
    currentPlan = null;
    
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
    project.dataset.created = new Date().toISOString();

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
    document.querySelector('.plan-toggle-btn').style.display = 'none';
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
    if (e.target === groupCodePopup) {
        closeGroupCodePopup();
    }
    if (e.target === codeEntryPopup) {
        closeCodeEntryPopup();
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
sortSelect.addEventListener('change', sortProjects);

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

document.getElementById('calendarLink').addEventListener('click', function(e) {
    e.preventDefault();
    toggleView('calendar');
});

function toggleView(view) {
    const contentTitle = document.getElementById('contentTitle');
    const projectContainer = document.getElementById('projectContainer');
    const calendarContainer = document.getElementById('calendarContainer');
    const calendarEl = document.getElementById('calendar');
    
    if (view === 'calendar') {
        if (!window.calendar) {
            window.calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth',
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                events: [
                    {
                        title: 'Team Meeting',
                        start: new Date(),
                        color: '#f0c14b'
                    }
                ],
                eventClick: function(info) {
                    alert('Event: ' + info.event.title);
                },
                dateClick: function(info) {
                    alert('Clicked on: ' + info.dateStr);
                }
            });
            window.calendar.render();
        }
        
        contentTitle.textContent = 'Calendar';
        projectContainer.style.display = 'none';
        calendarContainer.style.display = 'block';
        window.calendar.render();
    } else {
        contentTitle.textContent = 'My Projects';
        projectContainer.style.display = 'grid';
        calendarContainer.style.display = 'none';
    }
}
// Event listeners for sidebar navigation
document.getElementById('settingsLink').addEventListener('click', (e) => {
    e.preventDefault();
    showSettingsPopup();
});

document.getElementById('upgradeLink').addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
});

// Update showDashboard function to include active states
function showDashboard() {
    document.getElementById('dashboardView').style.display = 'block';
    document.getElementById('calendarView').style.display = 'none';
    document.getElementById('contentTitle').textContent = 'My Projects';
    
    // Remove all active states
    document.querySelectorAll('.sidebar a').forEach(link => {
        link.classList.remove('active');
    });
    document.getElementById('dashboardLink').classList.add('active');
}

// Update showCalendar function to include active states
function showCalendar() {
    document.getElementById('dashboardView').style.display = 'none';
    document.getElementById('calendarView').style.display = 'block';
    document.getElementById('contentTitle').textContent = 'Calendar';
    
    // Remove all active states
    document.querySelectorAll('.sidebar a').forEach(link => {
        link.classList.remove('active');
    });
    document.getElementById('calendarLink').classList.add('active');
    generateCalendar(currentDate);
}
function sortProjects() {
    const projects = Array.from(document.querySelectorAll('.card'));
    const sortValue = sortSelect.value;
    
    projects.sort((a, b) => {
        if (sortValue === 'name-asc') {
            return a.textContent.localeCompare(b.textContent);
        } else if (sortValue === 'name-desc') {
            return b.textContent.localeCompare(a.textContent);
        } else if (sortValue === 'date-asc') {
            return new Date(a.dataset.created) - new Date(b.dataset.created);
        } else if (sortValue === 'date-desc') {
            return new Date(b.dataset.created) - new Date(a.dataset.created);
        }
        return 0;
    });
    
    // Re-append sorted projects
    projects.forEach(project => {
        projectContainer.insertBefore(project, noProjectsMsg);
    });
}