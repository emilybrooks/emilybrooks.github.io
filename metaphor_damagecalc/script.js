const weapons =
[
    {"name": "Acacia Rod", "attribute": "Strike", "range": "Melee", "attack": 66, "accuracy": 96},
    {"name": "Admiral's Semaphore", "attribute": "Pierce", "range": "Melee", "attack": 230, "accuracy": 97},
    {"name": "All Creation Fists", "attribute": "Strike", "range": "Melee", "attack": 500, "accuracy": 99},
    {"name": "All-In Abacus", "attribute": "Strike", "range": "Melee", "attack": 260, "accuracy": 50},
    {"name": "Ame-no-Habakiri", "attribute": "Slash", "range": "Melee", "attack": 430, "accuracy": 95},
    {"name": "Amethyst Mace", "attribute": "Strike", "range": "Melee", "attack": 199, "accuracy": 96},
    {"name": "Ancient God's Fang", "attribute": "Ice", "range": "Melee", "attack": 342, "accuracy": 95},
    {"name": "Ancient God's Lava Blade", "attribute": "Fire", "range": "Melee", "attack": 391, "accuracy": 95},
    {"name": "Annihilator King's Axe", "attribute": "Slash", "range": "Melee", "attack": 420, "accuracy": 99},
    {"name": "Apollo's Eleventh", "attribute": "Pierce", "range": "Ranged", "attack": 500, "accuracy": 99},
    {"name": "Apostle's Crosier", "attribute": "Strike", "range": "Melee", "attack": 315, "accuracy": 96},
    {"name": "Apprentice's Abacus", "attribute": "Strike", "range": "Melee", "attack": 165, "accuracy": 96},
    {"name": "Apprentice's Mace", "attribute": "Strike", "range": "Melee", "attack": 100, "accuracy": 96},
    {"name": "Armour Piercer", "attribute": "Pierce", "range": "Melee", "attack": 292, "accuracy": 97},
    {"name": "Aromatic Fan", "attribute": "Slash", "range": "Melee", "attack": 288, "accuracy": 98},
    {"name": "Ascetic's Crosier", "attribute": "Strike", "range": "Melee", "attack": 291, "accuracy": 96},
    {"name": "Astral Saint Fist", "attribute": "Strike", "range": "Melee", "attack": 334, "accuracy": 98},
    {"name": "Axe of the Old God", "attribute": "Slash", "range": "Melee", "attack": 500, "accuracy": 99},
    {"name": "Baleen Bow", "attribute": "Pierce", "range": "Ranged", "attack": 237, "accuracy": 99},
    {"name": "Barrier Reef Lance", "attribute": "Pierce", "range": "Melee", "attack": 268, "accuracy": 97},
    {"name": "Bastard Sword", "attribute": "Slash", "range": "Melee", "attack": 80, "accuracy": 95},
    {"name": "Beast Fang Katana", "attribute": "Slash", "range": "Melee", "attack": 180, "accuracy": 96},
    {"name": "Beast Slayer", "attribute": "Slash", "range": "Melee", "attack": 180, "accuracy": 95},
    {"name": "Beastkiller's Wrath", "attribute": "Slash", "range": "Melee", "attack": 390, "accuracy": 95},
    {"name": "Beloved Greatsword", "attribute": "Slash", "range": "Melee", "attack": 400, "accuracy": 95},
    {"name": "Bishamonten's Sign", "attribute": "Pierce", "range": "Melee", "attack": 400, "accuracy": 97},
    {"name": "Blade of Totsuka", "attribute": "Slash", "range": "Melee", "attack": 370, "accuracy": 95},
    {"name": "Blaze Crosier", "attribute": "Strike", "range": "Melee", "attack": 360, "accuracy": 96},
    {"name": "Blink Baselards", "attribute": "Pierce", "range": "Ranged", "attack": 211, "accuracy": 99},
    {"name": "Blizzard Crosier", "attribute": "Strike", "range": "Melee", "attack": 360, "accuracy": 96},
    {"name": "Blooming Katana", "attribute": "Slash", "range": "Melee", "attack": 394, "accuracy": 96},
    {"name": "Bodhisattva's Mace", "attribute": "Strike", "range": "Melee", "attack": 500, "accuracy": 99},
    {"name": "Bolt Crosier", "attribute": "Strike", "range": "Melee", "attack": 360, "accuracy": 96},
    {"name": "Bolt Scorpion Staff", "attribute": "Strike", "range": "Melee", "attack": 270, "accuracy": 96},
    {"name": "Bone Crushers", "attribute": "Strike", "range": "Melee", "attack": 232, "accuracy": 98},
    {"name": "Bone Pulverisers", "attribute": "Strike", "range": "Melee", "attack": 270, "accuracy": 98},
    {"name": "Book of Knowledge", "attribute": "Strike", "range": "Melee", "attack": 40, "accuracy": 95},
    {"name": "Book of Magic", "attribute": "Strike", "range": "Melee", "attack": 40, "accuracy": 95},
    {"name": "Bourgeois Abacus", "attribute": "Strike", "range": "Melee", "attack": 212, "accuracy": 96},
    {"name": "Brawler King's Fists", "attribute": "Strike", "range": "Melee", "attack": 420, "accuracy": 99},
    {"name": "Breeze Crosier", "attribute": "Strike", "range": "Melee", "attack": 360, "accuracy": 96},
    {"name": "Bronze Knuckles", "attribute": "Strike", "range": "Melee", "attack": 108, "accuracy": 98},
    {"name": "Bronze Machete", "attribute": "Slash", "range": "Melee", "attack": 70, "accuracy": 96},
    {"name": "Burning Axe", "attribute": "Slash", "range": "Melee", "attack": 400, "accuracy": 95},
    {"name": "Byaku's Crosier", "attribute": "Strike", "range": "Melee", "attack": 415, "accuracy": 96},
    {"name": "Caesar's Semaphore", "attribute": "Pierce", "range": "Melee", "attack": 256, "accuracy": 97},
    {"name": "Calm Water Katana", "attribute": "Slash", "range": "Melee", "attack": 235, "accuracy": 96},
    {"name": "Candle Snuffing Fan", "attribute": "Slash", "range": "Melee", "attack": 377, "accuracy": 98},
    {"name": "Captain's Semaphore", "attribute": "Pierce", "range": "Melee", "attack": 330, "accuracy": 97},
    {"name": "Celestial Abacus", "attribute": "Strike", "range": "Melee", "attack": 285, "accuracy": 96},
    {"name": "Cinquedeas", "attribute": "Pierce", "range": "Ranged", "attack": 210, "accuracy": 99},
    {"name": "Cocytus Rod", "attribute": "Strike", "range": "Melee", "attack": 400, "accuracy": 96},
    {"name": "Comet Abacus", "attribute": "Strike", "range": "Melee", "attack": 357, "accuracy": 96},
    {"name": "Comet Axe", "attribute": "Slash", "range": "Melee", "attack": 355, "accuracy": 95},
    {"name": "Comet Crosier", "attribute": "Strike", "range": "Melee", "attack": 357, "accuracy": 96},
    {"name": "Comet Crossbow", "attribute": "Pierce", "range": "Ranged", "attack": 351, "accuracy": 99},
    {"name": "Comet Daggers", "attribute": "Pierce", "range": "Ranged", "attack": 350, "accuracy": 99},
    {"name": "Comet Fan", "attribute": "Slash", "range": "Melee", "attack": 359, "accuracy": 98},
    {"name": "Comet Greatsword", "attribute": "Slash", "range": "Melee", "attack": 354, "accuracy": 95},
    {"name": "Comet Katana", "attribute": "Slash", "range": "Melee", "attack": 352, "accuracy": 96},
    {"name": "Comet Knuckles", "attribute": "Strike", "range": "Melee", "attack": 358, "accuracy": 98},
    {"name": "Comet Lance", "attribute": "Pierce", "range": "Melee", "attack": 355, "accuracy": 97},
    {"name": "Comet Mace", "attribute": "Strike", "range": "Melee", "attack": 350, "accuracy": 96},
    {"name": "Comet Semaphore", "attribute": "Pierce", "range": "Melee", "attack": 355, "accuracy": 97},
    {"name": "Comet Sword", "attribute": "Slash", "range": "Melee", "attack": 355, "accuracy": 96},
    {"name": "Cooling Staff", "attribute": "Strike", "range": "Melee", "attack": 115, "accuracy": 96},
    {"name": "Copper Fan", "attribute": "Slash", "range": "Melee", "attack": 190, "accuracy": 98},
    {"name": "Coral Abacus", "attribute": "Strike", "range": "Melee", "attack": 233, "accuracy": 96},
    {"name": "Coral Guard Lance", "attribute": "Pierce", "range": "Melee", "attack": 220, "accuracy": 97},
    {"name": "Crimson Fangs", "attribute": "Pierce", "range": "Ranged", "attack": 148, "accuracy": 99},
    {"name": "Crystal Axe", "attribute": "Slash", "range": "Melee", "attack": 340, "accuracy": 95},
    {"name": "Crystal Ice Gunbai", "attribute": "Pierce", "range": "Melee", "attack": 303, "accuracy": 97},
    {"name": "Cursed Blade Nihil", "attribute": "Slash", "range": "Melee", "attack": 400, "accuracy": 95},
    {"name": "Damascus Bow", "attribute": "Pierce", "range": "Ranged", "attack": 177, "accuracy": 99},
    {"name": "Damascus Cestus", "attribute": "Strike", "range": "Melee", "attack": 145, "accuracy": 98},
    {"name": "Damascus Club", "attribute": "Strike", "range": "Melee", "attack": 141, "accuracy": 96},
    {"name": "Damascus Daggers", "attribute": "Pierce", "range": "Ranged", "attack": 168, "accuracy": 99},
    {"name": "Damascus Shamshir", "attribute": "Slash", "range": "Melee", "attack": 142, "accuracy": 95},
    {"name": "Damascus Spear", "attribute": "Pierce", "range": "Melee", "attack": 171, "accuracy": 97},
    {"name": "Dame's Silver Fan", "attribute": "Slash", "range": "Melee", "attack": 232, "accuracy": 98},
    {"name": "Dancing Crosier", "attribute": "Strike", "range": "Melee", "attack": 320, "accuracy": 96},
    {"name": "Dancing Flame Fan", "attribute": "Slash", "range": "Melee", "attack": 290, "accuracy": 98},
    {"name": "Deciduous Katana", "attribute": "Slash", "range": "Melee", "attack": 300, "accuracy": 96},
    {"name": "Demon Slayer Pike", "attribute": "Pierce", "range": "Melee", "attack": 166, "accuracy": 97},
    {"name": "Destroyer's Edge", "attribute": "Slash", "range": "Melee", "attack": 370, "accuracy": 95},
    {"name": "Discerning Abacus", "attribute": "Strike", "range": "Melee", "attack": 227, "accuracy": 96},
    {"name": "Discharging Fan", "attribute": "Slash", "range": "Melee", "attack": 377, "accuracy": 98},
    {"name": "Dissecting Katana", "attribute": "Slash", "range": "Melee", "attack": 420, "accuracy": 96},
    {"name": "Divine Fists", "attribute": "Strike", "range": "Melee", "attack": 425, "accuracy": 98},
    {"name": "Dragon Claws", "attribute": "Strike", "range": "Melee", "attack": 276, "accuracy": 98},
    {"name": "Dragon Katana", "attribute": "Slash", "range": "Melee", "attack": 290, "accuracy": 96},
    {"name": "Dragon Kukris", "attribute": "Pierce", "range": "Ranged", "attack": 292, "accuracy": 99},
    {"name": "Dragon's Fall", "attribute": "Slash", "range": "Melee", "attack": 400, "accuracy": 96},
    {"name": "Dragon's Indignation", "attribute": "Slash", "range": "Melee", "attack": 111, "accuracy": 95},
    {"name": "Dragon's Judgement", "attribute": "Fire", "range": "Melee", "attack": 144, "accuracy": 95},
    {"name": "Dragon's Legacy", "attribute": "Almighty", "range": "Melee", "attack": 430, "accuracy": 99},
    {"name": "Drakodios", "attribute": "Almighty", "range": "Melee", "attack": 350, "accuracy": 97},
    {"name": "Drakodios", "attribute": "Strike", "range": "Melee", "attack": 280, "accuracy": 96},
    {"name": "Drakodios", "attribute": "Almighty", "range": "Melee", "attack": 350, "accuracy": 99},
    {"name": "Driftwood Lance", "attribute": "Pierce", "range": "Melee", "attack": 320, "accuracy": 97},
    {"name": "Dusk Fly Staff", "attribute": "Strike", "range": "Melee", "attack": 300, "accuracy": 96},
    {"name": "Dynastic Blade", "attribute": "Slash", "range": "Melee", "attack": 500, "accuracy": 99},
    {"name": "Ebony Abacus", "attribute": "Strike", "range": "Melee", "attack": 140, "accuracy": 96},
    {"name": "Ebony Fan", "attribute": "Slash", "range": "Melee", "attack": 214, "accuracy": 98},
    {"name": "Ebony Semaphore", "attribute": "Pierce", "range": "Melee", "attack": 157, "accuracy": 97},
    {"name": "Edge of Calamity", "attribute": "Slash", "range": "Melee", "attack": 430, "accuracy": 95},
    {"name": "Exorcist Knuckles", "attribute": "Strike", "range": "Melee", "attack": 100, "accuracy": 98},
    {"name": "Expert's Crossbow", "attribute": "Pierce", "range": "Ranged", "attack": 269, "accuracy": 99},
    {"name": "Fairy's Sabre", "attribute": "Slash", "range": "Melee", "attack": 15, "accuracy": 10},
    {"name": "Faker King's Daggers", "attribute": "Pierce", "range": "Ranged", "attack": 420, "accuracy": 99},
    {"name": "Falchion", "attribute": "Slash", "range": "Melee", "attack": 135, "accuracy": 96},
    {"name": "Farmer's Edged Fan", "attribute": "Slash", "range": "Melee", "attack": 300, "accuracy": 98},
    {"name": "Field Glaive", "attribute": "Pierce", "range": "Melee", "attack": 275, "accuracy": 97},
    {"name": "Filleting Katana", "attribute": "Almighty", "range": "Melee", "attack": 280, "accuracy": 96},
    {"name": "Fire God's Flaming Bow", "attribute": "Pierce", "range": "Ranged", "attack": 405, "accuracy": 99},
    {"name": "Fire Goddess's Fan", "attribute": "Slash", "range": "Melee", "attack": 410, "accuracy": 98},
    {"name": "Fire Mist Katana", "attribute": "Fire", "range": "Melee", "attack": 292, "accuracy": 96},
    {"name": "Fire Snake Staff", "attribute": "Strike", "range": "Melee", "attack": 270, "accuracy": 96},
    {"name": "Firebloom Signal", "attribute": "Pierce", "range": "Melee", "attack": 285, "accuracy": 97},
    {"name": "Fishing Harpoon", "attribute": "Pierce", "range": "Melee", "attack": 250, "accuracy": 97},
    {"name": "Fist of Salvation", "attribute": "Strike", "range": "Melee", "attack": 139, "accuracy": 98},
    {"name": "Fists of Justice", "attribute": "Strike", "range": "Melee", "attack": 392, "accuracy": 98},
    {"name": "Flame Shot", "attribute": "Fire", "range": "Ranged", "attack": 333, "accuracy": 99},
    {"name": "Flamekiss Axe", "attribute": "Fire", "range": "Melee", "attack": 408, "accuracy": 95},
    {"name": "Floral Semaphore", "attribute": "Pierce", "range": "Melee", "attack": 290, "accuracy": 97},
    {"name": "Flying Anchor Axe", "attribute": "Slash", "range": "Melee", "attack": 280, "accuracy": 95},
    {"name": "Fortune Abacus", "attribute": "Strike", "range": "Melee", "attack": 500, "accuracy": 99},
    {"name": "Fortune God's Abacus", "attribute": "Strike", "range": "Melee", "attack": 410, "accuracy": 96},
    {"name": "Fortune's Bludgeon", "attribute": "Strike", "range": "Melee", "attack": 255, "accuracy": 96},
    {"name": "Frostbite Axe", "attribute": "Ice", "range": "Melee", "attack": 408, "accuracy": 95},
    {"name": "Fulmine Rod", "attribute": "Strike", "range": "Melee", "attack": 242, "accuracy": 96},
    {"name": "Fuoco Rod", "attribute": "Strike", "range": "Melee", "attack": 205, "accuracy": 96},
    {"name": "Gambler's Anelaces", "attribute": "Pierce", "range": "Ranged", "attack": 399, "accuracy": 50},
    {"name": "Genbu's Staff", "attribute": "Strike", "range": "Melee", "attack": 415, "accuracy": 96},
    {"name": "General's Semaphore", "attribute": "Pierce", "range": "Melee", "attack": 380, "accuracy": 97},
    {"name": "Ghiaccio Rod", "attribute": "Strike", "range": "Melee", "attack": 205, "accuracy": 96},
    {"name": "Ghost Light Katana", "attribute": "Fire", "range": "Melee", "attack": 410, "accuracy": 96},
    {"name": "Giant Slayer", "attribute": "Slash", "range": "Melee", "attack": 340, "accuracy": 95},
    {"name": "Gladius", "attribute": "Slash", "range": "Melee", "attack": 234, "accuracy": 96},
    {"name": "Goemon's Hidden Blade", "attribute": "Almighty", "range": "Melee", "attack": 500, "accuracy": 99},
    {"name": "Golden Epee", "attribute": "Slash", "range": "Melee", "attack": 200, "accuracy": 96},
    {"name": "Golden Wing Abacus", "attribute": "Strike", "range": "Melee", "attack": 405, "accuracy": 96},
    {"name": "Grand Eagle Bow", "attribute": "Pierce", "range": "Ranged", "attack": 260, "accuracy": 99},
    {"name": "Grand Master's Staff", "attribute": "Strike", "range": "Melee", "attack": 200, "accuracy": 96},
    {"name": "Guillotine Blade", "attribute": "Slash", "range": "Melee", "attack": 255, "accuracy": 95},
    {"name": "Gunner King's Bow", "attribute": "Pierce", "range": "Ranged", "attack": 420, "accuracy": 99},
    {"name": "Hail Shot", "attribute": "Ice", "range": "Ranged", "attack": 333, "accuracy": 99},
    {"name": "Halberd", "attribute": "Pierce", "range": "Melee", "attack": 216, "accuracy": 97},
    {"name": "Hardshell Knuckles", "attribute": "Strike", "range": "Melee", "attack": 218, "accuracy": 98},
    {"name": "Heavenly Breeze", "attribute": "Slash", "range": "Melee", "attack": 420, "accuracy": 96},
    {"name": "Heirloom Greatsword", "attribute": "Slash", "range": "Melee", "attack": 50, "accuracy": 95},
    {"name": "Hellfire Fangs", "attribute": "Fire", "range": "Ranged", "attack": 222, "accuracy": 99},
    {"name": "Hero King's Abacus", "attribute": "Strike", "range": "Melee", "attack": 420, "accuracy": 99},
    {"name": "Hero King's Banner", "attribute": "Pierce", "range": "Melee", "attack": 420, "accuracy": 99},
    {"name": "Hero King's Fan", "attribute": "Slash", "range": "Melee", "attack": 420, "accuracy": 99},
    {"name": "Hero King's Lance", "attribute": "Pierce", "range": "Melee", "attack": 420, "accuracy": 99},
    {"name": "Hero King's Mace", "attribute": "Strike", "range": "Melee", "attack": 420, "accuracy": 99},
    {"name": "Hero King's Sword", "attribute": "Slash", "range": "Melee", "attack": 420, "accuracy": 99},
    {"name": "Heroine's Fan", "attribute": "Slash", "range": "Melee", "attack": 500, "accuracy": 99},
    {"name": "Holy Order Halberd", "attribute": "Pierce", "range": "Melee", "attack": 90, "accuracy": 97},
    {"name": "Hunter's Crossbow", "attribute": "Pierce", "range": "Ranged", "attack": 144, "accuracy": 99},
    {"name": "Hunter's Hatchet", "attribute": "Slash", "range": "Melee", "attack": 320, "accuracy": 95},
    {"name": "Ikulimbaang", "attribute": "Slash", "range": "Melee", "attack": 290, "accuracy": 96},
    {"name": "Imp-Ending Pike", "attribute": "Pierce", "range": "Melee", "attack": 120, "accuracy": 97},
    {"name": "Imp's Old Bow", "attribute": "Pierce", "range": "Ranged", "attack": 160, "accuracy": 99},
    {"name": "Inferno Rod", "attribute": "Strike", "range": "Melee", "attack": 400, "accuracy": 96},
    {"name": "Inherited Crosier", "attribute": "Strike", "range": "Melee", "attack": 250, "accuracy": 96},
    {"name": "Innocent Abacus", "attribute": "Strike", "range": "Melee", "attack": 90, "accuracy": 96},
    {"name": "Innocent Axe", "attribute": "Slash", "range": "Melee", "attack": 230, "accuracy": 95},
    {"name": "Innocent Crosier", "attribute": "Strike", "range": "Melee", "attack": 200, "accuracy": 96},
    {"name": "Innocent Crossbow", "attribute": "Pierce", "range": "Ranged", "attack": 120, "accuracy": 99},
    {"name": "Innocent Daggers", "attribute": "Pierce", "range": "Ranged", "attack": 120, "accuracy": 99},
    {"name": "Innocent Fan", "attribute": "Slash", "range": "Melee", "attack": 150, "accuracy": 98},
    {"name": "Innocent Greatsword", "attribute": "Slash", "range": "Melee", "attack": 50, "accuracy": 95},
    {"name": "Innocent Katana", "attribute": "Slash", "range": "Melee", "attack": 120, "accuracy": 96},
    {"name": "Innocent Knuckle", "attribute": "Strike", "range": "Melee", "attack": 80, "accuracy": 98},
    {"name": "Innocent Lance", "attribute": "Pierce", "range": "Melee", "attack": 75, "accuracy": 97},
    {"name": "Innocent Mace", "attribute": "Strike", "range": "Melee", "attack": 75, "accuracy": 96},
    {"name": "Innocent Semaphore", "attribute": "Pierce", "range": "Melee", "attack": 130, "accuracy": 97},
    {"name": "Innocent Staff", "attribute": "Strike", "range": "Melee", "attack": 50, "accuracy": 96},
    {"name": "Innocent Sword", "attribute": "Slash", "range": "Melee", "attack": 45, "accuracy": 96},
    {"name": "Innocent Tome", "attribute": "Strike", "range": "Melee", "attack": 30, "accuracy": 95},
    {"name": "Inquisitor's Crosier", "attribute": "Strike", "range": "Melee", "attack": 395, "accuracy": 96},
    {"name": "Investor's Abacus", "attribute": "Strike", "range": "Melee", "attack": 203, "accuracy": 96},
    {"name": "Iron Abacus", "attribute": "Strike", "range": "Melee", "attack": 114, "accuracy": 96},
    {"name": "Iron Greatsword", "attribute": "Slash", "range": "Melee", "attack": 110, "accuracy": 95},
    {"name": "Iron Knuckles", "attribute": "Strike", "range": "Melee", "attack": 130, "accuracy": 98},
    {"name": "Iron Lance", "attribute": "Pierce", "range": "Melee", "attack": 115, "accuracy": 97},
    {"name": "Iron Sword", "attribute": "Slash", "range": "Melee", "attack": 102, "accuracy": 96},
    {"name": "Ivory Staff", "attribute": "Strike", "range": "Melee", "attack": 89, "accuracy": 96},
    {"name": "Jade Jian", "attribute": "Slash", "range": "Melee", "attack": 365, "accuracy": 96},
    {"name": "Jester's Daggers", "attribute": "Pierce", "range": "Ranged", "attack": 390, "accuracy": 99},
    {"name": "Joker's Knives", "attribute": "Pierce", "range": "Ranged", "attack": 500, "accuracy": 99},
    {"name": "Kamaitachi Blades", "attribute": "Pierce", "range": "Ranged", "attack": 253, "accuracy": 99},
    {"name": "Katana", "attribute": "Slash", "range": "Melee", "attack": 274, "accuracy": 96},
    {"name": "Kindling Staff", "attribute": "Strike", "range": "Melee", "attack": 100, "accuracy": 96},
    {"name": "King's Crosier", "attribute": "Strike", "range": "Melee", "attack": 420, "accuracy": 99},
    {"name": "King's Sovereignty", "attribute": "Slash", "range": "Melee", "attack": 500, "accuracy": 99},
    {"name": "Klewang", "attribute": "Slash", "range": "Melee", "attack": 272, "accuracy": 96},
    {"name": "Kongming's Signal", "attribute": "Pierce", "range": "Melee", "attack": 500, "accuracy": 99},
    {"name": "Kusanagi", "attribute": "Slash", "range": "Melee", "attack": 300, "accuracy": 95},
    {"name": "Lance of Judgement", "attribute": "Pierce", "range": "Melee", "attack": 425, "accuracy": 97},
    {"name": "Lance of the Old God", "attribute": "Pierce", "range": "Melee", "attack": 370, "accuracy": 97},
    {"name": "Leader's Semaphore", "attribute": "Pierce", "range": "Melee", "attack": 189, "accuracy": 97},
    {"name": "Legacy Sword", "attribute": "Slash", "range": "Melee", "attack": 45, "accuracy": 96},
    {"name": "Lightning Glaive", "attribute": "Elec", "range": "Melee", "attack": 336, "accuracy": 97},
    {"name": "Mace of Renewal", "attribute": "Strike", "range": "Melee", "attack": 366, "accuracy": 96},
    {"name": "Mace of Smite", "attribute": "Strike", "range": "Melee", "attack": 385, "accuracy": 96},
    {"name": "Mage King's Staff", "attribute": "Strike", "range": "Melee", "attack": 420, "accuracy": 99},
    {"name": "Magla Abacus", "attribute": "Strike", "range": "Melee", "attack": 334, "accuracy": 96},
    {"name": "Magla Arbalest", "attribute": "Pierce", "range": "Ranged", "attack": 328, "accuracy": 99},
    {"name": "Magla Crosier", "attribute": "Strike", "range": "Melee", "attack": 330, "accuracy": 96},
    {"name": "Magla Fan", "attribute": "Slash", "range": "Melee", "attack": 335, "accuracy": 98},
    {"name": "Magla Knives", "attribute": "Pierce", "range": "Ranged", "attack": 338, "accuracy": 99},
    {"name": "Magla Mace", "attribute": "Strike", "range": "Melee", "attack": 330, "accuracy": 96},
    {"name": "Magla Semaphore", "attribute": "Pierce", "range": "Melee", "attack": 332, "accuracy": 97},
    {"name": "Main Gauches", "attribute": "Pierce", "range": "Ranged", "attack": 312, "accuracy": 99},
    {"name": "Medici Abacus", "attribute": "Strike", "range": "Melee", "attack": 390, "accuracy": 96},
    {"name": "Medium's Crosier", "attribute": "Strike", "range": "Melee", "attack": 390, "accuracy": 96},
    {"name": "Melodious Abacus", "attribute": "Strike", "range": "Melee", "attack": 350, "accuracy": 96},
    {"name": "Mermaid's Torch", "attribute": "Strike", "range": "Melee", "attack": 270, "accuracy": 96},
    {"name": "Monk's Black Staff", "attribute": "Strike", "range": "Melee", "attack": 400, "accuracy": 96},
    {"name": "Monk's Blue Staff", "attribute": "Strike", "range": "Melee", "attack": 370, "accuracy": 96},
    {"name": "Monk's Purple Staff", "attribute": "Strike", "range": "Melee", "attack": 370, "accuracy": 96},
    {"name": "Monk's Red Staff", "attribute": "Strike", "range": "Melee", "attack": 370, "accuracy": 96},
    {"name": "Moon Goddess's Frost Bow", "attribute": "Pierce", "range": "Ranged", "attack": 405, "accuracy": 99},
    {"name": "Moonlight Mace", "attribute": "Strike", "range": "Melee", "attack": 105, "accuracy": 96},
    {"name": "Mosscalibur", "attribute": "Slash", "range": "Melee", "attack": 320, "accuracy": 96},
    {"name": "Murderer's Axe", "attribute": "Slash", "range": "Melee", "attack": 415, "accuracy": 95},
    {"name": "Mystic Crosier", "attribute": "Strike", "range": "Melee", "attack": 500, "accuracy": 99},
    {"name": "Nameless", "attribute": "Slash", "range": "Melee", "attack": 278, "accuracy": 95},
    {"name": "Nameless Katana", "attribute": "Slash", "range": "Melee", "attack": 140, "accuracy": 96},
    {"name": "Nasu's Longbow", "attribute": "Pierce", "range": "Ranged", "attack": 299, "accuracy": 99},
    {"name": "Naval Sidearm", "attribute": "Pierce", "range": "Ranged", "attack": 213, "accuracy": 99},
    {"name": "Ninja Blade", "attribute": "Slash", "range": "Melee", "attack": 222, "accuracy": 96},
    {"name": "Obsidian Abacus", "attribute": "Strike", "range": "Melee", "attack": 265, "accuracy": 96},
    {"name": "Ogre's Fists", "attribute": "Strike", "range": "Melee", "attack": 308, "accuracy": 98},
    {"name": "Orichalcum Bow", "attribute": "Pierce", "range": "Ranged", "attack": 389, "accuracy": 99},
    {"name": "Orichalcum Knives", "attribute": "Pierce", "range": "Ranged", "attack": 388, "accuracy": 99},
    {"name": "Orichalcum Sabre", "attribute": "Slash", "range": "Melee", "attack": 385, "accuracy": 96},
    {"name": "Orison Xiphos", "attribute": "Slash", "range": "Melee", "attack": 170, "accuracy": 96},
    {"name": "Paladin's Mace", "attribute": "Strike", "range": "Melee", "attack": 295, "accuracy": 96},
    {"name": "Partisan", "attribute": "Pierce", "range": "Melee", "attack": 144, "accuracy": 97},
    {"name": "Pearl Mace", "attribute": "Strike", "range": "Melee", "attack": 212, "accuracy": 96},
    {"name": "Pearl Semaphore", "attribute": "Pierce", "range": "Melee", "attack": 215, "accuracy": 97},
    {"name": "Pillar of Light", "attribute": "Light", "range": "Melee", "attack": 410, "accuracy": 97},
    {"name": "Pirate Stilettos", "attribute": "Pierce", "range": "Ranged", "attack": 225, "accuracy": 99},
    {"name": "Prima Donna's Fan", "attribute": "Slash", "range": "Melee", "attack": 318, "accuracy": 98},
    {"name": "Proletariat Abacus", "attribute": "Strike", "range": "Melee", "attack": 355, "accuracy": 96},
    {"name": "Protobow Beta", "attribute": "Pierce", "range": "Ranged", "attack": 320, "accuracy": 99},
    {"name": "Quartz Mace", "attribute": "Strike", "range": "Melee", "attack": 161, "accuracy": 96},
    {"name": "Queen's Sequin Fan", "attribute": "Slash", "range": "Melee", "attack": 399, "accuracy": 98},
    {"name": "Raging Flame Gunbai", "attribute": "Pierce", "range": "Melee", "attack": 410, "accuracy": 97},
    {"name": "Raging God's Lightning Bow", "attribute": "Pierce", "range": "Ranged", "attack": 405, "accuracy": 99},
    {"name": "Rakshasi's Fan", "attribute": "Slash", "range": "Melee", "attack": 360, "accuracy": 98},
    {"name": "Ranger's Bow", "attribute": "Pierce", "range": "Ranged", "attack": 313, "accuracy": 99},
    {"name": "Rebel's Greatsword", "attribute": "Slash", "range": "Melee", "attack": 320, "accuracy": 95},
    {"name": "Red Wolf's Fangs", "attribute": "Pierce", "range": "Ranged", "attack": 268, "accuracy": 99},
    {"name": "Referee's Signal", "attribute": "Pierce", "range": "Melee", "attack": 268, "accuracy": 97},
    {"name": "Sage's Semaphore", "attribute": "Pierce", "range": "Melee", "attack": 220, "accuracy": 97},
    {"name": "Sage's Staff", "attribute": "Strike", "range": "Melee", "attack": 160, "accuracy": 96},
    {"name": "Sailor's Sword", "attribute": "Slash", "range": "Melee", "attack": 211, "accuracy": 96},
    {"name": "Saintly Fists", "attribute": "Strike", "range": "Melee", "attack": 365, "accuracy": 98},
    {"name": "Sanctor's Devotion", "attribute": "Strike", "range": "Melee", "attack": 140, "accuracy": 96},
    {"name": "Sanctor's Mace", "attribute": "Strike", "range": "Melee", "attack": 169, "accuracy": 96},
    {"name": "Sanctor's Resolve", "attribute": "Strike", "range": "Melee", "attack": 140, "accuracy": 96},
    {"name": "Sanctor's Vigour", "attribute": "Strike", "range": "Melee", "attack": 170, "accuracy": 96},
    {"name": "Sandglass Katana", "attribute": "Slash", "range": "Melee", "attack": 160, "accuracy": 96},
    {"name": "Sandglass Rapier", "attribute": "Slash", "range": "Melee", "attack": 190, "accuracy": 96},
    {"name": "Saunaphore", "attribute": "Pierce", "range": "Melee", "attack": 317, "accuracy": 97},
    {"name": "Save the King", "attribute": "Pierce", "range": "Melee", "attack": 500, "accuracy": 99},
    {"name": "Saviour's Sceptre", "attribute": "Strike", "range": "Melee", "attack": 400, "accuracy": 96},
    {"name": "Scapula Blade", "attribute": "Slash", "range": "Melee", "attack": 161, "accuracy": 96},
    {"name": "Scorpion's Sting", "attribute": "Pierce", "range": "Ranged", "attack": 170, "accuracy": 99},
    {"name": "Scrapmetal Slab", "attribute": "Slash", "range": "Melee", "attack": 160, "accuracy": 65},
    {"name": "Seahawk Fan", "attribute": "Slash", "range": "Melee", "attack": 272, "accuracy": 98},
    {"name": "Seeker's Mace", "attribute": "Strike", "range": "Melee", "attack": 319, "accuracy": 96},
    {"name": "Seiryuu's Staff", "attribute": "Strike", "range": "Melee", "attack": 415, "accuracy": 96},
    {"name": "Sentinel's Lance", "attribute": "Pierce", "range": "Melee", "attack": 395, "accuracy": 97},
    {"name": "Serene Fist", "attribute": "Strike", "range": "Melee", "attack": 275, "accuracy": 98},
    {"name": "Serenity Sceptre", "attribute": "Strike", "range": "Melee", "attack": 132, "accuracy": 96},
    {"name": "Serpent Greatsword", "attribute": "Slash", "range": "Melee", "attack": 294, "accuracy": 95},
    {"name": "Shaman's Sceptre", "attribute": "Strike", "range": "Melee", "attack": 285, "accuracy": 96},
    {"name": "Shingen's Sign", "attribute": "Pierce", "range": "Melee", "attack": 400, "accuracy": 97},
    {"name": "Silence", "attribute": "Slash", "range": "Melee", "attack": 320, "accuracy": 96},
    {"name": "Silver Abacus", "attribute": "Strike", "range": "Melee", "attack": 133, "accuracy": 96},
    {"name": "Silver Claymore", "attribute": "Slash", "range": "Melee", "attack": 128, "accuracy": 95},
    {"name": "Silver Daggers", "attribute": "Pierce", "range": "Ranged", "attack": 139, "accuracy": 99},
    {"name": "Silver Lance", "attribute": "Pierce", "range": "Melee", "attack": 129, "accuracy": 97},
    {"name": "Silver Mace", "attribute": "Strike", "range": "Melee", "attack": 120, "accuracy": 96},
    {"name": "Silver Spatha", "attribute": "Slash", "range": "Melee", "attack": 120, "accuracy": 96},
    {"name": "Slayer's Baselard", "attribute": "Slash", "range": "Melee", "attack": 150, "accuracy": 96},
    {"name": "Sleepy Eyed Katana", "attribute": "Slash", "range": "Melee", "attack": 190, "accuracy": 96},
    {"name": "Snow Brushing Fan", "attribute": "Slash", "range": "Melee", "attack": 377, "accuracy": 98},
    {"name": "Snowfield Mace", "attribute": "Strike", "range": "Melee", "attack": 390, "accuracy": 96},
    {"name": "Soldier's Sword", "attribute": "Slash", "range": "Melee", "attack": 55, "accuracy": 96},
    {"name": "Spider Lily Katana", "attribute": "Slash", "range": "Melee", "attack": 240, "accuracy": 96},
    {"name": "Spiked Gloves", "attribute": "Strike", "range": "Melee", "attack": 183, "accuracy": 98},
    {"name": "Spinal Spear", "attribute": "Pierce", "range": "Melee", "attack": 161, "accuracy": 97},
    {"name": "Staff of Creation", "attribute": "Strike", "range": "Melee", "attack": 340, "accuracy": 96},
    {"name": "Steel Crosier", "attribute": "Strike", "range": "Melee", "attack": 262, "accuracy": 96},
    {"name": "Steel Slab", "attribute": "Slash", "range": "Melee", "attack": 200, "accuracy": 98},
    {"name": "Stylish Fan", "attribute": "Slash", "range": "Melee", "attack": 320, "accuracy": 98},
    {"name": "Suzaku's Staff", "attribute": "Strike", "range": "Melee", "attack": 415, "accuracy": 96},
    {"name": "Sylph Knives", "attribute": "Wind", "range": "Ranged", "attack": 291, "accuracy": 99},
    {"name": "Sylvan Bow", "attribute": "Pierce", "range": "Ranged", "attack": 284, "accuracy": 99},
    {"name": "Tekkan", "attribute": "Strike", "range": "Melee", "attack": 230, "accuracy": 98},
    {"name": "Thief King's Katana", "attribute": "Slash", "range": "Melee", "attack": 420, "accuracy": 99},
    {"name": "Thrifty Abacus", "attribute": "Strike", "range": "Melee", "attack": 203, "accuracy": 96},
    {"name": "Thunderclap Bow", "attribute": "Elec", "range": "Ranged", "attack": 333, "accuracy": 99},
    {"name": "Tidal Trident", "attribute": "Wind", "range": "Melee", "attack": 336, "accuracy": 97},
    {"name": "Vacuum Fan", "attribute": "Slash", "range": "Melee", "attack": 377, "accuracy": 98},
    {"name": "Victor's Semaphore", "attribute": "Pierce", "range": "Melee", "attack": 390, "accuracy": 97},
    {"name": "War King's Claymore", "attribute": "Slash", "range": "Melee", "attack": 420, "accuracy": 99},
    {"name": "Weeping Blood Staff", "attribute": "Strike", "range": "Melee", "attack": 170, "accuracy": 96},
    {"name": "Whalebone Rod", "attribute": "Strike", "range": "Melee", "attack": 320, "accuracy": 96},
    {"name": "White Hawk Wings", "attribute": "Pierce", "range": "Ranged", "attack": 220, "accuracy": 99},
    {"name": "White Knuckle", "attribute": "Strike", "range": "Melee", "attack": 240, "accuracy": 50},
    {"name": "Wind God's Gale", "attribute": "Slash", "range": "Melee", "attack": 350, "accuracy": 96},
    {"name": "Wind Sprite Katana", "attribute": "Wind", "range": "Melee", "attack": 335, "accuracy": 96},
    {"name": "Winter Frog Staff", "attribute": "Strike", "range": "Melee", "attack": 270, "accuracy": 96},
    {"name": "Xibalba Rod", "attribute": "Strike", "range": "Melee", "attack": 400, "accuracy": 96},
    {"name": "Yggdrasil Staff", "attribute": "Strike", "range": "Melee", "attack": 500, "accuracy": 99},
    {"name": "Zweihander", "attribute": "Slash", "range": "Melee", "attack": 215, "accuracy": 95},
]

const armor_list =
[
    {"name": "Academic Dolman", "defense": 260, "evasion": 0},
    {"name": "Alabaster Mail", "defense": 250, "evasion": 0},
    {"name": "Apprentice Surcoat", "defense": 70, "evasion": 0},
    {"name": "Beast Jerkin", "defense": 245, "evasion": 3},
    {"name": "Bishamon's Armour", "defense": 380, "evasion": 0},
    {"name": "Blackbird Mantle", "defense": 260, "evasion": 0},
    {"name": "Bloodthirsty Vesture", "defense": 250, "evasion": 6},
    {"name": "Bone Segmentata", "defense": 134, "evasion": 0},
    {"name": "Bone Vest", "defense": 55, "evasion": 0},
    {"name": "Brawn Breastplate", "defense": 250, "evasion": 0},
    {"name": "Brigandine", "defense": 150, "evasion": 0},
    {"name": "Captains Uniform", "defense": 50, "evasion": 2},
    {"name": "Cardinal Dragon Armour", "defense": 400, "evasion": 0},
    {"name": "Cardinal Dragon Raiment", "defense": 360, "evasion": 8},
    {"name": "Cardinal Dragon Robe", "defense": 380, "evasion": 0},
    {"name": "Chainmail Suit", "defense": 75, "evasion": 0},
    {"name": "Chimera Armour", "defense": 220, "evasion": 0},
    {"name": "Comet Cuirass", "defense": 307, "evasion": 4},
    {"name": "Comet Plate", "defense": 320, "evasion": 0},
    {"name": "Coral Mail", "defense": 270, "evasion": 0},
    {"name": "Damascus Vest", "defense": 123, "evasion": 1},
    {"name": "Demon's Mail", "defense": 300, "evasion": 0},
    {"name": "Desert Robe", "defense": 120, "evasion": 0},
    {"name": "Divine Speed Clothes", "defense": 155, "evasion": 5},
    {"name": "Doudoune", "defense": 244, "evasion": 0},
    {"name": "Egis of the Vow", "defense": 380, "evasion": 0},
    {"name": "Exorcist's Cassock", "defense": 100, "evasion": 0},
    {"name": "Fairy-Thread Blouse", "defense": 160, "evasion": 5},
    {"name": "Fairy's Clothes", "defense": 10, "evasion": 20},
    {"name": "False Monk's Robes", "defense": 175, "evasion": 0},
    {"name": "Flameseal Corselet", "defense": 350, "evasion": 4},
    {"name": "Floral Caftan", "defense": 233, "evasion": 6},
    {"name": "Foreman's Jacket", "defense": 105, "evasion": 3},
    {"name": "Front-Line Wrap", "defense": 270, "evasion": 6},
    {"name": "Full Moon Robe", "defense": 288, "evasion": 0},
    {"name": "Fusskampf", "defense": 255, "evasion": 4},
    {"name": "Gilded Vestments", "defense": 139, "evasion": 0},
    {"name": "Golden Armour", "defense": 350, "evasion": 0},
    {"name": "Grand Jacket", "defense": 74, "evasion": 3},
    {"name": "Great Sage's Thawb", "defense": 350, "evasion": 0},
    {"name": "Healing Hauberk", "defense": 220, "evasion": 2},
    {"name": "Heavenly Raiment", "defense": 340, "evasion": 8},
    {"name": "Hell Rock Cuirass", "defense": 287, "evasion": 3},
    {"name": "Hero's Cuirass", "defense": 380, "evasion": 5},
    {"name": "Inferno Rock Cuirass", "defense": 354, "evasion": 4},
    {"name": "Innocent Clothes", "defense": 30, "evasion": 0},
    {"name": "Iron Cuirass", "defense": 72, "evasion": 0},
    {"name": "Iron Mail", "defense": 90, "evasion": 0},
    {"name": "Leather Cuirass", "defense": 38, "evasion": 0},
    {"name": "Maiden's Robe", "defense": 220, "evasion": 0},
    {"name": "Maximilian Armour", "defense": 240, "evasion": 0},
    {"name": "Military Cuirass", "defense": 40, "evasion": 0},
    {"name": "Mining Uniform", "defense": 58, "evasion": 2},
    {"name": "Mirror Mail", "defense": 300, "evasion": 0},
    {"name": "Monarch's Kaftan", "defense": 330, "evasion": 0},
    {"name": "Mystic Robe", "defense": 275, "evasion": 0},
    {"name": "Naval Armour", "defense": 200, "evasion": 0},
    {"name": "Naval Waistcoat", "defense": 190, "evasion": 2},
    {"name": "Noble Tuxedo", "defense": 200, "evasion": 5},
    {"name": "Opera Cape", "defense": 285, "evasion": 0},
    {"name": "Orichalcum Coat", "defense": 305, "evasion": 8},
    {"name": "Orichalcum Mail", "defense": 370, "evasion": 0},
    {"name": "Orichalcum Vest", "defense": 340, "evasion": 5},
    {"name": "Passionate Wraps", "defense": 242, "evasion": 6},
    {"name": "Pilgrim's Cloak", "defense": 50, "evasion": 0},
    {"name": "Pirate Costume", "defense": 196, "evasion": 6},
    {"name": "Pure White Robe", "defense": 88, "evasion": 0},
    {"name": "Recluse's Clothes", "defense": 130, "evasion": 15},
    {"name": "Red Lion Cuirass", "defense": 300, "evasion": 4},
    {"name": "Researcher's Coat", "defense": 92, "evasion": 4},
    {"name": "Rock Lion Cuirass", "defense": 237, "evasion": 3},
    {"name": "Royal Finery", "defense": 350, "evasion": 9},
    {"name": "Runic Vestment", "defense": 282, "evasion": 8},
    {"name": "Sailcloth Cape", "defense": 225, "evasion": 0},
    {"name": "Sailor's Uniform", "defense": 170, "evasion": 5},
    {"name": "Sanctor's Mantle", "defense": 89, "evasion": 0},
    {"name": "Sancturion Rochet", "defense": 301, "evasion": 0},
    {"name": "Sandglass Cuirass", "defense": 146, "evasion": 2},
    {"name": "Sandsilk Blouse", "defense": 150, "evasion": 4},
    {"name": "Scalemail Suit", "defense": 170, "evasion": 0},
    {"name": "Shell Vest", "defense": 208, "evasion": 3},
    {"name": "Silent Uniform", "defense": 104, "evasion": 4},
    {"name": "Silver Cuirass", "defense": 93, "evasion": 1},
    {"name": "Silver Mail", "defense": 115, "evasion": 0},
    {"name": "Snow Wolf Parka", "defense": 269, "evasion": 7},
    {"name": "Soultaker Robe", "defense": 190, "evasion": 0},
    {"name": "Spike Vest", "defense": 240, "evasion": 3},
    {"name": "Storm Bliaut", "defense": 255, "evasion": 6},
    {"name": "Sunstalo Plate", "defense": 380, "evasion": 0},
    {"name": "Traveller's Clothes", "defense": 35, "evasion": 2},
    {"name": "Undying Mantle", "defense": 340, "evasion": 0},
    {"name": "Vivid Ensemble", "defense": 245, "evasion": 7},
    {"name": "Weighted Mail", "defense": 210, "evasion": 0},
]

const gear_list =
[
    {"name": "Apprentice Klobuk", "defense": 12, "evasion": 0},
    {"name": "Artisan's Headgear", "defense": 99, "evasion": 9},
    {"name": "Asura's Hands", "defense": 135, "evasion": 0},
    {"name": "Aureolin Split Shoes", "defense": 125, "evasion": 7},
    {"name": "Berserk Gauntlets", "defense": 70, "evasion": 0},
    {"name": "Black Armet", "defense": 50, "evasion": 0},
    {"name": "Bolt Sprite Boots", "defense": 88, "evasion": 5},
    {"name": "Bone Helm", "defense": 30, "evasion": 0},
    {"name": "Boxer's Headgear", "defense": 60, "evasion": 5},
    {"name": "Brave Guards", "defense": 60, "evasion": 0},
    {"name": "Bruiser's Headgear", "defense": 120, "evasion": 9},
    {"name": "Bycocket", "defense": 9, "evasion": 0},
    {"name": "Chef's Mitts", "defense": 81, "evasion": 0},
    {"name": "Chef's Toque", "defense": 63, "evasion": 0},
    {"name": "Claw Breakers", "defense": 88, "evasion": 0},
    {"name": "Cobalt Split Shoes", "defense": 125, "evasion": 7},
    {"name": "Comet Gauntlets", "defense": 110, "evasion": 0},
    {"name": "Comet Greaves", "defense": 110, "evasion": 0},
    {"name": "Comet Hairpin", "defense": 105, "evasion": 0},
    {"name": "Comet Headgear", "defense": 97, "evasion": 9},
    {"name": "Comet Sallet", "defense": 120, "evasion": 0},
    {"name": "Crimson Split Shoes", "defense": 125, "evasion": 7},
    {"name": "Damascus Helm", "defense": 40, "evasion": 0},
    {"name": "Desert Gloves", "defense": 39, "evasion": 0},
    {"name": "Divine Light Gloves", "defense": 130, "evasion": 0},
    {"name": "Duellist's Headgear", "defense": 120, "evasion": 9},
    {"name": "Emerald Split Shoes", "defense": 125, "evasion": 7},
    {"name": "Espadrille", "defense": 50, "evasion": 4},
    {"name": "Fairy's Hairpin", "defense": 2, "evasion": 0},
    {"name": "Fang Headguard", "defense": 72, "evasion": 5},
    {"name": "Fencer's Headgear", "defense": 39, "evasion": 4},
    {"name": "Fire Beast's Tarleton", "defense": 120, "evasion": 0},
    {"name": "Fire Sprite Boots", "defense": 88, "evasion": 5},
    {"name": "Fortune's Grasp", "defense": 77, "evasion": 0},
    {"name": "Gem Mousquetaire", "defense": 102, "evasion": 0},
    {"name": "Gold Feather Helm", "defense": 120, "evasion": 0},
    {"name": "Gold Tap Shoes", "defense": 63, "evasion": 4},
    {"name": "Golden Gauntlets", "defense": 82, "evasion": 0},
    {"name": "Guard's Chausses", "defense": 22, "evasion": 0},
    {"name": "Guerilla Bandana", "defense": 110, "evasion": 10},
    {"name": "Hare Breeches", "defense": 85, "evasion": 0},
    {"name": "Headband", "defense": 18, "evasion": 2},
    {"name": "Hiking Boots", "defense": 83, "evasion": 6},
    {"name": "Horsehide Gloves", "defense": 6, "evasion": 0},
    {"name": "Ice Sprite Boots", "defense": 88, "evasion": 5},
    {"name": "Innocent Gloves", "defense": 3, "evasion": 0},
    {"name": "Iron Bassinet", "defense": 13, "evasion": 0},
    {"name": "Iron Bathing Cap", "defense": 80, "evasion": 7},
    {"name": "Iron Gauntlets", "defense": 13, "evasion": 0},
    {"name": "Iron Headgear", "defense": 26, "evasion": 3},
    {"name": "Jewelled Balmoral", "defense": 44, "evasion": 3},
    {"name": "Jouster's Headgear", "defense": 120, "evasion": 9},
    {"name": "Kaiser's Pickelhaube", "defense": 200, "evasion": 0},
    {"name": "Knight's Last Stand", "defense": 165, "evasion": 0},
    {"name": "Lacquer Gauntlets", "defense": 79, "evasion": 0},
    {"name": "Lancer's Headgear", "defense": 80, "evasion": 5},
    {"name": "Leather Gloves", "defense": 5, "evasion": 0},
    {"name": "Leg Guards", "defense": 13, "evasion": 0},
    {"name": "Magla Gauntlets", "defense": 93, "evasion": 0},
    {"name": "Magla Hairpin", "defense": 93, "evasion": 0},
    {"name": "Magla Headguard", "defense": 88, "evasion": 8},
    {"name": "Man O'War Gloves", "defense": 80, "evasion": 0},
    {"name": "Marine Hard Hat", "defense": 60, "evasion": 0},
    {"name": "Matador Shoes", "defense": 61, "evasion": 4},
    {"name": "Medic Greaves", "defense": 130, "evasion": 0},
    {"name": "Memento Hairpin", "defense": 125, "evasion": 0},
    {"name": "Miner's Boots", "defense": 10, "evasion": 2},
    {"name": "Miner's Gauges", "defense": 10, "evasion": 0},
    {"name": "Monk's Clogs", "defense": 36, "evasion": 3},
    {"name": "Mountaineer Gloves", "defense": 95, "evasion": 0},
    {"name": "New Moon Hairpin", "defense": 100, "evasion": 0},
    {"name": "Noble Sun Hat", "defense": 42, "evasion": 0},
    {"name": "Occult Gloves", "defense": 56, "evasion": 0},
    {"name": "Orgo's Grip", "defense": 55, "evasion": 0},
    {"name": "Orichalcum Greaves", "defense": 135, "evasion": 0},
    {"name": "Orichalcum Helm", "defense": 150, "evasion": 0},
    {"name": "Orichalcum Mitts", "defense": 134, "evasion": 0},
    {"name": "Priestess's Hairpin", "defense": 70, "evasion": 0},
    {"name": "Pure White Helm", "defense": 90, "evasion": 0},
    {"name": "Pure White Shoes", "defense": 105, "evasion": 6},
    {"name": "Purity Gloves", "defense": 18, "evasion": 0},
    {"name": "Ragaraja's Helm", "defense": 77, "evasion": 0},
    {"name": "Rakshasa's Hands", "defense": 135, "evasion": 0},
    {"name": "Red Ghillies", "defense": 30, "evasion": 3},
    {"name": "Reverent Crown", "defense": 155, "evasion": 0},
    {"name": "Royal Gloves", "defense": 126, "evasion": 0},
    {"name": "Royal Jodhpur", "defense": 125, "evasion": 8},
    {"name": "Runic Handguard", "defense": 100, "evasion": 0},
    {"name": "Sable Hood", "defense": 54, "evasion": 0},
    {"name": "Saint's Sabot", "defense": 45, "evasion": 4},
    {"name": "Sanctist Zucchetto", "defense": 85, "evasion": 0},
    {"name": "Sancturion Gloves", "defense": 128, "evasion": 0},
    {"name": "Sancturion's Mitre", "defense": 122, "evasion": 0},
    {"name": "Sand Rat Jambeau", "defense": 34, "evasion": 0},
    {"name": "Sandsilk Gloves", "defense": 43, "evasion": 0},
    {"name": "Scale Aventail", "defense": 85, "evasion": 0},
    {"name": "Scale Mitts", "defense": 74, "evasion": 0},
    {"name": "Scale Sollerets", "defense": 70, "evasion": 5},
    {"name": "Sealed Gauntlets", "defense": 110, "evasion": 0},
    {"name": "Sentinel Greaves", "defense": 39, "evasion": 0},
    {"name": "Serene Headband", "defense": 125, "evasion": 10},
    {"name": "Serum Gloves", "defense": 66, "evasion": 0},
    {"name": "Silk Hat", "defense": 19, "evasion": 0},
    {"name": "Silver Chausses", "defense": 26, "evasion": 0},
    {"name": "Silver Gauntlets", "defense": 21, "evasion": 0},
    {"name": "Silver Greaves", "defense": 16, "evasion": 0},
    {"name": "Silver Headgear", "defense": 37, "evasion": 4},
    {"name": "Spangenhelm", "defense": 95, "evasion": 0},
    {"name": "Spica Pumps", "defense": 122, "evasion": 7},
    {"name": "Steelship Gauges", "defense": 52, "evasion": 0},
    {"name": "Sunwarding Hat", "defense": 21, "evasion": 0},
    {"name": "Surgeon Greaves", "defense": 150, "evasion": 0},
    {"name": "Third Eye Protector", "defense": 75, "evasion": 6},
    {"name": "Thrilling Tricorne", "defense": 82, "evasion": 0},
    {"name": "Tortoise Jambeau", "defense": 85, "evasion": 0},
    {"name": "Touring Sandals", "defense": 129, "evasion": 9},
    {"name": "Tranquil Trilby", "defense": 82, "evasion": 0},
    {"name": "Traveller's Shoes", "defense": 4, "evasion": 1},
    {"name": "Valkyrie's Gauntlets", "defense": 99, "evasion": 0},
    {"name": "Vambrace", "defense": 75, "evasion": 0},
    {"name": "Vikso Helm", "defense": 70, "evasion": 0},
    {"name": "Wind Sprite Boots", "defense": 88, "evasion": 5},
    {"name": "Wolf Greaves", "defense": 138, "evasion": 0},
    {"name": "Yaksha's Hands", "defense": 135, "evasion": 0},
    {"name": "Yggdrasil Crown", "defense": 130, "evasion": 0},
]

const accessories =
[
    {"name": "Aeon Pearl Ring"},
    {"name": "Anti-Dagger Weave"},
    {"name": "Antumbra Igniter"},
    {"name": "Archetypal Ring"},
    {"name": "Arrow-Proof Padding"},
    {"name": "Assassin's Mask"},
    {"name": "Berserker's Mask"},
    {"name": "Blaze Igniter"},
    {"name": "Blizzard Amulet"},
    {"name": "Blizzard Igniter"},
    {"name": "Bolt Igniter"},
    {"name": "Brawler's Mask"},
    {"name": "Breeze Igniter"},
    {"name": "Captain's Bracelet"},
    {"name": "Carpenter Pendant"},
    {"name": "Chain of Bonds"},
    {"name": "Cherubic Igniter"},
    {"name": "Chevalier Igniter"},
    {"name": "Cinder Igniter"},
    {"name": "Citrine Monocle"},
    {"name": "Cleric's Mask"},
    {"name": "Coddled Choker"},
    {"name": "Commander's Mask"},
    {"name": "Courier Igniter"},
    {"name": "Courier's Anklet"},
    {"name": "Crescent Medal"},
    {"name": "Dancer's Mask"},
    {"name": "Dark Knight's Mask"},
    {"name": "Dawn Amulet"},
    {"name": "Destroyer's Mask"},
    {"name": "Devil Summoner's Mask"},
    {"name": "Devout Igniter"},
    {"name": "Divine Igniter"},
    {"name": "Dodger Ring"},
    {"name": "Dragoon's Mask"},
    {"name": "Dusk Pendant"},
    {"name": "Elementalist's Mask"},
    {"name": "Enfeeble Igniter"},
    {"name": "Escorte Igniter"},
    {"name": "Fairy Charm"},
    {"name": "Faker's Mask"},
    {"name": "Falcon Anklet"},
    {"name": "Familial Guard Pin"},
    {"name": "Forget-Me-Nots"},
    {"name": "Frost Igniter"},
    {"name": "Full Moon Medal"},
    {"name": "Gaius Regalia"},
    {"name": "Gale Amulet"},
    {"name": "Gale Igniter"},
    {"name": "Gambler's Jewel"},
    {"name": "Gamblers' Manual"},
    {"name": "Garlic Aromatics"},
    {"name": "Garnet Monocle"},
    {"name": "General's Mask"},
    {"name": "Gleaming Crystal"},
    {"name": "Glow Igniter"},
    {"name": "Guard's Talisman"},
    {"name": "Gunner's Mask"},
    {"name": "Hail Igniter"},
    {"name": "Handmade Flute"},
    {"name": "Healer's Mask"},
    {"name": "Herald's Banner"},
    {"name": "Hero King's Ring"},
    {"name": "Howlite Monocle"},
    {"name": "Inferno Amulet"},
    {"name": "Inferno Igniter"},
    {"name": "Innocent Amulet"},
    {"name": "Investor's Jewel"},
    {"name": "Knight's Bracelet"},
    {"name": "Knight's Mask"},
    {"name": "Mage Knight's Mask"},
    {"name": "Mage's Mask"},
    {"name": "Magic Seeker's Mask"},
    {"name": "Magus's Earring"},
    {"name": "Maiden's Sign"},
    {"name": "Malice Screen"},
    {"name": "Martial Artist's Mask"},
    {"name": "Mend Mask"},
    {"name": "Merchant's Mask"},
    {"name": "Mercy Mask"},
    {"name": "Mind Mask"},
    {"name": "Mint Charm"},
    {"name": "Miracle Igniter"},
    {"name": "Mirror of Assiah"},
    {"name": "Mirror of Atziluth"},
    {"name": "Muscle Mask"},
    {"name": "Nacre Bracelet"},
    {"name": "Narcissus Brooch"},
    {"name": "Narwhal's Horn"},
    {"name": "Ninja's Mask"},
    {"name": "Noble's Crest"},
    {"name": "Opal Monocle"},
    {"name": "Overlord's Sash"},
    {"name": "Paladin's Mask"},
    {"name": "Paladin's Talisman"},
    {"name": "Penumbra Igniter"},
    {"name": "Peridot Monocle"},
    {"name": "Phantasmal Doll"},
    {"name": "Pious Igniter"},
    {"name": "Plague Mask"},
    {"name": "Pocket Heater"},
    {"name": "Polarity Magnet"},
    {"name": "Praetorian Cloth"},
    {"name": "Prowler's Pipe"},
    {"name": "Pugilist's Mask"},
    {"name": "Radiant Crystal"},
    {"name": "Rainbow Scale"},
    {"name": "Regeneration Bell"},
    {"name": "Rejuvenation Bell"},
    {"name": "Renewal Igniter"},
    {"name": "Rider's Anklet"},
    {"name": "Royal Knight Medal"},
    {"name": "Sage Mask"},
    {"name": "Saintly Igniter"},
    {"name": "Samurai's Mask"},
    {"name": "Sapper Pendant"},
    {"name": "Saviour's Mask"},
    {"name": "Scout's Anklet"},
    {"name": "Seeker's Mask"},
    {"name": "Seer's Earring"},
    {"name": "Sentinel's Talisman"},
    {"name": "Seraphic Igniter"},
    {"name": "Shine Igniter"},
    {"name": "Sniper's Mask"},
    {"name": "Soma Igniter"},
    {"name": "Soothing Vial"},
    {"name": "Soul Hacker's Mask"},
    {"name": "Spark Igniter"},
    {"name": "Squire's Bracelet"},
    {"name": "Storm Igniter"},
    {"name": "Stormy Sea Ring"},
    {"name": "Summoner's Mask"},
    {"name": "Swindler's Jewel"},
    {"name": "Swordmaster's Mask"},
    {"name": "Tektite Monocle"},
    {"name": "Thief's Mask"},
    {"name": "Thunder Amulet"},
    {"name": "Tornado Igniter"},
    {"name": "Transcendent Igniter"},
    {"name": "Travel Charm"},
    {"name": "Trickster's Mask"},
    {"name": "Twin Thread Charm"},
    {"name": "Twinkling Crystal"},
    {"name": "Tycoon's Mask"},
    {"name": "Umbra Igniter"},
    {"name": "Unpolished Garnet"},
    {"name": "Utilitarian's Manual"},
    {"name": "Venomward Charm"},
    {"name": "Vitality Pendant"},
    {"name": "Warlock's Mask"},
    {"name": "Warlord's Mask"},
    {"name": "Warrior's Mask"},
    {"name": "White Sand Rose"},
    {"name": "Witch's Earring"},
    {"name": "Wizard's Mask"},
]

const skills =
[
    {"name": "Adamant Nightblade", "attribute": "Dark", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 220, "min_hits": 1, "max_hits": 1},
    {"name": "Assassinate", "attribute": "Dark", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 200, "min_hits": 1, "max_hits": 1},
    {"name": "Bamboo Splitter", "attribute": "Slash", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 240, "min_hits": 1, "max_hits": 1},
    {"name": "Basic Attack", "attribute": "Basic Attack", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 95, "power": 20, "min_hits": 1, "max_hits": 1},
    {"name": "Battlecry Tackle", "attribute": "Strike", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 95, "power": 450, "min_hits": 1, "max_hits": 3},
    {"name": "Blackguard's Hammer", "attribute": "Dark", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 420, "min_hits": 1, "max_hits": 1},
    {"name": "Blizz", "attribute": "Ice", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 50, "min_hits": 1, "max_hits": 1},
    {"name": "Blizza", "attribute": "Ice", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 130, "min_hits": 1, "max_hits": 1},
    {"name": "Blizzaton", "attribute": "Ice", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 220, "min_hits": 1, "max_hits": 1},
    {"name": "Bloodrain Twin Ninpo", "attribute": "Slash", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 450, "min_hits": 1, "max_hits": 1},
    {"name": "Bluefeather Dragoonshot", "attribute": "Ice", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 220, "min_hits": 1, "max_hits": 3},
    {"name": "Blusterblast Maneuver", "attribute": "Fire", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 300, "min_hits": 1, "max_hits": 1},
    {"name": "Boatona", "attribute": "Fire", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 220, "min_hits": 1, "max_hits": 1},
    {"name": "Bodhisattva's Palm", "attribute": "Strike", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 450, "min_hits": 1, "max_hits": 1},
    {"name": "Boltburst Fist", "attribute": "Elec", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 95, "power": 400, "min_hits": 2, "max_hits": 4},
    {"name": "Bot", "attribute": "Fire", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 50, "min_hits": 1, "max_hits": 1},
    {"name": "Botra", "attribute": "Fire", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 130, "min_hits": 1, "max_hits": 1},
    {"name": "Brave Blade", "attribute": "Slash", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 200, "min_hits": 1, "max_hits": 1},
    {"name": "Bullet Barrage", "attribute": "Pierce", "stat_scale": "Strength", "range_type": "Ranged", "accuracy": 97, "power": 450, "min_hits": 1, "max_hits": 1},
    {"name": "Child of Death", "attribute": "Dark", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 350, "min_hits": 1, "max_hits": 1},
    {"name": "Coldragoroa", "attribute": "Ice", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 350, "min_hits": 1, "max_hits": 1},
    {"name": "Crimson Flame", "attribute": "Fire", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 190, "min_hits": 1, "max_hits": 1},
    {"name": "Crimson Moon Sword Art", "attribute": "Slash", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 95, "power": 450, "min_hits": 1, "max_hits": 1},
    {"name": "Critical Strike", "attribute": "Slash", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 50, "power": 40, "min_hits": 1, "max_hits": 1},
    {"name": "Crusader's Hammer", "attribute": "Light", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 420, "min_hits": 1, "max_hits": 1},
    {"name": "Crushing Fist", "attribute": "Strike", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 230, "min_hits": 1, "max_hits": 1},
    {"name": "Cyc", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 50, "min_hits": 1, "max_hits": 1},
    {"name": "Cyclo", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 130, "min_hits": 1, "max_hits": 1},
    {"name": "Cyclone", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 220, "min_hits": 1, "max_hits": 1},
    {"name": "Cyclone Slasher", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 550, "min_hits": 1, "max_hits": 1},
    {"name": "Dark Sword", "attribute": "Slash", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 80, "min_hits": 1, "max_hits": 1},
    {"name": "Deadly Eraser", "attribute": "Almighty", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 500, "min_hits": 1, "max_hits": 1},
    {"name": "Diagonal Slash", "attribute": "Slash", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 70, "min_hits": 1, "max_hits": 1},
    {"name": "Divine Punishment", "attribute": "Light", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 350, "min_hits": 1, "max_hits": 1},
    {"name": "Draco Ray", "attribute": "Light", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 500, "min_hits": 1, "max_hits": 1},
    {"name": "Dragoroa", "attribute": "Fire", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 350, "min_hits": 1, "max_hits": 1},
    {"name": "Emerald Vortex", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 280, "min_hits": 1, "max_hits": 1},
    {"name": "Energy Ray", "attribute": "Light", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 240, "min_hits": 1, "max_hits": 1},
    {"name": "Eureka Moment", "attribute": "Fire", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 350, "min_hits": 1, "max_hits": 1},
    {"name": "Exorcist Light", "attribute": "Light", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 250, "min_hits": 1, "max_hits": 1},
    {"name": "Feather Dragoonshot", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 220, "min_hits": 1, "max_hits": 3},
    {"name": "Fiery Strike", "attribute": "Fire", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 120, "min_hits": 1, "max_hits": 1},
    {"name": "Fire Art", "attribute": "Fire", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 350, "min_hits": 1, "max_hits": 1},
    {"name": "Fireblade Rider", "attribute": "Fire", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 350, "min_hits": 1, "max_hits": 1},
    {"name": "Flame Vanguard", "attribute": "Fire", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 150, "min_hits": 1, "max_hits": 1},
    {"name": "Flying Guard Thrust", "attribute": "Pierce", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 300, "min_hits": 1, "max_hits": 1},
    {"name": "Fortune Slots", "attribute": "Almighty", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 50, "power": 250, "min_hits": 1, "max_hits": 1},
    {"name": "Free Juggling", "attribute": "Almighty", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 95, "power": 100, "min_hits": 1, "max_hits": 1},
    {"name": "Frenzy", "attribute": "Strike", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 95, "power": 300, "min_hits": 1, "max_hits": 3},
    {"name": "Frigid Fortress Tactic", "attribute": "Ice", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 200, "min_hits": 1, "max_hits": 1},
    {"name": "Gablizz", "attribute": "Ice", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 60, "min_hits": 1, "max_hits": 1},
    {"name": "Gablizza", "attribute": "Ice", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 140, "min_hits": 1, "max_hits": 1},
    {"name": "Gablizzaton", "attribute": "Ice", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 240, "min_hits": 1, "max_hits": 1},
    {"name": "Gabot", "attribute": "Fire", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 60, "min_hits": 1, "max_hits": 1},
    {"name": "Gabotra", "attribute": "Fire", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 140, "min_hits": 1, "max_hits": 1},
    {"name": "Gabouat", "attribute": "Fire", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 240, "min_hits": 1, "max_hits": 1},
    {"name": "Gacyc", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 60, "min_hits": 1, "max_hits": 1},
    {"name": "Gacyclo", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 140, "min_hits": 1, "max_hits": 1},
    {"name": "Gacyclone", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 240, "min_hits": 1, "max_hits": 1},
    {"name": "Gakande", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 60, "min_hits": 1, "max_hits": 1},
    {"name": "Gakandeon", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 240, "min_hits": 1, "max_hits": 1},
    {"name": "Gakandera", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 140, "min_hits": 1, "max_hits": 1},
    {"name": "Giant Slice", "attribute": "Slash", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 150, "min_hits": 1, "max_hits": 1},
    {"name": "Godkiller", "attribute": "Dark", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 350, "min_hits": 1, "max_hits": 1},
    {"name": "Gold Attack", "attribute": "Almighty", "stat_scale": "Strength", "range_type": "Ranged", "accuracy": 97, "power": 100, "min_hits": 1, "max_hits": 1},
    {"name": "Gold Rush", "attribute": "Almighty", "stat_scale": "Strength", "range_type": "Ranged", "accuracy": 97, "power": 200, "min_hits": 1, "max_hits": 1},
    {"name": "Golden Soldier", "attribute": "Almighty", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 95, "power": 350, "min_hits": 1, "max_hits": 1},
    {"name": "Hadean Icecrag", "attribute": "Ice", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 350, "min_hits": 1, "max_hits": 1},
    {"name": "Hama", "attribute": "Light", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 50, "min_hits": 1, "max_hits": 1},
    {"name": "Hamadyne", "attribute": "Light", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 220, "min_hits": 1, "max_hits": 1},
    {"name": "Hamaon", "attribute": "Light", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 130, "min_hits": 1, "max_hits": 1},
    {"name": "Hammer of Justice", "attribute": "Pierce", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 240, "min_hits": 1, "max_hits": 1},
    {"name": "Hassou Tobi", "attribute": "Slash", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 95, "power": 350, "min_hits": 8, "max_hits": 8},
    {"name": "Hazy Moon Nightblade", "attribute": "Slash", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 95, "power": 140, "min_hits": 1, "max_hits": 1},
    {"name": "Heavy Rush", "attribute": "Pierce", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 150, "min_hits": 1, "max_hits": 1},
    {"name": "Hell Thrust", "attribute": "Pierce", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 220, "min_hits": 1, "max_hits": 1},
    {"name": "Heroic Slash", "attribute": "Slash", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 200, "min_hits": 1, "max_hits": 1},
    {"name": "Hex Shot", "attribute": "Pierce", "stat_scale": "Strength", "range_type": "Ranged", "accuracy": 97, "power": 180, "min_hits": 1, "max_hits": 1},
    {"name": "Horse-Drawn Carnage (Magic Seeker)", "attribute": "Strike", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 350, "min_hits": 1, "max_hits": 1},
    {"name": "Horse-Drawn Carnage (Seeker)", "attribute": "Strike", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 220, "min_hits": 1, "max_hits": 1},
    {"name": "Ice Art", "attribute": "Ice", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 350, "min_hits": 1, "max_hits": 1},
    {"name": "Icewolf Offensive", "attribute": "Ice", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 350, "min_hits": 1, "max_hits": 1},
    {"name": "Icy Strike", "attribute": "Ice", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 120, "min_hits": 1, "max_hits": 1},
    {"name": "Illusive Dream", "attribute": "Slash", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 200, "min_hits": 1, "max_hits": 3},
    {"name": "Imposing Aura", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 180, "min_hits": 1, "max_hits": 1},
    {"name": "Infernal Vortex", "attribute": "Fire", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 150, "min_hits": 1, "max_hits": 1},
    {"name": "Jump Thrust", "attribute": "Pierce", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 160, "min_hits": 1, "max_hits": 1},
    {"name": "Kande", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 50, "min_hits": 1, "max_hits": 1},
    {"name": "Kandeon", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 220, "min_hits": 1, "max_hits": 1},
    {"name": "Kandera", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 130, "min_hits": 1, "max_hits": 1},
    {"name": "Leap Thrust", "attribute": "Pierce", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 220, "min_hits": 1, "max_hits": 1},
    {"name": "Lucky Slash", "attribute": "Slash", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 180, "min_hits": 1, "max_hits": 1},
    {"name": "Lurking Nightblade", "attribute": "Dark", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 130, "min_hits": 1, "max_hits": 1},
    {"name": "Mad Rush", "attribute": "Pierce", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 220, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Abyss", "attribute": "Dark", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 120, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Almighty", "attribute": "Almighty", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 130, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Avalanche", "attribute": "Ice", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 190, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Beacon", "attribute": "Light", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 120, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Bolt", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 110, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Burst", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 180, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Dark Aeons", "attribute": "Dark", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 180, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Darkness", "attribute": "Dark", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 40, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Divinity", "attribute": "Light", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 190, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Fire", "attribute": "Fire", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 40, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Flames", "attribute": "Fire", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 50, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Floe", "attribute": "Ice", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 120, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Gale", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 180, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Glacier", "attribute": "Ice", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 180, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Gust", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 110, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Hail", "attribute": "Ice", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 50, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Hellscape", "attribute": "Dark", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 190, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Holiness", "attribute": "Light", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 50, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Ice", "attribute": "Ice", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 40, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Icicle", "attribute": "Ice", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 110, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Inferno", "attribute": "Fire", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 190, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Light", "attribute": "Light", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 40, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Lightning", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 40, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Mistral", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 50, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Nightfall", "attribute": "Dark", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 110, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Omnipotence", "attribute": "Almighty", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 300, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Omniscience", "attribute": "Almighty", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 200, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Plasma", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 120, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Radiance", "attribute": "Light", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 180, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Scorch", "attribute": "Fire", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 180, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Shimmer", "attribute": "Light", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 110, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Tempest", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 120, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Thundersquall", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 50, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Thunderstorm", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 190, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Tornado", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 190, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Underworld", "attribute": "Dark", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 50, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Wildfire", "attribute": "Fire", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 120, "min_hits": 1, "max_hits": 1},
    {"name": "Mage Wind", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 40, "min_hits": 1, "max_hits": 1},
    {"name": "Magic Knight's Hammer", "attribute": "Elec", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 350, "min_hits": 1, "max_hits": 1},
    {"name": "Mahama", "attribute": "Light", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 60, "min_hits": 1, "max_hits": 1},
    {"name": "Mahamadyne", "attribute": "Light", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 240, "min_hits": 1, "max_hits": 1},
    {"name": "Mahamaon", "attribute": "Light", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 140, "min_hits": 1, "max_hits": 1},
    {"name": "Mamudo", "attribute": "Dark", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 60, "min_hits": 1, "max_hits": 1},
    {"name": "Mamudodyne", "attribute": "Dark", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 240, "min_hits": 1, "max_hits": 1},
    {"name": "Mamudoon", "attribute": "Dark", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 140, "min_hits": 1, "max_hits": 1},
    {"name": "Mania Bullet", "attribute": "Pierce", "stat_scale": "Strength", "range_type": "Ranged", "accuracy": 97, "power": 240, "min_hits": 1, "max_hits": 1},
    {"name": "Megido", "attribute": "Almighty", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 140, "min_hits": 1, "max_hits": 1},
    {"name": "Megidola", "attribute": "Almighty", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 240, "min_hits": 1, "max_hits": 1},
    {"name": "Megidolaon", "attribute": "Almighty", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 350, "min_hits": 1, "max_hits": 1},
    {"name": "Meteophor", "attribute": "Fire", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 550, "min_hits": 1, "max_hits": 1},
    {"name": "Meteoric Fist", "attribute": "Strike", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 95, "power": 150, "min_hits": 1, "max_hits": 3},
    {"name": "Miracle Cirque", "attribute": "Almighty", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 95, "power": 300, "min_hits": 1, "max_hits": 1},
    {"name": "Mudo", "attribute": "Dark", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 50, "min_hits": 1, "max_hits": 1},
    {"name": "Mudodyne", "attribute": "Dark", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 220, "min_hits": 1, "max_hits": 1},
    {"name": "Mudoon", "attribute": "Dark", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 130, "min_hits": 1, "max_hits": 1},
    {"name": "Myriad Shots", "attribute": "Pierce", "stat_scale": "Strength", "range_type": "Ranged", "accuracy": 95, "power": 70, "min_hits": 1, "max_hits": 1},
    {"name": "Myriad Shots (Synthesis)", "attribute": "Pierce", "stat_scale": "Strength", "range_type": "Ranged", "accuracy": 95, "power": 380, "min_hits": 3, "max_hits": 5},
    {"name": "Netherworld Tree", "attribute": "Dark", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 350, "min_hits": 1, "max_hits": 1},
    {"name": "Peerless Sanctity", "attribute": "Light", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 95, "power": 450, "min_hits": 1, "max_hits": 1},
    {"name": "Peerless Shadow", "attribute": "Dark", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 95, "power": 450, "min_hits": 1, "max_hits": 1},
    {"name": "Peerless Stonecleaver", "attribute": "Slash", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 550, "min_hits": 1, "max_hits": 1},
    {"name": "Perfect Punch", "attribute": "Strike", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 100, "min_hits": 1, "max_hits": 1},
    {"name": "Phantom Swordswarm", "attribute": "Slash", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 420, "min_hits": 4, "max_hits": 6},
    {"name": "Phantom Tracer", "attribute": "Slash", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 300, "min_hits": 1, "max_hits": 1},
    {"name": "Plasma Nightblade", "attribute": "Slash", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 200, "min_hits": 1, "max_hits": 1},
    {"name": "Plunder Life", "attribute": "Almighty", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 100, "power": 60, "min_hits": 1, "max_hits": 1},
    {"name": "Poison Shot", "attribute": "Pierce", "stat_scale": "Strength", "range_type": "Ranged", "accuracy": 97, "power": 110, "min_hits": 1, "max_hits": 1},
    {"name": "Power Thrust", "attribute": "Pierce", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 150, "min_hits": 1, "max_hits": 1},
    {"name": "Powerful Pulveriser", "attribute": "Strike", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 180, "min_hits": 1, "max_hits": 1},
    {"name": "Precipice of the Abyss", "attribute": "Almighty", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 500, "min_hits": 1, "max_hits": 1},
    {"name": "Radiance", "attribute": "Light", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 190, "min_hits": 1, "max_hits": 1},
    {"name": "Radiant Crusher", "attribute": "Light", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 200, "min_hits": 1, "max_hits": 1},
    {"name": "Raging Edge", "attribute": "Slash", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 95, "power": 190, "min_hits": 1, "max_hits": 1},
    {"name": "Rampage Slash", "attribute": "Slash", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 350, "min_hits": 1, "max_hits": 1},
    {"name": "Redfeather Dragoonshot", "attribute": "Fire", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 220, "min_hits": 1, "max_hits": 3},
    {"name": "Rider of the Blade", "attribute": "Light", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 200, "min_hits": 1, "max_hits": 1},
    {"name": "Rising Slash", "attribute": "Slash", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 95, "power": 140, "min_hits": 1, "max_hits": 1},
    {"name": "Round Slash", "attribute": "Slash", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 95, "power": 70, "min_hits": 1, "max_hits": 1},
    {"name": "Royal Slash", "attribute": "Almighty", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 400, "min_hits": 1, "max_hits": 1},
    {"name": "Royal Sword", "attribute": "Almighty", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 700, "min_hits": 1, "max_hits": 1},
    {"name": "Ruin's Flameflower", "attribute": "Fire", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 200, "min_hits": 1, "max_hits": 1},
    {"name": "Seeker's Flame", "attribute": "Fire", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 200, "min_hits": 1, "max_hits": 1},
    {"name": "Seeker's Gale", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 180, "min_hits": 1, "max_hits": 1},
    {"name": "Shield Arts", "attribute": "Strike", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 90, "min_hits": 1, "max_hits": 1},
    {"name": "Skull Cracker", "attribute": "Strike", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 120, "min_hits": 1, "max_hits": 1},
    {"name": "Skyfall Bolt", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 550, "min_hits": 1, "max_hits": 1},
    {"name": "Slam Shatter", "attribute": "Strike", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 95, "power": 150, "min_hits": 1, "max_hits": 1},
    {"name": "Slam Strike", "attribute": "Strike", "stat_scale": "Strength", "range_type": "Ranged", "accuracy": 97, "power": 180, "min_hits": 1, "max_hits": 1},
    {"name": "Sleep Shot", "attribute": "Pierce", "stat_scale": "Strength", "range_type": "Ranged", "accuracy": 97, "power": 60, "min_hits": 1, "max_hits": 1},
    {"name": "Slicer", "attribute": "Slash", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 100, "min_hits": 2, "max_hits": 4},
    {"name": "Smashing Salvo", "attribute": "Pierce", "stat_scale": "Strength", "range_type": "Ranged", "accuracy": 97, "power": 180, "min_hits": 1, "max_hits": 1},
    {"name": "Soulblade Rider", "attribute": "Almighty", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 450, "min_hits": 1, "max_hits": 1},
    {"name": "Spiral Fist", "attribute": "Strike", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 240, "min_hits": 1, "max_hits": 1},
    {"name": "Stormbreaker Axe", "attribute": "Elec", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 150, "min_hits": 1, "max_hits": 1},
    {"name": "Summon Beast", "attribute": "Fire", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 230, "min_hits": 1, "max_hits": 1},
    {"name": "Summon Cockatrice", "attribute": "Dark", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 150, "min_hits": 1, "max_hits": 1},
    {"name": "Summon Deity", "attribute": "Light", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 350, "min_hits": 1, "max_hits": 1},
    {"name": "Summon Dragon God", "attribute": "Fire", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 400, "min_hits": 1, "max_hits": 1},
    {"name": "Summon Dragon God (Modified)", "attribute": "Fire", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 300, "min_hits": 1, "max_hits": 1},
    {"name": "Summon Duskbone Knight", "attribute": "Slash", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 95, "power": 220, "min_hits": 1, "max_hits": 1},
    {"name": "Summon Eagle Lion", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 180, "min_hits": 1, "max_hits": 1},
    {"name": "Summon Eagle Lion King", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 350, "min_hits": 1, "max_hits": 1},
    {"name": "Summon Fairy (Modified)", "attribute": "Ice", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 230, "min_hits": 1, "max_hits": 1},
    {"name": "Summon Fury", "attribute": "Strike", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 350, "min_hits": 1, "max_hits": 1},
    {"name": "Summon Gargoyle", "attribute": "Fire", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 230, "min_hits": 1, "max_hits": 1},
    {"name": "Summon Genma", "attribute": "Pierce", "stat_scale": "Strength", "range_type": "Ranged", "accuracy": 97, "power": 230, "min_hits": 1, "max_hits": 1},
    {"name": "Summon Goblin King", "attribute": "Slash", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 50, "power": 80, "min_hits": 1, "max_hits": 1},
    {"name": "Summon Guptauros King", "attribute": "Strike", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 95, "power": 400, "min_hits": 1, "max_hits": 3},
    {"name": "Summon Kishin", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 420, "min_hits": 2, "max_hits": 4},
    {"name": "Summon Lava Beast", "attribute": "Almighty", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 160, "min_hits": 1, "max_hits": 1},
    {"name": "Summon Lizardman", "attribute": "Elec", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 350, "min_hits": 1, "max_hits": 1},
    {"name": "Summon Night", "attribute": "Ice", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 200, "min_hits": 1, "max_hits": 1},
    {"name": "Summon Tyrant", "attribute": "Almighty", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 450, "min_hits": 1, "max_hits": 1},
    {"name": "Summon Undead King", "attribute": "Dark", "stat_scale": "Magic", "range_type": "Melee", "accuracy": 99, "power": 500, "min_hits": 1, "max_hits": 1},
    {"name": "Summon Wilder", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 150, "min_hits": 1, "max_hits": 1},
    {"name": "Super Energy Ray", "attribute": "Light", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 350, "min_hits": 1, "max_hits": 1},
    {"name": "Sweeping Slash", "attribute": "Slash", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 50, "min_hits": 1, "max_hits": 1},
    {"name": "Systematic Destruction", "attribute": "Strike", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 250, "min_hits": 1, "max_hits": 1},
    {"name": "Thunder Blade", "attribute": "Elec", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 95, "power": 180, "min_hits": 1, "max_hits": 1},
    {"name": "Thunder Fang", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 350, "min_hits": 1, "max_hits": 1},
    {"name": "Thunderstrike Thrust", "attribute": "Elec", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 150, "min_hits": 1, "max_hits": 1},
    {"name": "Tiger Eruption Fist", "attribute": "Strike", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 95, "power": 250, "min_hits": 2, "max_hits": 4},
    {"name": "Trial of the Seeker", "attribute": "Almighty", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 98, "power": 350, "min_hits": 1, "max_hits": 1},
    {"name": "Ultimate Energy Ray", "attribute": "Light", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 450, "min_hits": 1, "max_hits": 1},
    {"name": "Void Wave", "attribute": "Elec", "stat_scale": "Magic", "range_type": "Ranged", "accuracy": 99, "power": 200, "min_hits": 1, "max_hits": 1},
    {"name": "Vorpal Blade", "attribute": "Slash", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 95, "power": 250, "min_hits": 1, "max_hits": 1},
    {"name": "Wanton Destruction", "attribute": "Strike", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 350, "min_hits": 1, "max_hits": 1},
    {"name": "Wild Barrage", "attribute": "Pierce", "stat_scale": "Strength", "range_type": "Ranged", "accuracy": 95, "power": 280, "min_hits": 2, "max_hits": 3},
    {"name": "Wild Bore", "attribute": "Pierce", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 350, "min_hits": 1, "max_hits": 1},
    {"name": "Wild Salvo", "attribute": "Pierce", "stat_scale": "Strength", "range_type": "Ranged", "accuracy": 95, "power": 180, "min_hits": 2, "max_hits": 3},
    {"name": "Wind Blade", "attribute": "Elec", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 95, "power": 350, "min_hits": 1, "max_hits": 1},
    {"name": "Windbreaker", "attribute": "Elec", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 150, "min_hits": 1, "max_hits": 1},
    {"name": "Winning Horse", "attribute": "Strike", "stat_scale": "Strength", "range_type": "Melee", "accuracy": 97, "power": 450, "min_hits": 1, "max_hits": 1},
]

const enemies =
[
    {"name": "???", "boss": true, "category": "Unknown", "level": 30, "hp": 9760, "mp": 500, "strength": 25, "magic": 25, "endurance": 30, "agility": 25, "luck": 25, "attack": 190, "defense": 190, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Alpha Rockworm Valmo", "boss": false, "category": "Mimic", "level": 29, "hp": 1800, "mp": 400, "strength": 25, "magic": 19, "endurance": 22, "agility": 20, "luck": 20, "attack": 180, "defense": 150, "evasion": 0, "slash": 0.4, "pierce": 0.4, "strike": 0.4, "fire": "Null", "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Aquatic Shuper", "boss": false, "category": "Mollusk", "level": 20, "hp": 404, "mp": 204, "strength": 18, "magic": 18, "endurance": 18, "agility": 15, "luck": 12, "attack": 150, "defense": 140, "evasion": 0, "slash": 1.5, "pierce": 1, "strike": "Null", "fire": 1, "ice": "Drain", "elec": 1.5, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Archdemon Louis Charadrius", "boss": true, "category": "Demon Lord", "level": 80, "hp": 40000, "mp": 500, "strength": 75, "magic": 75, "endurance": 75, "agility": 75, "luck": 75, "attack": 600, "defense": 600, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Archer Goborn", "boss": false, "category": "Demihuman", "level": 16, "hp": 298, "mp": 144, "strength": 15, "magic": 12, "endurance": 11, "agility": 14, "luck": 11, "attack": 120, "defense": 70, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Archer Goborn Esto", "boss": false, "category": "Demihuman", "level": 18, "hp": 368, "mp": 154, "strength": 16, "magic": 14, "endurance": 13, "agility": 16, "luck": 12, "attack": 140, "defense": 100, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Archer Goborn Esto (Coliseium)", "boss": false, "category": "Demihuman", "level": 35, "hp": 938, "mp": 154, "strength": 28, "magic": 26, "endurance": 25, "agility": 29, "luck": 25, "attack": 300, "defense": 270, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Archer Goborn Ligo", "boss": false, "category": "Demihuman", "level": 43, "hp": 950, "mp": 254, "strength": 36, "magic": 34, "endurance": 38, "agility": 36, "luck": 22, "attack": 350, "defense": 350, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Argent-Crown Homo Tenta", "boss": false, "category": "Human", "level": 88, "hp": 6666, "mp": 588, "strength": 88, "magic": 88, "endurance": 88, "agility": 88, "luck": 88, "attack": 500, "defense": 500, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": "Repel", "ice": "Repel", "elec": "Repel", "wind": "Repel", "light": "Repel", "dark": "Repel", "almighty": 0.1},
    {"name": "Azure Homo Tenta", "boss": false, "category": "Human", "level": 15, "hp": 300, "mp": 188, "strength": 12, "magic": 12, "endurance": 12, "agility": 12, "luck": 12, "attack": 90, "defense": 90, "evasion": 0, "slash": 1, "pierce": 1.5, "strike": 0.5, "fire": 1.5, "ice": "Repel", "elec": "Null", "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Azure Homo Tenta (Coliseium)", "boss": false, "category": "Human", "level": 45, "hp": 1400, "mp": 188, "strength": 40, "magic": 40, "endurance": 40, "agility": 40, "luck": 40, "attack": 400, "defense": 400, "evasion": 0, "slash": 1, "pierce": 1, "strike": 0.5, "fire": 1.5, "ice": "Repel", "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Balmy Alento", "boss": false, "category": "Plant", "level": 58, "hp": 3500, "mp": 400, "strength": 50, "magic": 55, "endurance": 65, "agility": 45, "luck": 45, "attack": 480, "defense": 480, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": 0.5, "elec": 0.5, "wind": 0.5, "light": "Drain", "dark": 0.5, "almighty": 1},
    {"name": "Bandit", "boss": false, "category": "Person", "level": 59, "hp": 1200, "mp": 244, "strength": 65, "magic": 45, "endurance": 55, "agility": 49, "luck": 45, "attack": 500, "defense": 480, "evasion": 0, "slash": 0.5, "pierce": 0.5, "strike": 0.5, "fire": 1.5, "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 0.5, "almighty": 1},
    {"name": "Bandit 2", "boss": false, "category": "Person", "level": 59, "hp": 1200, "mp": 244, "strength": 55, "magic": 55, "endurance": 55, "agility": 60, "luck": 60, "attack": 500, "defense": 450, "evasion": 3, "slash": 1, "pierce": 1.5, "strike": 1.5, "fire": 1, "ice": 1, "elec": 0.5, "wind": 0.5, "light": 1, "dark": 0.5, "almighty": 1},
    {"name": "Bandit Chief Cistus", "boss": false, "category": "Person", "level": 67, "hp": 8000, "mp": 399, "strength": 65, "magic": 65, "endurance": 60, "agility": 51, "luck": 51, "attack": 500, "defense": 500, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1.5, "dark": "Null", "almighty": 1},
    {"name": "Benepetia", "boss": false, "category": "Mollusk", "level": 40, "hp": 832, "mp": 240, "strength": 29, "magic": 28, "endurance": 28, "agility": 30, "luck": 27, "attack": 300, "defense": 290, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 0.4, "ice": 1.5, "elec": 1, "wind": 0.4, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Bloodcoin Imitec", "boss": false, "category": "Mimic", "level": 65, "hp": 6000, "mp": 400, "strength": 70, "magic": 50, "endurance": 60, "agility": 50, "luck": 77, "attack": 550, "defense": 500, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1.5, "dark": 0.5, "almighty": 1},
    {"name": "Blue Elmenta", "boss": false, "category": "Spirit", "level": 10, "hp": 1000, "mp": 100, "strength": 10, "magic": 10, "endurance": 10, "agility": 10, "luck": 10, "attack": 1, "defense": 100, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 2, "ice": 0.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Bow Brute Malmorta", "boss": false, "category": "Undead", "level": 44, "hp": 860, "mp": 302, "strength": 36, "magic": 34, "endurance": 34, "agility": 38, "luck": 30, "attack": 310, "defense": 330, "evasion": 3, "slash": 0.5, "pierce": 0.5, "strike": 1.5, "fire": 1, "ice": 1, "elec": "Null", "wind": 1, "light": 1.5, "dark": 0.1, "almighty": 1},
    {"name": "Bow Captain Malmorta", "boss": false, "category": "Undead", "level": 12, "hp": 254, "mp": 82, "strength": 10, "magic": 9, "endurance": 13, "agility": 16, "luck": 8, "attack": 40, "defense": 90, "evasion": 3, "slash": 0.5, "pierce": 0.5, "strike": 1.5, "fire": 1, "ice": 1, "elec": "Null", "wind": 1, "light": 1.5, "dark": 0.1, "almighty": 1},
    {"name": "Bow General Malmorta", "boss": false, "category": "Undead", "level": 60, "hp": 1000, "mp": 350, "strength": 51, "magic": 49, "endurance": 52, "agility": 56, "luck": 48, "attack": 440, "defense": 470, "evasion": 3, "slash": 0.5, "pierce": 0.5, "strike": 1.5, "fire": 1, "ice": 1, "elec": "Null", "wind": 1, "light": 1.5, "dark": 0.1, "almighty": 1},
    {"name": "Bow Malmorta", "boss": false, "category": "Undead", "level": 6, "hp": 150, "mp": 116, "strength": 5, "magic": 6, "endurance": 5, "agility": 9, "luck": 4, "attack": 30, "defense": 40, "evasion": 3, "slash": 1, "pierce": 0.5, "strike": 1.5, "fire": 1, "ice": 1, "elec": "Null", "wind": 1, "light": 1.5, "dark": 0.1, "almighty": 1},
    {"name": "Bow Noble Malmorta", "boss": false, "category": "Undead", "level": 25, "hp": 403, "mp": 302, "strength": 19, "magic": 17, "endurance": 20, "agility": 23, "luck": 16, "attack": 140, "defense": 150, "evasion": 0, "slash": 0.5, "pierce": 0.5, "strike": 1.5, "fire": 1, "ice": 1, "elec": "Null", "wind": 1, "light": 1, "dark": 1.5, "almighty": 1},
    {"name": "Bow Scourge Malmorta", "boss": false, "category": "Undead", "level": 67, "hp": 1200, "mp": 389, "strength": 64, "magic": 59, "endurance": 62, "agility": 66, "luck": 58, "attack": 480, "defense": 500, "evasion": 3, "slash": 0.5, "pierce": 0.5, "strike": 1.5, "fire": 1, "ice": 1, "elec": "Null", "wind": 1, "light": 1.5, "dark": 0.1, "almighty": 1},
    {"name": "Bow Slave Malmorta", "boss": false, "category": "Undead", "level": 17, "hp": 205, "mp": 237, "strength": 16, "magic": 14, "endurance": 13, "agility": 17, "luck": 9, "attack": 130, "defense": 140, "evasion": 3, "slash": 1, "pierce": 0.5, "strike": 1.5, "fire": 1, "ice": 1, "elec": "Null", "wind": 1, "light": 1.5, "dark": 0.1, "almighty": 1},
    {"name": "Bow Soldier Malmorta", "boss": false, "category": "Undead", "level": 19, "hp": 364, "mp": 102, "strength": 15, "magic": 12, "endurance": 16, "agility": 19, "luck": 11, "attack": 110, "defense": 120, "evasion": 3, "slash": 0.5, "pierce": 0.5, "strike": 1.5, "fire": 1, "ice": 1, "elec": "Null", "wind": 1, "light": 1.5, "dark": 0.1, "almighty": 1},
    {"name": "Canibaflo", "boss": false, "category": "Plant", "level": 29, "hp": 642, "mp": 232, "strength": 25, "magic": 26, "endurance": 27, "agility": 23, "luck": 22, "attack": 230, "defense": 200, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": "Null", "elec": 0.5, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Captain Klinger", "boss": true, "category": "Person", "level": 5, "hp": 530, "mp": 500, "strength": 4, "magic": 4, "endurance": 4, "agility": 4, "luck": 4, "attack": 50, "defense": 30, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1.5, "dark": 1, "almighty": 1},
    {"name": "Catherina the Bounty Queen 1", "boss": true, "category": "Person", "level": 22, "hp": 1500, "mp": 300, "strength": 23, "magic": 15, "endurance": 18, "agility": 20, "luck": 18, "attack": 160, "defense": 160, "evasion": 3, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": 0.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Catherina the Bounty Queen 2", "boss": true, "category": "Person", "level": 31, "hp": 3000, "mp": 300, "strength": 25, "magic": 20, "endurance": 20, "agility": 25, "luck": 23, "attack": 190, "defense": 190, "evasion": 3, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": 0.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Catherina the Bounty Queen 3", "boss": true, "category": "Person", "level": 35, "hp": 4000, "mp": 300, "strength": 35, "magic": 25, "endurance": 25, "agility": 30, "luck": 30, "attack": 300, "defense": 250, "evasion": 3, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": 0.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Chimenza", "boss": false, "category": "Demonic Beast", "level": 28, "hp": 2200, "mp": 999, "strength": 30, "magic": 30, "endurance": 25, "agility": 25, "luck": 20, "attack": 200, "defense": 180, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 0.5, "ice": 1, "elec": "Null", "wind": 1.5, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Civilian Morneto", "boss": false, "category": "Undead", "level": 9, "hp": 230, "mp": 75, "strength": 9, "magic": 1, "endurance": 13, "agility": 6, "luck": 6, "attack": 50, "defense": 60, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": 1, "elec": 1, "wind": 1, "light": 1.8, "dark": 0.5, "almighty": 1},
    {"name": "Coliseum Fighter", "boss": false, "category": "Person", "level": 50, "hp": 2200, "mp": 244, "strength": 50, "magic": 42, "endurance": 42, "agility": 42, "luck": 42, "attack": 420, "defense": 400, "evasion": 0, "slash": 0.5, "pierce": 0.5, "strike": 0.5, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1.5, "dark": 1, "almighty": 1},
    {"name": "Coliseum Mage", "boss": false, "category": "Person", "level": 50, "hp": 2000, "mp": 244, "strength": 42, "magic": 42, "endurance": 42, "agility": 50, "luck": 42, "attack": 420, "defense": 400, "evasion": 3, "slash": 0.5, "pierce": 1, "strike": 1.5, "fire": 0.5, "ice": 0.5, "elec": 0.5, "wind": 0.5, "light": 1, "dark": 0.5, "almighty": 1},
    {"name": "Colossal Gelatinos", "boss": false, "category": "Mollusk", "level": 20, "hp": 682, "mp": 130, "strength": 18, "magic": 17, "endurance": 19, "agility": 14, "luck": 15, "attack": 140, "defense": 150, "evasion": 0, "slash": "Null", "pierce": "Null", "strike": "Null", "fire": 1.5, "ice": 1, "elec": 1.5, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Colossal Vampire Gelatinos", "boss": false, "category": "Mollusk", "level": 23, "hp": 1550, "mp": 299, "strength": 20, "magic": 20, "endurance": 24, "agility": 19, "luck": 20, "attack": 190, "defense": 150, "evasion": 0, "slash": "Null", "pierce": "Null", "strike": "Null", "fire": "Drain", "ice": 1.5, "elec": 1.5, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Crag Manjula", "boss": false, "category": "Demonic Beast", "level": 45, "hp": 4500, "mp": 350, "strength": 50, "magic": 50, "endurance": 60, "agility": 38, "luck": 28, "attack": 400, "defense": 360, "evasion": 0, "slash": 0.5, "pierce": 0.5, "strike": 1.5, "fire": 1, "ice": "Null", "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Crag Manjula (Colesium)", "boss": false, "category": "Demonic Beast", "level": 33, "hp": 2500, "mp": 300, "strength": 40, "magic": 38, "endurance": 28, "agility": 29, "luck": 22, "attack": 280, "defense": 250, "evasion": 0, "slash": 0.3, "pierce": 0.3, "strike": 1.5, "fire": "Null", "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Cursewight Magileto", "boss": false, "category": "Undead", "level": 15, "hp": 545, "mp": 400, "strength": 12, "magic": 16, "endurance": 15, "agility": 16, "luck": 12, "attack": 80, "defense": 100, "evasion": 3, "slash": 1, "pierce": 0.5, "strike": 1.5, "fire": 1, "ice": 1, "elec": "Null", "wind": 1, "light": 1.5, "dark": "Repel", "almighty": 1},
    {"name": "Dark Elmenta", "boss": false, "category": "Spirit", "level": 55, "hp": 4500, "mp": 100, "strength": 50, "magic": 50, "endurance": 50, "agility": 50, "luck": 50, "attack": 1, "defense": 500, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 2, "dark": 0.5, "almighty": 1},
    {"name": "Demo Man Goddard", "boss": true, "category": "Person", "level": 25, "hp": 2800, "mp": 300, "strength": 25, "magic": 20, "endurance": 22, "agility": 20, "luck": 20, "attack": 170, "defense": 170, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 0.5, "elec": 1.5, "wind": 0.5, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Destroyer Charadrius 1", "boss": true, "category": "Human", "level": 82, "hp": 28000, "mp": 500, "strength": 77, "magic": 77, "endurance": 77, "agility": 77, "luck": 77, "attack": 620, "defense": 600, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Destroyer Charadrius 2", "boss": true, "category": "Human", "level": 85, "hp": 40000, "mp": 500, "strength": 80, "magic": 80, "endurance": 80, "agility": 80, "luck": 80, "attack": 650, "defense": 600, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Destroyer Charadrius 3", "boss": true, "category": "Human", "level": 87, "hp": 40000, "mp": 500, "strength": 85, "magic": 85, "endurance": 85, "agility": 85, "luck": 85, "attack": 670, "defense": 600, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Destroyer Charadrius 4", "boss": true, "category": "Human", "level": 90, "hp": 80000, "mp": 500, "strength": 99, "magic": 99, "endurance": 99, "agility": 99, "luck": 99, "attack": 700, "defense": 600, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Devourer of Flames", "boss": true, "category": "Dragon", "level": 70, "hp": 25000, "mp": 500, "strength": 70, "magic": 50, "endurance": 70, "agility": 55, "luck": 55, "attack": 550, "defense": 550, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": "Drain", "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Devourer of Nations", "boss": true, "category": "Dragon", "level": 70, "hp": 25000, "mp": 500, "strength": 75, "magic": 55, "endurance": 70, "agility": 55, "luck": 55, "attack": 600, "defense": 550, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": "Repel", "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Devourer of Stars", "boss": true, "category": "Dragon", "level": 70, "hp": 20000, "mp": 500, "strength": 50, "magic": 50, "endurance": 70, "agility": 55, "luck": 55, "attack": 400, "defense": 500, "evasion": 0, "slash": "Repel", "pierce": "Repel", "strike": "Repel", "fire": "Repel", "ice": "Repel", "elec": "Repel", "wind": "Repel", "light": "Repel", "dark": "Repel", "almighty": 0.5},
    {"name": "Diabolus Avades", "boss": true, "category": "Human", "level": 77, "hp": 25000, "mp": 500, "strength": 73, "magic": 73, "endurance": 73, "agility": 73, "luck": 73, "attack": 580, "defense": 580, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 0.5, "ice": 0.5, "elec": 0.5, "wind": 0.5, "light": 0.5, "dark": 0.5, "almighty": 1},
    {"name": "Diabolus Avades Assailant", "boss": true, "category": "Human", "level": 73, "hp": 1800, "mp": 300, "strength": 50, "magic": 50, "endurance": 50, "agility": 50, "luck": 50, "attack": 1, "defense": 500, "evasion": 0, "slash": 0.5, "pierce": 0.5, "strike": 0.5, "fire": 0.5, "ice": 0.5, "elec": 0.5, "wind": 0.5, "light": 0.5, "dark": 0.5, "almighty": 1},
    {"name": "Diabolus Avades Left Hand", "boss": true, "category": "Human", "level": 73, "hp": 5000, "mp": 300, "strength": 50, "magic": 50, "endurance": 50, "agility": 50, "luck": 50, "attack": 1, "defense": 500, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": "Null", "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Diabolus Avades Right Hand", "boss": true, "category": "Human", "level": 73, "hp": 5000, "mp": 300, "strength": 50, "magic": 50, "endurance": 50, "agility": 50, "luck": 50, "attack": 1, "defense": 500, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": "Null", "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Diabolus Avades Shell", "boss": true, "category": "Human", "level": 73, "hp": 2500, "mp": 300, "strength": 50, "magic": 50, "endurance": 50, "agility": 50, "luck": 50, "attack": 1, "defense": 500, "evasion": 0, "slash": 0.5, "pierce": 0.5, "strike": 1.5, "fire": 0.5, "ice": 0.5, "elec": 0.5, "wind": 0.5, "light": 0.5, "dark": 0.5, "almighty": 1},
    {"name": "Diabolus Butera", "boss": true, "category": "Human", "level": 77, "hp": 25000, "mp": 500, "strength": 73, "magic": 73, "endurance": 73, "agility": 73, "luck": 73, "attack": 580, "defense": 580, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Diabolus Gorleo", "boss": true, "category": "Human", "level": 77, "hp": 25000, "mp": 500, "strength": 73, "magic": 73, "endurance": 73, "agility": 73, "luck": 73, "attack": 580, "defense": 580, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Diabolus Gorleo Apple", "boss": true, "category": "Human", "level": 73, "hp": 2500, "mp": 300, "strength": 50, "magic": 50, "endurance": 50, "agility": 50, "luck": 50, "attack": 1, "defense": 450, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Diabolus Gorleo Leg", "boss": true, "category": "Human", "level": 73, "hp": 3500, "mp": 300, "strength": 50, "magic": 50, "endurance": 50, "agility": 50, "luck": 50, "attack": 1, "defense": 500, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Diabolus Gorleo Wing", "boss": true, "category": "Human", "level": 73, "hp": 3500, "mp": 300, "strength": 50, "magic": 50, "endurance": 50, "agility": 50, "luck": 50, "attack": 1, "defense": 500, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": "Null", "wind": 1.5, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Diabolus Jaluzo", "boss": true, "category": "Human", "level": 77, "hp": 25000, "mp": 500, "strength": 73, "magic": 73, "endurance": 73, "agility": 73, "luck": 73, "attack": 580, "defense": 580, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Diabolus Jaluzo Left Eye", "boss": true, "category": "Human", "level": 73, "hp": 4000, "mp": 300, "strength": 50, "magic": 50, "endurance": 50, "agility": 50, "luck": 50, "attack": 1, "defense": 500, "evasion": 0, "slash": 0.5, "pierce": 1.5, "strike": 0.5, "fire": 1, "ice": 1, "elec": "Null", "wind": "Null", "light": 1, "dark": 1, "almighty": 1},
    {"name": "Diabolus Jaluzo Right Eye", "boss": true, "category": "Human", "level": 73, "hp": 4000, "mp": 300, "strength": 50, "magic": 50, "endurance": 50, "agility": 50, "luck": 50, "attack": 1, "defense": 500, "evasion": 0, "slash": 0.5, "pierce": 1.5, "strike": 0.5, "fire": "Null", "ice": "Null", "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Diabolus Margo", "boss": true, "category": "Human", "level": 77, "hp": 25000, "mp": 500, "strength": 73, "magic": 73, "endurance": 73, "agility": 73, "luck": 73, "attack": 580, "defense": 580, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Diabolus Sabara", "boss": true, "category": "Human", "level": 77, "hp": 25000, "mp": 500, "strength": 73, "magic": 73, "endurance": 73, "agility": 73, "luck": 73, "attack": 580, "defense": 580, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1.5, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Diabolus Sabara", "boss": true, "category": "Human", "level": 77, "hp": 20000, "mp": 500, "strength": 65, "magic": 65, "endurance": 65, "agility": 65, "luck": 65, "attack": 480, "defense": 480, "evasion": 0, "slash": 2, "pierce": 2, "strike": 2, "fire": 2, "ice": 2, "elec": 3, "wind": 2, "light": 2, "dark": 2, "almighty": 2},
    {"name": "Diabolus Sabara Leg", "boss": true, "category": "Human", "level": 73, "hp": 3000, "mp": 300, "strength": 50, "magic": 50, "endurance": 50, "agility": 50, "luck": 50, "attack": 1, "defense": 500, "evasion": 0, "slash": 1.5, "pierce": 1, "strike": 1, "fire": 0.5, "ice": 0.5, "elec": 0.5, "wind": 0.5, "light": 0.5, "dark": 0.5, "almighty": 1},
    {"name": "Elegy of the Soul", "boss": true, "category": "Unknown", "level": 75, "hp": 30000, "mp": 500, "strength": 75, "magic": 75, "endurance": 70, "agility": 70, "luck": 70, "attack": 600, "defense": 550, "evasion": 0, "slash": 0.5, "pierce": 0.5, "strike": 0.5, "fire": 0.5, "ice": 0.5, "elec": 0.5, "wind": 0.5, "light": 0.5, "dark": 0.5, "almighty": 0.5},
    {"name": "Faithwight Magileto", "boss": false, "category": "Undead", "level": 50, "hp": 3500, "mp": 400, "strength": 40, "magic": 60, "endurance": 55, "agility": 45, "luck": 40, "attack": 450, "defense": 400, "evasion": 3, "slash": 1, "pierce": 0.5, "strike": 1.5, "fire": 1, "ice": 1, "elec": "Null", "wind": 1, "light": "Repel", "dark": 1, "almighty": 1},
    {"name": "Fatolich", "boss": false, "category": "Undead", "level": 35, "hp": 3500, "mp": 500, "strength": 28, "magic": 40, "endurance": 28, "agility": 26, "luck": 26, "attack": 250, "defense": 250, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1.5, "fire": "Repel", "ice": "Repel", "elec": "Repel", "wind": "Repel", "light": 1.5, "dark": "Repel", "almighty": 1},
    {"name": "Feral Hundo", "boss": false, "category": "Demonic Beast", "level": 1, "hp": 80, "mp": 35, "strength": 2, "magic": 1, "endurance": 2, "agility": 3, "luck": 2, "attack": 20, "defense": 20, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Fire Dragon Mauna", "boss": true, "category": "Dragon", "level": 12, "hp": 3500, "mp": 500, "strength": 12, "magic": 12, "endurance": 11, "agility": 9, "luck": 4, "attack": 70, "defense": 70, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": "Repel", "ice": 2, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Frenzied Corvo", "boss": false, "category": "Bird Monster", "level": 44, "hp": 846, "mp": 275, "strength": 40, "magic": 38, "endurance": 36, "agility": 40, "luck": 34, "attack": 400, "defense": 350, "evasion": 3, "slash": 1, "pierce": 1.5, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": "Null", "almighty": 1},
    {"name": "Gangaflo", "boss": false, "category": "Plant", "level": 23, "hp": 450, "mp": 290, "strength": 21, "magic": 21, "endurance": 19, "agility": 17, "luck": 16, "attack": 150, "defense": 150, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": "Null", "elec": 0.5, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Gangaflo (Coliseium)", "boss": false, "category": "Plant", "level": 35, "hp": 250, "mp": 290, "strength": 22, "magic": 22, "endurance": 20, "agility": 22, "luck": 22, "attack": 95, "defense": 48, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Gelatinos", "boss": false, "category": "Mollusk", "level": 4, "hp": 190, "mp": 130, "strength": 6, "magic": 5, "endurance": 8, "agility": 4, "luck": 5, "attack": 20, "defense": 40, "evasion": 0, "slash": 0.5, "pierce": 0.5, "strike": "Null", "fire": 1.5, "ice": 1.5, "elec": 1.5, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Glodell", "boss": true, "category": "Person", "level": 38, "hp": 2540, "mp": 500, "strength": 26, "magic": 35, "endurance": 28, "agility": 23, "luck": 26, "attack": 290, "defense": 260, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1.5, "dark": 1, "almighty": 1},
    {"name": "Goborn", "boss": false, "category": "Demihuman", "level": 9, "hp": 200, "mp": 80, "strength": 14, "magic": 12, "endurance": 12, "agility": 10, "luck": 11, "attack": 100, "defense": 70, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Goborn (Coliseum)", "boss": false, "category": "Demihuman", "level": 45, "hp": 250, "mp": 80, "strength": 32, "magic": 32, "endurance": 5, "agility": 32, "luck": 32, "attack": 140, "defense": 15, "evasion": 0, "slash": 3, "pierce": 3, "strike": 3, "fire": 3, "ice": 3, "elec": 3, "wind": 3, "light": 3, "dark": 3, "almighty": 3},
    {"name": "Goborn Esto", "boss": false, "category": "Demihuman", "level": 17, "hp": 330, "mp": 100, "strength": 15, "magic": 13, "endurance": 13, "agility": 11, "luck": 12, "attack": 120, "defense": 100, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Goborn Esto (Coliseium)", "boss": false, "category": "Demihuman", "level": 35, "hp": 930, "mp": 100, "strength": 27, "magic": 27, "endurance": 27, "agility": 27, "luck": 21, "attack": 240, "defense": 270, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Goborn King", "boss": false, "category": "Demihuman", "level": 24, "hp": 1500, "mp": 250, "strength": 22, "magic": 18, "endurance": 20, "agility": 18, "luck": 14, "attack": 180, "defense": 160, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Goborn King (Coliseium)", "boss": false, "category": "Demihuman", "level": 38, "hp": 2200, "mp": 250, "strength": 35, "magic": 29, "endurance": 29, "agility": 29, "luck": 24, "attack": 280, "defense": 300, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Goborn Ligo", "boss": false, "category": "Demihuman", "level": 32, "hp": 650, "mp": 184, "strength": 26, "magic": 26, "endurance": 26, "agility": 24, "luck": 20, "attack": 250, "defense": 250, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Gold Elmenta", "boss": false, "category": "Spirit", "level": 38, "hp": 3000, "mp": 100, "strength": 30, "magic": 30, "endurance": 30, "agility": 30, "luck": 30, "attack": 1, "defense": 350, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 0.5, "wind": 2, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Golden Homo Tenta", "boss": false, "category": "Human", "level": 40, "hp": 500, "mp": 388, "strength": 30, "magic": 30, "endurance": 30, "agility": 30, "luck": 30, "attack": 320, "defense": 350, "evasion": 0, "slash": 0.3, "pierce": 0.3, "strike": 0.3, "fire": 0.3, "ice": 0.3, "elec": 0.3, "wind": 0.3, "light": 0.3, "dark": 0.3, "almighty": 1},
    {"name": "Golden Homo Tenta (Coliseum)", "boss": false, "category": "Human", "level": 45, "hp": 800, "mp": 388, "strength": 40, "magic": 40, "endurance": 40, "agility": 40, "luck": 40, "attack": 400, "defense": 400, "evasion": 0, "slash": 0.3, "pierce": 0.3, "strike": 0.3, "fire": 0.3, "ice": 0.3, "elec": 0.3, "wind": 0.3, "light": 0.3, "dark": 0.3, "almighty": 1},
    {"name": "Greatmoth Nocurmos", "boss": false, "category": "Insectoid", "level": 54, "hp": 981, "mp": 349, "strength": 45, "magic": 45, "endurance": 45, "agility": 44, "luck": 44, "attack": 450, "defense": 450, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": "Repel", "ice": 1.5, "elec": 1, "wind": 1.5, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Greatworm Homo Butera", "boss": true, "category": "Human", "level": 25, "hp": 2000, "mp": 500, "strength": 19, "magic": 19, "endurance": 19, "agility": 19, "luck": 19, "attack": 150, "defense": 150, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Greatworm Homo Butera 2", "boss": true, "category": "Human", "level": 60, "hp": 12000, "mp": 500, "strength": 60, "magic": 60, "endurance": 50, "agility": 45, "luck": 45, "attack": 480, "defense": 480, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Green Elmenta", "boss": false, "category": "Spirit", "level": 30, "hp": 1800, "mp": 100, "strength": 25, "magic": 25, "endurance": 25, "agility": 25, "luck": 25, "attack": 1, "defense": 230, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 2, "wind": 0.5, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Grotesque Chimenzahn", "boss": false, "category": "Demonic Beast", "level": 70, "hp": 6000, "mp": 450, "strength": 70, "magic": 60, "endurance": 65, "agility": 60, "luck": 55, "attack": 550, "defense": 500, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": "Drain", "ice": 1.5, "elec": "Null", "wind": 1.5, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Grotesque Guptauros", "boss": false, "category": "Giant", "level": 22, "hp": 2500, "mp": 300, "strength": 25, "magic": 15, "endurance": 25, "agility": 17, "luck": 12, "attack": 190, "defense": 170, "evasion": 0, "slash": 1, "pierce": 1.5, "strike": 1, "fire": 0.5, "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Guard Chief Salva", "boss": true, "category": "Person", "level": 34, "hp": 2600, "mp": 300, "strength": 27, "magic": 40, "endurance": 25, "agility": 27, "luck": 27, "attack": 250, "defense": 250, "evasion": 0, "slash": 1, "pierce": 1.5, "strike": 1, "fire": 1, "ice": 1, "elec": "Null", "wind": 1, "light": 1, "dark": 1, "almighty": 2},
    {"name": "Gupdetron", "boss": false, "category": "Giant", "level": 71, "hp": 6500, "mp": 450, "strength": 75, "magic": 58, "endurance": 65, "agility": 62, "luck": 60, "attack": 550, "defense": 500, "evasion": 0, "slash": 1, "pierce": 1.5, "strike": 1, "fire": "Repel", "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Gupdetron 2", "boss": false, "category": "Giant", "level": 71, "hp": 10000, "mp": 450, "strength": 75, "magic": 58, "endurance": 65, "agility": 62, "luck": 60, "attack": 550, "defense": 500, "evasion": 0, "slash": 1, "pierce": 1.5, "strike": 1, "fire": "Repel", "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Guptauron", "boss": false, "category": "Giant", "level": 55, "hp": 3660, "mp": 350, "strength": 60, "magic": 37, "endurance": 60, "agility": 45, "luck": 35, "attack": 450, "defense": 400, "evasion": 0, "slash": 1, "pierce": 1.5, "strike": 1, "fire": "Null", "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Guptauron (Coliseium)", "boss": false, "category": "Giant", "level": 70, "hp": 7500, "mp": 450, "strength": 70, "magic": 55, "endurance": 60, "agility": 55, "luck": 50, "attack": 550, "defense": 450, "evasion": 0, "slash": 1, "pierce": 1.5, "strike": 1, "fire": "Null", "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Guptauros", "boss": false, "category": "Giant", "level": 35, "hp": 2800, "mp": 300, "strength": 40, "magic": 27, "endurance": 30, "agility": 27, "luck": 19, "attack": 270, "defense": 250, "evasion": 0, "slash": 1, "pierce": 1.5, "strike": 1, "fire": 0.5, "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Hector", "boss": false, "category": "Demonic Beast", "level": 38, "hp": 2120, "mp": 500, "strength": 35, "magic": 20, "endurance": 28, "agility": 27, "luck": 22, "attack": 330, "defense": 260, "evasion": 3, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1.5, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Heismay", "boss": true, "category": "Person", "level": 22, "hp": 2000, "mp": 500, "strength": 25, "magic": 17, "endurance": 15, "agility": 25, "luck": 10, "attack": 190, "defense": 140, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Hellhound Diabundo", "boss": false, "category": "Demonic Beast", "level": 20, "hp": 362, "mp": 146, "strength": 18, "magic": 16, "endurance": 16, "agility": 21, "luck": 16, "attack": 130, "defense": 130, "evasion": 3, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Hellhound Diabundo 2", "boss": false, "category": "Demonic Beast", "level": 20, "hp": 600, "mp": 146, "strength": 18, "magic": 16, "endurance": 16, "agility": 21, "luck": 16, "attack": 130, "defense": 130, "evasion": 3, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Helmsman Cabio", "boss": true, "category": "Person", "level": 34, "hp": 2600, "mp": 300, "strength": 40, "magic": 27, "endurance": 25, "agility": 27, "luck": 27, "attack": 350, "defense": 200, "evasion": 0, "slash": 0.5, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1.5, "wind": 1, "light": 1, "dark": 1, "almighty": 2},
    {"name": "Hexer Goborn", "boss": false, "category": "Demihuman", "level": 16, "hp": 310, "mp": 400, "strength": 10, "magic": 17, "endurance": 11, "agility": 9, "luck": 14, "attack": 120, "defense": 70, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Hexer Goborn Esto", "boss": false, "category": "Demihuman", "level": 18, "hp": 400, "mp": 400, "strength": 12, "magic": 18, "endurance": 13, "agility": 11, "luck": 15, "attack": 140, "defense": 100, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Hexer Goborn Esto (Coliseium)", "boss": false, "category": "Demihuman", "level": 35, "hp": 950, "mp": 400, "strength": 24, "magic": 30, "endurance": 26, "agility": 24, "luck": 28, "attack": 250, "defense": 270, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Hexer Goborn Ligo", "boss": false, "category": "Demihuman", "level": 43, "hp": 900, "mp": 400, "strength": 32, "magic": 38, "endurance": 39, "agility": 31, "luck": 25, "attack": 350, "defense": 350, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Homo Avades", "boss": true, "category": "Human", "level": 20, "hp": 1920, "mp": 500, "strength": 14, "magic": 14, "endurance": 15, "agility": 15, "luck": 15, "attack": 120, "defense": 150, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 0.3, "ice": 0.3, "elec": 0.3, "wind": 0.3, "light": 0.3, "dark": 0.3, "almighty": 1},
    {"name": "Homo Avades Assailant", "boss": true, "category": "Human", "level": 20, "hp": 600, "mp": 300, "strength": 10, "magic": 10, "endurance": 10, "agility": 1, "luck": 10, "attack": 1, "defense": 100, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Homo Avades Left Hand", "boss": true, "category": "Human", "level": 20, "hp": 950, "mp": 300, "strength": 10, "magic": 10, "endurance": 10, "agility": 1, "luck": 10, "attack": 1, "defense": 100, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.8, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Homo Avades Right Hand", "boss": true, "category": "Human", "level": 20, "hp": 950, "mp": 300, "strength": 10, "magic": 10, "endurance": 10, "agility": 1, "luck": 10, "attack": 1, "defense": 100, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.8, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Homo Avades Shell", "boss": true, "category": "Human", "level": 20, "hp": 700, "mp": 300, "strength": 10, "magic": 10, "endurance": 10, "agility": 1, "luck": 10, "attack": 1, "defense": 100, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1.5, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Homo Casco", "boss": false, "category": "Human", "level": 26, "hp": 1000, "mp": 250, "strength": 24, "magic": 24, "endurance": 30, "agility": 20, "luck": 20, "attack": 170, "defense": 190, "evasion": 0, "slash": "Repel", "pierce": "Repel", "strike": 1.5, "fire": 1, "ice": 1, "elec": 1.5, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Homo Fios 1", "boss": false, "category": "Human", "level": 22, "hp": 900, "mp": 200, "strength": 27, "magic": 20, "endurance": 20, "agility": 30, "luck": 30, "attack": 200, "defense": 160, "evasion": 15, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": "Repel", "elec": 0.5, "wind": 0.5, "light": 0.5, "dark": 0.5, "almighty": 1},
    {"name": "Homo Fios 2", "boss": false, "category": "Human", "level": 25, "hp": 777, "mp": 200, "strength": 28, "magic": 23, "endurance": 18, "agility": 30, "luck": 30, "attack": 200, "defense": 150, "evasion": 15, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": "Repel", "elec": 0.5, "wind": 0.5, "light": 0.5, "dark": 0.5, "almighty": 1},
    {"name": "Homo Fizic", "boss": false, "category": "Human", "level": 41, "hp": 1560, "mp": 300, "strength": 40, "magic": 40, "endurance": 35, "agility": 30, "luck": 25, "attack": 350, "defense": 350, "evasion": 0, "slash": 0.4, "pierce": 0.4, "strike": 1.5, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": "Repel", "dark": 1.5, "almighty": 1},
    {"name": "Homo Flaemo", "boss": false, "category": "Human", "level": 45, "hp": 3500, "mp": 300, "strength": 50, "magic": 25, "endurance": 40, "agility": 30, "luck": 29, "attack": 400, "defense": 250, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1.5, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Homo Flaemo 2", "boss": false, "category": "Human", "level": 65, "hp": 7000, "mp": 300, "strength": 60, "magic": 55, "endurance": 50, "agility": 55, "luck": 45, "attack": 550, "defense": 480, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1.5, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Homo Flaemo 3", "boss": false, "category": "Human", "level": 70, "hp": 9000, "mp": 300, "strength": 75, "magic": 70, "endurance": 50, "agility": 60, "luck": 45, "attack": 600, "defense": 500, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1.5, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Homo Frostine", "boss": false, "category": "Human", "level": 43, "hp": 3050, "mp": 300, "strength": 50, "magic": 50, "endurance": 40, "agility": 38, "luck": 28, "attack": 370, "defense": 320, "evasion": 0, "slash": 1, "pierce": 1.5, "strike": 1, "fire": 1, "ice": "Repel", "elec": 1, "wind": 1, "light": 0.4, "dark": 1, "almighty": 1},
    {"name": "Homo Fulquilo", "boss": false, "category": "Human", "level": 10, "hp": 2300, "mp": 250, "strength": 11, "magic": 10, "endurance": 12, "agility": 7, "luck": 7, "attack": 70, "defense": 40, "evasion": 0, "slash": 1, "pierce": 1.5, "strike": 1, "fire": 1, "ice": 1.5, "elec": 1, "wind": 0.5, "light": 0.5, "dark": 1, "almighty": 1},
    {"name": "Homo Fulquilo 2", "boss": false, "category": "Human", "level": 20, "hp": 1550, "mp": 250, "strength": 22, "magic": 22, "endurance": 18, "agility": 15, "luck": 11, "attack": 150, "defense": 150, "evasion": 0, "slash": 1, "pierce": 1.5, "strike": 1, "fire": 1, "ice": 1.5, "elec": 1, "wind": "Repel", "light": 0.4, "dark": 1, "almighty": 1},
    {"name": "Homo Gorleo", "boss": true, "category": "Human", "level": 3, "hp": 350, "mp": 500, "strength": 1, "magic": 1, "endurance": 6, "agility": 1, "luck": 1, "attack": 20, "defense": 30, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Homo Gorleo 2", "boss": true, "category": "Human", "level": 58, "hp": 10000, "mp": 500, "strength": 60, "magic": 70, "endurance": 60, "agility": 45, "luck": 45, "attack": 460, "defense": 450, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Homo Gorleo 2 Apple", "boss": true, "category": "Human", "level": 58, "hp": 1000, "mp": 300, "strength": 40, "magic": 40, "endurance": 40, "agility": 40, "luck": 40, "attack": 1, "defense": 420, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Homo Gorleo 2 Leg", "boss": true, "category": "Human", "level": 58, "hp": 2500, "mp": 300, "strength": 45, "magic": 45, "endurance": 45, "agility": 45, "luck": 45, "attack": 1, "defense": 420, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Homo Gorleo 2 Wing", "boss": true, "category": "Human", "level": 58, "hp": 2500, "mp": 300, "strength": 45, "magic": 45, "endurance": 45, "agility": 45, "luck": 45, "attack": 1, "defense": 420, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": "Null", "wind": 1.5, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Homo Gorleo Apple", "boss": true, "category": "Human", "level": 3, "hp": 200, "mp": 300, "strength": 1, "magic": 1, "endurance": 1, "agility": 1, "luck": 1, "attack": 1, "defense": 20, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Homo Gorleo Leg", "boss": true, "category": "Human", "level": 3, "hp": 200, "mp": 300, "strength": 3, "magic": 3, "endurance": 3, "agility": 1, "luck": 3, "attack": 1, "defense": 30, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1.5, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Homo Gorleo Wing", "boss": true, "category": "Human", "level": 3, "hp": 200, "mp": 300, "strength": 3, "magic": 3, "endurance": 3, "agility": 1, "luck": 3, "attack": 1, "defense": 30, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1.5, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Homo Jaluzo", "boss": true, "category": "Human", "level": 30, "hp": 4880, "mp": 500, "strength": 25, "magic": 25, "endurance": 30, "agility": 25, "luck": 25, "attack": 190, "defense": 190, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Homo Jaluzo Left Eye", "boss": true, "category": "Human", "level": 30, "hp": 1000, "mp": 300, "strength": 20, "magic": 20, "endurance": 25, "agility": 1, "luck": 20, "attack": 1, "defense": 180, "evasion": 0, "slash": 0.5, "pierce": 1.5, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Homo Jaluzo Right Eye", "boss": true, "category": "Human", "level": 30, "hp": 1000, "mp": 300, "strength": 20, "magic": 20, "endurance": 25, "agility": 1, "luck": 20, "attack": 1, "defense": 180, "evasion": 0, "slash": 0.5, "pierce": 1.5, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Homo Luano", "boss": false, "category": "Human", "level": 73, "hp": 10000, "mp": 300, "strength": 69, "magic": 69, "endurance": 72, "agility": 64, "luck": 64, "attack": 530, "defense": 550, "evasion": 3, "slash": 1.5, "pierce": 1, "strike": 1, "fire": "Repel", "ice": 0.5, "elec": 0.5, "wind": 0.5, "light": 0.5, "dark": 0.5, "almighty": 1},
    {"name": "Homo Luano (Coliseium)", "boss": false, "category": "Human", "level": 75, "hp": 15000, "mp": 450, "strength": 70, "magic": 70, "endurance": 70, "agility": 65, "luck": 65, "attack": 550, "defense": 500, "evasion": 5, "slash": 0.5, "pierce": 0.5, "strike": 0.5, "fire": 0.5, "ice": 0.5, "elec": 0.5, "wind": 0.5, "light": 0.5, "dark": 0.5, "almighty": 1},
    {"name": "Homo Luma", "boss": false, "category": "Human", "level": 69, "hp": 7500, "mp": 300, "strength": 65, "magic": 65, "endurance": 65, "agility": 70, "luck": 70, "attack": 550, "defense": 500, "evasion": 20, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": 0.5, "elec": 0.5, "wind": 0.5, "light": "Repel", "dark": 1.5, "almighty": 1},
    {"name": "Homo Malhela", "boss": false, "category": "Human", "level": 64, "hp": 2360, "mp": 400, "strength": 63, "magic": 63, "endurance": 60, "agility": 55, "luck": 55, "attack": 530, "defense": 500, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": "Repel", "light": 1.5, "dark": "Drain", "almighty": 1},
    {"name": "Homo Margo", "boss": true, "category": "Human", "level": 50, "hp": 6000, "mp": 500, "strength": 35, "magic": 35, "endurance": 40, "agility": 35, "luck": 35, "attack": 300, "defense": 250, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Homo Margo 2", "boss": true, "category": "Human", "level": 50, "hp": 6000, "mp": 350, "strength": 45, "magic": 45, "endurance": 65, "agility": 35, "luck": 30, "attack": 1, "defense": 400, "evasion": 0, "slash": 0.5, "pierce": 0.5, "strike": 0.5, "fire": 1, "ice": 1, "elec": 1, "wind": 1.5, "light": 1, "dark": "Null", "almighty": 1},
    {"name": "Homo Oppo", "boss": false, "category": "Human", "level": 3, "hp": 200, "mp": 200, "strength": 4, "magic": 4, "endurance": 4, "agility": 3, "luck": 3, "attack": 30, "defense": 30, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Homo Oppo 2", "boss": false, "category": "Human", "level": 15, "hp": 1000, "mp": 200, "strength": 17, "magic": 17, "endurance": 17, "agility": 14, "luck": 10, "attack": 100, "defense": 120, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1.5, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Homo Orelon", "boss": false, "category": "Human", "level": 45, "hp": 3000, "mp": 300, "strength": 65, "magic": 25, "endurance": 35, "agility": 35, "luck": 29, "attack": 440, "defense": 300, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1.5, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Homo Pento", "boss": false, "category": "Human", "level": 50, "hp": 5000, "mp": 300, "strength": 55, "magic": 55, "endurance": 65, "agility": 48, "luck": 48, "attack": 450, "defense": 400, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": 1, "elec": 1, "wind": "Repel", "light": 1.5, "dark": 1, "almighty": 1},
    {"name": "Homo Sondro", "boss": false, "category": "Human", "level": 69, "hp": 8000, "mp": 300, "strength": 60, "magic": 60, "endurance": 70, "agility": 55, "luck": 50, "attack": 500, "defense": 550, "evasion": 0, "slash": "Repel", "pierce": "Repel", "strike": 1.5, "fire": 1, "ice": 1, "elec": "Repel", "wind": 1, "light": 0.5, "dark": 1, "almighty": 1},
    {"name": "Homo Stormmu", "boss": false, "category": "Human", "level": 41, "hp": 2300, "mp": 250, "strength": 40, "magic": 50, "endurance": 35, "agility": 35, "luck": 30, "attack": 350, "defense": 320, "evasion": 3, "slash": 1.5, "pierce": 1, "strike": 1, "fire": 0.5, "ice": 0.5, "elec": 1.5, "wind": "Repel", "light": 0.5, "dark": 0.5, "almighty": 1},
    {"name": "Homo Tenta", "boss": false, "category": "Human", "level": 2, "hp": 60, "mp": 80, "strength": 3, "magic": 3, "endurance": 2, "agility": 2, "luck": 2, "attack": 20, "defense": 20, "evasion": 0, "slash": 1, "pierce": 1.5, "strike": 1, "fire": 0.5, "ice": 1, "elec": "Null", "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Homo Tenta (Coliseium)", "boss": false, "category": "Human", "level": 45, "hp": 1400, "mp": 88, "strength": 40, "magic": 40, "endurance": 40, "agility": 40, "luck": 40, "attack": 400, "defense": 400, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Hyeno", "boss": false, "category": "Demonic Beast", "level": 8, "hp": 130, "mp": 48, "strength": 7, "magic": 5, "endurance": 5, "agility": 9, "luck": 6, "attack": 40, "defense": 40, "evasion": 3, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Icebeast Chimenzahn", "boss": false, "category": "Demonic Beast", "level": 56, "hp": 5500, "mp": 450, "strength": 50, "magic": 50, "endurance": 65, "agility": 48, "luck": 37, "attack": 500, "defense": 450, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": "Drain", "elec": "Null", "wind": 1.5, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Jin the Charlatan", "boss": true, "category": "Person", "level": 40, "hp": 3500, "mp": 300, "strength": 30, "magic": 30, "endurance": 30, "agility": 30, "luck": 30, "attack": 350, "defense": 320, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Jin the Charlatan 2", "boss": true, "category": "Person", "level": 65, "hp": 12500, "mp": 300, "strength": 50, "magic": 60, "endurance": 45, "agility": 50, "luck": 50, "attack": 400, "defense": 400, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Juvenile Rockworm Valmo", "boss": false, "category": "Mimic", "level": 22, "hp": 350, "mp": 233, "strength": 21, "magic": 16, "endurance": 19, "agility": 17, "luck": 17, "attack": 140, "defense": 140, "evasion": 0, "slash": 0.4, "pierce": 0.4, "strike": 0.4, "fire": 1, "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Kadablich", "boss": false, "category": "Undead", "level": 25, "hp": 2000, "mp": 500, "strength": 19, "magic": 26, "endurance": 19, "agility": 19, "luck": 19, "attack": 190, "defense": 150, "evasion": 0, "slash": "Repel", "pierce": "Repel", "strike": "Repel", "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1.5, "dark": 1, "almighty": 1},
    {"name": "Kadablich 2", "boss": false, "category": "Undead", "level": 31, "hp": 2500, "mp": 500, "strength": 24, "magic": 33, "endurance": 24, "agility": 24, "luck": 24, "attack": 200, "defense": 180, "evasion": 0, "slash": "Repel", "pierce": "Repel", "strike": "Repel", "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1.5, "dark": 1, "almighty": 1},
    {"name": "Kapcerto", "boss": false, "category": "Demihuman", "level": 23, "hp": 500, "mp": 192, "strength": 30, "magic": 16, "endurance": 18, "agility": 20, "luck": 14, "attack": 200, "defense": 160, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 0.5, "ice": "Null", "elec": 1.5, "wind": 1, "light": 1, "dark": 1.5, "almighty": 1},
    {"name": "Kapcerto Sondro", "boss": false, "category": "Demihuman", "level": 36, "hp": 832, "mp": 294, "strength": 35, "magic": 35, "endurance": 28, "agility": 27, "luck": 21, "attack": 320, "defense": 260, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 0.5, "ice": "Null", "elec": "Repel", "wind": 1.5, "light": 1, "dark": 1.5, "almighty": 1},
    {"name": "Kaprasarto", "boss": false, "category": "Demihuman", "level": 65, "hp": 1373, "mp": 371, "strength": 70, "magic": 62, "endurance": 60, "agility": 61, "luck": 50, "attack": 600, "defense": 500, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 0.5, "ice": "Null", "elec": 1.5, "wind": 1, "light": "Repel", "dark": 1.5, "almighty": 1},
    {"name": "Knight-Commander Rhodanthe", "boss": true, "category": "Person", "level": 25, "hp": 1500, "mp": 999, "strength": 35, "magic": 15, "endurance": 25, "agility": 20, "luck": 20, "attack": 250, "defense": 200, "evasion": 0, "slash": 0.5, "pierce": 0.5, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1.5, "dark": 1, "almighty": 1},
    {"name": "Kokamordos", "boss": false, "category": "Bird Monster", "level": 67, "hp": 11500, "mp": 450, "strength": 70, "magic": 63, "endurance": 68, "agility": 65, "luck": 53, "attack": 500, "defense": 500, "evasion": 3, "slash": 1, "pierce": 1.5, "strike": 1, "fire": "Drain", "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Kokamordos 2", "boss": false, "category": "Bird Monster", "level": 71, "hp": 6500, "mp": 450, "strength": 70, "magic": 70, "endurance": 65, "agility": 62, "luck": 58, "attack": 550, "defense": 500, "evasion": 3, "slash": 1, "pierce": 1.5, "strike": 1, "fire": "Drain", "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Kokasadors", "boss": false, "category": "Bird Monster", "level": 42, "hp": 6000, "mp": 350, "strength": 60, "magic": 50, "endurance": 40, "agility": 38, "luck": 25, "attack": 350, "defense": 300, "evasion": 3, "slash": 1, "pierce": 1.5, "strike": 1, "fire": 1.5, "ice": "Repel", "elec": 1, "wind": 1, "light": 1, "dark": "Repel", "almighty": 1},
    {"name": "Kokasadors 2", "boss": false, "category": "Bird Monster", "level": 64, "hp": 6500, "mp": 350, "strength": 72, "magic": 70, "endurance": 62, "agility": 60, "luck": 50, "attack": 500, "defense": 480, "evasion": 3, "slash": 1, "pierce": 1.5, "strike": 1, "fire": 1.5, "ice": "Repel", "elec": 1, "wind": 1, "light": 1, "dark": "Repel", "almighty": 1},
    {"name": "Kokasados", "boss": false, "category": "Bird Monster", "level": 35, "hp": 4200, "mp": 300, "strength": 39, "magic": 39, "endurance": 28, "agility": 28, "luck": 18, "attack": 300, "defense": 250, "evasion": 3, "slash": 1, "pierce": 1.5, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": "Null", "light": 1, "dark": 1, "almighty": 1},
    {"name": "Kokasados (Coliseium)", "boss": false, "category": "Bird Monster", "level": 62, "hp": 1000, "mp": 300, "strength": 45, "magic": 45, "endurance": 20, "agility": 45, "luck": 45, "attack": 175, "defense": 44, "evasion": 3, "slash": 3, "pierce": 3, "strike": 3, "fire": 3, "ice": 3, "elec": 3, "wind": 3, "light": 3, "dark": 3, "almighty": 3},
    {"name": "Kokasados 2", "boss": false, "category": "Bird Monster", "level": 46, "hp": 4000, "mp": 300, "strength": 60, "magic": 58, "endurance": 50, "agility": 40, "luck": 28, "attack": 470, "defense": 380, "evasion": 3, "slash": 1, "pierce": 1.5, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": "Null", "light": 1, "dark": 1, "almighty": 1},
    {"name": "Kvarhas", "boss": false, "category": "Demonic Beast", "level": 47, "hp": 1020, "mp": 230, "strength": 40, "magic": 35, "endurance": 40, "agility": 49, "luck": 37, "attack": 400, "defense": 380, "evasion": 3, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": "Null", "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Labovesp", "boss": false, "category": "Insectoid", "level": 37, "hp": 808, "mp": 244, "strength": 34, "magic": 24, "endurance": 26, "agility": 37, "luck": 23, "attack": 320, "defense": 260, "evasion": 3, "slash": 1, "pierce": 1.5, "strike": 1, "fire": "Drain", "ice": 1, "elec": "Null", "wind": 1.5, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Lava Manjula", "boss": false, "category": "Demonic Beast", "level": 64, "hp": 9500, "mp": 450, "strength": 65, "magic": 60, "endurance": 70, "agility": 48, "luck": 40, "attack": 500, "defense": 500, "evasion": 0, "slash": 0.5, "pierce": 0.5, "strike": 1.5, "fire": "Repel", "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": "Repel", "almighty": 1},
    {"name": "Leginovesp", "boss": false, "category": "Insectoid", "level": 53, "hp": 1032, "mp": 368, "strength": 47, "magic": 36, "endurance": 44, "agility": 56, "luck": 40, "attack": 430, "defense": 460, "evasion": 3, "slash": 1, "pierce": 1.5, "strike": 1, "fire": 1, "ice": 1, "elec": "Repel", "wind": 1.5, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Leogron", "boss": false, "category": "Bird Monster", "level": 55, "hp": 5500, "mp": 350, "strength": 62, "magic": 62, "endurance": 55, "agility": 47, "luck": 37, "attack": 500, "defense": 400, "evasion": 3, "slash": 1, "pierce": 1.5, "strike": 1, "fire": 1.5, "ice": "Drain", "elec": 1, "wind": "Repel", "light": 0.5, "dark": 1, "almighty": 1},
    {"name": "Leogrophon", "boss": false, "category": "Bird Monster", "level": 72, "hp": 7000, "mp": 450, "strength": 72, "magic": 72, "endurance": 65, "agility": 65, "luck": 60, "attack": 550, "defense": 500, "evasion": 3, "slash": 1, "pierce": 1.5, "strike": 1, "fire": 0.5, "ice": 0.5, "elec": 1, "wind": "Repel", "light": 0.5, "dark": 1, "almighty": 1},
    {"name": "Leogrophon 2", "boss": false, "category": "Bird Monster", "level": 72, "hp": 12000, "mp": 450, "strength": 72, "magic": 72, "endurance": 65, "agility": 65, "luck": 60, "attack": 550, "defense": 500, "evasion": 3, "slash": 1, "pierce": 1.5, "strike": 1, "fire": 0.5, "ice": 0.5, "elec": 1, "wind": "Repel", "light": 0.5, "dark": 1, "almighty": 1},
    {"name": "Leogryph", "boss": false, "category": "Bird Monster", "level": 46, "hp": 4500, "mp": 300, "strength": 55, "magic": 55, "endurance": 50, "agility": 42, "luck": 32, "attack": 480, "defense": 400, "evasion": 3, "slash": 1, "pierce": 1.5, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": "Repel", "light": 0.5, "dark": 1, "almighty": 1},
    {"name": "Leogryph (Coliseium)", "boss": false, "category": "Bird Monster", "level": 62, "hp": 1000, "mp": 300, "strength": 45, "magic": 45, "endurance": 20, "agility": 45, "luck": 45, "attack": 175, "defense": 44, "evasion": 3, "slash": 3, "pierce": 3, "strike": 3, "fire": 3, "ice": 3, "elec": 3, "wind": 3, "light": 3, "dark": 3, "almighty": 3},
    {"name": "Lifewrought Gargoz", "boss": false, "category": "Mimic", "level": 14, "hp": 300, "mp": 180, "strength": 13, "magic": 13, "endurance": 14, "agility": 11, "luck": 7, "attack": 90, "defense": 90, "evasion": 0, "slash": "Null", "pierce": "Null", "strike": 1, "fire": 1, "ice": 1, "elec": 0.5, "wind": 1.8, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Lifewrought Gargoz (Coliseum)", "boss": false, "category": "Mimic", "level": 45, "hp": 500, "mp": 180, "strength": 32, "magic": 32, "endurance": 30, "agility": 32, "luck": 32, "attack": 140, "defense": 70, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Light Elmenta", "boss": false, "category": "Spirit", "level": 50, "hp": 3500, "mp": 100, "strength": 40, "magic": 40, "endurance": 40, "agility": 40, "luck": 40, "attack": 1, "defense": 450, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 0.5, "dark": 2, "almighty": 1},
    {"name": "Lina the Machinist", "boss": true, "category": "Person", "level": 32, "hp": 4200, "mp": 300, "strength": 25, "magic": 25, "endurance": 22, "agility": 22, "luck": 22, "attack": 220, "defense": 200, "evasion": 0, "slash": 1, "pierce": 1, "strike": 0.5, "fire": 0.5, "ice": 1.5, "elec": 0.5, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Lina the Machinist (Coliseium)", "boss": true, "category": "Person", "level": 60, "hp": 4500, "mp": 300, "strength": 58, "magic": 58, "endurance": 48, "agility": 52, "luck": 49, "attack": 400, "defense": 350, "evasion": 0, "slash": 1, "pierce": 1, "strike": 0.5, "fire": 0.5, "ice": 1.5, "elec": 0.5, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Louis Guiabern", "boss": true, "category": "Person", "level": 55, "hp": 14000, "mp": 500, "strength": 70, "magic": 70, "endurance": 60, "agility": 50, "luck": 50, "attack": 550, "defense": 400, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Louis Guiabern 2", "boss": true, "category": "Person", "level": 60, "hp": 12000, "mp": 500, "strength": 75, "magic": 75, "endurance": 60, "agility": 50, "luck": 50, "attack": 500, "defense": 450, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Louisian Mage Captain", "boss": false, "category": "Person", "level": 16, "hp": 800, "mp": 400, "strength": 8, "magic": 14, "endurance": 14, "agility": 12, "luck": 10, "attack": 90, "defense": 100, "evasion": 0, "slash": 1, "pierce": 1.5, "strike": 1, "fire": 0.2, "ice": 0.2, "elec": 0.2, "wind": 0.2, "light": 0.5, "dark": 0.5, "almighty": 1},
    {"name": "Louisian Mage Soldier", "boss": false, "category": "Person", "level": 8, "hp": 210, "mp": 400, "strength": 6, "magic": 10, "endurance": 7, "agility": 7, "luck": 5, "attack": 70, "defense": 60, "evasion": 0, "slash": 1, "pierce": 2, "strike": 1, "fire": 0.2, "ice": 0.2, "elec": 0.2, "wind": 0.2, "light": 0.5, "dark": 1, "almighty": 1},
    {"name": "Louisian Spear Soldier 1", "boss": false, "category": "Person", "level": 8, "hp": 200, "mp": 150, "strength": 13, "magic": 6, "endurance": 7, "agility": 6, "luck": 7, "attack": 100, "defense": 60, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 2, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Louisian Spear Soldier 2", "boss": false, "category": "Person", "level": 10, "hp": 500, "mp": 100, "strength": 10, "magic": 10, "endurance": 9, "agility": 7, "luck": 7, "attack": 80, "defense": 70, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Louisian Spear Soldier 3", "boss": false, "category": "Person", "level": 29, "hp": 900, "mp": 200, "strength": 45, "magic": 45, "endurance": 25, "agility": 22, "luck": 22, "attack": 300, "defense": 250, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Louisian Sword Captain", "boss": false, "category": "Person", "level": 16, "hp": 500, "mp": 176, "strength": 14, "magic": 11, "endurance": 16, "agility": 13, "luck": 11, "attack": 110, "defense": 130, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Louisian Sword Soldier", "boss": false, "category": "Person", "level": 4, "hp": 140, "mp": 96, "strength": 4, "magic": 3, "endurance": 5, "agility": 5, "luck": 3, "attack": 50, "defense": 30, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Loveless the Hedonist", "boss": true, "category": "Person", "level": 54, "hp": 9000, "mp": 300, "strength": 75, "magic": 3, "endurance": 60, "agility": 38, "luck": 35, "attack": 550, "defense": 450, "evasion": 0, "slash": 1, "pierce": 0.5, "strike": 1, "fire": 1, "ice": 0.5, "elec": 1, "wind": 1, "light": 1.5, "dark": 1.5, "almighty": 1},
    {"name": "Mad Sanctor Hyperic", "boss": true, "category": "Person", "level": 65, "hp": 12000, "mp": 300, "strength": 40, "magic": 60, "endurance": 65, "agility": 50, "luck": 50, "attack": 430, "defense": 550, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Mad Watchdog Hundo", "boss": false, "category": "Demonic Beast", "level": 9, "hp": 170, "mp": 78, "strength": 7, "magic": 5, "endurance": 5, "agility": 9, "luck": 6, "attack": 40, "defense": 40, "evasion": 3, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Mage Monk", "boss": false, "category": "Person", "level": 17, "hp": 1000, "mp": 400, "strength": 15, "magic": 15, "endurance": 15, "agility": 15, "luck": 15, "attack": 120, "defense": 150, "evasion": 0, "slash": 1, "pierce": 1.5, "strike": 1, "fire": 0.4, "ice": 0.4, "elec": 0.4, "wind": 0.4, "light": 0.4, "dark": 0.4, "almighty": 1},
    {"name": "Mage Monk 2", "boss": false, "category": "Person", "level": 48, "hp": 900, "mp": 400, "strength": 38, "magic": 45, "endurance": 38, "agility": 38, "luck": 38, "attack": 410, "defense": 400, "evasion": 0, "slash": 1, "pierce": 1.5, "strike": 1.5, "fire": 0.5, "ice": 0.5, "elec": 0.5, "wind": 0.5, "light": 0.5, "dark": 1, "almighty": 1},
    {"name": "Mage Soldier", "boss": false, "category": "Person", "level": 4, "hp": 220, "mp": 500, "strength": 3, "magic": 4, "endurance": 3, "agility": 3, "luck": 3, "attack": 50, "defense": 20, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Mageleaf Alento", "boss": false, "category": "Plant", "level": 38, "hp": 2500, "mp": 400, "strength": 42, "magic": 35, "endurance": 35, "agility": 25, "luck": 25, "attack": 350, "defense": 300, "evasion": 0, "slash": 0.5, "pierce": 0.5, "strike": 0.5, "fire": "Null", "ice": 1, "elec": 1, "wind": 1.5, "light": 1.5, "dark": 1, "almighty": 1},
    {"name": "Maintenance Chief Ceiba", "boss": true, "category": "Person", "level": 32, "hp": 3200, "mp": 300, "strength": 25, "magic": 25, "endurance": 40, "agility": 18, "luck": 18, "attack": 220, "defense": 250, "evasion": 0, "slash": 1.5, "pierce": 1.5, "strike": 1.5, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Malvirta Drako Eht", "boss": true, "category": "Dragon", "level": 50, "hp": 7000, "mp": 500, "strength": 60, "magic": 60, "endurance": 55, "agility": 35, "luck": 35, "attack": 400, "defense": 300, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 0.5, "dark": 0.5, "almighty": 1},
    {"name": "Maneater Manjula", "boss": false, "category": "Demonic Beast", "level": 22, "hp": 1700, "mp": 300, "strength": 20, "magic": 20, "endurance": 18, "agility": 19, "luck": 16, "attack": 130, "defense": 150, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1.5, "fire": "Null", "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Manhunter Goborn", "boss": false, "category": "Demihuman", "level": 16, "hp": 335, "mp": 105, "strength": 16, "magic": 12, "endurance": 12, "agility": 11, "luck": 11, "attack": 130, "defense": 80, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Manhunter Goborn Esto", "boss": false, "category": "Demihuman", "level": 18, "hp": 415, "mp": 125, "strength": 17, "magic": 14, "endurance": 14, "agility": 12, "luck": 12, "attack": 150, "defense": 110, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Manhunter Goborn Esto (Coliseium)", "boss": false, "category": "Demihuman", "level": 35, "hp": 985, "mp": 125, "strength": 29, "magic": 27, "endurance": 27, "agility": 25, "luck": 25, "attack": 260, "defense": 280, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Manhunter Goborn Ligo", "boss": false, "category": "Demihuman", "level": 43, "hp": 1000, "mp": 225, "strength": 37, "magic": 35, "endurance": 40, "agility": 32, "luck": 22, "attack": 350, "defense": 350, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Manjula", "boss": false, "category": "Demonic Beast", "level": 35, "hp": 3500, "mp": 300, "strength": 40, "magic": 38, "endurance": 29, "agility": 30, "luck": 23, "attack": 280, "defense": 250, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1.5, "fire": "Null", "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Mask of Ire", "boss": true, "category": "Human", "level": 82, "hp": 28000, "mp": 500, "strength": 77, "magic": 77, "endurance": 70, "agility": 70, "luck": 75, "attack": 620, "defense": 600, "evasion": 0, "slash": 0.1, "pierce": 0.1, "strike": 0.1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 0.5},
    {"name": "Mask of Joy", "boss": true, "category": "Human", "level": 82, "hp": 28000, "mp": 500, "strength": 77, "magic": 77, "endurance": 70, "agility": 70, "luck": 75, "attack": 620, "defense": 600, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 0.1, "ice": 0.1, "elec": 0.1, "wind": 0.1, "light": 0.1, "dark": 0.1, "almighty": 0.5},
    {"name": "Mask of Mirth", "boss": true, "category": "Human", "level": 82, "hp": 28000, "mp": 500, "strength": 77, "magic": 77, "endurance": 75, "agility": 65, "luck": 75, "attack": 620, "defense": 700, "evasion": 0, "slash": 0.5, "pierce": 0.5, "strike": 0.5, "fire": 0.5, "ice": 0.5, "elec": 0.5, "wind": 0.5, "light": 0.5, "dark": 0.5, "almighty": 0.5},
    {"name": "Master Sergeant Glechom", "boss": true, "category": "Person", "level": 32, "hp": 2500, "mp": 300, "strength": 40, "magic": 25, "endurance": 25, "agility": 25, "luck": 25, "attack": 300, "defense": 220, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Melancholia Zorba", "boss": true, "category": "Human", "level": 74, "hp": 20000, "mp": 500, "strength": 70, "magic": 70, "endurance": 70, "agility": 70, "luck": 70, "attack": 550, "defense": 520, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Melancholia Zorba 2", "boss": true, "category": "Human", "level": 74, "hp": 20000, "mp": 500, "strength": 70, "magic": 70, "endurance": 70, "agility": 70, "luck": 70, "attack": 550, "defense": 520, "evasion": 0, "slash": 0.5, "pierce": 0.5, "strike": 0.5, "fire": 0.1, "ice": 0.1, "elec": 0.1, "wind": 0.1, "light": 0.1, "dark": 0.1, "almighty": 0.1},
    {"name": "Mercenary Mage", "boss": false, "category": "Person", "level": 64, "hp": 8000, "mp": 500, "strength": 60, "magic": 68, "endurance": 65, "agility": 60, "luck": 60, "attack": 520, "defense": 500, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": "Null", "elec": 1.5, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Mercenary Pikeman", "boss": false, "category": "Person", "level": 64, "hp": 8000, "mp": 200, "strength": 68, "magic": 60, "endurance": 65, "agility": 60, "luck": 60, "attack": 520, "defense": 500, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": 1, "elec": 0.5, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Milo the Adonis", "boss": true, "category": "Person", "level": 55, "hp": 8000, "mp": 300, "strength": 40, "magic": 55, "endurance": 60, "agility": 40, "luck": 40, "attack": 450, "defense": 400, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": 1.5, "elec": 1.5, "wind": 1.5, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Moldilich", "boss": false, "category": "Undead", "level": 75, "hp": 10000, "mp": 500, "strength": 69, "magic": 69, "endurance": 69, "agility": 69, "luck": 69, "attack": 550, "defense": 550, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1.5, "fire": "Repel", "ice": "Repel", "elec": "Repel", "wind": "Repel", "light": 0.5, "dark": "Repel", "almighty": 1},
    {"name": "Monk Captain Gideaux", "boss": true, "category": "Person", "level": 19, "hp": 1000, "mp": 500, "strength": 16, "magic": 16, "endurance": 16, "agility": 16, "luck": 16, "attack": 150, "defense": 999, "evasion": 0, "slash": "Null", "pierce": "Null", "strike": "Null", "fire": "Null", "ice": "Null", "elec": "Null", "wind": "Null", "light": "Null", "dark": "Null", "almighty": "Null"},
    {"name": "Monk Morneto", "boss": false, "category": "Undead", "level": 11, "hp": 230, "mp": 80, "strength": 9, "magic": 9, "endurance": 13, "agility": 7, "luck": 6, "attack": 50, "defense": 60, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": 1, "elec": 1, "wind": 1, "light": 1.8, "dark": 0.5, "almighty": 1},
    {"name": "Montarian Spear Soldier", "boss": false, "category": "Person", "level": 54, "hp": 5000, "mp": 300, "strength": 50, "magic": 50, "endurance": 50, "agility": 50, "luck": 50, "attack": 450, "defense": 430, "evasion": 0, "slash": 0.5, "pierce": 1, "strike": 1.5, "fire": "Drain", "ice": "Drain", "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "More", "boss": true, "category": "Unknown", "level": 70, "hp": 5000, "mp": 500, "strength": 66, "magic": 66, "endurance": 66, "agility": 66, "luck": 66, "attack": 500, "defense": 500, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Noble Morneto", "boss": false, "category": "Undead", "level": 9, "hp": 230, "mp": 250, "strength": 8, "magic": 8, "endurance": 13, "agility": 6, "luck": 6, "attack": 50, "defense": 60, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": 1, "elec": 1, "wind": 1, "light": 1.8, "dark": 0.5, "almighty": 1},
    {"name": "Nocpur", "boss": false, "category": "Insectoid", "level": 15, "hp": 190, "mp": 154, "strength": 14, "magic": 14, "endurance": 14, "agility": 13, "luck": 13, "attack": 110, "defense": 100, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1.5, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Nocross (Colesium)", "boss": false, "category": "Insectoid", "level": 38, "hp": 1525, "mp": 162, "strength": 30, "magic": 33, "endurance": 28, "agility": 26, "luck": 35, "attack": 300, "defense": 260, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1.5, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Nocross 1", "boss": false, "category": "Insectoid", "level": 3, "hp": 125, "mp": 62, "strength": 4, "magic": 4, "endurance": 4, "agility": 3, "luck": 3, "attack": 30, "defense": 20, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1.5, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Noctiluca Papyrmas", "boss": false, "category": "Insectoid", "level": 48, "hp": 777, "mp": 555, "strength": 24, "magic": 37, "endurance": 38, "agility": 40, "luck": 37, "attack": 360, "defense": 360, "evasion": 3, "slash": 1, "pierce": 1.5, "strike": 1, "fire": "Repel", "ice": "Repel", "elec": "Repel", "wind": 1.5, "light": "Repel", "dark": 1.5, "almighty": 1},
    {"name": "Obsilhas", "boss": false, "category": "Demonic Beast", "level": 64, "hp": 1300, "mp": 330, "strength": 62, "magic": 55, "endurance": 62, "agility": 69, "luck": 54, "attack": 520, "defense": 500, "evasion": 3, "slash": 1, "pierce": 1, "strike": 1, "fire": "Null", "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 0.5, "almighty": 1},
    {"name": "Ochre Homo Tenta", "boss": false, "category": "Human", "level": 21, "hp": 400, "mp": 288, "strength": 17, "magic": 17, "endurance": 17, "agility": 17, "luck": 17, "attack": 150, "defense": 140, "evasion": 0, "slash": 1, "pierce": 1.5, "strike": 0.5, "fire": "Repel", "ice": 1.5, "elec": "Null", "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Ochre Homo Tenta (Coliseum)", "boss": false, "category": "Human", "level": 45, "hp": 1400, "mp": 288, "strength": 40, "magic": 40, "endurance": 40, "agility": 40, "luck": 40, "attack": 400, "defense": 400, "evasion": 0, "slash": 1, "pierce": 1, "strike": 0.5, "fire": "Repel", "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Or-Crown Homo Tenta", "boss": false, "category": "Human", "level": 88, "hp": 6666, "mp": 588, "strength": 88, "magic": 88, "endurance": 88, "agility": 88, "luck": 88, "attack": 500, "defense": 500, "evasion": 0, "slash": "Repel", "pierce": "Repel", "strike": "Repel", "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 0.1},
    {"name": "Ordemos", "boss": false, "category": "Giant", "level": 63, "hp": 8500, "mp": 450, "strength": 70, "magic": 55, "endurance": 65, "agility": 44, "luck": 45, "attack": 500, "defense": 480, "evasion": 0, "slash": 0.5, "pierce": 0.5, "strike": 0.5, "fire": 1, "ice": 1, "elec": "Repel", "wind": 1, "light": 1, "dark": 1.8, "almighty": 1},
    {"name": "Orgas", "boss": false, "category": "Giant", "level": 38, "hp": 6000, "mp": 350, "strength": 48, "magic": 20, "endurance": 40, "agility": 24, "luck": 22, "attack": 340, "defense": 280, "evasion": 0, "slash": 0.5, "pierce": 0.5, "strike": 0.5, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1.8, "almighty": 1},
    {"name": "Orgo", "boss": false, "category": "Giant", "level": 36, "hp": 4500, "mp": 300, "strength": 45, "magic": 18, "endurance": 40, "agility": 24, "luck": 22, "attack": 330, "defense": 270, "evasion": 0, "slash": 0.5, "pierce": 0.5, "strike": 0.5, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1.8, "almighty": 1},
    {"name": "Orgo (Coliseum)", "boss": false, "category": "Giant", "level": 45, "hp": 1200, "mp": 300, "strength": 32, "magic": 32, "endurance": 5, "agility": 32, "luck": 32, "attack": 200, "defense": 15, "evasion": 0, "slash": 3, "pierce": 3, "strike": 3, "fire": 3, "ice": 3, "elec": 3, "wind": 3, "light": 3, "dark": 3, "almighty": 3},
    {"name": "Ostoflo", "boss": false, "category": "Plant", "level": 41, "hp": 988, "mp": 300, "strength": 31, "magic": 34, "endurance": 32, "agility": 31, "luck": 30, "attack": 330, "defense": 300, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": "Null", "elec": 0.5, "wind": 1, "light": 1.5, "dark": "Drain", "almighty": 1},
    {"name": "Papyrga", "boss": false, "category": "Insectoid", "level": 37, "hp": 655, "mp": 444, "strength": 19, "magic": 34, "endurance": 25, "agility": 28, "luck": 25, "attack": 270, "defense": 260, "evasion": 3, "slash": 1, "pierce": 1.5, "strike": 1, "fire": "Repel", "ice": 0.4, "elec": 0.4, "wind": 1.5, "light": "Repel", "dark": 1.5, "almighty": 1},
    {"name": "Papyros", "boss": false, "category": "Insectoid", "level": 20, "hp": 350, "mp": 333, "strength": 15, "magic": 20, "endurance": 15, "agility": 16, "luck": 15, "attack": 150, "defense": 150, "evasion": 3, "slash": 1, "pierce": 1.5, "strike": 1, "fire": 0.4, "ice": 0.4, "elec": 0.4, "wind": 1.5, "light": "Repel", "dark": 1.5, "almighty": 1},
    {"name": "Parasitic Valmo", "boss": false, "category": "Mimic", "level": 22, "hp": 2200, "mp": 250, "strength": 25, "magic": 11, "endurance": 18, "agility": 15, "luck": 15, "attack": 180, "defense": 150, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": "Drain", "elec": 1.5, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Platinum Homo Tenta", "boss": false, "category": "Human", "level": 62, "hp": 1000, "mp": 488, "strength": 55, "magic": 55, "endurance": 55, "agility": 55, "luck": 55, "attack": 480, "defense": 480, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": "Drain", "ice": "Drain", "elec": "Drain", "wind": "Drain", "light": "Drain", "dark": "Drain", "almighty": 1},
    {"name": "Platinum Homo Tenta (Coliseum)", "boss": false, "category": "Human", "level": 45, "hp": 1400, "mp": 488, "strength": 40, "magic": 40, "endurance": 40, "agility": 40, "luck": 40, "attack": 400, "defense": 400, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": "Drain", "ice": "Drain", "elec": "Drain", "wind": "Drain", "light": "Drain", "dark": "Drain", "almighty": 1},
    {"name": "Potolpo", "boss": false, "category": "Mimic", "level": 30, "hp": 580, "mp": 199, "strength": 24, "magic": 24, "endurance": 23, "agility": 22, "luck": 19, "attack": 240, "defense": 220, "evasion": 0, "slash": 1, "pierce": 1, "strike": "Null", "fire": 0.5, "ice": 0.5, "elec": 1.5, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Potolpo Brua", "boss": false, "category": "Mimic", "level": 55, "hp": 888, "mp": 399, "strength": 49, "magic": 49, "endurance": 47, "agility": 46, "luck": 42, "attack": 420, "defense": 420, "evasion": 0, "slash": 1, "pierce": 1, "strike": "Null", "fire": 0.5, "ice": "Repel", "elec": 1.5, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Potolpo Verda", "boss": false, "category": "Mimic", "level": 43, "hp": 780, "mp": 299, "strength": 30, "magic": 30, "endurance": 28, "agility": 27, "luck": 24, "attack": 330, "defense": 300, "evasion": 0, "slash": 1, "pierce": 1, "strike": "Null", "fire": 0.5, "ice": 0.5, "elec": 1.5, "wind": "Drain", "light": 1, "dark": 1, "almighty": 1},
    {"name": "Psyocro", "boss": false, "category": "Giant", "level": 45, "hp": 3500, "mp": 300, "strength": 60, "magic": 35, "endurance": 50, "agility": 33, "luck": 25, "attack": 400, "defense": 350, "evasion": 0, "slash": 1, "pierce": 1.5, "strike": 1, "fire": 1, "ice": 1, "elec": "Drain", "wind": 1.5, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Psyocropos", "boss": false, "category": "Giant", "level": 50, "hp": 3500, "mp": 300, "strength": 60, "magic": 40, "endurance": 55, "agility": 35, "luck": 30, "attack": 420, "defense": 400, "evasion": 0, "slash": 1, "pierce": 1.5, "strike": 1, "fire": 1, "ice": 1, "elec": "Drain", "wind": 1.5, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Psyocropos 2", "boss": false, "category": "Giant", "level": 52, "hp": 4000, "mp": 450, "strength": 60, "magic": 40, "endurance": 55, "agility": 35, "luck": 30, "attack": 400, "defense": 400, "evasion": 0, "slash": 1, "pierce": 1.5, "strike": 1, "fire": 1, "ice": 1, "elec": "Drain", "wind": 1.5, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Pyrite Imitec", "boss": false, "category": "Mimic", "level": 28, "hp": 1800, "mp": 400, "strength": 35, "magic": 15, "endurance": 25, "agility": 20, "luck": 25, "attack": 190, "defense": 170, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1.5, "dark": 0.5, "almighty": 1},
    {"name": "Raging Corvosta", "boss": false, "category": "Bird Monster", "level": 57, "hp": 1092, "mp": 399, "strength": 52, "magic": 50, "endurance": 50, "agility": 55, "luck": 49, "attack": 460, "defense": 450, "evasion": 3, "slash": 1, "pierce": 1.5, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": "Repel", "light": 1, "dark": 1, "almighty": 1},
    {"name": "Raptor Corvo", "boss": false, "category": "Bird Monster", "level": 28, "hp": 579, "mp": 197, "strength": 24, "magic": 23, "endurance": 22, "agility": 26, "luck": 22, "attack": 200, "defense": 200, "evasion": 3, "slash": 1, "pierce": 1.5, "strike": 1, "fire": 1, "ice": 1, "elec": "Null", "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Red Elmenta", "boss": false, "category": "Spirit", "level": 22, "hp": 1400, "mp": 100, "strength": 19, "magic": 19, "endurance": 19, "agility": 19, "luck": 19, "attack": 1, "defense": 150, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 0.5, "ice": 2, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Redscale Apocalypse Dragon", "boss": true, "category": "Dragon", "level": 99, "hp": 60000, "mp": 500, "strength": 99, "magic": 99, "endurance": 99, "agility": 99, "luck": 99, "attack": 800, "defense": 700, "evasion": 0, "slash": 0.5, "pierce": 0.5, "strike": 0.5, "fire": 0.5, "ice": 0.5, "elec": 0.5, "wind": 0.5, "light": 0.5, "dark": 0.5, "almighty": 0.5},
    {"name": "Rella", "boss": true, "category": "Person", "level": 52, "hp": 7000, "mp": 500, "strength": 35, "magic": 40, "endurance": 35, "agility": 35, "luck": 35, "attack": 350, "defense": 350, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": "Null", "dark": 1, "almighty": 1},
    {"name": "Rigopetia", "boss": false, "category": "Mollusk", "level": 59, "hp": 3800, "mp": 340, "strength": 55, "magic": 54, "endurance": 54, "agility": 55, "luck": 53, "attack": 480, "defense": 480, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 0.4, "ice": 1.5, "elec": 1, "wind": "Null", "light": 1, "dark": 1, "almighty": 1},
    {"name": "Roger Supporter", "boss": false, "category": "Person", "level": 31, "hp": 2500, "mp": 200, "strength": 35, "magic": 20, "endurance": 20, "agility": 20, "luck": 20, "attack": 260, "defense": 160, "evasion": 0, "slash": 0.5, "pierce": 0.5, "strike": 0.5, "fire": 1.5, "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Roger the Libertarian", "boss": true, "category": "Person", "level": 32, "hp": 4000, "mp": 300, "strength": 30, "magic": 22, "endurance": 28, "agility": 22, "luck": 24, "attack": 250, "defense": 200, "evasion": 0, "slash": 0.5, "pierce": 0.5, "strike": 0.5, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1.5, "almighty": 1},
    {"name": "Roger's Mage", "boss": false, "category": "Person", "level": 31, "hp": 2500, "mp": 500, "strength": 20, "magic": 28, "endurance": 20, "agility": 20, "luck": 20, "attack": 160, "defense": 160, "evasion": 0, "slash": 1, "pierce": 1.5, "strike": 1, "fire": 0.5, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Rudolf the Roussainte Lion", "boss": true, "category": "Person", "level": 55, "hp": 11000, "mp": 300, "strength": 65, "magic": 55, "endurance": 70, "agility": 37, "luck": 37, "attack": 500, "defense": 500, "evasion": 0, "slash": 0.5, "pierce": 0.5, "strike": 0.5, "fire": 1, "ice": 1, "elec": 1.5, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Rudolf's Blade", "boss": false, "category": "Person", "level": 54, "hp": 6000, "mp": 222, "strength": 50, "magic": 40, "endurance": 50, "agility": 40, "luck": 40, "attack": 400, "defense": 450, "evasion": 0, "slash": 0.5, "pierce": 0.5, "strike": 0.5, "fire": 1, "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Rudolf's Partisan", "boss": false, "category": "Person", "level": 54, "hp": 6000, "mp": 200, "strength": 65, "magic": 40, "endurance": 50, "agility": 40, "luck": 40, "attack": 450, "defense": 450, "evasion": 0, "slash": 0.5, "pierce": 0.5, "strike": 0.5, "fire": 1, "ice": 1, "elec": 1, "wind": 1.5, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Sandworm Valmo", "boss": false, "category": "Mimic", "level": 11, "hp": 832, "mp": 164, "strength": 10, "magic": 10, "endurance": 13, "agility": 5, "luck": 5, "attack": 70, "defense": 80, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": "Null", "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Sea Horror Homo Sabara", "boss": true, "category": "Human", "level": 39, "hp": 8000, "mp": 500, "strength": 35, "magic": 35, "endurance": 35, "agility": 30, "luck": 27, "attack": 290, "defense": 270, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1.5, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Sea Horror Homo Sabara Leg", "boss": true, "category": "Human", "level": 39, "hp": 1500, "mp": 300, "strength": 25, "magic": 25, "endurance": 25, "agility": 1, "luck": 25, "attack": 1, "defense": 200, "evasion": 0, "slash": 1.5, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Sergeant Xanth", "boss": true, "category": "Person", "level": 30, "hp": 4000, "mp": 300, "strength": 25, "magic": 25, "endurance": 25, "agility": 20, "luck": 5, "attack": 250, "defense": 200, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Serial Killer Vinca", "boss": true, "category": "Person", "level": 66, "hp": 15000, "mp": 300, "strength": 75, "magic": 45, "endurance": 50, "agility": 55, "luck": 40, "attack": 580, "defense": 450, "evasion": 0, "slash": 0.5, "pierce": 0.5, "strike": 0.5, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Serpetia", "boss": false, "category": "Mollusk", "level": 6, "hp": 174, "mp": 138, "strength": 7, "magic": 6, "endurance": 5, "agility": 8, "luck": 5, "attack": 30, "defense": 30, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 0.4, "ice": 1.5, "elec": 1, "wind": 0.4, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Serpetia (Coliseium)", "boss": false, "category": "Mollusk", "level": 35, "hp": 125, "mp": 138, "strength": 22, "magic": 22, "endurance": 5, "agility": 22, "luck": 22, "attack": 95, "defense": 6, "evasion": 0, "slash": 3, "pierce": 3, "strike": 3, "fire": 3, "ice": 3, "elec": 3, "wind": 3, "light": 3, "dark": 3, "almighty": 3},
    {"name": "Skull Gelatinos", "boss": false, "category": "Mollusk", "level": 56, "hp": 1000, "mp": 318, "strength": 50, "magic": 50, "endurance": 54, "agility": 49, "luck": 50, "attack": 450, "defense": 480, "evasion": 0, "slash": "Null", "pierce": "Null", "strike": "Null", "fire": "Drain", "ice": 1, "elec": 1.5, "wind": 1, "light": 1.5, "dark": "Repel", "almighty": 1},
    {"name": "Snow Wulhas", "boss": false, "category": "Demonic Beast", "level": 35, "hp": 652, "mp": 138, "strength": 27, "magic": 25, "endurance": 27, "agility": 29, "luck": 25, "attack": 260, "defense": 250, "evasion": 3, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Snowworm Valmo", "boss": false, "category": "Mimic", "level": 49, "hp": 1350, "mp": 399, "strength": 55, "magic": 50, "endurance": 50, "agility": 35, "luck": 35, "attack": 450, "defense": 430, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": "Drain", "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Sogne the Icebound", "boss": true, "category": "Dragon", "level": 52, "hp": 7000, "mp": 500, "strength": 65, "magic": 60, "endurance": 60, "agility": 50, "luck": 50, "attack": 420, "defense": 450, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Soldier Morneto", "boss": false, "category": "Undead", "level": 9, "hp": 230, "mp": 80, "strength": 10, "magic": 1, "endurance": 13, "agility": 6, "luck": 6, "attack": 50, "defense": 60, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": 1, "elec": 1, "wind": 1, "light": 1.8, "dark": 0.5, "almighty": 1},
    {"name": "Spear Brute Malmorta", "boss": false, "category": "Undead", "level": 44, "hp": 890, "mp": 302, "strength": 39, "magic": 35, "endurance": 34, "agility": 35, "luck": 30, "attack": 360, "defense": 330, "evasion": 3, "slash": 0.5, "pierce": 0.5, "strike": 1.5, "fire": 1, "ice": 1, "elec": "Null", "wind": 1, "light": 1.5, "dark": 0.1, "almighty": 1},
    {"name": "Spear Captain Malmorta", "boss": false, "category": "Undead", "level": 12, "hp": 260, "mp": 70, "strength": 11, "magic": 10, "endurance": 13, "agility": 13, "luck": 8, "attack": 70, "defense": 90, "evasion": 3, "slash": 0.5, "pierce": 0.5, "strike": 1.5, "fire": 1, "ice": 1, "elec": "Null", "wind": 1, "light": 1.5, "dark": 0.1, "almighty": 1},
    {"name": "Spear General Malmorta", "boss": false, "category": "Undead", "level": 60, "hp": 1050, "mp": 350, "strength": 54, "magic": 50, "endurance": 52, "agility": 53, "luck": 48, "attack": 480, "defense": 470, "evasion": 3, "slash": 0.5, "pierce": 0.5, "strike": 1.5, "fire": 1, "ice": 1, "elec": "Null", "wind": 1, "light": 1.5, "dark": 0.1, "almighty": 1},
    {"name": "Spear Malmorta", "boss": false, "category": "Undead", "level": 6, "hp": 150, "mp": 50, "strength": 6, "magic": 6, "endurance": 5, "agility": 8, "luck": 4, "attack": 30, "defense": 40, "evasion": 0, "slash": 1, "pierce": 0.5, "strike": 1.5, "fire": 1, "ice": 1, "elec": "Null", "wind": 1, "light": 1.5, "dark": 0.1, "almighty": 1},
    {"name": "Spear Malmorta 2", "boss": false, "category": "Undead", "level": 6, "hp": 150, "mp": 50, "strength": 6, "magic": 6, "endurance": 4, "agility": 7, "luck": 4, "attack": 30, "defense": 40, "evasion": 0, "slash": 1, "pierce": 0.5, "strike": 1.5, "fire": 1, "ice": "Null", "elec": "Null", "wind": 1, "light": 1.5, "dark": 0.1, "almighty": 1},
    {"name": "Spear Noble Malmorta", "boss": false, "category": "Undead", "level": 25, "hp": 442, "mp": 285, "strength": 20, "magic": 18, "endurance": 20, "agility": 21, "luck": 16, "attack": 180, "defense": 150, "evasion": 0, "slash": 0.5, "pierce": 0.5, "strike": 1.5, "fire": 1, "ice": 1, "elec": "Null", "wind": 1, "light": 1, "dark": 1.5, "almighty": 1},
    {"name": "Spear Scourge Malmorta", "boss": false, "category": "Undead", "level": 67, "hp": 1320, "mp": 389, "strength": 67, "magic": 59, "endurance": 62, "agility": 63, "luck": 58, "attack": 520, "defense": 500, "evasion": 3, "slash": 0.5, "pierce": 0.5, "strike": 1.5, "fire": 1, "ice": 1, "elec": "Null", "wind": 1, "light": 1.5, "dark": 0.1, "almighty": 1},
    {"name": "Spear Slave Malmorta", "boss": false, "category": "Undead", "level": 17, "hp": 220, "mp": 162, "strength": 18, "magic": 14, "endurance": 13, "agility": 14, "luck": 9, "attack": 170, "defense": 140, "evasion": 3, "slash": 1, "pierce": 0.5, "strike": 1.5, "fire": 1, "ice": 1, "elec": "Null", "wind": 1, "light": 1.5, "dark": 0.1, "almighty": 1},
    {"name": "Spear Soldier Malmorta", "boss": false, "category": "Undead", "level": 19, "hp": 380, "mp": 90, "strength": 16, "magic": 13, "endurance": 16, "agility": 16, "luck": 11, "attack": 140, "defense": 120, "evasion": 3, "slash": 0.5, "pierce": 0.5, "strike": 1.5, "fire": 1, "ice": 1, "elec": "Null", "wind": 1, "light": 1.5, "dark": 0.1, "almighty": 1},
    {"name": "Spearmonk", "boss": false, "category": "Person", "level": 17, "hp": 1000, "mp": 250, "strength": 15, "magic": 15, "endurance": 15, "agility": 15, "luck": 15, "attack": 130, "defense": 150, "evasion": 0, "slash": 0.4, "pierce": 0.4, "strike": 0.4, "fire": 1, "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Spearmonk 2", "boss": false, "category": "Person", "level": 40, "hp": 800, "mp": 300, "strength": 35, "magic": 22, "endurance": 22, "agility": 25, "luck": 19, "attack": 240, "defense": 240, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Spearmonk 3", "boss": false, "category": "Person", "level": 48, "hp": 900, "mp": 200, "strength": 45, "magic": 38, "endurance": 38, "agility": 38, "luck": 38, "attack": 410, "defense": 400, "evasion": 0, "slash": 0.5, "pierce": 0.5, "strike": 0.5, "fire": 1.5, "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Spekto", "boss": false, "category": "Undead", "level": 17, "hp": 300, "mp": 244, "strength": 3, "magic": 11, "endurance": 9, "agility": 11, "luck": 11, "attack": 70, "defense": 70, "evasion": 0, "slash": "Repel", "pierce": "Repel", "strike": "Repel", "fire": 1.5, "ice": 1, "elec": 1, "wind": 1, "light": 2, "dark": 1, "almighty": 1},
    {"name": "Spekto of Fury", "boss": false, "category": "Undead", "level": 50, "hp": 900, "mp": 444, "strength": 34, "magic": 42, "endurance": 41, "agility": 42, "luck": 42, "attack": 400, "defense": 430, "evasion": 0, "slash": "Repel", "pierce": "Repel", "strike": "Repel", "fire": "Drain", "ice": 2, "elec": 1, "wind": 1, "light": 1.5, "dark": 1, "almighty": 1},
    {"name": "Spekto of Lament", "boss": false, "category": "Undead", "level": 35, "hp": 500, "mp": 344, "strength": 17, "magic": 29, "endurance": 25, "agility": 26, "luck": 26, "attack": 270, "defense": 250, "evasion": 0, "slash": "Repel", "pierce": "Repel", "strike": "Repel", "fire": 2, "ice": "Drain", "elec": 1, "wind": "Drain", "light": 1.5, "dark": 1, "almighty": 1},
    {"name": "Spellwight Magileto", "boss": false, "category": "Undead", "level": 68, "hp": 1250, "mp": 400, "strength": 55, "magic": 69, "endurance": 65, "agility": 60, "luck": 55, "attack": 500, "defense": 500, "evasion": 3, "slash": 1, "pierce": 0.5, "strike": 1.5, "fire": 1, "ice": 1, "elec": "Null", "wind": 1, "light": 1.5, "dark": "Repel", "almighty": 1},
    {"name": "Spellwrought Gargosta", "boss": false, "category": "Mimic", "level": 36, "hp": 780, "mp": 200, "strength": 33, "magic": 30, "endurance": 30, "agility": 27, "luck": 22, "attack": 280, "defense": 280, "evasion": 0, "slash": "Null", "pierce": "Null", "strike": 1, "fire": 1, "ice": 1, "elec": 0.5, "wind": 1.8, "light": 1, "dark": 0.5, "almighty": 1},
    {"name": "State Army Soldier", "boss": false, "category": "Person", "level": 4, "hp": 330, "mp": 100, "strength": 4, "magic": 6, "endurance": 3, "agility": 3, "luck": 3, "attack": 40, "defense": 20, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "State Mage Soldier", "boss": false, "category": "Person", "level": 3, "hp": 132, "mp": 500, "strength": 3, "magic": 5, "endurance": 4, "agility": 4, "luck": 3, "attack": 50, "defense": 30, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "State Spear Soldier", "boss": false, "category": "Person", "level": 2, "hp": 100, "mp": 100, "strength": 4, "magic": 3, "endurance": 3, "agility": 3, "luck": 3, "attack": 50, "defense": 20, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "State Sword Soldier", "boss": false, "category": "Person", "level": 1, "hp": 100, "mp": 100, "strength": 4, "magic": 3, "endurance": 3, "agility": 3, "luck": 3, "attack": 50, "defense": 20, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Summon Knight Skeleto", "boss": false, "category": "Undead", "level": 50, "hp": 2000, "mp": 300, "strength": 45, "magic": 45, "endurance": 46, "agility": 44, "luck": 40, "attack": 450, "defense": 350, "evasion": 3, "slash": 0.5, "pierce": 0.5, "strike": 1.5, "fire": 1, "ice": "Null", "elec": "Null", "wind": 1, "light": 1.5, "dark": 0.1, "almighty": 1},
    {"name": "Sword Brute Malmorta", "boss": false, "category": "Undead", "level": 44, "hp": 910, "mp": 302, "strength": 36, "magic": 34, "endurance": 36, "agility": 34, "luck": 30, "attack": 320, "defense": 340, "evasion": 3, "slash": 0.5, "pierce": 0.5, "strike": 1.5, "fire": 1, "ice": 1, "elec": "Null", "wind": 1, "light": 1.5, "dark": 0.1, "almighty": 1},
    {"name": "Sword Captain Malmorta", "boss": false, "category": "Undead", "level": 12, "hp": 280, "mp": 72, "strength": 10, "magic": 9, "endurance": 15, "agility": 12, "luck": 8, "attack": 50, "defense": 100, "evasion": 3, "slash": 0.5, "pierce": 0.5, "strike": 1.5, "fire": 1, "ice": 1, "elec": "Null", "wind": 1, "light": 1.5, "dark": 0.1, "almighty": 1},
    {"name": "Sword General Malmorta", "boss": false, "category": "Undead", "level": 60, "hp": 1100, "mp": 350, "strength": 51, "magic": 49, "endurance": 54, "agility": 52, "luck": 48, "attack": 460, "defense": 480, "evasion": 3, "slash": 0.5, "pierce": 0.5, "strike": 1.5, "fire": 1, "ice": 1, "elec": "Null", "wind": 1, "light": 1.5, "dark": 0.1, "almighty": 1},
    {"name": "Sword Malmorta", "boss": false, "category": "Undead", "level": 6, "hp": 150, "mp": 50, "strength": 5, "magic": 5, "endurance": 7, "agility": 7, "luck": 4, "attack": 30, "defense": 40, "evasion": 0, "slash": 1, "pierce": 0.5, "strike": 1.5, "fire": 1, "ice": 1, "elec": "Null", "wind": 1, "light": 1.5, "dark": 0.1, "almighty": 1},
    {"name": "Sword Malmorta 2", "boss": false, "category": "Undead", "level": 6, "hp": 150, "mp": 50, "strength": 5, "magic": 5, "endurance": 6, "agility": 6, "luck": 4, "attack": 30, "defense": 40, "evasion": 0, "slash": 1, "pierce": 0.5, "strike": 1.5, "fire": 1, "ice": "Null", "elec": "Null", "wind": 1, "light": 1.5, "dark": 0.1, "almighty": 1},
    {"name": "Sword Noble Malmorta", "boss": false, "category": "Undead", "level": 25, "hp": 465, "mp": 285, "strength": 19, "magic": 17, "endurance": 22, "agility": 20, "luck": 16, "attack": 150, "defense": 160, "evasion": 0, "slash": 0.5, "pierce": 0.5, "strike": 1.5, "fire": 1, "ice": 1, "elec": "Null", "wind": 1, "light": 1, "dark": 1.5, "almighty": 1},
    {"name": "Sword Scourge Malmorta", "boss": false, "category": "Undead", "level": 67, "hp": 1440, "mp": 389, "strength": 64, "magic": 58, "endurance": 64, "agility": 62, "luck": 58, "attack": 500, "defense": 510, "evasion": 3, "slash": 0.5, "pierce": 0.5, "strike": 1.5, "fire": 1, "ice": 1, "elec": "Null", "wind": 1, "light": 1.5, "dark": 0.1, "almighty": 1},
    {"name": "Sword Slave Malmorta", "boss": false, "category": "Undead", "level": 17, "hp": 250, "mp": 170, "strength": 17, "magic": 16, "endurance": 14, "agility": 13, "luck": 9, "attack": 140, "defense": 150, "evasion": 3, "slash": 1, "pierce": 0.5, "strike": 1.5, "fire": 1, "ice": 1, "elec": "Null", "wind": 1, "light": 1.5, "dark": 0.1, "almighty": 1},
    {"name": "Sword Soldier Malmorta", "boss": false, "category": "Undead", "level": 19, "hp": 400, "mp": 92, "strength": 15, "magic": 12, "endurance": 18, "agility": 15, "luck": 11, "attack": 120, "defense": 130, "evasion": 3, "slash": 0.5, "pierce": 0.5, "strike": 1.5, "fire": 1, "ice": 1, "elec": "Null", "wind": 1, "light": 1.5, "dark": 0.1, "almighty": 1},
    {"name": "Terrestrial Shuper", "boss": false, "category": "Mollusk", "level": 33, "hp": 670, "mp": 321, "strength": 27, "magic": 27, "endurance": 25, "agility": 23, "luck": 20, "attack": 250, "defense": 250, "evasion": 0, "slash": 1.5, "pierce": 1, "strike": "Null", "fire": "Drain", "ice": 1, "elec": 1.5, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Treebeast Alento", "boss": false, "category": "Plant", "level": 40, "hp": 4000, "mp": 400, "strength": 40, "magic": 40, "endurance": 40, "agility": 27, "luck": 25, "attack": 300, "defense": 300, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": 0.5, "elec": 0.5, "wind": 0.5, "light": 0.5, "dark": 0.5, "almighty": 1},
    {"name": "Tropic Alento", "boss": false, "category": "Plant", "level": 38, "hp": 2500, "mp": 400, "strength": 35, "magic": 42, "endurance": 35, "agility": 25, "luck": 25, "attack": 330, "defense": 300, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": 0.5, "elec": 0.5, "wind": 0.5, "light": 0.5, "dark": 0.5, "almighty": 1},
    {"name": "Trove Imitec 1", "boss": false, "category": "Mimic", "level": 32, "hp": 2800, "mp": 400, "strength": 38, "magic": 17, "endurance": 27, "agility": 25, "luck": 27, "attack": 230, "defense": 180, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1.5, "dark": 0.5, "almighty": 1},
    {"name": "Trove Imitec 2", "boss": false, "category": "Mimic", "level": 33, "hp": 3000, "mp": 400, "strength": 45, "magic": 20, "endurance": 30, "agility": 25, "luck": 35, "attack": 280, "defense": 250, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1.5, "dark": 0.5, "almighty": 1},
    {"name": "Undead Grius", "boss": true, "category": "Undead", "level": 11, "hp": 1900, "mp": 500, "strength": 11, "magic": 11, "endurance": 13, "agility": 11, "luck": 11, "attack": 100, "defense": 70, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1.5, "dark": 0.5, "almighty": 1},
    {"name": "Vampiric Gelatinos", "boss": false, "category": "Mollusk", "level": 20, "hp": 355, "mp": 256, "strength": 16, "magic": 16, "endurance": 20, "agility": 15, "luck": 16, "attack": 140, "defense": 150, "evasion": 0, "slash": "Null", "pierce": "Null", "strike": "Null", "fire": "Drain", "ice": 1.5, "elec": 1.5, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Vesp (Coliseium)", "boss": false, "category": "Insectoid", "level": 38, "hp": 1578, "mp": 235, "strength": 33, "magic": 22, "endurance": 28, "agility": 34, "luck": 33, "attack": 320, "defense": 270, "evasion": 3, "slash": 1, "pierce": 1.5, "strike": 1, "fire": 1, "ice": 1, "elec": "Null", "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Vesp", "boss": false, "category": "Insectoid", "level": 19, "hp": 398, "mp": 135, "strength": 19, "magic": 9, "endurance": 13, "agility": 20, "luck": 11, "attack": 190, "defense": 120, "evasion": 3, "slash": 1, "pierce": 1.5, "strike": 1, "fire": 1, "ice": 1, "elec": "Null", "wind": 1.5, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Vicious Hundo", "boss": false, "category": "Demonic Beast", "level": 9, "hp": 170, "mp": 78, "strength": 7, "magic": 5, "endurance": 5, "agility": 9, "luck": 6, "attack": 40, "defense": 40, "evasion": 3, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Voidblack Homo Casco", "boss": false, "category": "Human", "level": 74, "hp": 5500, "mp": 350, "strength": 65, "magic": 65, "endurance": 80, "agility": 60, "luck": 55, "attack": 530, "defense": 530, "evasion": 0, "slash": "Repel", "pierce": "Repel", "strike": 1.5, "fire": 1, "ice": 1, "elec": 1.5, "wind": "Repel", "light": 1, "dark": 1, "almighty": 1},
    {"name": "Voidblack Homo Fios", "boss": false, "category": "Human", "level": 74, "hp": 5500, "mp": 350, "strength": 68, "magic": 68, "endurance": 68, "agility": 73, "luck": 73, "attack": 530, "defense": 530, "evasion": 25, "slash": 0.5, "pierce": 1, "strike": 1, "fire": 1.5, "ice": "Repel", "elec": "Repel", "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Voidblack Homo Fulquilo", "boss": false, "category": "Human", "level": 74, "hp": 5500, "mp": 400, "strength": 72, "magic": 72, "endurance": 65, "agility": 63, "luck": 55, "attack": 530, "defense": 530, "evasion": 0, "slash": 1, "pierce": 1.5, "strike": "Repel", "fire": 1, "ice": 0.5, "elec": 1, "wind": 1, "light": "Repel", "dark": 1.5, "almighty": 1},
    {"name": "Voidblack Homo Luano", "boss": false, "category": "Human", "level": 74, "hp": 6500, "mp": 400, "strength": 70, "magic": 70, "endurance": 74, "agility": 64, "luck": 64, "attack": 530, "defense": 550, "evasion": 3, "slash": 1.5, "pierce": 1, "strike": 1, "fire": "Repel", "ice": 0.5, "elec": 0.5, "wind": 0.5, "light": 0.5, "dark": "Repel", "almighty": 1},
    {"name": "Voidblack Homo Oppo", "boss": false, "category": "Human", "level": 74, "hp": 5500, "mp": 350, "strength": 70, "magic": 65, "endurance": 70, "agility": 65, "luck": 60, "attack": 530, "defense": 530, "evasion": 0, "slash": 1, "pierce": "Repel", "strike": 1.5, "fire": 0.5, "ice": 1, "elec": "Repel", "wind": 1.5, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Voidblack Homo Orelon", "boss": false, "category": "Human", "level": 66, "hp": 8000, "mp": 300, "strength": 65, "magic": 60, "endurance": 50, "agility": 55, "luck": 50, "attack": 550, "defense": 480, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": 1, "elec": 1.5, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Voidblack Homo Pento", "boss": false, "category": "Human", "level": 74, "hp": 5500, "mp": 400, "strength": 70, "magic": 70, "endurance": 68, "agility": 63, "luck": 63, "attack": 530, "defense": 530, "evasion": 0, "slash": 1, "pierce": 1, "strike": 0.5, "fire": 1, "ice": 1, "elec": 1, "wind": "Repel", "light": 1.5, "dark": "Repel", "almighty": 1},
    {"name": "War Wulhas", "boss": false, "category": "Demonic Beast", "level": 15, "hp": 289, "mp": 92, "strength": 13, "magic": 7, "endurance": 11, "agility": 15, "luck": 11, "attack": 130, "defense": 100, "evasion": 3, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Watchdog Hundo", "boss": false, "category": "Demonic Beast", "level": 4, "hp": 100, "mp": 35, "strength": 2, "magic": 1, "endurance": 2, "agility": 3, "luck": 2, "attack": 10, "defense": 10, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": 1.5, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Waterworm Valmo", "boss": false, "category": "Mimic", "level": 35, "hp": 1270, "mp": 334, "strength": 37, "magic": 33, "endurance": 33, "agility": 20, "luck": 20, "attack": 300, "defense": 280, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1, "ice": "Drain", "elec": 1.5, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Wild Corvo", "boss": false, "category": "Bird Monster", "level": 9, "hp": 160, "mp": 58, "strength": 7, "magic": 5, "endurance": 6, "agility": 9, "luck": 6, "attack": 40, "defense": 30, "evasion": 3, "slash": 1, "pierce": 1.5, "strike": 1, "fire": 1, "ice": 1, "elec": 1, "wind": 1, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Wintry Alento", "boss": false, "category": "Plant", "level": 50, "hp": 3000, "mp": 400, "strength": 45, "magic": 50, "endurance": 55, "agility": 35, "luck": 35, "attack": 400, "defense": 450, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 1.5, "ice": "Repel", "elec": 0.5, "wind": 0.5, "light": 0.5, "dark": 0.5, "almighty": 1},
    {"name": "Wrathwrought Gargostartz", "boss": false, "category": "Mimic", "level": 63, "hp": 1270, "mp": 305, "strength": 58, "magic": 58, "endurance": 58, "agility": 57, "luck": 52, "attack": 500, "defense": 500, "evasion": 0, "slash": "Null", "pierce": "Null", "strike": 1, "fire": 0.5, "ice": 1, "elec": 0.5, "wind": 1.8, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Ziocropos", "boss": false, "category": "Giant", "level": 58, "hp": 5000, "mp": 450, "strength": 65, "magic": 45, "endurance": 65, "agility": 37, "luck": 32, "attack": 500, "defense": 450, "evasion": 0, "slash": 1, "pierce": 1.5, "strike": 1, "fire": 1, "ice": 1, "elec": "Drain", "wind": 1.5, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Ziocropos 2", "boss": false, "category": "Giant", "level": 70, "hp": 6000, "mp": 450, "strength": 72, "magic": 60, "endurance": 65, "agility": 57, "luck": 52, "attack": 550, "defense": 500, "evasion": 0, "slash": 1, "pierce": 1.5, "strike": 1, "fire": 1, "ice": 1, "elec": "Drain", "wind": 1.5, "light": 1, "dark": 1, "almighty": 1},
    {"name": "Zorba", "boss": true, "category": "Person", "level": 19, "hp": 2500, "mp": 500, "strength": 12, "magic": 20, "endurance": 15, "agility": 15, "luck": 13, "attack": 120, "defense": 150, "evasion": 0, "slash": 1, "pierce": 1, "strike": 1, "fire": 0.5, "ice": 0.5, "elec": 0.5, "wind": 0.5, "light": 1, "dark": 0.5, "almighty": 1},
]

$(document).ready
(
    function()
    {
        // reset options to the default state on page load
        // $("#difficulty").val("hard").trigger('change');

        // $('#player_strength').val(0);
        // $('#player_magic').val(0);
        // $('#player_endurance').val(0);
        // $('#player_agility').val(0);
        // $('#player_luck').val(0);

        // $('#archetype_other').prop("checked", true);

        // $('#player_front_row').prop("checked", true);
        // $("#attack_multiplier").val("1.0").trigger('change');
        // $("#suku_multiplier").val("1.0").trigger('change');
        // $('#player_focus_no').prop("checked", true);
        // $('#player_attacks_normal').prop("checked", true);

        // $("#kinship").val("1.0").trigger('change');
        // $("#ironclad").val("1.0").trigger('change');
        
        // $("#enemy_defense_multiplier").val("1.0").trigger('change');
        // $("#enemy_suku_multiplier").val("1.0").trigger('change');

        // populate drop downs
        for (var i = 1; i < 100; i++)
        {
            $('#level').append("<option>" + i + "</option>");
        }

        weapons.forEach
        (
            function(weapon)
            {
                $('#weapon').append("<option>" + weapon.name + " (" + weapon.attack + ")</option>");
            }
        );

        armor_list.forEach
        (
            function(armor)
            {
                $('#armor').append("<option>" + armor.name + " (" + armor.defense + ")</option>");
            }
        );

        gear_list.forEach
        (
            function(gear)
            {
                $('#gear').append("<option>" + gear.name + " (" + gear.defense + ")</option>");
            }
        );

        accessories.forEach
        (
            function(accessory)
            {
                $('#accessory').append("<option>" + accessory.name + "</option>");
            }
        );

        skills.forEach
        (
            function(skill)
            {
                if (skill.name == "Basic Attack")
                {
                    $('#attack').append("<option>" + skill.name + "</option>");
                }
                else
                {
                    $('#attack').append("<option>" + skill.name + " (" + skill.power + ")</option>");
                }

            }
        );

        enemies.forEach
        (
            function(enemy)
            {
                $('#enemy').append("<option>" + enemy.name + "</option>");
            }
        );



        calculate_damage();

        // update functions

        $('#difficulty').change
        (
            function()
            {
                calculate_damage();
            }
        );

        $('#level').change
        (
            function()
            {
                calculate_damage();
            }
        );

        $('#player_strength').change
        (
            function()
            {
                calculate_damage();
            }
        );

        $('#player_magic').change
        (
            function()
            {
                calculate_damage();
            }
        );

        $('#player_endurance').change
        (
            function()
            {
                calculate_damage();
            }
        );

        $('#player_agility').change
        (
            function()
            {
                calculate_damage();
            }
        );

        $('#player_luck').change
        (
            function()
            {
                calculate_damage();
            }
        );
        
        $("body").on("change", "input[type='radio'][name='archetype_modifier']", function()
        {
            calculate_damage();
        });

        $('#archetype_modifier').change
        (
            function()
            {
                calculate_damage();
            }
        );

        $('#weapon').change
        (
            function()
            {
                calculate_damage();
            }
        );

        $('#armor').change
        (
            function()
            {
                calculate_damage();
            }
        );

        $('#gear').change
        (
            function()
            {
                calculate_damage();
            }
        );

        $('#accessory').change
        (
            function()
            {
                calculate_damage();
            }
        );

        $('#attack').change
        (
            function()
            {
                calculate_damage();
            }
        );

        $("body").on("change", "input[type='radio'][name='player_row']", function()
        {
            calculate_damage();
        });

        $('#attack_multiplier').change
        (
            function()
            {
                calculate_damage();
            }
        );

        $('#suku_multiplier').change
        (
            function()
            {
                calculate_damage();
            }
        );

        $("body").on("change", "input[type='radio'][name='attack_modifier']", function()
        {
            calculate_damage();
        });

        $('#player_focus_multiplier').change
        (
            function()
            {
                calculate_damage();
            }
        );

        $('#player_critical').change
        (
            function()
            {
                calculate_damage();
            }
        );

        $('#kinship').change
        (
            function()
            {
                calculate_damage();
            }
        );

        $('#ironclad').change
        (
            function()
            {
                calculate_damage();
            }
        );

        $('#enemy').change
        (
            function()
            {
                calculate_damage();
            }
        );
        
        $('#enemy_defense_multiplier').change
        (
            function()
            {
                calculate_damage();
            }
        );

        $('#enemy_suku_multiplier').change
        (
            function()
            {
                calculate_damage();
            }
        );

        function get_magic_power()
        {
            var magic = $('#player_magic').val();

            if (magic >= 90)
                return 30;
            
            else if (magic >= 70)
                return 20;

            else if (magic >= 50)
                return 15;

            else if (magic >= 30)
                return 10;

            else if (magic >= 10)
                return 5;

            return 0;
        }
        
        function calculate_damage()
        {
            var enemy = enemies[$("#enemy").prop('selectedIndex')];

            $('#enemy_level').empty();
            $('#enemy_level').append(enemy.level);

            $('#enemy_hp').empty();
            $('#enemy_hp').append(enemy.hp);

            $('#enemy_strength').empty();
            $('#enemy_strength').append(enemy.strength);

            $('#enemy_magic').empty();
            $('#enemy_magic').append(enemy.magic);

            $('#enemy_endurance').empty();
            $('#enemy_endurance').append(enemy.endurance);

            $('#enemy_agility').empty();
            $('#enemy_agility').append(enemy.agility);

            $('#enemy_luck').empty();
            $('#enemy_luck').append(enemy.luck);

            $('#enemy_attack').empty();
            $('#enemy_attack').append(enemy.attack);

            $('#enemy_defense').empty();
            $('#enemy_defense').append(enemy.defense);

            $('#enemy_evasion').empty();
            $('#enemy_evasion').append(enemy.evasion);

            function format_weakness(weakness)
            {
                var text;

                if (weakness == "Null" || weakness == "Repel" || weakness == "Drain")
                {
                    text = weakness;
                }
                else
                {
                    text = Number(weakness).toFixed(1);
                }
            
                return text;
            }

            $('#enemy_slash').empty();
            $('#enemy_slash').append(format_weakness(enemy.slash));

            $('#enemy_pierce').empty();
            $('#enemy_pierce').append(format_weakness(enemy.pierce));

            $('#enemy_strike').empty();
            $('#enemy_strike').append(format_weakness(enemy.strike));

            $('#enemy_fire').empty();
            $('#enemy_fire').append(format_weakness(enemy.fire));

            $('#enemy_ice').empty();
            $('#enemy_ice').append(format_weakness(enemy.ice));

            $('#enemy_elec').empty();
            $('#enemy_elec').append(format_weakness(enemy.elec));

            $('#enemy_wind').empty();
            $('#enemy_wind').append(format_weakness(enemy.wind));

            $('#enemy_light').empty();
            $('#enemy_light').append(format_weakness(enemy.light));

            $('#enemy_dark').empty();
            $('#enemy_dark').append(format_weakness(enemy.dark));

            $('#enemy_almighty').empty();
            $('#enemy_almighty').append(format_weakness(enemy.almighty));

            var kinship = $('#kinship').val();
            var archetype_modifier = $("input[type='radio'][name='archetype_modifier']:checked").val();
            var weapon = weapons[$("#weapon").prop('selectedIndex')];
            var true_weapon_attack = Math.floor(weapon.attack * archetype_modifier * kinship);

            $('#player_weapon_attack').empty();
            $('#player_weapon_attack').append("floor(" + weapon.attack + " x " + archetype_modifier + ") x " + kinship + " = <b>" + true_weapon_attack + "</b>");

            var true_attack;
            var skill = skills[$("#attack").prop('selectedIndex')];
            $('#player_attack').empty();
            
            if (skill.name == "Basic Attack")
            {
                true_attack = true_weapon_attack;
                $('#player_attack').append("<b>" + true_attack + "</b>");
            }
            else
            {
                var magic_power = 0;
                if (skill.stat_scale == "Magic")
                {
                    magic_power = get_magic_power();
                }
                
                true_attack = 0.9 * true_weapon_attack + 1.3 * skill.power + magic_power;
                $('#player_attack').append("(0.9 x " + true_weapon_attack + ") + (1.3 x " + skill.power + ") + " + magic_power + " = <b>" + true_attack + "</b>");
            }

            var armor = armor_list[$("#armor").prop('selectedIndex')];
            var gear = gear_list[$("#gear").prop('selectedIndex')];
            var accessory = accessories[$("#accessory").prop('selectedIndex')];

            var ironclad = $('#ironclad').val();
            var true_armor_defense = (armor.defense + gear.defense) * ironclad;

            $('#player_armor_defense').empty();
            $('#player_armor_defense').append("(" + armor.defense + " + " + gear.defense + ") x " + ironclad + " = <b>" + true_armor_defense + "</b>");

            
            var stat_multiplier;
            var offense_correction;
            var offense;
            var magic = $('#player_magic').val();
            var strength = $('#player_strength').val();

            if (skill.stat_scale == "Strength")
            {
                offense_correction = 1.8;
                offense = strength;

                if (skill.name == "Royal Sword" || skill.name == "Royal Slash" || skill.name == "Heroic Slash")
                {
                    if (magic > strength)
                    {
                        offense = magic;
                    }
                }                
            }
            else if (skill.stat_scale == "Magic")
            {
                offense_correction = 1.7;
                offense = magic;
            }

            var intitial_power = Math.max(true_attack - 0.5 * enemy.defense, 10);
            $('#player_initial_power').empty();
            $('#player_initial_power').append("Math.max(" + true_attack + " - 0.5 x " + enemy.defense + ", 10) = <b>" + intitial_power + "</b>");

            stat_multiplier = (offense_correction * offense - 0.5 * enemy.endurance) * 0.01 + 1;
            $('#player_stat_multiplier').empty();
            $('#player_stat_multiplier').append("((" + offense_correction + " x " + offense + ") - (0.5 x " + enemy.endurance + ")) x 0.01 + 1 = <b>" + stat_multiplier + "</b>");

            var raw_damage = intitial_power * stat_multiplier;
            $('#raw_damage').empty();
            $('#raw_damage').append(intitial_power + " x " + stat_multiplier + " = <b>" + raw_damage + "</b>");

            var weakness_correction;

            var attack_attribute = skill.attribute;
            
            if (attack_attribute == "Basic Attack")
            {
                attack_attribute = weapon.attribute;
            }

            switch (attack_attribute)
            {
                case "Slash":
                {
                    weakness_correction = enemy.slash;
                    break;
                }
                case "Pierce":
                {
                    weakness_correction = enemy.pierce;
                    break;
                }
                case "Strike":
                {
                    weakness_correction = enemy.strike;
                    break;
                }
                case "Fire":
                {
                    weakness_correction = enemy.fire;
                    break;
                }
                case "Ice":
                {
                    weakness_correction = enemy.ice;
                    break;
                }
                case "Elec":
                {
                    weakness_correction = enemy.elec;
                    break;
                }
                case "Wind":
                {
                    weakness_correction = enemy.wind;
                    break;
                }
                case "Light":
                {
                    weakness_correction = enemy.light;
                    break;
                }
                case "Dark":
                {
                    weakness_correction = enemy.dark;
                    break;
                }
                case "Almighty":
                {
                    weakness_correction = enemy.almighty;
                    break;
                }
            }

            if (weakness_correction == "Null" || weakness_correction == "Drain" || weakness_correction == "Repel")
            {
                weakness_correction = 0.0;
            }

            // TODO: add hex bonus

            var attack_modifier = $("input[type='radio'][name='attack_modifier']:checked").val();

            if (attack_modifier == "weak")
            {
                weakness_correction = 1.5;
            }

            // hide critical option if the enemy is weak to this attack
            if (weakness_correction > 1.0)
            {
                $('#row_player_critical').addClass('hidden');
            }
            else
            {
                $('#row_player_critical').removeClass('hidden');
            }

            $('#weakness_correction').empty();
            $('#weakness_correction').append(Number(weakness_correction).toFixed(1));

            var level_correction;
            var level_delta = $('#level').val() - enemy.level;
            var level_scaling = [0.55, 0.6, 0.65, 0.7, 0.75, 0.79, 0.83, 0.87, 0.91, 0.95, 0.97, 0.99, 1.0, 1.0, 1.0, 1.0, 1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45];
            var boss_level_scaling = [1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9];
            
            if (enemy.boss)
            {
                if (level_delta < 1)
                {
                    level_correction = 1.0;
                }
                else if (level_delta > 24)
                {
                    level_correction = 3.0;
                }
                else
                {
                    level_correction = boss_level_scaling[level_delta - 1];
                }
            }
            else
            {
                if (level_delta < -15)
                {
                    level_correction = 0.5;
                }
                else if (level_delta > 9)
                {
                    level_correction = 1.5;
                }
                else
                {
                    level_correction = level_scaling[level_delta + 15];
                }
            }

            $('#level_correction').empty();
            $('#level_correction').append(Number(level_correction).toFixed(2));

            var row_correction = 1;
            var row = $("input[type='radio'][name='player_row']:checked").val();

            if (accessory.name == "Herald's Banner" && row == "front")
            {
                // front row boost
                row_correction *= 1.2;
            }

            if (row == "back" && skill.range_type == "Melee")
            {
                row_correction *= 0.5;
            }

            $('#row_correction').empty();
            $('#row_correction').append(Number(row_correction).toFixed(1));

            var multi_hit_correction = 1.0; // TODO: implement multihit stuff

            var base_damage = Math.floor(Math.floor(raw_damage * weakness_correction * level_correction * row_correction) / multi_hit_correction);

            if (base_damage < 1)
            {
                base_damage = 1;
            }

            $('#base_damage').empty();
            $('#base_damage').append(base_damage);

            var difficulty_multipliers = [2.0, 1.5, 1.0, 0.8, 0.8];
            var difficulty_multiplier = difficulty_multipliers[$("#difficulty").prop('selectedIndex')];

            $('#difficulty_multiplier').empty();
            $('#difficulty_multiplier').append(Number(difficulty_multiplier).toFixed(1));

            var attack_multiplier = $('#attack_multiplier').val();
            var defense_multiplier = $('#enemy_defense_multiplier').val();

            var focus = $('#player_focus_multiplier').is(":checked");
            var focus_multiplier = 1.0;
            if (focus)
            {
                focus_multiplier = 2.25;
            }

            if ($('player_focus_multiplier:checked').val())
            {
                console.log("test");
            }

            var buff_multiplier = attack_multiplier * defense_multiplier * focus_multiplier;

            $('#buff_multiplier').empty();
            $('#buff_multiplier').append(Number(buff_multiplier).toFixed(2));

            // TODO: implement these
            var additive_multiplier = 1.0;

            // boost
            // surge
            // magic boost
            // magic surge
            // front boost
            // back boost
            // Short-Range Boost
            // Long-Range Boost
            // Martial Lore
            // Heat Up
            // magic circle
            // Arcane Unity

            // Equipment with "Increases the cost and strength of money skills."
            if
            (
                (weapon.name == "Investor's Abacus" || weapon.name == "Medici Abacus")
                && (skill.name == "Gold Attack" || skill.name == "Gold Rush" || skill.name == "Fortune Slots" || skill.name == "Golden Soldier")
            )
            {
                additive_multiplier += 1.0;
            }

            // Equipment with "Greatly increases the cost and strength of money skills."
            if
            (
                (weapon.name == "Fortune God's Abacus")
                && (skill.name == "Gold Attack" || skill.name == "Gold Rush" || skill.name == "Fortune Slots" || skill.name == "Golden Soldier")
            )
            {
                additive_multiplier += 2.0;
            }

            // Equipment with "Increases the strength of Synthesis skills that cost 0 MP."
            if
            (
                (weapon.name == "Dragon Kukris" || weapon.name == "Jester's Daggers")
                && (skill.name == "Free Juggling" || skill.name == "Miracle Cirque")
            )
            {
                additive_multiplier += 0.5;
            }

            // Equipment with "Significantly increases the strength of Synthesis skills that cost 0 MP."
            if
            (
                (weapon.name == "Faker King's Daggers")
                && (skill.name == "Free Juggling" || skill.name == "Miracle Cirque")
            )
            {
                additive_multiplier += 1.0;
            }

            // Equipment with "Increases damage when breaking through resistance."


            var multiplicative = 1.0;

            // effective damage
            switch (enemy.category)
            {
                case "Human":
                    if
                    (
                        skill.name == "Royal Sword"
                        || skill.name == "Royal Slash"
                        || skill.name == "Heroic Slash"
                        || weapon.name == "Dissecting Katana"
                        || weapon.name == "Ame-no-Habakiri"
                    )
                    {
                        multiplicative *= 1.5;
                    }
                    break;

                case "Demonic Beast":
                    if
                    (
                        weapon.name == "Beastkiller's Wrath"
                        || weapon.name == "Beast Slayer"
                    )
                    {
                        multiplicative *= 1.5;
                    }
                    break;
                
                case "Undead":
                    if
                    (
                        weapon.name == "Fist of Salvation"
                        || weapon.name == "Divine Fists"
                        || weapon.name == "Mace of Smite"
                        || weapon.name == "Dusk Fly Staff"
                        || weapon.name == "Inquisitor's Crosier"
                    )
                    {
                        multiplicative *= 1.5;
                    }
                    break;

                case "Giant":
                    if
                    (
                        weapon.name == "Bone Pulverisers"
                        || weapon.name == "Guillotine Blade"
                        || weapon.name == "Giant Slayer"
                    )
                    {
                        multiplicative *= 1.5;
                    }
                    break;

                case "Insectoid":
                    if (weapon.name == "Floral Semaphore")
                    {
                        multiplicative *= 1.5;
                    }
                    break;
            
                case "Bird Monster":
                    if (weapon.name == "Grand Eagle Bow")
                    {
                        multiplicative *= 1.5;
                    }
                    break;

                case "Mimic":
                    if
                    (
                        weapon.name == "Amethyst Mace"
                        || weapon.name == "Discerning Abacus"
                    )
                    {
                        multiplicative *= 1.5;
                    }
                    break;

                case "Demihuman":
                    if
                    (
                        weapon.name == "Demon Slayer Pike"
                        || weapon.name == "Slayer's Baselard"
                    )
                    {
                        multiplicative *= 1.5;
                    }
                    break;

                case "Plant":
                    if
                    (
                        weapon.name == "Farmer's Edged Fan"
                        || weapon.name == "Mosscalibur"
                        || weapon.name == "Deciduous Katana"
                        || weapon.name == "Kusanagi"
                    )
                    {
                        multiplicative *= 1.5;
                    }
                    break;

                case "Dragon":
                    if (weapon.name == "Dragon's Fall")
                    {
                        multiplicative *= 1.5;
                    }
                    break;
            }

            // Equipment with "Increases the MP cost and strength of Synthesis."
            if (weapon.name == "Beloved Greatsword" || accessory.name == "Overlord's Sash")
            {
                multiplicative *= 2.0;
            }

            $('#damage_multiplier').empty();
            $('#damage_multiplier').append(Number(additive_multiplier * multiplicative).toFixed(2));

            var crit = $('#player_critical').is(":checked");
            var crit_multiplier = 1.0

            if (weakness_correction <= 1.0 && crit)
            {
                crit_multiplier = 1.5;

                if (accessory.name == "Gamblers' Manual")
                {
                    crit_multiplier = 3.0;
                }
            }

            var average_damage = Math.floor(base_damage * crit_multiplier * difficulty_multiplier * buff_multiplier * additive_multiplier * multiplicative);

            if (average_damage >= 99999)
            {
                $('#damage_result').text(99999);
            }
            else
            {
                var damage_range_low = Math.floor(average_damage * 0.95);

                if (damage_range_low < 1)
                {
                    damage_range_low = 1;
                }

                var damage_range_high = Math.floor(average_damage * 1.05);

                if (damage_range_high < 1)
                {
                    damage_range_high = 1;
                }

                if (damage_range_low == damage_range_high)
                {
                    $('#damage_result').text(damage_range_low);
                }
                else
                {
                    $('#damage_result').text(damage_range_low + " to " + damage_range_high);
                }
            }

            // accuracy
            var agility = $('#player_agility').val();
            var base_accuracy = Math.floor((1 + agility / 400 - enemy.agility / 800) * (skill.accuracy - enemy.evasion));

            var player_suku = $('#suku_multiplier').val();
            var enemy_suku = $('#enemy_suku_multiplier').val();
            var sukukaja_multiplier = player_suku * enemy_suku;

            var final_accuracy = Math.floor(base_accuracy * sukukaja_multiplier);

            if (final_accuracy > 99)
            {
                final_accuracy = 99;
            }
            if (final_accuracy < 1)
            {
                final_accuracy = 1;
            }

            if (skill.hit == 100)
            {
                final_accuracy = 100;
            }

            $('#accuracy_result').text("hitrate: " + Number(final_accuracy).toFixed(2) + "%");
        }
    }
);
