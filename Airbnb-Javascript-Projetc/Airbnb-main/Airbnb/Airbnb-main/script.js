const detailsSection = document.getElementById('details');
const reviewsSection = document.getElementById('reviews');

detailsSection.addEventListener('mouseenter', () => {
    detailsSection.style.backgroundColor = '#e6f2ff';
    detailsSection.style.transform = 'scale(1.05)';
});

detailsSection.addEventListener('mouseleave', () => {
    detailsSection.style.backgroundColor = 'transparent';
    detailsSection.style.transform = 'scale(1)';
});

reviewsSection.addEventListener('mouseenter', () => {
    reviewsSection.style.backgroundColor = '#e6f2ff';
    reviewsSection.style.transform = 'scale(1.05)';
});

reviewsSection.addEventListener('mouseleave', () => {
    reviewsSection.style.backgroundColor = 'transparent';
    reviewsSection.style.transform = 'scale(1)';
});

detailsSection.addEventListener('click', () => {
    console.log('Detalhes do imóvel clicado!');
});

reviewsSection.addEventListener('click', () => {
    console.log('Avaliações clicadas!');
});

document.querySelector('.reserva').addEventListener('click', function() {
    var reservaData = {
        checkin: '3/15/2024',
        checkout: '3/20/2024',
        hospedes: 1,
        precoTotal: 13802
    };

    localStorage.setItem('reservaData', JSON.stringify(reservaData));
    alert('Reserva feita com sucesso!');
});