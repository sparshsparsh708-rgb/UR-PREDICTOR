async function loadMatches() {

    const container = document.getElementById("matches");

    try {

        const response = await fetch(
            "https://v3.football.api-sports.io/status",
            {
                headers: {
                    "x-apisports-key": API_KEY
                }
            }
        );

        const data = await response.json();

        container.innerHTML =
            "<pre>" + JSON.stringify(data, null, 2) + "</pre>";

    } catch (err) {

        container.innerHTML =
            "ERROR: " + err.message;
    }
}
