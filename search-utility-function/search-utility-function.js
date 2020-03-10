function search_summaries(query,k,j){
  // Input: 
  // The input should be a ​string query (query) {'is​ your problems' }
  // ​and​ number ​of items to ​return(k) {eg. ​3}
  // j refers to JSON querry
  var relevant_matches =[],
      all_matches;

  if( query ==='' || query === undefined || query === null || typeof(query)!=='string'){
    return 'Please enter a search query'
  }

  if(typeof(k)!=='number'){
    return 'Please enter number of items in number'
  }

  if(!j.hasOwnProperty('titles') || !j.hasOwnProperty('queries') || !j.hasOwnProperty('summaries') || !j.hasOwnProperty('authors')){
    return 'Incorrect JSON'
  }

  if(j.titles.length ===0 || j.queries.length ===0 || j.summaries.length ===0 || j.authors.length ===0 ){
    return 'Please add more values to JSON'
  }

  if(relevant_matches.length===0){
    return 'No items found'
  }

  // Output:
  // List ​of​ K relevant summaries sorted according to order ​of relevance
  // A summary ​is​ a dictionary that follows the schema:-
  // {​'summary​': string, ​'id​': integer}
  return relevant_matches;
}

module.exports = search_summaries;