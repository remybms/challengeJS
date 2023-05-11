export function setResult(noPoints, fullPoints, points, src){
    if (points == 0){
        noPoints(true)
        src('/sound/ending_game_0points.mp3')
    } else if (points == 9){
        fullPoints(true)
        src('/sound/ending_game_max_points.mp3')
    } else {
        src('/sound/ending_game.mp3')
    }
}