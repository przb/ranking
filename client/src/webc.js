

export async function webCall(httpMethod, path, data?) {
    const url = `${path}`;

    const response = await fetch(url, {
        method: httpMethod,
        // mode: 'same-origin',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    // console.log("web call response:",response)
    // let js = response.body.toString();
    // console.log("body:",js)
    // let res = await response.json();
    // console.log("web call json:",res)


    // console.log("before second fetch");
    // const response2 = await fetch(`http://localhost:8080${url}`, {mode: 'same-origin'})

    // console.log("res2", response2);


    return response
}