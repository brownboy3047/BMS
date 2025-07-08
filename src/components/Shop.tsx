import React, { useState, useEffect } from "react";
import {
  Search,
  Plus,
  X,
  ShoppingCart,
  Printer,
  CreditCard,
  Banknote,
  Smartphone,
} from "lucide-react";
import { useGetInventories } from "../hooks/useGetInventories";
import toast from "react-hot-toast";

interface Product {
  id: string;
  productName: string;
  unitPrice: number;
  quantity: number;
  category: string;
  status: string;
}

interface CartItem {
  product: Product;
  quantity: number;
  totalPrice: number;
}

interface Sale {
  id: string;
  items: CartItem[];
  totalAmount: number;
  paymentMethod: "transfer" | "cash" | "pos";
  date: string;
  time: string;
}

type PaymentMethod = "transfer" | "cash" | "pos";

const Shop: React.FC = () => {
  // Sample products data (normally would come from backend/database)

  const { inventories } = useGetInventories();
  const [products] = useState<Product[]>(inventories);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("cash");
  const [salesHistory, setSalesHistory] = useState<Sale[]>([]);
  const [showReceipt, setShowReceipt] = useState<Sale | null>(null);

  // Search products as user types
  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = products?.filter(
        (product) =>
          product?.productName
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          product?.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
      setSelectedProduct(null);
    }
  }, [searchTerm, products]);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setQuantity(1);
  };

  const handleAddToCart = () => {
    if (!selectedProduct || quantity <= 0) return;

    if (quantity > selectedProduct?.quantity) {
      // alert(`Only ${selectedProduct?.quantity} units available`);
      toast.error(`Only ${selectedProduct?.quantity} units available`);
      return;
    }

    const existingItemIndex = cart.findIndex(
      (item) => item.product.id === selectedProduct.id
    );

    if (existingItemIndex >= 0) {
      const updatedCart = [...cart];
      const newQuantity = updatedCart[existingItemIndex].quantity + quantity;

      if (newQuantity > selectedProduct?.quantity) {
        // alert(`Only ${selectedProduct?.quantity} units available`);
        toast.error(`Only ${selectedProduct?.quantity} units available`);

        return;
      }

      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity: newQuantity,
        totalPrice: newQuantity * selectedProduct.unitPrice,
      };
      setCart(updatedCart);
    } else {
      const newItem: CartItem = {
        product: selectedProduct,
        quantity,
        totalPrice: quantity * selectedProduct.unitPrice,
      };
      setCart([...cart, newItem]);
    }

    setSelectedProduct(null);
    setSearchTerm("");
    setQuantity(1);
  };

  const handleCancel = () => {
    setSelectedProduct(null);
    setSearchTerm("");
    setQuantity(1);
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter((item) => item.product.id !== productId));
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.totalPrice, 0);
  };

  const handlePayment = () => {
    if (cart.length === 0) {
      // alert("Cart is empty");
      toast.error("Cart is empty");
      return;
    }

    const now = new Date();
    const sale: Sale = {
      id: `SALE-${Date.now()}`,
      items: [...cart],
      totalAmount: getTotalAmount(),
      paymentMethod,
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
    };

    setSalesHistory([...salesHistory, sale]);
    console.log([...salesHistory, sale]);

    setShowReceipt(sale);
    setCart([]);
  };

  const printReceipt = () => {
    window.print();
  };

  const PaymentIcon = ({ method }: { method: PaymentMethod }) => {
    switch (method) {
      case "transfer":
        return <CreditCard className="w-5 h-5" />;
      case "cash":
        return <Banknote className="w-5 h-5" />;
      case "pos":
        return <Smartphone className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Sales Management System
        </h1> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Search & Selection */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Search className="w-5 h-5 mr-2" />
              Product Search
            </h2>

            {/* Search Input */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
            </div>

            {/* Search Results */}
            {searchResults?.length > 0 && (
              <div className="mb-6">
                <h3 className="font-medium mb-3">Search Results:</h3>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {searchResults?.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => handleProductSelect(product)}
                      className="p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-colors"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">
                            {product?.productName}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {product.status}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">
                            ${product?.unitPrice.toLocaleString()}
                          </p>
                          <p className="text-sm text-gray-600">
                            Stock: {product?.quantity}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Selected Product Details */}
            {selectedProduct && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-medium mb-3">Selected Product:</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-lg">
                      {selectedProduct?.productName}
                    </h4>
                    <p className="text-gray-600">{selectedProduct.category}</p>
                  </div>

                  <div className="flex justify-between">
                    <span>Unit Price:</span>
                    <span className="font-semibold">
                      ${selectedProduct.unitPrice.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Available:</span>
                    <span className="font-semibold">
                      {selectedProduct?.quantity} units
                    </span>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Quantity:
                    </label>
                    <input
                      type="number"
                      min="1"
                      max={selectedProduct?.quantity}
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(parseInt(e.target.value) || 1)
                      }
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total:</span>
                    <span>
                      $
                      {quantity > 0
                        ? (
                            selectedProduct.unitPrice * quantity
                          ).toLocaleString()
                        : "0.00"}
                    </span>
                  </div>

                  <div className="flex space-x-3 pt-3">
                    <button
                      onClick={handleAddToCart}
                      className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add to Cart
                    </button>
                    <button
                      onClick={handleCancel}
                      className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center"
                    >
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Checkout Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Checkout
            </h2>

            {/* Cart Items */}
            <div className="mb-6">
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-8">
                  No items in cart
                </p>
              ) : (
                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium">
                          {item?.product.productName}
                        </h4>
                        <p className="text-sm text-gray-600">
                          ${item.product.unitPrice} × {item.quantity}
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="font-semibold">
                          ${item.totalPrice.toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Total Amount */}
            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between text-xl font-bold">
                <span>Total Amount:</span>
                <span>${getTotalAmount().toLocaleString()}</span>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Payment Method:</h3>
              <div className="grid grid-cols-3 gap-3">
                {(["transfer", "cash", "pos"] as PaymentMethod[]).map(
                  (method) => (
                    <button
                      key={method}
                      onClick={() => setPaymentMethod(method)}
                      className={`p-3 border rounded-lg flex flex-col items-center justify-center space-y-2 transition-colors ${
                        paymentMethod === method
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <PaymentIcon method={method} />
                      <span className="text-sm font-medium capitalize">
                        {method}
                      </span>
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Pay Button */}
            <button
              onClick={handlePayment}
              disabled={cart.length === 0}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-lg font-semibold"
            >
              Pay ${getTotalAmount().toLocaleString()}
            </button>
          </div>
        </div>

        {/* Receipt Modal */}
        {showReceipt && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 print:p-4">
                <div className="flex justify-between items-center mb-4 print:hidden">
                  <h3 className="text-lg font-semibold">Receipt</h3>
                  <button
                    onClick={() => setShowReceipt(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="text-center mb-6">
                  <h2 className="text-xl font-bold">Sales Receipt</h2>
                  <p className="text-sm text-gray-600">
                    Transaction ID: {showReceipt.id}
                  </p>
                  <p className="text-sm text-gray-600">
                    {showReceipt.date} - {showReceipt.time}
                  </p>
                </div>

                <div className="border-t border-b py-4 mb-4">
                  {showReceipt.items.map((item, index) => (
                    <div key={index} className="flex justify-between mb-2">
                      <div className="flex-1">
                        <p className="font-medium">
                          {item?.product.productName}
                        </p>
                        <p className="text-sm text-gray-600">
                          ${item.product.unitPrice} × {item.quantity}
                        </p>
                      </div>
                      <p className="font-semibold">
                        ${item.totalPrice.toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span>Payment Method:</span>
                    <span className="font-medium capitalize">
                      {showReceipt.paymentMethod}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span>${showReceipt.totalAmount.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex space-x-3 print:hidden">
                  <button
                    onClick={printReceipt}
                    className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
                  >
                    <Printer className="w-4 h-4 mr-2" />
                    Print
                  </button>
                  <button
                    onClick={() => setShowReceipt(null)}
                    className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
