
//Standard Modular Pattern !!!


//Defining control which represents Modular pattern

const dataToHeading = (()=>{
    //here we have to define private members and function 
    let data = " Welcome to My Javascript "; // private vriable

    const passData = ()=>{

        document.getElementById("datafromAppjs").textContent = data;
    }

    // whatever we want to expose as public then we have to utilize return block
    return{
        setDataToHeading : ()=>{
            passData();
        }
    }
})();


dataToHeading.setDataToHeading()


//Revealing Modular pattern !!!



const feedbackSys =( ()=>{
 const feedback = []
 
function addFeddback(feedbackFromUser){
    feedback.push(feedbackFromUser)
}
function getFeedback(id){
    return feedback.find((fdback)=>{
        return fdback.id === id;
    })
}

function getAllFeedback(){
    return feedback.forEach(feed=>{
        console.log(feed.feedback + " HAHAHAH")
    })
}

 // this is where you can reveal properties by giving same name
return {
    addFeddback : addFeddback,
    getFeedback : getFeedback,
    getAllFeedback : getAllFeedback
}
})();

feedbackSys.addFeddback({
    id : 12,
    feedback : "Not Good Service 3 * "
})
feedbackSys.addFeddback({
    id : 13,
    feedback : "Good Service 5 * "
})
feedbackSys.addFeddback({
    id : 3,
    feedback : "worse  Service 1 * "
})
console.log(feedbackSys.getFeedback(3))


feedbackSys.getAllFeedback();
