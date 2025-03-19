import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Coupon, CouponResponseSchema, Product, ShoppingCart } from "./schemas";

interface Store {
  total: number;
  discount: number;
  contents: ShoppingCart;
  coupon: Coupon;
  totalProducts: number;
  addToCart: (product: Product) => void;
  updateQuantity: (id: Product["id"], quantity: number) => void;
  removeFromCart: (id: Product["id"]) => void;
  calculateTotal: () => void;
  applyCoupon: (couponName: string) => Promise<void>;
  applyDiscount: () => void;
  clearOrder: () => void;
  obtainTotalProducts: () => void;
}

const initialState = {
  total: 0,
  discount: 0,
  contents: [],
  coupon: {
    percentage: 0,
    name: "",
    message: "",
  },
  totalProducts: 0,
};

export const useStore = create<Store>()(
  devtools((set, get) => ({
    ...initialState,
    addToCart: (product) => {
      const { id: productId, ...data } = product;
      delete data.categoryId;
      let contents: ShoppingCart = [];
      const duplicated = get().contents.findIndex(
        (item) => item.productId === productId
      );
      if (duplicated >= 0) {
        if (
          get().contents[duplicated].quantity >=
          get().contents[duplicated].inventory
        )
          return;
        contents = get().contents.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        contents = [
          ...get().contents,
          {
            ...data,
            quantity: 1,
            productId,
          },
        ];
      }
      set(() => ({
        contents,
      }));
      get().obtainTotalProducts();
      get().calculateTotal();
    },
    updateQuantity: (id, quantity) => {
      const contents = get().contents.map((item) =>
        item.productId === id ? { ...item, quantity } : item
      );
      set(() => ({
        contents,
      }));
      get().obtainTotalProducts();
      get().calculateTotal();
    },
    removeFromCart: (id) => {
      const contents = get().contents.filter((item) => item.productId !== id);
      set(() => ({
        contents,
      }));
      if (!get().contents.length) {
        get().clearOrder();
      }
      get().obtainTotalProducts();
      get().calculateTotal();
    },
    calculateTotal: () => {
      const total = get().contents.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
      set(() => ({
        total,
      }));
      if (get().coupon.percentage) {
        get().applyDiscount();
      }
    },
    applyCoupon: async (couponName) => {
      const req = await fetch("/coupons/api", {
        method: "POST",
        body: JSON.stringify({
          coupon_name: couponName,
        }),
      });
      const json = await req.json();
      const coupon = CouponResponseSchema.parse(json);
      set(() => ({
        coupon,
      }));
      if (coupon.percentage) {
        get().applyDiscount();
      }
    },
    applyDiscount: () => {
      const subTotalAmount = get().contents.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
      const discount = (get().coupon.percentage / 100) * subTotalAmount;
      const total = subTotalAmount - discount;
      set(() => ({
        discount,
        total,
      }));
    },
    clearOrder: () => {
      set(() => ({
        ...initialState,
      }));
    },
    obtainTotalProducts: () => {
      const totalProducts = get().contents.reduce(
        (total, product) => total + product.quantity,
        0
      );
      set(() => ({
        totalProducts,
      }));
    },
  }))
);
