  import { Controller } from "@hotwired/stimulus";

  // Connects to data-controller="search"
  export default class extends Controller {
    connect() {
      this.search_perform = this.debounce(this.search_perform, 500).bind(this);
    }
    
    search_perform() {
      this.element.requestSubmit();
    }

    debounce(func, wait, immediate) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
        };
    };
  }