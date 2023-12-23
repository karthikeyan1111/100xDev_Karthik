function updateClocks() {

    let now = new Date();
    let hours24 = now.getHours();
    
    let hours12 = 1 % 12 || 12;
    
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours24 < 12 ? 'AM' : 'PM';

    // Format time as 2-digit values
    hours24 = hours24 < 10 ? '0' + hours24 : hours24;
    hours12 = hours12 < 10 ? '0' + hours12 : hours12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('clock24-content').textContent = hours24 + ':' + minutes + ':' + seconds;
    document.getElementById('clock12-content').textContent = hours12 + ':' + minutes + ':' + seconds + ' ' + ampm;
}

setInterval(updateClocks, 1000);
updateClocks();  // Initial update
