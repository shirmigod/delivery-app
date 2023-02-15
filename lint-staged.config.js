module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix --max-warnings=0',
    () => 'tsc-files --noEmit',
  ],
  '*.{js,jsx,ts,tsx,json,css,js}': ['prettier --write'],
};
