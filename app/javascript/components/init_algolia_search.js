const initAlgoliaSearch = () => {
  const searchBar = document.querySelector('#search-input');
  if (searchBar) {
    var client = algoliasearch("1K5MM4KR6F", "5822478f5de583b77ef7d0c0745fc6d6");
    var index = client.initIndex('Pokemon');
    autocomplete('#search-input', { hint: false }, [
      {
        source: autocomplete.sources.hits(index, { hitsPerPage: 10 }),
        displayKey: 'name',
        templates: {
          suggestion: function (suggestion) {
            return suggestion._highlightResult.name.value;
          }
        }
      }
    ]).on('autocomplete:selected', function (event, suggestion, dataset) {
      console.log(suggestion, dataset);
      alert('dataset: ' + dataset + ', ' + suggestion.name);
    });
  }
}

export { initAlgoliaSearch };
