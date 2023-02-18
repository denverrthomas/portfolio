import Image from 'next/image'

const MyImage = (props) => {
  return (
    <Image
      src={'/pfp.jpg'}
      alt="Picture of the author"
      width="50"
      height="50"
      priority // lazy ,eager
  />
  )
}

export default MyImage