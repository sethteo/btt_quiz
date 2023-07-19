const questions = [
    {
        question: "On seeing this sign, you",
        image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689748509/btt_test_3/Screenshot_2023-07-19_at_2.32.23_PM_b64sat.png",
        answers: [
          { text: "Must turn right ahead.", correct: true },
          { text: "May turn left or go straight if you wish.", correct: false },
          { text: "Must make a U-turn as the road ends on the right.", correct: false }
        ]
      },
      {
        question: "This sign means",
        image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689748509/btt_test_3/Screenshot_2023-07-19_at_2.32.41_PM_jaeggk.png",
        answers: [
          { text: "There is a sharp bend on the left - drive carefully.", correct: false },
          { text: "You cannot go straight or turn right.", correct: false },
          { text: "Keep to the left side of the road.", correct: true }
        ]
      },
      {
        question: "This sign means",
        image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689748508/btt_test_3/Screenshot_2023-07-19_at_2.32.47_PM_nvkt84.png",
        answers: [
          { text: "'No Waiting' for lorries.", correct: false },
          { text: "'No Parking' for lorries.", correct: false },
          { text: "'No Entry' for lorries.", correct: true }
        ]
      },
      {
        question: "This sign means",
        image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689748509/btt_test_3/Screenshot_2023-07-19_at_2.32.51_PM_lnnfa6.png",
        answers: [
          { text: "You can wait for a short while if you are loading or unloading.", correct: false },
          { text: "You cannot wait but you can stop to let down or pick up passengers.", correct: true },
          { text: "You cannot stop even to let down or pick up passengers.", correct: false }
        ]
      },
      {
        question: "This sign means",
        image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689748508/btt_test_3/Screenshot_2023-07-19_at_2.32.57_PM_fnakkj.png",
        answers: [
          { text: "You are about to pass an MRT line.", correct: false },
          { text: "You are about to pass an overhead bridge.", correct: false },
          { text: "You are about to enter the expressway.", correct: true }
        ]
      },
      {
        question: "When you see this sign, you should",
        image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689748508/btt_test_3/Screenshot_2023-07-19_at_2.33.03_PM_hc0laf.png",
        answers: [
          { text: "Switch lane and drive faster to avoid obstruction.", correct: false },
          { text: "Slow down and beware of laborers in front.", correct: true },
          { text: "Slow down and beware of open-air hawker stalls.", correct: false }
        ]
      },
      {
        question: "This sign indicates that",
        image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689748508/btt_test_3/Screenshot_2023-07-19_at_2.33.08_PM_lbi9n6.png",
        answers: [
          { text: "Driver must slow down and look out for traffic merging from the right or left.", correct: false },
          { text: "Driver must look out for traffic from the right and left at cross-road in front.", correct: false },
          { text: "Driver must reduce speed and drive carefully to prevent skidding.", correct: true }
        ]
      },
      {
        question: "On seeing this sign, you should",
        image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689748508/btt_test_3/Screenshot_2023-07-19_at_2.33.13_PM_swrioz.png",
        answers: [
          { text: "Slow down, do not overtake because there is a heap of sand ahead.", correct: false },
          { text: "Slow down, do not overtake because there is a road hump ahead.", correct: true },
          { text: "Slow down, do not overtake because there is a low hill ahead.", correct: false }
        ]
      },
      {
        question: "When you see this sign, you should",
        image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689748508/btt_test_3/Screenshot_2023-07-19_at_2.33.18_PM_qdaznu.png",
        answers: [
          { text: "Overtake slow-moving vehicles so that you will not lose speed.", correct: false },
          { text: "Overtake slow-moving vehicles and build up speed to go up the slope.", correct: false },
          { text: "Keep left, do not overtake, beware of oncoming traffic.", correct: true }
        ]
      },
      {
        question: "This sign means that",
        image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689748508/btt_test_3/Screenshot_2023-07-19_at_2.33.23_PM_ptgmcw.png",
        answers: [
          { text: "No vehicle is allowed to remain in the yellow box under any circumstances.", correct: false },
          { text: "Veniche vehicles are allowed to remain in the yellow box if they do not obstruct other vehicles going straight.", correct: true },
          { text: "Other vehicles are allowed to remain in the yellow box if they do not obstruct other vehicles.", correct: false }
        ]
      },
      {
        question: "When you see this traffic sign, you should drive",
        image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689748508/btt_test_3/Screenshot_2023-07-19_at_2.33.29_PM_tpdjyf.png",
        answers: [
          { text: "Within the speed limit of the road.", correct: true },
          { text: "At the maximum speed limit of the vehicle.", correct: false },
          { text: "Very slowly.", correct: false }
        ]
      },
      {
        question: "This sign means",
        image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689748508/btt_test_3/Screenshot_2023-07-19_at_2.33.38_PM_seqqpk.png",
        answers: [
          { text: "No entry to fire engines.", correct: false },
          { text: "Explosive area ahead.", correct: false },
          { text: "No entry to vehicles carrying dangerous goods.", correct: true }
        ]
      },
      {
        question: "Flashing amber light signal before the tunnel warns drivers",
        image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689748507/btt_test_3/Screenshot_2023-07-19_at_2.33.43_PM_gzbcwe.png",
        answers: [
          { text: "That the said lane is closed to traffic.", correct: false },
          { text: "To slow down and be prepared to change lane (possible obstruction ahead).", correct: true },
          { text: "That the lights are out of order.", correct: false }
        ]
      },
      //missing q14 and q15
      {
        question: "A broken white line on the centre of the road as shown in this diagram means",
        image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689748509/btt_test_3/Screenshot_2023-07-19_at_2.33.51_PM_xwmxxt.png",
        answers: [
          { text: "The area is dangerous, you must not overtake.", correct: false },
          { text: "Keep to the left of this line.", correct: true },
          { text: "Parking is not allowed on either side of the road.", correct: false }
        ]
      },
      {
        question: "The single continuous white line along the centre of a two-way road means",
        image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689748509/btt_test_3/Screenshot_2023-07-19_at_2.33.58_PM_g0csy9.png",
        answers: [
          { text: "No Parking on both sides of the road during weekdays.", correct: false },
          { text: "No Parking on both sides of the road between 7.00 am and 7.00 pm.", correct: false },
          { text: "No Parking on both sides of the road at all times.", correct: true }
        ]
      },
      {
        question: "At traffic light junctions, amber lights mean",
        image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689748507/btt_test_3/Screenshot_2023-07-19_at_2.34.04_PM_bduk9u.png",
        answers: [
          { text: "Prepare to go.", correct: false },
          { text: "Go if the way is clear.", correct: false },
          { text: "Stop before the stop-line.", correct: true }
        ]
      },
      {
        question: "What does this traffic light signal indicate?",
        image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689748507/btt_test_3/Screenshot_2023-07-19_at_2.34.15_PM_iy9v9a.png",
        answers: [
          { text: "Only vehicles turning right can proceed.", correct: false },
          { text: "Vehicles may go straight and turn right.", correct: true },
          { text: "All vehicles must turn right.", correct: false }
        ]
      },
      {
        question: "The light turns red as you approach a traffic junction, when stopping you should",
        image: "",
        answers: [
          { text: "Depress the brake and the clutch pedals simultaneously.", correct: false },
          { text: "Shift to neutral and step on the brakes.", correct: false },
          { text: "Brake firmly and depress the clutch pedal as the car comes to a stop.", correct: true }
        ]
      },
      {
        question: "When approaching a junction and the traffic lights signal change from green to amber, you should",
        image: "",
        answers: [
          { text: "Stop at the stop line unless you are so close that sudden or sharp braking might cause an accident.", correct: true },
          { text: "Speed up to clear the intersection.", correct: false },
          { text: "Stop only if a red light camera is in use.", correct: false }
        ]
      },
      {
        question: "The signal given by the Policeman in the picture means",
        image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689748507/btt_test_3/Screenshot_2023-07-19_at_2.34.22_PM_bzjk32.png",
        answers: [
          { text: "Vehicles approaching from his left and right to stop.", correct: false },
          { text: "Vehicles approaching from in front and behind him to stop.", correct: true },
          { text: "Vehicles approaching from all directions to stop.", correct: false }
        ]
      },
      //missing q23 and q24
      {
        question: "If the car you are overtaking is drifting in its lane, you should",
        image: "",
        answers: [
          { text: "Use your horn to warn him.", correct: true },
          { text: "Signal him with your hand.", correct: false },
          { text: "Overtake it quickly.", correct: false }
        ]
      },
      {
        question: "To drive in a way where other drivers will not find it necessary to overtake you, you should",
        image: "",
        answers: [
          { text: "Drive on the extreme right lane all the time.", correct: false },
          { text: "Always drive at a speed that matches the traffic flow.", correct: true },
          { text: "Drive at the maximum speed limit of the road all the time.", correct: false }
        ]
      },
      {
        question: "Which car has the right of way?",
        image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689748507/btt_test_3/Screenshot_2023-07-19_at_2.34.31_PM_phriid.png",
        answers: [
          { text: "Car A.", correct: true },
          { text: "Car M.", correct: false },
          { text: "Either car A or M.", correct: false }
        ]
      },
      {
        question: "In traffic hold-ups, you should",
        image: "",
        answers: [
          { text: "Try to get ahead of others by overtaking them on the right.", correct: false },
          { text: "Try to get ahead of others by overtaking them on the left.", correct: false },
          { text: "Stay in queue and follow the traffic flow.", correct: true }
        ]
      },
      {
        question: "When you see a vehicle slowing down before a Zebra Crossing, you should",
        image: "",
        answers: [
          { text: "Slow down and be prepared to stop.", correct: true },
          { text: "Sound the horn before passing the slow-moving vehicle.", correct: false },
          { text: "Maintain your speed.", correct: false }
        ]
      },
      {
        question: "Road hogging",
        image: "",
        answers: [
          { text: "Allows others to overtake safely.", correct: false },
          { text: "Holds up the flow of traffic.", correct: true },
          { text: "Reduces road accidents.", correct: false }
        ]
      },
      {
        question: "You want to reverse into a side road. You are not sure that the area behind your vehicle is clear. What should you do?",
        image: "",
        answers: [
          { text: "Carry on, assuming it is clear.", correct: false },
          { text: "Look through the rear window only.", correct: false },
          { text: "Get out and check.", correct: true }
        ]
      },
      {
        question: "Before entering a roundabout, you should",
        image: "",
        answers: [
          { text: "Give way to traffic on your right.", correct: true },
          { text: "Stop first before entering.", correct: false },
          { text: "Accelerate to merge smoothly with traffic already in the roundabout.", correct: false }
        ]
      },
      {
        question: "Before moving off, you should",
        image: "",
        answers: [
          { text: "Use your mirrors and signal if necessary.", correct: false },
          { text: "Use your mirrors, check your blind spot, and signal.", correct: true },
          { text: "Signal and move.", correct: false }
        ]
      },
      {
        question: "Drinking and driving may cause",
        image: "",
        answers: [
          { text: "Increase confidence.", correct: false },
          { text: "Loss of proper control of the vehicle.", correct: true },
          { text: "Greater awareness of danger.", correct: false }
        ]
      },
      {
        question: "Generally, a small amount of alcohol can make you less safe on the road.",
        image: "",
        answers: [
          { text: "True.", correct: true },
          { text: "False.", correct: false },
          { text: "Not true, if you were an experienced driver.", correct: false }
        ]
      },
      {
        question: "How does the consumption of alcohol affect a person's driving?",
        image: "",
        answers: [
          { text: "It enables the driver to make better judgments.", correct: false },
          { text: "It enables the driver to have a better vision of the road.", correct: false },
          { text: "It reduces the driver's reaction.", correct: true }
        ]
      },
      {
        question: "In this scenario, Car A should",
        image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689748507/btt_test_3/Screenshot_2023-07-19_at_2.34.41_PM_b0nkiu.png",
        answers: [
          { text: "Quickly overtake the lorry before the junction.", correct: false },
          { text: "Slow down and let the lorry complete the turn.", correct: true },
          { text: "Overtake the lorry on the left.", correct: false }
        ]
      },
      {
        question: "Which car (X or Y) should exit at points C and D?",
        image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689748507/btt_test_3/Screenshot_2023-07-19_at_2.34.46_PM_k1usle.png",
        answers: [
          { text: "Car X.", correct: false },
          { text: "Car Y.", correct: true },
          { text: "Both vehicles.", correct: false }
        ]
      },
      {
        question: "'Blind spots' of a vehicle are an area which cannot be viewed by",
        image: "",
        answers: [
          { text: "The rear-view mirror.", correct: false },
          { text: "Left and right wing mirrors.", correct: false },
          { text: "Both A and B.", correct: true }
        ]
      },
      {
        question: "The Two-second Rule is a simple check to ensure",
        image: "",
        answers: [
          { text: "A safe distance for you to move off from a junction.", correct: false },
          { text: "A safe distance between your vehicle and the vehicle in front.", correct: true },
          { text: "A safe length of time to signal before your maneuver.", correct: false }
        ]
      },
      {
        question: "When you are following another vehicle on a wet road, you should keep",
        image: "",
        answers: [
          { text: "2 seconds behind.", correct: false },
          { text: "More than 2 seconds behind.", correct: true },
          { text: "Less than 2 seconds behind.", correct: false }
        ]
      },
      {
        question: "If a fire engine behind you sounds the siren, you should",
        image: "",
        answers: [
          { text: "Continue at normal speed.", correct: false },
          { text: "Move to the side, slow down, or stop if necessary.", correct: true },
          { text: "Increase your speed and move to the side.", correct: false }
        ]
      },
      {
        question: "On a one-way street, you hear the siren of an emergency vehicle behind you, you should",
        image: "",
        answers: [
          { text: "Give way by moving to the left only.", correct: false },
          { text: "Give way by moving to the left or right.", correct: true },
          { text: "Stop immediately.", correct: false }
        ]
      },
      {
        question: "How should you deal with floods?",
        image: "",
        answers: [
          { text: "Drive through as fast as possible to avoid stopping.", correct: false },
          { text: "Drive through slowly in 1st gear.", correct: true },
          { text: "Drive through in the highest gear.", correct: false }
        ]
      },
      {
        question: "To maintain good lane discipline, you should",
        image: "",
        answers: [
          { text: "Form up correctly into the intended lane before reaching the junction.", correct: true },
          { text: "Drive between lanes so that you can switch lanes easily.", correct: false },
          { text: "Follow closely to the vehicle in front.", correct: false }
        ]
      },
      {
        question: "In which situation should you switch on the high beam?",
        image: "",
        answers: [
          { text: "When driving on a bumpy road.", correct: false },
          { text: "When there are oncoming vehicles.", correct: false },
          { text: "When the road is poorly lighted and there is no traffic ahead.", correct: true }
        ]
      },
      {
        question: "On a sharp bend at night, to avoid dazzling oncoming traffic, you should",
        image: "",
        answers: [
          { text: "Switch off your lights.", correct: false },
          { text: "Dip your headlights.", correct: true },
          { text: "Switch on high beam.", correct: false }
        ]
      },
      {
        question: "You may drive along the right-most lane when",
        image: "",
        answers: [
          { text: "You are traveling at the speed limits.", correct: false },
          { text: "The traffic is not heavy.", correct: false },
          { text: "You are overtaking another vehicle.", correct: true }
        ]
      },
      {
        question: "You are not allowed to drive into a bus lane on Monday to Saturday from",
        image: "",
        answers: [
          { text: "7.30 am to 9.30 am.", correct: true },
          { text: "7.00 am to 9.30 am.", correct: false },
          { text: "7.15 am to 10.00 am.", correct: false }
        ]
      },
      {
        question: "Fastening a seat belt can",
        image: "",
        answers: [
          { text: "Reduce the chances of a collision.", correct: false },
          { text: "Reduce the chances of being seriously injured or killed.", correct: true },
          { text: "Control your body movement when you negotiate a sharp bend.", correct: false }
        ]
      }
]

export {questions};