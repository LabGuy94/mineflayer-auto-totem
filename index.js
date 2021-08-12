module.exports = (bot, { version }) => {
    autototeminterval = setInterval(async () => {
        if(bot.inventory.slots[45] == null){
        let totem = bot.inventory.findInventoryItem("totem_of_undying", null, null)
        if(totem){
            bot.equip(totem, 'off-hand')
        }
    }
    }, 100)
}