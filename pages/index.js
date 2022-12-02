export default function Home({ data }) {
  const receipts = data.receipts;
  return <div>{receipts[0].title}</div>;
}

export function getStaticProps() {
  return {
    props: {
      data: {
        receipts: [{ title: "Haluuuu" }],
      },
    },
  };
}
