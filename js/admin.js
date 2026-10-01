// Al cargar la página, verificamos si el usuario viene de un enlace de recuperación de Supabase
window.addEventListener('DOMContentLoaded', async () => {
    const hash = window.location.hash;
    if (hash && hash.includes('type=recovery')) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('update-password-screen').style.display = 'block';
    }
});

async function loginWithSupabase() {
    const email = document.getElementById('admin-email').value;
    const password = document.getElementById('admin-pass').value;
    const msgBox = document.getElementById('auth-msg');

    msgBox.style.display = 'none';

    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
        msgBox.style.color = "red";
        msgBox.innerText = "Correo o contraseña incorrectos";
        msgBox.style.display = 'block';
    } else {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('admin-panel-content').style.display = 'block';
        renderAdminPanel();
    }
}

async function recoverPassword() {
    const email = document.getElementById('admin-email').value;
    const msgBox = document.getElementById('auth-msg');

    if (!email) {
        msgBox.style.color = "red";
        msgBox.innerText = "Por favor, escribe tu correo arriba primero.";
        msgBox.style.display = 'block';
        return;
    }

    const { data, error } = await supabaseClient.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.href,
    });

    if (error) {
        msgBox.style.color = "red";
        if (error.message.includes("rate limit")) {
            msgBox.innerText = "Demasiados intentos. Espera unos minutos antes de reintentar.";
        } else {
            msgBox.innerText = "Error: " + error.message;
        }
        msgBox.style.display = 'block';
    } else {
        msgBox.style.color = "green";
        msgBox.innerText = "¡Correo enviado! Revisa tu bandeja de entrada.";
        msgBox.style.display = 'block';
    }
}

async function updatePassword() {
    const newPassword = document.getElementById('new-admin-pass').value;
    const msgBox = document.getElementById('update-msg');

    if (!newPassword || newPassword.length < 6) {
        msgBox.style.color = "red";
        msgBox.innerText = "La contraseña debe tener al menos 6 caracteres.";
        msgBox.style.display = 'block';
        return;
    }

    const { data, error } = await supabaseClient.auth.updateUser({
        password: newPassword
    });

    if (error) {
        msgBox.style.color = "red";
        msgBox.innerText = "Error al actualizar: " + error.message;
        msgBox.style.display = 'block';
    } else {
        msgBox.style.color = "green";
        msgBox.innerText = "¡Contraseña actualizada con éxito! Entrando al panel...";
        msgBox.style.display = 'block';
        
        setTimeout(() => {
            document.getElementById('update-password-screen').style.display = 'none';
            document.getElementById('admin-panel-content').style.display = 'block';
            renderAdminPanel();
        }, 1500);
    }
}

function renderAdminPanel() {
    const container = document.getElementById('admin-sections-container');
    container.innerHTML = '';

    for (const [catKey, items] of Object.entries(menuData)) {
        let sectionDiv = document.createElement('div');
        sectionDiv.innerHTML = `<h3 style="margin-top: 20px; color: #6e4e2b;">Categoría: ${catKey.toUpperCase()}</h3>`;
        
        let table = document.createElement('table');
        table.className = 'admin-table';
        table.innerHTML = `
            <tr>
                <th>Nombre del Plato</th>
                <th>Precio ($)</th>
                <th>Ruta de Imagen (URL o local)</th>
            </tr>
        `;

        items.forEach((item, index) => {
            let tr = document.createElement('tr');
            tr.innerHTML = `
                <td><input type="text" class="admin-input" id="name-${catKey}-${index}" value="${item.name}"></td>
                <td><input type="number" class="admin-input" id="price-${catKey}-${index}" value="${item.price}"></td>
                <td><input type="text" class="admin-input" id="img-${catKey}-${index}" value="${item.img || ''}"></td>
            `;
            table.appendChild(tr);
        });

        sectionDiv.appendChild(table);
        container.appendChild(sectionDiv);
    }
}

function saveChanges() {
    for (const [catKey, items] of Object.entries(menuData)) {
        items.forEach((item, index) => {
            const nameInput = document.getElementById(`name-${catKey}-${index}`);
            const priceInput = document.getElementById(`price-${catKey}-${index}`);
            const imgInput = document.getElementById(`img-${catKey}-${index}`);

            if (nameInput) item.name = nameInput.value;
            if (priceInput) item.price = Number(priceInput.value);
            if (imgInput) item.img = imgInput.value;
        });
    }

    localStorage.setItem('restaurant_menu_data', JSON.stringify(menuData));
    alert("¡Cambios guardados con éxito! Ya se reflejan en la carta digital.");
}