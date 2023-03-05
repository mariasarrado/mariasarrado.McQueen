const peticion = function (url) {
    return fetch(url, {
      method: "GET",
      mode: "cors",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error petición");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  
  
  const traducir = (idioma) => {
    console.log(idioma);
    if (idioma === "es") {
      peticion("./API/es.home.json")
        .then((objeto) => {
          console.log(objeto);
          let elemento = document.querySelectorAll("[data-translate]");
          elemento.forEach(e => {
            let c = e.getAttribute("data-translate");
            e.innerHTML = objeto[c];
          });
          
        })
        .catch((error) => {
          console.log(error);
        });
        
    } else if (idioma === "en") {
      peticion("./API/en.home.json")
        .then((objeto) => {
          console.log(objeto);
          let elemento = document.querySelectorAll("[data-translate]");
          elemento.forEach(e => {
            let c = e.getAttribute("data-translate");
            e.innerHTML= objeto[c];
          });
         
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };