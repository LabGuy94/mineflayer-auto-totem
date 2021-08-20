function inject (bot) {
    bot.autototem = {}
    bot.autototem.totem = () => {
        if(bot.inventory.slots[45] == null){
            let totem = bot.inventory.findInventoryItem("totem_of_undying", null, null)
            if(totem){
                bot.equip(totem, 'off-hand')
            }
        }
    }
}
module.exports = {
    autototem: inject,
}