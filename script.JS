function showAddressForm(button) {
    const form = button.nextElementSibling;
    form.style.display = form.style.display === 'block' ? 'none' : 'block';
  }
  
  function sendOrder(button, productName, price) {
    const form = button.parentElement;
    const name = form.querySelector('.name-input').value.trim();
    const phone = form.querySelector('.phone-input').value.trim();
    const phone2 = form.querySelector('.second-phone-input').value.trim();
    const address = form.querySelector('.address-input').value.trim();
    const landmark = form.querySelector('.landmark-input').value.trim();
    const quantity = form.querySelector('.quantity-input').value.trim();
    const sizeInput = form.querySelector('.size-input');
    const size = sizeInput ? sizeInput.value.trim() : '';
  
    // ✅ Validate Required Fields
    if (!name || !phone || !quantity || !address) {
      alert("Please fill in Name, Phone, Address, and Quantity before placing the order.");
      return;
    }
  
    const total = price * quantity;
  
    const message = `*Order Details:*\n\n*Product*: ${productName}\n*Price*: Rs. ${price}\n*Quantity*: ${quantity}\n*Total*: Rs. ${total}\n\n*Name*: ${name}\n*Phone*: ${phone}\n*Alt Phone*: ${phone2}\n*Address*: ${address}\n*Landmark*: ${landmark}${size ? `\n*Size*: ${size}` : ''}\n\n*Payment Method:* Cash on Delivery`;
  
    const whatsappLink = `https://wa.me/923291504030?text=${encodeURIComponent(message)}`;
    console.log(whatsappLink); // For debug
    window.open(whatsappLink, '_blank');
  
    const confirmationBox = form.querySelector('.confirmation-message');
    confirmationBox.style.display = 'block';
    confirmationBox.innerHTML = `
      <strong>✅ Order Confirmed!</strong><br>
      <b>Product:</b> ${productName}<br>
      <b>Quantity:</b> ${quantity}<br>
      <b>Total:</b> Rs. ${total}<br><br>
      Your order will reach you in 3 to 6 days.<br>
      Thank you for shopping with us! Please visit again. 💖
    `;
  }
  
  // Filter Products (1st wala)
  function filterProducts(category) {
    const allProducts = document.querySelectorAll('.product');
    allProducts.forEach(product => {
      const match = category === 'all' || product.dataset.category === category;
      product.style.display = match ? 'block' : 'none';
    });
  }
  
  // Toggle Privacy
  function togglePrivacy() {
    const policy = document.getElementById('privacy-policy');
    policy.style.display = policy.style.display === 'block' ? 'none' : 'block';
  }
  
  // Filter Products (2nd wala)
  function filterProducts(category) {
    const products = document.querySelectorAll('.product');
    let matchFound = false;
  
    products.forEach(product => {
      const productCategory = product.getAttribute('data-category');
      if (category === 'all' || productCategory === category) {
        product.style.display = 'block';
        matchFound = true;
      } else {
        product.style.display = 'none';
      }
    });
  
    document.getElementById('no-results').style.display = matchFound ? 'none' : 'block';
  }
  
  // Slider Functions
  function prevSlide(btn) {
    const slides = btn.closest('.slider').querySelectorAll('.slide');
    let index = [...slides].findIndex(slide => slide.classList.contains('active'));
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
  }
  
  function nextSlide(btn) {
    const slides = btn.closest('.slider').querySelectorAll('.slide');
    let index = [...slides].findIndex(slide => slide.classList.contains('active'));
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }
  
  // Search bar
  document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.createElement('input');
    searchInput.placeholder = 'Search Product...';
    searchInput.style.margin = '20px auto';
    searchInput.style.display = 'block';
    searchInput.style.padding = '10px';
    searchInput.style.width = '90%';
    searchInput.style.maxWidth = '400px';
  
    document.querySelector('header').appendChild(searchInput);
  
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      const products = document.querySelectorAll('.product');
      let match = false;
  
      products.forEach(product => {
        const name = product.querySelector('h3').textContent.toLowerCase();
        if (name.includes(query)) {
          product.style.display = 'block';
          match = true;
        } else {
          product.style.display = 'none';
        }
      });
  
      document.getElementById('no-results').style.display = match ? 'none' : 'block';
    });
  });
  
  // <!-- Typing Script -->
const message = "Welcome to samo1596 – Stylish Shopping Starts Here! ✨";
let index = 0;

function typeWriter() {
  if (index < message.length) {
    document.getElementById("welcome-text").innerHTML += message.charAt(index);
    index++;
    setTimeout(typeWriter, 60);
  }
}

document.addEventListener('DOMContentLoaded', typeWriter);



    //  TOGGLEMENU
  function toggleHeaderMenu() {
    const menu = document.getElementById('headerMenu');
    menu.classList.toggle('active');
  }
