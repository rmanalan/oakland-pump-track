import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/volunteer', label: 'Volunteer' },
]

export default function Nav() {
  return (
    <nav className="absolute top-0 w-full mt-24 sm:mt-16 md:mt-12 lg-mt8 xl:mt8">
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
              <Link href={href}>
                <a href={href} className="nav text-xl mr-2 uppercase no-underline">
                  {label}
                </a>
              </Link>
            </li>
          ))}
          <li className="my-5">
            <a href="https://gf.me/u/y4546m" target="_blank" className="nav text-xl uppercase no-underline bg-red-700 text-white rounded-full py-2 px-4">
              Donate
            </a>
          </li>
        </ul>
      </ul>
    </nav>
  )
}
