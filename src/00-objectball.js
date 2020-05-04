console.log("00-objectball.js Loaded")

function gameObject() {

    const data = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brooke Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }

    return data
}

function homeTeamName() {
    return gameObject().home.teamName
}

function awayTeamName() {
    return gameObject().away.teamName
}

// numPoints scored functionality starts here

function getPlayers() {
    const homePlayers = gameObject().home.players // {}
    const awayPlayers = gameObject().away.players // {}
    return Object.assign({}, homePlayers, awayPlayers)

    const someArray = [1, 2]
    const otherArray = [3, 4]
    return [...someArray, ...otherArray]

    return { ...homePlayers, ...awayPlayers }
    //This is the same as line 132 above.
}

function getPlayer(playerName) {
    const players = getPlayers()
    return players[playerName]
}

function numPointsScored(playerName) {
    return getPlayer(playerName).points
}

function shoeSize(playerName) {
    return getPlayer(playerName).shoe
}

// function getTeamColors(teamName) {
//     // How we can do it using if statements

//     // if (gameObject().home.teamName == team)
//     //     return gameObject().home.colors
//     // else if (gameObject().away.teamName == team)
//     //     return gameObject().away.colors
//     // else console.log("Team can not be found")

//     //Or written as a conditional ternary

//     // return gameObject().home.teamName == teamName ? gameObject().home.colors
//     //     : gameObject().away.teamName == teamName ? gameObject().away.colors
//     //         : console.log("Team can not be found")
// }

// Or a more functional programming approach would be:

function getTeamByName(teamName) {
    return gameObject().home.teamName == teamName ? gameObject().home
        : gameObject().away.teamName == teamName ? gameObject().away
            : console.log("Team can not be found")
}

function getTeamColors(teamName) {
    return getTeamByName(teamName).colors
}



function getTeamNames() {
    names = []
    names.push(homeTeamName(), awayTeamName())
    return names
}

function getTeamsPlayers(teamName) {
    return getTeamByName(teamName).players
}

function playerNumbers(teamName) {
    let jerseyNumbers = []
    let players = getTeamsPlayers(teamName)

    for (let playerKey in players) {
        let playerData = players[playerKey]
        jerseyNumbers.push(playerData.number)
        // debugger
    }
    return jerseyNumbers
}

function playerStats(playerName) {
    players = getPlayers()
    return players[playerName]
}

function playerWithLargestShoe() {

}
