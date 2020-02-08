function Car(name) {
  this.name = name;
}

Car.prototype.getName = function() {
  return this.name;
};

function KIA(name, serialNumber) {
  Car.call(this, name);
  this.serialNumber = serialNumber;
}

KIA.prototype = Object.create(Car.prototype);
// Object.setPrototypeOf(KIA.prototype, Car.prototype);

Object.defineProperty(KIA.prototype, 'constructor', {
  enumerable: false,
  writable: true,
  configurable: true,
  value: KIA,
});

KIA.prototype.getSerialNumber = function() {
  return this.serialNumber;
};