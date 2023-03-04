const fetchComments = async (id) => {

    // para fines didacticos
    // retarda la pag 5 seg en cargar
    await new Promise(resolve => setTimeout(resolve, 5000))

    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { 
        next: {
            // regenera el fetch cada minuto
            revalidate: 60
        }
     })
      .then(res => res.json())
}
  
export default async function Post ({ params }) {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <ul style={{fontSize: '10px'}}>
        {comments.map(comment => (
            <li key={comment.id}>
                <h2>{comment.name}</h2>
                <p>{comment.body}</p>
            </li>
        ))}
    </ul>
  )
}
