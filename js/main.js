/* Find all slideshow containers */
var slideshowContainers = document.getElementsByClassName("slideshow-container");
/* For each container get starting variables */
for (let s = 0; s < slideshowContainers.length; s++) {
    /* Read the new data attribute which is now set in html file*/
    var cycle = slideshowContainers[s].dataset.cycle;
    /* Find all the child nodes with class mySlides */
    var slides = slideshowContainers[s].querySelectorAll('.mySlides');
    var slideIndex = 0;
    /* Now we can cycle slides, but this recursive function must have parameters */
    /* slides and cycle never change, those are unique for each slide container */
    /* slideIndex will increase during each iteration */
    showSlides(slides, slideIndex, cycle);
};

/* Function is almost same, but now it uses 3 new parameters */
function showSlides(slides, slideIndex, cycle) {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    };
    slides[slideIndex - 1].style.display = "block";
    /* Calling same function, but with new parameters and cycle time */
    setTimeout(function () {
        showSlides(slides, slideIndex, cycle)
    }, cycle);
};



/*
let slideIndex = [1, 1];
let slideId = ["mySlides1", "mySlides2"];
showSlides(1, 0);
//showSlides(1, 1);

function plusSlides(n, idx) {
    showSlides(slideIndex[idx] += n, idx);
}

function showSlides(n, idx) {
    let i;
    let slides = document.getElementsByClassName(slideId[idx]);
    if (n > slides.length) { slideIndex[idx] = 1 }
    if (n < 1) { slideIndex[idx] = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex[idx]++;
    if (slideIndex[idx] > slides.length) {slideIndex[idx] = 1 }
    slides[slideIndex[idx] - 1].style.display = "block";
    setTimeout(showSlides(n, idx), 5000); // Change image every 5 seconds
}
*/