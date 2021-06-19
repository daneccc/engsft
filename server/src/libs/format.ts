const pad = (s: number): string => (s < 10 ? '0' : '') + s;

const secondsToTime = (seconds: number) => {
    var h: number = Math.floor(seconds / (60*60));
    var m: number = Math.floor(seconds % (60*60) / 60);
    var s: number = Math.floor(seconds % 60);
    return pad(h) + ':' + pad(m) + ':' + pad(s);
}
  
export {secondsToTime}