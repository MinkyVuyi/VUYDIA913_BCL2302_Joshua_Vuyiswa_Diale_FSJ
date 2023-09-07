import Link from 'next/link;'

import classes from './main-header.module.css';
// import Layout from './layout';

function MainHeader() {
return (
    <header className={classes.header}>
        <div className={classes.logo}>
            <Link href='/'>NextEvents</Link>
        </div>
        <nav className={classes.navigation}> 
            <ul>
                <li>
                    <Link href='/events'>Browse All Events</Link>
                </li>
            </ul>
        </nav>

    </header>
);
}

export default MainHeader;