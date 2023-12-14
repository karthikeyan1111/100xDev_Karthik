// Using setInterval Un comment code as and when needed

// setInterval(() => {
//     const date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();

//     console.log(`${hours}:${minutes}:${seconds}`)
// }, 1000);

// Using setTImeout

function counter(){
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    console.log(`${hours}:${minutes}:${seconds}`)

    setTimeout(() => {
        counter();
    }, 1000);
}

counter();