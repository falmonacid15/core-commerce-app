import {
  Store as PrismaStore,
  Category as PrismaCategory,
  Product as PrismaProduct,
  ProductImage as PrismaProductImage,
  Attribute as PrismaAttribute,
  AttributeValue as PrismaAttributeValue,
  ProductAttribute as PrismaProductAttribute,
  ProductAttributeValue as PrismaProductAttributeValue,
  ProductVariant as PrismaProductVariant,
  VariantImage as PrismaVariantImage,
  Favorite as PrismaFavorite,
  Review as PrismaReview,
  ReviewComment as PrismaReviewComment,
  ProductComment as PrismaProductComment,
  User as PrismaUser,
  Account as PrismaAccount,
  Session as PrismaSession,
  VerificationToken as PrismaVerificationToken,
  Prisma,
} from "@prisma/client";

export type OpenHours = {
  mon: HourDay;
  tue: HourDay;
  wed: HourDay;
  thu: HourDay;
  fri: HourDay;
  sat: HourDay;
  sun: HourDay;
};

export type HourDay = {
  openHour: String | null;
  isOpen: boolean;
};

export interface User extends PrismaUser {
  accounts?: Account[];
  sessions?: Session[];
  favorites?: Favorite[];

  stores?: Store[];
  reviews?: Review[];
  reviewComments?: ReviewComment[];
  productComments?: ProductComment[];
}

export interface Account extends PrismaAccount {
  user?: User | null;
}

export interface Session extends PrismaSession {
  user?: User | null;
}

export interface VerificationToken extends PrismaVerificationToken {}

export interface VariantAttributeSnapshot {
  attributeId: string;
  name: string;
  valueId: string;
  value: string;
}

export interface Store extends PrismaStore {
  openHours: Prisma.JsonValue | null;
  categories?: Category[];
  products?: Product[];
  owner?: PrismaUser | null;
}

export interface Category extends PrismaCategory {
  store?: Store | null;
  products?: Product[];
}

export interface Product extends PrismaProduct {
  store?: Store | null;
  category?: Category | null;
  images?: ProductImage[];
  attributes?: ProductAttribute[];
  variants?: ProductVariant[];
  favorites?: Favorite[];
}

export interface ProductImage extends PrismaProductImage {
  product?: Product | null;
}

export interface Attribute extends PrismaAttribute {
  values?: AttributeValue[];
  productAttributes?: ProductAttribute[];
}

export interface AttributeValue extends PrismaAttributeValue {
  attribute?: Attribute | null;
  productAttrs?: ProductAttributeValue[];
}

export interface ProductAttribute extends PrismaProductAttribute {
  product?: Product | null;
  attribute?: Attribute | null;
  productAttrValues?: ProductAttributeValue[];
}

export interface ProductAttributeValue extends PrismaProductAttributeValue {
  productAttribute?: ProductAttribute | null;
  attributeValue?: AttributeValue | null;
}

export interface VariantAttributeSnapshot {
  attributeId: string;
  name: string;
  valueId: string;
  value: string;
}

export interface ProductVariant extends PrismaProductVariant {
  attributesJson: Prisma.JsonValue;
  attributes?: VariantAttributeSnapshot[];
  product?: Product | null;
  images?: VariantImage[];
}

export interface VariantImage extends PrismaVariantImage {
  variant?: ProductVariant | null;
}

export interface Favorite extends PrismaFavorite {
  user?: PrismaUser | null;
  product?: Product | null;
}

export interface Review extends PrismaReview {
  user?: PrismaUser | null;
  product?: Product | null;
  comments?: ReviewComment[];
}

export interface ReviewComment extends PrismaReviewComment {
  user?: PrismaUser | null;
  review?: Review | null;
}

export interface ProductComment extends PrismaProductComment {
  user?: PrismaUser | null;
  product?: Product | null;
}
