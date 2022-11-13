import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <Link href="/api/auth/signin">Login</Link>
      <Link href="/api/auth/signout">Logout</Link>
    </>
  )
}
