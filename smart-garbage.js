function smartGarbage(trash, bins){
/*   const bins = [ 
    {type: "waste", amount: 0},
    {type: "recycling", amount: 0},
    {type: "compost", amount: 0}
  ]; */
    if (trash === 'waste'){
      bins.waste += 1;
    } else if (trash === 'recycling'){
      bins.recycling += 1;
    } else if(trash === 'compost'){
      bins.compost += 1;
    }
  return bins;
}


smartGarbage('waste', { waste: 4, recycling: 2, compost: 5 });
