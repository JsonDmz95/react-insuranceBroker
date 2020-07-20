export function getYearsDiference(year){
  // console.log(year);
 return new Date().getFullYear() - year;
}

export function getPriceByOrigin(origin){
  let increse;

  switch(origin){
    case 'european':
      increse = 1.30;
      break;
    case 'american':
      increse = 1.15;
      break;
    case 'asian':
      increse = 1.05;
      break;
    default:
      break;
  }

  return increse;
}

export function getPriceByPlan(plan){
  return (plan === 'basic') ? 1.20 : 1.50;
}