let heroCTABtn = document.querySelector("#heroCTABtn");

heroCTABtn.addEventListener("click", () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
});


// about corousel 

let indexes = [1,2,3,4]
pointer = 0

let aboutCorouselImage = document.querySelector("#about-corousel")

let prevBtn = document.querySelector("#about-corousel-prev-btn")
let nextBtn = document.querySelector("#about-corousel-next-btn")

prevBtn.addEventListener("click",prevBtnFuction)
nextBtn.addEventListener("click",nextBtnFuction)

function prevBtnFuction(){
    if(pointer != 1){
        pointer--
    }
    changeImageForCorousel(pointer)
}

function nextBtnFuction(){
    if(pointer != indexes.length){
        pointer++
    }
    changeImageForCorousel(pointer)
}

function changeImageForCorousel(index){
    aboutCorouselImage.setAttribute("src",`./media/about-${index}-img.jpg`)
}