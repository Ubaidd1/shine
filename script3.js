const productContainers2 = [...document.querySelectorAll('.product-container2')];
const nxtBtn2 = [...document.querySelectorAll('.nxt-btn2')];
const preBtn2 = [...document.querySelectorAll('.pre-btn2')];

productContainers2.forEach((item2, z) => {
    let containerDimensions2 = item2.getBoundingClientRect();
    let containerWidth2 = containerDimensions2.width;

    nxtBtn2[z].addEventListener('click', () => {
        item2.scrollLeft += containerWidth2;
    })

    preBtn2[z].addEventListener('click', () => {
        item2.scrollLeft -= containerWidth2;
    })
})