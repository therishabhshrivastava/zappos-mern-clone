import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { RiArrowDropDownFill } from "react-icons/ri";


function Categories() {
 

    return (
        <>
           

        <nav className={styles.nav}>
              
              <div className={styles.dropDownPart}>
                <div>
                  <div className={styles.dropdown}>
                    New <RiArrowDropDownFill />
                    <div className={styles.dropdownContent}>
                      <div>
                        <p className={styles.dropdownHead}>The Find</p>
                        <p>The Brightest, Boldest Springs Trends</p>
                        <p>Zappos X Beach Riot</p>
                        <p>The Ultimate Sneaker Guide</p>
                        <p>The Spring Sandal Edit</p>
                        <p>Fresh Spring Denim</p>
                        <p>Energizing Sporty Looks</p>
                        <p>Western-Inspired Wear</p>
                      </div>
                      <div>
                        <p className={styles.dropdownHead}>The Style Room</p>
                        <p>Brand Spotlight: Tory Burch</p>
                        <p>Need-to-know with AG Jeans</p>
                        <p>Collective Review: Sam Edelman</p>
                        <p>Retro Resort</p>
                        <p>Easy Does It</p>
                        <p>Secret Garden</p>
                        <p>Men's Retro Poolside</p>
                        <p></p>
                        <p>Men's AG Jeans</p>
                      </div>
                      <div>
                        <p className={styles.dropdownHead}>New Brands</p>
                        <p>Fairfax and Favor</p>
                        <p>Milwaukee Boot Co</p>
                        <p>Jambys</p>
                        <p>Moral Code</p>
                        <p>UGGⓇ Universal</p>
                        <p>Rebel Nell</p>
                        <p>MANGO</p>
                      </div>
                      <div>
                        <p className={styles.dropdownHead}>New Arrivals</p>
                        <p>Candles</p>
                        <p>Dining & Entertainment</p>
                        <p>Bedding & Blankets</p>
                        <p>Hunter Meets Mickey</p>
                        <p>Toys & Games</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.dropdown}>
                    Women <RiArrowDropDownFill />
                    <div className={styles.dropdownContent}>
                      <div>
                        <p className={styles.dropdownHead}>Shoes</p>
                        <p>
                          Sneakers & Athletic
                        </p>
                        <p>Sandals</p>
                        <p>Clogs & Mules</p>
                        <p>Heels</p>
                        <p>Boots & Booties</p>
                        <p>Slippers</p>
                        <p>Flats</p>
                        <p>Loafers</p>
                        <p>Comfort</p>
                        <p>Wide</p>
                        <p>Narrow</p>
                        <p>Single Shoes</p>
                        <p>Shop All Shoes</p>
                      </div>
                      <div>
                        <p className={styles.dropdownHead}>Clothing</p>
                        <p >Shirts & Tops</p>
                        <p>Swimwear</p>
                        <p>Dresses</p>
                        <p>Shorts</p>
                        <p>Jeans & Denim</p>
                        <p>Underwear & Intimates</p>
                        <p>Coats & Outerwear</p>
                        <p>Socks</p>
                        <p>Sleepwear</p>
                        <p>Activewear</p>
                        <p>Plus Size</p>
                      </div>
                      <div>
                        <p className={styles.dropdownHead}>Accessories & More</p>
                        <p>Bags & Handbags</p>
                        <p>Backpacks</p>
                        <p>Belt Bags</p>
                        <p>Hair</p>
                        <p>Sunglasses</p>
                        <p>Statement Earrings</p>
                        <p>Face Masks</p>
                        <p>Hats</p>
                      </div>
                      <div>
                        <p className={styles.dropdownHead}>Featured</p>
                        <p>The Find</p>
                        <p>The Style Room</p>
                        <p>UFC Shop</p>
                        <p>Female Founded</p>
                        <p>Influencer Favourites</p>
                        <p>Spring Sandal Guide</p>
                        <p>Wedding Shop</p>
                      </div>
                    </div>
                  </div>
                  <Link to="/shop"><div className={styles.dropdown}> 
                    Men
                    
                  </div></Link>
                  <div className={styles.dropdown}>
                    Kids <RiArrowDropDownFill />
                    <div className={styles.dropdownContent}>
                      <div>
                        <p className={styles.dropdownHead}>Girls</p>
                        <p>Sneakers</p>
                        <p>Sandals</p>
                        <p>Swimwear</p>
                        <p>Flats</p>
                        <p>Shirts & Tops</p>
                        <p>Dresses</p>
                        <p>Heels</p>
                        <p>Shorts</p>
                        <p>Clogs</p>
                        <p>Light Jackets</p>
                        <p>Boots</p>
                        <p>Shop All Girls</p>
                      </div>
                      <div>
                        <p className={styles.dropdownHead}>Boys</p>
                        <p>Sneakers</p>
                        <p>Sandals</p>
                        <p>Swimwear</p>
                        <p>Shirts & Tops</p>
                        <p>Pants</p>
                        <p>Dresses</p>
                        <p>Heels</p>
                        <p>Shorts</p>
                        <p>Clogs</p>
                        <p>Light Jackets</p>
                        <p>Boots</p>
                        <p>Shop All Boys</p>
                      </div>
                      <div>
                        <p className={styles.dropdownHead}>Accessories</p>
                        <p>Backpacks</p>
                        <p>Sunglasses</p>
                        <p>Hats</p>
                        <p>Toys & Games</p>
                      </div>
                      <div>
                        <p className={styles.dropdownHead}>Top Brands</p>
                        <p>Vans Kids</p>
                        <p>Crocs Kids</p>
                        <p>Native Kids</p>
                        <p>adidas Kids</p>
                        <p>SKECHERS KIDS</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    Departments <RiArrowDropDownFill />
                  </div>
                  <div>
                    Brands <RiArrowDropDownFill />
                  </div>
                  <div>
                    Sale <RiArrowDropDownFill />
                  </div>
                  <div>
                    Clothing <RiArrowDropDownFill />
                  </div>
                </div>
                <div className=' font-bold '>Help & Support</div>
              </div>
              
            </nav>

        </>
    )
}
export default Categories