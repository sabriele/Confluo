let students = [
  {
    _id: "ba97qsy9rgjlnfeqo280",
    email: "ba97qsy9rgjlnfeqo280@gmail.com",
    firstName: "Ben",
    lastName: "Ang",
    imageUrl: "/students/ben_ang.jpg",
    level: { type: "Primary", year: 3 },
    subjects: ["Mathematics"],
    address: "7 Lavender Avenue North",
    regularSchedule: [
      {
        _id: 0,
        day: "Sunday",
        time: "Fri Mar 08 2019 09:00:00 GMT+0800 (Singapore Standard Time)",
        duration: 1
      }
    ],
    rates: 40,
    active: true,
    startDate: "2017-07-30",
    referrer: "Ruth Chye",
    notes:
      "Agreed with Ben's mum that sometimes he is allowed to cancel lessons due to Scouts at school."
  },
  {
    _id: "ly51vi37zppqb7iuy968",
    email: "ly51vi37zppqb7iuy968@gmail.com",
    firstName: "Farid",
    lastName: "Bakar",
    imageUrl: "/students/farid_bakar.jpg",
    level: { type: "Secondary", year: 1 },
    subjects: ["Science"],
    address: "6 Bukit Ho Swee Walk, #04-30",
    regularSchedule: [
      {
        _id: 0,
        day: "Wednesday",
        time: "Fri Mar 08 2019 19:00:00 GMT+0800 (Singapore Standard Time)",
        duration: 2
      }
    ],
    rates: 50,
    active: true,
    startDate: "2017-09-11",
    referrer: "",
    notes: ""
  },
  {
    _id: "t364ahrj2udgq9h2v434",
    email: "t364ahrj2udgq9h2v434@gmail.com",
    firstName: "Luke",
    lastName: "Govindasamy",
    imageUrl: "/students/luke_govindasamy.jpg",
    level: { type: "Primary", year: 6 },
    subjects: ["Science", "Mathematics"],
    address: "2 MacPherson Lane",
    regularSchedule: [
      {
        _id: 0,
        day: "Tuesday",
        time: "Fri Mar 08 2019 19:00:00 GMT+0800 (Singapore Standard Time)",
        duration: 1
      },
      {
        _id: 1,
        day: "Friday",
        time: "Fri Mar 08 2019 19:00:00 GMT+0800 (Singapore Standard Time)",
        duration: 1
      }
    ],
    rates: 45,
    active: true,
    startDate: "2018-10-13",
    referrer: "",
    notes: ""
  },
  {
    _id: "ws36bm3n3s4zd6xck794",
    email: "ws36bm3n3s4zd6xck794@gmail.com",
    firstName: "Farida",
    lastName: "Bakar",
    imageUrl: "/students/farida_bakar.jpg",
    level: { type: "Primary", year: 4 },
    subjects: ["Science"],
    address: "6 Bukit Ho Swee Walk, #04-30",
    regularSchedule: [
      {
        _id: 0,
        day: "Wednesday",
        time: "Fri Mar 08 2019 21:00:00 GMT+0800 (Singapore Standard Time)",
        duration: 1
      }
    ],
    rates: 45,
    active: true,
    startDate: "2018-01-02",
    referrer: "Farid Bakar",
    notes: ""
  },
  {
    _id: "f0595as68amygla6f365",
    email: "f0595as68amygla6f365@hotmail.com",
    firstName: "Reuben",
    lastName: "Woo",
    imageUrl: "/students/reuben_woo.jpg",
    level: { type: "Primary", year: 1 },
    subjects: ["english"],
    address: "Blk 204 Boon Lay Street 81, #10-41",
    regularSchedule: [
      {
        _id: 0,
        day: "Thursday",
        time: "Fri Mar 08 2019 15:00:00 GMT+0800 (Singapore Standard Time)",
        duration: 1
      }
    ],
    rates: 35,
    active: true,
    startDate: "2019-02-01",
    referrer: "",
    notes: ""
  },
  {
    _id: "my30pj2vpi2oz33pz857",
    email: "my30pj2vpi2oz33pz857@gmail.com",
    firstName: "Daryl",
    lastName: "Tan",
    imageUrl: "/students/daryl_tan.jpg",
    level: { type: "Primary", year: 6 },
    subjects: ["Mathematics"],
    address: "2 MacPherson Lane",
    regularSchedule: [
      {
        _id: 0,
        day: "Tuesday",
        time: "Fri Mar 08 2019 19:00:00 GMT+0800 (Singapore Standard Time)",
        duration: 1
      }
    ],
    rates: 45,
    active: true,
    startDate: "2018-10-13",
    referrer: "Luke Govindasamy",
    notes: ""
  },
  {
    _id: "9s45uuhk4gb0kvoxp521",
    email: "9s45uuhk4gb0kvoxp521@gmail.com",
    firstName: "Arnav",
    lastName: "Sharma",
    imageUrl: "/students/arnav_sharma.jpg",
    level: { type: "Primary", year: 6 },
    subjects: ["Mathematics"],
    address: "2 MacPherson Lane",
    regularSchedule: [
      {
        _id: 0,
        day: "Tuesday",
        time: "Fri Mar 08 2019 19:00:00 GMT+0800 (Singapore Standard Time)",
        duration: 1
      }
    ],
    rates: 45,
    active: true,
    startDate: "2018-10-13",
    referrer: "Luke Govindasamy",
    notes: ""
  },
  {
    _id: "t108id17cpryb46b7473",
    email: "t108id17cpryb46b7473@yahoo.com.sg",
    firstName: "Keith",
    lastName: "Chye",
    imageUrl: "/students/keith_chye.jpg",
    level: { type: "Primary", year: "3" },
    subjects: ["Mathematics"],
    address: "Blk 408 Sengkang Street 76, #15-36",
    regularSchedule: [
      {
        _id: 0,
        day: "Saturday",
        time: "Fri Mar 08 2019 10:00:00 GMT+0800 (Singapore Standard Time)",
        duration: 1.5
      }
    ],
    rates: 40,
    active: true,
    startDate: "2016-05-20",
    referrer: "",
    notes: ""
  },
  {
    _id: "ko62tu1na3zaa8yct423",
    email: "ko62tu1na3zaa8yct423@gmail.com",
    firstName: "Ella",
    lastName: "Gross",
    imageUrl: "/students/ella_gross.jpg",
    level: { type: "Primary", year: "5" },
    subjects: ["Mathematics"],
    address: "24 Jalan Pelangi",
    regularSchedule: [
      {
        _id: 0,
        day: "Monday",
        time: "Fri Mar 08 2019 19:00:00 GMT+0800 (Singapore Standard Time)",
        duration: 1
      }
    ],
    rates: 40,
    active: true,
    startDate: "2016-06-22",
    referrer: "",
    notes: "Birthday: December 1st 2008"
  },
  {
    _id: "bx748khxz86jhg3h1089",
    email: "bx748khxz86jhg3h1089@gmail.com",
    firstName: "Sarah Jane",
    lastName: "Lim",
    imageUrl: "/students/sarah_jane_lim.jpg",
    level: { type: "Primary", year: "4" },
    subjects: ["Mathematics"],
    address: "30 Tai Seng Field, #08-11",
    regularSchedule: [
      {
        day: "Monday",
        time: "Fri Mar 08 2019 19:00:00 GMT+0800 (Singapore Standard Time)",
        duration: 1
      }
    ],
    rates: 35,
    active: false,
    startDate: "2017-11-17",
    referrer: "",
    notes: ""
  }
];

export function getStudents() {
  return students;
}

export function deleteStudent(id) {
  const found = students.find(student => student._id === id);
  students = students.filter(student => student._id !== id);
  return found;
}

export function saveStudent(student) {
  let existing = students.find(res => res._id === student._id);
  if (existing) {
    const merged = { ...existing, ...student };
    students = students.filter(student => student._id !== existing._id);
    students.push(merged);
    return merged;
  } else {
    const newStudent = {
      _id: Date.now().toString(),
      ...student
    };
    students.push(newStudent);
    return newStudent;
  }
}
