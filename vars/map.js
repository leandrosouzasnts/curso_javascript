const USER = new Map();

USER.set("Leandro", "Admin");
USER.set("Carlos", "Developer");
USER.set("Sandra", "QA");


function getAdmins(map) {
    for (let [usuario, perfil] of map){
       if (perfil === "Admin")
        console.log(usuario);
    }
}

getAdmins(USER);

