/* =============================================
   EL BÚHO — Main Script
   Restaurante Vegetariano · San Pedro, CR
   ============================================= */

// ============================================================
//  MENU DATA  (source: buho_menu_principal.json + brunch JSON)
// ============================================================
const MENU = {
  principal: {
    tabLabel: { es: 'Menú Principal', en: 'Main Menu' },
    allergenNote: {
      es: '⚠ La cocina manipula gluten, lácteos, huevos, soya y semillas/nueces. Consulte a su mesero.',
      en: '⚠ The kitchen handles gluten, dairy, eggs, soy and nuts/seeds. Please ask your server.'
    },
    sections: [
      {
        id: 'entradas',
        label: { es: 'Entradas', en: 'Starters' },
        items: [
          {
            name:  { es: 'Ceviche Búho', en: 'Búho Ceviche' },
            desc:  { es: 'Champiñones y chayote en leche de tigre vegana, mayonesa de aguacate, cebolla morada y maíz tostado.', en: 'Mushrooms and chayote in vegan leche de tigre, avocado mayo, red onion and toasted corn.' },
            price: 4450, tags: ['vegan']
          },
          {
            name:  { es: 'Gallos Vegetarianos', en: 'Vegetarian Gallos' },
            desc:  { es: '3 tortillas de maíz orgánico con zucchini, zanahoria, champiñones, kale marinado, cebollas encurtidas y aguacate.', en: '3 organic corn tortillas with zucchini, carrot, mushrooms, marinated kale, pickled onions and avocado.' },
            price: 4650, tags: ['vegan']
          },
          {
            name:  { es: 'Rollitos Primavera', en: 'Spring Rolls' },
            desc:  { es: '2 rollitos de papel de arroz rellenos de pasta de arroz, vegetales frescos, aguacate y chips. Con salsa tahini y soya.', en: '2 rice paper rolls filled with rice noodles, fresh veggies, avocado and chips. With tahini and soy sauce.' },
            price: 4450, tags: ['vegan']
          },
          {
            name:  { es: 'Tortas de Zucchini y Lentejas', en: 'Zucchini & Lentil Cakes' },
            desc:  { es: '3 tortas con kale marinado, queso crema de cabra, mayonesas y cebollas encurtidas.', en: '3 cakes with marinated kale, goat cream cheese, herb mayo and pickled onions.' },
            price: 3000, tags: []
          },
          {
            name:  { es: 'Tortilla Aliñada', en: 'Seasoned Corn Tortilla' },
            desc:  { es: 'Tortilla palmeada de maíz y queso cheddar, frijoles molidos, guacamole, queso fresco y pico de gallo.', en: 'Hand-shaped corn and cheddar tortilla with refried beans, guacamole, fresh cheese and pico de gallo.' },
            price: 4450, tags: []
          },
          {
            name:  { es: 'Tostada de Babaganoush y Hummus', en: 'Babaganoush & Hummus Toast' },
            desc:  { es: 'Pan de masa madre, berenjena ahumada con tahini, hummus, harissa y cebollas encurtidas.', en: 'Sourdough bread, smoked eggplant with tahini, hummus, harissa and pickled onions.' },
            price: 4450, tags: ['vegan']
          },
          {
            name:  { es: 'Tostada Caprese', en: 'Caprese Toast' },
            desc:  { es: 'Pan de masa madre, tomates rostizados, mozzarella fresca, pesto casero y parmesano de almendra.', en: 'Sourdough bread, roasted tomatoes, fresh mozzarella, house-made pesto and almond parmesan.' },
            price: 3450, tags: []
          },
          {
            name:  { es: 'Tostada de Queso de Cabra, Romero y Miel', en: 'Goat Cheese, Rosemary & Honey Toast' },
            desc:  { es: 'Pan de masa madre, queso de cabra artesanal, miel cruda, polen y romero.', en: 'Sourdough bread, artisan goat cheese, raw honey, bee pollen and rosemary.' },
            price: 3450, tags: [],
            opts: { es: 'Opción vegana disponible', en: 'Vegan option available' }
          }
        ]
      },
      {
        id: 'bowls',
        label: { es: 'Bowls', en: 'Bowls' },
        items: [
          {
            name:  { es: 'Bowl Caribeño', en: 'Caribbean Bowl' },
            desc:  { es: 'Arroz integral, garbanzos en salsa caribeña de tomate y leche de coco, plátano maduro, aguacate y kale marinado.', en: 'Brown rice, chickpeas in Caribbean tomato and coconut milk sauce, sweet plantain, avocado and marinated kale.' },
            price: 5200, tags: ['vegan'],
            opts: { es: '+₡1.000 con quinoa', en: '+₡1,000 with quinoa' }
          },
          {
            name:  { es: 'Bowl de Falafel', en: 'Falafel Bowl' },
            desc:  { es: 'Arroz integral, falafel, hummus, babaganoush, aceitunas kalamata, tzatziki vegano, berenjenas rostizadas y cebolla caramelizada.', en: 'Brown rice, falafel, hummus, babaganoush, kalamata olives, vegan tzatziki, roasted eggplant and caramelized onion.' },
            price: 5200, tags: ['vegan'],
            opts: { es: '+₡1.000 con quinoa', en: '+₡1,000 with quinoa' }
          },
          {
            name:  { es: 'Bowl Thai', en: 'Thai Bowl' },
            desc:  { es: 'Arroz integral, aguacate, marañón tostado, coco rallado, piña a la plancha, hongos en salsa japonesa y salsa thai.', en: 'Brown rice, avocado, toasted cashews, shredded coconut, grilled pineapple, mushrooms in Japanese sauce and Thai sauce.' },
            price: 5200, tags: ['vegan'],
            opts: { es: '+₡1.000 con quinoa', en: '+₡1,000 with quinoa' }
          },
          {
            name:  { es: 'Bowl Típico', en: 'Traditional Tico Bowl' },
            desc:  { es: 'Arroz integral, frijoles tiernos, plátano maduro, queso fresco o tofu de garbanzos, aguacate, hongos salteados y pico de gallo.', en: 'Brown rice, black beans, sweet plantain, fresh cheese or chickpea tofu, avocado, sautéed mushrooms and pico de gallo.' },
            price: 5200, tags: [],
            opts: { es: '+₡1.000 con quinoa', en: '+₡1,000 with quinoa' }
          },
          {
            name:  { es: 'Buda Bowl', en: 'Buddha Bowl' },
            desc:  { es: 'Base de quinoa, tofu de garbanzos, ayote caramelizado, remolacha rostizada, kale marinado con salsa japonesa y tzatziki de almendras.', en: 'Quinoa base, chickpea tofu, caramelized squash, roasted beet, marinated kale in Japanese sauce and almond tzatziki.' },
            price: 5650, tags: ['vegan']
          }
        ]
      },
      {
        id: 'ensaladas',
        label: { es: 'Ensaladas', en: 'Salads' },
        items: [
          {
            name:  { es: 'Ensalada del Jardín', en: 'Garden Salad' },
            desc:  { es: 'Mix de hojas verdes, aguacate, cebolla morada, tomate cherry, fruta de temporada, aceitunas kalamata y marañón tostado.', en: 'Mixed greens, avocado, red onion, cherry tomato, seasonal fruit, kalamata olives and toasted cashews.' },
            price: 3900, tags: ['vegan']
          },
          {
            name:  { es: 'Ensalada Frutos Rojos', en: 'Red Berry Salad' },
            desc:  { es: 'Mix de hojas, tomate cherry, manzana, fresa, arándanos, quinoa, pecanas y queso feta con vinagreta de mostaza y miel.', en: 'Mixed greens, cherry tomato, apple, strawberry, blueberries, quinoa, pecans and feta with honey mustard dressing.' },
            price: 5950, tags: [],
            opts: { es: 'Opción vegana: parmesano de almendra', en: 'Vegan option: almond parmesan' }
          },
          {
            name:  { es: 'Ensalada Griega', en: 'Greek Salad' },
            desc:  { es: 'Mix de hojas, tomate, cebolla morada, pepino, pesto, aceitunas kalamata, crutones de masa madre, queso fresco y feta.', en: 'Mixed greens, tomato, red onion, cucumber, pesto, kalamata olives, sourdough croutons, fresh cheese and feta.' },
            price: 5950, tags: [],
            opts: { es: 'Vegana / sin gluten disponible', en: 'Vegan / GF option available' }
          },
          {
            name:  { es: 'Ensalada Búho', en: 'Búho Salad' },
            desc:  { es: 'Como la griega con orzo (pasta corta), aderezo balsámico y más. La favorita de la casa.', en: 'Like the Greek salad plus orzo pasta and balsamic dressing. The house favorite.' },
            price: 5950, tags: [],
            opts: { es: 'Vegana / sin gluten disponible', en: 'Vegan / GF option available' }
          }
        ]
      },
      {
        id: 'hamburguesas',
        label: { es: 'Hamburguesas', en: 'Burgers' },
        items: [
          {
            name:  { es: 'Hamburguesa Garbanzo', en: 'Garbanzo Burger' },
            desc:  { es: 'Pan de masa madre, torta falafel, hummus, tomate asado marinado en vino blanco, cebolla caramelizada, arugula y tzatziki vegano. Ensalada o papas gajo.', en: 'Sourdough bun, falafel patty, hummus, roasted tomato marinated in white wine, caramelized onion, arugula and vegan tzatziki. Side salad or wedge fries.' },
            price: 5500, tags: ['vegan']
          },
          {
            name:  { es: 'Hamburguesa Ricotta Portobello', en: 'Ricotta Portobello Burger' },
            desc:  { es: 'Pan de masa madre, portobello marinado, pesto, cebolla y tomate a la plancha, aguacate, queso ricotta con romero y salsa de chile morrón.', en: 'Sourdough bun, marinated portobello, pesto, grilled onion and tomato, avocado, rosemary ricotta and roasted pepper sauce.' },
            price: 6850, tags: []
          }
        ]
      },
      {
        id: 'pastas',
        label: { es: 'Pastas', en: 'Pastas' },
        items: [
          {
            name:  { es: 'Pad Thai', en: 'Pad Thai' },
            desc:  { es: 'Fideos de arroz en salsa de tamarindo y mantequilla de maní, hongos, zanahoria, zucchini, chile dulce, pak-choi y maní.', en: 'Rice noodles in tamarind and peanut butter sauce, mushrooms, carrot, zucchini, sweet pepper, pak-choi and peanuts.' },
            price: 6650, tags: ['vegan']
          },
          {
            name:  { es: 'Pasta Curry y Leche de Coco', en: 'Curry Coconut Milk Pasta' },
            desc:  { es: 'Tagliatelle fresca en salsa de curry y leche de coco, tomates deshidratados, hongos crimini y kale marinado.', en: 'Fresh tagliatelle in curry and coconut milk sauce, sun-dried tomatoes, crimini mushrooms and marinated kale.' },
            price: 5950, tags: ['vegan'],
            opts: { es: 'Sin gluten +₡800', en: 'Gluten-free +₡800' }
          },
          {
            name:  { es: 'Pasta Fría Griega con Pesto', en: 'Greek Cold Pasta with Pesto' },
            desc:  { es: 'Pasta penne, tomate, cebolla morada, aceitunas kalamata, pepino, queso feta, pesto y aderezo balsámico.', en: 'Penne pasta, tomato, red onion, kalamata olives, cucumber, feta cheese, pesto and balsamic dressing.' },
            price: 5450, tags: [],
            opts: { es: 'Vegana / sin gluten disponible +₡800', en: 'Vegan / GF available +₡800' }
          }
        ]
      },
      {
        id: 'sandwiches',
        label: { es: 'Sandwiches', en: 'Sandwiches' },
        items: [
          {
            name:  { es: 'Sandwich Fummus', en: 'Fummus Sandwich' },
            desc:  { es: 'Pan ciabatta, hummus, hongos crimini sellados, tomate cherry, cebolla morada, arugula y mayonesa de aguacate. Ensalada o papas gajo.', en: 'Ciabatta, hummus spread, seared crimini mushrooms, cherry tomato, red onion, arugula and avocado mayo. Salad or wedge fries.' },
            price: 5500, tags: ['vegan'],
            opts: { es: 'Sin gluten +₡800', en: 'Gluten-free +₡800' }
          },
          {
            name:  { es: 'Sandwich Tico', en: 'Tico Sandwich' },
            desc:  { es: 'Pan ciabatta, frijoles molidos, aguacate, queso fresco, plátano maduro, salteado de hongos, cebolla y chile dulce.', en: 'Ciabatta, refried beans, avocado, fresh cheese, sweet plantain, sautéed mushrooms, onion and sweet pepper.' },
            price: 5750, tags: [],
            opts: { es: 'Sin gluten +₡800', en: 'Gluten-free +₡800' }
          },
          {
            name:  { es: 'Sandwich Pesto', en: 'Pesto Sandwich' },
            desc:  { es: 'Pan ciabatta, mozzarella fresca, tomate rostizado, pesto de albahaca artesanal y aceite de albahaca.', en: 'Ciabatta, fresh mozzarella, roasted tomato, house-made basil pesto and basil oil.' },
            price: 5750, tags: [],
            opts: { es: 'Sin gluten +₡800', en: 'Gluten-free +₡800' }
          }
        ]
      },
      {
        id: 'wraps',
        label: { es: 'Wraps', en: 'Wraps' },
        items: [
          {
            name:  { es: 'Wrap de Falafel', en: 'Falafel Wrap' },
            desc:  { es: 'Tortilla integral, torta de falafel, kale marinado, lechuga, cebolla caramelizada, tomate rostizado, hummus y tzatziki vegano.', en: 'Whole wheat tortilla, falafel patty, marinated kale, lettuce, caramelized onion, roasted tomato, hummus and vegan tzatziki.' },
            price: 5850, tags: ['vegan']
          },
          {
            name:  { es: 'Wrap de Hongos', en: 'Mushroom Wrap' },
            desc:  { es: 'Tortilla integral, portobello a la plancha, kale marinado, queso feta, babaganoush, tomate rostizado y guacamole.', en: 'Whole wheat tortilla, grilled portobello, marinated kale, feta cheese, babaganoush, roasted tomato and guacamole.' },
            price: 6000, tags: [],
            opts: { es: 'Opción vegana disponible', en: 'Vegan option available' }
          }
        ]
      },
      {
        id: 'extras',
        label: { es: 'Extras', en: 'Sides' },
        items: [
          { name: { es: 'Chips de maíz con guacamole o hummus', en: 'Corn chips with guacamole or hummus' }, price: 2100, tags: ['vegan'] },
          { name: { es: 'Orden de papas gajo',                   en: 'Wedge fries' },                        price: 2000, tags: ['vegan'] },
          { name: { es: 'Sopa del día – simple',                  en: 'Soup of the day – small' },            price: 1550, tags: [] },
          { name: { es: 'Sopa del día – grande con pan o arroz',  en: 'Soup of the day – large with bread or rice' }, price: 2350, tags: [] }
        ]
      },
      {
        id: 'bebidas-calientes',
        label: { es: 'Café y Bebidas Calientes', en: 'Coffee & Hot Drinks' },
        note: { es: 'Preparadas con leche de almendra o Delacto. Leche de coco +₡500.', en: 'Made with almond milk or lactose-free milk. Coconut milk +₡500.' },
        items: [
          { name: { es: 'Espresso sencillo',  en: 'Single Espresso'  }, price: 1500, tags: [] },
          { name: { es: 'Espresso doble',     en: 'Double Espresso'  }, price: 1800, tags: [] },
          { name: { es: 'Cortado sencillo',   en: 'Cortado'          }, price: 2000, tags: [] },
          { name: { es: 'Café Americano',     en: 'Americano'        }, price: 1600, tags: [] },
          { name: { es: 'Cappuccino',         en: 'Cappuccino'       }, price: 2400, tags: [] },
          { name: { es: 'Latte',              en: 'Latte'            }, price: 2800, tags: [] },
          { name: { es: 'Mocaccino',          en: 'Mocha'            }, price: 2500, tags: [] },
          {
            name:  { es: 'Chai Coffee Latte', en: 'Chai Coffee Latte' },
            desc:  { es: 'Café, leche, miel y mezcla chai de la casa.', en: 'Espresso, milk, honey and house chai blend.' },
            price: 2600, tags: []
          },
          {
            name:  { es: 'Cacao Maya', en: 'Mayan Cacao' },
            desc:  { es: 'Chocolate amargo, cayena, especias y leche de almendra.', en: 'Dark chocolate, cayenne, spices and almond milk.' },
            price: 2500, tags: ['vegan']
          },
          {
            name:  { es: 'Chocolate Caliente', en: 'Hot Chocolate' },
            desc:  { es: 'Chocolate, leche de almendra y canela.', en: 'Chocolate, almond milk and cinnamon.' },
            price: 2500, tags: ['vegan']
          },
          {
            name:  { es: 'Matcha Latte', en: 'Matcha Latte' },
            desc:  { es: 'Matcha orgánico, leche de almendra, miel de abeja o agave.', en: 'Organic matcha, almond milk, honey or agave.' },
            price: 2700, tags: []
          }
        ]
      },
      {
        id: 'infusiones',
        label: { es: 'Infusiones y Té', en: 'Herbal Teas' },
        items: [
          { name: { es: 'Berry Delight',         en: 'Berry Delight'          }, desc: { es: 'Arándanos, fresas, pasas y flor de jamaica.', en: 'Blueberries, strawberries, raisins and hibiscus flower.' }, price: 1500, tags: ['vegan'] },
          { name: { es: 'Chai de la Casa',        en: 'House Chai'            }, desc: { es: 'Chai casero, jengibre, miel y leche de almendra.', en: 'House chai blend, ginger, honey and almond milk.' }, price: 2000, tags: [] },
          { name: { es: 'Earl Grey',              en: 'Earl Grey'             }, desc: { es: 'Té negro con bergamota.', en: 'Black tea with bergamot.' }, price: 1650, tags: ['vegan'] },
          { name: { es: 'Golden Milk',            en: 'Golden Milk'           }, desc: { es: 'Leche de almendra, miel, jengibre y cúrcuma.', en: 'Almond milk, honey, ginger and turmeric.' }, price: 2500, tags: [] },
          { name: { es: 'Green Jasmine',          en: 'Green Jasmine'         }, desc: { es: 'Té verde con flores de jazmín.', en: 'Green tea with jasmine flowers.' }, price: 1500, tags: ['vegan'] },
          { name: { es: 'Hierbabuena',            en: 'Spearmint'             }, price: 1600, tags: ['vegan'] },
          { name: { es: 'Manzanilla Egipcia',     en: 'Egyptian Chamomile'    }, price: 1500, tags: ['vegan'] },
          { name: { es: 'Menta',                  en: 'Mint'                  }, price: 1650, tags: ['vegan'] },
          { name: { es: 'Lavanda',                en: 'Lavender'              }, price: 1500, tags: ['vegan'] },
          { name: { es: 'Sencha Kyoto',           en: 'Sencha Kyoto'          }, desc: { es: 'Té verde con pétalos de rosa.', en: 'Green tea with rose petals.' }, price: 1650, tags: ['vegan'] },
          { name: { es: 'Jengibre, Limón y Miel', en: 'Ginger, Lemon & Honey'}, price: 1650, tags: [] }
        ]
      },
      {
        id: 'batidos',
        label: { es: 'Bebidas Frías', en: 'Cold Drinks' },
        items: [
          { name: { es: 'Chai Frío',        en: 'Cold Chai'       }, desc: { es: 'Leche y mantequilla de almendra, mezcla chai.',                  en: 'Almond milk & butter, chai blend.' }, price: 2300, tags: ['vegan'] },
          { name: { es: 'Chia Colada',      en: 'Chia Colada'     }, desc: { es: 'Agua de pipa, piña, chia y leche de coco.',                      en: 'Coconut water, pineapple, chia and coconut milk.' }, price: 2900, tags: ['vegan'] },
          { name: { es: 'Choco Frío',       en: 'Cold Choco'      }, desc: { es: 'Leche de almendra, cacao y canela.',                              en: 'Almond milk, cacao and cinnamon.' }, price: 2500, tags: ['vegan'] },
          { name: { es: 'Frozen Cappuccino',en: 'Frozen Cappuccino'},desc: { es: 'Leche de almendra, espresso, coco, galleta y cacao.',              en: 'Almond milk, espresso, coconut, cookie and cacao.' }, price: 3000, tags: [] },
          { name: { es: 'Mango Coco',       en: 'Mango Coconut'   }, desc: { es: 'Leche deslactosada, leche de coco, crema de coco y mango.',       en: 'Lactose-free milk, coconut milk, coconut cream and mango.' }, price: 3500, tags: [] },
          { name: { es: 'Inmuno',           en: 'Immune Boost'    }, desc: { es: 'Agua de pipa, jengibre, jugo de limón y miel.',                   en: 'Coconut water, ginger, lemon juice and honey.' }, price: 2500, tags: [] },
          { name: { es: 'Maca Malteada',    en: 'Maca Shake'      }, desc: { es: 'Leche de almendra, maca, banano, dátiles y aceite de coco.',       en: 'Almond milk, maca, banana, dates and coconut oil.' }, price: 2700, tags: ['vegan'] },
          { name: { es: 'Pura Vita',        en: 'Pura Vita'       }, desc: { es: 'Agua de pipa, piña, perejil, pepino y apio.',                     en: 'Coconut water, pineapple, parsley, cucumber and celery.' }, price: 2500, tags: ['vegan'] },
          { name: { es: 'Golden Milk Frío', en: 'Cold Golden Milk' },desc: { es: 'Leche de almendra, cúrcuma, jengibre, cardamomo, canela y miel.',  en: 'Almond milk, turmeric, ginger, cardamom, cinnamon and honey.' }, price: 2500, tags: [] },
          { name: { es: 'Lassi',            en: 'Lassi'           }, desc: { es: 'Yogurt artesanal, cardamomo, miel y fruta: mora, fresa, papaya o mango.', en: 'Artisan yogurt, cardamom, honey and fruit: blackberry, strawberry, papaya or mango.' }, price: 3500, tags: [] },
          { name: { es: 'Matcha Latte Frío',en: 'Cold Matcha'     }, desc: { es: 'Leche de almendra, matcha y miel o agave.',                        en: 'Almond milk, matcha and honey or agave.' }, price: 2700, tags: [] },
          { name: { es: 'Kombucha',         en: 'Kombucha'        }, price: 2800, tags: ['vegan'] },
          { name: { es: 'Peregrino',        en: 'Peregrino'       }, desc: { es: 'Leche de coco, fresa, mora, polen, hemp y miel.',                  en: 'Coconut milk, strawberry, blackberry, pollen, hemp and honey.' }, price: 3500, tags: [] },
          { name: { es: 'Proteína',         en: 'Protein Shake'   }, desc: { es: 'Leche de almendra, tapa dulce, mantequilla de maní, cacao, hemp y banano.', en: 'Almond milk, raw cane sugar, peanut butter, cacao, hemp and banana.' }, price: 2750, tags: ['vegan'] }
        ]
      },
      {
        id: 'reposteria',
        label: { es: 'Repostería', en: 'Pastries & Desserts' },
        note: { es: 'Sujeto a disponibilidad. Pregunta por la oferta del día.', en: 'Subject to availability. Ask about today\'s selection.' },
        items: [
          { name: { es: 'Blondie',             en: 'Peanut Butter Blondie'  }, desc: { es: 'De mantequilla de maní.',                            en: 'Peanut butter bar.' }, price: 1650, tags: ['vegan'] },
          { name: { es: 'Brownie',             en: 'Brownie'               }, desc: { es: 'Con nueces de nogal y caramelo salado vegano.',       en: 'With walnuts and vegan salted caramel.' }, price: 1950, tags: ['vegan'] },
          { name: { es: 'Cocadas',             en: 'Coconut Macaroons'     }, desc: { es: 'Con leche condensada vegana.',                        en: 'With vegan condensed milk.' }, price: 1350, tags: ['vegan'] },
          { name: { es: 'Copa de Helado – Simple', en: 'Ice Cream Scoop – Single' }, price: 1950, tags: [] },
          { name: { es: 'Copa de Helado – Doble',  en: 'Ice Cream Scoop – Double' }, price: 3500, tags: [] },
          { name: { es: 'Galleta de Chocolate',en: 'Chocolate Cookie'      }, desc: { es: 'Con choco chips y nueces de nogal.',                 en: 'With chocolate chips and walnuts.' }, price: 1700, tags: [] },
          { name: { es: 'Galleta de Vainilla', en: 'Vanilla Cookie'        }, desc: { es: 'Con choco chips y nueces de nogal.',                 en: 'With chocolate chips and walnuts.' }, price: 1700, tags: [] },
          { name: { es: 'Galleta de Almendras',en: 'Almond Cookie'         }, desc: { es: 'Con mermelada de mora-fresa o uchuva-piña.',         en: 'With blackberry-strawberry or gooseberry-pineapple jam.' }, price: 1700, tags: [] },
          { name: { es: 'Pan de Limón',        en: 'Lemon Poppy Seed Loaf' }, desc: { es: 'Con semillas de amapola.',                           en: 'With poppy seeds.' }, price: 2200, tags: [] },
          { name: { es: 'Pan de Banano',       en: 'Banana Bread'          }, desc: { es: 'Con choco chips.',                                   en: 'With chocolate chips.' }, price: 2200, tags: [] },
          { name: { es: 'Pie de Pecanas',      en: 'Pecan Pie'             }, desc: { es: 'Con miel de maple orgánica.',                        en: 'With organic maple syrup.' }, price: 2250, tags: [] },
          { name: { es: 'Queque de Chocolate', en: 'Chocolate Cake'        }, desc: { es: 'Con relleno de mermelada mora-fresa.',               en: 'With blackberry-strawberry jam filling.' }, price: 2600, tags: [] },
          { name: { es: 'Queque de Zanahoria', en: 'Carrot Cake'           }, desc: { es: 'Con frosting de marañón y maple orgánico.',          en: 'With cashew frosting and organic maple.' }, price: 2600, tags: [] },
          { name: { es: 'Rollos de Canela',    en: 'Cinnamon Rolls'        }, desc: { es: 'Con dulce de leche vegano y nueces.',                en: 'With vegan dulce de leche and walnuts.' }, price: 2350, tags: ['vegan'] },
          { name: { es: 'Tarta Fría Crudivegana – Simple',  en: 'Raw Vegan Tart – Single'    }, price: 2950, tags: ['vegan'] },
          { name: { es: 'Tarta Fría Crudivegana – Doble',   en: 'Raw Vegan Tart – Double'    }, price: 3950, tags: ['vegan'] },
          { name: { es: 'Trufas de Cacao',     en: 'Cacao Truffles'        }, desc: { es: 'Con semillas, pasas y dátiles.',                     en: 'With seeds, raisins and dates.' }, price: 1350, tags: ['vegan'] },
          { name: { es: 'Empanadas de Carne Molida Vegana',  en: 'Vegan Ground "Meat" Empanadas'  }, desc: { es: 'Con salsa pomodoro e hierbas.',  en: 'With pomodoro sauce and herbs.' }, price: 1600, tags: ['vegan'] },
          { name: { es: 'Empanadas de Queso Cheddar',        en: 'Cheddar Cheese Empanadas'       }, desc: { es: 'Con hongos y cebolla caramelizada.', en: 'With mushrooms and caramelized onion.' }, price: 1600, tags: [] },
          { name: { es: 'Muffins Salados',     en: 'Savory Muffins'        }, desc: { es: 'Tomate deshidratado, maíz dulce y albahaca.',        en: 'Sun-dried tomato, sweet corn and basil.' }, price: 1350, tags: [] },
          { name: { es: 'Rollos de Espinaca',  en: 'Spinach Rolls'         }, desc: { es: 'Con alcachofa.',                                     en: 'With artichoke.' }, price: 1350, tags: ['vegan'] },
          { name: { es: 'Scones',              en: 'Scones'                }, desc: { es: 'De cebolla caramelizada y hongos.',                  en: 'Caramelized onion and mushroom.' }, price: 1650, tags: [] }
        ]
      }
    ],
    smoothie: {
      label: { es: 'Crea tu Batido', en: 'Build Your Smoothie' },
      bases: [
        { name: { es: 'Base en agua',             en: 'Water base'           }, price: 2700 },
        { name: { es: 'Base con agua de pipa',    en: 'Coconut water base'   }, price: 3200 },
        { name: { es: 'Leche de almendra',        en: 'Almond milk base'     }, price: 3600 },
        { name: { es: 'Leche de coco',            en: 'Coconut milk base'    }, price: 4000 }
      ],
      frutas: { es: 'Escoge 1–3 frutas: mora, banano, uchuva, piña, papaya, maracuyá o fresa.', en: 'Choose 1–3 fruits: blackberry, banana, gooseberry, pineapple, papaya, passion fruit or strawberry.' },
      endulzantes: { es: 'Endulzantes: miel de abeja, azúcar cruda o tapa dulce.', en: 'Sweeteners: honey, raw sugar or raw cane sugar.' },
      extras: [
        { name: { es: 'Aceite de coco',           en: 'Coconut oil'         }, price: 500 },
        { name: { es: 'Cacao nibs',               en: 'Cacao nibs'          }, price: 500 },
        { name: { es: 'Cardamomo',                en: 'Cardamom'            }, price: 350 },
        { name: { es: 'Cúrcuma',                  en: 'Turmeric'            }, price: 200 },
        { name: { es: 'Dátiles',                  en: 'Dates'               }, price: 400 },
        { name: { es: 'Hemp',                     en: 'Hemp seeds'          }, price: 350 },
        { name: { es: 'Jengibre fresco',          en: 'Fresh ginger'        }, price: 200 },
        { name: { es: 'Kale y espinaca',          en: 'Kale & spinach'      }, price: 300 },
        { name: { es: 'Leche de coco',            en: 'Coconut milk'        }, price: 500 },
        { name: { es: 'Linaza',                   en: 'Flaxseed'            }, price: 150 },
        { name: { es: 'Maca',                     en: 'Maca powder'         }, price: 400 },
        { name: { es: 'Mantequilla de almendra',  en: 'Almond butter'       }, price: 500 },
        { name: { es: 'Mantequilla de maní',      en: 'Peanut butter'       }, price: 400 },
        { name: { es: 'Polen de abeja',           en: 'Bee pollen'          }, price: 400 },
        { name: { es: 'Semilla de chía',          en: 'Chia seeds'          }, price: 350 }
      ]
    }
  },
  brunch: {
    tabLabel: { es: 'Brunch', en: 'Brunch' },
    note: { es: 'Disponible sábados 10:00–16:00. Consultar disponibilidad.', en: 'Available Saturdays 10:00–16:00. Ask for availability.' },
    sections: [
      {
        id: 'brunch-clasico',
        label: { es: 'Brunch Clásico', en: 'Classic Brunch' },
        items: [
          {
            name:  { es: 'Huevos Shakshuka', en: 'Shakshuka Eggs' },
            desc:  { es: 'Dos huevos en salsa de tomate natural con harissa y especias, queso feta y yogur de coco. Pan de masa madre.', en: 'Two eggs in a natural tomato sauce with harissa and spices, feta cheese and coconut yogurt. Served with sourdough bread.' },
            price: 5500, tags: [],
            opts:  { es: 'Vegano (tofu) +₡1.000 · Sin gluten +₡800', en: 'Vegan (tofu) +₡1,000 · Gluten-free +₡800' }
          },
          {
            name:  { es: 'Torta Española', en: 'Spanish Tortilla' },
            desc:  { es: 'Torta española sobre salsa pomodoro, mezclum, aguacate, cebollas encurtidas, almendras y ajonjolí tostado.', en: 'Spanish tortilla on a bed of pomodoro sauce, mixed greens, avocado, pickled onions, toasted almonds and sesame.' },
            price: 4750, tags: []
          },
          {
            name:  { es: 'Tortilla Palmeada con Tofu', en: 'Palm-Shaped Tortilla with Tofu' },
            desc:  { es: 'Tortilla de maíz y queso, frijoles molidos, guacamole, queso fresco, pico de gallo y tofu revuelto.', en: 'Corn and cheese tortilla with refried beans, guacamole, fresh cheese, pico de gallo and scrambled tofu.' },
            price: 5350, tags: []
          },
          {
            name:  { es: 'Pancakes de Banano', en: 'Banana Pancakes' },
            desc:  { es: 'Pancakes de banano con mermelada de temporada, frutas y miel de maple.', en: 'Banana pancakes with seasonal jam, fresh fruit and maple syrup.' },
            price: 5200, tags: ['vegan']
          },
          {
            name:  { es: 'Tostada Francesa', en: 'French Toast' },
            desc:  { es: 'Pan de masa madre, uchuva, fresa, arándanos azules, banano, panal de abeja, polen y miel de maple.', en: 'Sourdough bread, cape gooseberries, strawberries, blueberries, banana, honeycomb, bee pollen and maple syrup.' },
            price: 5200, tags: [],
            opts:  { es: 'Opción vegana: sin panal ni polen', en: 'Vegan option: no honeycomb or pollen' }
          }
        ]
      },
      {
        id: 'brunch-temporada',
        label: { es: 'De Temporada', en: 'Seasonal Specials' },
        items: [
          {
            name:  { es: 'Pancakes de Limón con Amapola', en: 'Lemon Poppy Seed Pancakes' },
            desc:  { es: 'Harina de trigo, limón, semillas de amapola y queso ricotta. Con uchuva, arándanos, fresa y sirope de limón.', en: 'Wheat flour, lemon, poppy seeds and ricotta cheese. With cape gooseberries, blueberries, strawberries and lemon syrup.' },
            price: 5500, tags: []
          },
          {
            name:  { es: 'Corn Fritters', en: 'Corn Fritters' },
            desc:  { es: 'Tortitas de elote dulce con queso cheddar, guacamole, frijoles molidos y mayonesa vegana de jalapeño.', en: 'Sweet corn cakes with cheddar cheese, guacamole, refried beans and vegan jalapeño mayo.' },
            price: 4750, tags: []
          }
        ]
      }
    ]
  }
};

// ============================================================
//  LANGUAGE SYSTEM
// ============================================================
let lang = localStorage.getItem('buho-lang') || 'es';

function setLang(l) {
  lang = l;
  localStorage.setItem('buho-lang', l);
  document.documentElement.lang = l;

  // Update all data-es / data-en elements
  document.querySelectorAll('[data-es]').forEach(el => {
    const val = el.getAttribute('data-' + l);
    if (val !== null) el.textContent = val;
  });

  // Update placeholder attributes
  document.querySelectorAll('[data-es-placeholder]').forEach(el => {
    const val = el.getAttribute('data-' + l + '-placeholder');
    if (val !== null) el.placeholder = val;
  });

  // Update lang toggle UI
  document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === l);
  });

  // Update page title
  if (l === 'en') {
    document.title = document.title.replace('Menú', 'Menu').replace('Nosotros', 'About');
  }

  // If on menu page, re-render
  const menuBody = document.getElementById('menuBody');
  if (menuBody) renderMenu();
}

function toggleLang() {
  setLang(lang === 'es' ? 'en' : 'es');
}

// ============================================================
//  NAVBAR
// ============================================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ============================================================
//  MOBILE MENU
// ============================================================
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', open);
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });
}

// ============================================================
//  SCROLL ANIMATIONS
// ============================================================
function initAnimations() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.animate').forEach(el => obs.observe(el));
}

// ============================================================
//  MENU RENDERER (menu.html)
// ============================================================
function fmt(price) {
  return '₡' + price.toLocaleString('es-CR');
}

function badge(tag) {
  const map = {
    vegan: { es: 'Vegano', en: 'Vegan',    cls: 'tag-vegan' },
    gf:    { es: 'Sin gluten', en: 'GF',   cls: 'tag-gf'   },
    veg:   { es: 'Vegetariano', en: 'Veg', cls: 'tag-veg'  }
  };
  const t = map[tag];
  if (!t) return '';
  return `<span class="tag ${t.cls}">${t[lang]}</span>`;
}

function renderItem(item) {
  const name  = item.name?.[lang]  || item.name?.es  || '';
  const desc  = item.desc?.[lang]  || item.desc?.es  || '';
  const opts  = item.opts?.[lang]  || item.opts?.es  || '';
  const tags  = (item.tags || []).map(badge).join('');

  return `
    <div class="menu-item">
      <div class="mi-left">
        <div class="mi-name">${name}</div>
        ${desc ? `<div class="mi-desc">${desc}</div>` : ''}
        ${opts ? `<div class="mi-opts">${opts}</div>` : ''}
      </div>
      <div class="mi-right">
        <div class="mi-price">${fmt(item.price)}</div>
        ${tags ? `<div class="mi-badges">${tags}</div>` : ''}
      </div>
    </div>`;
}

function renderSection(sec) {
  const label = sec.label?.[lang] || sec.label?.es || '';
  const note  = sec.note?.[lang]  || sec.note?.es  || '';
  const items = (sec.items || []).map(renderItem).join('');
  return `
    <div class="menu-section" id="${sec.id}">
      <div class="menu-section-head">
        <h2 class="menu-section-title">${label}</h2>
        <div class="menu-section-bar"></div>
        ${note ? `<p class="menu-section-note">${note}</p>` : ''}
      </div>
      <div class="menu-grid">${items}</div>
    </div>`;
}

function renderSmoothieBuilder(sm) {
  const label = sm.label?.[lang] || sm.label?.es;
  const bases = sm.bases.map(b => `
    <div class="smoothie-base">
      <div class="sb-name">${b.name[lang] || b.name.es}</div>
      <div class="sb-price">${fmt(b.price)}</div>
    </div>`).join('');
  const extras = sm.extras.map(e => `
    <div class="extra-chip">${e.name[lang] || e.name.es}<span>+${fmt(e.price)}</span></div>`).join('');

  return `
    <div class="menu-section" id="batido-builder">
      <div class="menu-section-head">
        <h2 class="menu-section-title">${label}</h2>
        <div class="menu-section-bar"></div>
      </div>
      <div class="smoothie-builder">
        <h4>${lang === 'es' ? 'Elige tu base:' : 'Choose your base:'}</h4>
        <div class="smoothie-bases">${bases}</div>
        <div class="smoothie-info">
          <div class="smoothie-info-block">
            <h5>${lang === 'es' ? 'Frutas (elige 1–3)' : 'Fruits (pick 1–3)'}</h5>
            <p>${sm.frutas[lang] || sm.frutas.es}</p>
          </div>
          <div class="smoothie-info-block">
            <h5>${lang === 'es' ? 'Endulzantes' : 'Sweeteners'}</h5>
            <p>${sm.endulzantes[lang] || sm.endulzantes.es}</p>
          </div>
        </div>
        <div class="extras-title">${lang === 'es' ? 'Superfoods extras:' : 'Superfood add-ons:'}</div>
        <div class="extras-grid">${extras}</div>
      </div>
    </div>`;
}

function renderMenu() {
  const body = document.getElementById('menuBody');
  if (!body) return;

  const activeTab = document.querySelector('.menu-tab.active')?.dataset.tab || 'principal';
  const data = MENU[activeTab];
  if (!data) return;

  let html = '';

  // Allergen note (principal only)
  if (activeTab === 'principal' && data.allergenNote) {
    html += `<p class="allergen-note">${data.allergenNote[lang] || data.allergenNote.es}</p>`;
  }

  // Brunch note
  if (activeTab === 'brunch' && data.note) {
    html += `<p class="allergen-note" style="border-color:var(--green-soft)">${data.note[lang] || data.note.es}</p>`;
  }

  data.sections.forEach(sec => { html += renderSection(sec); });

  // Smoothie builder (principal only)
  if (activeTab === 'principal' && data.smoothie) {
    html += renderSmoothieBuilder(data.smoothie);
  }

  body.innerHTML = html;
  updateCatNav(activeTab);
}

function updateCatNav(activeTab) {
  const nav = document.getElementById('catNav');
  if (!nav) return;

  const data = MENU[activeTab];
  const secs = data?.sections || [];
  const extraId = activeTab === 'principal' ? 'batido-builder' : null;

  let html = '';
  secs.forEach(sec => {
    const label = sec.label?.[lang] || sec.label?.es || '';
    html += `<button class="cat-nav-btn" onclick="scrollToSection('${sec.id}')">${label}</button>`;
  });
  if (extraId) {
    html += `<button class="cat-nav-btn" onclick="scrollToSection('${extraId}')">
      ${lang === 'es' ? 'Batido Propio' : 'Build Smoothie'}
    </button>`;
  }
  nav.innerHTML = html;
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function initMenuTabs() {
  document.querySelectorAll('.menu-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.menu-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMenu();
    });
  });
}

// ============================================================
//  INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initAnimations();

  // Lang toggle (both pages share same markup)
  document.getElementById('langToggle')?.addEventListener('click', toggleLang);

  // Apply stored lang immediately
  setLang(lang);

  // Menu page
  if (document.getElementById('menuBody')) {
    initMenuTabs();
    renderMenu();
  }
});
