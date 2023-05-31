'use client'
import { useRouter } from 'next/navigation'
function Users({ users }) {
  const router = useRouter()
  return (
    <main className="container mx-auto">
      <ul>
        {users.map((user) => (
          <li
            className=""
            key={user.id}
            onClick={() => {
              router.push(`users/${user.id}`)
            }}
          >
            <article className="flex flex-col text-center items-center mb-10 border-b-2 p-5">
              <img
                className="rounded-full w-20"
                src={user.avatar}
                alt={user.name}
              />
              <h2>{user.first_name}</h2>
              <p>{user.email}</p>
            </article>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Users
