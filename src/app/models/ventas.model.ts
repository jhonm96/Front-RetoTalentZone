import { productoCarrito } from "./productoCarrito.model";

export interface ventas {
  idtype?: string;
  idclient?: number;
  clientname?: string;
  products?: productoCarrito[];
}
