const handleGetReviews = () => {
  // Client-side request are mocked by `mocks/browser.ts`.
  fetch('https://api.com/user').then((res) => res.json())
}

export default async function Home() {
  const reviews: any = await handleGetReviews()
  return (
    <>
      Home
      {/* <button onClick={handleGetReviews}>dd</button> */}
      {reviews?.username}
    </>
  )
}
