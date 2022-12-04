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
                    <Link href="/flats/new">
                        <button class="btn btn-outline btn-lg">Rent your house</button>
                    </Link>
                    <br />
                    <Link href="/flats/new">
                        <button class="btn btn-outline btn-lg">Propose your experience</button>
                    </Link>
                    <br />
                    <Link href="/flats/new">
                        <button class="btn btn-outline btn-lg">list of trips</button>
                    </Link>
                    <br />
                    <Link href="/">
                        <button class="btn btn-outline btn-lg">list of your houses</button>
                    </Link>
                    <br />
                    <Link href={"/bookings/requests"}>
                        <button class="btn btn-outline btn-lg">booking requests</button>
                    </Link>
                </form>
            </div>
        </>
    )
}
