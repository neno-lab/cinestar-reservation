const price = document.querySelector('#movie');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.querySelector('#count');
const total = document.querySelector('#total');

seats.forEach((seat) => {
  seat.addEventListener('click', (e) => {
    e.preventDefault();
    e.target.classList.toggle('selected');
    selectedSeats();
  });
});

/*let setMovieData = (movieIndex, moviePrice) => {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
};*/

let selectedSeats = () => {
  let sameClass = document.querySelectorAll('.row .selected');

  /*let seatsIndex = [...sameClass].map((seat) => {
    return [...seats].indexOf(seat);
  });
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));*/

  count.innerHTML = sameClass.length;
  totalPrice(sameClass.length);
};

let totalPrice = (numberOfSelectedSeats) => {
  total.innerHTML =
    numberOfSelectedSeats * price.options[price.selectedIndex].value;
  price.onchange = (e) => {
    total.innerHTML =
      numberOfSelectedSeats * price.options[price.selectedIndex].value;

    //setMovieData(e.target.selectedIndex, e.target.value);
  };
};

/*PROJECT IS NOT YET FINISHED*/
