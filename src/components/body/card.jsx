import './section3-card.css'
// eslint-disable-next-line react/prop-types
let Card = ({ para }) => {
    return (
        <div className="card">
            <div className="para">
                <p>{para}</p>
            </div>
            <div className="logo-name">
                <img src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" alt="" />
                <div className="name-designation">
                    <p className='name'>Gladis Lennon</p>
                    <p className='designation'>Head of SEO</p>
                </div>
            </div>
        </div>
    )
}

export default Card;