function withdrawMoney(){
    $('.subwrp').submit(function(e){
        e.preventDefault();
        const amount = $('#amount').val();
        const bankName = $('#card-number').val();
        const password = $('#cvv').val();
        const type =' Withdrawal';
        const date = new Date();
        const authUser = JSON.parse(localStorage.getItem('user'));
        const userEmail = authUser.email;
        const userPassword = authUser.password;
        const moneyValues = { amount, bankName, type, date, userEmail }
        if(password !== userPassword){
            alert('Please enter your correct account password')
        } else{
            $.ajax({
                url: 'http://localhost:3000/transactions',
                type: 'POST',
                data: moneyValues,
                success: function (data){
                    console.log(data)
                    window.location.replace('../html/transaction.html')
                }
            })}
    })
}