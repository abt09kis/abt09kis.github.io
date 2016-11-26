Vue.component('search-wiki',{
	template: '#searchWiki',
	data() {
		return {
			title: "",
			searching: false
		}
	},
	methods: {
		onSearch: function() {
			var BASE_URL = "https://en.wikipedia.org/w/api.php?action=query&titles=";
			var endUrl = "&prop=revisions&rvprop=content&format=json";

			this.searching = true;
			console.log(BASE_URL + this.title + endUrl);
		}
	}
})

var app = new Vue({
  el: '#app',
  template: `<search-wiki></search-wiki>`
})