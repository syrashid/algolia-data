const initAlgoliaSearch = () => {
  const searchBar = document.querySelector('#search-input');
  if (searchBar) {
    var client = algoliasearch(searchBar.dataset.algoliaId, searchBar.dataset.algoliaSearchKey);
    var index = client.initIndex('Pokemon');
    autocomplete('#search-input', { hint: false }, [
      {
        source: autocomplete.sources.hits(index, { hitsPerPage: 10 }),
        displayKey: 'name',
        templates: {
          suggestion: function (suggestion) {
            return `${suggestion._highlightResult.name.value} lives in ${suggestion._highlightResult.location.value} and uses ${suggestion._highlightResult.move.value}`;
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
