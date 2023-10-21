import { Type } from 'class-transformer';

export class Product {
  id: string;
  name: string;
  stockPrice: number;
  sellingPrice: number;
  costPrice: number;
  updatedCostPrice: number;
  mrp: number;
  discount: number;
  stockCount: number;
  @Type(() => ProductReview)
  reviews: ProductReview[];
  rating: number;
  minMargin: number;
  images: string[];
  @Type(() => SUOM)
  suom: SUOM;
  @Type(() => AUOM)
  auom: AUOM;
  uom: string;

  /**
   * This method returns the product id
   * @returns string
   */
  getProductId(): string {
    return this.id;
  }
}
export class ProductReview {
  customerId: string;
  rating: number;
  message: number;
  images: string[];
}
export class SUOM {
  price: number;
  uom: string;
}
export class AUOM {
  price: number;
  uom: string;
}
