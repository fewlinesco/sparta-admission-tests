let stopLight = 'green';
let pedestrians = 1;

if (stopLight === 'yellow' || stopLight === 'red') {
  console.log('Stop!');
} else {
  console.log('Go!');
}

if (stopLight === 'green' && pedestrians === 0) {
  console.log('Go!');
} else {
  console.log('Stop');
}

