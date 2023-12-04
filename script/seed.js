/* eslint-disable no-warning-comments */
/* eslint-disable max-statements */
// 'use strict'
const db = require('../server/db')
const {User, Product} = require('../server/db/models')
// const {Product} = require('../server/db/models')
const faker = require('faker')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const lightingArray = [
    'This plant does well in low light.',
    'This plant does best in partial shade.',
    'This plant does best in bright direct sunlight.',
  ]

  const wateringArray = [
    'This plant needs to be watered once a week.',
    'This plant needs to be watered daily.',
    'This plant needs to be watered every 30 minutes or it will DIE!',
  ]

  const categoriesArray = ['Succulents', 'Indoor', 'Outdoor', 'Pet-Friendly']

  const imageUrlArray = [
    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_the-pet-friendly-bundle_variant_growpot_none_360x.jpg?v=1613171147',
    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_coffee-plant_variant_small_grant_mint_360x.jpg?v=1613663664',
    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_the-vertical-space-bundle_variant_growpot_none_360x.jpg?v=1613177115',
    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Faux_Money_Tree_Pallas_Grey_Varian.jpg?v=1684506379&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_kokedama-plant_variant_all_01_360x.jpg?v=1571677621',
    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_LargeMajestyPalm_Large_Mexiaplanter-CementGrey_variant.jpg?v=1698271068&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Large-Cat-Palm_Large_Pallas_Cream_Variant_1.jpg?v=1692822986&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Faux_Variegated_Monstera_Large_Helena_Cream_Variant.jpg?v=1685669305&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_airplants-assorted_6_360x.jpg?v=1585928827',
    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_peperomia-green_variant_medium_grant_cream_360x.jpg?v=1613669717',
    'https://cdn.mall.adeptmind.ai/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0150%2F6262%2Fproducts%2Fthe-sill_parlor-palm_variant_medium_grant_black.jpg%3Fv%3D1663952228_large.webp',
    'https://cdn.mall.adeptmind.ai/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0150%2F6262%2Fproducts%2Fthe-sill_parlor-palm_variant_medium_grant_black.jpg%3Fv%3D1663952228_large.webp',
    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Holiday-Duo-Deluxe_Large_Mexia_Cream_Variant.jpg?v=1700153995&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_xerographica-airplant_featured_360x.jpg?v=1585544743',
    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Large-Peace-Lily_Large_Balboa_Blush_Variant_1.jpg?v=1698441744&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Money-Tree_Large_Mexia_Black_Variant.jpg?v=1687308983&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_XL-Norfolk-Island-Pine_XL_Pallas_plant-stand_dark-bamboo_grey_Variant_0177be92-4564-436c-a2a9-cadc455f2b64.jpg?v=1700240935&width=400',
    'https://cdn.mall.adeptmind.ai/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0150%2F6262%2Fproducts%2Fthe-sill_parlor-palm_variant_medium_grant_black.jpg%3Fv%3D1663952228_large.webp',
    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-laurentii_variant_small_hyde_terracotta_360x.jpg?v=1612476363',
    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_pet-friendly_subscription_marianne_white_variant.jpg?v=1692625420&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_ficus-tineke_single-stalk_8in_growpot_variant_1.jpg?v=1699996705&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_faux-maiden-hair-fern-kokedama_variant_small_01_360x.jpg?v=1611684630',
    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_faux-succulent-assorted_variant_small_bryant_cream_360x.jpg?v=1611352312',
    'https://cdn.shopify.com/s/files/1/0150/6262/files/The-sill_easy-care-duo_marcella_gold_variant.jpg?v=1700079238&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_coco-coir-pole_gallery_all_all_all_01.jpg?v=1623792757&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Medium-Snake-Sayuri_Medium_Hyde_Olive_Variant.jpg?v=1696520099&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_faux-monstera-leaves_featured_360x.jpg?v=1583784760',
    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_faux-succulent-assorted_variant_small_bryant_cream_300x.jpg?v=1611352312',
    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Medium-Snake-Moonshine_Medium_Hyde_Cream_Variant.jpg?v=1686664154&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_fave-five-bundle_hyde_cream_variant.jpg?v=1693582772&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Large-Dracaena-Marginata-Cane_Large_Helena_Tan_Variant.jpg?v=1700517320&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_living-moss-wall_featured_360x.jpg?v=1572540058',
    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_monstera_variant_medium_hyde_mint_f0e6d601-426c-40fe-abc6-b0a1f4dce17b.jpg?v=1672212220&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_potted-succulent-assortment_variant_6_growpot_none_360x.jpg?v=1613080263',
    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_golden-pothos-hanging-basket_variant_01_ab0d2cac-1355-4e54-8ab7-510c8187e55b.jpg?v=1694710823&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/products/The-Sill_HoyaCarnosa_Small_Hyde_Mint_Variant.jpg?v=1690598107&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-tradescantia_zebrina.jpg?v=1680294328&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_coffee-plant_variant_small_grant_mint_360x.jpg?v=1613663664',
    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Small-Stromanthe-Triostar_Small_Marcelle-Gold_Variant.jpg?v=1699403462&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-laurentii_gallery_medium_all_all_05_360x.jpg?v=1611075863',
    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_tradescantia-quadricolor_small_marianne_white_variant.jpg?v=1691683238&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Large-Olive-Tree_Large_Pallas_Cream_Variant_1.jpg?v=1698270655&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_peperomia-obtusfolia_gallery_medium_all_all_05_d78bbda7-eb48-4d0f-8c62-12d71421f7f9_360x.jpg?v=1613669717',
    'https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-pothos_njoy.jpg?v=1680294243&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_coffee-plant_gallery_all_02_360x.jpg?v=1613663664',
    'https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-peperomia_green_gold.jpg?v=1680297668&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Small-Philo-Imperial-Green_Small_Marcelle-Gold_Variant.jpg?v=1699404464&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_best-sellers-duo_variant_cream.jpg?v=1655960695&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_hardy-houseplants-duo_hyde_mint.jpg?v=1672212475&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_plant-parent-set_variant_five-plants_360x.jpg?v=1611704776',
    'https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-echevaria_garotto.jpg?v=1680293880&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_holiday-trio_hyde_cream_variant.jpg?v=1699325638&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Bird-Of-Paradise_Medium_Hyde_Cream.jpg?v=1682608578&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_New-Digs-Trio_Growpots_Variant.jpg?v=1696945431&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_ficus-tineke_gallery_small_all_all_04_360x.jpg?v=1611355039',
    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Small-Maranta-Red_Small_Hyde_Stone_Variant.jpg?v=1696519182&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_wintergreen-cherry-berries_small_isabella_gold_variant.jpg?v=1699453354&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/files/The-sill_peperomia-raindrop_small_marianne_white_variant.jpg?v=1698698223&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Large-Bird-of-Paradise_Large_Balboa_Sage_Variant.jpg?v=1698270934&width=400',
    'https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Large-Corkscrew-Croton_Large_Balboa_Cream_Variant.jpg?v=1698438472&width=400',
  ]

  const productNameArray = [
    'Coffee Plant',
    'Pet-Friendly Bundle',
    'Magical Willow',
    'Carnivorous Roses',
    'Poisonous Mushrooms',
    'Vertical Space Bundle',
    'String of Pearls',
    'Fern Bundle',
    'Shrivelfig',
    'Bubotuber',
    `Devil's Snare`,
    `Gillyweed`,
    `Leaping Toadstools`,
    `Venemous Tentacula`,
    `Mandrake`,
    `Mimbulus Mimbletonia`,
    `Wolfsbane`,
    `Wiggentree`,
    `Alihotsy`,
    `Asphodel`,
    `Bouncing Bulb`,
    `Dittany`,
    `Fanged Geranium`,
    `Flitterbloom`,
    `Flutterby Bush`,
    `Sopophorous Plant`,
    `Sneezewort`,
    `Snargaluff`,
    `Umbrella Flower`,
    `Valerian`,
    `Whomping Willow`,
    `Wormwood`,
    `Puffapod`,
    `Self-fertilising shrub`,
    `Fluxweed`,
    `Honking daffodil`,
    `Knotgrass`,
    `Screechsnap`,
    `Agapanthus`,
    `Angel's Trumpet`,
    `Arnica`,
    `Borage`,
    `Cowbane`,
    `Elder Tree`,
  ]

  const plantDescriptionsArray = [
    "Guaranteed to perk up your living room decor, although it won't replace your espresso machine.",
    'A non-toxic entourage of greenery that promises to keep pets entertained and owners worry-free.',
    'This whimsical tree sways gently, casting enchanting shadows that dance across your garden of mystery.',
    'Floral beauties with a voracious appetite; handle with care and perhaps, a pair of gloves.',
    'Delightfully toxic, these fungi are the talk of the underworld—perfect for a villain’s greenhouse.',
    'Sky-high greenery that brings a piece of the jungle into urban dwellings, minus the monkeys.',
    'Resembling beads of nature’s jewelry, these succulents bring boho chic to any room.',
    'A cluster of fronds that could make any dinosaur feel at home or anyone with a fern fascination.',
    'A shriveled wonder that thrives on neglect, and the occasional watering from a frenemy.',
    'Garden grenades that add an element of surprise to your horticultural pursuits.',
    'A plant that prefers a good strangle over a hug; perfect for those who like a bit of danger in their gardening.',
    'Seaweed on land? This peculiar greenery might just be the next best thing for aspiring mermaids.',
    'Bouncy fungi that’ll make you think twice before sitting in your garden—just in case.',
    'Vigorous vines that ensure your garden party conversations never dry up.',
    'Not the kind to take home to your mother, unless she’s into botany and dark arts.',
    "A botanical oddity that's as mesmerizing as it is unsettling—best kept away from the inquisitive cat.",
    'Legendary for repelling everything from werewolves to door-to-door salesmen.',
    'A tree so noble, it might just start dispensing ancient wisdom or simply drop a branch. Be ready.',
    "The cheeriest plant around, it's known to induce spontaneous laughter upon sight.",
    "A solemn herb that looks like it's always preparing for a botanical funeral.",
    'A botanical bouncer, these bulbs are always ready to leap into action at the slightest touch.',
    'The herb that every wizard’s garden should have; just in case of dragon burns or pesky trolls.',
    "The snap-happy geranium that's part flower, part bear trap.",
    'A gentle plant that prefers a lullaby before bedtime, else it gets restless.',
    "A bush that sways and flutters, convincing you there's a butterfly trapped inside.",
    'Soporific flora that can send an insomniac to dreamland without counting sheep.',
    'A quaint herb that will have you sneezing with delight—or is it an allergy?',
    'A stubborn shrub that might be part vegetable, part octopus.',
    'Not your usual floral fare, it’s known for its shade and occasional snark.',
    'A soothing herb that’s been a staple in night-time teas and witch’s potions alike.',
    'A temperamental tree that throws a tantrum (and shade) like no other.',
    'A herbaceous perennial that whispers dark secrets of the forest... or it might just be the wind.',
    "The botanical equivalent of a warm hug; it's self-sufficient, cuddly, and slightly ticklish.",
    'A self-sustaining spectacle that’s a testament to the lazy gardener’s dream.',
    'A magical herb that’s perfect for potions, or for when you need to stick your landing.',
    'The floral equivalent of a car alarm; it’s loud, attention-seeking, and effective at deterring visitors.',
    'A plant that’s perfect for the indecisive gardener: part grass, part blade, all drama.',
    'A blossom that screams for attention, literally. Its blooms are as loud as its colors.',
    'A flower that’s more at home in a fantasy novel than in your backyard.',
    'A plant that’s perfect for those who like their gardening with a side of first aid.',
    'A botanical wonder that may cause spontaneous cow herding tendencies.',
    'An ancient tree that could share a tale or two about the birds and the bees, literally.',
    'A greenery selection that’s an instant mood lifter, unless you’re a fly.',
  ]

  const productArray = []
  for (let i = 0; i < productNameArray.length; i++) {
    const name = productNameArray[i]
    const description = plantDescriptionsArray[i]
    const price = faker.random.number({
      min: 10,
      max: 999,
    })
    const category = faker.helpers.shuffle(categoriesArray)[0]
    const lighting = faker.helpers.shuffle(lightingArray)[0]
    const watering = faker.helpers.shuffle(wateringArray)[0]
    const imageUrl = imageUrlArray[i]
    const inventory = faker.random.number({
      min: 0,
      max: 100,
    })
    productArray.push({
      name,
      description,
      price,
      category,
      lighting,
      watering,
      inventory,
      imageUrl,
    })
  }

  const usersArray = []
  for (let i = 0; i < 40; i++) {
    const email = faker.internet.email()
    const password = faker.internet.password()
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const address = faker.address.streetAddress()
    const phone = faker.phone.phoneNumber()

    usersArray.push({
      email,
      password,
      firstName,
      lastName,
      address,
      phone,
    })
  }

  const users = await Promise.all(
    usersArray.map((user) => {
      return User.create(user)
    })
  )

  const products = await Promise.all(
    productArray.map((product) => {
      return Product.create(product)
    })
  )

  console.log(`seeded ${users.length} users with salted passwords`)
  console.log(`seeded ${products.length} products`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
