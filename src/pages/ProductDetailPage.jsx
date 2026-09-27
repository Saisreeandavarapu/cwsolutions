import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import ProductDetails from '../components/ProductDetails';

export default function ProductDetailPage({ onRequestQuote }) {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} (${product.model}) | Creative Work Solutions`;
      window.scrollTo(0, 0);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-industrial-bg-subtle py-16 px-4">
        <div className="bg-white p-8 max-w-md w-full border border-gray-200 rounded-sm text-center space-y-4 shadow-subtle">
          <AlertTriangle className="w-12 h-12 text-industrial-steel mx-auto" />
          <h1 className="text-xl font-bold text-industrial-dark">
            Product Not Found
          </h1>
          <p className="text-xs text-gray-500">
            The requested industrial equipment entry could not be located or may have been renamed.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-industrial-dark hover:bg-industrial-steel text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-sm transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Product Catalogue</span>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product, 4);

  return (
    <ProductDetails
      product={product}
      relatedProducts={relatedProducts}
      onRequestQuote={onRequestQuote}
    />
  );
}
