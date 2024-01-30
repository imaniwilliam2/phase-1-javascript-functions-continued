function saturdayFun(activity){
   if (activity) {
    return `This Saturday, I want to ${activity}!`
   } else {
    return "This Saturday, I want to roller-skate!"
   }
}
saturdayFun("bathe my dog")

function mondayWork (location) {
    if (location){
        return  `This Monday, I will ${location}.`
    } else {
        return "This Monday, I will go to the office."
    }
}

function wrapAdjective (wrap = "*") {
    return function innerResult (adj = "special") {
        return `You are ${wrap}${adj}${wrap}!`
    }

}