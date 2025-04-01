import React from 'react';
import "../App.css";


const Menu = () => {

return (

<div className='app-container'>
<header>
<img src='/Img/Logo.png' className='img-logo'></img>
<h2>Tía Mari COFFEE</h2>
<nav>
<a href="#menu">Menú</a>
<a href="#cafes">Cafés</a>
<a href="#frappes">Frappes</a>
<a href="#postres">Postres Artesanales</a>
<a href="#contacto">Contacto</a>
</nav>

</header>
<br/>
<br/>
<section id='menu'><main>
<center><h1>Bienvenido</h1>
<h1>❗❗TIA MARI❗❗</h1>
<h1>☕COFFEE☕</h1></center>
</main></section>
<br></br>
<main className="text-center p-6">
<center><p class="texto-destacado">
Disfruta el sabor de nuestros Cafes con el amor de Doña Mari <br />
</p></center>

<br/>

<center>
<img src="/Img/Presentacion.png" className="imagen-pequena" />
</center>


<center> <section>
<h2>
Ofrecemos los mejores cafés con ingredientes seleccionados.
Ven y disfruta de una experiencia única con nuestros frappes, capuccinos y postres caseros.
</h2>
</section></center>
<br/>

<section>

<div>

<section>


<center> <div className="flex justify-center gap-8 flex-wrap max-w-6xl mx-auto">

<section id="cafes">
<h2 className="text-lg">☕ Cafés Especiales</h2>
<div class="menu-item"><h3> Expresso <img src="Img/espresso.jpeg" className="img-espresso"/></h3><dd><h4 class="price">$30.00</h4> <button class="order-btn">Ordenar</button></dd></div>
<div class="menu-item"><h3> Americano <img src="Img/americano.jpg" className="img-americano"/> </h3><dd><h4 class="price">$40.00</h4> <button class="order-btn">Ordenar</button></dd></div>
<div class="menu-item"><h3> Capuccino <img src="Img/capuccino.jpg" className="img-capuccino"/></h3><dd><h4 class="price">$45.00</h4> <button class="order-btn">Ordenar</button></dd></div>
<div class="menu-item"><h3> Latte <img src="Img/latte.jpeg" className="img-latte"/></h3><dd><h4 class="price">$45.00</h4> <button class="order-btn">Ordenar</button></dd></div>
<div class="menu-item"><h3> Mocka <img src="Img/mocka.jpeg" className="img-mocha"/></h3><dd><h4 class="price">$45.00</h4> <button class="order-btn">Ordenar</button></dd></div>
</section>

<section id="frappes">
<h2 className="text-lg">🍹 Especialidad en Frappes</h2>
<div class="menu-item"><h3> Café y caramelo <img src="Img/frappe de cafe y caramelo.jpg" className="img-cafeycaramelo"/></h3><dd><h4 class="price">$70.00</h4> <button class="order-btn">Ordenar</button></dd></div>
<div class="menu-item"><h3> Vainilla <img src="Img/frappe v.jpg" className="img-v"/></h3><dd><h4 class="price">$70.00</h4> <button class="order-btn">Ordenar</button></dd></div>
<div class="menu-item"><h3> Chocolate <img src="Img/frappe chocolate.jpg" className="img-chocolate"/></h3><dd><h4 class="price">$70.00</h4> <button class="order-btn">Ordenar</button></dd></div>
<div class="menu-item"><h3> Fresa con chocolate <img src="Img/frappe fresa con chocolate.avif" className="img-fresa" /> </h3><dd><h4 class="price">$70.00</h4> <button class="order-btn">Ordenar</button></dd></div>
<div class="menu-item"><h3> Nuez <img src="Img/frappe de nuez.jpeg" className="img-nuez"/> </h3><dd><h4 class="price">$70.00</h4> <button class="order-btn">Ordenar</button></dd></div>
<div class="menu-item"><h3> Oreo <img src="Img/frappe de oreo.jpeg" className="img-oreo"/> </h3><dd><h4 class="price">$70.00</h4> <button class="order-btn">Ordenar</button></dd></div>
<div class="menu-item"><h3> Mazapan <img src="Img/frappe de mazapan.avif" className="img-mazapan"/> </h3><dd><h4 class="price">$70.00</h4> <button class="order-btn">Ordenar</button></dd></div>
</section>

<section id="postres">
<center></center><h2 className="text-lg">🍰 Postres Artesanales</h2>
<div class="menu-item"><h3>. Pastel de Chocolate <img src="Img/pastel de chocolate.jpeg" className="img-pasteldechocolate"/> </h3><dd><h4 class="price">$40.00</h4> <button class="order-btn">Ordenar</button></dd></div>
<div class="menu-item"><h3>. Cheesecake de Fresa <img src="Img/Cheesecake de Fresa.jpeg" className="Cheesecake-fresa"/> </h3><dd><h4 class="price">$40.00</h4> <button class="order-btn">Ordenar</button></dd></div>
<div class="menu-item"><h3>. Croissant de Mantequilla <img src="Img/Croissant de Mantequilla.jpg" className="croissant-mantequilla"/> </h3><dd></dd><h4 class="price">$50.00</h4> <button class="order-btn">Ordenar</button></div>
<div class="menu-item"><h3>. Galletas de Avena y Chocolate <img src="Img/Galletas de Avena y Chocolate.jpg" className="Galletas"/></h3><dd><h4 class="price">$30.00</h4> <button class="order-btn">Ordenar</button></dd></div>
<div class="menu-item"><h3>. Pay de limón <img src="Img/pay de limon.png" className="pay-limon"/></h3><dd><h4 class="price">$20.00</h4> <button class="order-btn">Ordenar</button></dd></div>
</section>


<br/>



<center></center><section id="contacto">
<h3 className="text-lg font-bold mt-4">Para Más Información Comunicate Con Nosotros </h3>
<div class="contact-item">
<span class="name">Doña Mari COFFEE</span>



<span class="phone">Tel📱 961-909-0987</span>
<span class="email">✉️ Doña Mari COFFEE@email.com</span>
</div>
<br/>
</section>


<img src='/Img/Logo.png' className='img-final'></img>


</div></center>


</section>

</div>
</section>

</main>
<button
onClick={() => {
let scrollStep = -window.scrollY / 50; // Hace que suba poco a poco
let scrollInterval = setInterval(() => {
if (window.scrollY !== 0) {
window.scrollBy(0, scrollStep);
} else {
clearInterval(scrollInterval);
}
}, 5); // Ajusta la velocidad
}}
className="button-scroll-to-top"
>
↑
</button>

<footer className="bg-gray-800 text-white text-center py-6 mt-6 w-full">
<p>&copy; 2025 Doña Mari COFFEE - Todos los derechos reservados</p>
</footer>
</div>


)

};
export default Menu;
