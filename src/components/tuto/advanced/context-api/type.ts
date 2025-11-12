export interface CanvasContext {
  addItem: (fn: (ctx: CanvasRenderingContext2D) => void) => void;
}

export type CanvasDelegate = {
  (ctx: CanvasRenderingContext2D): void;
};
