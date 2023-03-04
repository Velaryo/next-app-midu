export default function Post ({ params }) {
  const { id } = params
  return <h1>Un post con id {id}</h1>
}
