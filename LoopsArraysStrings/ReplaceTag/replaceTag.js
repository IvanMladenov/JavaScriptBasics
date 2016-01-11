var input = '<ul>\n <li>\n  <a href=http://softuni.bg>SoftUni</a>\n </li>\n</ul>';

var re = new RegExp(/<a.+<\/a>/g);

var match = re.exec(input);
var replaced = match.toString().replace(/</g, '[').replace(/>/g, ']').replace(/a/g, 'URL');
var result = input.replace(match, replaced);

console.log(result);