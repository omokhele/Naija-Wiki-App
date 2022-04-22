import Header from '../group/Header'
import Footer from '../group/Footer'

const Body = (props) => {
    return(
        <div> 
            <h1>Naija Wiki App</h1>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Body