## Test Structure
Test suite for the Pragma archetype on the Automation Exercise web platform, architected using the Command design pattern. Critical test cases are implemented and executed with the Cypress framework.



### [Test Case](https://www.automationexercise.com/test_cases)
| N° | Test Case | Key Functionality | State |
|----|-----------|-------------------|-------|
**1** | `Register User` | User Registration | 🟢
**2** | `Login User with correct email and password` | User Login | 🟢
**3** | `Login User with incorrect email and password` | Login Error Handling | 🟢
**4** | `Logout User` | User Logout | 🔴
**5** | `Register User with existing email` | Duplicate Email Validation | 🔴
**6** | `Contact Us Form` | Contact Form Submission | 🔴
**7** | `Verify Test Cases Page` | Test Cases Page Verification | 🔴
**8** | `Verify All Products and product detail page` | Product Listing & Detail Display | 🔴
**9** | `Search Product` | Product Search Functionality | 🔴
**10** | `Verify Subscription in home page` | Newsletter Subscription (Home Page) | 🔴
**11** | `Verify Subscription in Cart page` | Newsletter Subscription (Cart Page) | 🔴
**12** | `Add Products in Cart` | Add to Cart Functionality | 🔴
**13** | `Verify Product quantity in Cart` | Cart Quantity Update | 🔴
**14** | `Place Order: Register while Checkout` | Guest Registration at Checkout | 🟢
**15** | `Place Order: Register before Checkout` | Pre‑Checkout Registration Flow | 🔴
**16** | `Place Order: Login before Checkout` | Pre‑Checkout Authentication | 🔴
**17** | `Remove Products From Cart` | Remove from Cart Functionality | 🔴
**18** | `View Category Products` | Category‑Based Product Navigation | 🔴
**19** | `View & Cart Brand Products` | Brand Filtering & Add to Cart | 🔴
**20** | `Search Products and Verify Cart After Login` | Search Persistence & Cart Verification | 🔴
**21** | `Add review on product` | Product Review Submission | 🔴
**22** | `Add to cart from Recommended items` | Recommended Items Cart Addition | 🔴
**23** | `Verify address details in checkout page` | Checkout Address Validation | 🔴
**24** | `Download Invoice after purchase order` | Invoice Download Functionality | 🔴
**25** | `Verify Scroll Up using 'Arrow' button and Scroll Down functionality` | Scroll Up/Down UI Navigation (Arrow) | 🔴
**26** | `Verify Scroll Up without 'Arrow' button and Scroll Down functionality` | Scroll Up/Down UI Navigation (Gesture) | 🔴

### [API Test](https://www.automationexercise.com/api_list)
| N° | Test Case | Key Functionality | State |
|----|-----------|-------------------|-------|
**1** | `Get All Products List` | Retrieve all products | 🔴
**2** | `POST To All Products List` | Create a new product | 🔴
**3** | `Get All Brands List` | Retrieve all brands | 🔴
**4** | `PUT To All Brands List` | Update brand information | 🔴
**5** | `POST To Search Product` | Execute product search | 🔴
**6** | `POST To Search Product without search_product parameter` | Validate missing search parameter | 🔴
**7** | `POST To Verify Login with valid details` | Authenticate user with correct credentials | 🔴
**8** | `POST To Verify Login without email parameter` | Validate missing email parameter in login request | 🔴
**9** | `DELETE To Verify Login` | Handle unsupported DELETE on login endpoint | 🔴
**10** | `POST To Verify Login with invalid details` | Handle authentication failure for invalid credentials | 🔴
**11** | `POST To Create/Register User Account` | Register a new user | 🟢
**12** | `DELETE METHOD To Delete User Account` | Delete an existing user account | 🟢
**13** | `PUT METHOD To Update User Account` | Update existing user account details | 🔴
**14** | `GET user account detail by email` | Retrieve user account by email | 🔴