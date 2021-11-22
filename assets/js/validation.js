const fName = document.querySelector('#fName');
const lName = document.querySelector('#lName');
const age = document.querySelector('#age');
const forms = document.querySelector('.form');
const submit = forms.querySelector('#submit');
const inp = document.querySelectorAll('.inp');
const wrapper = document.querySelector('.wrapper');
const logoText=document.querySelector('.logoText span')

const body = document.querySelector('body');


// Validation







fName.addEventListener('input', () => {
    const fNameValue = fName.value;

    if (fNameValue.length < 5 || fNameValue.length > 20) {
        inp[0].classList.add('invalid');
        inp[0].classList.remove('valid');
    } else {
        inp[0].classList.add('valid');
        inp[0].classList.remove('invalid');
        submit.style.border='2px solid #00C4F0'
        lName.style.display = 'block';
        
    }

});


// lName
lName.addEventListener('input', () => {
    const lNameValue = lName.value;
    if (lNameValue.length < 5 || lNameValue.length > 20) {
        inp[1].classList.add('invalid');
        inp[1].classList.remove('valid');
    } else {
        inp[1].classList.add('valid');
        inp[1].classList.remove('invalid');
        submit.style.border='2px solid #00C4F0'
        age.style.display = 'block';
        
    }
});

// age
age.addEventListener('keypress', e => {
    if (e.keyCode < 48 || e.keyCode > 57) {
        e.preventDefault()
        inp[2].classList.add('invalid');
        inp[2].classList.remove('valid');
    } else {
        inp[2].classList.add('valid');
        inp[2].classList.remove('invalid');
        submit.style.border='2px solid #00C4F0'
        submit.style.display = 'block';
    }
});

age.addEventListener('input', () => {
    if (age.value == '') {
        inp[2].classList.remove('valid', 'invalid')
    }
});


// submit
submit.addEventListener('click', () => {

    if (!inp[0].classList.contains('valid')) {
        inp[0].classList.add('invalid');
        submit.style.border='2px solid red';
    }
    else if (!inp[1].classList.contains('valid')) {
        inp[1].classList.add('invalid');
        submit.style.border='2px solid red';
    }
    else if (!inp[2].classList.contains('valid')) {
        inp[2].classList.add('invalid');
        submit.style.border='2px solid red';
    }
    else {
       
        forms.style.display = 'none';
        body.classList.remove('bg');
        body.classList.add('animate');
        wrapper.style.display = 'block';
        animated()
        
    }
})


function animated() {
    myVar = setTimeout(function () {
        document.getElementById("loader").style.display = "none";
        window.location.href = "index.html";
    }, 3000)
};
