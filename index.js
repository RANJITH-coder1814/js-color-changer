function changeColor() {
    const colors = ["red", "green", "blue", "yellow", "orange", "purple"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
}
