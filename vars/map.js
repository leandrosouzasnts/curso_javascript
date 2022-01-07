const USER = new Map();

USER.set("Leandro", "Admin");
USER.set("Carlos", "Developer");
USER.set("Sandra", "Admin");


function getAdmins(map) {
    let admins = [];
    for (let [key, value] of map){
       if (value === "Admin")
        admins.push(key);
    }
    return admins;
}

console.log(getAdmins(USER));

