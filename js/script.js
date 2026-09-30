const defaultMenuData = {
    "dia-principales": [
        { name: "Pollo al horno", price: 6000, desc: "Con puré de papas en plato blanco", img: "assets/Platos Principales/Pollo al horno.png" },
        { name: "Filete de pollo", price: 6500, desc: "Plato plano", img: "assets/Platos Principales/Filete de pollo.png" },
        { name: "Cazuela de pollo", price: 6500, desc: "En plato de greda tradicional", img: "assets/Platos Principales/Cazuela de pollo.png" },
        { name: "Chuleta", price: 6000, desc: "Plato plano", img: "assets/Platos Principales/Chuleta.png" },
        { name: "Costillar", price: 7000, desc: "En plato fondo blanco con ensalada chilena", img: "assets/Platos Principales/Costillar.png" },
        { name: "Prietas", price: 6000, desc: "Plato plano", img: "assets/Platos Principales/Prietas.png" },
        { name: "Pastel de choclo", price: 7500, desc: "Solo en plato de greda", img: "assets/Platos Principales/Pastel de choclo.png" },
        { name: "Guatitas jardinera", price: 6500, desc: "Plato de fondo", img: "assets/Platos Principales/Guatitas jardinera.png" },
        { name: "Lazaña boloñesa", price: 7000, desc: "Solo en plato bajo blanco", img: "assets/Platos Principales/Lazaña boloñesa.png" },
        { name: "Mariscal caliente", price: 8000, desc: "En plato de greda tradicional", img: "assets/Platos Principales/Mariscal caliente.png" },
        { name: "Pescado frito", price: 7000, desc: "Plato plano", img: "assets/Platos Principales/Pescado frito.png" },
        { name: "Pollo crispy", price: 7000, desc: "Plato plano", img: "assets/Platos Principales/Pollo crispy.png" },
        { name: "Pollo al coñac", price: 7500, desc: "Plato de fondo", img: "assets/Platos Principales/Pollo al coñac.png" }
    ],
    "dia-especiales": [
        { name: "Bistec a lo pobre", price: 8500, desc: "Plato de fondo grande", img: "assets/Especiales/Bistec a lo pobre.png" },
        { name: "Chorrillana", price: 9000, desc: "Plato de greda o fuente", img: "assets/Especiales/Chorrillana .png" },
        { name: "Salmón a la plancha", price: 9000, desc: "Plato plano", img: "assets/Especiales/Salmón a la plancha.png" },
        { name: "Lomo a lo pobre", price: 9000, desc: "Plato de fondo grande", img: "assets/Especiales/Lomo a lo pobre.png" }
    ],
    "picar-sandwiches": [
        { name: "Ass grande", price: 2500, img: "assets/Platos Principales/Pescado frito.png" },
        { name: "Ass chico", price: 2000, img: "assets/Platos Principales/Pescado frito.png" },
        { name: "Churrasco + Express", price: 5000, img: "assets/Platos Principales/Pollo al horno.png" },
        { name: "Churrasco italiano o luco", price: 4000, img: "assets/Platos Principales/Pollo al horno.png" },
        { name: "Mechada italiana o queso", price: 4000, img: "assets/Platos Principales/Costillar.png" },
        { name: "Ave mayo", price: 4000, img: "assets/Platos Principales/Pollo al horno.png" }
    ],
    "picar-completos": [
        { name: "Completo o italiano pequeño", price: 1500, img: "assets/Platos Principales/Pastel de choclo.png" },
        { name: "Completo o italiano grande", price: 2000, img: "assets/Platos Principales/Pastel de choclo.png" }
    ],
    "picar-fritos": [
        { name: "Salchipapa", price: 3500, img: "assets/Platos Principales/Pescado frito.png" },
        { name: "Papa chica", price: 3000, img: "assets/Platos Principales/Pescado frito.png" },
        { name: "Chorrillana x2", price: 7000, img: "assets/Platos Principales/Cazuela de pollo.png" },
        { name: "Empanada frita (2da)", price: 2000, img: "assets/Platos Principales/Pastel de choclo.png" }
    ],
    "tomar": [
        { name: "Agua mineral", price: 1500 },
        { name: "Bebidas 1.25L", price: 3000 },
        { name: "Bebidas express", price: 1500 },
        { name: "Jugo natural", price: 2000 },
        { name: "Cerveza individual", price: 4000 },
        { name: "Cerveza litro", price: 4000 },
        { name: "Michelada individual", price: 3500 },
        { name: "Michelada litro", price: 2500 },
        { name: "Pisco sour", price: 5000 },
        { name: "Vino botellín 187ml", price: 3000 },
        { name: "Vino botella 750ml", price: 6000 },
        { name: "Vino / 50ml", price: 6000 },
        { name: "Mojito", price: 4500 },
        { name: "Tropical gin", price: 4500 },
        { name: "Gin Tonic", price: 4500 },
        { name: "Daiquiri", price: 4000 },
        { name: "Vodka Tonik", price: 4000 },
        { name: "Vodka naranja", price: 3500 },
        { name: "Combinado pisco capel", price: 3000 },
        { name: "Combinado pisco Mistral", price: 3500 },
        { name: "Combinado ron", price: 3000 },
        { name: "Combinado whisky", price: 4000 },
        { name: "Borgoña o ponche 200cc", price: 1500 },
        { name: "Borgoña o ponche 400cc", price: 2500 }
    ],
    "bajativos": [
        { name: "Bajativos surtidos", price: 1500 }
    ]
};

let menuData = JSON.parse(localStorage.getItem('restaurant_menu_data')) || defaultMenuData;

function renderMenu() {
    for (const [key, items] of Object.entries(menuData)) {
        const container = document.getElementById(`grid-${key}`);
        if (!container) continue;

        container.innerHTML = '';
        items.forEach((item, index) => {
            const itemEl = document.createElement('div');
            itemEl.className = 'menu-item';
            
            let imgSource = item.img;
            if (!imgSource || imgSource.trim() === "") {
                if (defaultMenuData[key] && defaultMenuData[key][index]) {
                    imgSource = defaultMenuData[key][index].img;
                }
            }

            let imageHtml = imgSource ? `<img src="${imgSource}" alt="${item.name}" class="item-thumb">` : '';
            let descHtml = item.desc ? `<span class="item-desc">${item.desc}</span>` : '';

            itemEl.innerHTML = `
                ${imageHtml}
                <div class="item-info">
                    <span class="item-name">${item.name}</span>
                    ${descHtml}
                </div>
                <span class="item-price">$${item.price.toLocaleString()}</span>
            `;
            container.appendChild(itemEl);
        });
    }
}

function filterCategory(categoryId) {
    document.querySelectorAll('.menu-section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

    document.getElementById(categoryId).classList.add('active');
    event.currentTarget.classList.add('active');
}

window.onload = function() {
    if (typeof renderMenu === 'function' && document.getElementById('grid-dia-principales')) {
        renderMenu();
    }
};