/**
 * @param {string} tag
 * @param {object} options
 * @param {string[]} options.classNames
 * @param {...(Node | string)} children
 */
function createElement(tag, options, ...children) {
  const { classNames } = options;
  const elem = document.createElement(tag);
  elem.classList.add(...classNames);

  elem.append(...children);
  return elem;
}
