let menuData = {
    "menu-dia": {
        title: "Menú del Día y Especiales",
        subcategories: [
            {
                subtitle: "Platos Principales",
                items: [
                    { name: "Pollo al horno", price: 6000, desc: "Con puré de papas en plato blanco", img: "assets/Platos Principales/Pollo al horno.webp" },
                    { name: "Filete de pollo", price: 6500, desc: "Plato plano", img: "assets/Platos Principales/Filete de pollo.webp" },
                    { name: "Cazuela de pollo", price: 6500, desc: "En plato de greda tradicional", img: "assets/Platos Principales/Cazuela de pollo.webp" },
                    { name: "Chuleta", price: 6000, desc: "Plato plano", img: "assets/Platos Principales/Chuleta.webp" },
                    { name: "Costillar", price: 7000, desc: "En plato fondo blanco con ensalada chilena", img: "assets/Platos Principales/Costillar.webp" },
                    { name: "Prietas", price: 6000, desc: "Plato plano", img: "assets/Platos Principales/Prietas.webp" },
                    { name: "Pastel de choclo", price: 7500, desc: "Solo en plato de greda", img: "assets/Platos Principales/Pastel de choclo.webp" },
                    { name: "Guatitas jardinera", price: 6500, desc: "Plato de fondo", img: "assets/Platos Principales/Guatitas jardinera.webp" },
                    { name: "Lazaña boloñesa", price: 7000, desc: "Solo en plato bajo blanco", img: "assets/Platos Principales/Lazaña boloñesa.webp" },
                    { name: "Mariscal caliente", price: 8000, desc: "En plato de greda tradicional", img: "assets/Platos Principales/Mariscal caliente.webp" },
                    { name: "Pescado frito", price: 7000, desc: "Plato plano", img: "assets/Platos Principales/Pescado frito.webp" },
                    { name: "Pollo crispy", price: 7000, desc: "Plato plano", img: "assets/Platos Principales/Pollo crispy.webp" },
                    { name: "Pollo al coñac", price: 7500, desc: "Plato de fondo", img: "assets/Platos Principales/Pollo al coñac.webp" }
                ]
            },
            {
                subtitle: "Especiales",
                items: [
                    { name: "Bistec a lo pobre", price: 8500, desc: "Plato de fondo grande", img: "assets/Especiales/Bistec a lo pobre.webp" },
                    { name: "Chorrillana", price: 9000, desc: "Plato de greda o fuente", img: "assets/Especiales/Chorrillana .webp" },
                    { name: "Salmón a la plancha", price: 9000, desc: "Plato plano", img: "assets/Especiales/Salmón a la plancha.webp" },
                    { name: "Lomo a lo pobre", price: 9000, desc: "Plato de fondo grande", img: "assets/Especiales/Lomo a lo pobre.webp" }
                ]
            }
        ]
    },
    "picar": {
        title: "Para Picar",
        subcategories: [
            {
                subtitle: "Sandwiches",
                items: [
                    { name: "Ass grande", price: 2500, desc: "", img: "assets/img_logo/logo.webp" },
                    { name: "Ass chico", price: 2000, desc: "", img: "assets/img_logo/logo.webp" },
                    { name: "Churrasco + Express", price: 5000, desc: "", img: "assets/img_logo/logo.webp" },
                    { name: "Churrasco italiano o luco", price: 4000, desc: "", img: "assets/img_logo/logo.webp" },
                    { name: "Mechada italiana o queso", price: 4000, desc: "", img: "assets/img_logo/logo.webp" },
                    { name: "Ave mayo", price: 4000, desc: "", img: "assets/img_logo/logo.webp" }
                ]
            },
            {
                subtitle: "Completos",
                items: [
                    { name: "Completo o italiano pequeño", price: 1500, desc: "", img: "assets/img_logo/logo.webp" },
                    { name: "Completo o italiano grande", price: 2000, desc: "", img: "assets/img_logo/logo.webp" }
                ]
            },
            {
                subtitle: "Fritos",
                items: [
                    { name: "Salchipapa", price: 3500, desc: "", img: "assets/img_logo/logo.webp" },
                    { name: "Papa chica", price: 3000, desc: "", img: "assets/img_logo/logo.webp" },
                    { name: "Chorrillana x2", price: 7000, desc: "", img: "assets/img_logo/logo.webp" },
                    { name: "Empanada frita (2da)", price: 2000, desc: "", img: "assets/img_logo/logo.webp" }
                ]
            }
        ]
    },
    "tomar": {
        title: "Para Tomar",
        subcategories: [
            {
                subtitle: "Bebestibles",
                items: [
                    { name: "Agua mineral", price: 1500, desc: "", img: "assets/img_logo/logo.webp" },
                    { name: "Bebidas 1.25L", price: 3000, desc: "", img: "assets/img_logo/logo.webp" },
                    { name: "Bebidas express", price: 1500, desc: "", img: "assets/img_logo/logo.webp" },
                    { name: "Jugo natural", price: 2000, desc: "", img: "assets/img_logo/logo.webp" },
                    { name: "Cerveza individual", price: 4000, desc: "", img: "assets/img_logo/logo.webp" },
                    { name: "Cerveza litro", price: 4000, desc: "", img: "assets/img_logo/logo.webp" },
                    { name: "Michelada individual", price: 3500, desc: "", img: "assets/img_logo/logo.webp" },
                    { name: "Michelada litro", price: 2500, desc: "", img: "assets/img_logo/logo.webp" },
                    { name: "Pisco sour", price: 5000, desc: "", img: "assets/img_logo/logo.webp" },
                    { name: "Vino botellín 187ml", price: 3000, desc: "", img: "assets/img_logo/logo.webp" },
                    { name: "Vino botella 750ml", price: 6000, desc: "", img: "assets/img_logo/logo.webp" },
                    { name: "Vino / 50ml", price: 6000, desc: "", img: "assets/img_logo/logo.webp" },
                    { name: "Mojito", price: 4500, desc: "", img: "assets/img_logo/logo.webp" },
                    { name: "Tropical gin", price: 4500, desc: "", img: "assets/img_logo/logo.webp" },
                    { name: "Gin Tonic", price: 4500, desc: "", img: "assets/img_logo/logo.webp" },
                    { name: "Daiquiri", price: 4000, desc: "", img: "assets/img_logo/logo.webp" },
                    { name: "Vodka Tonik", price: 4000, desc: "", img: "assets/img_logo/logo.webp" },
                    { name: "Vodka naranja", price: 3500, desc: "", img: "assets/img_logo/logo.webp" },
                    { name: "Combinado pisco capel", price: 3000, desc: "", img: "assets/img_logo/logo.webp" },
                    { name: "Combinado pisco Mistral", price: 3500, desc: "", img: "assets/img_logo/logo.webp" },
                    { name: "Combinado ron", price: 3000, desc: "", img: "assets/img_logo/logo.webp" },
                    { name: "Combinado whisky", price: 4000, desc: "", img: "assets/img_logo/logo.webp" },
                    { name: "Borgoña o ponche 200cc", price: 1500, desc: "", img: "assets/img_logo/logo.webp" },
                    { name: "Borgoña o ponche 400cc", price: 2500, desc: "", img: "assets/img_logo/logo.webp" }
                ]
            }
        ]
    },
    "bajativos": {
        title: "Bajativos",
        subcategories: [
            {
                subtitle: "Bajativos",
                items: [
                    { name: "Bajativos surtidos", price: 1500, desc: "", img: "assets/img_logo/logo.webp" }
                ]
            }
        ]
    }
};

function loadMenuData() {
    const savedData = localStorage.getItem('restaurant_menu_data');
    if (savedData) {
        try {
            menuData = JSON.parse(savedData);
        } catch (e) {
            console.error("Error al cargar datos locales:", e);
        }
    }
}

function renderCustomerMenu() {
    loadMenuData();
    
    for (const [catKey, category] of Object.entries(menuData)) {
        const sectionEl = document.getElementById(catKey);
        if (!sectionEl) continue;

        let htmlContent = `<h2><i class="fa-solid fa-utensils"></i> ${category.title}</h2>`;

        category.subcategories.forEach(sub => {
            htmlContent += `
                <div class="subcategory">
                    <h3>${sub.subtitle}</h3>
                    <div class="items-grid">
            `;

            sub.items.forEach(item => {
                htmlContent += `
                    <div class="menu-item">
                        <img src="${item.img || 'assets/img_logo/logo.webp'}" alt="${item.name}" class="item-thumb" onerror="this.src='assets/img_logo/logo.webp'">
                        <div class="item-info">
                            <span class="item-name">${item.name}</span>
                            <span class="item-desc">${item.desc || ''}</span>
                        </div>
                        <span class="item-price">$${Number(item.price).toLocaleString('es-CL')}</span>
                    </div>
                `;
            });

            htmlContent += `</div></div>`;
        });

        sectionEl.innerHTML = htmlContent;
    }
}

function openCategory(evt, categoryName) {
    const sections = document.getElementsByClassName("menu-section");
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove("active");
    }

    const buttons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    const targetSection = document.getElementById(categoryName);
    if (targetSection) {
        targetSection.classList.add("active");
    }
    
    if (evt && evt.currentTarget) {
        evt.currentTarget.classList.add("active");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadMenuData();
    renderCustomerMenu();
});