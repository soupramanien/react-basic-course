export function getProducts() {
    return fetch("http://localhost:3000/data.json");
}

// export function getData(url) {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//             .then((res) => {
//                 if (res.status === 200) {
//                     return res.json()
//                 } else {
//                     reject("api error " + res.status)
//                 }
//             })
//             .then((data) => {
//                 resolve(data);
//             })
//             .catch((error) => {
//                 reject(error);
//             })
//     });
// }
export function getData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("fetch failed")
                } else {
                    return res.json()
                }
            })
            .then((data) => {
                setTimeout(() => { resolve(data) }, 5000)

            })
            .catch((error) => {
                reject(error)
            })
    })
}