export class Box {
  #width = $state(0);
  #height = $state(0);
  area = $derived(this.#width * this.#height);

  constructor(width: number, height: number, readonly maxSize: number = 200) {
    this.#width = width;
    this.#height = height;
  }

  get width() {
    return this.#width;
  }
  set width(value) {
    this.#width = Math.max(0, Math.min(this.maxSize, value));
  }

  get height() {
    return this.#height;
  }
  set height(value) {
    this.#height = Math.max(0, Math.min(this.maxSize, value));
  }

  embiggen(amount: number) {
    this.width += amount;
    this.height += amount;
  }
}
