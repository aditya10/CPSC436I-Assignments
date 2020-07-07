db = db.getSiblingDB("messagedb");
db.messages.drop();
db.messages.insertMany([{id: 1, text: "hello1", isWarning: false, date: "06-09-2020"},
	{id: 2, text: "hello2", isWarning: true, date: "06-09-2020"},
	{id: 3, text: "hello3", isWarning: false, date: "06-09-2020"}]);