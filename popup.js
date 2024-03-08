
document.getElementById('wordForm').addEventListener('submit', function (event) {
    event.preventDefault();


    const container = document.getElementById('message');
    const message = document.createElement('p');
    message.style.fontWeight = "bold";

    const json = document.getElementById('json').value;
    let data = json ? JSON.parse(json) : null;

    if (data) {
        fetch('http://localhost:3006/api/v1/vocab/add-word', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data
            })
        })
            .then(response => response.json())
            .then(data => {
                message.textContent = "Mot ajouté avec succés!";
                message.style.color = 'green';
                console.log('Success: ', data);
            })
            .catch(error => {
                message.textContent = "Une erreur s'est produite.";
                message.style.color = 'red';
                console.log('Error: ', error);
            })
            .finally(() => {
                container.appendChild(message);
                setTimeout(() => {
                    container.removeChild(message);
                }, 3000);
            })
    } else {
        message.textContent = "Veuillez ajouter un mot.";
        message.style.color = 'orange';
        container.appendChild(message);
        setTimeout(() => {
            container.removeChild(message);
        }, 3000);
    }
});

