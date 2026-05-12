const backBtn = document.getElementById('back-btn');

window.addEventListener('scroll', () => {
    const scrollValue = document.scrollingElement.scrollTop;
    if (scrollValue >= 300) {
        backBtn.style.display = 'inline';
    }
    else {
        backBtn.style.display = 'none';
    }
});

const hako = document.querySelectorAll(".hako");

window.addEventListener("scroll", () => {
    hako.forEach((item) => {
        const position = item.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            item.classList.add("show");
        }
    });
});

const text2 = "WORKS";
const title2 = document.getElementById('title2');

let index = 0;

function typing2 () {
    if (index < text2.length) {
        title2.textContent += text2[index];
        index++;
        setTimeout(typing2,150);
    }
}

typing2();