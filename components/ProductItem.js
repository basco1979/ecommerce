/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function ProductItem({ product }) {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <a>
          <img
            src={`https://codealo-commerce-cms.onrender.com${product.image.url}`}
            alt={product.name}
            className="rounder shadow flex flex-col items-center justify-center p-5"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg">{product.title}</h2>
          </a>
        </Link>
        <p className="mb-2">{product.description}</p>
        <p>${product.price}</p>
        <button className="primary-button" type="button">
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}
