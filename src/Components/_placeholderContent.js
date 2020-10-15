const PlaceholderContent = {
  html: () => _html(),
  css: () => _css(),
  js: () =>  _js()
}

function _html() {
  return () => '<h1>Output Renders Here</h1>'
}

function _css() {
  console.log('firing in css')
  return () => 'body { background-color: #525252 }'
}

function _js() {
  return () => `let logOutput = 'log in browser console'\n\nconsole.log(logOutput)`
}

export default PlaceholderContent
