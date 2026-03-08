// Handle login
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Check if user exists
    const users = JSON.parse(localStorage.getItem('altoUsers') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        localStorage.setItem('altoLoggedIn', 'true');
        localStorage.setItem('altoCurrentUser', JSON.stringify(user));
        alert('Welcome back, ' + user.name + '!');
        window.location.href = 'installers.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
}

// Handle signup
function handleSignup(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const password = document.getElementById('password').value;
    
    // Get existing users
    const users = JSON.parse(localStorage.getItem('altoUsers') || '[]');
    
    // Check if email already exists
    if (users.some(u => u.email === email)) {
        alert('An account with this email already exists. Please sign in.');
        return;
    }
    
    // Add new user
    const newUser = { name, email, age, password };
    users.push(newUser);
    localStorage.setItem('altoUsers', JSON.stringify(users));
    
    // Auto login
    localStorage.setItem('altoLoggedIn', 'true');
    localStorage.setItem('altoCurrentUser', JSON.stringify(newUser));
    
    alert('Account created successfully! Welcome, ' + name + '!');
    window.location.href = 'installers.html';
}

// Check if already logged in
if (window.location.pathname.includes('login.html') || window.location.pathname.includes('signup.html')) {
    if (localStorage.getItem('altoLoggedIn') === 'true') {
        window.location.href = 'installers.html';
    }
}
