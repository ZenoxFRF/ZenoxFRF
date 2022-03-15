const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'OTUyNTkzNzYyNjA4MDg3MTIw.Yi4SEw.NqmKx8NSNygbqqka0V8oaI4bbXo';
usedCommandRecently4 = new Set();

client.on('ready', () =>{
    console.log('gen bot is now online')
    client.user.setPresence({ game: { name: `${client.guilds.size} Servers`, type: "WATCHING"}});
});
client.on('message', message =>{
    if (message.content === 'hello'){
        message.author.send('hi');
    };
});











client.on('message', message =>{
    if (!message.guild) return;
if (message.content === '!gen crunchyroll'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('Cooldown Message')    
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 10000)
    var string = `**CrunchyRoll** : justifigo@gmail.com:c3a1d4b2
**CrunchyRoll** : sebasvargasgeorge@gmail.com:Sebas2002
**CrunchyRoll** : katkusaterkus@gmail.com:Kacka003
**CrunchyRoll** : kittenloverdrawer@gmail.com:2turkeybiscuits
**CrunchyRoll** : abbyjaneh06@gmail.com:Hilliard0806
**CrunchyRoll** : kctoon@swbell.net:sweetie97
**CrunchyRoll** : linda.mai50@yahoo.com:Iamveryhappy4u
**CrunchyRoll** : kingprodigy1020@yahoo.com:sergio44
**CrunchyRoll** : stormhunter528@gmail.com:Felix1998
**CrunchyRoll** : apollo555100@gmail.com:justinb17
**CrunchyRoll** : mrsfalch@gmail.com:Princes1
**CrunchyRoll** : tyler.sterio@hotmail.com:tylerme11
**CrunchyRoll** : gabealva99@outlook.com:Braves24
**CrunchyRoll** : nyaluv1905@gmail.com:Thankug76
**CrunchyRoll** : ravms@yahoo.com:katniss
**CrunchyRoll** : ravenskye7@yahoo.com:yellowtoe7
**CrunchyRoll** : mamarante91@yahoo.com:amarante88
**CrunchyRoll** : chivs6966@hotmail.com:mollie
**CrunchyRoll** : randomepicness0@gmail.com:BoBothebee12
**CrunchyRoll** : Sierra.lorenz@yahoo.com:abbeyroad
**CrunchyRoll** : kaye.deang@gmail.com:Bday060481
**CrunchyRoll** : jchamblee19@gmail.com:juju0778999
**CrunchyRoll** : rebeckahav@mail.com:Hotcheetos1
**CrunchyRoll** : tammyrose0879@gmail.com:tammy0879
**CrunchyRoll** : jessed1468@gmail.com:sasha211
**CrunchyRoll** : fuentesemily11@gmail.com:F0709882
**CrunchyRoll** : angiegothita@yahoo.com:cat123
**CrunchyRoll** : juliagooliaa@gmail.com:Eleanor3!
**CrunchyRoll** : leomark2314@gmail.com:Damien17
**CrunchyRoll** : jaycon0522@gmail.com:Joshua0522
**CrunchyRoll** : carmencastelle@gmail.com:Castelle123
**CrunchyRoll** : Lilshorty300@gmail.com:lilshorty
**CrunchyRoll** : yuki-shoujo@hotmail.com:onnikai93
**CrunchyRoll** : ann.witt@yahoo.com:beforegostop
**CrunchyRoll** : cody.foss12@me.com:boomers123
**CrunchyRoll** : jesselynvasquez@gmail.com:chance617
**CrunchyRoll** : whiteamari863@yahoo.com:tumble7645
**CrunchyRoll** : soe@hotmail.es:12082002
**CrunchyRoll** : jacey7297@yahoo.com:Minnie7297
**CrunchyRoll** : jessicala78@gmail.com:64589266458926
**CrunchyRoll** : mmk.mkh@hotmail.com:muath123
**CrunchyRoll** : samaed1022@gmail.com:Marcus1022
**CrunchyRoll** : tt_blackdeath666@hotmail.com:kagome
**CrunchyRoll** : rsavage2000@gmail.com:password14
**CrunchyRoll** : ezar_kamenrider@yahoo.com:Mahes_4680
**CrunchyRoll** : abigail.andres7@gmail.com:ace10412
**CrunchyRoll** : ibmspisak@gmail.com:spisak12
**CrunchyRoll** : lcc222@nau.edu:Supersize11
**CrunchyRoll** : alex.larsonc@gmail.com:Whitesox15
**CrunchyRoll** : edgar1197@gmail.com:laulaulau
**CrunchyRoll** : cain.khalife@gmail.com:Betty1398
**CrunchyRoll** : annabananarusson@gmail.com:unic0rns
**CrunchyRoll** : KomaMew77@gmail.com:Angelo
**CrunchyRoll** : gamerdrew27@outlook.com:redgod27
**CrunchyRoll** : azn_ghg@hotmail.com:destiny7
**CrunchyRoll** : tmwright619@gmail.com:0248651793Tw`
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
};
};
});
client.login(token);












client.on('message', message =>{
    if (!message.guild) return;
if (message.content === '!gen nordvpn'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('Cooldown Message')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 10000)
    var string = `**NordVPN** : motamedi_kian@yahoo.com:ip14Fetv
    **NordVPN** : Jasmineitzelochoa@gmail.com:Amberlynn12
    **NordVPN** : minniemouse2662@gmail.com:pinkcard26
    **NordVPN** : chrisschouten@gmail.com:Matrix00
    **NordVPN** : xankazuto@gmail.com:Rockman1995
    **NordVPN** : kendrakkclarke@hotmail.com:Hellokitty8`
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
};
};
});
client.login(token);






client.on('message', message =>{
    if (!message.guild) return;
if (message.content === '!gen disneyplus'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('Cooldown Message')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 10000)
    var string = `**DisneyPlus** : greg@themcfarlanefirm.com:sexyass1 | Plan = Disney+, Hulu, and ESPN+ | Early Access = False
    **DisneyPlus** : gregory.beckman@abbvie.com:Fishfest12 | Plan = Disney Plus Monthly - US -  Web | Early Access = False
    **DisneyPlus** : gretchenogorman@gmail.com:gJs2003@ | Plan = Disney Plus Monthly with 7 day Free Trial | Early Access = False
    **DisneyPlus** : grimes1991@iCloud.com:Adamgrimes1991 | Plan = Disney Plus Yearly - UK - Web | Early Access = False
    **DisneyPlus** : grjim123@yahoo.com:176River? | Plan = Disney Plus Yearly - US -  Web | Early Access = False
    **DisneyPlus** : groffpaint@live.com:Amma2662 | Plan = Disney Plus Monthly with 7 Day Free Trial | Early Access = False
    **DisneyPlus** : gsharvat@gmail.com:Maddmaxx1! | Plan = Disney Plus Monthly - US -  Web | Early Access = False
    **DisneyPlus** : gu_l.a@outlook.com:GUGA231197 | Plan = Disney Plus Monthly - BR - Web | Early Access = False
    **DisneyPlus** : guerreropablo710@gmail.com:Posoposito11 | Plan = Disney Plus Monthly - Universal Gifting | Early Access = False
    **DisneyPlus** : guille_m_m@hotmail.com:697069gui | Plan = Disney Plus Yearly - PE - Web | Early Access = False
    **DisneyPlus** : guillermoguadalupe@hotmail.com:Memo2010 | Plan = Combo+ - MX - MERCADOLIBRE - Monthly - L6 organic | Early Access = False
    **DisneyPlus** : guitargodmonson@gmail.com:Kratos13! | Plan = Disney Plus Monthly - Apple - 2021 | Early Access = False
    **DisneyPlus** : gunaratnamduva@gmail.com:Bugatti619 | Plan = Disney Plus - GB - O2 - Bundle 6 Month Promo | Early Access = False
    **DisneyPlus** : gustavo_dm30@hotmail.com:Diniz082167! | Plan = Disney Plus Premier Access - Cruella - Tier 12 - Apple | Early Access = True
    **DisneyPlus** : gustavorojo83@gmail.com:Gus89ssc | Plan = Disney Plus Monthly - US -  Web | Early Access = False
    **DisneyPlus** : gutopinto@gmail.com:123mudar | Plan = Disney Plus Monthly | Early Access = False
    **DisneyPlus** : gwarner35@gmail.com:Liverpool1! | Plan = Disney Plus Monthly - US -  Web | Early Access = False
    **DisneyPlus** : gzhang2004@gmail.com:Grace20041126 | Plan = Disney Plus Monthly - CAN - Web | Early Access = False
    **DisneyPlus** : h.lars94@gmail.com:hilge3768 | Plan = Disney Plus Monthly - DE - Web - 2021 | Early Access = False
    **DisneyPlus** : h22003@hotmail.com:silwad123 | Plan = Disney+, Hulu No Ads, and ESPN+ | Early Access = False
    **DisneyPlus** : haileydc801@gmail.com:Hdc080102 | Plan = Disney Plus Monthly - US -  Web | Early Access = False
    **DisneyPlus** : happy8ball@Comcast.net:elvira88 | Plan = Disney Plus Monthly - US -  Web | Early Access = False
    **DisneyPlus** : harindu95@gmail.com:Senator95 | Plan = Disney Plus Monthly - US - Google - 2021 | Early Access = False
    **DisneyPlus** : harrism18@students.princehenrys.co.uk:Francec147 | Plan = Disney Plus Monthly - UK - Web | Early Access = False
    **DisneyPlus** : harrism466@gmail.com:Maggie1! | Plan = Disney Plus Monthly - US -  Web | Early Access = False
    **DisneyPlus** : harrisonprider@gmail.com:Harrison134 | Plan = Disney Plus Monthly - AU - Web - 2021 | Early Access = False
    **DisneyPlus** : harrissharon218@gmail.com:D1222m311 | Plan = Disney Plus Monthly - US - Google - 2021 | Early Access = False
    **DisneyPlus** : harro1971@gmail.com:fate4321 | Plan = Disney+ Premier Access - Raya - NA/ANZ/EMEA - Google | Early Access = True
    **DisneyPlus** : harrygail22@gmail.com:cheese14 | Plan = Disney Plus Monthly - UK - Web | Early Access = False
    **DisneyPlus** : hartc@mac.com:Hartboys2 | Plan = Disney+, Hulu, and ESPN+ | Early Access = False
    **DisneyPlus** : hartlebandreas@aol.com:Luksana1 | Plan = Disney Plus Monthly - Amazon - 2021 | Early Access = False
    **DisneyPlus** : hartwig.marco@yahoo.de:MarHar1109 | Plan = Disney Plus Yearly - DE - Web | Early Access = False
    **DisneyPlus** : haydenmd@bellsouth.net:4Brewers | Plan = Disney Plus Yearly - US -  Web | Early Access = False
    **DisneyPlus** : haymaazhari@gmail.com:wonder333 | Plan = Disney Plus - CA - Wireless - 6 Month Bundle Promo | Early Access = False
    **DisneyPlus** : haz_mj23@hotmail.com:mjairtime23 | Plan = Disney Plus Monthly - UK - Web - 2021 | Early Access = False
    **DisneyPlus** : hbodiford75@gmail.com:Alex1234 | Plan = Disney Plus Monthly with 7 Day Free Trial | Early Access = False
    **DisneyPlus** : hdrobles@gmail.com:Express1! | Plan = Disney Plus Monthly with 7 Day Free Trial | Early Access = False
    **DisneyPlus** : heather_orlando@hotmail.com:Rachell1 | Plan = Disney Plus Monthly | Early Access = False
    **DisneyPlus** : heavenshotline18@gmail.com:Wedding03! | Plan = Disney+, Hulu, and ESPN+ | Early Access = False
    **DisneyPlus** : helgabenedikts@gmail.com:svartur4 | Plan = Disney Plus Monthly - IS - Web | Early Access = False
    **DisneyPlus** : Hello@willguyatt.co.uk:Donkey64! | Plan = Disney+ Premier Access - Black Widow - Apple - Tier 20 | Early Access = True
    **DisneyPlus** : helsissa@aol.com:Sarah2007! | Plan = Disney+, Hulu, and ESPN+ - Hulu Sold w/ Ads | Early Access = False
    **DisneyPlus** : herself15@hotmail.com:smbc4747 | Plan = Disney Plus Monthly - US -  Web | Early Access = False
    **DisneyPlus** : hideaway@live.dk:Ejvind0343 | Plan = Disney Plus**DisneyPlusl** : Monthly - Apple - 2021 | Early Access = False
    **DisneyPlus** : hinahirano@gmail.com:12toraharu | Plan = Disney Plus Monthly - Amazon - 2021 | Early Access = False
    **DisneyPlus** : hipp_katt@hotmail.com:@Raleigh222 | Plan = Disney Plus Yearly - CH - Web | Early Access = False
    **DisneyPlus** : hmeeks@virginia.edu:Pemdas1! | Plan = Disney Plus Monthly with 7 day Free Trial | Early Access = False
    **DisneyPlus** : hmfrench@Comcast.net:blueberry1 | Plan = Disney Plus Monthly | Early Access = False
    **DisneyPlus** : Hmsmith125@gmail.com:Murphy124 | Plan = Disney Plus Monthly with 7 Day Free Trial | Early Access = False
    **DisneyPlus** : hntrjmprevntr@live.com:pzqmla10 | Plan = :  Disney Plus Yearly - Apple - 2021 | Early Access **DisneyPlus** :  False`
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
};
};
});
client.login(token);