const form = document.getElementById('loginForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Username:', username);
    console.log('Password:', password);   
    if(username=="AIMLC" && password=="AIMLC"){
        window.location.href = "../test2/index.html";
    }
});