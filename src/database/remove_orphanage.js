function removeOrphanage(db, index){
    console.log("REMOVE:"+index);
    return db.run(`
        DELETE FROM orphanages WHERE id = ${index}
    `)
}

module.exports = removeOrphanage;