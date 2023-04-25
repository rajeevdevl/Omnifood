import Img1 from '../../content/img/customers/customer-1.jpg'
import Img2 from '../../content/img/customers/customer-2.jpg'
import Img3 from '../../content/img/customers/customer-3.jpg'
import Img4 from '../../content/img/customers/customer-4.jpg'
import Img5 from '../../content/img/customers/customer-5.jpg'
import Img6 from '../../content/img/customers/customer-6.jpg'
import './DeliveredMeals.css';


const customerPhotos = [
    {
        "img":Img1
    },
    {
        "img":Img2
    },
    
    {
        "img":Img3
    },
    
    {
        "img":Img4
    },
    
    {
        "img":Img5
    },
    
    {
        "img":Img6
    },
    

]

const DeliveredMeals = () => {
    return (
        <div className="delivered-meals">
            <div className="delivered-imgs">
                {customerPhotos.map((customer) => {
                    return(
                        <img src={customer.img}/>
                    )
                })}
            </div>
            <p className="delivered-text"><span>250,000+</span> meals delivered last year!</p>
        </div>
    )
}

export default DeliveredMeals;