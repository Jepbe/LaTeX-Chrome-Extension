function addButtonToImages() {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        const button = document.createElement('button');
        button.innerText = "Copy LaTeX";
        button.addEventListener("click", () => {
            console.log("button clicked image", img.alt);
        });
        img.parentNode.insertBefore(button, img.nextSibling);
    });
}

addButtonToImages();