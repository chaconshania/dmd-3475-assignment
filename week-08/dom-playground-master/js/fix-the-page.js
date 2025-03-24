/**
 * Use this javascript file to fix the page design and layout.
 * Reference the index.html comments for complete details.
 */

// 1) Add CSS Properties to the body tag
document.body.style.fontFamily = '"Trebuchet MS", sans-serif';
document.body.style.fontSize = "10pt";
document.body.style.lineHeight = "14pt";
document.body.style.color = "#000033";
document.body.style.background = "#69f";
document.body.style.margin = "0px";

// 2) Add the .page-wrapper class
document.querySelector("body > div").classList.add("page-wrapper");
// 3) Add the .summary class
document.getElementById("zen-summary").classList.add("summary");
// 4) Add the .sidebar class
document.getElementsByClassName("sidebar").classList.add("sidebar");
// 5) Add these links to the "Resources" <ul>
let resources = [
  {
    title: "View the source CSS file of the currently-viewed design.",
    href: "css/style.css",
    linkText:
      'View This Design&#8217;s <abbr title="Cascading Style Sheets">CSS</abbr>',
  },
  {
    title: "Links to great sites with information on using CSS.",
    href: "http://www.mezzoblue.com/zengarden/resources/",
    linkText: '<abbr title="Cascading Style Sheets">CSS</abbr> Resources ',
  },
  {
    title: "A list of Frequently Asked Questions about the Zen Garden.",
    href: "http://www.mezzoblue.com/zengarden/faq/",
    linkText: '<abbr title="Frequently Asked Questions">FAQ</abbr> ',
  },
  {
    title: "Send in your own CSS file.",
    href: "http://www.mezzoblue.com/zengarden/submit/",
    linkText: "Submit a Design",
  },
  {
    title: "View translated versions of this page.",
    href: "http://www.mezzoblue.com/zengarden/translations/",
    linkText: "Translations",
  },
];

// Hint: Loop over the resources array to build each list item.
// E.g., <li><a href="someLink" title="someTitle">someText</a></li>
