import A from '../components/A';
import Head from 'next/head';
import styles from '../styles/MainContainer.module.scss'

const MainContainer = ({children, keywords}) => {
    return (
        <>
             <Head>
                <meta keywords={`qwe asd ${keywords}`}></meta>
                <title>Main NEXT page</title>
            </Head>
            
            <nav className={styles.navbar}>
                <A href='/' title='main page' />
                <A href='/users' title='users page' />
            </nav> 
            
            <div>
                {children}
            </div>
        </>
    );
};

export default MainContainer;