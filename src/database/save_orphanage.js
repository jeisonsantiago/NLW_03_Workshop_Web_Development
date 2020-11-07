function saveOrphanage(db, orphanage){

    // console.log(orphanage)
    return db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            phone,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        )
        VALUES (
            "${orphanage.lat}",
            "${orphanage.lng}",
            "${orphanage.name}",
            "${orphanage.about}",
            "${orphanage.phone}",
            "${orphanage.images}",
            "${orphanage.instructions}",
            "${orphanage.opening_hours}",
            "${orphanage.open_on_weekends}"
        );`
    )
}

module.exports = saveOrphanage;