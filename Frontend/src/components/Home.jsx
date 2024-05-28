import { Link } from "react-router-dom";
// import CategoryFilter from "./CatergoryFilter";

const Home = function () {
  return (
    <>
      <div className="flex flex-col md:flex-col mb-6  bg-orange-100 p-4">
        {/* Top Image - all products*/}
        <div className="md:w-ful px-6">
          <div className="m-2 text-center">
            <p className="font-bold text-2xl">Shop Now</p>
            <Link to={"/products"}>
              <div>
                <img
                  src="https://www.smartpetkw.com/wp-content/uploads/2022/02/SHOP_BY_CAT-STORE-1024x1024.png.webp"
                  className="lg:h-64 h-48 rounded-full mt-4 mx-auto transition-transform hover:scale-105 hover:shadow-lg cursor-pointer"
                />
              </div>
            </Link>
          </div>
        </div>

        {/* Category Section */}
        <div className="md:w-2/3 justify-center md:justify-end grid grid-cols-3 m-auto mt-2 bg-white">
          <div className="mx-1 m-auto border rounded-xl shadow-lg hover:shadow-2xl flex justify-center">
            <Link to="/products/category/Food">
              <img
                src="https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Frame_106723160-min.png?v=1708956095"
                className="lg:w-48"
              />
            </Link>
          </div>
          <div className="mx-1 m-auto border rounded-xl shadow-lg hover:shadow-2xl flex justify-center">
            <Link to="/products/category/Liter%20Supplies">
              <img
                src="https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Frame_106723556-min.png?v=1708956095"
                className="lg:w-48"
              />
            </Link>
          </div>
          <div className="mx-1 m-auto border flex justify-center rounded-xl shadow-lg hover:shadow-2xl">
            <Link to="/products/category/Toys">
              <img
                src="https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Frame_106723557-min.png?v=1708956095"
                className="lg:w-48"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* What we offer */}
      <h1 className="font-bold text-xl text-center mt-4 lg:mt-16">What We Offer?</h1>

      <div className="bg-white text-center lg:p-2 m-auto lg:flex">
     
        <div className="flex flex-col my-4 mx-2 border border-gray-200 p-6 rounded-xl gap-2 shadow-xl bg-white md:items-center">
          <p className="font-semibold lg:font-bold lg:text-lg">
            Nutritious and Healthy Cat Food
          </p>
          <div className="m-auto">
            <img
              src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2020_32/3402673/cat-food-kr-2x1-tease-200806.jpg"
              className="h-44 md:h-auto"
            />
          </div>
          <p>
            Choosing the right cat food is essential for pet parents. Consider
            factors like age, breed, and activity level when deciding between
            wet and dry food.
          </p>
        </div>
        <div className="flex flex-col my-4 mx-2 border border-gray-200 p-6 rounded-xl gap-2 shadow-xl bg-white md:items-center">
          <p className="font-semibold lg:font-bold lg:text-lg">
            Cat Supplies: The Purrfect One-stop Shop For Every Cat Parent
          </p>
          <div className="m-auto">
            <img
              src="https://images.summitmedia-digital.com/sap/images/2019/12/02/spot-purina-shutter-1159415002-mainimage-1-1575278367.jpg"
              className="h-44 md:h-auto"
            />
          </div>
          <p className="m-auto">
            we simplify your search for the best cat products online. Explore a
            variety of toys, nutritious meals, accessories, grooming items,
            treats, and litter, all delivered to your doorstep.
          </p>
        </div>
        <div className="flex flex-col my-4 mx-2 border border-gray-200 p-6 rounded-xl gap-2 shadow-xl bg-white md:items-center">
          <p className="font-semibold lg:font-bold lg:text-lg">
            Making Playtime Fun
          </p>
          <div className="m-auto">
            <img
              src="https://www.marthastewart.com/thmb/olgJmSzOD4Jgfa07bLZV741U2FU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cat-playing-getty-845697720-3ca118e58ba0443995c897c4de64ae5e.jpg"
              className="h-44 md:h-auto"
            />
          </div>

          <p>
            To prevent your kitty from becoming bored and engaging in
            destructive behavior, provide a variety of toys for both physical
            exercise and mental stimulation.
          </p>
        </div>
      </div>
    </>
  );
};
export default Home;
