export default (text = "Hello cortes") => {
  const element = document.createElement("div");
  element.innerHTML = text;

  return element;
};
