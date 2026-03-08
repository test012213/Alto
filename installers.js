// Check if user is logged in
function checkAuth() {
    const isLoggedIn = localStorage.getItem('altoLoggedIn');
    
    if (isLoggedIn !== 'true') {
        alert('Please sign in to access OS installers.');
        window.location.href = 'login.html';
        return false;
    }
    
    // Display welcome message
    const currentUser = JSON.parse(localStorage.getItem('altoCurrentUser'));
    if (currentUser) {
        document.getElementById('welcomeMsg').textContent = `Welcome, ${currentUser.name}!`;
    }
    
    return true;
}

// Handle logout
function handleLogout() {
    if (confirm('Are you sure you want to sign out?')) {
        localStorage.removeItem('altoLoggedIn');
        localStorage.removeItem('altoCurrentUser');
        window.location.href = 'index.html';
    }
}

// Attempt download (buttons are unresponsive as requested)
function attemptDownload(osName) {
    alert(`AltoOS ${osName} download is currently unavailable. This is a demo website.`);
    // In a real implementation, this would trigger the actual download
    // window.location.href = `/downloads/altoos-${osName.toLowerCase()}.iso`;
}

// Run auth check on page load
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
});
