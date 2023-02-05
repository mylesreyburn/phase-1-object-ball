let homeTeamPlayers = gameObject()["home"]["players"];

let awayTeamPlayers = gameObject()["away"]["players"];

function gameObject(){
    let game = {

        home: {
                teamName: "Brooklyn Nets",
                colors: ["Black", "White"],
                players:
                    {
                        "Alan Anderson": {
                            number: "0",
                            shoe: "16",
                            points: "22",
                            rebounds: "12",
                            assists: "12",
                            steals: "3",
                            blocks: "1",
                            slamDunks: "1" 
                        },
                        "Reggie Evans": {
                            number: "30",
                            shoe: "14",
                            points: "12",
                            rebounds: "12",
                            assists: "12",
                            steals: "12",
                            blocks: "12",
                            slamDunks: "7"
                        },
                        "Brook Lopez": {
                            number: "11",
                            shoe: "17",
                            points: "17",
                            rebounds: "19",
                            assists: "10",
                            steals: "3",
                            blocks: "1",
                            slamDunks: "15" 
                        },
                        "Mason Plumlee": {
                            number: "1",
                            shoe: "19",
                            points: "26",
                            rebounds: "12",
                            assists: "6",
                            steals: "3",
                            blocks: "8",
                            slamDunks: "5" 
                        },
                        "Jason Terry": {
                            number: "31",
                            shoe: "15",
                            points: "19",
                            rebounds: "2",
                            assists: "2",
                            steals: "4",
                            blocks: "11",
                            slamDunks: "1"
                        }
                    }
            },

        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players:
                {
                    "Jeff Adrien": {
                        number: "4",
                        shoe: "18",
                        points: "10",
                        rebounds: "1",
                        assists: "1",
                        steals: "2",
                        blocks: "7",
                        slamDunks: "2"
                    },
                    "Bismak Biyombo": {
                        number: "0",
                        shoe: "16",
                        points: "12",
                        rebounds: "4",
                        assists: "7",
                        steals: "7",
                        blocks: "15",
                        slamDunks: "10" 
                    },
                    "DeSagna Diop": {
                        number: "2",
                        shoe: "14",
                        points: "24",
                        rebounds: "12",
                        assists: "12",
                        steals: "4",
                        blocks: "5",
                        slamDunks: "5" 
                    },
                    "Ben Gordon": {
                        number: "8",
                        shoe: "15",
                        points: "33",
                        rebounds: "3",
                        assists: "2",
                        steals: "1",
                        blocks: "1",
                        slamDunks: "0"
                    },
                    "Brendan Haywood": {
                        number: "33",
                        shoe: "13",
                        points: "6",
                        rebounds: "12",
                        assists: "12",
                        steals: "22",
                        blocks: "5",
                        slamDunks: "12"
                    }
                }
            }
    }

    return(game);
}

function homeTeamName(){
    let object = gameObject();
    return object["home"]["teamName"];
}







function numPointsScored(playerName){
    let pointsScored = 0;
    for(let currentName in homeTeamPlayers){

        if (currentName === playerName){
            return homeTeamPlayers[currentName].points;
        }
    }
    for(let currentName in awayTeamPlayers){
        if (currentName === playerName){
            return awayTeamPlayers[currentName].points;
        }
    }
}

function shoeSize(playerName){
    let pointsScored = 0;
    for(let currentName in homeTeamPlayers){

        if (currentName === playerName){
            return homeTeamPlayers[currentName].shoe;
        }
    }
    for(let currentName in awayTeamPlayers){
        if (currentName === playerName){
            return awayTeamPlayers[currentName].shoe;
        }
    }
}

function teamColors(targetTeam){
    // console.log("targetTeam:", targetTeam)
    let game = gameObject();
    for(let team in game){

        // console.log("team: ", team)
        // console.log("finding teamsName: ", game[team].teamName);
        // console.log("targetTeam:", targetTeam)
        // console.log(game[team].colors)

        if(targetTeam === game[team].teamName){
            return game[team].colors;
        }
    }
}

function teamNames(){
    let game = gameObject()
    let teamNameArray = []
    for(let team in gameObject()){
        teamNameArray.push(game[team]["teamName"])
    }
    return teamNameArray;

}









function playerNumbers(targetTeam){
    
    let game = gameObject();
    let playerNumbersArray = [];
    for(let team in game){
        if(targetTeam === game[team].teamName){
            
            for(let player in game[team].players){
                console.log(player)
                playerNumbersArray.push(game[team].players[player].number)
            }
        }
    }
    return playerNumbersArray;
}

function playerStats(playerName){
    let game = gameObject();
    let playerStatsObj = {};
    for(let team in game){
            for(let player in game[team].players){
                if(player === playerName){
                    playerStatsObj = {...game[team].players[player]}
                }
        }
    }
    return playerStatsObj;
}

function bigShoeRebounds(){
    let game = gameObject();
    let biggestShoe = 0;
    let biggestShoePlayerRebounds = 0;

    for(let team in game){
        for(let player in game[team].players){
            if(game[team].players[player].shoe > biggestShoe){
                biggestShoe = game[team].players[player].shoe;
                biggestShoePlayerRebounds = game[team].players[player].rebounds;
                biggestShoePlayerName = player
            }
        }
    }
    console.log(biggestShoePlayerName)
    console.log("Shoe size: ", biggestShoe)
    return biggestShoePlayerRebounds;

}

/* function findHighestPlayer(attribute){

    let game = gameObject();
    let highestAttribute = 0;
    let highestAttributePlayer = "";

    for(let team in game){
        for(let player in game[team].players){

            let releventAttribute = game[team].players[player][attribute]
            debugger
            console.log(player, attribute + ": ", releventAttribute)
            if(releventAttribute > highestAttribute){
                debugger
                highestAttribute = releventAttribute
                debugger
                highestAttributePlayer = player

                console.log("new highest", attribute + ": ", highestAttributePlayer + ": ", highestAttribute)
            }
        } debugger
    }
    return highestAttributePlayer
}
 */
// console.log("homeTeamName: ", homeTeamName())
// console.log("numPointsScored: ", numPointsScored("Jason Terry"))
// console.log("shoeSize: ", shoeSize("Jason Terry"))
// console.log("teamColors: ", teamColors("Brooklyn Nets"))
// console.log("teamNames: ", teamNames())
// console.log("playerNumbers: ", playerNumbers("Brooklyn Nets"))
// console.log(playerStats("Jason Terry"))
// console.log("bigShoeRebounds: ", bigShoeRebounds())

// onsole.log(gameObject().home.colors)