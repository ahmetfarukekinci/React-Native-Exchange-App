// please get your own api key from https://fixer.io/
const API_KEY='get your own api key'

// if you want to get more symbols you can add their name to end point. 
// if you want to get all of the symbols please delete symbols from end point
// fore more information you can see documentation of api https://fixer.io/
export const API_URL=`http://data.fixer.io/api/latest?access_key=${API_KEY}&format=1&symbols=EUR,TRY,USD,CAD`