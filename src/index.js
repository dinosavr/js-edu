/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      const TIMETOMASTER = 800;
      const TIMETOBASIC = 500;

      let fullTime;
      let countOfWeeks = 0;

      console.log("knowsProgramming = " + knowsProgramming);
      if(knowsProgramming) fullTime = TIMETOMASTER;
      else fullTime = TIMETOMASTER+TIMETOBASIC;
    
      // console.log("Config = " + config);

      console.log("FOCUS = " + focus);

/*       for (const [key, value] of Object.entries(config)) {
        console.log(key + " = " + value);
         countOfAffairs = countOfAffairs + value;
      } */
      
      console.log("FullTime = " + fullTime);
      console.log("Config[focus] = " + config[focus]);
      countOfWeeks = Math.ceil(fullTime/config[focus]);
      console.log(countOfWeeks);
      // countOfWeeks = 80;

      return countOfWeeks;
  };
  