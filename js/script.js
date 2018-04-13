const inputs = document.querySelectorAll('.imputs input');

function updateStyles() {

    const suffixPx = this.dataset.sizing || ''; //make px on inputs with data-sizing or NOTHING '' (for example on color picker - normaly undefind)

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffixPx);
}


inputs.forEach(input => input.addEventListener('change', updateStyles))
inputs.forEach(input => input.addEventListener('mousemove', updateStyles))
