scoops = 10

while (scoops >= 0){
    console.log("Bạn ăn một viên.")
    console.log("Còn " + scoops + " viên kem.")
    if (scoops <= 5 && scoops > 3){
        console.log("Ăn nhanh lên!")
    }
    else if (scoops == 3){
        console.log("Kem sắp hết!")
    }
    else if (scoops == 2){
        console.log("Lần một!")
    }
    else if (scoops == 1){
        console.log("Lần hai!")
    }
    else if (scoops == 0){
        console.log("Hết!!!!")
    }
    else {
        console.log("Còn nhiều lắm, ăn thôi nào!")
    }
    scoops -= 1
}