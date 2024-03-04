
document.getElementById('wordForm').addEventListener('submit', function (event) {
    event.preventDefault();


    const json = document.getElementById('json').value;
    let data = JSON.parse(json);
    console.table(data['sentences']);

    fetch('http://localhost:3006/api/v1/vocab/add-word', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            japaneseWord,
            wordTranslation,
            romaji,
            kana,
            categories,
            level
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success: ', data)
        })
        .catch(error => console.log('Error: ', error))

});
