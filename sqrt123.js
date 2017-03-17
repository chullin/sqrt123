function sqrt (x) {
    for(i=1;i*i<=x;i++) {
    i = i + 0.0001
    }
  return i
}
a=25
console.log(sqrt(a))

module.exports = sqrt