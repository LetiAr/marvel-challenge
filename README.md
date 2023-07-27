# React: Marvel-Challenge

## Introducción

Este Proyecto se basa en un "Marvel Searcher" que nos permite poder buscar los diferentes personajes de Marvel como así también buscar los comics relacionados a dichos personajes.
Una vez realizada la búsqueda se mostrarán  los resultados en forma de Cards con la imagen y nombre del personaje en cuestión.
Al clickear una card nos mostrará un detalle donde se puede apreciar el listado de los comics asociados al personaje que aparece en dicha card, y a su vez si hacemos click en cualquiera de los comics de esa lista nos va a redirigir hacia la página de Marvel que nos ofrecerá un detalle del comic clickeado.
Así mismo cada card de personaje puede guardarse en un listado de favoritos haciendo click en la estrella que se encuentra ubicada en la esquina superior derecha.


## Clonar Repositorio

Primero abriré una terminal de comandos (cmd).
Luego hay que ubicarse en la carpeta donde yo quiero clonar este repositorio usando el comando "cd (nombre de la carpeta)".
Me dirijo a GitHub.com y procedo a copiar la url del repositorio (https://github.com/LetiAr/marvel-challenge.git).
Regreso a la terminal y ejecuto el comando "git clone https://github.com/LetiAr/marvel-challenge.git" y presiono "enter".
La terminal me mostrará que los archivos del repositorio ya fueron descargados en la carpeta que incialmente escogí para clonar el repositorio.
Abro Visual Code y desde allí abro la carpeta donde acabo de clonar el repositorio.
Ahora bien, es muy importante que para que el proyecto funcione en mi equipo proceda a ejecutar el comando "npm install" desde la terminal, ya que esto permitirá que se instalen todas las librerías que he utilizado en mi repositorio (axios, react-router-dom, react-icons, styled-components).
Esperamos unos minutos a que termine la instalación para el correcto funcionamiento del proyecto.
Podemos corroborar el paso anterior observando si se creó la carpeta "node_modules".
Para comprobar que el proyecto esta funcionando correctamente se debe ejecutar el comando "npm run start".
Y automaticamente veremos que la aplicación se ejecuta en localHost puerto 3000.
