import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
]

export default function Nav() {
  return (
    <nav className="absolute top-0 w-full">
      <ul className="flex justify-between p-3 md:p-6 lg:p-6 xl:p-6 pr-10">
        <li className="w-16 md:w-24 lg:w-32 xl:w-40">
          <Link href="/">
            <a className="no-underline">
              <img className="logo" src={require("../public/images/logo.svg")} alt="logo" />
            </a>
          </Link>
        </li>
        <ul className="md:flex lg:flex xl:flex justify-between items-center">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`} className="my-5">
              <a href={href} className="nav text-xl mr-2 uppercase no-underline">
                {label}
              </a>
            </li>
          ))}
          <li className="my-5">
            <a href="/volunteer" className="nav text-xl uppercase no-underline bg-red-700 text-white rounded-full py-2 px-4">
              Volunteer
            </a>
          </li>
        </ul>
      </ul>
    </nav>
  )
}
