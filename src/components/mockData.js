export  const enumData = {
    1:"Completed", 
    2:"In Progress", 
    3:"Not Started"
}

function currentdate(time, prefix = "") {
  var date = Date.parse(time); // returns NaN if it can't parse
  return Number.isNaN(date) ? "" : prefix + date.toLocaleDateString();
}


export const mockData= [
    {
        "id": 1,
        "todo": "Do something nice for someone I care about",
        "completed": enumData[1],
        "date" : currentdate(),
        "userId": 26
      },
      {
        "id": 2,
        "todo": "Memorize the fifty states and their capitals",
        "completed": enumData[3],
        "date": currentdate(),
        "userId": 48
      },
      {
        "id": 3,
        "todo": "Watch a classic movie",
        "completed": enumData[2],
        "date": currentdate(),
        "userId": 4
      },
      {
        "id": 4,
        "todo": "Contribute code or a monetary donation to an open-source software project",
        "completed": enumData[1],
        "date": currentdate(),
        "userId": 48
      },
      {
        "id": 5,
        "todo": "Solve a Rubik's cube",
        "completed": enumData[3],
        "date": currentdate(),
        "userId": 31
      },
      {
        "id": 6,
        "todo": "Bake pastries for me and neighbor",
        "completed": enumData[1],
        "date": currentdate(),
        "userId": 39
      },
      {
        "id": 7,
        "todo": "Go see a Broadway production",
        "completed": enumData[2],
        "date": currentdate(),
        "userId": 32
      },
      {
        "id": 8,
        "todo": "Write a thank you letter to an influential person in my life",
        "completed": enumData[1],
        "date": currentdate(),
        "userId": 13
      },
      {
        "id": 9,
        "todo": "Invite some friends over for a game night",
        "completed": enumData[3],
        "date": currentdate(),
        "userId": 47
      },
      {
        "id": 10,
        "todo": "Have a football scrimmage with some friends",
        "completed": enumData[3],
        "date": currentdate(),
        "userId": 19
      },
      {
        "id": 11,
        "todo": "Text a friend I haven't talked to in a long time",
        "completed": enumData[1],
        "date": currentdate(),
        "userId": 39
      },
      {
        "id": 12,
        "todo": "Organize pantry",
        "completed": enumData[2],
        "date": currentdate(),
        "userId": 39
      },
      {
        "id": 13,
        "todo": "Buy a new house decoration",
        "completed": enumData[3],
        "date": currentdate(),
        "userId": 16
      },
      {
        "id": 14,
        "todo": "Plan a vacation I've always wanted to take",
        "completed": enumData[1],
        "date": currentdate(),
        "userId": 28
      },
      {
        "id": 15,
        "todo": "Clean out car",
        "completed": enumData[2],
        "date":currentdate(),
        "userId": 33
      },
      {
        "id": 16,
        "todo": "Draw and color a Mandala",
        "completed": enumData[1],
        "date": currentdate(),
        "userId": 24
      },
      {
        "id": 17,
        "todo": "Create a cookbook with favorite recipes",
        "completed": enumData[3],
        "date": currentdate(),
        "userId": 1
      },
      {
        "id": 18,
        "todo": "Bake a pie with some friends",
        "completed": enumData[3],
        "date": currentdate(),
        "userId": 1
      },
      {
        "id": 19,
        "todo": "Create a compost pile",
        "completed": enumData[1],
        "date": currentdate(),
        "userId": 5
      },
      {
        "id": 20,
        "todo": "Take a hike at a local park",
        "completed": enumData[2],
        "date":currentdate(),
        "userId": 43
      },
      {
        "id": 21,
        "todo": "Take a class at local community center that interests you",
        "completed": enumData[1],
        "date":currentdate(),
        "userId": 22
      },
      {
        "id": 22,
        "todo": "Research a topic interested in",
        "completed": enumData[3],
        "date": currentdate(),
        "userId": 4
      },
      {
        "id": 23,
        "todo": "Plan a trip to another country",
        "completed": enumData[1],
        "date": currentdate(),
        "userId": 37
      },
      {
        "id": 24,
        "todo": "Improve touch typing",
        "completed": enumData[2],
        "date": currentdate(),
        "userId": 45
      },
      {
        "id": 25,
        "todo": "Learn Express.js",
        "completed": enumData[3],
        "date": currentdate(),
        "userId": 49
      },
      {
        "id": 26,
        "todo": "Learn calligraphy",
        "completed": enumData[1],
        "date":currentdate(),
        "userId": 50
      },
      {
        "id": 27,
        "todo": "Have a photo session with some friends",
        "completed": enumData[1],
        "date": currentdate(),
        "userId": 14
      },
      {
        "id": 28,
        "todo": "Go to the gym",
        "completed": enumData[3],
        "date":currentdate(),
        "userId": 15
      },
      {
        "id": 29,
        "todo": "Make own LEGO creation",
        "completed": enumData[2],
        "date":currentdate(),
        "userId": 30
      },
      {
        "id": 30,
        "todo": "Take cat on a walk",
        "completed": enumData[1],
        "date": currentdate(),
        "userId": 15
      },
]
