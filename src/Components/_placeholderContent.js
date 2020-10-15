const PlaceholderContent = {
  html: () => _html(),
  css: () => _css(),
  js: () =>  _js()
}

function _html() {
  return () => '<h1>Output Renders Here</h1>'
}

function _css() {
  const defaultStr = `html {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #525252;
  }

  h1 {
  	font-family: monospace;
    color: #8d8d8d;
  }`
  return () => defaultStr

}

function _js() {
  const defaultStr = `const hd = document.querySelector('h1');
let counter = 0;

hd.style.cursor = 'pointer';
hd.addEventListener('click', () => {
	counter = handleClick(counter) });

function handleClick(count) {
	logCounter(count)
    count++
    return count
}

function logCounter(count) {
	const logStr = \`Counter: \${count}\`;
    console.log(logStr)
}`
  return () => defaultStr
}

export default PlaceholderContent
