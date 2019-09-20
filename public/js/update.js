function updateAccount(){
    $('.subwrp').submit(function (e){
        e.preventDefault();
        const newPhoneNumber = $('#amount').val();
        const prevPhoneNumber = $('#card-number').val();
        const reason = $('#cvv').val();
        const authUser = JSON.parse(localStorage.getItem('user'));
        const userId = authUser.id;
        $.get(`http://localhost:3000/users/?id=${userId}`, function(data){
            const retrievedId = data[0].id;
            const fName = data[0].firstName;
            const lName = data[0].lastName;
            const newEmail = data[0].email;
            const newPass = data[0].password;
            $.ajax({
                url: `http://localhost:3000/users/${retrievedId}`,
                type: 'PATCH',
                data: {
                    phoneNumber: newPhoneNumber,
                    // firstName: fName,
                    // lastName: lName,
                    // email: newEmail,
                    // password: newPass
                }
            }).done(function(data){
                window.location.replace('../html/transaction.html');
                alert('You have successfully changed your phone number')
            })
        })
    })
}