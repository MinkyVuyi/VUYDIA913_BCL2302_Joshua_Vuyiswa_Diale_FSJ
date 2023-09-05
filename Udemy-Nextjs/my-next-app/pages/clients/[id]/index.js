import { useRouter } from "next/router";

function ClientProjectsPage() {
    const router = useRouter();

    console.log(router.query);

    function loadProjectHandler() {
        //load data...
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: { id: 'max', clientprojectid: 
        'projects'}
        });
    }

    return (
        <div>
            <h1>The Projects of a Given Client</h1>
            <button>Load Project A</button>
        </div>
    )
}

export default ClientProjectsPage;













// router.replace('/clients/max/projecta')