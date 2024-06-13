"use strict"

console.log("hey good lookin'!");

window.onload = () => {



    displayResults();

}

let displayResults = () => {

    
    // let studentResults = document.querySelector("#studentResults");
    // let InstructorResults = document.querySelector("#instructorResults");

    if (localStorage.RadioValue === "student") {
        document.querySelector("#studentResults").innerHTML = `
        Welcome Student! ${localStorage.username} <br>
        Welcome to your journey of learning and growth! As you embark on this educational adventure,
         remember that every challenge you face is an opportunity to expand your knowledge and skills. 
         Stay curious, stay determined, and never hesitate to ask questions. Your journey is yours to shape, 
         and I'm here to support you every step of the way. Let's make this journey one filled with discovery, achievement, and fulfillment!.`
    } else {
        document.querySelector("#instructorResults").innerHTML = `
        Welcome Instructor! ${localStorage.username} <br>
        Your dedication to guiding and inspiring the minds of tomorrow is truly commendable.
         As you step into your role, remember the profound impact you have on shaping the future.
          Your passion, knowledge, and commitment are the building blocks upon which students will
           construct their understanding of the world. Embrace innovation, foster collaboration, and
            cultivate an environment where curiosity thrives. Together, let us empower and uplift the
             next generation of thinkers, creators, and leaders. Your journey as an instructor is instrumental 
             in shaping a brighter tomorrow.`
    }


}