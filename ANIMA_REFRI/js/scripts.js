 let list = document.querySelectorAll('.item');
 let next = document.getElementById('next');
 let prev = document.getElementById('prev');

 let count = list.length // 3
 let active = 0;

 console.log(list);
 console.log(next);
 console.log(prev);
 console.log(count);


//  Código dos butões

 next.onclick = () => {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active')

    active = active >= count -1 ? 0 : active + 1
    list[active].classList.add('active');
 }

 prev.onclick = () => {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active')

    active = active <= 0 ? count -1 : active - 1
    list[active].classList.add('active');
 }