let slide = document.querySelectorAll('.movie1');
console.log(slide)
let arrow = document.querySelectorAll('.arrow');
console.log(arrow)
let slideContainer = document.querySelector('.movies')

let count = 0;

arrow.forEach(arrow => {
    arrow.addEventListener('click', function (e) {
        debugger;

        if (e.target.classList.contains('next')) {
            count += 4;
            console.log(count)

            slide.forEach(slide1 => {
                slide1.style.display = 'none';
            })
            for (var i = count; i <= count + 4; i++) {
                slide[i].style.display = 'block';
            }
        }
        else if (e.target.classList.contains('prev')) {
            count -= 4;
            console.log(count)
            if (count < 0) {
                count = 0;
            }
            slide.forEach(slide1 => {
                slide1.style.display = 'none';
            })
            for (var a = count; a <= count + 4; a++) {
                slide[a].style.display = 'block';
            }
        }
    })
})
