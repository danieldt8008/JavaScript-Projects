
var slideIndex = 1;
showSlides(slideIndex); //call slideShow fundction @ index 1

function plusSlides(n) {
    showSlides(slideIndex += n);  //show previous or next slide depengin on user arrow select
}

function currentSlide(n) {  //show slide corresponding to button click
    showSlides(slideIndex = n);
}

function showSlides(n) {
    // console.log("this is n", n, "slides.lentgh: ", slides.length);  //debug 
    var i;
    var slides = document.getElementsByClassName("mySlides"); //method returns array of slides
    var dots = document.getElementsByClassName("dot");  //method returns array of "dots"
    if (n > slides.length) { slideIndex = 1 }    // Start at the beginning image 
    if (n < 1) { slideIndex = slides.length }  // go to the last image
    for (i = 0; i < slides.length; i++) {  //turn off all images
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");  // deactivate the dots
    }
    console.log(slides.length, slideIndex, [slideIndex - 1]);  //debug
    slides[slideIndex - 1].style.display = "block";  //display given image
    dots[slideIndex - 1].className += " active";   //turn on active dot
}
