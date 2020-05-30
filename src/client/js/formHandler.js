function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    Client.checkForName(formText);

    console.log("::: Form Submitted :::")
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

    postDataToAnalyze("http://localhost:8080/data", { text: formText });
    // .then(res => {
    //     console.log("response!!");
    //     console.log(res);
    //     return res.json();
    // })
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
}

export { handleSubmit }
