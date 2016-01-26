/// <reference path="../typings/tsd.d.ts" />

// calculate distances to each source and store them in the local memory
function getDistancesToSources(spawn:Spawn){
    let roomName = spawn.room.name;
    console.log('room name'+ roomName );
}

var mine = function (creep:Creep, spawn:Spawn) {
    if (creep.carry.energy < creep.carryCapacity) {
        var sources = creep.room.find<Source>(FIND_SOURCES);
        // navigate towards the closest resource
        if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources[0]);
        }
    }
    else {
        if (creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(spawn);
        }
    }
};
module.exports = mine;