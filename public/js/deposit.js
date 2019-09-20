function depositMoney(){
    $('.subwrp').submit(function(e){
        e.preventDefault();
        const amount = $('#amount').val();
        const cardNumber = $('#card-number').val();
        const cvv = $('#cvv').val();
        const expiryDate = $('#expiry-date').val();
        const type =' Deposit';
        const date = new Date();
        const authUser = JSON.parse(localStorage.getItem('user'));
        const userEmail = authUser.email;
        const moneyValues = { amount, cardNumber, cvv, expiryDate, type, date, userEmail }
        $.ajax({
            url: 'http://localhost:3000/transactions',
            type: 'POST',
            data: moneyValues,
            success: function (data){
                console.log(data)
                window.location.replace('../html/transaction.html')
                alert(`You have successfully deposited ${amount} to your account`)
            }
        })
    })
}