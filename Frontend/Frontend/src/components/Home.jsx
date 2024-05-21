const Home = function () {
  return (
    <>
      <div>
        <div>
          <div className="m-2 text-center">
            <p className="font-bold text-2xl">Shop Now</p>
            <div>
              <img
                src="https://www.smartpetkw.com/wp-content/uploads/2022/02/SHOP_BY_CAT-STORE-1024x1024.png.webp"
                className="h-52 rounded-full mt-4 mx-auto transition-transform hover:scale-105 hover:shadow-lg cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* <div className="flex border border-black h-28 lg:h-36 p-2 gap-2 lg:px-6 m-2">
          <div className="border border-black m-auto h-24 p-2 lg:h-28 w-full">
            <p>Cat Products</p>
          </div>
          <div className="border border-black m-auto h-24 p-2 lg:h-28 w-full">
            <p>Put For Adoption</p>
          </div>
          <div className="border border-black m-auto h-24 p-2 lg:h-28 w-full">
            <p>Adopt a Cat</p>
          </div>
        </div> */}

        {/* What we offer */}
        <div className="bg-white">
          <h1 className="font-bold text-xl text-center mt-4">What We Offer?</h1>
          <div className="flex flex-col my-4 mx-2 border border-gray-200 p-6 rounded-xl gap-2 shadow-xl bg-white md:flex-row md:items-center">
            <img
              src="https://images.summitmedia-digital.com/sap/images/2019/12/02/spot-purina-shutter-1159415002-mainimage-1-1575278367.jpg"
              className="h-48 md:w-1/3 md:h-auto"
            />
            <div className="md:w-2/3 md:ml-4">
              <p className="font-semibold mt-2">
                Cat Supplies: The Purrfect One-stop Shop For Every Cat Parent
              </p>
              <p>
                we simplify your search for the best cat products online.
                Explore a variety of toys, nutritious meals, accessories,
                grooming items, treats, and litter, all delivered to your
                doorstep. Your {"cat's"} needs, met effortlessly!
              </p>
            </div>
          </div>
          <div className="flex flex-col my-4 mx-2 border border-gray-200 p-6 rounded-xl gap-2 shadow-xl bg-white md:flex-row md:items-center">
            <img
              src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2020_32/3402673/cat-food-kr-2x1-tease-200806.jpg"
              className="h-44 md:w-1/3 md:h-auto"
            />
            <div className="md:w-2/3 md:ml-4">
              <p className="font-semibold">Nutritious and Healthy Cat Food</p>
              <p>
                Choosing the right cat food is essential for pet parents.
                Consider factors like age, breed, and activity level when
                deciding between wet and dry food. Prioritize your {"cat's"} dietary
                requirements and taste preferences for optimal nutrition.
              </p>
            </div>
          </div>
          <div className="flex flex-col my-4 mx-2 border border-gray-200 p-6 rounded-xl gap-2 shadow-xl bg-white md:flex-row md:items-center">
            <img
              src="https://www.marthastewart.com/thmb/olgJmSzOD4Jgfa07bLZV741U2FU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cat-playing-getty-845697720-3ca118e58ba0443995c897c4de64ae5e.jpg"
              className="h-48 md:w-1/3 md:h-auto"
            />
            <div className="md:w-2/3 md:ml-4">
              <p className="font-semibold">Making Playtime Fun</p>
              <p>
                To prevent your kitty from becoming bored and engaging in
                destructive behavior, provide a variety of toys for both
                physical exercise and mental stimulation. Rotate toys regularly,
                offering options like rope and feather toys in the morning and
                calming snuggle toys at night.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
