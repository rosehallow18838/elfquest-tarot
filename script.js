const cards = [
  {
    "name": "The Fool - Pike",
    "image": "images/1.The_Fool.png",
    "blurb": "The Fool represents freedom, beginnings. ",
    "upright": "Cheerful Pike, memory-keeper of the Wolfriders, holds a love for freedom, dreamberries, and the easy side of life. Upright, he calls to mind new beginnings, the innocence of listening to stories for the first time. His spontaneous nature reminds you to let joy guide you through life\u2019s adventures.",
    "reversed": "Pike, full of spirit and life, occasionally puts himself and others at risk through reckless action. Are you leaping into things unprepared for the consequences? Keep caution in mind, though be wary of holding back when action is required.\n"
  },
  {
    "name": "The Magician - Rayek",
    "image": "images/2.The_Magician.png",
    "blurb": "The Magician is creative and crafty. \n",
    "upright": "Rayek, revered hunter of the Sun Village, caretaker of Winnowill\u2019s soul, is the epitome of power and resourcefulness. His journey is often difficult and filled with strife, but he perseveres regardless. He represents holding all the cards in your hand - now may be a good time to work on your goals.",
    "reversed": "On the other hand, Rayek\u2019s downfall lies with his pride. Consider his greed for Leetah\u2019s love, his anger toward the Wolfriders\u2019 usurping his jealously guarded status as caretaker of the Sun villagers. You may be overthinking whether to take action. Reversed, Rayek the Magician signals that you should be aware of the reasons behind the choices and goals you might be making. Consider whether your actions will lead to the best outcome or if your decisions are rooted in selfishness."
  },
  {
    "name": "The High Priestess - Savah",
    "image": "images/3.The_High_Priestess.png",
    "blurb": "The High Priestess represents the divine feminine. ",
    "upright": "Savah, Mother of Memory, came from the Green Growing Place and crossed the desert to find Sorrow\u2019s End as a young child. Her intuition has always served her well, and this card suggests that yours is trustworthy as well. Surprises may lie in your future.",
    "reversed": "However, Savah\u2019s journey was not always easy. She became stuck out of her body when Winnowill took her spirit captive. When reversed, Savah the High Priestess represents being unable to connect with one\u2019s intuition. You should consider doing some soul-searching of your own. Remember, plans rarely bear fruit without putting in the work."
  },
  {
    "name": "The Empress - Leetah",
    "image": "images/4.The_Empress.png",
    "blurb": "The Empress represents femininity, abundance. ",
    "upright": "In the sun village, Leetah\u2019s life was one of peace and luxury. Take this chance to reflect on the abundance surrounding you.",
    "reversed": "Leetah\u2019s life was upended when Cutter came into it. She had to confront her fears and face personal growth. You may be going through a rough patch. Whether your relationships are going awry or you\u2019re facing difficulties in everyday life, recognize that self-love and self-care are important. Focus on yourself for a while."
  },
  {
    "name": "The Emperor - Lord Voll",
    "image": "images/5.The_Emperor.png",
    "blurb": "The Emperor represents an authoritative father figure. \n",
    "upright": "Upright, Lord Voll represents the power you hold, reflected in his kind rule over the gliders of Blue Mountain. Use it responsibly.",
    "reversed": "However, Lord Voll misuses his authority at times, such as when he coerces the Wolfriders to follow him in his journey to the Palace of the High Ones. Check your relationship with power and control. Are you overextending your reach? Or, as Lord Voll allowed Winnowill\u2019s reign of terror to go unchecked, are you not using your authority where you should?"
  },
  {
    "name": "The Hierophant - Ekuar",
    "image": "images/6.The_Hierophant.png",
    "blurb": "The Hierophant represents conformity. ",
    "upright": "Ekuar, too, once learned the basics. This card encourages you to look for guidance from a tried and true source. Following convention doesn\u2019t have to be boring.",
    "reversed": "Ekuar holds much wisdom in his surprisingly spry frame. He needs no external validation to recognize the right path in front of him. Going against expectations and the will of the masses, he remains steadfast in his support of his mentee-son, Rayek. Know that you are the master of your fate, and that challenging the status quo isn\u2019t a bad thing."
  },
  {
    "name": "The Lovers - Dewshine and Scouter",
    "image": "images/7.The_Lovers.png",
    "blurb": "The Lovers represent relationships and forging your own path. ",
    "upright": "Dewshine and Scouter have loved each other for many years, and this card reflects that pure love. Dewshine, in particular, is described as the most free-spirited of the Woldriders. This card calls you to stay true to yourself as you determine your path in life, which might not be the path you imagined. Build your belief system with your moral compass.",
    "reversed": "These lovers haven\u2019t always had a harmonious relationship. When Dewshine recognized Tyldak, she eventually decided to go through with the recognition - a decision that was not made lightly or without protest. Remember to stay true to your values and to base your decisions on what YOU think is best, not what is easiest."
  },
  {
    "name": "The Chariot - The Wolfpack",
    "image": "images/8.The_Chariot.png",
    "blurb": "The Chariot represents action.",
    "upright": "The Wolfpack is rarely passive. This card suggests you follow in their pawprints, taking focused action to take down your prey. Stick to your course, and remember The Way.",
    "reversed": "The Wolfpack knows when to change course and pursue a different quarry. Are your ideas not panning out as planned? Reflect on the situation and consider reorienting yourself."
  },
  {
    "name": "Strength - Strongbow",
    "image": "images/9.Strength.png",
    "blurb": "Strength calls on inner fortitude. ",
    "upright": "Strongbow is known for his mental willpower, his sending prowess second to none. Your inner strength will serve you well; face your fears and challenges with dignity, but remember to tame the fires of your ambition with the cool logic of your mind.",
    "reversed": "Remember to draw on that strength of yours. Just as Strongbow lost his way when he felled an elf in defense of his family but later healed and regained his footing in the world, you, as well, may be unaware of the strength you really have. "
  },
  {
    "name": "The Hermit - Dre-Ahn",
    "image": "images/10.The_Hermit.png",
    "blurb": "The Hermit represents inner guidance. ",
    "upright": "Dre-Ahn knows that all he needs of the world can be found within himself. Trust that your intuition will guide you in the right direction.",
    "reversed": "Dre-Ahn never speaks, but hums. Sometimes, this lack of direct communication frustrates those around him. Are you too absorbed in your inner workings to be mindful of those who matter to you? Or, on the flip side, are you not channeling enough of Dre-Ahn\u2019s introspective soul? Take a close look at how your relationship with isolation is."
  },
  {
    "name": "The Wheel of Fortune - The Scroll of Colors",
    "image": "images/11.The_Wheel_Of_Fortune.png",
    "blurb": "The Wheel of Fortune represents luck and destiny. ",
    "upright": "The Scroll of Colors shows many potential futures, and similarly, this card could reflect several things depending on your situation. If you\u2019ve been experiencing great fortune recently, your luck may soon return to its normal level. On the other hand, if your luck has been down, good fortune may shine upon you soon. The Wheel of Fortune is cyclic, just as the future represented in the Scroll of Colors is cyclic. Be optimistic and trust the Universe to have your best interests in mind.\n",
    "reversed": "The Scroll of Colors doesn\u2019t always show a bright future. Reversed, the Wheel of Fortune implores you to take action against your bad turn of luck; act on improving your circumstances. The Universe may have your best interests in mind, but that doesn\u2019t mean they will come to fruition. Change is inevitable. Relax, and let the tides flow as you do all that you can in your situation."
  },
  {
    "name": "Justice - Timmain",
    "image": "images/12.Justice.png",
    "blurb": "Justice, as the title suggests, represents justice, fairness, truth. ",
    "upright": "Timmain is a beacon of fairness, serving to protect her descendants and Elfkind with fierce loyalty. She is unbiased in her doling out justice. If you\u2019ve been acting toward the greater good for yourself and others, don\u2019t worry. If you\u2019ve been like Winnowill in your actions, beware the just and fair consequences of your actions.",
    "reversed": "Unfairness, lack of accountability, dishonesty. Timmain left Cutter and Skywise in the dark about her real identity, her spirit split between wolf and elf. Be aware that your actions may come to light, and others will pass judgement on them. It is up to you to decide whether you will own up to them, or hide them. Don\u2019t be too hard on yourself, though. Everyone makes mistakes, so be compassionate to yourself, as Timmain would want you to."
  },
  {
    "name": "The Hanged Man - Zhantee",
    "image": "images/13.The_Hanged_Man.png",
    "blurb": "The Hanged Man represents pauses or delays, new perspectives, and self-sacrifice. ",
    "upright": "Sometimes, a pause is necessary before moving forward. Zhantee, gentle Sun Villager who joined the Wolfriders, knows this. He was stranded with the Wolfriders after Rayek stole the Palace of the High Ones, and waited through centuries with them - the pause of a lifetime. Pay attention to your intuition. If you sense a \u201cpause\u201d in the future (illness, obstacles, breakdowns, for example), listen to your gut! You don\u2019t always need to rush ahead to reach the goalpost. Instead, take the opportunity to look at things from a fresh perspective.",
    "reversed": "If the Hanged man shows up reversed, it may be a sign that you are resisting a much-needed break. Another possible meaning is that you\u2019ve been waiting long enough, and moving forward is a good idea, now that you\u2019ve had some time to mull over a new perspective. Zhantee waited his whole life to know the joy of recognizing Leetah, which was a dream fulfilled when Cutter shared the experience with him through sending. This brings us to another possible meaning of the Hanged Man: take a leap, trust your instincts, and make a decision instead of waiting to feel 100% certain."
  },
  {
    "name": "Death - Tyldak",
    "image": "images/14.Death.png",
    "blurb": "Death represents transformations and new beginnings. ",
    "upright": "As a harbinger of new beginnings, Death upright signals the end of some major aspect or phase of your life. Tyldak\u2019s life changed dramatically when Winnowill fulfilled his dream of flying on his own wings, a theme which is echoed heavily in this card of transformation. Allowing old habits to shed in favor of fresh, new possibilities might seem scary, but try not to fight the current of life. As Tyldak soars on his new wings, you, too, may fly higher than before.",
    "reversed": "When the Woldriders arrived at Blue Mountain and Tyldak recognized Dewshine, he heavily opposed the recognition as well as the changes that he knew would ensue. He was willing to stagnate, which is what Death reversed warns against. Release that which no longer serves you, and embrace the changes that life is throwing at you. "
  },
  {
    "name": "Temperance - Rain the Healer",
    "image": "images/15.Temperance.png",
    "blurb": "Temperance represents balance and healing. ",
    "upright": "Rain the Healer was known for his calming, kind demeanor. This card encourages you to channel your inner Rain and remain steady and calm, even when life may be hectic around you. Be open-minded with all perspectives, and be peaceful in your dealings with other people. Harmony and cooperation are the keys within this card.",
    "reversed": "Temperance reversed may indicate that healing is needed, in the form of self-reflection, reduction of excess, or regaining your footing. Listen to your gut. You know what you need right now."
  },
  {
    "name": "The Devil - Khavi",
    "image": "images/16.The_Devil.png",
    "blurb": "The Devil represents our darker urges. ",
    "upright": "Tricky, clever Khavi represents the darker side of one\u2019s soul. It wasn\u2019t always that she looked ahead for guidance, more often satisfying her immediate needs than planning for an uncertain future. You may think you have no control over your base urges, but you hold more power than you think. This is the time to bring negative influences into the light and deal with them properly. Upright, The Devil also represents sexuality, something Khavi was not shy about expressing. Make sure to keep a handle on the situations you get into, and don\u2019t be afraid to put you and your needs above the pleasure of the moment.",
    "reversed": "Khavi knows when to let go, of both people and bad habits. It\u2019s time to release that which is harmful to your best self. Channel Khavi as you defeat your foes, the fears that bind you to these negative aspects of your life."
  },
  {
    "name": "The Tower - Two-Spear",
    "image": "images/17.The_Tower.png",
    "blurb": "The Tower represents change. ",
    "upright": "Two-Spear nearly threw the whole of the Wolfriders into unprecedented chaos with his plan to invade the human encampment and destroy its inhabitants. The Tower indicates major change to come, likely leaving a trail of chaos in its wake. Don\u2019t be afraid, this card doesn\u2019t mean that the upcoming change will be negative. It may also be a deep personal change, such as a spiritual awakening. Either way, strength, resilience, and wisdom are in your future.",
    "reversed": "When reversed, this card indicates the same level of intense change, coming from within rather than from outside influence. Alternatively, you may be resisting change that needs to occur. Two-Spear was resistant to any perspective that wasn\u2019t his own destructive voice. Be aware of your surroundings and be open to positive growth and transformation."
  },
  {
    "name": "The Star - Sunstream",
    "image": "images/18.The_Star.png",
    "blurb": "The Star represents a reprieve. ",
    "upright": "Sunstream, known as Suntop in his youth, grew into an incredibly resilient, kind, and powerful adult. Similarly, this card suggests that you have grown as a result of the challenges you\u2019ve faced. You are in a period of personal growth - take advantage of it.",
    "reversed": "Sunstream\u2019s path was not always easy. As a youth, he was often overwhelmed by the sheer strength of his psychic powers. You may feel similarly overwhelmed, but this card suggests that your struggles may be blessings in disguise. Redirect your focus to find the things going right, rather than the things going wrong. Trust in yourself, as well as the Universe. Perhaps now is the time for some self-care."
  },
  {
    "name": "The Moon - Two Moons",
    "image": "images/19.The_Moon.png",
    "blurb": "The Moon represents fears, illusions. ",
    "upright": "Before the High Ones arrived on the planet Abode, before humans wandered the plains, Silverseed the Moon watched over the planet while Lifegiver the Day Star slept. The two were lonely, and afraid of being alone, until they found each other. Likewise, this card represents the fears we project on our present and future, based on painful past experiences.",
    "reversed": "When Silverseed and Lifegiver Recognized, their fears of loneliness were assuaged. Similarly, you may have been dealing with your anxieties and fears. If not, take this as a sign that you need to do so. Remember that the moons always return from darkness."
  },
  {
    "name": "The Sun - Ember",
    "image": "images/20.The_Sun.png",
    "blurb": "The Sun represents optimism, success, and warmth. ",
    "upright": "Ember brings courage and success to her tribe through her strength and growing wisdom. The Sun indicates that you as well are radiating positive energy. If you\u2019ve been going thorugh a rough patch, as Ember did when she first began leading her new tribe, take this card as a sign that things will be improving soon. Tap into your energy and let it shine on those around you as well - good things are coming your way.",
    "reversed": "Sometimes, the sun burns. Hot-tempered Ember lets her emotions get the best of her at times. Remember to nurture growth around you, rather than burn bridges. The Sun Reversed may also indicate that you\u2019re having a tough time seeing the brighter side of life. That doesn\u2019t mean it\u2019s not there, just that you might be needing to work a little harder to get that optimism back into your life. Allow your inner child to let loose - a break might be just what you need right now."
  },
  {
    "name": "Judgment - Skywise",
    "image": "images/21.Judgment.png",
    "blurb": "Judgment represents, as one might assume, judgment of the self, as well as spirituality and one\u2019s inner calling. ",
    "upright": "Like Skywise\u2019s decision to give up his Wolfblood, a life-changing choice may be coming your way. Unlike the cool logic ushered by the Justice card, Judgment implores you to consider the situation with intuition as well as intellect. Skywise\u2019s path led him to the stars and beyond - listen within, find your calling, and step into a new version of yourself.",
    "reversed": "The call of the stars haunted Skywise his whole life before he was able to answer. Similarly, you may be receiving a call to a higher purpose or transformation and postponing your response due to deep-set fears. Release your fears of the unknown and embrace that which will serve you."
  },
  {
    "name": "The World - Cutter Kinseeker",
    "image": "images/22.The_World.png",
    "blurb": "The World represents cyclic completion. ",
    "upright": "Kinseeker, Blood of Ten Chiefs, Chief of Changes. Known by many titles, Cutter and his life story embody achievement and success. Such things may have recently come to fruition in your own life, or may be shortly on their way. Take this opportunity to reflect on your journey. Give thanks to that which made your successes possible, and honor the lessons you\u2019ve learned along the way. ",
    "reversed": "As Cutter sought closure with Rayek, you, too, may be seeking personal closure. Or, you may be close to completing a goal and for some reason, just can\u2019t find the motivation for the final push of effort it will take to get there. Remember not to take shortcuts, and don\u2019t be frustrated if it takes longer than expected to reach your destination. Your success will be ever sweeter for the time you invest. "
  },
  {
    "name": "Ace of Cups - Ahdri",
    "image": "images/23.Ace_Cups.png",
    "blurb": "",
    "upright": "Often, this card represents a new relationship, such as the one between Ahdri and Two-Edge. See this as a sign to be compassionate in your gifts, both with others and yourself.",
    "reversed": "While upright, this card signifies love for all. In this reversed position, it signifies love for oneself. Can you spread that love outward?"
  },
  {
    "name": "Two of Cups - Adar and Nonna",
    "image": "images/24.Two_Cups.png",
    "blurb": "",
    "upright": "The Two of Cups calls into mind attraction and connection. Pay attention to not only romantic connections in your life, but platonic and metaphorical ones as well. The relationship between Nonna and her symbol-making is just as important as the one between Nonna and Adar themselves. Now is not the time to self-isolate.",
    "reversed": "Remember to love yourself as well, and to not be exclusionary with your connections. Are you paying too much attention to some people, and not enough to others? Consider the feelings of those around you, and where you want to direct your energy. "
  },
  {
    "name": "Three of Cups - Scouter, Dewshine, and Tyleet",
    "image": "images/25.Three_Cups.png",
    "blurb": "",
    "upright": "This card heralds community and camaraderie. These three love and support one another through thick and thin, and joy is apparent in their relationship. Look to the community around you for support.",
    "reversed": "Even the most outgoing of elves needs some alone time. If you\u2019ve been indulging in isolation, now may be the time to return to your people. Or, if you feel on the brink of burning out, maybe you should take some time to yourself to recover."
  },
  {
    "name": "Four of Cups - Aurek Egg",
    "image": "images/26.Four_Cups.png",
    "blurb": "",
    "upright": "Aurek, known in Blue Mountain as simply \u201cEgg\u201d, was so absorbed in his duty of tending the Great Egg that he forewent sleep, food, and bodily function. The Four of Cups similarly suggests that you may be too deep in your own world to clearly see what is going on around you.",
    "reversed": "Sometimes, that isolation is a good thing. Take advantage of peaceful moments to be introspective and to study your current situations."
  },
  {
    "name": "Five of Cups - Lehrigen",
    "image": "images/27.Five_Cups.png",
    "blurb": "",
    "upright": "The Five of Cups is a card of loss. Lehrigen faces loss when he realizes that elves are not the devils he\u2019s made them out to be, and he suffers great emotional turmoil as a result. However, this card does not have to be a harbinger of tragedy. Losses open doors for new beginnings. Mourn your losses, but do not forget to treasure that which you still have, and that which you see in your future.",
    "reversed": "The past cannot be undone. The countless elves felled by Lehrigen are dead, and cannot return to life. Acknowledge the pain in your past, but do not linger there. The only way out is forward."
  },
  {
    "name": "Six of Cups - Freetouch",
    "image": "images/28.Six_Cups.png",
    "blurb": "",
    "upright": "Freetouch, called Chitter in her youth for her constant energy, calls to mind the innocence and sweet memories of youth. Connect with your inner child, whether that means revisiting childhood friends, allowing yourself the freedom to exist without being aware of others\u2019 gazes, or diving into your creative side. \n",
    "reversed": "You may be very out of touch with your inner child, being closed off to the wonder and joy that children are born with, or you may be experiencing the extreme opposite of dwelling in the past and becoming stuck there. Let yourself find a healthy median between learning from the past and looking forward to the future."
  },
  {
    "name": "Seven of Cups - Krill",
    "image": "images/29.Seven_Cups.png",
    "blurb": "",
    "upright": "This card appears when many options are open, and you might be having a tough time deciding between them. Pragmatic hunter Krill of the Wavedancers encourages you to look past dreamy possibilities and consider ones more rooted in reality.",
    "reversed": "Similar to the upright meaning of the Seven of Cups, the reversed position speaks to choices and decisions. You might be feeling overwhelmed, but if you trust in your instincts and take a deep breath, you won\u2019t be crushed by the waves."
  },
  {
    "name": "Eight of Cups - Surge",
    "image": "images/30.Eight_Cups.png",
    "blurb": "",
    "upright": "Surge, longtime chief of the Wavedancers, embodies the Eight of Cups with his tragic parting from the World of Two Moons. He attempted to avoid healing from the death of his lifemate, overcompensating with paranoia about being discovered by others. Are you also detached from what is best for you? You may need to walk away from what you\u2019ve known in order to embrace something new.",
    "reversed": "What matters most to you? Surge eventually realized that he needed to set his people free, saving Cutter and Reef in the process of sacrificing himself. This card isn\u2019t saying that you need to take Surge\u2019s tragic path, but it does implore you to look at your circumstances, and decide whether its time to let go or try again. Either way, listen to your heart - it\u2019s going to serve you well."
  },
  {
    "name": "Nine of Cups - Kimo",
    "image": "images/31.Nine_Cups.png",
    "blurb": "",
    "upright": "An abundance of joy and good times lies in your future. Recall the golden years Kimo spent by Shuna\u2019s side as a companion to her mission of peace. Indulge in the blessings of the moment, but remember that this fulfilment is temporary, as all things are. Cherish the present so you will appreciate it in the future. ",
    "reversed": "You may feel as though you have everything, but take a moment to look deeper. Consider what you wish for, and make sure it aligns with what\u2019s best for you. Kimo was able to keep his family and home safe with his sacrifice, and thus his wish for safety was fulfilled. Search within yourself for happiness and success."
  },
  {
    "name": "Ten of Cups - Mender",
    "image": "images/32.Ten_Cups.png",
    "blurb": "",
    "upright": "Mender finds camaraderie wherever he goes, whether that\u2019s having a good time with the trolls or howling with the wolves. Likewise, this card indicates happy, healthy relationships. Take this moment to enjoy the bliss surrounding you.",
    "reversed": "When reversed, this card echoes Mender\u2019s wishes for a meaningful relationship. With Ember, he had unrealistic expectations of what he could have had with her. However, with Dart, common ground was found. Look inside yourself and ask whether your current relationships are aligned with your desires."
  },
  {
    "name": "Page of Cups - Korafay",
    "image": "images/33.Page_Cups.png",
    "blurb": "",
    "upright": "Lovely Korafay, embodiment of Wavedancer, Sun Villager, and Wolfrider alike, represents open and curious minds. Simply by being herself, she encourages freedom and fearlessness in the Wavedancers. Explore your creative and emotional sides as you trust your intuition.",
    "reversed": "Take inspiration from Korafay and don\u2019t be afraid to share your creative endeavors. Is fear blocking you from exploring new pathways and ideas? "
  },
  {
    "name": "Knight of Cups - Reef",
    "image": "images/34.Knight_Cups.png",
    "blurb": "",
    "upright": "Like soft-tempered Reef, the Page of Cups is a romantic. His understanding and compassionate nature stems from the realization that his shape, born from Winnowill\u2019s attack, did not make him broken, but simply incomplete. This card indicates motivation through action. Bring harmony into your life through your actions, and lead from your heart.",
    "reversed": "The reversed Knight of Cups indicates perhaps a tad too much romanticism on your part. Make sure to actually act on the things you want to come to fruition, not just daydream about them. It may also represent being ruled by one's emotions, such as Reef when he was of unsound mind. Some introspection may be required to discover what this Knight is calling for."
  },
  {
    "name": "Queen of Cups - Brill",
    "image": "images/35.Queen_Cups.png",
    "blurb": "",
    "upright": "Nurturing and caring above all, gentle Brill embodies the positive emotional aspect of the Cups suit with the introspection of the Queen. This card indicates that you are skilled in matters of the heart, leading with your trustworthy intuition.",
    "reversed": "Brill knows how to focus on healing herself, as this card asks you to do. Are you too wrapped up in someone else\u2019s Recognition, or perhaps repressing your true emotions? Take some time to work on understanding yourself."
  },
  {
    "name": "King of Cups - Snakeskin",
    "image": "images/36.King_Cups.png",
    "blurb": "",
    "upright": "Snakeskin, reluctant chief of the Wavedancers after the disappearance of his father, Surge, represents balance between emotions and logic. The King of Cups insists on emotional maturity in conflict, as how Snakeskin tried to logic with his father during their confrontation over the future of the Wavedancers. Be firm on boundaries that protect yourself, and rely on the equilibrium of your heart and your head.",
    "reversed": "You may be avoiding confronting your own feelings, as Snakeskin avoided confronting Surge until it became inevitable. Pay attention to your emotions; are you lacking compassion toward yourself and others? You may be brooding, as Snakeskin is prone to doing, or more likely to be facing emotional instability than usual. Be kind to yourself and those around you. "
  },
  {
    "name": "Ace of Pentacles - Flam",
    "image": "images/37.Ace_Pentacles.png",
    "blurb": "",
    "upright": "As all trolls do, Flam craves treasures of gems and precious metals. This Ace of Pentacles fittingly represents new financial or material gains - though whether these riches manifest is up to you. This wealth may appear in the metaphorical sense as well, through love, joy, or fulfilment. See this card as a sign to take action to secure your successes.",
    "reversed": "Are you feeling hesitant about moving forward with something that seems promising? Maybe your inventions and traps aren\u2019t working the way you want them to. Take a moment to consider all the possible outcomes before moving onward."
  },
  {
    "name": "Two of Pentacles - Old Maggoty",
    "image": "images/38.Two_Pentacles.png",
    "blurb": "",
    "upright": "Old Maggoty may seem like she has a one-track mind, but her inner depths reveal multiple priorities, which suits the Two of Pentacles very fittingly. She complains about her grandson-in-law, Picknose, her granddaughter, Oddbit, works as a healer, brews dreamberry wine, acts as a liaison between the Wolfriders and the trolls, and meddles with various potions and powders. One has to wonder if she gets overworked, as this card would suggest. If you\u2019re feeling overworked, try to focus back in on what actually matters to you. Manage your time and priorities carefully. ",
    "reversed": "Are you overinvesting in some areas of your life while avoiding others? If so, you may want to reconsider your strategy for managing your energy. You may be overcommitted, or struggling to stay on top of things. Something will give eventually, so take this chance to ease your burdens before moving forward."
  },
  {
    "name": "Three of Pentacles - Venka",
    "image": "images/39.Three_Pentacles.png",
    "blurb": "",
    "upright": "Cool, level-headed Venka knows the importance of collaboration. She is the best of and more than both her mother Khavi and her father Rayek, being resilient, competent, and wise. This card calls upon the wisdom of relying on others and of of thinking ahead. Know that you are making progress, but don\u2019t forget to create and stick to a plan.",
    "reversed": "Venka also knows how to go it alone, and the Three of Pentacles suggests that doing just that may be the best course of action at the moment. Or perhaps you need to channel some of Venka\u2019s respect for others and recognize the efforts of those who are working with you. In either case, be sure to keep some structure in your life as you continue with your goals."
  },
  {
    "name": "Four of Pentacles - Bread Elf",
    "image": "images/40.Four_Pentacles.png",
    "blurb": "",
    "upright": "Not much is known about the fan-favorite Bread Elf. We do know, however, that she values her freshly-baked bread. The Four of Pentacles asks you to consider your relationship with material goods. You could be rich in baked goods by paying attention to your long-term goals, or you may be stockpiling them until they grow mold, rendering them useless. Remember to enjoy the fruits of your labor and to consider your future. Balance is key.",
    "reversed": "Perhaps you\u2019ve been realizing that your possessions don\u2019t need to be your number one priority, and you\u2019re in the process of decluttering your life in favor of love and camaraderie. Or, perhaps you haven\u2019t reached that point yet, and this is the wake-up call. Remember to consider the greater good when your goals keep creeping ever higher."
  },
  {
    "name": "Five of Pentacles - Greymung",
    "image": "images/41.Five_Pentacles.png",
    "blurb": "",
    "upright": "Greymung faces a bitter end in Elfquest. Likewise, this card suggests hard times have hit. You may be facing poverty, both financial and spiritual. Remember that help, like Greymung\u2019s subjects, is always close at hand. It\u2019s all a matter of whether you pay attention and reach out - or not.",
    "reversed": "The end of your troubles is in sight! That is, if you are willing to embrace the care of those around you. This is not the time to isolate yourself like Greymung. Instead, trust in your community and good things will come your way."
  },
  {
    "name": "Six of Pentacles - Redlance",
    "image": "images/42.Six_Pentacles.png",
    "blurb": "",
    "upright": "Redlance is wealthy indeed - a plant-shaper fulfilled by his duty to his tribe, the love of his lifemate Nightfall, and the wonderful gift of his child Tyleet. Even if not in traditional terms, this card suggests abundance. The intangible gifts you provide to those around you are just as important, if not more so, than physical ones. Be generous with your blessings. ",
    "reversed": "Remember to bestow some of those generous gifts to yourself, as well as others. It does not do well to give freely to those who will not appreciate your kindness. Ensure that your relationships are as balanced as the one between Redlance and Nightfall. "
  },
  {
    "name": "Seven of Pentacles - Clearbrook",
    "image": "images/43.Seven_Pentacles.png",
    "blurb": "",
    "upright": "As an elder of the Wolfriders, Clearbrook is known for her level-headed wisdom. She can draw on the lessons of the past to advise secure courses of action for the future. Take this card as an opportunity to look at the bigger picture. Are you focusing on the things that will bring your goals to completion? If you\u2019ve been laboring on a project, expect it to come to fruition soon, but don\u2019t be frustrated if you can\u2019t yet see the finish line. Focus on what you can be grateful for in the present.",
    "reversed": "Where are you investing your energy? As when Clearbrook went on her revenge rampage against the trolls who felled One-Eye, you might be putting effort toward an end that will not serve you. Don\u2019t feel inclined to tough it out just because you\u2019ve spent your time or resources already. "
  },
  {
    "name": "Eight of Pentacles - Treestump",
    "image": "images/44.Eight_Pentacles.png",
    "blurb": "",
    "upright": "When this card appears in a reading, it indicates mastery of a skill. You\u2019ve been working hard to improve at what you do. Maybe you\u2019ve had a recent change in perspective, such as when Treestump accepted teachings from Two-Edge in order to perfect his craftsmanship in working with brightmetal. The Eight of Pentacles encourages you to continue on the path you\u2019ve begun, or if you haven\u2019t found the right place to start, it asks you to search for what will help you reach your personal goals. Through dedication and patience, you will meet success.",
    "reversed": "Even fatherly Treestump feels unfulfilled at times. Reversed, this card asks for hard work, effort, and reliability. As Treestump found blacksmithing, you also should search for something to be passionate about."
  },
  {
    "name": "Nine of Pentacles - Nightfall",
    "image": "images/45.Nine_Pentacles.png",
    "blurb": "",
    "upright": "Of all the Wolfriders, you\u2019ll find none as loyal and trustworthy as Nighfall. She is grateful for the abundance present within her life - from her lifemate Redlance, her dear friends in Cutter and Leetah, and her beloved daughter Tyleet. Take this card as a sign that things are well, and it won\u2019t hurt to indulge in the riches surrounding you.",
    "reversed": "We all have moments of doubt, even strong Nightfall. The Nine of Pentacles asks you to look within yourself to find your self-worth. Know your value, and don\u2019t allow others to tell you that you\u2019re \u201cless than\u201d or \u201cnot enough.\u201d Be in the moment. Embrace those around you, and take steps to lessen your dependence on material goods."
  },
  {
    "name": "Ten of Pentacles - Rainsong",
    "image": "images/46.Ten_Pentacles.png",
    "blurb": "",
    "upright": "Gentle Rainsong devoted her whole self to her family and was happy for it. Similarly, this card suggests you want for little in your own Sun Village right now. Everything you need to be fulfilled is within your grasp. \n",
    "reversed": "Not everyone will want to follow Rainsong\u2019s idyllic path. Consider how you feel about yourself and your surroundings. Your sense of self-worth may be tied to your belongings. Do you truly need all the abundance you surround yourself with? Or would you be happier living a less extravagant life?"
  },
  {
    "name": "Page of Pentacles - Trinket",
    "image": "images/47.Page_Pentacles.png",
    "blurb": "",
    "upright": "Trinket, who started life off as a rather spoilt little troll, blossomed into an adventurous and curious young adult. She has her own mind about things, and will do most anything to get what she wants. That being said, all plans have to begin somewhere. Embrace your talents and start something new.",
    "reversed": "Sometimes, we just need to take a leap of faith. Allow your inner Trinket to shine and jump into the adventure you\u2019ve been craving. However, make sure you have a plan in place, and that you\u2019re actually taking steps toward your goals."
  },
  {
    "name": "Knight of Pentacles - Two-Edge",
    "image": "images/48.Knight_Pentacles.png",
    "blurb": "",
    "upright": "Metalworking takes hard and methodical work to master, and one can only assume that Two-Edge put in the effort after witnessing his brilliant inventions and traps. This card represents the long road to mastery of a subject, and the monotony that may be a painful necessity in the journey. Know that even if this period of your life isn\u2019t the most exciting, you\u2019re making progress.",
    "reversed": "In this position, the Knight of Pentacles warns of becoming so absorbed in the methodical grind that you forget to move toward your original goal. Two-Edge\u2019s centuries-long plan of orchestrating a war between the trolls and the elves falls through and he is unable to choose a side of his heritage to embrace. Similarly, you may be working yourself into a pointless cycle of confusion. This card also warns against stagnation due to refusal to make necessary changes."
  },
  {
    "name": "Queen of Pentacles - Moonshade",
    "image": "images/49.Queen_Pentacles.png",
    "blurb": "",
    "upright": "Nurturing Moonshade has worked hard for her happiness. She calls for compassion when dealing with others, and for a practical nature when considering new ideas. The Queen of Pentacles is the perfect balance between responsibility and indulgence. Take your cues from her, and maintain the supportive environment that surrounds you.",
    "reversed": "As with Moonshade\u2019s pivotal decision to choose the Palace as her primary residence, you may also be nurturing yourself in ways that put your own needs first. This is not a bad thing. Trust in those around you to be able to survive without you while you focus on your own necessities. Reversed, this card may indicate that the balance of your relationships and your work are out of sorts. You may need to look within to discover the right ratio."
  },
  {
    "name": "King of Pentacles - Picknose",
    "image": "images/50.King_Pentacles.png",
    "blurb": "",
    "upright": "Though often self-interested, Picknose isn\u2019t the worst troll leader in the history of Abode. Arguably much less cruel and uncaring than Guttlecraw or Greymung, the King of Pentacles upright signals fulfillment in the material sense. Stick to your tried and true methods, they\u2019ve served you well.",
    "reversed": "In this position, the King of Pentacles warns of Picknose\u2019s less endearing traits: his tendency to gamble away his good fortunes, his lack of self-discipline, and his trollish tendency to value wealth above all else. Consider where generosity and open-mindedness will get you."
  },
  {
    "name": "Ace of Swords - Timmain - wolf",
    "image": "images/51.Ace_Swords.png",
    "blurb": "",
    "upright": "Timmain, ancestral mother of the Wolfriders, reflects clarity and new ideas. Managing to break through the oppressive aether of Abode, Timmain was able to access her magic and shape-change into and become one with many creatures. She relearned the lessons of mortality, as you may be learning new lessons yourself. Draw upon her motivation and prepare yourself for the journey ahead while wielding your power responsibly.",
    "reversed": "If you\u2019re on the brink of breaking through with a new idea, this card may indicate that you want to nurture it a little longer before presenting it to the world. Recall how Timmain reared Timmorn Yellow-Eyes before she left him with her former tribesfolk. This card may also suggest that you need to focus in on your goals. Make sure you have all the information you need before setting your course."
  },
  {
    "name": "Two of Swords - Shenshen",
    "image": "images/52.Two_Swords.png",
    "blurb": "",
    "upright": "Are you facing a challenging choice? You may be on the brink of a decision that has equally enticing options. Follow your head and your heart to determine the best course of action. As Shenshen weighed her decision to shape-change into a human carefully, you as well should consider the pros and cons of each side to this situation. Don\u2019t put this off too long: avoidance only leads to further stagnation.",
    "reversed": "Shenshen was decisive when she made her choice. In this position, the Two of Swords suggests that you may not be as sure of your path, or that you feel you have come to a stalemate in a relationship. Listen to all perspectives and be open to compromise. Your intuition will serve you well now."
  },
  {
    "name": "Three of Swords - Firstcomer Troll",
    "image": "images/53.Three_Swords.png",
    "blurb": "",
    "upright": "The Firstcomer Troll, along with his companions, were not treated as equals by the High Ones, but rather as servants. The Three of Swords represents the deep hurt that was fostered by the dynamic between the two species. Express the emotions you\u2019re feeling, but don\u2019t forget to move on. Focus on your recovery, not your pain. This too shall pass.",
    "reversed": "It\u2019s possible that you are the one limiting yourself and causing pain. The way you treat yourself reflects the way you view yourself. Recognize your self-worth, as the Firstcomer Troll did. You may be already on the path to recovery, or finding it difficult to move on from a wound. Search within yourself for what you need in your healing journey."
  },
  {
    "name": "Four of Swords - Satreeka",
    "image": "images/54.Four_Swords.png",
    "blurb": "",
    "upright": "Sweet Satreeka has grown up without the worries and burdens of mortality or war. The Four of Swords reflects this period of rest, suggesting that you are in need of a break. Allow your strength to replenish along with your mental fortitude. Reflect on your journey thus far, and make adjustments as needed. You may do well to embrace some solitude right now.",
    "reversed": "Even more so than the upright position of this card, the Four of Swords reversed implores you to recharge your energy. Are you pushing yourself to do everything at once? You will begin to stagnate if you don\u2019t allow yourself to rejuvenate. Or, if you\u2019ve been passive in your approach to life, the consequences may be catching up with you. As you take time to recover, contemplate what can be done to create progress on your personal journey."
  },
  {
    "name": "Five of Swords - Grohmul Djun",
    "image": "images/55.Five_Swords.png",
    "blurb": "",
    "upright": "You may feel the victor right now, but look at the carnage around you. Like Grohmul Djun, you may have lost the trust or respect of those around you. Pick your battles wisely, and compromise when you need to. Don\u2019t be afraid to make amends and apologize if you were in the wrong.",
    "reversed": "The end of the war is in sight, but you have to work hard to get there. How can you create a solution that ends in peace, not hate? Be wary of following in the Djun\u2019s deadly footsteps."
  },
  {
    "name": "Six of Swords - Dart",
    "image": "images/56.Six_Swords.png",
    "blurb": "",
    "upright": "You may be in the middle of a great transitory period, which could be bringing great stress to your life. As when Dart lost his lovemate and soul brother Shushen, you may feel trapped in negative memories. The Six of Swords asks you to release the baggage holding you back. It does not serve you.",
    "reversed": "When Dart was able to release the painful memories of Shushen\u2019s death, it allowed him to pursue life again. You may be resisting the changes coming, but they will come regardless. Allow yourself to heal, and focus on the bright sides of the changes you\u2019re undergoing."
  },
  {
    "name": "Seven of Swords - Winnowill",
    "image": "images/57.Seven_Swords.png",
    "blurb": "",
    "upright": "The Seven of Swords, known commonly as \u201cThe Thief,\u201d is often a sign that someone is up to no good. Winnowill is frequently found at the center of nefarious doings on the World of Two Moons, from attempting to eradicate the Wolfriders, to working with Grohmul Djun to collect the shattered remains of the Palace of the High Ones. This card indicates that you or someone around you is being tricky. Be conscious of both your actions and that of those around you. Putting yourself first is sometimes necessary.",
    "reversed": "Winnowill, at heart, was a healer. Are you deceiving yourself into becoming something that isn\u2019t truly you? If you are harboring a secret that will hurt yourself or others, you may want to consider confiding in someone you trust. Learn to forgive yourself."
  },
  {
    "name": "Eight of Swords - Oddbit",
    "image": "images/58.Eight_Swords.png",
    "blurb": "",
    "upright": "Oddbit is the definition of self\u2013imposed restrictions and self-limiting beliefs. Raised by Old Maggoty, she had ample opportunity to learn how to become a fiercely independent troll. Instead, she chose and continues to choose to be content as a vain, fickle, and coy troll maiden. It is only she who holds her potential back. You may be feeling stuck in a less-than-ideal situation, but the Eight of Swords bears a positive message: there is a way out, should you choose to release your victim mentality. Listen to your intuition, not your negative thought patterns.",
    "reversed": "Perhaps you\u2019re learning from Oddbit\u2019s choices, and you\u2019re already in the process of releasing said negative patterns. If not, take a close look at how you\u2019re treating yourself. Don\u2019t give in to your inner critic."
  },
  {
    "name": "Nine of Swords - Tier",
    "image": "images/59.Nine_Swords.png",
    "blurb": "",
    "upright": "Tier, abandoned at birth by his mother and abandoned thereafter by all the elven groups with whom he made contact, has deep-set fears about being abandoned yet again. The Nine of Swords suggests that your fears and negative thoughts are holding you down, and warns against manifesting a self-fulfilling prophecy. Reach out for help from those around you, as Tier reaches out to Ember. You are not alone.",
    "reversed": "Reversed, the Nine of Swords suggests even deeper turmoil as a result of your fears. Don\u2019t put yourself down on top of everything else. Tier\u2019s fear of abandonment is rooted in reality, yes, but does that mean it is necessary? Again, reaching out to others may ease your burdens. This card may also suggest that you\u2019ve begun healing from your negativity."
  },
  {
    "name": "Ten of Swords - Misfit Trolls",
    "image": "images/60.Ten_Swords.png",
    "blurb": "",
    "upright": "How, exactly, the Misfit Trolls devolved from intelligent and industrious beings to their current state is unknown. They reflect the Ten of Swords\u2019 message of a painful ending. Perhaps they were victims of the tainted magic that pervaded the land under the Father Tree Holt. Similarly, this card may represent the victim of betrayal. Know that embracing a victim mindset will not help you in the long run. Just as the Misfit Trolls are now relearning how to be productive members of society, you must also pick yourself off the ground and embrace change. ",
    "reversed": "Maybe you\u2019re fighting an inevitable change, as the Misfit Trolls undoubtedly fought against their transformation. Or perhaps you\u2019ve yet to move on from a painful situation or memory that no longer serves you. The reversed Ten of Swords encourages you to release the pain that is holding you back. What you\u2019re suffering from will not last forever."
  },
  {
    "name": "Page of Swords - Jink",
    "image": "images/61.Page_Swords.png",
    "blurb": "",
    "upright": "Energetic and a lover of life, Jink thirsts for adventure. Here, she represents the cogs of invention. Move forward with fresh projects, and embrace your exploratory side as you learn new ways to communicate. Remember to follow through on your exciting new ideas. Who knows what awaits you on your journey?",
    "reversed": "As Jink acted without thought when she erased her Sire\u2019s memories, you, as well, may be acting hastily. Consider the consequences before you begin charting your course. Though that isn\u2019t to say don\u2019t act. If you\u2019ve been holding back some form of self-expression, don\u2019t feel pressured to stay silent."
  },
  {
    "name": "Knight of Swords - Kureel",
    "image": "images/62.Knight_Swords.png",
    "blurb": "",
    "upright": "Kureel sought revenge even after the fall of both Winnowill and Blue Mountain, to his own demise. Similarly, you may stop at nothing to achieve your goals. You act quickly and decisively, which can be a good thing - as long as you don\u2019t forget to think things through. Remember not to cut corners. You\u2019re good at using your head to reason through situations, so don\u2019t neglect the intellect your brain gives you.",
    "reversed": "You may be itching to take action while something holds you back. As Kureel acted impulsively in endangering young Wolfrider Dart and the human boy Geoki, are you making rash decisions? Ensure that you are focusing in on your actual goal instead of spreading yourself too thin."
  },
  {
    "name": "Queen of Swords - Aroree",
    "image": "images/63.Queen_Swords.png",
    "blurb": "",
    "upright": "Aroree, through centuries of healing, learned how to be independant, as the Queen of Swords suggests you are. This Glider carries the scars of her past with humility, allowing them to guide her decisions wisely. At one point in her story, she finds emotions to be distractions from logic, reasoning that since the wolfriders could easily Recognize again they would be at peace with her kidnapping Windkin. In the same vein, you may also be letting your head rule your decisions. Do you feel closer to others when you connect intellectually versus emotionally? Continue to search for truth in everything you do.",
    "reversed": "One could also argue that it was Aroree\u2019e emotional response to feeling trapped that lead her to swipe the young Wolfrider Windkin. Ensure that you allow your head and heart to communicate in balance. You may be letting your heart take too much of a lead. If you\u2019re struggling to express compassion to others, reflect on why that is."
  },
  {
    "name": "King of Swords - Windkin",
    "image": "images/64.King_Swords.png",
    "blurb": "",
    "upright": "Loner Windkin represents intellectual power. As the King of Swords, Windkin encourages you to utilize logic to navigate your troubles. Be not to afraid to seek help from those wiser than you. ",
    "reversed": "As the King of Swords reversed assures, Windkin does not need to boast his power recklessly. Follow in his decisive footsteps and use the power you wield responsibly."
  },
  {
    "name": "Ace of Wands - Shuna",
    "image": "images/65.Ace_Wands.png",
    "blurb": "",
    "upright": "Shuna is full of potential, as both a young girl and an old woman. She has always been open to new ideas, such as that of staging a rebellion against the all-powerful Grohmul Djun. The Ace of Wands encourages you to live according to your passions. Embrace new projects that embody your interests and desires. You have a wonderful opportunity in front of you, whether it\u2019s personal or material growth. Make the most of it.",
    "reversed": "You may be like Shuna before her growth into a brave and powerful young woman. What\u2019s most important right now is finding a way to harness your energy in a productive manner. If you\u2019re finding it hard to define where you want to go with your life, take time to be introspective. Don\u2019t let petty delays deter you from chasing your dreams."
  },
  {
    "name": "Two of Wands - Nokka",
    "image": "images/66.Two_Wands.png",
    "blurb": "",
    "upright": "Nokka knows what she wants, and isn\u2019t afraid to go after it. However, one can only assume that she\u2019s had ample time to make her decision to remain on the World of Two Moons. You may also be considering your long-term goals - set yourself up for success by being open to growing.",
    "reversed": "Make sure to consider what is important to you as you make your decisions. It will be important for you to make a solid and attainable plan to follow. Let your passion and intuition guide you."
  },
  {
    "name": "Three of Wands - Petalwing",
    "image": "images/67.Three_Wands.png",
    "blurb": "",
    "upright": "Petalwing\u2019s plans often progress as it intends. Your plans may similarly be expanding as you had hoped. This is the time to dream big: work toward capturing the largest prey in your wrapstuff. Be adventurous in your endeavors.",
    "reversed": "However, the preservers - Petalwing included - rarely look beyond the short-term of knowing what\u2019s best for the highthings they dedicate themselves to. Break out of the comfort zone you feel stuck in. Petalwing and the other preserver\u2019s plans to support the highthings stagnated when Winnowill sent them away. You might be better off following your own path, but don\u2019t block out the ones who care about you."
  },
  {
    "name": "Four of Wands - Joyleaf",
    "image": "images/68.Four_Wands.png",
    "blurb": "",
    "upright": "Peackeeper of the Wolfriders during Bearclaw\u2019s chieftanship, Joyleaf embodies the Four of Wand\u2019s family and love-oriented theme. Enjoy the presence of those around you. You should celebrate your progress and the milestones you\u2019ve reached thus far.",
    "reversed": "You may be finishing or close to finishing a personal goal, such as how Joyleaf often met her goals through persistence. Or, you could be going through a rough patch in terms of your personal harmony, such as the rift that was left behind after the death of Joyleaf and many of the other Wolfriders at the claws od Madcoil."
  },
  {
    "name": "Five of Wands - Little Patch",
    "image": "images/69.Five_Wands.png",
    "blurb": "",
    "upright": "Little Patch caused conflict just by existing. Turned out by the humans for the berry-red patch of skin over his right eye and treated with caution by the Wolfriders who raised him, his life was not easy at first. He had to learn to embrace his differences, and you would do well to follow his lead. Change, as when Little Patch embraced his human side and returned to his birth people, is inevitable. Ensure that all are on the same page about this coming transformation.",
    "reversed": "Upside down, the Five of Wands represents internal conflict, such as the conflict between Little Patch\u2019s love for his adoptive elven tribe and the yearning for his own kind. Additionally, this card may reflect external confrontation, which is not always a bad thing. Constructive criticism is an important part of the learning process. Work with those around you instead of pushing against them."
  },
  {
    "name": "Six of Wands - Skot",
    "image": "images/70.Six_Wands.png",
    "blurb": "",
    "upright": "At the end of it all, Skot acheived success in the way he yearned - a noble death, protecting those he loved. The Six of Wands, while not a portent of the end, does indicate that your hard work is paying off to provide you with accomplishment. Be proud of how far you\u2019ve come and the good you\u2019ve created in the world, but don\u2019t loose sight of your end goal.\n",
    "reversed": "You may have reached an important milestone, but at this point in time, you may be keeping that information to yourself. Don\u2019t be afraid to toot your own horn, as Skot is prone to doing. You define your successes. Don\u2019t let others take control of your self-esteem."
  },
  {
    "name": "Seven of Wands - Sust",
    "image": "images/71.Seven_Wands.png",
    "blurb": "",
    "upright": "Son of Pike, Skot, and Krim, Sust is of both Go-back and Wolfrider descent. He and his age-mate Pool often end up in competitions, a theme that may be prevalent in your life right now. Stay firm in your beliefs, and be prepared for the challenges to come.",
    "reversed": "Sometimes, Sust feels pressured to progress in his journey at the same rate as his age-mate Pool. Remember that your path is your own, and that you should remain strong in your stance. Don\u2019t expect the way to be easy."
  },
  {
    "name": "Eight of Wands - Rahnee the She-Wolf",
    "image": "images/72.Eight_Wands.png",
    "blurb": "",
    "upright": "Energy is on your side, pushing you forward to achieve your goals at a pace perhaps faster than expected. Go with the flow, but don\u2019t lose sight of your desires. As Rahnee the She-Wolf dedicated her chieftanship to uniting the wolf and elf halves of the first true Wolfriders, you should be focused in on a single effort.",
    "reversed": "Make sure you have a plan set in place before you begin rolling out your ideas. Rahnee the She-Wolf was a ferocious chief, don\u2019t let her scare you into staying in one place. You may need to delay your initial plans, but don\u2019t wait too long. Remember to pursue your goals intently."
  },
  {
    "name": "Nine of Wands - Huntress Skyfire",
    "image": "images/73.Nine_Wands.png",
    "blurb": "",
    "upright": "Even when faced with her crazed brother, Two-Spear, Huntress Skyfire stands strong, a beacon of resilience. She faced defeat, yet persevered in protecting the tribe and ultimately ended up defining The Way of the Wolfriders. Defend your boundaries fiercely. You are so close to your goals - keep pushing until the very end.",
    "reversed": "Even seemingly the most resilient of Chiefs faces struggles in their journey. As when it seemed Two-Spear came out on top, you may be facing significant setbacks. Know that you are strong and will overcome this challenge. Turn to those around you for support, they are there to help, not hinder."
  },
  {
    "name": "Ten of Wands - Bearclaw",
    "image": "images/74.Ten_Wands.png",
    "blurb": "",
    "upright": "You may be taking on a temporary burden heavier than expected. Draw on Bearclaw\u2019s fiercely independent strength, and know that you are capable of bearing this extra weight. However, make sure you don\u2019t try to tackle the whole world at once. Determine what needs your attention most, and focus in. The end is in sight!",
    "reversed": "Bearclaw rarely turned to his tribe for support. The Ten of Wands encourages you to learn from his mistake, and allow others to help with that heavy burden you shoulder. You do not need to carry this load all on your own - delegate responsibilities, release worries that you cannot alter, and concentrate on what matters most to you."
  },
  {
    "name": "Page of Wands - Shukopek",
    "image": "images/75.Page_Wands.png",
    "blurb": "",
    "upright": "Shukopek grew up open-minded, as this card encourages. Be willing to take on new experiences and creative endeavors, but remember to have a solid plan in place before you go too deep down any path.",
    "reversed": "You may not know how to turn your thoughts into actions. That\u2019s more than okay - take this time to mess around with your ideas, experimenting and playing with them until you fully understand where you want them to go. Just don\u2019t loose sight of your initial vision. As Shukopek kept firm in his wanting a mortal life, remain true to your original ideas."
  },
  {
    "name": "Knight of Wands - Vaya",
    "image": "images/76.Knight_Wands.png",
    "blurb": "",
    "upright": "Vaya, ferocious daughter of Khavi, represents the pursuit of a goal. She knew what she wanted - her mother\u2019s approval - but grew into realizing that the only person whose approval she needed was herself. Brave and bold, Vaya encourages you to face adventure and danger alike in your mission. Your potential is sky-high, but don\u2019t forget to think before you act.",
    "reversed": "The reversed Knight of Wands can appear when you are facing a stockpile of energy with nowhere to direct it. Seek alternative routes, such as Vaya\u2019s last effort to stand up to troll King Guttlekraw. Do not act impulsively, but also do not stand still when the it is time to strike."
  },
  {
    "name": "Queen of Wands - Krim",
    "image": "images/77.Queen_Wands.png",
    "blurb": "",
    "upright": "Feisty and determined Krim is well aware of her strengths and weaknesses. Trust yourself to know how to achieve your goals in a way that stays true to you. You inspire those around you to follow your lead, so make sure you\u2019re providing a good role model for them.",
    "reversed": "Krim knows herself inside and out, and is confident in who she is. Draw on her energy and learn to love yourself as you are. You know what you want to embody in life, now is the time to allow yourself to shine."
  },
  {
    "name": "King of Wands - Olbar the Mountain Tall",
    "image": "images/78.King_Wands.png",
    "blurb": "",
    "upright": "Olbar the King of Wands represents leadership and clear vision. Take control of your ideas, then enlist others in the pursuit of your goals. Live with intent and direction. Take the opportunities presented to you, as Olbar takes opportunities to learn when they appear to him.",
    "reversed": "Even Olbar the Mountain Tall must once have been an uncertain youth. You may not yet be ready to step into your leadership role, but rest assured, you will reach that point eventually. Be mindful of setting realistic expectations and not pushing others away while chasing your goals. A true leader, like Olbar, recognizes the contributions of everyone."
  }
];


function drawCard() {
  const card = cards[Math.floor(Math.random() * cards.length)];
  const image = document.getElementById("tarot-image");
  const description = document.getElementById("card-description");

  image.src = card.image;
  image.alt = card.name;

  let html = `<p><strong>${card.name}</strong></p>`;
  if (card.blurb) html += `<p>${card.blurb}</p>`;
  html += `<p><em>Upright:</em> ${card.upright}</p>`;
  html += `<p><em>Reversed:</em> ${card.reversed}</p>`;

  description.innerHTML = html;
}
function drawThreeCards() {
  document.getElementById("card1").innerHTML = "";
  document.getElementById("card2").innerHTML = "";
  document.getElementById("card3").innerHTML = "";

  const shuffled = tarotCards.sort(() => 0.5 - Math.random());
  const spread = shuffled.slice(0, 3);

  spread.forEach((card, index) => {
    const orientation = Math.random() < 0.5 ? "upright" : "reversed";
    const meaning = orientation === "upright" ? card.upright : card.reversed;

    const cardHtml = `
      <img src="images/${card.image}" alt="${card.name} - ${card.character}" style="max-width: 100%; height: auto;">
      <h2>${card.name} - ${card.character}</h2>
      <p><strong>${orientation.charAt(0).toUpperCase() + orientation.slice(1)}:</strong> ${meaning}</p>
    `;

    document.getElementById(`card${index + 1}`).innerHTML = cardHtml;
  });
}
