// auth.js


function getUsers(){
return JSON.parse(localStorage.getItem('mw_users') || '[]');
}


function saveUsers(users){
localStorage.setItem('mw_users', JSON.stringify(users));
}


function registerUser(e){
e.preventDefault();
const u = document.getElementById('reg_user').value.trim();
const em = document.getElementById('reg_email').value.trim();
const p = document.getElementById('reg_pass').value;


const users = getUsers();
if(users.find(x => x.user === u || x.email === em)){
alert(i18n.t('err_user_exists'));
return;
}


users.push({user:u, email:em, pass: btoa(p)}); // تخزين بسيط مش مشفّر قوي — لاحقًا استخدم الخادم
saveUsers(users);
localStorage.setItem('mw_session', u);
window.location.href = 'dashboard.html';
}


function loginUser(e){
e.preventDefault();
const u = document.getElementById('login_us