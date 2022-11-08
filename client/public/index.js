
function testServer() {
    fetch('http://localhost:3000/').then(res => res.text())
    .then(text => {
        alert(`server sent: ${text}`)
    })
    .catch(ex => {
        alert(ex)
    })
}