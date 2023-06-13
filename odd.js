
//////////////////////// 6.check odd number///////////////////////

function findOdd(numbers)
{
    const oddNumbers=[];

   for(let i = 0; i < numbers.length; i++)
   {   
        const index=i;
        const element=numbers[index];

         if(element %2 !== 0)
            {
                // console.log(index,element);
                oddNumbers.push(element);
            }
   }
   return oddNumbers;
}

var numbers=[11,12,13,14,15,16,17,18,19,20];
const oddNumbers=findOdd(numbers);
console.log(oddNumbers);
findOdd(numbers);



