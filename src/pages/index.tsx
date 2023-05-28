import Head from 'next/head';
import Link from 'next/link';

export default function Home({}) {
  return (
    <div>
      <Head>
        <title />
        <meta name="description" content="" />
      </Head>
      <header>
        <h1>{}</h1>
      </header>
      <main>
        <div className="container">
          <h1>{}</h1>
          <Link href="/">{}</Link>
        </div>
      </main>
      <footer>
        <div>
          <p />
        </div>
      </footer>
    </div>
  );
}
