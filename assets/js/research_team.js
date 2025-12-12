// Current Lab Memebers

const teamMembers = [
  {
    id: "team1",
    name: "Jerod Merkle",
    title: "Associate Professor",
    img: "assets/img/team/jerod_merkle.jpg",
    email: "jmerkle@uwyo.edu",
    website: "",
    bio: `Jerod is the Knobloch Professor of Migration Ecology and Conservation within the Department of Zoology and Physiology at University of Wyoming. He is also a research associate with the Wyoming Migration Initiative. Jerod is a quantitative wildlife ecologist with broad interests in understanding how the movement of animals relates to environmental heterogeneity and change, and how these interactions scale to population- and landscape-level ecological processes. Jerod’s specific research foci include movement and migration ecology, fitness consequences of behavior, how cognition and innovation influence foraging behavior, and conservation and management of large mammals.`
  },
  {
    id: "team4",
    name: "Matt Bowers",
    title: "Research Scientist",
    img: "assets/img/team/matt_bowers.png",
    email: "matthew.bowers@wyo.gov",
    website: "",
    bio: `Matt grew up in southeastern Pennsylvania and earned his B.S. in Wildlife and Fisheries Science from Penn State University in 2021. Following this, he worked as an American kestrel research technician for Hawk Mountain Sanctuary in Pennsylvania. Matt earned his M.S. in Biology from Western Kentucky University in 2024, where he studied human-elephant conflict and climate-smart agriculture in Kenya. His current work is focused on assessing mule deer mortality in central Wyoming as part of a large GPS monitoring project in collaboration with the Wyoming Game and Fish Department. In his spare time, Matt enjoys running, hiking, and traveling.`
  },
  {
    id: "team5",
    name: "Julie Brockman",
    title: "Postdoc",
    img: "assets/img/team/JulieBrockman.jpg",
    email: "juliacbrockman@gmail.com",
    website: "https://julia-brockman.quarto.pub/",
    bio: `Julie is a quantitative ecologist specializing in wildlife movement and spatial ecology. Her research explores how environmental and anthropogenic factors shape animal space use and behavior, with a focus on linking individual decision-making to broader population-level patterns. Her work aims to support effective wildlife management and conservation strategies with applied statistical models. Julie holds a Master's in Forestry from Southern Illinois University and a Ph.D. in Ecology, Evolution, and Conservation Biology from the University of Nevada, Reno. Outside of research, she enjoys running, hiking, and anything else that keeps her dog, Myotis, exhausted and happy.`
  },
  {
    id: "team3",
    name: "Molly Caldwell",
    title: "PhD Student",
    img: "assets/img/team/Caldwell_Molly.png",
    email: "molly.caldwell@uwyo.edu",
    website: "",
    bio: `Molly grew up in southwestern Colorado and has a BA in Integrative Biology from the University of California, Berkeley. Her PhD research focuses on ungulate (bison, elk, mule deer, pronghorn, and bighorn sheep) migrations in the Greater Yellowstone Ecosystem. She will be investigating the community and movement ecology of these species to help understand why a large diversity of movement strategies exist among sympatric ungulates. Previously, Molly worked as an Environmental Scientist with the California Department of Fish and Wildlife where she conducted habitat and wildlife monitoring on state lands and analyzed camera and GPS telemetry data to investigate wildlife use of highway crossings. In her free time, Molly enjoys hiking in the mountains and traveling.`
  },
  {
    id: "team2",
    name: "Ashley Cowell",
    title: "PhD Student",
    img: "assets/img/team/ashley_cowell.png",
    email: "acowell1@uwyo.edu",
    website: "",
    bio: `Ashley grew up in California and earned a BS in environmental sciences from the University of California, Berkeley. As an undergraduate, she completed projects studying macroinvertebrate diets under climate change and mule deer responses to development during migrations. Before joining the Merkle Research Group, she worked as a technician with the Oregon Department of Fish and Wildlife studying mule deer fawn survival, and then surveying salmon spawning. Ashley is broadly interested in animal behavior and decision-making, with a specific interest in movement ecology. Her research aims to understand how and why mule deer explore novel habitats. She hopes a clearer understanding of exploration will strengthen management efforts for declining mule deer populations. Outside of research, Ashley loves spending her time hiking, taking care of her houseplants, and decorating her apartment.`
  },
  {
    id: "team13",
    name: "Hannah Qualm",
    title: "Undergraduate Researcher",
    img: "assets/img/team/hannah_qualm.jpg",
    email: "",
    website: "",
    bio: `Hannah is currently pursuing a Bachelor’s in Wildlife and Fisheries Biology and Management at the University of Wyoming. Growing up in Buffalo, Wyoming, at the base of the Bighorn Mountains, she has always been passionate about exploring the outdoors. Being around amazing views and bountiful wildlife has cultivated her drive to learn more about wildlife and fisheries management. Hannah is contributing to a study on bison grazing areas in Yellowstone National Park by developing AI tools for detecting species presence in wildlife camera photos. In her free time, Hannah enjoys spending time in the mountains, as well as hiking, fishing, and traveling.`
  },
  {
    id: "team7",
    name: "Ben Robb",
    title: "Research Scientist",
    img: "assets/img/team/ben_robb.png",
    email: "brobb@uwyo.edu",
    website: "",
    bio: `Ben is an ecologist with a special admiration for wildlife movement. Ben joined the Merkle crew in 2023 to lead the science support team for the USDA-NRCS Working Lands for Wildlife program focused on conserving big game migration habitat. He is motivated by finding ways that spatial tools can benefit wildlife management. Ben’s research interests can be found at the intersection of wildlife and anthropogenic landscapes. Ben is from Pittsburgh, PA and completed his B.S. in Biology at Wake Forest University (2015), and M.S. in zoology at University of Wyoming (2020). In his free time, Ben enjoys trail running, biking, kayaking, skiing, and learning guitar.`
  },
  {
    id: "team8",
    name: "Tucker Russell",
    title: "MS Student",
    img: "assets/img/team/tucker_russell.png",
    email: "trusse12@uwyo.edu",
    website: "",
    bio: `Tucker grew up in central Wyoming and received his Bachelor’s degree in Zoology and Physiology from the University of Wyoming in 2019. As an undergraduate, Tucker worked on a research project assessing how the presence or absence of the gastrointestinal microbiome influenced severity of Toxoplasma gondii infection in mice. Tucker’s research involves development and optimization of antemortem tests to detect chronic wasting disease (CWD). Additionally, he will assess habitat use and movement ecology of CWD positive and negative mule deer in central Wyoming. When not in the lab or office, Tucker enjoys spending time fly fishing, mountain biking, trail running, skiing, and snapping pictures with his camera.`
  },
  {
    id: "team10",
    name: "Jessie Shapiro",
    title: "Research Scientist",
    img: "assets/img/team/jessie_shapiro.png",
    email: "jessie.shapiro@uwyo.edu",
    website: "https://www.shapirogis.com",
    bio: `Jessie graduated from the University of Montana with a bachelor’s degree in wildlife biology in 2015. After working numerous field positions ranging from avian studies in Alaska to wolf research in the boundary waters, she decided to center her focus on GIS methods and its applications in wildlife conservation. Jessie completed her GIS certificate in 2017 and received her master’s degree in GIS at the University of Utah in 2021. In her role at the Merkle Research Group, she focuses on the interplay of wildlife migration and GIS, supporting data and development needs and conducting analyses on wildlife movement data. When not tracking wildlife, she enjoys skiing, biking, climbing, and spending time with her husband and dog.`
  },
  {
    id: "team12",
    name: "Kurt Smith",
    title: "Research Scientist",
    img: "assets/img/team/kurt_smith.png",
    email: "ksmith94@uwyo.edu",
    website: "",
    bio: `Kurt grew up and Pennsylvania and slowly migrated west to pursue opportunities in wildlife ecology and management. He has a B.S. in biology from Mansfield University, an M.S. in fisheries ecology and management from Southern Illinois University and earned his PhD in ecology at the University of Wyoming in 2016. His primary motivation is to bring scientific understanding and management tools that can be applied by resource managers to facilitate species conservation. In his free time, Kurt enjoys many of the seasonal outdoor recreational opportunities that Wyoming has to offer.`
  },
  {
    id: "team15",
    name: "Lucas Thorsness",
    title: "Research Scientist",
    img: "assets/img/team/lucas_thorsness.png",
    email: "lthorsne@uwyo.edu",
    website: "",
    bio: `Lucas grew up in Laramie, Wyoming before venturing to Montana State University to get his bachelor's degree in environmental studies and GIS. After a couple years of work in various conservation jobs, he found a passion for private land conservation during a stint with a land trust in Colorado. In 2022, he returned to school at the University of Wyoming for a master's degree at the Haub School of Environment and Natural Resources, studying methods for prioritizing conservation on working lands based on their water resources. He joined the Merkle Group in 2024 and is excited to contribute to work relating to private land conservation for protecting wildlife and ecosystems. Outside of work, Lucas will typically be found on skis, a bicycle, at one of his favorite fishing holes, or at the local disc golf course, often with his two dogs in tow.`
  },
  {
    id: "team14",
    name: "Ashley Townsend",
    title: "Research Assistant",
    img: "assets/img/team/ashley_townsend.png",
    email: "atownse8@uwyo.edu",
    website: "",
    bio: `Ashley grew up in Minnesota and received her Bachelor's degree in fish and wildlife management and biology from the University of Wyoming in 2017. Since then, she has been a research technician for several university studies and state agencies, working mostly with ungulate species. Currently, she is a drone technician for PhD student Anne Scholle. She hopes to pursue a Master's degree in the near future. In her free time, Ashley enjoys backpacking, horseback riding, fly fishing and photography.`
  },
    {
    id: "team16",
    name: "Eric Van Beek",
    title: "PhD Student",
    img: "assets/img/team/eric_vanbeek.jpg",
    email: "evanbeek@uwyo.edu",
    website: "",
    bio: `Eric grew up in Wisconsin where he earned his BS in wildlife ecology from the University of Wisconsin Stevens Point in 2017. Soon after, he traveled to Delaware, Kentucky, Nebraska, and Idaho where he worked as a wildlife technician for various universities and state agencies. Eric completed his MS at the University of Idaho in 2023, studying moose demography and space use across Idaho before starting his most recent position as a regional wildlife biologist for the Idaho Department of Fish and Game. Currently Eric is a PhD student focused on understanding how the use of virtual fence grazing practices can benefit ungulates, livestock, and the landscapes in which they live.`
  }
];



const teamList = document.getElementById("teamList");
  const popupContainer = document.getElementById("popupContainer");

  teamMembers.forEach(member => {
    // team card
    teamList.innerHTML += `
      <div class="column">
        <div class="team-6">
          <div class="team-img" data-tab="${member.id}">
            <img src="${member.img}" alt="Team Image">
          </div>
          <div class="team-content">
            <h2>${member.name}</h2>
            <h3>${member.title}</h3>
          </div>
        </div>
      </div>
    `;

    // Popup modal
    popupContainer.innerHTML += `
      <div class="popup_wrap" id="${member.id}">
        <div class="overlay"></div>
        <div class="popup_box">
          <div class="close_btn"></div>
          <div class="left_image">
            <img src="${member.img}" alt="${member.name}"/>
          <span class="email">
            <strong>Email:</strong> ${member.email}
            ${member.website ? `<br><strong><a href="${member.website}" target="_blank">Visit Website</a></strong>` : ""}
          </span>
          </div>
          <div class="right_content">
            <h2>${member.name} <br>
              <span class="status">${member.title}</span>
            </h2>
            <p>${member.bio}</p>
          </div>
        </div>
      </div>
    `;
  });


  // Lab Alumni Section

  const labAlumni = [
      {
    id: "alumni14",
    name: "Lucas Olson",
    title: "Research Scientist",
    img: "assets/img/team/lucas_olson.png",
    email: "lucas.olson@uwyo.edu",
    website: "",
    bio: `Lucas grew up in Wisconsin, where he earned his B.S. and M.S. in Wildlife Ecology from the University of Wisconsin-Madison. There, he studied moose and white-tailed deer spatial ecology. Following this, he worked for the Mule Deer Foundation and Arizona Game and Fish Department researching and mapping big game migration corridors. His current work is focused on a large mule deer GPS monitoring project in collaboration with the Wyoming Game and Fish Department with the goal of improving mule deer management and strengthening populations. Lucas is an avid hunter and fisherman.`
  },
  {
    id: "alumni15",
    name: "Anne Scholle",
    title: "PhD Student",
    img: "assets/img/team/anne.png",
    email: "anne.scholle@uwyo.edu",
    website: "",
    bio: `Anne grew up in Maryland, and has a BA in psychology from Dickinson College and an MSc in Conservation Science from Imperial College London. Anne’s PhD research focuses on the role of cognition and sociality in group dynamics and collective decision making in migratory ungulates. Prior to joining the Merkle Research Group, Anne was a research intern with the Asian elephants at the National Zoo in Washington, DC and a program manager with The Center for Mind-Body Medicine. Anne loves backpacking, Ultimate Frisbee, elephants, and lazy mornings with coffee and a crossword puzzle.`
  },
    {
    id: "alumni13",
    name: "Josh Layfield",
    title: "MS Student",
    img: "assets/img/team/josh.png",
    email: "jlayfiel@uwyo.edu",
    website: "",
    bio: `Josh grew up in east Tennessee and received his Bachelor’s degree in Wildlife and Fisheries Science from the University of Tennessee in 2016. During his undergraduate studies, Josh worked as a field technician assisting with investigations of cattle grazing strategies in native-warm season grass pastures and their effects on nesting songbirds. His research focuses on the winter movement and behavior of golden eagles around anthropogenic stimuli in Wyoming. In his spare time time, Josh can be found wading the waters of the North Platte River, rock-climbing, birding, or hiking with his partner and their two pups Pippin & Myotis.`
  },
    {
    id: "alumni12",
    name: "Marie-Pier Poulin",
    title: "Research Scientist",
    img: "assets/img/team/mp.png",
    email: "mpoulin1@uwyo.edu",
    website: "https://scholar.google.com/citations?user=WkpLMyMAAAAJ",
    bio: `Marie-Pier grew up in Québec, and received her bachelor’s degree in biology from the Université du Québec à Rimouski in 2019. As an undergraduate, she spent two summers studying arctic foxes in the Canadian High Arctic, where she developed a strong interest in movement ecology. For her MSc, Marie-Pier investigated how forage availability and sociality influence how GPS-collared elk interact with the Trans-Canada highway in Yoho National Park. Now, Marie-Pier is developing methods to assess how social network analyses can be used to understand the potential for disease spread across large landscapes. Marie-Pier enjoys spending time in the mountains, loves being out riding her bike, canoeing down new rivers and skiing powder on cold and sunny winter days.`
  },
  {
    id: "alumni11",
    name: "Gabe Barrile",
    title: "Postdoc",
    img: "assets/img/team/gabe.png",
    email: "gbarrile@uwyo.edu",
    website: "https://gabrielbarrile.weebly.com/",
    bio: `Gabe is some version of an applied quantitative ecologist. He works at the intersection of disease ecology, population demography, and animal behavior, using data science techniques to provide evidence-based solutions to conservation challenges. Gabe has worked in several wildlife disease systems, from chytrid fungus in amphibians to sylvatic plague in prairie dogs. At the University of Wyoming, Gabe will explore the extent to which animal movement data can be used to infer behavioral states such as infection with emerging diseases. For instance, Gabe will use GPS collar data from migrating ungulates to determine whether movement signatures can predict individual infection status with chronic wasting disease. Outside of work, Gabe enjoys playing basketball, looking for beaver ponds, and watching the Golden Girls. Google Scholar page: https://scholar.google.com/citations?user=lFpoeToAAAAJ&hl=en&oi=ao`
  },
    {
    id: "alumni10",
    name: "Tana Verzuh",
    title: "PhD Student",
    img: "assets/img/team/tana.png",
    email: "tverzuh@uwyo.edu",
    website: "https://tverzuh.wixsite.com/ecology",
    bio: `Tana grew up in western Colorado and has a BS in zoology from Colorado State, an MS in science education from Montana State, and an MS in zoology from the University of Wyoming. Broadly, Tana is interested in movement ecology and animal learning and memory. Tana’s research focuses on the reintroduced bison population in Banff National Park, Canada, aiming to understand the underpinnings of how animals learn a novel environment and how that knowledge influences space use and home range formation. In addition, she is interested in how sociality influences learning and the effectiveness of various interventions, such as prescribed burns and fencing, on space use. When not in the lab or in the field you can find Tana on the river, riding her bike, or in search of powder with her dog, Goose.`
  },

  {
    id: "alumni1",
    name: "Mike Laforge",
    title: "Postdoc",
    img: "assets/img/team/mike_laforge.png",
    email: "m.laforge@mun.ca",
    website: "https://mammalspatialecology.weebly.com/",
    bio: `Mike has a PhD from Memorial University in St. John’s, Newfoundland, Canada. Mike’s research focuses on how migratory animals deal with inter- and intra-annual variation in resource phenology. His research aims to bridge behavioral and spatial ecology by examining consistent individual differences in migratory behavior. His research at the University of Wyoming focuses on how individuals acclimate—or how populations might adapt—to changing environmental conditions by looking at how individuals acclimate their migration and resource selection behavior as a function of the timing of spring green-up. Mike enjoys hiking, canoeing and exploring new places.`
  },
  {
    id: "alumni2",
    name: "Steffen Mumme",
    title: "Data Science Consultant",
    img: "assets/img/team/steffen_mumme.png",
    email: "",
    website: "https://cms.int/gium",
    bio: `Steffen is a wildlife biologist, fascinated by maps, and widely interested in conservation biology and the understanding of human impacts on wildlife. A B.A. in Geography & Biology and a M.Sc. in Ecology triggered Steffen’s interest for wildlife biology and movement ecology. After working for a wildlife research institute in Northern Germany, studying movements of GPS tracked red foxes, he decided to take on a PhD project shared between two Italian research teams and UC Berkeley to study large ungulate movements. Steffen received a PhD from La Sapienza University of Rome studying how human activity affects red deer and elk movements in Europe and the Greater Yellowstone Ecosystem. He currently works as a data science consultant for the Global Initiative on Ungulate Migration (cms.int/gium) and coordinates the large-scale mapping effort to produce a global atlas of ungulate migrations. When not working, Steffen enjoys being outside, likely rock climbing, hiking, or swimming.`
  },
  {
    id: "alumni3",
    name: "Justine Becker",
    title: "Postdoc",
    img: "assets/img/team/jabecker.png",
    email: "",
    website: "https://jabeckerecology.com",
    bio: `Justine is a behavioral ecologist broadly interested in understanding the ecological causes of individual behavioral variation and the consequences of this variation at the population- and community-level. Her work focuses on why, when and where animals decide to move, how these individual decisions are affected by spatio-temporal heterogeneity, and their impacts on ecosystem processes. Justine received her B.A. in History and B.Sc. in Biological Sciences from the University of Auckland in her home country of New Zealand. She recently completed her Ph.D. in Ecology and Evolutionary Biology at Princeton University where she studied the movement ecology of antelope in Mozambique’s Gorongosa National Park. At the University of Wyoming, Justine studied the individual drivers of animal movement decisions, focusing on the origin and maintenance of multiple movement strategies in Wyoming’s pronghorn populations. Outside of work, Justine loves being outdoors, hiking, and birding. Justine is now an assistant professor at Montana State University. Justine’s website: jabeckerecology.com.`
  },
  {
    id: "alumni4",
    name: "Emily Gelzer",
    title: "MS Student",
    img: "assets/img/team/emily_gelzer.png",
    email: "egelzer@uwyo.edu",
    website: "https://www.westernwildliferesearch.org/",
    bio: `Emily received her bachelor’s degree in environmental biology at Fort Lewis College in Durango, CO. Emily fell in love with the southwestern landscape and found her passion for fisheries and wildlife while working different technician positions scattered across the west. Emily’s research focused on how mule deer fidelity to migration routes at the individual level scales up to patterns at the population level and if this relationship is mediated by habitat consistency. Emily enjoys basically anything outdoors, warm weather, the little things in life, and spoiling her dog. Emily is currently a research scientist with the Wyoming Migration Initiative.`
  },
  {
    id: "alumni5",
    name: "Nate Bowersock",
    title: "Wildlife Data Analyst",
    img: "assets/img/team/bowersock.png",
    email: "",
    website: "",
    bio: `Nate is originally from Michigan, but has been working with large mammals, such as wolves, black bears and grizzly bears, for the last 12 years in the Greater Yellowstone Ecosystem. He has a BS in wildlife ecology and management from Michigan Technological University and a MS in fish and wildlife management from Montana State University. He is interested in how the availability and quality of resources influences the movement and density distribution of wildlife species. Nate assisted the Merkle Research Group with studies focused on how the quality of spring forage influences grizzly bear movements throughout North American, and how energy development impacts resource use by ungulates in Wyoming. In his free time, Nate likes to travel and go on birding adventures with his wife. Nate is currently a large carnivore specialist for Missouri Department of Conservation.`
  },
  {
    id: "alumni6",
    name: "Becca Thomas Kuzilik",
    title: "MS Student",
    img: "assets/img/team/thomas_kuzilik.png",
    email: "",
    website: "",
    bio: `Becca is studying climate and movement ecology, specifically how movement patterns of ungulates respond to extreme temperatures. On a broad scale, she is interested in pursuing a professional and academic career with large mammals: how they move, inter- and intraspecies interactions, and how scientific research can lead to conservation of species and habitats. Prior to joining the Merkle Research Group, Becca primarily worked on carnivores, including wolves, cougars, ocelots, bobcats and leatherback turtles. Becca loves traveling, tea, unlikely animal friendships, and exploring the backcountry. Becca is currently a biologist with Grand Teton National Park.`
  },
  {
    id: "alumni7",
    name: "Mallory Lambert",
    title: "MS Student",
    img: "assets/img/team/mallory.png",
    email: "",
    website: "",
    bio: `Mallory grew up at the foot of the Wasatch mountains in Utah where she discovered her passion for wildlife and the outdoors. She received a bachelor’s degree in biology and a minor in spanish from the University of Utah in 2013. In the Merkle lab, Mallory’s project will investigate human development thresholds on ungulate movement and migration, specifically looking into the density at which residential, agricultural, and energy development begin to have a significant impact on movement and migration. Outside of the lab, she loves hanging with her dog, climbing rocks, and traveling to Latin American countries. Mallory is currently a PhD student at Utah State University.`
  },
  {
    id: "alumni8",
    name: "Nathan Hough",
    title: "MS Student",
    img: "assets/img/team/nathan_hough.png",
    email: "",
    website: "",
    bio: `Nathan completed a B.S. in Wildlife Biology and Management in 2014 from University of Wyoming while racing on the University Nordic ski team. Nathan has held a number of field jobs. Notably, Nathan has helped document the first flammulated owls in the Jackson Hole area, and has worked on golden eagles and lead exposure. Nathan’s research focused on golden eagle winter habitat usage and more specifically, how various risks plays a role in winter movements. Nathan enjoys running, biking, skiing, climbing, and basically anything else outdoors.`
  },
  {
    id: "alumni9",
    name: "Jaden Brutsman",
    title: "Undergraduate Researcher",
    img: "assets/img/team/jaden_brustman.png",
    email: "",
    website: "",
    bio: `Undergraduate Researcher. Jaden grew up in central Wyoming before moving to Laramie to pursue a BS in wildlife biology and management. She is working alongside Molly Caldwell on a project which analyzes wildlife spatial and temporal activity shifts in response to human recreation. Her research will contribute to current management plans by analyzing potential wildlife community dynamic disruptions in wilderness areas where human recreation occurs. After graduating with her BS, she aspires to attend graduate school to continue researching human/wildlife interactions. Jaden enjoys spending time hiking, backpacking, and snowshoeing in the mountains.`
  }



];


  labAlumni.forEach(member => {
// Render card
document.getElementById("alumniList").innerHTML += `
    <div class="column">
      <div class="team-6">
        <div class="team-img" data-tab="${member.id}">
          <img src="${member.img}" alt="${member.name}" />
        </div>
        <div class="team-content">
          <h2>${member.name}</h2>
          <h3>${member.title}</h3>
        </div>
      </div>
    </div>
    `;


// Render popup
document.getElementById("alumniPopupContainer").innerHTML += `
  <div class="popup_wrap" id="${member.id}">
    <div class="overlay"></div>
      <div class="popup_box">
        <div class="close_btn"></div>
          <div class="left_image">
          <img src="${member.img}" alt="${member.name}" />
            <span class="email">
            ${member.email ? `<strong>Email:</strong> ${member.email}<br>` : ""}
            ${member.website ? `<strong><a href="${member.website}" target="_blank">Visit Website</a></strong>` : ""}
            </span>
          </div>
          <div class="right_content">
            <h2>${member.name}<br>
              <span class="status">${member.title}</span>
            </h2>
          <p>${member.bio}</p>
        </div>
    </div>
  </div>
  `;
});