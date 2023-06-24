function showContent(contentId) {
    var content = document.getElementById(contentId);
    var contentElements = document.getElementsByClassName('content');
    for (var i = 0; i < contentElements.length; i++) {
      contentElements[i].classList.remove('show');
    }
    content.classList.add('show');
  }