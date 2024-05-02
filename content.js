function addButtonToImages() {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        
        const button = document.createElement('button');
        button.innerText = "Copy LaTeX";
        button.addEventListener("click", () => {
            
            var textToCopy = img.getAttribute('alt');
            
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    console.log("LaTeX code copied to clipboard: ", textToCopy)
                })
                .catch(err => {
                    console.log("Failed to copy LaTeX code: ", err)
                });

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