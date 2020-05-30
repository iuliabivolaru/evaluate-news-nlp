function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    Client.checkForName(formText);

    const postDataToAnalyze = async (url = '', data = {}) => {
        const response = await fetch(url, {
            method: "POST",
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        try {
            console.log(response);
            return await response.json();
        } catch(error) {
            console.log(error);
        }
    }

    postDataToAnalyze("http://localhost:8080/sentimentAnalysis", { text: formText })
    .then(function(res) {
        console.log('respoooonse: ' + JSON.stringify(res));
        JSON.stringify(res);
        document.getElementById('results').innerHTML = res.polarity;
    })
}

export { handleSubmit }
