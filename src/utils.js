export function getRandom20Char() {
  // if (localStorage.getItem('random20Char')) {
  //   return localStorage.getItem('random20Char');
  // }
  const random20Char = generate20RandomCharacter();
  // localStorage.setItem('random20Char', random20Char);
  return random20Char;
}

export function getIdx() {
  // if (localStorage.getItem('idx'))
  //   return localStorage.getItem('idx');

  // localStorage.setItem('idx', 0);
  return 0;
}

export function getTimer() {
  // if (localStorage.getItem('timer'))
  //   localStorage.getItem('timer');

  // localStorage.setItem('timer', 0);
  return 0.00;
}

export function getIpStr() {
  // if (localStorage.getItem('ipStr')) {
  //   return localStorage.getItem('ipStr');
  // }
  // localStorage.setItem('ipStr', '');
  return '';
}
export function getBestTime() {
  if (localStorage.getItem('bestTime')) {
    return localStorage.getItem('bestTime');
  }
  return null;
}
function generate20RandomCharacter() {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for (let i = 0; i < 20; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}