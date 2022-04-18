import '@styles/overrides/components/_buttons.scss';

export const Button = ({
  type = 'primary',
  size = 'md',
  disabled = false,
  logo = '',
  outline = false,
  label,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  disabled ? btn.setAttribute('disabled', true) : btn.removeAttribute('disabled');
  btn.className = ['btn', `btn-${size}`, `btn-${outline ? 'outline-' : ''}${type}`, logo ? 'btn-logo' : ''].join(' ');
  logo ? btn.innerHTML = `<i class="dt-logo-${logo}"></i>${label}` : '';

  return btn;
};
