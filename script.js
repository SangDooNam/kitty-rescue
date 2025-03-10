const button = document.getElementById('btn');
const input = document.getElementById('amount');
const cat = document.getElementById('cat');

function handleDonation() {
    const amount = input.value;

    if (amount == 0) {
        alert('Thanks for nothing, the cats are all sad :(');
        document.body.style.background = 'red';
    } else {
        alert(`Thanks for the donation of $ ${amount}!`);
    }
}

function catClick() {
    document.body.style.background = 'pink';
}

function moveCat() {
    const maxX = window.innerWidth - cat.width;
    const maxY = window.innerHeight - cat.height;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    cat.style.left = randomX + "px";
    cat.style.top = randomY + "px";
}

function toggleCatClass() {
    cat.classList.toggle("rotate");
}


button.addEventListener('click', handleDonation);
cat.addEventListener('click', catClick);
cat.addEventListener('click', moveCat);
cat.addEventListener('mouseover', toggleCatClass);
cat.addEventListener('mouseout', toggleCatClass);
