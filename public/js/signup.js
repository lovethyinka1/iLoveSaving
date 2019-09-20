function signUpUser() {
    $('.main-panel-form').submit(function(e) {
        e.preventDefault();
        const firstName = $('#firstName').val();
        const lastName = $('#lastName').val();
        const phoneNumber = $('#mNumber').val();
        const email = $('#emailAddress').val();
        const password = $('#password').val();
        const cPassword = $('#password2').val();
        const user = { firstName, lastName, phoneNumber, email, password }
        if(firstName === "" && lastName === "" && phoneNumber === ""
    && email === "" && password === ""&& cPassword===""){
        alert("Please fill in all the required fields");
    }
    if(password !== cPassword){
        alert("Passwords do not match");
    } else {
        $.ajax({
            url: 'http://localhost:3000/users',
            type: "POST",
            data: user,
            success: function (data){
                console.log(data)
                window.location.replace("../html/transaction.html")
                alert(`${data.firstName}, you are welcome to the world of saving`)
            }
        })
    }
    })
}