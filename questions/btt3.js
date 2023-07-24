const quiz3_questions = [
  {question: "This sign means that",
    image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689950722/btt_test_2/Screenshot_2023-07-19_at_7.49.04_PM_tpbkfx.png",
    answers: [
      { text: "You must keep left to allow other vehicles to overtake.", correct: false },
      { text: "You must turn left.", correct: true },
      { text: "You must look out for traffic from the right before proceeding straight ahead.", correct: false }
    ]
  },
  {
    question: "This sign means",
    image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689950721/btt_test_2/Screenshot_2023-07-19_at_7.49.10_PM_lzu70b.png",
    answers: [
      { text: "No waiting.", correct: false },
      { text: "No entry.", correct: true },
      { text: "No stopping.", correct: false }
    ]
  },
  {
    question: "This sign means",
    image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689950722/btt_test_2/Screenshot_2023-07-19_at_7.49.15_PM_g37cjn.png",
    answers: [
      { text: "You cannot drive slower than 50 km/h.", correct: false },
      { text: "You cannot drive beyond 50 km/h.", correct: true },
      { text: "You must maintain your speed at 50 km/h.", correct: false }
    ]
  },
  {
    question: "When you see this sign, you should",
    image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689950722/btt_test_2/Screenshot_2023-07-19_at_7.49.20_PM_eosbyb.png",
    answers: [
      { text: "Slow down and beware of traffic from the left.", correct: true },
      { text: "Not slow down as you have the right of way.", correct: false },
      { text: "Stop and give way to traffic from the right and left.", correct: false }
    ]
  },
  {
    question: "When you see this sign, you should",
    image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689950722/btt_test_2/Screenshot_2023-07-19_at_7.49.25_PM_zcaca0.png",
    answers: [
      { text: "Slow down and keep left as you are approaching a right bend.", correct: true },
      { text: "Slow down and give way to oncoming traffic before turning right.", correct: false },
      { text: "Slow down and get ready to drive up a steep slope ahead.", correct: false }
    ]
  },
  {
    question: "When you see this sign, you should",
    image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689950721/btt_test_2/Screenshot_2023-07-19_at_7.49.29_PM_hgxkqw.png",
    answers: [
      { text: "Not turn left or right but proceed in the directions as shown.", correct: false },
      { text: "Make a U-turn ahead.", correct: false },
      { text: "Keep left and beware of oncoming traffic.", correct: true }
    ]
  },
  {
    question: "This sign indicates",
    image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689950721/btt_test_2/Screenshot_2023-07-19_at_7.49.34_PM_bqbufg.png",
    answers: [
      { text: "Two-way traffic across a one-way carriageway.", correct: true },
      { text: "Two-way traffic across a two-way carriageway.", correct: false },
      { text: "You must turn right or left.", correct: false }
    ]
  },
  {
    question: "This sign means",
    image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689950722/btt_test_2/Screenshot_2023-07-19_at_7.49.38_PM_qb62hg.png",
    answers: [
      { text: "Road closed on one side - slow down, stop and make a U-turn.", correct: false },
      { text: "Road narrows on one side - slow down and keep left, do not make a U-turn.", correct: true },
      { text: "Lanes merging - give way to vehicles in the right lane.", correct: false }
    ]
  },
  {
    question: "This sign applies to",
    image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689950722/btt_test_2/Screenshot_2023-07-19_at_7.49.43_PM_h73nyg.png",
    answers: [
      { text: "All vehicles.", correct: true },
      { text: "Motor-cars only.", correct: false },
      { text: "Motor-cycles only.", correct: false }
    ]
  },
  {
    question: "This sign means that the road on the right is",
    image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689950713/btt_test_2/Screenshot_2023-07-21_at_10.43.00_PM_tembtm.png",
    answers: [
      { text: "Leading to a military restricted area, you cannot enter.", correct: false },
      { text: "Closed to all traffic, you cannot enter.", correct: false },
      { text: "A dead end road, you may enter if you wish.", correct: true }
    ]
  },
  {
    question: "This sign means that",
    image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689950713/btt_test_2/Screenshot_2023-07-21_at_10.43.07_PM_j4zm8d.png",
    answers: [
      { text: "There is an army barrack ahead, drive in the direction as directed.", correct: false },
      { text: "There is a barrier ahead, slow down and drive carefully.", correct: true },
      { text: "The road is closed to traffic.", correct: false }
    ]
  },
  {
    question: "This sign means",
    image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689950713/btt_test_2/Screenshot_2023-07-21_at_10.43.12_PM_gz7x9w.png",
    answers: [
      { text: "Tunnel ahead.", correct: true },
      { text: "Expressway ahead.", correct: false },
      { text: "A rear view mirror.", correct: false }
    ]
  },
  {
    question: "When you see this sign, you should",
    image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689950713/btt_test_2/Screenshot_2023-07-21_at_10.43.17_PM_tgxwbi.png",
    answers: [
      { text: "Should slow down and be prepared to stop for pedestrians to cross the road.", correct: true },
      { text: "Need not slow down if there is no pedestrian at the Crossing.", correct: false },
      { text: "Should sound your horn to warn the pedestrians of your approach.", correct: false }
    ]
  },
  {
    question: "These arrows marked on the road indicate that",
    image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689950712/btt_test_2/Screenshot_2023-07-21_at_10.43.22_PM_lgszk7.png",
    answers: [
      { text: "Traffic from the two lanes will merge into a single lane ahead.", correct: true },
      { text: "All vehicles must either turn right or left ahead.", correct: false },
      { text: "There are two bends ahead, one to the right and another to the left.", correct: false }
    ]
  },
  {
    question: "When you see these zig-zag lines by the side of a road, you should",
    image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689950712/btt_test_2/Screenshot_2023-07-21_at_10.43.30_PM_vfuwff.png",
    answers: [
      { text: "Slow down and keep left because the road ahead is narrow and winding.", correct: false },
      { text: "Slow down and be prepared to stop for pedestrians to cross the road at the Crossing.", correct: true },
      { text: "Drive carefully as the road is leading to an underground bomb shelter.", correct: false }
    ]
  },
  {
    question: "This traffic light signal means",
    image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689950712/btt_test_2/Screenshot_2023-07-21_at_10.43.35_PM_wlssa3.png",
    answers: [
      { text: "All vehicles must get ready to stop.", correct: false },
      { text: "Vehicles turning right must get ready to stop.", correct: true },
      { text: "'Go' for left turn vehicles only.", correct: false }
    ]
  },
  {
    question: "This traffic light signal means",
    image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689950711/btt_test_2/Screenshot_2023-07-21_at_10.43.41_PM_jpndvk.png",
    answers: [
      { text: "All turning vehicles must get ready to stop.", correct: false },
      { text: "All vehicles must stop.", correct: false },
      { text: "Vehicles turning right must stop.", correct: true }
    ]
  },
  {
    question: "When you see green traffic light signal from a distance, you should",
    image: "",
    answers: [
      { text: "Speed up.", correct: false },
      { text: "Slow down.", correct: true },
      { text: "Carry on at the same speed.", correct: false }
    ]
  },
  {
    question: "When approaching a traffic light junction with the amber light flashing, you should",
    image: "",
    answers: [
      { text: "Slow down and proceed across the junction only when it is safe to do so.", correct: true },
      { text: "Speed up in order to pass the junction before the light changes.", correct: false },
      { text: "Stop at the stop-line and wait for the light to change.", correct: false }
    ]
  },
  {
    question: "The signal given by the policeman in the picture means",
    image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689950712/btt_test_2/Screenshot_2023-07-21_at_10.43.49_PM_zsfr0i.png",
    answers: [
      { text: "All vehicles must stop.", correct: true },
      { text: "Vehicles approaching policeman from in front and behind him must stop.", correct: false },
      { text: "Vehicles approaching from his right and left to stop.", correct: false }
    ]
  },
  {
    question: "This Police officer is signalling",
    image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689950711/btt_test_2/Screenshot_2023-07-21_at_10.43.56_PM_audkbc.png",
    answers: [
      { text: "Drivers from his left, front and rear to go.", correct: false },
      { text: "Drivers from his left, front and rear to stop.", correct: false },
      { text: "Drivers from his right, front and behind to stop.", correct: true }
    ]
  },
  {
    question: "When a driver signals in this manner, it means",
    image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689950711/btt_test_2/Screenshot_2023-07-21_at_10.44.01_PM_mh0mcp.png",
    answers: [
      { text: "He intends to make a U-turn.", correct: false },
      { text: "He intends to go around the round-about.", correct: false },
      { text: "He intends to move to the left or turn to the left.", correct: true }
    ]
  },
  {
    question: "You may overtake another vehicle on the left",
    image: "",
    answers: [
      { text: "If it is a heavy vehicle.", correct: false },
      { text: "If the driver in front signals his intention to turn right.", correct: true },
      { text: "If you are certain that the vehicle would not change direction.", correct: false }
    ]
  },
  {
    question: "When should you start to keep left after overtaking?",
    image: "",
    answers: [
      { text: "As soon as you are ahead of the overtaken vehicle.", correct: false },
      { text: "When you can see the overtaken vehicle in your left wing mirror.", correct: false },
      { text: "When you can see the overtaken vehicle in your rear view mirror inside the cabin.", correct: true }
    ]
  },
  {
    question: "This diagram shows Cars A, B and C turning in the directions indicated at an uncontrolled junction. Which car must give way?",
    image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689950711/btt_test_2/Screenshot_2023-07-21_at_10.44.08_PM_ho0udk.png",
    answers: [
      { text: "Car A must give way to cars B and C.", correct: true },
      { text: "Car B must give way to cars A and C.", correct: false },
      { text: "Car C must give way to cars A and B.", correct: false }
    ]
  },
  {
    question: "This diagram shows Cars A, B and C going in the directions indicated at an uncontrolled junction. Which cars should give way?",
    image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689950711/btt_test_2/Screenshot_2023-07-21_at_10.44.15_PM_irtpkl.png",
    answers: [
      { text: "Cars A and C should give way to Car B.", correct: true },
      { text: "Cars A and B should give way to Car C.", correct: false },
      { text: "Cars B and C should give way to Car A.", correct: false }
    ]
  },
  {
    question: "Driving with a 'bald' tyre is dangerous because",
    image: "",
    answers: [
      { text: "It skids more easily.", correct: false },
      { text: "There is greater probability of punctures.", correct: false },
      { text: "Both answers.", correct: true }
    ]
  },
  {
    question: "When you are driving along, you must check your rear view mirror once every",
    image: "",
    answers: [
      { text: "1 to 2 seconds.", correct: false },
      { text: "5 to 10 seconds.", correct: true },
      { text: "20 to 30 seconds.", correct: false }
    ]
  },
  {
    question: "Reversing from a side road into a main road is",
    image: "",
    answers: [
      { text: "Allowed if there is no vehicle around.", correct: false },
      { text: "Not allowed for it is unsafe and could cause road accident.", correct: true },
      { text: "Allowed during the daytime only.", correct: false }
    ]
  },
  {
    question: "Crossing the double continuous white lines along the centre of the road",
    image: "",
    answers: [
      { text: "Is an offence because it is unsafe to do so.", correct: true },
      { text: "Is not an offence if you are overtaking another vehicle.", correct: false },
      { text: "Is not an offence if you do not cause inconvenience to others.", correct: false }
    ]
  },
  {
    question: "Your reaction time could be affected when",
    image: "",
    answers: [
      { text: "You are tired.", correct: true },
      { text: "Your vehicle is old.", correct: false },
      { text: "The traffic is heavy.", correct: false }
    ]
  },
  {
    question: "How does alcohol affect you?",
    image: "",
    answers: [
      { text: "It reduces your concentration.", correct: true },
      { text: "It increases your awareness.", correct: false },
      { text: "It improves your co-ordination.", correct: false }
    ]
  },
  {
    question: "Drink driving",
    image: "",
    answers: [
      { text: "Will not affect your reaction time.", correct: false },
      { text: "May affect your reaction time.", correct: true },
      { text: "May cause you to react faster.", correct: false }
    ]
  },
  {
    question: "Which of the following statements on alcohol and driving is true?",
    image: "",
    answers: [
      { text: "It is safe to drive as long as you think you are not drunk.", correct: false },
      { text: "It is unsafe to drive after consuming alcohol.", correct: true },
      { text: "It is safe to drive one hour after having the last drink.", correct: false }
    ]
  },
  {
    question: "A person will be disqualified from driving if he is caught",
    image: "",
    answers: [
      { text: "Driving with a blood alcohol concentration over 80 mg of alcohol/100ml of blood.", correct: true },
      { text: "Failing to obey a 'Stop' traffic sign.", correct: false },
      { text: "Failing to give way to an ambulance with its siren on.", correct: false }
    ]
  },
  {
    question: "When passing the stationary bus at the bus-stop, you should",
    image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689950710/btt_test_2/Screenshot_2023-07-21_at_10.44.25_PM_l7cwb3.png",
    answers: [
      { text: "Sound the horn to warn the bus driver of your presence.", correct: false },
      { text: "Speed up to overtake the bus before it moves off.", correct: false },
      { text: "Slow down and be ready to stop for pedestrians who may cross the road in front of the bus.", correct: true }
    ]
  },
  {
    question: "When a car is stopping in front of a zebra crossing, you should",
    image: "https://res.cloudinary.com/dzh7rqxop/image/upload/v1689950714/btt_test_2/Screenshot_2023-07-21_at_10.44.30_PM_arokoy.png",
    answers: [
      { text: "Quickly pass the vehicle before any pedestrians come along.", correct: false },
      { text: "Sound the horn to warn pedestrians.", correct: false },
      { text: "Slow down and be ready to stop for pedestrians to cross the road.", correct: true }
    ]
  },
  {
    question: "To check 'blind spot' when driving, you must",
    image: "",
    answers: [
      { text: "Turn your head and look over your shoulder.", correct: true },
      { text: "Turn your head and look into the wing mirrors.", correct: false },
      { text: "Turn your head and look into the rear-view mirror.", correct: false }
    ]
  },
  {
    question: "The 'Two-second Rule' is a sufficient distance between your vehicle and the car in front when road condition is",
    image: "",
    answers: [
      { text: "Wet.", correct: false },
      { text: "Good.", correct: true },
      { text: "Hazy.", correct: false }
    ]
  },
  {
    question: "When you hear the siren of an emergency vehicle, you should",
    image: "",
    answers: [
      { text: "Stop immediately where you are in order to make way.", correct: false },
      { text: "Pull over to the left or right side of the road.", correct: true },
      { text: "Sound your horn to warn the front vehicles to speed up.", correct: false }
    ]
  },
  {
    question: "When you hear the siren of an emergency vehicle but are not sure where it is coming from, you should",
    image: "",
    answers: [
      { text: "Continue to drive at the same speed.", correct: false },
      { text: "Move to the side and stop if necessary.", correct: true },
      { text: "Drive faster so as not to obstruct the emergency vehicle.", correct: false }
    ]
  },
  {
    question: "After driving through flood the brakes may malfunction. In order to correct this, you must",
    image: "",
    answers: [
      { text: "Stop the vehicle on a slope to allow water to flow out from the brakes.", correct: false },
      { text: "Pump the brake pedal repeatedly to dry the brakes.", correct: true },
      { text: "Drive at normal speed to spin-dry the brakes.", correct: false }
    ]
  },
  {
    question: "On a two-lane carriageway, you should",
    image: "",
    answers: [
      { text: "Keep to the left lane.", correct: true },
      { text: "Keep to the outer lane.", correct: false },
      { text: "Not overtake another vehicle.", correct: false }
    ]
  },
  {
    question: "All drivers are required by law to switch on the vehicle's headlights whilst driving between",
    image: "",
    answers: [
      { text: "7.00 pm and 7.00 am.", correct: true },
      { text: "7.15 pm and 7.15 am.", correct: false },
      { text: "7.30 pm and 7.30 am.", correct: false }
    ]
  },
  {
    question: "Switching on the headlights whilst driving in heavy rain during the daytime",
    image: "",
    answers: [
      { text: "Is advisable because you can be readily seen by others.", correct: true },
      { text: "Is not advisable because it will shorten the battery life.", correct: false },
      { text: "Is not advisable because the rainwater will reflect the light.", correct: false }
    ]
  },
  {
    question: "At night, when approaching a sharp left bend you should",
    image: "",
    answers: [
      { text: "Flash your headlights to attract the attention of other road users.", correct: true },
      { text: "Speed up so as to pass the danger as quickly as possible.", correct: false },
      { text: "Keep more to the right to have a better view.", correct: false }
    ]
  },
  {
    question: "The rightmost outer lane on a three-lane carriageway is for",
    image: "",
    answers: [
      { text: "Emergency vehicles and overtaking only.", correct: true },
      { text: "Vehicles traveling at the maximum speed limit of the road.", correct: false },
      { text: "Vehicles which are capable of traveling at high speed.", correct: false }
    ]
  },
  {
    question: "During bus lane prohibited hours, a motorist is allowed to use the bus lane when",
    image: "",
    answers: [
      { text: "It is empty.", correct: false },
      { text: "The other lanes are congested.", correct: false },
      { text: "The driver is trying to avoid a collision.", correct: true }
    ]
  },
  {
    question: "A passenger is exempted from wearing a seat belt if he is below",
    image: "",
    answers: [
      { text: "1.7 meters in height.", correct: false },
      { text: "1.6 meters in height.", correct: false },
      { text: "1.5 meters in height.", correct: true }
    ]
  },
]

export {quiz3_questions};