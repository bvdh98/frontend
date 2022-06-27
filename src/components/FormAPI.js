const endPoint = "http://localhost:3000/api/v1"

export const postPerson = async (person) => {
    const url = endPoint + "/people"
    console.log(JSON.stringify({ person, }))
    fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ person, })
    }).then((response) => { return (response.json()) })
        .catch((error) => {
            console.log("Error: ", error);
        });
}