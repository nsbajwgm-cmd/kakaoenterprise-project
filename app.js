const registryButton = document.querySelector('#registryButton');
const registry = document.querySelector('#registry');
const tapHint = document.querySelector('#tapHint');

registryButton.addEventListener('click', () => {
  const isOpen = registryButton.getAttribute('aria-expanded') === 'true';
  registryButton.setAttribute('aria-expanded', String(!isOpen));
  registry.hidden = isOpen;
  tapHint.textContent = isOpen ? 'CLICK TO OPEN THE REGISTRY' : '01 SKILL AVAILABLE — SELECT TO EXPLORE';
  if (!isOpen) registry.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
