 $(document).ready(function () {
     var contacts = [

         {
             address: "4, Adeola Close",
             phone_number: "0812333",
             image: "https://bit.ly/2TkmU78"
         },
         {
             address: "56, Commercial Avenue",
             phone_number: "0812333",
             image: "https://bit.ly/2Vh9co5"
         },
         {
             address: "45, Johnson close",
             phone_number: "0812333",
             image: "https://bit.ly/2vePIpq"
         },
         {
             address: "458, Thomas Moore",
             phone_number: "0812333",
             image: "https://bit.ly/2HXEwjM"
         },
         {
             address: "45, Avenue Mankago ",
             phone_number: "0812333",
             image: "https://bit.ly/2PrTGSn"
         },
         {
             address: "45, kenny Crescent",
             phone_number: "0812333",
             image: "https://bit.ly/38ZXty4"
         },
         {
             address: "45, Ijedu Road",
             phone_number: "0812333",
             image: "https://bit.ly/2VnnOlH"
         },
         {
             address: "45, Dele Giwa Close",
             phone_number: "0812333",
             image: "https://bit.ly/2Vke63H"
         },
         {
             address: "45, Airport Road",
             phone_number: "0812333",
             image: "https://bit.ly/3cbSU5Z"
         }

     ];

    

     var comments = [{
             name: "Linda Ada",
             image: "https://bit.ly/39cfjOJ",
             test: "my kids can now go to the best school in the world!!!!"
         },
         {
             name: "Jogn Bull",
             image: "https://bit.ly/32muD8K",
             test: "with BNP, our future is secured!!!"
         },
         {
             name: "Jack Dan",
             image: "https://bit.ly/2w4plT0",
             test: "with BNP, my friends and I can have a superb vacation!!!!"
         },
         {
             name: "Youl Pete",
             image: "https://bit.ly/2SXlT5Z",
             test: "with BNP, I can pursue my career!!!!"
         }
     ];

     var clients = [{
         name: "Uchendu Linda",
         marital: "Single",
         img: "https://bit.ly/2SXlT5Z",
         gender: "Male",
         phone: "77777",
         email: "linda@SpeechGrammarList.com",
         account: "savings",
     }];
     
     for (i = 0; i < comments.length; i++) {
         $('#comments').append('<div class="col-md-3 col-sm-6">' +
             '<div class="image thumbnail">' + '<img  class="img-responsive" src=' +
             comments[i].image + '>' + '<div class="caption">' + '<h4>' + comments[i].name +
             '</h4>' + '</div>' + '<div class="caption"><a href=""><p>' + comments[i].test +
             '</p></a></div></div></div>')
         console.log(comments[i])

     };


     for (i = 0; i < contacts.length; i++) {
         $('#contacts').append('<div class="col-md-3 col-sm-6">' + '<div class="image thumbnail">' +
             '<img class="img-responsive" src=' + contacts[i].image + '>' + '<div class="caption">' +
             '<h4>' + contacts[i].address + '</h4>' + '</div>' + '<div class="caption"><a href=""><p>' +
             contacts[i].phone_number + '</p></a></div></div></div>')

         console.log(contacts[i])

     }


     $("#form").submit(function (a) {
         a.preventDefault()
         //    alert("Your username please?");

     });


     var btnAdd = document.querySelector('#add');
     var btnSub = document.querySelector('#sub');
     var input = document.querySelector('input');
     
     btnAdd.addEventListener('click', () => {
        input.value = parseInt(input.value) + 1
    });
    btnSub.addEventListener('click', () => {
        input.value = parseInt(input.value) - 1
    });
});

 
 function signUp(form) {


     var username = document.getElementById ("username").value;
     var pswrd = document.getElementById ("password").value;
     var pswrd2 = document.getElementById ("password2").value;
     var checkTexts = /^[a-zA-Z ]+$/;
     var checkPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;


     if (username == "") {
         alert("Your username please?");

     } else if (pswrd == "") {
         alert("Your password please");

     } else if (pswrd2 == "") {
         alert("Re-type your password please");

     } else if (pswrd != pswrd2) {
         alert("passwords do not match")

     }
     
    //  if (!checkTexts.test(username)) {
    //      alert("Error!: username should only contain letters !!");
    //  }

    //  if (!checkPassword.test(pswrd)) {
    //      alert("Error!: field contains invalid characters !!");
    //      }

         window.location.href = "index.html"
 }


 var username = document.getElementById("username").value;
     var pswrd = document.getElementById("password").value;
     var pswrd2 = document.getElementById("password2").value;

 function logIn() {
     var username = document.getElementById("username").value;
     var pswrd = document.getElementById("password").value;
     var pswrd2 = document.getElementById("password2").value;


     if (username === "staff@banka.com" && pswrd === "staff" && pswrd2 === "staff") {
         window.location.href = "staff.html"
     } else if (username === "staff@banka.com" && pswrd !== "staff" && pswrd2 !== "staff") {
         alert(" Dear staff, ensure you fill in the right information")

     } else if (username === "admin@banka.com" && pswrd === "admin" && pswrd2 === "admin") {
         window.location.href = "admin.html"
     } else if (username === "admin@banka.com" && pswrd !== "admin" && pswrd2 !== "admin") {
         alert("Dear Admin, Please ensure you fill in the right information")

     } else {
         window.location.href = "clients.html"
     }
 }

 function clients() {
     var name = document.getElementById("name").value;
     var marital = document.getElementById("marital").value;
     var img = document.getElementById("img").value;
     var gender = document.getElementById("gender").value;
     var phone = document.getElementById("phone").value;
     var email = document.getElementById("email").value;
     var account = document.getElementById("account").value;
     var bal = document.getElementById("bal").value;
     var checkTexts = /^[a-zA-Z ]+$/;
     var checkEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


     if (name === "" || marital === "" || bal === "" || img === "" || gender === "" || phone === "" || email === "" || account === "") {
         alert("ensure all fields are filled")
         return false;
     }

     if (!checkTexts.test(name)) {
         alert("Error!: characters should only contain letters !!");
         return false;

     }
     if (!checkEmail.test(email)) {
         alert("Error!: invalid email characters !!");
         return false;
        } else {
            window.location.href = "clients.html"

        }
 }
//-
 function myDebit() {
    var balance = document.getElementsByClassName('balance').value;
    var debit = Number(prompt("Enter amount "))
    var result = balance - debit
    alert('Current balance is ' + result)

}
//+
 function myCredit() {
    var balance = document.getElementsByClassName('balance').value;

    var credit = Number(prompt("Enter amount"));
    var result = balance + credit
    alert('Current balance is ' + result)

}

document.getElementById('button1').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'flex'; 
}); 

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'none';

});

var  activity = document.getElementsByClassName('activity');
var  overview = document.getElementsByClassName('overview');
var  trends = document.getElementsByClassName('trends');
var act = document.getElementsByClassName('act')

activity.addEventListener('click', function(){
    act.style.background='lightblue'
});

// var house1 = document.getElementsByClassName('house1');
var activate = document.getElementById('Activate');
var deactivate = document.getElementById('Deactivate');
var divs = activate.getElementsByTagName('div'), i;
var noDivs = deactivate.getElementsByTagName('div'), i;

activate.addEventListener('click', function(){
    for(i=0; i < divs.length; i++){
        divs[i].disabled = false;
     }

});

deactivate.addEventListener('click', function(){
    for(i=0; i < noDivs.length; i++){
        noDivs[i].disabled = true;
     }
    });

    // document.getElementsById('activate').addEventListener('click', function(){
    //     document.querySelector('.house1').disabled =  false;
    //     });
        
    //     document.querySelector('#deactivate').addEventListener('click', function(){
    //         document.querySelector('.house1').disabled =  true;
    //         });

    function signUpNewStaff(form) {
    var username = document.getElementsByClassName("username").value;
     var pswrd = document.getElementsByClassName("password").value;
     var pswrd2 = document.getElementsByClassName("password2").value;
 
     if (username === "" || pswrd === "" || pswrd2 === "") {
        alert("ensure all fields are filled")
        return false;
    } else {
        window.location.href = "stafflist.html"

    }
}

function signUpAdmin(form) {
    var username = document.getElementsByClassName("username").value;
     var pswrd = document.getElementsByClassName("password").value;
     var pswrd2 = document.getElementsByClassName("password2").value;
 
     if (username === "" || pswrd === "" || pswrd2 === "") {
        alert("ensure all fields are filled")
        return false;
    } else {
        window.location.href = "adminlist.html"
 
    }
}



