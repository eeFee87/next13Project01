import React from 'react'
async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const { data } = await res.json()
  return data
}
async function UsersPage({ params }) {
  const user = await getUser(params.id)
  return (
    <div className="flex flex-col items-center p-9">
      <img className="w-52 rounded-full" src={user.avatar} alt={user.name} />
      <h1 className="text-3xl">{user.first_name}</h1>
      <h2 className="text-2xl">{user.last_name}</h2>
      <p>{user.email}</p>
    </div>
  )
}

export default UsersPage
