import Head from 'next/head'
import Link from 'next/link'
import SignIn from '../components/signInScreen'

export default function Home() {
  return (
    <>
    <Head>
      <title>Onlypass Metrics | Sign In </title>
      <meta name="description" content="Hide" />
    </Head>
    <SignIn />
    </>
  )
}
