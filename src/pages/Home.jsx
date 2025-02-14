import Button from '../components/Button';
import Input from '../components/Input';
import NavBar from '../components/NavBar';
function Home () {
    return (
        <>
            <NavBar></NavBar>
            <h1>Welcome to PlanWise</h1>
            <Button text="Veuiller cliquer ici pour vous enregistrer" onClick={() => alert("Salut mon chers")}></Button>
            <Input></Input>
        </>
    )
}

export default Home;