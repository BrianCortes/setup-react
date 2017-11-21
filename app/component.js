export default (text = "Hello brian") => {
  const element = document.createElement("div");

  element.innerHTML = text;

  return element;
};