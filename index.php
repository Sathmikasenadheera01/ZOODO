<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
          integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
          crossorigin="anonymous" referrerpolicy="no-referrer"/>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
</head>
<body class="font-secondary">
<div class="">
    <!-- navbar -->
    <nav class="flex justify-between items-center py-4 px-24 lg:px-0 max-w-screen-lg w-full mx-auto">
        <!-- logo goes here -->
        <div>
            <h1 class="font-primary text-primary text-2xl font-bold">ZOODO</h1>
        </div>

        <!-- menu items goes here -->
        <div>
            <ul class="flex items-center gap-10">
                <li class="font-medium hover:bg-primary duration-200 hover:text-white hover:px-2 hover:py-1 hover:rounded-sm">
                    <a href="#">Home</a></li>
                <li class="font-medium hover:bg-primary duration-200 hover:text-white hover:px-2 hover:py-1 hover:rounded-sm">
                    <a href="#">Shop</a></li>
                <li class="font-medium hover:bg-primary duration-200 hover:text-white hover:px-2 hover:py-1 hover:rounded-sm">
                    <a href="#">About</a></li>
                <li class="font-medium hover:bg-primary duration-200 hover:text-white hover:px-2 hover:py-1 hover:rounded-sm">
                    <a href="#">Contact</a></li>
            </ul>
        </div>

        <!-- right side buttons -->
        <div>
            <button class="bg-primary px-4 py-2 rounded-sm text-white font-secondary font-semibold hover:bg-secondary hover:text-black duration-200">
                Sign In / Sign Up
            </button>

            <i class="fa-solid fa-cart-shopping fa-lg mx-3 cursor-pointer hover:text-primary"></i>
            <i class="fa-solid fa-user fa-lg cursor-pointer hover:text-primary"></i>

        </div>
    </nav>

    <!--main section-->
    <section class="flex justify-between items-center my-12 px-24 lg:px-0 max-w-screen-lg w-full mx-auto"
             data-aos="fade-up">
        <!--text content-->
        <div class="basis-2/3">
            <p class="text-primary"> your one-stop solution for healthy Life</p>
            <h1 class="text-5xl font-semibold font-primary text-black my-2">Healthy Food and <br> Nutrient Analysis at
                <br> Your Fingertips</h1>
            <p class="text-primary"> Nourish Your Body, with Zoodo</p>

            <!--        button-->
            <button class="bg-primary px-4 py-2 rounded-sm text-white font-secondary font-semibold mt-8">
                View Foods
            </button>
            <button class="bg-secondary px-4 py-2 rounded-sm text-black font-secondary font-semibold mt-8 ml-4">
                Join Zoodo
            </button>
        </div>

        <!--image-->
        <div class="basis-1/3">
            <img src="./images/image1.jpg" class="w-full"/>
        </div>
    </section>

    <!--discover food section-->
    <section class="px-24 lg:px-0 max-w-screen-lg w-full mx-auto py-12" data-aos="fade-up">
        <!--heading div-->
        <div class="flex justify-between items-end">
            <div>
                <h1 class="font-primary text-black text-xl font-semibold">DISCOVER FOODS</h1>
                <P class="text-primary text-base">Discover the World of Healthy Eating with Zoodo's Wide Selection of
                    Nutritious Meals</P>
            </div>
            <div>
                <button class="bg-secondary px-4 py-2 rounded-sm text-black font-secondary font-semibold mt-8">
                    DISCOVER MORE
                </button>
            </div>
        </div>

        <!-- food cards-->
        <div class="flex justify-between items-center py-12">
            <!--card 1-->
            <div>
                <!--  image div-->
                <div class="w-48 h-36 overflow-hidden">
                    <img src="images/food1%20(1).jpg" class="w-full rounded-t-sm">
                </div>
                <!--bottom div-->
                <div class="py-3 px-2 rounded-b-sm shadow-lg">
                    <!-- details-->
                    <div>
                        <h1 class="font-primary text-lg font-semibold">Fired Rice</h1>
                        <p class="font-secondary text-gray-600 text-sm">Rs 1550.00</p>
                    </div>
                    <!--button-->
                    <div class="flex justify-between items-center mt-3">
                        <button class="bg-primary px-4 py-2 rounded-sm text-white font-secondary font-semibold">
                            Buy Now
                        </button>
                        <i class="fa-solid fa-cart-shopping fa-lg"></i>
                    </div>
                </div>
            </div>

            <!--card 2-->
            <div>
                <!--  image div-->
                <div class="w-48 h-36 overflow-hidden">
                    <img src="images/food1%20(2).jpg" class="w-full rounded-t-sm">
                </div>
                <!--bottom div-->
                <div class="py-3 px-2 rounded-b-sm shadow-lg">
                    <!-- details-->
                    <div>
                        <h1 class="font-primary text-lg font-semibold">Appetizers</h1>
                        <p class="font-secondary text-gray-600 text-sm">Rs 1550.00</p>
                    </div>
                    <!--button-->
                    <div class="flex justify-between items-center mt-3">
                        <button class="bg-primary px-4 py-2 rounded-sm text-white font-secondary font-semibold">
                            Buy Now
                        </button>
                        <i class="fa-solid fa-cart-shopping fa-lg"></i>
                    </div>
                </div>
            </div>

            <!--card 3-->
            <div>
                <!--  image div-->
                <div class="w-48 h-36 overflow-hidden">
                    <img src="images/food1%20(3).jpg" class="w-full rounded-t-sm">
                </div>
                <!--bottom div-->
                <div class="py-3 px-2 rounded-b-sm shadow-lg">
                    <!-- details-->
                    <div>
                        <h1 class="font-primary text-lg font-semibold">Biriyani</h1>
                        <p class="font-secondary text-gray-600 text-sm">Rs 1550.00</p>
                    </div>
                    <!--button-->
                    <div class="flex justify-between items-center mt-3">
                        <button class="bg-primary px-4 py-2 rounded-sm text-white font-secondary font-semibold">
                            Buy Now
                        </button>
                        <i class="fa-solid fa-cart-shopping fa-lg"></i>
                    </div>
                </div>
            </div>

            <!--card 4-->
            <div>
                <!--  image div-->
                <div class="w-48 h-36 overflow-hidden">
                    <img src="images/food1%20(4).jpg" class="w-full rounded-t-sm">
                </div>
                <!--bottom div-->
                <div class="py-3 px-2 rounded-b-sm shadow-lg">
                    <!-- details-->
                    <div>
                        <h1 class="font-primary text-lg font-semibold">Noodles</h1>
                        <p class="font-secondary text-gray-600 text-sm">Rs 1550.00</p>
                    </div>
                    <!--button-->
                    <div class="flex justify-between items-center mt-3">
                        <button class="bg-primary px-4 py-2 rounded-sm text-white font-secondary font-semibold">
                            Buy Now
                        </button>
                        <i class="fa-solid fa-cart-shopping fa-lg"></i>
                    </div>
                </div>
            </div>

            <!--card 6-->
            <div>
                <!--  image div-->
                <div class="w-48 h-36 overflow-hidden">
                    <img src="images/food1%20(5).jpg" class="w-full rounded-t-sm">
                </div>
                <!--bottom div-->
                <div class="py-3 px-2 rounded-b-sm shadow-lg">
                    <!-- details-->
                    <div>
                        <h1 class="font-primary text-lg font-semibold">Dosa</h1>
                        <p class="font-secondary text-gray-600 text-sm">Rs 1550.00</p>
                    </div>
                    <!--button-->
                    <div class="flex justify-between items-center mt-3">
                        <button class="bg-primary px-4 py-2 rounded-sm text-white font-secondary font-semibold">
                            Buy Now
                        </button>
                        <i class="fa-solid fa-cart-shopping fa-lg"></i>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!--why we are different-->
    <section class="my-12 px-24 lg:px-0 max-w-screen-lg w-full mx-auto" data-aos="fade-up">
        <div class="flex justify-center items-center gap-12">
            <!--image-->
            <div class="basis-1/3 overflow-hidden">
                <img src="./images/healthyfood.jpg" class="w-full">
            </div>

            <!--text-->
            <div class="basis-2/3">
                <h1 class="font-primary text-black text-2xl font-semibold">WHY WE ARE DIFFERENT</h1>
                <p class="text-primary text-sm">Discover the World of Healthy Eating with Zoodo's Wide Selection of
                    Nutritious Meals</p>

                <p class="text-black text-sm mt-3">
                    With Zoodo, our advanced food ordering app, Not only can you order your favorite meals with ease,
                    but you can also get detailed information about the nutrients they contain.<br><br>

                    Our state-of-the-art artificial intelligence algorithm analyzes each dish and presents the
                    information in an easy-to-understand format. Whether you're following a specific diet, trying to
                    lose weight, or just looking to improve your overall health, Zoodo has got you covered.<br><br>

                    With Zoodo, you can say goodbye to the guesswork and hello to a healthier, happier you. Upgrade your
                    food ordering experience today with Zoodo!
                </p>

                <button class="bg-primary px-4 py-2 mt-4 rounded-sm text-white font-secondary font-semibold hover:bg-secondary hover:text-black duration-200">
                    Join Zoodo
                </button>
            </div>
        </div>
    </section>


</div>


<script>
    AOS.init();
</script>
</body>
</html>