// Select all links on the page
document.querySelectorAll('a[href]').forEach(link => {
  // Open external links in a new tab
  if (link.href.startsWith('http')) {
    link.setAttribute('target', '_blank');
  }
});
