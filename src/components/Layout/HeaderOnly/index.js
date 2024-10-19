import Header from '../components/Header'

function HeaderOnly({children}) {
    return (
        <div>
            <Header />
            <div className="container">
                <div class='content'>{children}</div>    
            </div>        
        </div>
    );
}

export default HeaderOnly;
