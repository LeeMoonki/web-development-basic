let Foo = {
  init: function(m) {
    this.multiplier = m;
  },
  anonymous: function(x) {
    if (x < 3) {
      return Foo.anonymous(x * this.multiplier);
    }
    return x;
  },
  thisref: function(x) {
    if (x < 3) {
      return this.thisref(x * this.multiplier);
    }
    return x;
  },
  named: function named(x) {
    if (x < 3) {
      return named(x * this.multiplier);
    }
    return x;
  },
};

let m2 = Object.create(Foo);

m2.init(2);

console.log('m2 : ', m2.anonymous(2));
console.log('m2 : ', m2.thisref(2));
console.log('m2 : ', m2.named(2));
