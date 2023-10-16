# VALMA - salud holística

## Acerca de Valma

Este proyecto trata acerca de la importancia de las propiedades medicinales de las plantas. El objetivo es poder aprovechar estas propiedades cómodamente en tu hogar. En nuestro blog, cubrimos una amplia gama de temas relacionados con la salud y el bienestar. Desde infusiones para calmar la ansiedad hasta ungüentos para aliviar dolores musculares, nuestro contenido te brinda alternativas naturales y efectivas a enfoques convencionales de la medicina.

## Tecnologías Utilizadas

<br>
<div align="center">
	<code><img height="70" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML"/></code>
	<code><img height="70" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS"/></code>
	<code><img height="70" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript"/></code>
</div><br><br>

En este proyecto, hemos empleado estas tres tecnologías fundamentales para asegurar un funcionamiento eficiente. Utilizamos JavaScript para validar el formulario, CSS para estilizar la página y garantizar su adaptabilidad a diferentes dispositivos mediante un diseño responsive. De esta manera, te ofrecemos una experiencia de usuario óptima, permitiendo la visualización y la interacción sin problemas en cualquier dispositivo.

Por otro lado, se utilizó una API publica para renderizar usuarios random y mostrarlos en la página. Esto simulará los usuarios que consumen y recomiendan nuestro blog.

## Estructura del sitio

- La estructura del sitio está organizada en secciones con identificadores únicos, lo que facilita la navegación y la referencia mediante enlaces internos.
- Secciones como "últimos artículos," "nosotros", "opiniones," "formulario de contacto," y "usuarios" están definidas con identificadores (`<section>`).
- El código HTML utiliza etiquetas como `<nav>, <a>, <h1>, <h2>, <h3>, <p>, <ul>, <li>, <form>`, y más para estructurar el contenido.

## Diseño y estilo

- El estilo visual del sitio es limpio y natural, con colores predominantes como el verde y el blanco que evocan la naturaleza y la salud.
- Se utiliza una combinación de fuentes serif y sans-serif para mejorar la legibilidad.
- La página de inicio presenta una imagen de encabezado con una tipografía llamativa para destacar el nombre "Valma" y un lema que enfatiza la "Salud Holística".
- Se han aplicado transiciones y efectos de animación para mejorar la experiencia del usuario al interactuar con las tarjetas de artículos y otras partes del sitio.
- El diseño es receptivo en el index, ya que se han utilizado media queries para adaptar el diseño a pantallas más pequeñas.
- Se utiliza un archivo externo de fuentes (https://fonts.googleapis.com) para estilizar el texto.

## Contenido y funcionalidades

- El sitio incluye artículos sobre hierbas, medicina herbal e infusiones solares, información sobre "Nosotros", testimonios, clientes nuestros y un formulario de contacto funcional.
- Las tarjetas de artículos (`<div class="card">`) muestran imágenes, títulos y enlaces a los artículos relacionados.
- En la sección de clientes nuestros, se renderizan tarjetas con informacion de usuarios que utilizan nuestro blog y se han informado con nosotros. Esta información es dinámica ya que se consumió una API externa para obtener información relevante de usuarios para luego poder renderizar la misma en pantalla.
- El formulario de contacto (`<form>`) incluye campos para nombre, apellido, correo electrónico y consultas, así como validaciones de JavaScript (validators.js) para garantizar la entrada de datos correcta.
- Se utilizan íconos de fuentes (`<i>`) para representar estrellas en las opiniones.
- En las sub páginas hemos incluido imágenes relacionadas con el contenido para ilustrar y mejorar la comprensión.
- Hemos utilizado en dos sub páginas iFrames con videos de YouTube para proporcionar información adicional y visual a los visitantes.
- Hemos utilizado una “publicidad” en una de las subpáginas que te lleva al sitio para comprar el producto.
