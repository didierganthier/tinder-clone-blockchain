import Header from "../components/Header"

const styles = {
  wrapper: `h-screen w-screen flex flex-col bg-[#222229]`,
  cardsContainer: `flex flex-col items-center justify-center flex-1`,
}

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header/>
      <div className={styles.cardsContainer}>
      </div>
    </div>
  )
}
