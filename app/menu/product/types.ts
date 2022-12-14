export interface Ordering {
  products: OrderingProduct[]
}

export interface OrderingProduct {
  starCost: number
  name: string
  formCode: string
  productNumber: number
  productType: string
  description: string
  assets: Assets
  productOptions: ProductOption[]
  sizes: ProductSize[]
}

export interface Assets {
  thumbnail: Thumbnail
  fullSize: FullSize
  masterImage: FullSize
}

export interface FullSize {
  uri: string
}

export interface Thumbnail {
  large: FullSize
}

export interface ProductOption {
  categoryNumber: number
  name: string
  attributes: Attributes
  products: ProductOptionProduct[]
  children?: ProductOption[]
}

export interface Attributes {
  unitOfMeasure: null | string
}

export interface ProductOptionProduct {
  productNumber: number
  form: Form
}

export interface Form {
  name: string
  formCode: FormCode
  availability: Availability
  sizes: FormSize[]
}

export enum Availability {
  Available = 'Available',
}

export enum FormCode {
  Modifier = 'modifier',
  One = 'one',
  Qty = 'qty',
}

export interface FormSize {
  sizeCode: SizeCode
  name: string
  sku: string
}

export enum SizeCode {
  Add = 'add',
  Extra = 'extra',
  Light = 'light',
  No = 'no',
  Regular = 'regular',
  Sub = 'sub',
}

export interface ProductSize {
  name: string
  recipe: Recipe
  defaultOptionValues: any[]
  nutrition: Nutrition
  sizeCode: string
  sku: string
  default: boolean
  allergens: Allergens
  ingredients: Ingredient[]
}

export interface Allergens {
  shouldDisplay: boolean
  text: string
}

export interface Ingredient {
  name: string
  children: any[]
}

export interface Nutrition {
  servingSize: ServingSize
  calories: Calories
  caloriesFromFat: Calories
  additionalFacts: AdditionalFact[]
}

export interface AdditionalFact {
  displayName: string
  unitOfMeasure: UnitOfMeasure
  value: number
  dailyPercentValue?: number | null
  saturatedFat?: DietaryFiber
  transFat?: DietaryFiber
  id: string
  displayValue: string
  dailyValue: null | string
  subfacts?: Subfact[]
  dietaryFiber?: DietaryFiber
  sugars?: DietaryFiber
  maximum?: DietaryFiber
}

export interface DietaryFiber {
  displayName: string
  unitOfMeasure: UnitOfMeasure
  value: number
  dailyPercentValue: number | null
}

export enum UnitOfMeasure {
  G = 'g',
  Mg = 'mg',
}

export interface Subfact {
  displayName: string
  unitOfMeasure: UnitOfMeasure
  value: number
  dailyPercentValue: number | null
  id: string
  displayValue: DisplayValue
  dailyValue: null
}

export enum DisplayValue {
  The0G = ' 0 g',
  The0Mg = ' 0 mg',
}

export interface Calories {
  displayName: string
  displayValue: number
}

export interface ServingSize {
  displayName: string
  displayValue: string
}

export interface Recipe {
  default: Default[]
}

export interface Default {
  productOption: DefaultProductOption
  formCode: FormCode
  quantity: number
  sizeCode: SizeCode
  skuName: SkuName
}

export interface DefaultProductOption {
  productNumber: number
}

export enum SkuName {
  Shots = 'Shots',
  SignatureEspressoRoast = 'Signature Espresso Roast',
  Water = 'Water',
}
