let number = document.querySelectorAll(`.number`);
let numberArr = Array.from(number);
console.log(numberArr);

numberArr.map((item) =>{
    let count = 0;
    const counting = () =>{
        if (count < item.dataset.number) {
            count++;
            item.innerHTML = count;
        } else{
            clearInterval();
        }
}
setInterval(counting, item.dataset.speed / item.dataset.number);
})

