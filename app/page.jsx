import Users from '@/components/users'
async function fetchUsers() {
  const res = await fetch('https://reqres.in/api/users')
  const { data } = await res.json()
  return data
}

export default async function Home() {
  const users = await fetchUsers()

  return (
    <div>
      <h1 className="px-5 mb-9 border-b-2 pb-5">Index page</h1>
      <Users users={users} />
    </div>
  )
}
