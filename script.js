const images = [         // tablica obiektów
      {
        name: "Bałtyk ",
        src: "1.webp"       
      },
      {
        name: "Moon",
        src: "2.webp"       
      },
      {
        name: "Zachód słońca",
        src: "3.webp"       
      }
    ]


    function showSlide(slideNr){
      console.log(images[slideNr])
    
      const img = document.querySelector(".carousel .image")
      img.src = "img/"+images[slideNr].src
      img.alt = images[slideNr].name
    }
    
    showSlide(2)