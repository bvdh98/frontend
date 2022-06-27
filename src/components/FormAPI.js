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

export const getPeople = async () => {
    const url = endPoint + "/people"
    const options = {
        headers: new Headers({ "Accept": "application/json" })
    };
    return fetch(url, options).then(res => res.json().then(data => data));
}