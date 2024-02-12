import img from '../assets/images/COOP-SUMMER-ELEVATE-YOUR-STYLE-HERO-STANDARD-1440x700.png';

function Banner() {
    return(
        <>
            <div className="relative h-[115vh] bg-no-repeat w-full max-w-full bg-right bg-contain object-contain mb-8"  style={{background: `url(${img})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div>
        </>
    )
}
export default Banner