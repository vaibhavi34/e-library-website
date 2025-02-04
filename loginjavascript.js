
      // Simulating a simple login system
      document.getElementById('loginBtn').addEventListener('click', function() {
        // Get the username and password input
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const messageElement = document.getElementById('message');
  
        // Check if the username and password match (simulating a basic check)
        if (username === 'admin' && password === '123456') {
          // Successful login, redirect to a secure page
          messageElement.textContent = 'Login successful! Redirecting...';
          messageElement.classList.remove('error');
          messageElement.classList.add('success');
          
          // Redirect after a short delay
          setTimeout(function() {
            window.location.href = 'file:///C:/Users/admin.DESKTOP-P749VNL/OneDrive/Desktop/bcsp%2064%20final%20year%20project%20websitefor/home%20page%20.html';  // Change this URL to your secure page
          }, 2000);
        } else {
          // Failed login
          messageElement.textContent = 'Invalid username or password. Please try again.';
          messageElement.classList.remove('success');
          messageElement.classList.add('error');
        }
      });
