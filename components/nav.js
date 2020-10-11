import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
]

export default function Nav() {
  return (
    <nav>
      <ul className="flex justify-between items-center p-6 pr-10">
        <li>
          <Link href="/">
            <a className="logo no-underline">
              <img src="/images/oakland-pump-track.svg" />
            </a>
          </Link>
        </li>
        <ul className="flex justify-between items-center">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="nav text-xl mr-2 uppercase no-underline">
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="/volunteer" className="nav text-xl uppercase no-underline bg-white text-black rounded-full py-2 px-4">
              Volunteer
            </a>
          </li>
        </ul>
      </ul>
    </nav>
  )
}
