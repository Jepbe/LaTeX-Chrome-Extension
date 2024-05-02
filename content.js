function addButtonToImages() {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        
        const button = document.createElement('button');
        button.innerText = "Copy LaTeX";
        button.addEventListener("click", () => {
            var textToCopy = img.alt;
            textToCopy.select();
            textToCopy.setSelectionRange(0,9999);
            console.log(textToCopy)

            navigator.clipboard.writeText(textToCopy);
            console.log("button clicked image", img.alt);
        });

        img.parentNode.insertBefore(button, img.nextSibling);
    });
}

const css = `
    button {
        display: block;
        padding: 8px;
        background-color: dodgerblue;
        color: white;
        font-weight: bold;
        position: relative;
        max-height: 44px;
    }

`
const style = document.createElement('style');
style.textContent = css;
document.head.appendChild(style);

addButtonToImages();