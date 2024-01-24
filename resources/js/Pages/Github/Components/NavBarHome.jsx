import {Link} from "@inertiajs/react";

function NavBarHome() {
    const style = {
        margin: '30px',
        color: 'blue',
    }

    return (
        <div style={style}>
            <Link href="/dashboard" as="button">Back to Home</Link>
        </div>
    );
}

export default NavBarHome;
