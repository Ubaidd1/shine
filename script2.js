const productContainers1 = [...document.querySelectorAll('.product-container1')];
const nxtBtn1 = [...document.querySelectorAll('.nxt-btn1')];
const preBtn1 = [...document.querySelectorAll('.pre-btn1')];

productContainers1.forEach((item1, j) => {
    let containerDimensions1 = item1.getBoundingClientRect();
    let containerWidth1 = containerDimensions1.width;

    nxtBtn1[j].addEventListener('click', () => {
        item1.scrollLeft += containerWidth1;
    })

    preBtn1[j].addEventListener('click', () => {
        item1.scrollLeft -= containerWidth1;
    })
})