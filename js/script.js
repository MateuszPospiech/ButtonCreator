const inputs = document.querySelectorAll('.imputs input');
const result = document.getElementById('result');

function updateStyles() {

    const suffixPx = this.dataset.sizing || ''; //make px on inputs with data-sizing or NOTHING '' (for example on color picker - normaly undefind)

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffixPx);
    
    //take style of body - easy way to get property value 
    const bodyStyle = getComputedStyle(document.body);
    
    
    result.innerHTML = `padding: ${bodyStyle.getPropertyValue('--buttonPadding')};
    <br>filter: blur( ${bodyStyle.getPropertyValue('--buttonBlur')});
    <br>background-color: ${bodyStyle.getPropertyValue('--baseColor')};
    <br>height: ${bodyStyle.getPropertyValue('--buttonHeight')};
    <br>widht: ${bodyStyle.getPropertyValue('--buttonWidth')};
    <br>border-radius: ${bodyStyle.getPropertyValue('--buttonRadius')};`;
}

inputs.forEach(input => input.addEventListener('change', updateStyles));
inputs.forEach(input => input.addEventListener('mousemove', updateStyles));
