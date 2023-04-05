import '../App.css';

function Header(props) {
    return (
        <section id="Product">
        <div className='flex shopping-card'>


            <div onClick={() => props.handleShow(false)} >Shopping Cart </div>
            <div onClick={() => props.handleShow(true)}> Cart
                <sup> {props.count} </sup>
            </div>
            
        </div>
        </section>
    );
}

export default Header;