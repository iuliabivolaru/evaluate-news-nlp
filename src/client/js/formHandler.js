function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText;
    console.log(document);
    if(document.getElementById('name')) {
        formText = document.getElementById('name').value;
    }

    console.log('FORMtext ' + formText);
    if(Client.checkUrl(formText)) {
        postDataToAnalyze("http://localhost:8080/sentimentAnalysis", { url: formText })
        .then(function(res) {
            console.log('respoooonse: ' + JSON.stringify(res));
            JSON.stringify(res);
            document.getElementById('polarity').innerHTML = res.polarity;
            document.getElementById('subjectivity').innerHTML = res.subjectivity;
            document.getElementById('polarity-confidence').innerHTML = res.polarity_confidence;
            document.getElementById('subjectivity-confidence').innerHTML = res.subjectivity_confidence;
        });
    } else {
        alert('The url is not correct');
    }
}

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

export { handleSubmit, postDataToAnalyze }
