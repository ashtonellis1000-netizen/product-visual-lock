export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/roster',
      permanent: true,
    },
  }
}

export default function Gallery() {
  return null
}
