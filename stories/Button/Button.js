import '../../design/overrides/components/_buttons.scss';

export const createButton = ({
  type = 'primary',
  size = 'md',
  label,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;

  btn.className = ['btn', `btn-${size}`, `btn-${type}`].join(' ');

  return btn;
};
