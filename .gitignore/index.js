const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")
var prefix2 = ("?")

bot.on('ready', function() {
    bot.user.setActivity("pour de l'aide: *Help");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {

    if (message.content === prefix + "Infoserveur"){
        var embed = new Discord.RichEmbed()
            .setTitle("Info du serveur")
            .setDescription("Voici les informations du serveur Discord Vin Rage Gaming")
            .addField("Nom Du Serveur", message.guild.name)
            .addField("Crée le", message.guild.createdAt)
            .addField("Tu as rejoins le", message.member.joinedAt)
            .addField("Utilisateurs sur le Serveur", message.guild.memberCount)
            .setColor("0xB40431")
        message.channel.sendEmbed(embed)

    }

    if (message.content.startsWith(prefix + "Sondage")){
        if(message.author.id == "330077877599207445"){
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            var embed = new Discord.RichEmbed()
                .setDescription("Sondage")
                .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
                .setColor("0xB40431")
                .setTimestamp()
            message.guild.channels.get('443750430368071680').sendEmbed(embed)
            .then(function (message){
                message.react("✓")
                message.react("✗")
            }).catch(function() {
            });
            }else{
                return message.reply("Tu n'as pas la permission, désolé")
    }}


    if (message.content.startsWith(prefix + "Sond3")){
        if(message.author.id == "330077877599207445"){
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            var embed = new Discord.RichEmbed()
                .setDescription("Sondage")
                .addField(thingToEcho, "Répondre avec :one: , :two: ou :three:")
                .setColor("0xB40431")
                .setTimestamp()
            message.guild.channels.get('443750430368071680').sendEmbed(embed)
            .then(function (message){
                message.react(":one:")
                message.react(":two:")
                message.react(":three:")
            }).catch(function() {
            });
            }else{
                return message.reply("Tu n'as pas la permission, désolé")
    }}

    if (message.content === prefix + "Actus"){
        var embed = new Discord.RichEmbed()
            .setTitle("Page d'actualités")
            .setDescription("Voici les actualités en ce moment")
            .addField("Nouvelle MAJ de VRG","La nouvelle MAJ de VRG intitulée: Prototype W est une petite MAJ \n Elle inclut des nouvelles commandes comme : ~ *Pub à décourvir avec la commande *CFSP et une autre commande Admin. \n Quelques répliques et des bugs furent corrigés. \n Plein d'autres trucs à découvrir en lui parlant !", true)
            .addField("Les Rôles","Le BOT peut maintenant expliquer plus de rôles qu'avant toujours avec la même commande \n Allez voir dans *Help pour plus d'infos !", true)
            .setFooter("La page actus est mise à jour en même temps que le BOT alors allez checker de temps en temps.")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix2 + "QRDB"){
        var embed = new Discord.RichEmbed()
            .setTitle("Commandes questions")
            .setDescription("Voici les commandes pour avoir les réponses à vos questions")
            .addField("?LCS","Pour connaître une commande secrète !", true)
            .addField("?Roles","Les rôles du serveur n'auront plus aucun secret", true)
            .addField("?afk","que signifie : AFK ?", true)
            .addField("?wp","que signifie : WP ?", true)
            .addField("?tm","que signifie : TM ?", true)
            .addField("?hs","que signifie : HS ?", true)
            .setColor("0xB40431")
            .setFooter("D'autres commandes arriveront dans les prochaines MAJs !")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix2 + "Roles"){
        var embed = new Discord.RichEmbed()
            .setTitle("Voici les différents rôles du serveur")
            .setDescription("Pour savoir comment les obtenir veuillez vous adresser à Napidou")
            .addField("Nouveaux","Pour ceux qui viennent d'arriver dans le serveur et qui connaissent pas trop", true)
            .addField("Habitants","L'habitant connaît le serveur il y séjourne depuis un bout de temps \n il habite traquillement.", true)
            .addField("Citoyens","Les citoyens connaissent bien le serveur ils y sont depuis un long moment \n il on plus de responsabilitées au sein du serveur comme payé leur factures", true)
            .addField("Police","La police est là pour faire respecter le règlement du serveur \n et bannir les éléments perturbateurs", true)
            .addField("Vips","Les Vips sont les stars du serveur mais peu de personnes possèdent ce rôle", true)
            .addField("Gouverneur","Le gouverneur est le bras droit du dirigeant il l'assiste dans ses choix \n et le remplace lorsqu'il est absent", true)
            .addField("Secretaire","Le secretaire est un rôle bien mystérieux, c'est le bars gauche du dirigeant \n mais il est tellement discret qu'on en sait pas plus", true)
            .addField("Informaticien","L'informaticien est celui qui s'occupe des BOTs du serveur \n il est souvent avec le dirigeant pour pouvoir remplir sa petite sacochette d'idées", true)
            .addField("Dirigeant","Il possède les pleins pouvoirs sur le serveur \n il peut tout faire et tout voir il dirige et guide le serveur vers le droit chemin \n non je suis pas payé pour lui lécher les bottes !", true)
            .addField("~ Les rôles spéciaux ~", true)
            .addField("Testeurs","Testeurs est un rôle éphémère qui sert à accèder au salon test \n il permet d'aider au développement du BOT et si il fait bien son taff il devient VRG Helper", true)
            .addField("VRG Helper","Ce rôle est donné au personne ayant aidés au développement de VRG BOT \n Merci à eux !", true)
            .addField("Amis","Seul Napidou sait vraiment se que ce rôle signifie \n un rôle bien spécial et mystèrieux !", true)
            .addField("Graffeur-Styliste","Rôle éphémère donné à ceux qui ont aidés Napidou à crée un design novateur pour ses projets", true)
            .setFooter("Et toi t'as quel rôle ?")
            .setColor("0xB40431")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + "Debug"){
        if(message.author.id == "449251922612846593"){
            message.channel.send("Les changements de la version 15.75 : \n \n ~ Changement de prefix de ;; à * \n ~ Commande *Debug \n ~ Nouveaux rôles dans l'embed \n ~ Commande pour pouvoir envoyer un lien vers sa nouvelle vidéo \n \n A faire pour la prochaien MAJ : \n \n ~ Intégrer la chaîne de xxrom \n ~ Images randoms dans rue de la presse \n ~ corriger des bugs \n \n Cio Freez !")
        }else{
            return message.reply("Tu n'as pas accès au debug de la version 15.75, désolé.")
    }}

    if (message.content === prefix + "JDQ"){
        message.channel.send("Voici ce à quoi je peux répondre: \n -Salut -salut \n -yop -black squad \n -coucou -youki \n -sava -ca va \n -ca va? -sava? \n -hey -hello \n -cava -re \n -vocal -voc \n -xxrom -vw974 \n -pk -tu joues \n -pomme -cc \n -tg -qui bs ? \n -qui bs -ya quelqu'un ? \n -ui -moi \n -napidou ? -aie \n -qui unturned? -yop qui unturned? \n -k -ohw \n -oh ok -toi tg \n -toi tg ptn -toi ftg \n -toi ftg ptn -ptn \n -je mange -ok je mange \n -bon jy go -salut VRG \n -youkouk -YoukYouk \n -pas moi -omg \n -waow -woaw \n -wow \n -K -L \n \n - Le BOT peut aussi répondre à d'autre messages \n mais ils n'apparraissent pas ici \n car ils sont secrets !");
    }

    if (message.content === prefix2 + "LCS"){
        message.channel.send("Voici la seule et unique commande secrète : \n \n - Napiversaire \n \n Cette commande est à effectuer le 14 Décembre")

    if (message.content === prefix + "Creator"){
        message.channel.send("Mon créateur est Le Ptit Freez, le projet est supervisé par Napidou.");
    }

    if (message.content === prefix + "Napidou"){
        message.channel.send("Voici la chaîne de [Napidou](https://www.youtube.com/channel/UCp9Ad5p8AGpPzoXZCCLjeyQ)");
    }

    if (message.content === prefix + "Freez"){
        message.channel.send("Voici la chaîne de mon créateur (https://www.youtube.com/channel/UCyaQOwSc7pPtftMsizczyFw)");
    }

    if (message.content === prefix + "CFUS"){
        if(message.author.id == "330077877599207445"){
            message.channel.send("Pour faire une sondage, c'est simple : Il faut écrire la commande Sondage avec l'étoile puis écrire la question du sondage, exemple : ~*Sondage Qui aime les saucisses ?~ Et voilà !");
        }else{
            return message.reply("Désolé mais tu ne peux pas exécuter cette commande. ;-;")
    }}

    if (message.content === prefix + "Website"){
        message.channel.send("Voici le site [VRG BOT Official Development WebSite](https://vrg-bot-official-development-website-76.webself.net/accueil)");
    }

    if (message.content === prefix + "JDQS"){
        message.channel.send("Voici les messages spéciaux auquels je peux répondre : \n -bonsoir \n -Bon VRG, j'arrête de t'améliorer pour aujourd'hui, à plus ! ( Freez seulement ) \n Si des personnes aident au développement \n ils auront un message spécial qui apparaitra ici.");
    }

    if (message.content === prefix + "CFSP"){
        message.channel.send("Pour faire ta pub c'est simple tu as juste a écrire : *Pub puis ensuite tu mets le lien de ta pub genre une vidéo YouTube \n \n Attention, tu dois envoyer ça dans le salon rue de la presse !")
    }
    
    if (message.content.startsWith(prefix + "Admin")){
        if(message.author.id == "330077877599207445"){
            var embed = new Discord.RichEmbed()
                .setTitle("Commandes des Admins")
                .setDescription("Voici les commandes réalisables par les admins")
                .addField("*CFUS","Explique comment créer un sondage", true)
                .addField("*Sondage","Permet de créer un sondage dans : Rue de la presse", true)
                .addField("*Sond3","Permet de créer un sondage avec 3 possibilitées de réponse.", true)
                .addField("*JDQS","Montre les messages spéciaux auquels je peux répondre.", true)
                .addField("*Debug","Affiche le debug de la dernière version", true)
                .setColor("0xB40431")
                .setFooter("Les commandes ci-dessus sont réalisables par les admins")
            message.guild.channels.get('421678453050441738').sendEmbed(embed)
        }else{
            return message.reply("Tu n'as pas la permission de voir les commandes des Admins, désolé")
    }}

    if (message.content === "Salut"){
        message.channel.send("Salut !");
    }

    if (message.content === "black squad"){
        message.channel.send("Trop bon jeu :D");
    }

    if (message.content === "coucou"){
        message.channel.send("Coucou mon p'tit oréo -_-");
    }

    if (message.content === "youki"){
        message.channel.send("YOUKYOUKYOUKYOUKYOUK");
    }

    if (message.content === "sava"){
        message.channel.send("Ta gueule et mange !");
    }

    if (message.content === "Napiversaire"){
        message.channel.send(`*Bon anniversaire* **Napidou** ! *Weeeeeeee !* De la part de **${message.author.username}** !`);
    }

    if (message.content === "ca va"){
        message.channel.send("Oh ! Ta gueule et mange !");
    }

    if (message.content === "ca va?"){
        message.channel.send("Mais ta gueule et mange !");
    }

    if (message.content === "sava?"){
        message.channel.send("Ta gueule et mange !");
    }

    if (message.content === "hey"){
        message.channel.send("ho");
    }

    if (message.content === "hello"){
        message.channel.send("bye");
    }

    if (message.content === "cava"){
        message.channel.send("Ta gueule et mange !");
    }

    if (message.content === "re"){
        message.channel.send("Rebonsouère mon poulet");
    }

    if (message.content === "vocal"){
        message.channel.send("Ouais allez-y vous m'soulez");
    }

    if (message.content === "voc"){
        message.channel.send("Ouais allez-y vous m'soulez");
    }

    if (message.content === "xxrom"){
        message.channel.send("Le syndrome ou l'autre ?");
    }

    if (message.content === "vw974"){
        message.channel.send("O_O");
    }

    if (message.content === "pk"){
        message.channel.send("A ton avis tête de lard");
    }

    if (message.content === "tu joues"){
        message.channel.send("Laisse les pros trkl");
    }

    if (message.content === "pomme"){
        message.channel.send("Ok ça marchais avec CASSOS mais pas moi ! è-é");
    }

    if (message.content === "cc"){
        message.reply(" slt");
    }

    if (message.content === "tg"){
        message.channel.send("Nan mais le respect il est ou ?");
    }

    if (message.content === "qui bs ?"){
        message.reply(" j'avoue ouais les gars qui bs ?");
    }

    if (message.content === "qui bs"){
        message.reply(" t'as raisons là qui bs ?");
    }

    if (message.content === "ya quelqu'un ?"){
        message.channel.send("Nan je crois je suis tout seul, c'est triste");
    }

    if (message.content === "ui"){
        message.channel.send("Effectivement");
    }

    if (message.content === "moi"){
        message.channel.send("Moi aussi");
    }

    if (message.content === "napidou ?"){
        message.channel.send("Le Dirigeant Napidou est demandé à l'accueil");
    }

    if (message.content === "aie"){
        message.channel.send("Ouch, nan j'ai rien senti en fait");
    }

    if (message.content === "qui unturned?"){
        message.reply("veut jouer à Unturned les gars go le rejoindre !");
    }

    if (message.content === "yop qui unturned?"){
        message.channel.send("Alors moi je veux bien mais je veux être un zombie");
    }

    if (message.content === "k"){
        message.channel.send("Après le K y'a le L si tu cherches ");
    }

    if (message.content === "ohw"){
        message.channel.send("Ohw");
    }

    if (message.content === "oh ok"){
        message.channel.send("Je comprends ... En fait non");
    }

    if (message.content === "toi tg"){
        message.channel.send("Mal élévé va !");
    }

    if (message.content === "toi tg ptn"){
        message.channel.send("Forceur !");
    }

    if (message.content === "toi ftg"){
        message.channel.send("Je te permet pas sale ... fromage");
    }

    if (message.content === "toi ftg ptn"){
        message.channel.send("Vas-y j'arrête c'est chiant");
    }

    if (message.content === "ptn"){
        message.channel.send("Oh la vulgarité !");
    }

    if (message.content === "je mange"){
        message.channel.send("Tu vas me donner faim !");
    }

    if (message.content === "ok je mange"){
        message.channel.send("C'est bien, nickel");
    }

    if (message.content === "bon jy go"){
        message.reply(" ok on s'reverra plus tard !");
    }

    if (message.content === "je deco"){
        message.channel.send("Ok ok au moins tu dis au revoir, à plus sinon !");
    }

    if (message.content === "voilà"){
        message.channel.send("Voilà voili voilou");
    }

    if (message.content === "salut VRG"){
        message.channel.send("Oh tiens tu m'appelles par mon nom ? :)");
    }

    if (message.content === "@VRG Prototype Y (V.16.80)"){
        message.channel.send("Oui, je suis là !");
    }

    if (message.content === "youkyouk"){
        message.channel.send("Alors toi tu le dis pas en fait");
    }

    if (message.content === "YoukYouk"){
        message.channel.send("Nan mais toi tu le dis pas par contre");
    }

    if (message.content === "salut"){
        message.channel.send("Tu sais je déteste quand on ne met pas de majuscules ! Mais sinon salut");
    }

    if (message.content === "L"){
        message.channel.send("T'es un rigolo toi !");
    }

    if (message.content === "yop"){
        message.channel.send("YoukYouk");
    }

    if (message.content === "bonsoir"){
        message.reply(" salut ! Sinon qui bs avec toi ?");
    }

    if (message.content === "pas moi"){
        message.channel.send("moi non plus");
    }

    if (message.content === "omg"){
        message.channel.send("AUMIGAUDE");
    }

    if (message.content === "waow"){
        if(message.author.id == "510556566706192394"){
            message.channel.send("Fabuleux")
        }else{
            return message.reply("woaw")
    }}

    if (message.content === "woaw"){
        if(message.author.id == "510556566706192394"){
            message.channel.send("Magnifique")
        }else{
            return message.reply("waow")
    }}

    if (message.content === "wow"){
        message.channel.send("WOUW")
    }

    if (message.content === "Bon VRG, j'arrête de t'améliorer pour aujourd'hui, à plus !"){
        if(message.author.id == "449251922612846593"){
            message.channel.send("Ok Freez c'était cool mais oublie pas de te laver les mains avant de me toucher la prochaine fois elles étaient sales ! Sinon à plus !");
        }else{
            return message.reply("Nan mais c'est pas toi qui me code... ;-;")
    }}

    if (message.content === prefix2 + "afk"){
        var embed = new Discord.RichEmbed()
            .setDescription("Que signifie : AFK ?")
            .addField("AFK","Away From Keyboard", true)
            .setColor("0xB40431")
            .setFooter("Maintenant tu sais ce que veut dire : AFK !")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix2 + "wp"){
        var embed = new Discord.RichEmbed()
            .setDescription("Que signifie : WP ?")
            .addField("WP","Well Played", true)
            .setColor("0xB40431")
            .setFooter("Maintenant tu sais ce que veut dire : WP !")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix2 + "tm"){
        var embed = new Discord.RichEmbed()
            .setDescription("Que signifie : TM ?")
            .addField("TM","Team Work", true)
            .setColor("0xB40431")
            .setFooter("Maintenant tu sais ce que veut dire : TM !")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix2 + "hs"){
        var embed = new Discord.RichEmbed()
            .setDescription("Que signifie : HS ?")
            .addField("HS","Hard Scoop (dans le milieu du gaming)", true)
            .addField("HS","Hors Service (dans la vie quotidienne)", true)
            .setColor("0xB40431")
            .setFooter("Maintenant tu sais ce que veut dire : HS !")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + "Help"){
        var embed = new Discord.RichEmbed()
            .setTitle("Commandes VRG BOT")
            .setDescription("Voici les commandes que je peux effectué:")
            .addField("*Help","Affiche cette page d'aide", true)
            .addField("*JDQ","Affiche les répliques que je peux dire", true)
            .addField("*Creator","Affiche le pseudo de mon créateur", true)
            .addField("*Napidou","Envoie le lien de la chaîne de Napidou !", true)
            .addField("*Website","Envoie le lien du site officiel de développement de VRG BOT.", true)
            .addField("*Freez","Envoie le lien de la chaine de Freez !", true)
            .addField("*Admin","Cette commande montre les commandes que les admins peuvent effectué dans le salon des admins, commande réalisable par Napidou uniquement.", true)
            .addField("*Infoserveur","Cette commande permet de savoir la date de création du serveur, le nombre de membres et le jour où tu as rejoins.", true)
            .addField("*Actus","Avec cette commande tu peux voir les actus du moment à propos du serveur voir même plus.", true)
            .addField("?QRDB","Avec cette commande tu pourras savoir quel questions posé au BOT pour qu'il te réponde !", true)
            .setColor("0xB40431")
            .setFooter("D'autres fonctionnalités seront instaurées dans le futur")
        message.channel.sendEmbed(embed);
    }
})

bot.on('guildMemberAdd', member => {
    bot.channels.get('374964719884435469').send(`Bienvenue à toi **${member}** mais tu peux retirer tes chaussures stp ?`);
})

bot.on('guildMemberRemove', member => {
    bot.channels.get('374964719884435469').send(`Bah voilà **${member.user.username}** est parti, moi je l'aimais bien mais bon ...`)

});
