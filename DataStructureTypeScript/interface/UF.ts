export default interface UF {
  getSize(): number;
  isConnected(p: number, q: number): boolean;
  unionElements(p: number, q: number): void;
}