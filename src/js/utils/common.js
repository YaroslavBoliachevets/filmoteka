
function checkExists(data) {
  if (!data) {
    console.error(`${data} not found`);
    return;
  }
}

function getElementBySelector(selector) {
  const element = document.querySelector(`${selector}`);
  checkExists(element);

  return element;
}

export { getElementBySelector, checkExists };
