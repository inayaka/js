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
    showSlide(0)
    console.log(images)
    let currentSlide = 0;
    function changeSlide( side ){
      if (side == 'right'){
          if(currentSlide > images.length){

          }
        currentSlide++
      }else{
        currentSlide--
      }
      showSlide(currentSlide)
    }

    document.querySelector(".left").addEventListener("click", () =>{
      changeSlide('left')
    })
    document.querySelector(".right").addEventListener("click", () =>{
      changeSlide('right')
    })
    
   
    
    // console.log(images[2])