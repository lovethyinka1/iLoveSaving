function signInUser() {
    $('.main-panel-form').submit(function (e) {
        e.preventDefault();
        const email = $('#emailAddress').val();
        const password = $('#password').val();
        $.ajax({
            url:`http://localhost:3000/users/?email=${email}&&password=${password}`,
            type: 'GET',
            dataType: 'json'
        }).done((data) => {
                if(data.length === 0){
                    alert("Email or password incorrect")
                } else {
                    const { id, email, password, firstName } = data[0];
                    const userInfo = JSON.stringify({ id, email, password,firstName });
                    localStorage.setItem('user', userInfo)
                    window.location.replace('../html/transaction.html');
                }
        })
    })
}