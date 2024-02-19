                    
   document.getElementById("goToTicketCounter").addEventListener("click", function() {
    
    let targetSection = document.getElementById("ticket-counter");
    let targetSectionPosition = targetSection.offsetTop;

    
    window.scrollTo({
        top: targetSectionPosition,
        behavior: 'smooth' 
    });
});



var headings = document.getElementsByClassName("selectSeat");


for (let integer = 0; integer < headings.length; integer++) {
    headings[integer].addEventListener("click", function() {
        let selectedHeadings = document.querySelectorAll('.selectSeat.selected');
        
        
        if (selectedHeadings.length >= 4 && !this.classList.contains("selected")) {
            alert("|| ৪ সিট এর বেশি নয়  ২ টি হলে ভালো হয় ||");
            return;
        }
        
        
        this.classList.add("selected");
        
        
        this.style.color = this.classList.contains("selected") ? "white" : "";
        this.style.backgroundColor = this.classList.contains("selected") ? "#1DD100" : "";
        this.style.width = this.classList.contains("selected") ? "90px" : "";

    });
}

        
        // Toggle selection on the clicked heading
        this.classList.toggle("selected");
    



