const rating_btns = document.querySelectorAll('.r-btn');

var rating = '';

for (const rating_btn of rating_btns) {
    rating_btn.addEventListener('click', function () {
        if (rating_btn.id != rating) {
            rating_btn.classList.add('active');
            rating_btn.classList.remove('deactive');
            if (rating !== '') {
                document.getElementById(rating).classList.remove('active');
                document.getElementById(rating).classList.add('deactive');
            }
            rating = rating_btn.id;
        }
    });
}

document.getElementById('submit').addEventListener('click', function(){
    if(rating !== ''){
        document.getElementById('ratecontent').classList.add('none-display')
        document.getElementById('thankscontent').classList.remove('none-display');

        document.getElementById('rating').innerHTML = rating;
    }
});