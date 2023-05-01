import './FeaturedIn.css'
import ContainerGrid from '../../UI/ContainerGrid'
import techCrunch from '../../content/img/logos/techcrunch.png'
import businessInsider from '../../content/img/logos/business-insider.png'
import newYorkTimes from '../../content/img/logos/the-new-york-times.png'
import forbes from '../../content/img/logos/forbes.png'
import usaToday from '../../content/img/logos/usa-today.png'

const FeaturedIn = () => {
    return (
        <ContainerGrid className="section-featured">
            <h2 className='heading-featured-in'>As featured in </h2>
            <div className='logos'>
                <img src={techCrunch} alt="techcrunch logo" />
                <img src={businessInsider} alt="business insider logo" />
                <img src={newYorkTimes} alt="the newyork times logo" />
                <img src={forbes} alt="forbes logo" />
                <img src={usaToday} alt="usa today logo" />
            </div>
        </ContainerGrid>
    )
}

export default FeaturedIn;