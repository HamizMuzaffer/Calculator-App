var myanswer = " ";
var buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === "=") {
            myanswer = eval(myanswer);
            document.querySelector('input').value = myanswer;

        }

        else if (e.target.innerHTML === "AC") {
            myanswer = " ";
            document.querySelector('input').value = myanswer;
        }

        else if (e.target.innerHTML === "DEL") {
            myanswer = myanswer.slice(0, -1);
            document.querySelector("input").value = myanswer;

        }
        else {
            myanswer = myanswer + e.target.innerHTML;
            document.querySelector('input').value = myanswer;
        }



    })
})

