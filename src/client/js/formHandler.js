function handleSubmit(event) {
    event.preventDefault();

    let formText;
    if(document.getElementById('name')) {
        formText = document.getElementById('name').value;
    }

    if(Client.checkUrl(formText)) {
        postDataToAnalyze("http://localhost:8080/sentimentAnalysis", { url: formText })
        .then(function(res) {
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
        return await response.json();
    } catch(error) {
        console.log(error);
    }
}

export { handleSubmit, postDataToAnalyze }
