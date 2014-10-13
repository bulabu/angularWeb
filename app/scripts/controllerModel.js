function objective(objectiveName, objectiveDesc, associates, children) {
    this.name = objectiveName;
    this.desc = objectiveDesc;
    this.associates = associates;
    this.children = children;
}


function getObjectiveList() {
    var mockObjs = [
        new objective("Strategic Direction 1",
            "First strategic direction",
            [new associate("Becky",
                "Jeff M",
                "IT",
                4),
                new associate("Mukul",
                    "Tara R",
                    "IT",
                    4)],
            [
                new objective("Strategy 1", "First strategy", [], [
                    new objective("Objective 1-1", "First objective", [], [])
                ])
            ]
        )
    ]
    return mockObjs;
}

function generateTreeList(objectiveList) {
    var index = 0;
    var retArray = [];
    for (index = 0; index < objectiveList.length; ++index) {
        console.log(objectiveList[index]);
        if (objectiveList[index].children.length == 0) {
            retArray.push({
                    label: objectiveList[index].name,
                    data: objectiveList[index]
                }
            )
        }
        else {
            retArray.push({
                    label: objectiveList[index].name,
                    data: objectiveList[index],
                    children: generateTreeList(objectiveList[index].children)
                }
            )
        }
    }
    return retArray;
}

function getObjectiveByName(objectiveName, locObjList) {
    var index = 0;
    var found;

    for (index = 0; index < locObjList.length; ++index) {
        if (locObjList[index].name == objectiveName) {
            found = locObjList[index];
        }
        else {
            if (locObjList[index].children.length == 0) {
                found = new objective("Dummy", "Dummy", [], []);
            }
            else {
                console.log(locObjList[index].children[0].name);
                found = getObjectiveByName(objectiveName, locObjList[index].children);
            }

        }
    }
    return found;
}