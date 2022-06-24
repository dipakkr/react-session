import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/Content";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Todo from "./components/Todo/Todo";

const models = {
  url: "/api/v1/models",
  total_results: 10,
  data: [
    {
      profile_image_url:
        "/assets/b_images/main/models/profile/profile1653048056.jpg",
      v_model_image:
        "/assets/b_images/main/models/profile/profile1653048056.jpg",
      v_model_id: 9822,
      v_model_slug: "scorpio-2022",
      v_make_id: 5,
      v_type_id: 1,
      subCategory: 0,
      v_model_name: "2022 Scorpio N (New)",
      v_model_display_name: "2022 Mahindra Scorpio N (New)",
      v_model_min_price: "1200000",
      v_model_max_price: "1300000",
      v_model_rank: 5,
      v_model_brochure_url: null,
      left_image_url: null,
      right_image_url: null,
      body_type: "SUV",
      transmission_json: {
        0: "Manual",
      },
      fuel_json: {
        0: "Diesel",
      },
      v_model_competitor: "4995|8023|4992|351|8862|9631|6403|8608|10772",
      v_mileage: null,
      v_model_status: 3,
      is_deleted: 0,
      launched_date: "2022-06-27",
      v_displacement: "2179",
      v_max_power: "",
      is_expected_launch: 0,
      is_expected_price: 0,
      v_model_description:
        '<p>Last Updated On 9th Jun&#39;22:&nbsp;Mahindra is getting ready to reintroduce the formidable Scorpio in a new avatar. On June 27, 2022, the Scorpio N will make its debut. The new Scorpio N will be available alongside the current-generation Scorpio, which will now be known as the Scorpio Classic.</p>\r\n\r\n<p><strong>Features</strong></p>\r\n\r\n<p>Features like a new touchscreen infotainment system, steering mounted controls, digital instrument console, automatic climate control, rear AC Vents, front storage console, cooled glovebox and a large sunroof will be offered with the new Scorpio. The company will also pick some features from the XUV700 and offer them here. These includes connected features and driver assistance aids.&nbsp;</p>\r\n\r\n<p><strong>Transmission</strong></p>\r\n\r\n<p>The 2022 Scorpio will be offered with petrol as well as diesel engines that will come mated to a 6-speed manual as well as a 6-speed automatic gearbox for the buyers while the higher variants will be offered with an optional 4WD version. 4x4 will be on offer with both MT and AT gearboxes.&nbsp;</p>\r\n\r\n<p><strong>Engines</strong></p>\r\n\r\n<p>The new Scorpio will make use of the same engines that we see in the new <a href="https://www.91wheels.com/cars/mahindra/thar">Thar</a> and the <a href="https://www.91wheels.com/cars/mahindra/xuv700">XUV700</a>. The state of tune however will be different in this model. Both the engines will come with MT as well as AT options. Expect the petrol engine to put out about 180-190PS of power and 380 Nm of torque. The diesel on the other hand will offer about 150 PS of power and 360Nm of torque.&nbsp;</p>\r\n\r\n<p><strong>Interior</strong></p>\r\n\r\n<p>The new Scorpio will boast a completely new cabin that will make it much better and more practical than before. Not only will we see a new dashboard layout, but in addition to this, will also get new and more comfortable seats and better storage spaces. The new Scorpio will offer individual captain seats in the 2nd row as well.&nbsp;</p>\r\n\r\n<p><strong>Dimensions</strong></p>\r\n\r\n<p>The Indian carmaker is yet to release the dimensions of the Mahindra Scorpio. The SUV will however be based on the new Thar and hence will be longer, wider and taller than the current model.&nbsp;</p>\r\n\r\n<p><strong>Price</strong></p>\r\n\r\n<p>While the brand is tight-lipped about the launch of the Scorpio, we are expecting it to price it from a starting price of INR 12-13 lakh (ex-showroom, Delhi) for the base variant. Keep reading to explore more about 2022 Scorpio&#39;s updated <a href="https://www.91wheels.com/cars/mahindra/scorpio-2022/specifications">specs</a>, latest prices, mileage, genuine user reviews, colours, <a href="https://www.91wheels.com/cars/mahindra/scorpio-2022/images">exclusive images</a> &amp; videos, best offers and more.&nbsp;</p>',
      electric_range: "",
      charging_time: "",
      is_ev: 0,
      has_serviceCost: 0,
      has_accessories: 0,
      battery_capacity: "",
      p_model_id: 0,
      MakeSchema: {
        v_make_slug: "mahindra",
      },
    },
    {
      profile_image_url:
        "/assets/b_images/main/models/profile/profile1642678344.jpg",
      v_model_image:
        "/assets/b_images/main/models/profile/profile1642678344.jpg",
      v_model_id: 11254,
      v_model_slug: "2022-brezza",
      v_make_id: 1,
      v_type_id: 1,
      subCategory: 0,
      v_model_name: "2022 Brezza",
      v_model_display_name: "Maruti Suzuki 2022 Brezza",
      v_model_min_price: "775000",
      v_model_max_price: "1075000",
      v_model_rank: 6,
      v_model_brochure_url: null,
      left_image_url: null,
      right_image_url: null,
      body_type: "SUV",
      transmission_json: ["Manual", "Automatic"],
      fuel_json: ["Petrol"],
      v_model_competitor: null,
      v_mileage: null,
      v_model_status: 3,
      is_deleted: 0,
      launched_date: "2022-06-29",
      v_displacement: "1462",
      v_max_power: "",
      is_expected_launch: 0,
      is_expected_price: 0,
      v_model_description:
        '<p><strong>Last Updated On 3rd Jun&#39;22:&nbsp;Maruti 2022 Brezza Unofficial Bookings Open:&nbsp;</strong>The upcoming Maruti 2022 Brezza is going to launch this month-end in India. The upcoming compact SUV from Maruti will embrace a new design, better &amp; refined engine, and upgraded features. As per the reports over the internet, <a href="https://www.91wheels.com/news/2022-maruti-brezza-unofficial-bookings-now-open-from-rs-11000/">the unofficial bookings are already open for the Maruti 2022 Brezza at a mere amount of Rs 11,000.</a></p>\r\n\r\n<p><strong>Maruti Brezza 2022 Quick Review</strong></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>The Maruti Suzuki Vitara Brezza is one of the highest selling CSUVs offered by the Maruti Suzuki portfolio. Launched in 2016 with a diesel motor under the hood, it topped the sales chart a lot number of times and posed an upfront competition to this segment. The Vitara Brezza got a minor facelift with styling tweaks and a petrol engine in its BS6 avtar, but now in 2022, it is expected to get a major facelift so as to keep up will the competitors.</p>\r\n\r\n<p><strong>What do we know so far?</strong></p>\r\n\r\n<p>As per the sources, the Vitara Brezza 2022 would undergo a major facelift with a heavy updated from fascia but is expected to retain the platform it is based on. It is expected to get all the bells and whistles the previous model missed out upon, like a sunroof, a more utilitarian Multi-Information display (MID cluster), connectivity features and much more. It is expected to share many design elements from the Suzuki Vitara available in the international markets.</p>\r\n\r\n<p><strong>Brezza 2022 Powertrain</strong></p>\r\n\r\n<p>As per the reports by Maruti Suzuki India Limited, the powertrain would be more or less the same without any diesel engine on offer. A highly refined K-series petrol engine is expected to be coupled with a manual or an automatic gearbox.</p>\r\n\r\n<p><strong>Brezza 2022 Safety Features</strong></p>\r\n\r\n<p>Brezza 2022 is expected to be loaded with plenty of safety features like ABS (Anti-lock Braking System), Auto-Dimming Rear-View Mirror, Keyless Entry, EBD (Electronic Brake-force Distribution), ISOFIX (Child-Seat Mount), Airbags and traction control</p>\r\n\r\n<p><strong>Maruti Brezza 2022 Price &amp; Launch</strong></p>\r\n\r\n<p>The new Brezza will see a price hike of about Rs 15-20000 due to the added features. Maruti will launch the new model in June or July.&nbsp;</p>',
      electric_range: "",
      charging_time: "",
      is_ev: 0,
      has_serviceCost: 0,
      has_accessories: 0,
      battery_capacity: null,
      p_model_id: 0,
      MakeSchema: {
        v_make_slug: "maruti",
      },
    },
    {
      profile_image_url:
        "/assets/b_images/main/models/profile/profile1654860423.JPG",
      v_model_image:
        "/assets/b_images/main/models/profile/profile1654860423.JPG",
      v_model_id: 10742,
      v_model_slug: "c3",
      v_make_id: 17,
      v_type_id: 1,
      subCategory: 0,
      v_model_name: "C3",
      v_model_display_name: "Citroen C3",
      v_model_min_price: "475000",
      v_model_max_price: "530000",
      v_model_rank: 12,
      v_model_brochure_url: null,
      left_image_url: null,
      right_image_url: null,
      body_type: "SUV",
      transmission_json: ["Manual", "Automatic"],
      fuel_json: {
        0: "Petrol",
      },
      v_model_competitor: null,
      v_mileage: null,
      v_model_status: 3,
      is_deleted: 0,
      launched_date: "2022-07-20",
      v_displacement: "1198",
      v_max_power: "",
      is_expected_launch: 0,
      is_expected_price: 0,
      v_model_description:
        "<p>Last Updated On&nbsp; 10th Jun&#39;22:&nbsp;Citroen, a French automaker, is poised to launch the C3 in India on July 20. Bookings for the car will begin on July 1st.</p>\r\n\r\n<p><strong>Citroen C3 Quick Review</strong><br />\r\nHighly appreciated for their ride quality and robust construction, Citroen is about to enter the most exciting segment of cars in India with C3. The new C3 will be a micro C-SUV rivaling the likes of Tata Punch, Renault Kiger &amp; Nissan Magnite. The new C3 will offer premium French engineering along with an affordable price tag.</p>\r\n\r\n<p><strong>Citroen C3 Exteriors</strong><br />\r\nBased on their C5 Aircross SUV, the C3 resembles the SUV styling with broad front fascia and raised bonnet lines. The upright posture of C3 makes it look larger than the actual size. Clean body lines and the iconic Citroen front grille are combined with dual rectangular headlamps and eyebrow LED DRLs. The overall design of C3 is inspired by the SUV lineup of Citroen worldwide. The rear of the C3 will follow the subtle design and shape up the C-SUV nicely. Expect the company to offer bold colour options that will go along with the funky styling of the micro SUV.&nbsp;</p>\r\n\r\n<p><strong>Citroen C3 Interiors</strong><br />\r\nOn the inside, Citroen C3 shall retain its good space management and solid built quality. As seen on the larger and bigger Citroen cars like the C5 Aircross, the C3 will also feature some unique features and interior design cues like the rectangular chrome surrounded AC vents. The dashboard design will be unique and the quality of materials is expected to be at par with the segment.</p>\r\n\r\n<p><strong>Citroen C3 Features</strong></p>\r\n\r\n<p>The Citroen C3 will come with a number of features, including double DRLs, a 10-inch touchscreen infotainment system with Android Auto and Apple CarPlay, and USB fast chargers, to name a few.</p>\r\n\r\n<p><strong>Citroen C3 Engine</strong></p>\r\n\r\n<p>A 1.2-litre NA petrol engine and a 1.2-litre turbo petrol engine will power the C3. The engine will have a power output of 82 PS and 110 PS, respectively. A 5-speed manual and a 6-speed manual transmission will be used for transmission.</p>\r\n\r\n<p><strong>Citroen C3 Price &amp; Launch</strong><br />\r\nExpected to be launched somewhere in 2022, Citroen C3 is highly awaited among the new car buyers. With the launch, Citroen C3 is expected to be offered somewhere between a price range of Rs 6-9 Lakhs and will make the company a mass segment producer.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
      electric_range: "",
      charging_time: "",
      is_ev: 0,
      has_serviceCost: 0,
      has_accessories: 0,
      battery_capacity: "",
      p_model_id: 0,
      MakeSchema: {
        v_make_slug: "citroen",
      },
    },
    {
      profile_image_url:
        "/assets/b_images/main/models/profile/profile1649486120.png",
      v_model_image:
        "/assets/b_images/main/models/profile/profile1649486120.png",
      v_model_id: 11765,
      v_model_slug: "curvv",
      v_make_id: 6,
      v_type_id: 1,
      subCategory: 0,
      v_model_name: "Curvv",
      v_model_display_name: "Tata Curvv",
      v_model_min_price: "2000000",
      v_model_max_price: "2000000",
      v_model_rank: 26,
      v_model_brochure_url: null,
      left_image_url: null,
      right_image_url: null,
      body_type: "SUV",
      transmission_json: ["Automatic"],
      fuel_json: ["Electric"],
      v_model_competitor: null,
      v_mileage: null,
      v_model_status: 3,
      is_deleted: 0,
      launched_date: "2024-03-23",
      v_displacement: "",
      v_max_power: "",
      is_expected_launch: 1,
      is_expected_price: 0,
      v_model_description:
        '<p><strong>Last Updated On 4th Jun&rsquo;22:</strong> In India, Tata Motors showcased the new <a href="https://www.91wheels.com/news/tata-curvv-electric-coupe-suv-concept-revealed-check-all-details">Tata Curvv electric coupe</a> SUV concept, with plans to produce a new SUV based on it in the coming years. The Tata Curvv will not only be available with an electric drivetrain, but also with petrol and diesel engines. As a result, the Curvv will be the first electric SUV with petrol and diesel engine options. The Curvv will be designed to provide supreme practicality, elegance, dynamism, and unrivalled road presence.</p>\r\n\r\n<p><strong>Tata Curvv Launch:</strong> The Tata Curvv will hit the market in the next two years, bringing with it a unique, edgy, and sporty coupe body shape to India.</p>\r\n\r\n<p><strong>Tata Curvv Price Update:</strong> The electric SUV is likely to cost between Rs 18 and Rs 20 lakh (ex-showroom)</p>',
      electric_range: "",
      charging_time: "",
      is_ev: 1,
      has_serviceCost: 0,
      has_accessories: 0,
      battery_capacity: null,
      p_model_id: 0,
      MakeSchema: {
        v_make_slug: "tata",
      },
    },
    {
      profile_image_url:
        "/assets/b_images/main/models/profile/profile1642680969.png",
      v_model_image:
        "/assets/b_images/main/models/profile/profile1642680969.png",
      v_model_id: 11267,
      v_model_slug: "blackbird",
      v_make_id: 6,
      v_type_id: 1,
      subCategory: 0,
      v_model_name: "Blackbird",
      v_model_display_name: "Tata Blackbird",
      v_model_min_price: "1100000",
      v_model_max_price: "1500000",
      v_model_rank: 69,
      v_model_brochure_url: null,
      left_image_url: null,
      right_image_url: null,
      body_type: "SUV",
      transmission_json: ["Manual", "Automatic"],
      fuel_json: ["Petrol", "Diesel"],
      v_model_competitor: null,
      v_mileage: null,
      v_model_status: 3,
      is_deleted: 0,
      launched_date: "2023-02-01",
      v_displacement: "",
      v_max_power: "",
      is_expected_launch: 1,
      is_expected_price: 0,
      v_model_description:
        "<p>Sitting between the Nexon and Harrier, Tata Blackbird will rival Hyundai Creta, Kia Seltos, VW Taigun, MG Astor and Skoda Kushaq. This mid-size SUV will measure around 4.3 m in length and is expected to be launched in the Indian market by 2023.&nbsp;</p>\r\n\r\n<p><strong>Tata Blackbird Design</strong></p>\r\n\r\n<p>Like its elder sibling, Harrier, Tata Blackbird too will follow a similar design pattern. We can expect a split headlight set-up with LED daytime running lights on the top while the headlights are placed on the bottom of the bumper. Similarly, expect striking new alloy wheels design along with a subtle looking rear.&nbsp;</p>\r\n\r\n<p><strong>Tata Blackbird Features</strong></p>\r\n\r\n<p>Once launched, we can expect a huge panoramic sunroof, a large touchscreen infotainment system with wireless Apple CarPlay and Android Auto, cruise control, ambient lighting, multi-function steering wheel, a new surround sound system and a fully digital instrument console. Safety equipment may include as many as six airbags, ABS with EBD and ESP, front and rear parking sensors, tyre pressure monitoring system and more.&nbsp;</p>\r\n\r\n<p><strong>Tata Blackbird Engine and Transmission</strong></p>\r\n\r\n<p>Mechanically, Tata Blackbird will feature two engine options - 1.5L turbocharged diesel and a 1.2L turbo petrol unit. As of now, the power and torque figures are unknown but we do expect petrol to make 129 bhp with 185 Nm of peak torque while the diesel will generate as much as 118 bhp with 270 Nm of peak torque. Both the engines will be mated to a 6-speed manual transmission as standard.&nbsp;</p>\r\n\r\n<p><strong>Tata Blackbird Price</strong></p>\r\n\r\n<p>We expect it to be priced between Rs 11 lakh to Rs 15 lakh, ex-showroom, Delhi.&nbsp;</p>",
      electric_range: "",
      charging_time: "",
      is_ev: 0,
      has_serviceCost: 0,
      has_accessories: 0,
      battery_capacity: null,
      p_model_id: 0,
      MakeSchema: {
        v_make_slug: "tata",
      },
    },
    {
      profile_image_url:
        "/assets/b_images/main/models/profile/profile1649851356.jpg",
      v_model_image:
        "/assets/b_images/main/models/profile/profile1649851356.jpg",
      v_model_id: 8355,
      v_model_slug: "sierra",
      v_make_id: 6,
      v_type_id: 1,
      subCategory: 0,
      v_model_name: "Sierra",
      v_model_display_name: "Tata Sierra",
      v_model_min_price: "1500000",
      v_model_max_price: "2000000",
      v_model_rank: 75,
      v_model_brochure_url: null,
      left_image_url: null,
      right_image_url: null,
      body_type: "SUV",
      transmission_json: ["Automatic"],
      fuel_json: ["Electric"],
      v_model_competitor: null,
      v_mileage: null,
      v_model_status: 3,
      is_deleted: 0,
      launched_date: "2022-11-01",
      v_displacement: "",
      v_max_power: "68 bhp",
      is_expected_launch: 1,
      is_expected_price: 0,
      v_model_description:
        "<p>Last updated on 9th Jun&#39;22:&nbsp;Tata has shown an electric version of its iconic SUV Sierra at the 2020 Auto Expo. Sierra is expected to return to the market as an electric vehicle, keeping its classic design concept with it.</p>\r\n\r\n<p><strong>Tata Sierra Quick Review</strong><br />\r\nTata Sierra is a cult SUV from Tata Motors that was once a very popular choice in the Indian market. Known for its special rear windowpane design, Sierra found an immediate fan following pan India. Tata Motors is now working on the new Sierra SUV, which Tata showcased as a prototype at the Indian Auto Expo 2020 in an all-electric form. Expected to be launched as an EV, Sierra is bound to make a comeback to the market whilst carrying its iconic design philosophy.</p>\r\n\r\n<p><strong>Tata Sierra Exteriors</strong><br />\r\nThe exterior design of the Sierra resembles the older generation Sierra SUV. The boxy design is beautifully carved with sharp lines and slight curves keeping context with Tata&#39;s Impact 2.0 design philosophy. A futuristic design from the ALFA-ARC form at the front that resembles production models like Punch, Harrier, and Safari; Sierra is bound to be a looker at first glance. The fixed twin-windowpane design is carried in the new Sierra too. The rear of the Sierra uses a large rectangular windshield which is well-integrated with a panoramic moonroof thus giving the cabin a hotel-like experience. With Tata badging and Sierra littering at back, this minimalistic design caresses the bold and big Sierra with a single wraparound LED taillight.<br />\r\nTata Motors has been winning the hearts of customers with great design options and the Sierra will be no different!&nbsp;</p>\r\n\r\n<p><strong>Tata Sierra Interiors</strong><br />\r\nTata Sierra interiors are very minimalistic and provide a large cabin space. The showcased prototype of Sierra came with two + one seating type. While the front passengers get the individual seats, the rear seat is designed as a single unit in L-shape which is reworked like a large couch. This gives the rear seating ambiance a hotel-like environment. Although this was seen on the prototype variant, we expect the production model to be very different in terms of interior design. As with most Tata offerings, expect a roomy cabin with a larger, useable boot.&nbsp;</p>\r\n\r\n<p><strong>Tata Sierra Features </strong><br />\r\nTata Motors has not revealed any features of Sierra. Going by the standard fitments seen in the prototype variant, we feel that Sierra will come along with some segment-first features. What&#39;s expected is the large cabin space and use of futuristic design elements.</p>\r\n\r\n<p><strong>Tata Sierra Engine</strong></p>\r\n\r\n<p>The Tata Sierra is set to make a comeback as an all-electric vehicle. The Tata Sierra prototype was exhibited with a stated driving range of 400 km on a single charge, based on the latest generation Ziptron EV powertrain.</p>\r\n\r\n<p><strong>Tata Sierra&nbsp;Launch</strong></p>\r\n\r\n<p>The Tata Sierra is still in the works, and it&#39;s unlikely to hit the market before the end of the year. Tata is expected to release the Sierra SUV in the fourth quarter of 2022 or the first quarter of 2023.</p>",
      electric_range: "400",
      charging_time: "80 Percent in 60 mins",
      is_ev: 1,
      has_serviceCost: 0,
      has_accessories: 0,
      battery_capacity: "",
      p_model_id: 0,
      MakeSchema: {
        v_make_slug: "tata",
      },
    },
    {
      profile_image_url:
        "/assets/b_images/main/models/profile/profile1634723682.jpg",
      v_model_image:
        "/assets/b_images/main/models/profile/profile1634723682.jpg",
      v_model_id: 10851,
      v_model_slug: "landcruiser",
      v_make_id: 4,
      v_type_id: 1,
      subCategory: 0,
      v_model_name: "Land Cruiser",
      v_model_display_name: "Toyota Land Cruiser",
      v_model_min_price: "15000000",
      v_model_max_price: "15000000",
      v_model_rank: 81,
      v_model_brochure_url: null,
      left_image_url: null,
      right_image_url: null,
      body_type: "SUV",
      transmission_json: ["Automatic"],
      fuel_json: ["Diesel"],
      v_model_competitor: null,
      v_mileage: null,
      v_model_status: 3,
      is_deleted: 0,
      launched_date: "2022-09-21",
      v_displacement: "4461",
      v_max_power: "",
      is_expected_launch: 1,
      is_expected_price: 0,
      v_model_description:
        "<p><strong>Last Updated On 13th Jun&#39;22:</strong> Toyota has finally unveiled the sixth-gen Land Cruiser in the global market and we expect the launch to happen in India by 2023. The car will get a single 4.4L V8 diesel motor under the hood and will be brought in the Indian market by the CBU route.&nbsp;</p>\r\n\r\n<p><strong>Engine Options</strong></p>\r\n\r\n<p>Globally, the Land Cruiser gets two petrol and one diesel engine options &ndash; 3.5L twin turbocharged petrol, a naturally aspirated petrol motor and a 3.3L twin turbocharged diesel motor. For Indian market, the carmaker will be bringing in the oil burner. This motor generates as much as 307 bhp of power on tap with a peak torque of 700 Nm. It is mated to a 10-speed torque converter automatic gearbox.&nbsp;</p>\r\n\r\n<p><strong>Features and Safety Equipment</strong></p>\r\n\r\n<p>The new Toyota Land Cruiser is offered with a sunroof, large touchscreen infotainment system with wireless Apple CarPlay and Android Auto, power adjustable front seats, connected car tech, multi-zone climate control and more. Safety equipment include multiple airbags, adaptive cruise control, hill descent and hill hold control, ABS with EBD and ESP, traction control and more.</p>",
      electric_range: "",
      charging_time: "",
      is_ev: 0,
      has_serviceCost: 0,
      has_accessories: 0,
      battery_capacity: "",
      p_model_id: 0,
      MakeSchema: {
        v_make_slug: "toyota",
      },
    },
    {
      profile_image_url:
        "/assets/b_images/main/models/profile/profile1640588716.jpg",
      v_model_image:
        "/assets/b_images/main/models/profile/profile1640588716.jpg",
      v_model_id: 8781,
      v_model_slug: "hexa",
      v_make_id: 6,
      v_type_id: 1,
      subCategory: 0,
      v_model_name: "HEXA",
      v_model_display_name: "Tata HEXA",
      v_model_min_price: "1400000",
      v_model_max_price: "2000000",
      v_model_rank: 95,
      v_model_brochure_url: null,
      left_image_url: null,
      right_image_url: null,
      body_type: "SUV",
      transmission_json: ["Manual", "Automatic"],
      fuel_json: ["Diesel"],
      v_model_competitor: null,
      v_mileage: null,
      v_model_status: 3,
      is_deleted: 0,
      launched_date: "2022-10-06",
      v_displacement: "",
      v_max_power: "",
      is_expected_launch: 1,
      is_expected_price: 0,
      v_model_description: "",
      electric_range: "",
      charging_time: "",
      is_ev: 0,
      has_serviceCost: 0,
      has_accessories: 1,
      battery_capacity: "",
      p_model_id: 0,
      MakeSchema: {
        v_make_slug: "tata",
      },
    },
    {
      profile_image_url:
        "/assets/b_images/main/models/profile/profile1640590777.jpg",
      v_model_image:
        "/assets/b_images/main/models/profile/profile1640590777.jpg",
      v_model_id: 8787,
      v_model_slug: "sonata",
      v_make_id: 2,
      v_type_id: 1,
      subCategory: 0,
      v_model_name: "Sonata",
      v_model_display_name: "Hyundai Sonata",
      v_model_min_price: "2077000",
      v_model_max_price: "2077000",
      v_model_rank: 113,
      v_model_brochure_url: null,
      left_image_url: null,
      right_image_url: null,
      body_type: "Sedan",
      transmission_json: ["Automatic"],
      fuel_json: ["Petrol", "Diesel"],
      v_model_competitor: null,
      v_mileage: null,
      v_model_status: 3,
      is_deleted: 0,
      launched_date: "2023-02-01",
      v_displacement: "",
      v_max_power: "",
      is_expected_launch: 1,
      is_expected_price: 0,
      v_model_description: "",
      electric_range: "",
      charging_time: "",
      is_ev: 0,
      has_serviceCost: 0,
      has_accessories: 0,
      battery_capacity: "",
      p_model_id: 0,
      MakeSchema: {
        v_make_slug: "hyundai",
      },
    },
    {
      profile_image_url:
        "/assets/b_images/main/models/profile/profile1634725059.jpg",
      v_model_image:
        "/assets/b_images/main/models/profile/profile1634725059.jpg",
      v_model_id: 10858,
      v_model_slug: "hr-v",
      v_make_id: 3,
      v_type_id: 1,
      subCategory: 0,
      v_model_name: "HR-V",
      v_model_display_name: "Honda HR-V",
      v_model_min_price: "1400000",
      v_model_max_price: "1400000",
      v_model_rank: 114,
      v_model_brochure_url: null,
      left_image_url: null,
      right_image_url: null,
      body_type: "SUV",
      transmission_json: ["Manual"],
      fuel_json: ["Diesel"],
      v_model_competitor: null,
      v_mileage: null,
      v_model_status: 3,
      is_deleted: 0,
      launched_date: "2022-06-22",
      v_displacement: "1198",
      v_max_power: "",
      is_expected_launch: 1,
      is_expected_price: 0,
      v_model_description:
        '<p><strong>Last Updated On 11th Jun&rsquo;22:</strong> The well-established crossover from Honda has debuted in its newest iteration. The 2023 Honda HR-V SUV has been revealed internationally; creating a buzz of its own. Hosting a new athletic design layout and a new powertrain; the latest iteration is completely improved than the current generation car. Currently introduced only for the US market, the new HR-V is now bigger in size and bolder in design. Although, Honda has still not revealed the exact dimensional details of the new car the overall silhouette is now bigger. The front design now embeds a wider grille, C-shaped wide headlights with an all-LED setup, revised front bumper, and the bonnet lines are also now more muscular.&nbsp;</p>\r\n\r\n<p><strong>Engine Options</strong></p>\r\n\r\n<p>The 1.5L iVTEC petrol will be the same as the Honda City. In the City, it generates 119 bhp of power with 145 Nm of peak torque while the oil burner belts out 98 bhp of power with 200 Nm of maximum torque. Both the engines are mated to a 6-speed manual transmission as standard and the petrol gets a CVT as an option.</p>\r\n\r\n<p><strong>Features</strong></p>\r\n\r\n<p>We expect a large touchscreen infotainment system with wireless Apple CarPlay and Android Auto, digital instrument cluster, TPMS, 360-view camera, adaptive cruise control, ventilated front seats, power-adjustable seats and more.&nbsp;</p>\r\n\r\n<p><strong>Price And Competition</strong></p>\r\n\r\n<p>We believe that the upcoming SUV will be priced above the WR-V and the price is expected to sit between Rs 12 lakh to Rs 17 lakh, ex-showroom, Delhi. Once launched, it will rival <a href="https://www.91wheels.com/cars/hyundai/creta">Hyundai Creta</a>, <a href="https://www.91wheels.com/cars/kia/seltos">Kia Seltos</a>, <a href="https://www.91wheels.com/cars/mg/astor">MG Astor</a>, <a href="https://www.91wheels.com/cars/skoda/kushaq">Skoda Kushaq</a>, <a href="https://www.91wheels.com/cars/mahindra/scorpio">Mahindra Scorpio</a> and <a href="https://www.91wheels.com/cars/volkswagen/taigun">VW Taigun</a>.&nbsp;</p>',
      electric_range: "",
      charging_time: "",
      is_ev: 0,
      has_serviceCost: 0,
      has_accessories: 0,
      battery_capacity: "",
      p_model_id: 0,
      MakeSchema: {
        v_make_slug: "honda",
      },
    },
  ],
  reviews: {
    8355: 1,
    8781: 1,
  },
  rating: {
    8781: "5.0000",
  },
};

function App() {
  return (
    // <div className="App">
    //   {models.data && models.data.map((item) => {
    //     return <Card data={item}/>
    //   })}
    // </div>

    <>

    <Todo/>
    

      <Footer
        title={"91wheels"}
        subTitle={"91wheels substitle "}
        description="lkfjsdlkj fsldkjflskjdflskjdflsk jd"
      />
    </>
  );
}

export default App;
