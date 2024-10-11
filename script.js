let contacts = [];
let contactCounter = 1;

function updateProfile() {
    const newUsername = document.getElementById('newUsername').value;
    const avatarUrl = document.getElementById('avatarUrl').value;

    document.getElementById('usernameLink').textContent = newUsername;
    document.querySelector('.avatar').style.backgroundImage = `url('${avatarUrl}')`;
}

function addContact() {
    const contactName = document.getElementById('contactName').value;
    const contactPhone = document.getElementById('contactPhone').value;

    if (contactName && contactPhone) {
        contacts.push({ name: contactName, phone: contactPhone });
        displayContacts();
        clearContactInputs();
    } else {
        alert('กรุณากรอกชื่อและเบอร์โทร');
    }
}

function displayContacts() {
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = '';

    contacts.forEach((contact, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${contact.name}, ${contact.phone}`;
        contactList.appendChild(li);
    });
}

function clearContactInputs() {
    document.getElementById('contactName').value = '';
    document.getElementById('contactPhone').value = '';
}

function exportContacts() {
    alert('โหลดไม่ได้');
}
