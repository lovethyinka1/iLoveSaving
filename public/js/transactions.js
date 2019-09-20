$(document).ready(function (){
    const authUser = JSON.parse(localStorage.getItem('user'));
    const email = authUser.email;
    const name = authUser.firstName;
    $.ajax({
        url: `http://localhost:3000/transactions/?userEmail=${email}`,
        type: 'GET',
        dataType: 'json'
    }).done((data) => {
        $('#callName').html(`<h3>Hi, ${name}</h3>`)
        for(let i=0; i<data.length;i++){
            if(data.length === 0){
                $('#display').append('<h2>You do not have transactions yet</h2>')
            } else{
                $('#display').append(
                    `
                    <tr>
                        <td>${data[i].id}</td>
                        <td>${data[i].date}</td>
                        <td>${data[i].userEmail}</td>
                        <td>${data[i].amount}</td>
                        <td>${data[i].type}</td>
                    </tr>`
                )
            }
        }
    })
})