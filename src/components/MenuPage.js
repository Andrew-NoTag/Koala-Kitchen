import React from "react";
import styles from "../styles/MenuPage.module.css";
import sampleDish from "../assets/menu/sample_dish.jpg";
import Cart from "./Cart";


function MenuPage() {
  return (
    <div className={styles.menuPage}>
      <Cart />
      <div className={styles.title}>Menu</div>
      <div className={styles.intro}>Caan Paai</div>
      {/* menu content */}
      <div className={styles.menuContainer}>
        {/* column 1 */}
        <div className={styles.column}>
          <div className={styles.menuTitle}>Appetizers</div>
          <div style={{ marginTop: "2rem" }}></div>
          <div className={styles.menuItem}>
            <img
              className={styles.itemImage}
              src={sampleDish}
              alt="sample dish"
            />
            <div>
              <div className={styles.itemName}>Spring Rolls</div>
              <div className={styles.itemDescription}>
                This is a description of the dish.
              </div>
            </div>
          </div>
          <div className={styles.breakLine}></div>
          <div className={styles.menuItem}>
            <img
              className={styles.itemImage}
              src={sampleDish}
              alt="sample dish"
            />
            <div>
              <div className={styles.itemName}>Spring Rolls</div>
              <div className={styles.itemDescription}>
                This is a description of the dish.
              </div>
            </div>
          </div>
          <div className={styles.breakLine}></div>
          <div className={styles.menuItem}>
            <img
              className={styles.itemImage}
              src={sampleDish}
              alt="sample dish"
            />
            <div>
              <div className={styles.itemName}>Spring Rolls</div>
              <div className={styles.itemDescription}>
                This is a description of the dish.
              </div>
            </div>
          </div>
        </div>
        {/* column 2 */}
        <div className={styles.column}>
          <div className={styles.menuTitle}>Entree</div>
          <div style={{ marginTop: "2rem" }}></div>
          <div className={styles.menuItem}>
            <img
              className={styles.itemImage}
              src={sampleDish}
              alt="sample dish"
            />
            <div>
              <div className={styles.itemName}>Spring Rolls</div>
              <div className={styles.itemDescription}>
                This is a description of the dish.
              </div>
            </div>
          </div>
          <div className={styles.breakLine}></div>
          <div className={styles.menuItem}>
            <img
              className={styles.itemImage}
              src={sampleDish}
              alt="sample dish"
            />
            <div>
              <div className={styles.itemName}>Spring Rolls</div>
              <div className={styles.itemDescription}>
                This is a description of the dish.
              </div>
            </div>
          </div>
          <div className={styles.breakLine}></div>
          <div className={styles.menuItem}>
            <img
              className={styles.itemImage}
              src={sampleDish}
              alt="sample dish"
            />
            <div>
              <div className={styles.itemName}>Spring Rolls</div>
              <div className={styles.itemDescription}>
                This is a description of the dish.
              </div>
            </div>
          </div>
        </div>
        {/* column 3 */}
        <div className={styles.column}>
          <div className={styles.menuTitle}>Desert</div>
          <div style={{ marginTop: "2rem" }}></div>
          <div className={styles.menuItem}>
            <img
              className={styles.itemImage}
              src={sampleDish}
              alt="sample dish"
            />
            <div>
              <div className={styles.itemName}>Spring Rolls</div>
              <div className={styles.itemDescription}>
                This is a description of the dish.
              </div>
            </div>
          </div>
          <div className={styles.breakLine}></div>
          <div className={styles.menuItem}>
            <img
              className={styles.itemImage}
              src={sampleDish}
              alt="sample dish"
            />
            <div>
              <div className={styles.itemName}>Spring Rolls</div>
              <div className={styles.itemDescription}>
                This is a description of the dish.
              </div>
            </div>
          </div>
          <div className={styles.breakLine}></div>
          <div className={styles.menuItem}>
            <img
              className={styles.itemImage}
              src={sampleDish}
              alt="sample dish"
            />
            <div>
              <div className={styles.itemName}>Spring Rolls</div>
              <div className={styles.itemDescription}>
                This is a description of the dish.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
