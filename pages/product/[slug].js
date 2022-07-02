/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Link from 'next/link';

export default function ProductScreen({ data }) {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.find((x) => x.slug == slug);
  const img = `https://codealo-commerce-cms.onrender.com${product.image.url}`;
  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <Layout title={product.title}>
      <div className="py-2">
        <Link href="/">Volver</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <img
            src={img}
            alt={product.title}
            width={400}
            height={400}
            layout="responsive"></img>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg font-bold">{product.title}</h1>
            </li>
            <li>
              <span className="font-bold">Categoría : </span>
              {product.categories[0].name}
            </li>
            <li>
              <span className="font-bold">Descripción :</span>{' '}
              {product.description}
            </li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Precio</div>
              <div>$ {product.price}</div>
            </div>
            <button className="primary-button w-full" type="button">
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://codealo-commerce-cms.onrender.com/products');
  const data = await res.json();
  const paths = data.map((dat) => ({
    params: { slug: dat.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps() {
  const res = await fetch('https://codealo-commerce-cms.onrender.com/products');
  const data = await res.json();
  return { props: { data } };
}
