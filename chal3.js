function solve(str)
{
    //var numLower = (str.match(/[A-Z]/g))
  var numUpper = (str.match(/[A-Z]/g) || []).length;    
  var numLower = (str.match(/[a-z]/g) || []).length;
  if(numUpper == numLower)
    {
      console.log( str.toLowerCase() );
    }
    else if(numUpper < numLower)
    {
        console.log( str.toLowerCase() );
    } 
    else if(numUpper > numLower)
    {
      console.log( str.toUpperCase() );
    }
}
let x = solve("JoHn");
let y = solve("joHn");
let z = solve("JOHn"); 