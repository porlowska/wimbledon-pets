import Head from "next/head";

type StructuredDataProps = {
  data: object;
};

const StructuredData = ({ data }: StructuredDataProps) => (
  <Head>
    <script type="application/ld+json">{JSON.stringify(data)}</script>
  </Head>
);

export default StructuredData;
