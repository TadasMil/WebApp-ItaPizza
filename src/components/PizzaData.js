import aitriuju from '../images/pizzas/pizza-aitriuju.png'
import egzotiska from '../images/pizzas/pizza-egzotiska.png'
import gardzioji from '../images/pizzas/pizza-gardzioji.png'
import gurmanu from '../images/pizzas/pizza-gurmanu.png'
import havaju from '../images/pizzas/pizza-havaju.png'
import mafijos from '../images/pizzas/pizza-mafijos.png'
import nepolio from '../images/pizzas/pizza-nepolio.png'
import provincijos from '../images/pizzas/pizza-provincijos.png'
import sicilijos from '../images/pizzas/pizza-sicilijos.png'
import socioji from '../images/pizzas/pizza-socioji.png'
import grybais from '../images/pizzas/pizza-su-grybais.png'
import vistiena from '../images/pizzas/pizza-su-vistiena.png'




export const PizzasData = [
    {
        id: 1,
        popular: false,
        newProduct: true,
        size: 42,
        price: 9.99,
        type: 'pizza',
        name: 'Aitriųjų paprikų',
        description: 'Kvietinių miltų pagrindas, pomidorų padažas, „Mozzarella“, pievagrybiai, saliamis, aitriosios paprikos, augalinis aliejus su česnaku',
        img: aitriuju
    }, 
    {
        id: 2,
        popular: true,
        newProduct: false,
        size: 42,
        price: 9.99,
        type: 'pizza',
        name: 'Egzotiška',
        description: 'Kvietinių miltų pagrindas, pomidorų padažas, „Mozzarella“, kiaulienos kumpis, konservuoti ananasai, augalinis aliejus su česnaku',
        img: egzotiska
    }
    , 
    {
        id: 3,
        popular: false,
        newProduct: false,
        size: 42,
        price: 9.99,
        type: 'pizza',
        name: 'Gurmanų',
        description: 'Kvietinių miltų pagrindas, pomidorų padažas, „Mozzarella“, saliamis, saulėje džiovinti pomidorai, artišokai, svogūnai, garstyčių padažas, augalinis aliejus su česnaku',
        img: gurmanu
    }
    , 
    {
        id: 4,
        popular: true,
        newProduct: false,
        size: 42,
        price: 9.99,
        type: 'pizza',
        name: 'Gardžioji',
        description: 'Kvietinių miltų pagrindas, pomidorų padažas, „Mozzarella“, karštai rūkyta kiaulienos šoninė, virtas jautienos kumpis, svogūnai, augalinis aliejus su česnaku',
        img: gardzioji
    }
    , 
    {
        id: 5,
        popular: false,
        newProduct: true,
        size: 42,
        price: 9.99,
        type: 'pizza',
        name: 'Havajų',
        description: 'Kvietinių miltų pagrindas, pomidorų padažas, „Mozzarella“, konservuoti ananasai, vištiena, švelnus saldžiarūgštis padažas, augalinis aliejus su česnaku',
        img: havaju
    }
    , 
    {
        id: 6,
        popular: true,
        newProduct: false,
        size: 42,
        price: 9.99,
        type: 'pizza',
        name: 'Mafijos',
        description: 'Kvietinių miltų pagrindas, pomidorų padažas,“Mozzarella“, saliamis, vištiena, alyvuogės, Berno padažas, Chalapos paprikos, padažas „Santa Fe“, augalinis aliejus su česnaku',
        img: mafijos
    }
    , 
    {
        id: 7,
        popular: false,
        newProduct: false,
        size: 42,
        price: 9.99,
        type: 'pizza',
        name: 'Nepolio',
        description: 'Kvietinių miltų pagrindas, pomidorų padažas, „Mozzarella“, vytintas saliamis “Napoli”, augalinis aliejus su česnaku',
        img: nepolio
    }
    , 
    {
        id: 8,
        popular: true,
        newProduct: false,
        size: 42,
        price: 9.99,
        type: 'pizza',
        name: 'Provincijos',
        description: 'Kvietinių miltų pagrindas, pomidorų padažas, „Mozzarella“, karštai rūkyta kiaulienos šoninė, svogūnai, marinuoti agurkėliai, augalinis aliejus su česnaku',
        img: provincijos
    }
    , 
    {
        id: 9,
        popular: false,
        newProduct: false,
        size: 42,
        price: 9.99,
        type: 'pizza',
        name: 'Sicilijos',
        description: 'Kvietinių miltų pagrindas, pomidorų padažas, „Mozzarella“, pievagrybiai, malta kiauliena, švž. paprikos, krapų padažas, augalinis aliejus su česnaku',
        img: sicilijos
    }
    , 
    {
        id: 10,
        popular: false,
        newProduct: true,
        size: 42,
        price: 9.99,
        type: 'pizza',
        name: 'Sočioji',
        description: 'Kvietinių miltų pagrindas, pomidorų padažas, „Mozzarella“, malta kiauliena, karštai rūkyta kiaulienos šoninė, svogūnai, augalinis aliejus su česnaku',
        img: socioji
    }
    , 
    {
        id: 11,
        popular: false,
        newProduct: false,
        size: 42,
        price: 9.99,
        type: 'pizza',
        name: 'Su grybais',
        description: 'Kvietinių miltų pagrindas, pomidorų padažas, „Mozzarella“, kiaulienos kumpis, pievagrybiai, marinuoti agurkėliai, augalinis aliejus su česnaku',
        img: grybais
    }
    , 
    {
        id: 12,
        popular: true,
        newProduct: false,
        size: 42,
        price: 9.99,
        type: 'pizza',
        name: 'Su vištiena',
        description: 'Kvietinių miltų pagrindas, pomidorų padažas, „Mozzarella“, pievagrybiai, vištiena, marinuoti agurkėliai, augalinis aliejus su česnaku',
        img: vistiena
    }
    , 
    {
        id: 13,
        popular: false,
        newProduct: false,
        size: 160,
        price: 2.40,
        type: 'burger',
        name: 'Vištytė',
        description: 'Sultinga vištienos krūtinėlė, padengta unikalaus skonio aštria ir prieskoninga tešla, traškios salotos ir majonezas. Visa tai patiekta tarp dviejų gardžių sezamo bandelių.',
        img: 'https://d1z9yk8rgnwm74.cloudfront.net/QyL3Po3Vom92RG5BKMmSdEjH.png?dw=230'
    }
    , 
    {
        id: 14,
        popular: true,
        newProduct: false,
        size: 250,
        price: 5.50,
        type: 'burger',
        name: 'Tornadas',
        description: 'Pagardintas ne tik unikalaus skonio vištiena bei šonine, bet ir svogūnais. BBQ bei majonezo padažai, šviežios salotos, pomidoras ir čederio sūris tikrai nepaliks abejingų! Galima rinktis tarp klasikinio ir aštraus.',
        img: "https://d1z9yk8rgnwm74.cloudfront.net/9pCKXv6Mc9YgDPMvHLVHPRFx.png?dw=230"
    }
    , 
    {
        id: 15,
        popular: false,
        newProduct: false,
        size: 160,
        price: 2.50,
        type: 'burger',
        name: 'Gaidžiukas',
        description: 'Sultinga vištienos krūtinėlė, padengta unikalaus skonio aštria ir prieskoninga tešla, traškios salotos ir majonezas. Visa tai patiekta tarp dviejų gardžių sezamo bandelių.',
        img: "https://d1z9yk8rgnwm74.cloudfront.net/9Mqc3FLWKns7QNrnPXnQ9GyL.png?dw=230"
    }
    , 
    {
        id: 16,
        popular: false,
        newProduct: true,
        size: 300,
        price: 6.00,
        type: 'burger',
        name: 'Vištiena MAX',
        description: 'Bandelė, traški vištienos lazdelė, marinuoti agurkėliai, svogūnai, pomidorų padažas, majonezas.',
        img: "https://d1z9yk8rgnwm74.cloudfront.net/Vj7of8z3jJiqZNqmsCEjA9gv.png?dw=230"
    }
    , 
    {
        id: 17,
        popular: false,
        newProduct: false,
        size: 250,
        price: 5.80,
        type: 'burger',
        name: 'Aštrusis Meksikietiškas',
        description: 'Pagardintas ne tik unikalaus skonio vištiena bei šonine, bet ir svogūnais. Na, o BBQ bei majonezo padažai, šviežios salotos, pomidoras ir čederio sūris tikrai nepaliks abejingų! Galima rinktis tarp klasikinio ir aštraus.',
        img: "https://d1z9yk8rgnwm74.cloudfront.net/wsmFJTHDsR3xsCvPZzLV8da7.png?dw=230"
    }
    , 
    {
        id: 18,
        popular: false,
        newProduct: false,
        size: 200,
        price: 4.40,
        type: 'burger',
        name: 'Paprastasis su sūriu',
        description: 'Bandelė, čederio sūris, traški vištienos lazdelė, marinuoti agurkėliai, svogūnai, pomidorų padažas, garstyčios.',
        img: "https://d1z9yk8rgnwm74.cloudfront.net/ZsBZBtHHdMgz5xY8tyvXu7W6.png?dw=230"
    }
    , 
    {
        id: 19,
        popular: false,
        newProduct: false,
        size: 500,
        price: 6.50,
        type: 'suktinis',
        name: 'Suktinis Kumpiukas',
        description: 'Kvietinių miltų pagrindas, pomidorų padažas, „Mozzarella“, forminis kiaulienos kumpis, pievagrybiai, augalinis aliejus su česnaku',
        img: "https://www.noriupicos.lt/wp-content/uploads/2019/04/80e835a1-63c5-491d-a16a-113e405c4b48-300x177.png"
    }
    , 
    {
        id: 20,
        popular: false,
        newProduct: false,
        size: 500,
        price: 6.50,
        type: 'suktinis',
        name: 'Suktinis HOT',
        description: 'Kvietinių miltų pagrindas, pomidorų padažas, „Mozzarella“, malta kiauliena, švž. paprikos, Chalapos paprikos, augalinis aliejus su česnaku.',
        img: "https://www.noriupicos.lt/wp-content/uploads/2019/04/foto-picos-www_1200px_0032_suktinukai_a-300x177.png"
    }
    , 
    {
        id: 21,
        popular: false,
        newProduct: false,
        size: 500,
        price: 6.50,
        type: 'suktinis',
        name: 'Vištienos suktinis',
        description: 'Kvietinių miltų pagrindas, pomidorų padažas, „Mozzarella“, vištiena, pievagrybiai, konservuotos paprikos, augalinis aliejus su česnaku',
        img: "https://www.noriupicos.lt/wp-content/uploads/2019/04/foto-picos-www_1200px_0032_suktinukai_v-300x177.png"
    }
    , 
    {
        id: 22,
        popular: true,
        newProduct: false,
        size: 300,
        price: 3.20,
        type: 'kebab',
        name: 'Kebabas su vištiena',
        description: 'Traškus kebabas su vištiena, pagardintas padažais. Šviežios daržovės, tarp jų ridikėliai, pomidorai, agurkai, salotų lapai.',
        img: "https://d1z9yk8rgnwm74.cloudfront.net/BvNZa9xe1NZ66ujjS9Apxcso.png?dw=230"
    }
    , 
    {
        id: 23,
        popular: false,
        newProduct: false,
        size: 300,
        price: 3.20,
        type: 'kebab',
        name: 'Kebabas su kiauliena',
        description: 'Traškus kebabas su kiauliena, pagardintas padažais. Šviežios daržovės, tarp jų ridikėliai, pomidorai, agurkai, salotų lapai.',
        img: "https://d1z9yk8rgnwm74.cloudfront.net/BvNZa9xe1NZ66ujjS9Apxcso.png?dw=230"
    }
]