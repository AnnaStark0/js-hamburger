(document.querySelector(".fa-bars")).addEventListener("click", 
    function() {
        document.querySelector(".hamburger-menu").style.display = "block";
    }
);

(document.querySelector(".fa-times")).addEventListener("click", 
    function() {
        document.querySelector(".hamburger-menu").style.display = "none";
    }
);