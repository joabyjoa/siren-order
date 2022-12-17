export interface Menu {
  menus: MenuElement[]
}

export interface MenuElement {
  displayOrder: number
  name: string
  products: Product[]
  children: MenuElement[]
  id: string
  uri: string
}

export interface Product {
  name: string
  formCode: FormCode
  displayOrder: number
  productNumber: number
  productType: ProductType
  availability: Availability
  assets?: Assets
  sizes: Size[]
  uri: string
}

export interface Assets {
  thumbnail: Thumbnail
  fullSize: FullSize
  masterImage: FullSize
}

export interface FullSize {
  uri: null | string
}

export interface Thumbnail {
  large: FullSize
}

export enum Availability {
  Available = 'Available',
}

export enum FormCode {
  Hot = 'Hot',
  Iced = 'Iced',
  Packaged = 'Packaged',
  Single = 'Single',
  Via = 'VIA',
  WholeBean = 'Whole-Bean',
}

export enum ProductType {
  Beverage = 'Beverage',
  Coffee = 'Coffee',
  Food = 'Food',
}

export interface Size {
  sizeCode: SizeCode
}

export enum SizeCode {
  Double = 'Double',
  Grande = 'Grande',
  Kids = 'Kids',
  Quad = 'Quad',
  Short = 'Short',
  Single = 'Single',
  Tall = 'Tall',
  The11Packaged = '11-Packaged',
  The12Count = '12-count',
  The12Packaged = '12-Packaged',
  The145Packaged = '14.5-Packaged',
  The169Packaged = '16.9-Packaged',
  The1LB = '1-lb',
  The1Piece = '1 Piece',
  The20Packaged = '20-Packaged',
  The237Packaged = '23.7-Packaged',
  The5Count = '5-count',
  The600Packaged = '600-Packaged',
  The88Oz = '8.8-oz',
  The8Packaged = '8-Packaged',
  Trenta = 'Trenta',
  Triple = 'Triple',
  Venti = 'Venti',
}
