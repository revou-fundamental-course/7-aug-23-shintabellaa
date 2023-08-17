document.addEventListener('DOMContentLoaded', function() {


//luas Segitiga

const alasInput = document.getElementById('alas-input');
const tinggiInput = document.getElementById('tinggi-input');
const luasResultInput = document.getElementById('luas-input');
const luasBtn = document.getElementById('luasBtn');
const resetBtn = document.getElementById('resetBtn');



luasBtn.addEventListener('click', function() {
const alas = parseFloat(alasInput.value);
const tinggi = parseFloat(tinggiInput.value);
const luas = 0.5 * alas * tinggi;

if (!isNaN(luas)){

    luasResultInput.value = luas;
} else {
    luasResultInput.value = "Masukkan angka yang benar"
}
});

resetLuasBtn.addEventListener('click', function(){
    alasInput.value = '';
    tinggiInput.value = '';
    luasResultInput.value = '';
});


// keliling segitiga
const aInput = document.getElementById('A-input');
const bInput = document.getElementById('B-input');
const cInput = document.getElementById('C-input');
const kelilingResultInput = document.getElementById('keliling-input');
const kelilingBtn = document.getElementById('luasBtn');
const hapusBtn = document.getElementById('resetBtn');


kelilingBtn.addEventListener('click', function() {
    const a = parseFloat(aInput.value);
    const b = parseFloat(bInput.value);
    const c = parseFloat(cInput.value);
    const keliling = a + b + c;
    
    if (!isNaN(keliling)){
    
        kelilingResultInput.value = keliling;
    } else {
        kelilingResultInput.value = "Masukkan angka yang benar"
    }
    });
    
    hapusBtn.addEventListener('click', function(){
        alasInput.value = '';
        tinggiInput.value = '';
        kelilingResultInput.value = '';
    });


}