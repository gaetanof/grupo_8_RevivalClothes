const defaultFile = '/images/uploadImage.png'
const file = document.getElementById('file');
const img = document.getElementById('preview-signin')
console.log(file);
console.log(img);
file.addEventListener('change', e => {
    if (e.target.files[0]) {
        console.log(e);
        const reader = new FileReader();
        reader.onload = function (e) {
            img.src = e.target.result;
        }
        reader.readAsDataURL(e.target.files[0])
    } else {
        img.src = defaultFile
    }
})
