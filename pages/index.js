import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';

export default function Home({ data }) {
  console.log(data);

  return (
    <Layout title="Home Page">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.map((prod) => (
          <ProductItem product={prod} key={prod.slug} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://codealo-commerce-cms.onrender.com/products');
  const data = await res.json();
  return { props: { data } };
}
