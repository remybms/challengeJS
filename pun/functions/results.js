export function setResult(noPoints, fullPoints, points){
    if (points == 0){
        noPoints(true)
    } else if (points == 9){
        fullPoints(true)
    }
}