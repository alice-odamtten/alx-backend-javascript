export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p = true;
      if (p) resolve('it wa a sucess');
      else reject(new Error('it was a failure'));
    }, 1000);
  });
}
