import type { NextPage } from 'next'
import QRcode from '../../components/QRcode'

const Home: NextPage = () => {
  


  return (
    <div className='flex items-center justify-center h-screen'>
      <QRcode />
    </div>
  )
}

export default Home;

