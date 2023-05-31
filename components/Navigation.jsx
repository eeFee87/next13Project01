import Link from 'next/link'
const links = [
  { label: 'Home', route: '/' },
  { label: 'Services', route: '/services' },
  { label: 'About', route: '/about' },
]
export function Navigation() {
  return (
    <header>
      <nav>
        <ul className="flex gap-5 px-5 mb-10">
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
