// function protrait()
// {
//     const image = document.querySelector(".mission-image");

//     if (window.matchMedia("(min-aspect-ratio: 3/4)").matches)
//     {
//         image.setAttribute("src" , "Christmas/gifts.jpg" );
//     }
//     else
//     {
//         image.setAttribute("src" , "Christmas/gifts1.jpg" );
//     }
// }

// window.addEventListener("resize", protrait);

// protrait();

  // Function to change image source based on window size
  function changeImageBasedOnSize() {
    var image = document.querySelector('.mission-image');
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // Check if the window is in portrait orientation
    if (windowHeight > windowWidth) {
      image.src = "Christmas/gifts1.jpg"; // Change the source to the portrait image
      image.style.height = "100%";
    } else {
      image.src = "Christmas/gifts.jpg"; // Use the default image for landscape orientation
    }
  }

  // Attach the function to the window resize event
  window.addEventListener('resize', changeImageBasedOnSize);

  // Call the function on page load to set the initial image
  changeImageBasedOnSize();

const button = document.getElementById(`button`);
button.addEventListener("click", changePage);

function changePage()
{
    alert("You will be redirected to the next Page shortly. Hit \"Ok\" to continue.")
    window.location.href = "empty.html"; //It will be redirected to the next page
}