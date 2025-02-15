
function checkExists(data) {
  if (!data || data.length === 0) {
    
    console.error(`${data} not found`);
    return false;
  } 
  // console.log('data', data);
  
  return true
}

function getElementBySelector(selector) {
  const element = document.querySelector(`${selector}`);
  checkExists(element);

  return element;
}

export { getElementBySelector, checkExists };
