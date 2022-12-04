import Link from 'next/link'

export default function Profile(props) {
  const users = props.users
  console.log(users)
    function handleSubmit(e) {
      e.preventDefault();    
      console.log('You clicked submit.');
    }

  return (
    <>
    <div>
    <form onSubmit={handleSubmit}>
        <button type="submit">Rent your house</button>
        <br/>
        <button type="submit">Propose your experience</button>
        <br/>
        <button type="submit">list of trips</button>
        <br/>
        <button type="submit">list of your houses</button>
        <br/>
        <button type="submit">booking requests</button>
        
        <Link href="/"/>
      </form>
      </div>
    </>
  )
}