import { useEffect, useState } from 'react';
import { useSWR } from 'swr';
import { getStaticProps } from './../../nextjs-course-code/pages/index';

function LastSalesPage(props) {
    const [sales, setSales] = useState(props.sales);
    // const [loading, setLoading] = useState(false);

    const { data, error } = useSWR('https://nextjs-course-fb252-default-rtdb.firebaseio.com/sales.json');

    useEffect(() => {
        if (data) {
            const transformedSales = [];

            for (const key in data) {
                transformedSales.push({
                    id: key,
                    username: data[key].username,
                    volume: data[key].volume,
                });
            }

            setSales(transformedSales);
        }
    }, [data]);

    // useEffect(() => {
    //     setIsLoading(true);
    // fetch('https://nextjs-course-fb252-default-rtdb.firebaseio.com/sales.json').then(response => response.json()).then(data => {
    //     const transformedSales = [];

    //     for (const key in data) {
    //        transformedSales.push({id: key, username: data[key].username, volume: data[key].volume,
    //     });
    //     }

    //     setSales(transformedSales);
    //     setIsLoading(false);
    // });
    // }, []);

    if (error) {
        return <p>Failed to load.</p>;
    }

    if (!data && !sales) {
        return <p>Loading...</p>
    }

    return (
        <ul>
            {sales.map(sale => <li key={sale.id}>{sale.username} - ${sale.volume}</li>)}

        </ul>
    )
}

export async function getStaticProps() {
    const response = await fetch('https://nextjs-course-fb252-default-rtdb.firebaseio.com/sales.json');
    const data = await response.json();

    const transformedSales = [];

    for (const key in data) {
        transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
        });
    }

    return { props: { sales: transformedSales }, revalidate: 10 };

};

export default LastSalesPage;

//$ for cosmetics
//"getStaticProps" is not a React component therefore we can't use hooks in that function.