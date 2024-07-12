namespace SpriteKind {
    export const bosss = SpriteKind.create()
    export const playerProjectile = SpriteKind.create()
    export const bossProjectile = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile19`, function (sprite, location) {
    projectile.startEffect(effects.fountain)
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
    sprites.destroy(sprite)
})
function startingStuff () {
    scene.setBackgroundImage(img`
        ddddddddddddddddddddd111111111ddd1111111dddddddddddddddddddddddddddddddddddddddddddddd111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111ddddd
        dddddddddddddddddddd11111111111d111111111dddddddddddddddddddddddddddddddddddddddddddd11111111111ddddddddddddddddddddddddddddddddddddddddddddddddddd111111111dddd
        ddddddddddddddddddd11111111111111111111111dddddddddddddddddddddddddddddddddddddddddd1111111111111ddddddddddddddddddddddddddddddddddddddddddddddddd11111111111ddd
        ddddddddddddddddddd11111111111111111111111dddddddddddddddddddddddddddddddddddddddddd1111111111111dddddddddddddddddddddddddddddddddddddddddddddddd1111111111111dd
        ddddddddddddddddddd11111111111111111111111dddddddddddddddddddddddddddddddddddddddddd1111111111111dddddddddddddddddddddddddddddddddddddddddddddddd1111111111111dd
        ddddddddddddddddddd11111111111111111111111dddddddddddddddddddddddddddddddddddddddddd1111111111111dddddddddddddddddddddddddddddddddddddddddddddddd1111111111111dd
        ddddddddddddddddddd1111111111111111111111111dddddddddddddddddddddddddddddddddddddddd1111111111111dddddddddddddddddddddddddddddddddddddddddddddddd1111111111111dd
        dcccccccccccccccccc1111111111111111111111111dddddddddddddddddddddddddddddddddddddddd1111111111111dddddddddddddddddddddddddddddddddddddddddddddddd1111111111111dd
        dcccccccccccccccccc1111111111111111111111111ddddddddddddddddddddddddddddddddddddddd11111111111111dddddddddddddddddddddddddddddddddddddddddddddddd11111111111111d
        dccccccccccccccccccd111111111111111111111111dddddddddddddddddddddddddddddddddddddd11111111111111ddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111
        dccccccccccccccccccdd111111111ddd11111111111dddddddddddddddddddddddddddddddddddddd1111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111
        dccccccccccccccccccddd1111111ddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111
        dccccccccccccccccccddbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddd11111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111
        dccccccccccccccccccddbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddd11111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111
        dccccccccccccccccccddbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddd11111111111ddddcccccccccccccccccccccccccccccccccccccccccccccccddd1111111111111
        dccccccccccccccccccddbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddd11111111111ddddcccccccccccccccccccccccccccccccccccccccccccccccddd1111111111111
        dccccccccccccccccccddbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddd111111111dddddcccccccccccccccccccccccccccccccccccccccccccccccdddd11111111111d
        dcc666c666cc666ccccddbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddd1111111ddddddcccccccccccccccccccccccccccccccccccccccccccccccddddd111111111dd
        dcc666c666cc666ccccddbbbbbbbbbbbbbbbbbbbbbddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcccccccccccccccccccccccccccc66666ccccccccccccccdddddd1111111ddd
        dcc666c666cc666ccccddbbbbbbb888bbbbbbbbbbbddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcccccccc666ccccccccccccccccc66666ccccccccccccccddddd111111111dd
        dccccccccccccccccccddbb888bb888bb888bbbbbbddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddc666cccc666cc666ccc666cccccc66666ccccccccccccccdddd11111111111d
        dccccccccccccccccccddbb888bb888bb888bbbbbbddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddc666cccc666cc666ccc666cccccccccccccccc666ccccccddd1111111111111
        dccccccccccccccccccddbb888bbbbbbb888bbbbbbddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddc666ccccccccc666ccc666cccccccccccccccc666ccccccdd11111111111111
        dc666c666cc666cccccddbbbbbbbbbbbbbbbbbbbbbddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcccccccccccccccccccccccccccccccccccccc666ccccccd111111111111111
        dc666c666cc666cccccddbbbbbbbbbbbbbbbbbbbbbddddddddddddddbbbb888bbb888bb888bbbbbbbbb888bbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccd111111111111111
        dc666c666cc666cccccddbbbbbbbbbbbbbbbbbbbbbddddddddddddddbbbb888bbb888bb888bb888bbbb888bbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccd111111111111111
        dccccccccccccccccccddbbbbbbbbbbbbbbbbbbbbbbdddddddddddddbbbb888bbb888bb888bb888bbbb888bbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccd111111111111111
        dccccccccccccccccccddbbbbbbbbbbbbbbbbbbbbbbdddddddddddddbbbbbbbbbbbbbbbbbbbb888bbbbbbbbbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccd111111111111111
        dccccccccccc666ccccddbbbbbbbbbbbbbbbbbbbbbbdddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddccccccccccccccccccccccc666cccccccccccccccccccccd111111111111111
        dcc666cc666c666ccccddbbbbbbbbbbbbbbbbbbbbbbdddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddccc666ccccc666ccccccccc666cccccccccccc666ccccccd111111111111111
        dcc666cc666c666ccccddbbbbbbbbbbbbbbbbbbbbbbdddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddccc666ccccc666ccccccccc666cccccccccccc666ccccccd111111111111111
        dcc666cc666ccccccccddbbbbbbbb888bbbbbbbbbbbdddddddddddddbbbbbbbbbb888bb888bbbbbb888bbbbbbddddddddccc666ccccc666cccccccccccccccc666ccccc666ccccccd111111111111111
        dccccccccccccccccccddbbb888bb888bb888bbbbbbdddddddddddddbbb888bbbb888bb888bbbbbb888bbbbbbddddddddcccccccccccccccccccccccccccccc666ccccccccccccccdd11111111111111
        dccccccccccccccccccddbbb888bb888bb888bbbbbbdddddddddddddbbb888bbbb888bb888bbbbbb888888bbbddddddddcccccccccccccccccccccccccccccc666ccccccccccccccddd1111111111111
        dccccccccccccccccccddbbb888bbbbbbb888bbbbbbdddddddddddddbbb888bbbbbbbbbbbbbbbbbbbbb888bbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddd11111111111d
        dcc666666cccc666cccddbbbbbbbbbbbbbbbbbbbbbbdddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbb888bbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccddddd111111111dd
        dcc666666cccc666cccddbbbbbbbbbbbbbbbbbbbbbddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dcc666666cccc666cccddbbbbbbbbbbbbbbbbbbbbbddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dccccccccccccccccccddbbbbbbbbbbbbbbbbbbbbbddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dccccccccccccccccccddbbbbbbbbbbbbbbbbbbbbbddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcccccccccccccccccccccccccccccccccccccccc666ccccdddddddddddddddd
        dccccccccccccccccccddbb888bbb888bbbbbbbbbbddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcccc666ccccccccccccccc666ccccccccccccccc666ccccdddddddddddddddd
        dccccccccccc666ccccddbb888bbb888bbbbbbbbbbddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcccc666cccccc666cccccc666ccccccc666ccccc666ccccdddddddddddddddd
        dcc666cc666c666ccccddbb888bbb888bbb888bbbbddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcccc666cccccc666cccccc666ccccccc666ccccccccccccdddddddddddddddd
        dcc666cc666c666ccccddbbbbbbbbbbbbbb888bbbbddddddddddddddbbbb888bbbbb888bbbbb888bbbbbbbbbbddddddddccccccccccccc666cccccccccccccccc666ccccccccccccdddddddddddddddd
        dcc666cc666ccccccccddbbbbbbbbbbbbbb888bbbbddddddddddddddbbbb888bbbbb888bbbbb888bbbbbb888bddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dccccccccccccccccccddbbbbbbbbbbbbbbbbbbbbdddddddddddddddbbbb888bbbbb888bbbbb888bbbbbb888bddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dccccccccccccccccccddbbbbbbbbbbbbbbbbbbbbdddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbb888bddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dccccccccccccccccccddbbbbbbbbbbbbbbbbbbbbdddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dccccccccccccccccccddbbbbbbbbbbbbbbbbbbbbdddddddddddddddbbbbbbbbb888bbbbbbbbbbbbbbbbbbbbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dccccccccccccccccccddbbbbbb888bb888bbbbbbdddddddddddddddbbbbbbbbb888888bbbbbbbbbbbbbbbbbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dcc666cccccc666ccccddbb888b888bb888bbbbbbbddddddddddddddbbbbbbbbb888888bbbb888bbbbbb888bbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dcc666cc666c666ccccddbb888b888bb888bbbbbbbddddddddddddddbbbbbbbbbbbb888bbbb888bbbbbb888bbddddddddccccccccccc666cccc666ccccccc666ccccccccccccccccdddddddddddddddd
        dcc666cc666c666ccccddbb888bbbbbbbbbbbbbbbbddddddddddddddbbbbbbbbbbbbbbbbbbb888bbbbbb888bbddddddddcccc666cccc666cccc666ccccccc666cccccccc666cccccdddddddddddddddd
        dccccccc666ccccccccddbbbbbbbbbbbbbbbb888bbddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcccc666cccc666cccc666ccccccc666cccccccc666cccccdddddddddddddddd
        dccccccccccccccccccddbbbbbbbbbbbbbbbb888bbddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcccc666cccccccccccccccccccccccccccccccc666cccccdddddddddddddddd
        dccccccccccccccccccddbbbbbbbbbbbbbbbb888bbddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddccccccccccccccccccccccccccccccccccccccc666cccccdddddddddddddddd
        d666cccccccccccccccddbbbbbbbbbbbbbbbbbbbbbddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        d666cc666ccc666ccccddbb888bbbbbbbbbbbbbbbbddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        d666cc666ccc666ccccddbb888bbbbbbbbbbbbbbbbddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dccccc666ccc666ccccddbb888bbb888bbbbbbbbbbddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dccccccccccccccccccddbbbbbbbb888bbbbbbbbbbddddddddddddddbbbbbb888bbbbbbbbbbbbbbbbbbbbbbbbddddddddccc666cccccc666ccccccccccccccccccccccccccccccccdddddddddddddddd
        dccccccccccccccccccddbbbbbbbb888bbbbbbbbbbddddddddddddddbbbbbb888bb888bbbb888bbbbbb888bbbddddddddccc666cccccc666ccccccccccccccccccccccc666ccccccdddddddddddddddd
        dcccccccccccc666cccddbbbbbbbbbbbbbbbbbbbbbddddddddddddddbbbbbb888bb888bbbb888bbbbbb888bbbddddddddccc666cccccc666cccccc666cccccc666ccccc666ccccccdddddddddddddddd
        dc666ccc666cc666cccddbbbbbbbbbbbbbbbbbbbbbddddddddddddddbbbbbbbbbbb888bbbb888bbbbbb888bbbddddddddccccccccccccccccccccc666cccccc666ccccc666ccccccdddddddddddddddd
        dc666ccc666cc666cccddbbbbbbbbbbbbbbbbbbbbbddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddccccccccccccccccccccc666cccccc666ccccccccccccccdddddddddddddddd
        dc666ccc666ccccccccddb888bb888bbbbbb888bbbddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dccccccccccccccccccddb888bb888bbbbbb888bbbddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dccccccccccccccccccddb888bb888bb888b888bbbddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbb888bbbbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dccccccccccccccccccddbbbbbbbbbbb888bbbbbbbddddddddddddddbbbbbbbbbb888bbbbbbbbbbbb888bbbbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dccccccccccccccccccddbbbbbbbbbbb888bbbbbbbddddddddddddddbbb888bbbb888bbb888bbbbbb888bbbbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dcc666cc666ccc666ccddbbbbbbbbbbbbbbbbbbbbbddddddddddddddbbb888bbbb888bbb888bbbbbbbbbbbbbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dcc666cc666ccc666ccddbbbbbbb888bbbb888bbbdddddddddddddddbbb888bbbbbbbbbb888bbbbbbbbbbbbbbddddddddccccccccc666cccccccccccccccccccccccccccccccccccdddddddddddddddd
        dcc666cc666ccc666ccddbb888bb888bbbb888bbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcc666cccc666ccc666ccc666cccccccccccccccccccccccdddddddddddddddd
        dccccccccccccccccccddbb888bb888bbbb888bbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcc666cccc666cc6666ccc666ccccc666cccccc666ccccccdddddddddddddddd
        dccccccccccccccccccddbb888bbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcc666ccccccccc6666ccc666ccccc666cccccc666ccccccdddddddddddddddd
        dccccccccccccccccccddbbbbbbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcccccccccccccc666cccccccccccc666cccccc666ccccccdddddddddddddddd
        dcccccccccccc666cccddbbbbbbbbbbbbbbbbbbbbcccccccccccccccbbbbbb888bbbbbbbbbbbbbbbbbbbbbbbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dc666cc666ccc666cccddbbbbbbbbbbbbbbbbbbbbcccccccccccccccbbbbbb888b888bbbbbbbbbbbbbb888bbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dc666cc666ccc666cccddbbbbbbbbbbbbbbbbbbbbcccccccccccccccbbbbbb888b888bbbbb888bbbbbb888bbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dc666cc666cccccccccddbb888bbb888bbbbbbbbcccccc666cccccccbbbbbbbbbb888bbbbb888bbbbbb888bbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dccccccccccccccccccddbb888bbb888b888bbbbc666cc666cc666ccbbbbbbbbbbbbbbbbbb888bbbbbbbbbbbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dccccccccccccccccccddbb888bbb888b888bbbbc666cc666cc666ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dcccccc666cccccccccddbbbbbbbbbbbb888bbbbc666ccccccc666ccbbb888bbbbbbbbbbbbbbbbbbbbbbb888bddddddddccccccccccccc666cccccccccccccccc666ccccccccccccdddddddddddddddd
        dc666cc666cc666ccccddbbbbbbbbbbbbbbbbbbbccccccccccccccccbbb888bbbb888bbbbbbbbbbbbbbbb888bddddddddccccccccccccc666ccccccc666cccccc666ccccccccccccdddddddddddddddd
        dc666cc666cc666ccccddbbbbbbbbbbbbbbbbbbbccccccccccccccccbbb888bbbb888bbbbbbbbbbbbbbbb888bddddddddccc666ccccccc666ccccccc666cccccc666ccccccc666ccdddddddddddddddd
        dc666ccccccc666ccccddbbbbbbbbbbbb888bbbbccccccccccccccccbbbbbbbbbb888bbbbbb888bbbbbbbbbbbddddddddccc666ccccccccccccccccc666cccccccccccccccc666ccdddddddddddddddd
        dccccccccccccccccccddbb888b888bbb888bbbbccccccccccccccccbbbbbbbbbbbbbbbbbbb888bbbbbbbbbbbddddddddccc666cccccccccccccccccccccccccccccccccccc666ccdddddddddddddddd
        dccccccccccccccccccddbb888b888bbb888bbbbcc666cccccccccccbbbbbbbbbbbbbbbbbbb888bbbbbbbbbbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dccccccccccccccccccddbb888b888bbbbbbbbbbcc666c666cccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        d666cccccccccccccccddbbbbbbbbbbbbbbbbbbbcc666c666c666cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        d666cccccccccccccccddbbbbbbbbbbbbbbbbbbbcccccc666c666cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        d666cccc666ccccccccddbbbbbbbbbbbbbbbbbbbcccccccccc666cccbbb888bbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dccccccc666c666ccccddbbbbbbbbbbbbbbbbbbcccccccccccccccccbbb888bbbbbbbbbbbbb888bbbbbbbbbbbddddddddccccccccccccc666cccccccccccccccccccccccccccccccdddddddddddddddd
        dccccccc666c666ccccddbbb888bb888bbb888bcccccccccccccccccbbb888bbbbbbb888bbb888bbbbb888bbbddddddddccccccccccccc666cccccc666ccccccccccccccccccccccdddddddddddddddd
        dccccccccccc666ccccddbbb888bb888bbb888bcc666cccccc666cccbbbbbbbbbbbbb888bbb888bbbbb888bbbddddddddccc666ccccccc666cccccc666ccccccccccccc666ccccccdddddddddddddddd
        dccccccccccccccccccddbbb888bb888bbb888bcc666c666cc666cccbbbbbbbbbbbbb888bbbbbbbbbbb888bbbddddddddccc666cccccccccccccccc666cccccc666cccc666ccccccdddddddddddddddd
        dc666ccccccccccccccddbbbbbbbbbbbbbbbbbbcc666c666cc666cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddccc666ccccccccccccccccccccccccc666cccc666ccccccdddddddddddddddd
        dc666ccc666ccccccccddbbbbbbbbbbbbbbbbbbcccccc666ccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddccccccccccccccccccccccccccccccc666cccccccccccccdddddddddddddddd
        dc666ccc666cc666cccddbbbbbbbbbbbbbbbbbbcccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dccccccc666cc666cccddbbbbbbbbbbbbb888bbcccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dcccccccccccc666cccddbbb888bb888bb888bbcccccccccccccccccbbbb888bbbbbbbbbbbbbbbbbbbbbbbbbbddddddddccccccccccccccccccccccc6666ccccccccccccccccccccdddddddddddddddd
        dccccccccccccccccccddbbb888bb888bb888bbcccccccccccccccccbbbb888bbbbb888bbbbbbbbbbb888bbbbddddddddccc666ccccccccccc666ccc6666ccccccccccccccccccccdddddddddddddddd
        dcccccccccccc666cccddbbb888bb888bbbbbbbcccccccccccccccccbbbb888bbbbb888bbb888bbbbb888bbbbddddddddccc666ccccccccccc666ccc6666cccccc666cccccccccccdddddddddddddddd
        dc666c666cccc666cccddbbbbbbbbbbbbbbbbbbcc666c666ccccccccbbbbbbbbbbbb888bbb888bbbbb888bbbbddddddddccc666ccccccccccc666ccccccccccccc66666666ccccccdddddddddddddddd
        dc666c666cccc666cccddbbbbbbbbbbbbbbbbbbcc666c666cc666cccbbbbbbbbbbbbbbbbbb888bbbbbbbbbbbbddddddddccccccccccccccccccccccccccccccccc66666666ccccccdddddddddddddddd
        dc666c666ccccccccccddbbbbbbbbbbbbbbbbbbcc666c666cc666cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcccccccccccccccccccccccccccccccccc6666666ccccccdddddddddddddddd
        dccccccccccccccccccddbbbbbbbb888bb888bbccccccccccc666cccbbbbbbbbbbbbbbbbbb888bbbbbbbbbbbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dccccccccccccccccccddbbbb888b888bb888bbcccccccccccccccccbbbbbbbbbbbbbbbbbb888bbbbbbbbbbbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dccccccc666ccc666ccddbbbb888b888bb888bbcccccccccccccccccbbbbbbbb888bbbbbbb888bbbbbbb888bbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dc666ccc666ccc666ccddbbbb888bbbbbbbbbbbcccccccccccccccccbbb888bb888bbbbbbbbbbbbbbbbb888bbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dc666ccc666ccc666ccddbbbbbbbbbbbbbbbbbbccccccc666c666cccbbb888bb888bbbbbbbbbbbbbbbbb888bbddddddddcccccccccc666ccccccccccccccccccccccccccccccccccdddddddddddddddd
        dc666ccccccccccccccddbbbbbbbbbbbbbbbbbbcc666cc666c666cccbbb888bbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddccc666cccc666ccccccccccccccccccccccccccccccccccdddddddddddddddd
        dccccccccccccccccccddbbbbbbbbbbbbbbbbbbcc666cc666c666cccbbbbbb888bbbbbbbbbbbbbbbbbbbbbbbbddddddddccc666cccc666cccc666ccc666cccccccccccc666ccccccdddddddddddddddd
        dccccccccccccccccccddbbbbbbbbbbbbbbbbbbcc666ccccccccccccbbbbbb888bb888bbbbbbbbbbbbbbbbbbbddddddddccc666ccccccccccc666ccc666cccccccccccc666ccccccdddddddddddddddd
        dcc6666c666cc666cccddb888bbb888b888bbbbcccccccccccccccccbbbbbb888bb888bbbbbbbbbbb888bbbbbddddddddccccccccccccccccc666ccc666ccc666cccccc666ccccccdddddddddddddddd
        dcc6666c666cc666cccddb888bbb888b888bbbbcccccccccccccccccbbbbbbbbbbb888bbb888bbbbb888bbbbbddddddddccccccccccccccccccccccccccccc666cccccccccccccccdddddddddddddddd
        dcc6666c666cc666cccddb888bbb888b888bbbbcccccccccccccccccbbbbbbbbbbbbbbbbb888bbbbb888bbbbbddddddddccccccccccccccccccccccccccccc666cccccccccccccccdddddddddddddddd
        dccccccccccccccccccddbbbbbbbbbbbbbbbbbbcccccccccccccccccbbbbbbbbbbbbbbbbb888bbbbbbbbbbbbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dccccccccccccccccccddbbbbbbbbbbbbbbbbbbcccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        dccccccccccccccccccddbbbbbbbbbbbbbbbbbbcccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
        `)
    tiles.setCurrentTilemap(tilemap`level2`)
    game.splash("Alien Invasion by Enzo")
    game.showLongText("To launch your alien invasion, make your way through the levels to obtain the orbs", DialogLayout.Bottom)
    game.showLongText("The goal is to reach the secret documents that make you the president of the United States, putting you in a position to take over Earth", DialogLayout.Bottom)
    game.showLongText("WASD to move (you need a jetpack to go up and down)", DialogLayout.Bottom)
    game.showLongText("Space bar to shoot. If you move left before shooting, you'll shoot left.", DialogLayout.Bottom)
    game.showLongText("Good luck", DialogLayout.Bottom)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 9 9 9 9 . . . . . . . . 
        . . . . 9 f 9 f . . . . . . . . 
        . . . . 9 9 9 9 . . . . . . . . 
        . . . 9 9 9 9 9 9 f f f f f f . 
        . . 9 9 9 9 9 9 9 f 6 6 6 6 6 f 
        . 9 9 9 9 9 9 9 9 f 6 6 6 6 6 f 
        . 9 . 9 9 9 9 9 9 f f f f f f . 
        . . . 9 9 9 9 9 9 . . . . . . . 
        . . . 9 9 9 9 9 9 . . . . . . . 
        . . . 9 . . . . 9 . . . . . . . 
        . . . 9 . . . . 9 . . . . . . . 
        . . . 9 . . . . 9 . . . . . . . 
        . . . 9 . . . . 9 . . . . . . . 
        . . . 9 9 9 . . 9 9 9 . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile8`)
    mySprite.sayText("Let's start this invasion!", 500, false)
    controller.moveSprite(mySprite, 100, 0)
    scene.cameraFollowSprite(mySprite)
    mySprite.ay = 500
    info.setLife(3)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    scene.cameraShake(4, 100)
    info.changeLifeBy(-1)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (withJetpack == 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . f . . . . . . 
            . . . . f 9 f . f 6 f . . . . . 
            . 9 . . 9 9 9 . f 6 f . . . . . 
            . 9 . . 9 9 9 . f 6 f . . . . . 
            . 9 9 9 9 9 9 9 f 6 f . . . . . 
            . f 9 9 9 9 9 9 f 6 f . . . . . 
            . f f 9 9 9 9 9 f f f . . . . . 
            . f f 9 9 9 9 9 . . . . . . . . 
            . f f 9 9 9 9 9 . . . . . . . . 
            . f f 9 9 9 9 9 . . . . . . . . 
            . 2 2 9 f f f 9 . . . . . . . . 
            . 2 2 9 2 . . 9 . . . . . . . . 
            . 4 4 9 4 . . 9 . . . . . . . . 
            . . 4 9 . . . 9 . . . . . . . . 
            . . . 9 9 9 . 9 9 9 . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f 9 f . . . . f f . . . 
            9 . . . 9 9 9 . . . f 6 f . . . 
            9 9 . . 9 9 9 . . f 6 6 f . . . 
            . 9 . 9 9 9 9 9 f 6 6 f f . . . 
            . 9 9 9 9 9 9 9 f 6 f f . . . . 
            . f f 9 9 9 9 9 f f f . . . . . 
            . f f 9 9 9 9 9 f f . . . . . . 
            . f f 9 9 9 9 9 . . . . . . . . 
            . f f 9 9 9 9 9 . . . . . . . . 
            . 2 f 9 f f . 9 . . . . . . . . 
            . 2 2 9 2 2 . 9 . . . . . . . . 
            . . 4 9 4 . . 9 . . . . . . . . 
            . . 4 9 . . . 9 . . . . . . . . 
            . . . 9 . . . 9 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . f 9 f . . . . . . . . . 
            . . . . 9 9 9 . . . . . . . . . 
            . . . . 9 9 9 . . . . . . . . . 
            9 9 . 9 9 9 9 9 f f f f f . . . 
            . 9 9 9 9 9 9 9 f 6 6 6 6 f . . 
            . f f 9 9 9 9 9 f f f f f . . . 
            . f f 9 9 9 9 9 . . . . . . . . 
            . f f 9 9 9 9 9 . . . . . . . . 
            . f f 9 9 9 9 9 . . . . . . . . 
            . f f 9 f f . 9 . . . . . . . . 
            . . f 9 f . . 9 . . . . . . . . 
            . . 2 9 2 . . 9 . . . . . . . . 
            . . 4 9 4 . . 9 . . . . . . . . 
            . . . 9 9 9 . 9 9 9 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . f . . . . . . 
            . . . . f 9 f . f 6 f . . . . . 
            . 9 . . 9 9 9 . f 6 f . . . . . 
            . 9 . . 9 9 9 . f 6 f . . . . . 
            . 9 9 9 9 9 9 9 f 6 f . . . . . 
            . . 9 9 9 9 9 9 f 6 f . . . . . 
            . . . 9 9 9 9 9 f f f . . . . . 
            . . . 9 9 9 9 9 . . . . . . . . 
            . . . 9 9 9 9 9 . . . . . . . . 
            . . . 9 9 9 9 9 . . . . . . . . 
            . . . 9 . . . 9 . . . . . . . . 
            . . . 9 . . . 9 . . . . . . . . 
            . . . 9 . . . 9 . . . . . . . . 
            . . . 9 . . . 9 . . . . . . . . 
            . . . 9 9 9 . 9 9 9 . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f 9 f . . . . f f . . . 
            9 . . . 9 9 9 . . . f 6 f . . . 
            9 9 . . 9 9 9 . . f 6 6 f . . . 
            . 9 . 9 9 9 9 9 f 6 6 f f . . . 
            . 9 9 9 9 9 9 9 f 6 f f . . . . 
            . . . 9 9 9 9 9 f f f . . . . . 
            . . . 9 9 9 9 9 f f . . . . . . 
            . . . 9 9 9 9 9 . . . . . . . . 
            . . . 9 9 9 9 9 . . . . . . . . 
            . . . 9 . . . 9 . . . . . . . . 
            . . . 9 . . . 9 . . . . . . . . 
            . . . 9 . . . 9 . . . . . . . . 
            . . . 9 . . . 9 . . . . . . . . 
            . . . 9 . . . 9 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . f 9 f . . . . . . . . . 
            . . . . 9 9 9 . . . . . . . . . 
            . . . . 9 9 9 . . . . . . . . . 
            9 9 . 9 9 9 9 9 f f f f f . . . 
            . 9 9 9 9 9 9 9 f 6 6 6 6 f . . 
            . . . 9 9 9 9 9 f f f f f . . . 
            . . . 9 9 9 9 9 . . . . . . . . 
            . . . 9 9 9 9 9 . . . . . . . . 
            . . . 9 9 9 9 9 . . . . . . . . 
            . . . 9 . . . 9 . . . . . . . . 
            . . . 9 . . . 9 . . . . . . . . 
            . . . 9 . . . 9 . . . . . . . . 
            . . . 9 . . . 9 . . . . . . . . 
            . . . 9 9 9 . 9 9 9 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile23`, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    scene.cameraShake(8, 200)
    info.changeLifeBy(-2)
    mySprite.y += -27
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    mySprite.startEffect(effects.halo)
    withOrb += 1
    tiles.setTileAt(location, assets.tile`transparency16`)
    mySprite.sayText("Got the orb!", 500, false)
    effects.clearParticles(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
	
})
sprites.onOverlap(SpriteKind.bossProjectile, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    scene.cameraShake(4, 100)
    info.changeLifeBy(-1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    shooting()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    scene.cameraShake(4, 100)
    info.changeLifeBy(-1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    if (withOrb > 0) {
        scene.setBackgroundImage(img`
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111166666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111116666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666661111111111111111111111666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111111111111116666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111166666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111116666666666666666666666666666
            6666666611111116666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111116666666666666666666666666666
            6666661111111111166666111111166666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111111666666666666666666666666666
            6666611111111111116661111111116666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111111666666666666666666666666666
            6666611111111111111111111111116666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111111666666666666666666666666666
            6666111111111111111111111111116666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111111666666666666666666666666666
            6666111111111111111111111111116666666666111111166666666666666666666666666666666666666666666666666666666111111111111111111111111111111666666666666666666666666666
            6666111111111111111111111111116666666661111111116666666666666666666666666666666666666666666666666666666611111111111111111111111111111666666611111116666666666666
            6666111111111111111111111111116666666661111111116666666666666666666666666666666666666666666666666666666661111111111111111111111111111666666111111111666666666666
            6666111111111111111111111111116666666661111111116666666666666666666111111111666666666666666666666666666666111111111111111111111111111666661111111111166666666666
            6666111111111111111111111111166666666111111111116666666666666666661111111111166666666666666666666666666666611111111111111111111111111666661111111111166666666666
            6666111111111111111111166666666666661111111111116666666666666666611111111111116666611111116666666666666666666666611111111111111111116666661111111111166666666666
            6666611111111111111111166666666666611111111111116666666666666666111111111111111661111111111166666666666666666666611111111111111111116666661111111111166666666666
            6666611111111111111111666666666666111111111111111666666666666661111111111111111111111111111116666666666666666666661111111111111111166666661111111111111111666666
            6666661111111111111116666666666661111111111111111166666666666661111111111111111111111111111116666666666666666666666111111111111111666666661111111111111111166666
            6666666611111116666666666666666661111111111111111166666666666661111111111111111111111111111111666666666666666666666611111111111116666666661111111111111111116666
            6666666666666666666666666666666661111111111111111166666666666661111111111111111111111111111111666666666666666666666666111111111666666666666111111111111111111666
            6666666666666666666666666666666661111111111111111166666666666661111111111111111111111111111111666666666666666666666666666666666666666666666611111111111111111666
            6666666666666666666666666666666661111111111111111166666666666661111111111111111111111111111111666666666666666666666666666666666666666666666666661111111111111666
            6666666666666666666666666666666661111111111111111166666666666661111111111111111111111111111111666666666666666666666666666666666666666666666666661111111111111666
            6666666666666666666666666666666661111111111111111166666666666661111111111111111111111111111111666666666666666666666666666666666666666666666666661111111111111666
            6666661111111666666666666666666661111111111111111166666666666661111111111111111111111111111111666666666666666666666666666666666666666666666666661111111111111666
            6666111111111116666666666666666661111111111111111166666666666666111111111111111611111111111116666666666666666666666666666666666666666666666666661111111111111666
            6661111111111111666666666666666666111111111111111666666666666666611111111111116611111111111116666666666666666666666666666666666666666666666666666111111111116666
            6661111111111111661111111116666666611111111111116666666666666666661111111111166661111111111166666666666666666666666666666666666666666666666666666611111111166666
            6611111111111111111111111111166666661111111111166666666666666666666111111111666666611111116666666666666666666666666666666666666666666666666666666661111111666666
            6611111111111111111111111111116666666111111111666666666666666666666666666666666666666666666666666666666666666666666666666111111111666666666666666666666666666666
            6611111111111111111111111111111666666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111116666666666666666666666666666
            6611111111111111111111111111111166666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111666666666666666666666666666
            6611111111111111111111111111111116666666666666666666666666666666666666666666666666666666666666666666666666666666666661111111111111111111116666666666666666666666
            6611111111111111111111111111111116666666666666666666666666666666666666666666666666666666666666666666666666666666666661111111111111111111111666666666666666666666
            6611111111111111111111111111111111666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111111111111166666666666666666666
            6661111111111111111111111111111111666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111111111111166666666666666666666
            6661111111111111111111111111111111666666666666666666666666666666666111111111666666666666666666666666666666666666666611111111111111111111111166666666666666666666
            6666111111111111111111111111111111666666666666666666666666666666611111111111116666666666666666666666666666666666666611111111111111111111111166666666666666666666
            6666661111111111111111111111111111666666666666666666666666666666111111111111111666666666666666666666666666666666666611111111111111111111111166666666666666666666
            6666666666611111111111111111111111666666666666666666666666666661111111111111111166666666666666666666666666666666666611111111111111111111111166666666666666666666
            6666666666611111111111111111111111666666666666666666666666111111111111111111111116666666666666666666666666666666666611111111111111111111111116666666666666666666
            6666666666611111111111111111111111666666666666666666666661111111111111111111111116666666666666666666666666666666666611111111111111111111111116666666666666666666
            6666666666611111111111111111111111666666666666666666666611111111111111111111111111666666666666666666666666666666666611111111111111111111111116666666666666666666
            6666666666661111111111111111111116666666666666666666666111111111111111111111111111666666666666666666666666666666666661111111111111111111111116666666666666666666
            6666666666661111111111111111111116666666666666666666666111111111111111111111111111666666666666666666666666666666666661111111111111111111111116666666666666666666
            6666666666666111111111111111111166666666666666666666666111111111111111111111111111666666666666666666666666666666666666111111111111111661111166666666666666666666
            6666666666666611111111111111111666666666666666666666666111111111111111111111111111666666666666666666666666666666666666611111111111116666666666666666666666666666
            6666666666666661111111111111116666666666666666666666666111111111111111111111111111666666666666666666666666666666666666666111111111666666666666666666666666666666
            6666666666666666111111111111166666666666666666666666666111111111111111111111111111666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666661111111116666666666666666666666666666111111111111111111111111111666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666611111111111111111111111111666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666661111111111111111111111116666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666111111111111111111111116666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666661111111111111111166666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666111111111111111666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666611111111111116666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666111111111666666666666666666666666666666666666666666666666666666666661111111116666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111166666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666661111111111111116666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111111666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111111666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111166666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111166666666666
            6666666666666666666611111111166666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111166666666666
            6666666666666666661111111111111666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111166666666666
            6666666666666666611111111111111166666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111166666666666
            6666666666666666111111111111111116666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111111
            6666666666666661111111111111111111166666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111111
            6666666666666661111111111111111111111666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111111
            6666666666666611111111111111111111111166666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111111
            6666666666666666111111111111111111111116666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111111111111111111
            6666666666666666611111111111111111111111666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111111111111111111
            6666666666666666666111111111111111111111166666666666666666666666666666666666666666666666666666666666666666666666666666666666666666661111111111111111111111111111
            6666666666666666666611111111111111111111166666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111
            6666666666666666666661111111111111111111116666666666666666666666666666666666666666666666666666666611111116666666666666666666666666666661111111111111111111111111
            6666666666666666666661111111111111111111116666666666666666666666666666666666666666666666666666666111111111666666666666666666666666666666666666111111111111111111
            6666666666666666666666111111111111111111116666666666666666666661111111116666666666666666666666661111111111166666666666666666666666666666666666111111111111111111
            6666666666666666666666611111111111111111116666666666666666666611111111111666666666666666666661111111111111116666666666666666666666666666666666111111111111111111
            6666666666666666666666611111111111111111116666666666666666666111111111111166666666666666666611111111111111116666666666666666666666666666666666111111111111111111
            6666666666666666666666611111111111111111116666666666666666661111111111111116666666666666666111111111111111116666666666666666666666666666666666111111111111111111
            6666666666666666666666611111111111111111116666666666666666611111111111111111666666666666661111111111111111116666666666666666666666666666666666111111111111111111
            6666666666666666666666611111111111111111116666666666666666611111111111111111666666666666661111111111111111116666666666666666666666666666666666111111111111111111
            6666666666666666666666611111111111111111116666666666666666611111111111111111666666666666661111111111111111116666666666666666666666666666666666111111111111111111
            6666666666666666666666611111111111111111166666666666666666611111111111111111666666666666661111111111111111116666666666666666666666666666666666111111111111111111
            6666666666666666666666666661111111111111166666666666666666611111111111111111666666666666661111111111111111166666666666666666666666666666666666611111111111111111
            6666666666666666666666666666111111111111666666666666666666611111111111111111666666666666661111111111111111666666666666666666666666666666666666661111111111111111
            6666666666666666666666666666111111111116666666666666666666611111111111111111666666666666661111111111111116666666666666666666666666666666666666661111111111111111
            6666666666666666666666666666111111111166666666666666666666111111111111111111666666666666666111111111116666666666666666666666666666666666666666666111111111111111
            6666666666666666666666666666111111111666666666666666666661111111111111111111666666666666666611111111166666666666666666666666666666666666666666666611111111111111
            6666666666666666666666666666111111166666666666666666666611111111111111111116666666666666666661111111666666666666666666666611111116666666666666666666111111111111
            6666666666666666666666666666666666666666666666666666666111111111111111111166666666666666666666666666666666666666666666666111111111666666666666666666611111111111
            6666666666666666666666666666666666666666666666666666661111111111111111111666666666666666666666666666666666666666666666661111111111111111666666666666666666666666
            6666666666666666666666666666666666666666666666666666661111111111111111116666666666666666666666666666666666666666666666611111111111111111166666666666666666666666
            6666666666666666666666666666666666666666666666666666661111111111111111166666666666666666666666666666666666666666666666611111111111111111166666666666666666666666
            6666666666666666666666666666666666666666666666666666661111111111111111166666666666666666666666666666666666666666666666611111111111111111166666666666666666666666
            6666666666666666666666666666666666666666666666666666661111111111111111166666666666666666666666666666666666666666666666611111111111111111166666666666666666666666
            6666666666666666666666666666666666666666666666666666661111111111111111166666666666666666666666666666666666666666666666611111111111111111166666666666666666666666
            6666666666666666666666666666666666666666666666666666661111111111111111166666666666666666666666666666666666666666666666611111111111111111166666666666666666666666
            6666666666666666666666666666666666666666666666666666661111111111111111166666666666666666666666661111111666666666666666611111111111111111166666666666666666666666
            6666666666666666666666666666666666666666666666666666661111111111111111166666666666666666666666611111111166666666666666661111111111111111666666666666666666666666
            6666666666666666666666666666666666666666666666666666666111111111111111666666666666666666666666611111111166666666666666666111111111666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666611111111111116666666666666666666666666611111111166666666666666666611111116666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666661111111111166666666666666666666666666611111111166666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666111111111666666666666666666666666666611111111166666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111166666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111116666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666661111111111111111166666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666661111111111111111166666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111111116666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111111116666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111111116666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111111116666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111111116666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111111116666666666666666666666666666666666666666666666666666
            `)
        tiles.setCurrentTilemap(tilemap`level9`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile35`)
        withOrb = 0
    } else {
        game.showLongText("Collect the orb to move on.", DialogLayout.Bottom)
        mySprite.x += -27
    }
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile24`, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (withJetpack == 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . 9 9 9 9 . . . . . . . . 
            . . . . 9 f 9 f . . . . . . . . 
            . . . . 9 9 9 9 . . . . . . . . 
            . . . . 9 9 9 9 . . . . . . . . 
            . . . 9 9 9 9 9 9 f f f f f . . 
            . . 9 9 9 9 9 9 9 f 6 6 6 6 f . 
            . 9 9 9 9 9 9 9 9 f f f f f . . 
            . 9 f 9 9 9 9 9 9 . . . . . . . 
            . f f 9 9 9 9 9 9 . . . . . . . 
            . f f 9 9 9 9 9 9 . . . . . . . 
            . f f 9 f f . . 9 . . . . . . . 
            . . f 9 f f . . 9 . . . . . . . 
            . . 2 9 2 . . . 9 . . . . . . . 
            . . 4 9 2 . . . 9 . . . . . . . 
            . . 4 9 9 9 . . 9 9 9 . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . 9 9 9 9 . . . . . . . . 
            . . . . 9 f 9 f . . . . . . . . 
            . . . . 9 9 9 9 . . . . . . . . 
            . . . . 9 9 9 9 . . . . . . . . 
            . . . 9 9 9 9 9 9 f f f f f . . 
            . . 9 9 9 9 9 9 9 f 6 6 6 6 f . 
            . 9 9 9 9 9 9 9 9 f f f f f . . 
            . 9 f 9 9 9 9 9 9 . . . . . . . 
            . f f 9 9 9 9 9 9 . . . . . . . 
            . f f 9 9 9 9 9 9 . . . . . . . 
            . f f 9 f f . . 9 . . . . . . . 
            . . f 9 f f . . 9 . . . . . . . 
            . . 2 9 2 . . . 9 . . . . . . . 
            . . 2 9 4 . . . 9 . . . . . . . 
            . . 4 9 9 9 . . 9 9 9 . . . . . 
            `],
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . 9 9 9 9 . . . . . . . . 
            . . . . 9 f 9 f . . . . . . . . 
            . . . . 9 9 9 9 . . . . . . . . 
            . . . . 9 9 9 9 . . . . . . . . 
            . . . 9 9 9 9 9 9 . . . . . . . 
            . 9 9 9 9 9 9 9 9 f f f f f . . 
            . 9 . 9 9 9 9 9 9 f 6 6 6 6 f . 
            . 9 . 9 9 9 9 9 9 f f f f f . . 
            . . . 9 9 9 9 9 9 . . . . . . . 
            . . . 9 9 9 9 9 9 . . . . . . . 
            . . . 9 . . . . 9 . . . . . . . 
            . . . 9 . . . . 9 . . . . . . . 
            . . . 9 . . . . 9 . . . . . . . 
            . . . 9 . . . . 9 . . . . . . . 
            . . . 9 9 9 . . 9 9 9 . . . . . 
            `],
        500,
        false
        )
    }
})
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 50, function (status) {
    bossProjectile = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . 2 4 4 4 4 2 2 . . . . . 
        . . 2 4 4 2 2 2 4 2 2 2 . . . . 
        . . 2 4 5 5 4 4 4 2 2 2 . . . . 
        . . 2 4 5 5 5 5 5 4 2 2 . . . . 
        . 2 4 4 5 5 5 5 5 5 4 2 . . . . 
        . 2 4 4 5 5 5 5 4 4 4 2 . . . . 
        . 2 2 4 2 4 4 4 2 2 2 . . . . . 
        . 2 2 2 2 4 2 2 2 . . . . . . . 
        . . . 2 4 4 2 2 . . . . . . . . 
        . . . . 2 2 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.bossProjectile)
    bossProjectile.setPosition(51, 0)
    bossProjectile.setVelocity(randint(-20, 20), randint(-20, 20))
    battery = sprites.create(img`
        . . . . . . 5 f 5 . . . . . . . 
        . . . . . 5 5 f 5 5 . . . . . . 
        . . . 5 . 5 f f f 5 5 . . . . . 
        . . . 5 5 5 f f f 5 5 . 5 . . . 
        . . . 5 5 5 f f f 5 5 5 5 . . . 
        . . . 5 5 5 f f f 5 5 5 . . . . 
        . . . 5 5 f f f f f 5 5 . . . . 
        . . . 5 5 f f f f f 5 5 . . . . 
        . . . 5 5 f f f f f 5 5 5 . . . 
        . . . 5 5 f f f f f 5 . . 5 . . 
        . . . 5 5 f f f f f 5 5 . 5 . . 
        . . 5 5 f f f f f f f 5 5 5 . . 
        . . 5 5 f f f f f f f 5 5 . . . 
        . . . 5 f f f f f f f 5 . . . . 
        . . 5 5 f f f f f f f 5 . . . . 
        . . 5 5 f f f f f f f 5 . . . . 
        `, SpriteKind.Food)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile34`)
    mySprite.vy = 1000
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile33`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
    scene.cameraShake(4, 100)
    info.changeLifeBy(-1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (withJetpack == 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 9 9 f f f . . . . 
            . . . . . . 9 9 f f f f f 2 2 4 
            . . . . . 9 9 9 9 9 9 9 9 9 9 9 
            . 9 9 9 9 9 9 9 9 9 9 f f 2 4 9 
            . f 9 9 9 9 9 9 9 9 9 f f . . 9 
            . 9 9 9 9 9 9 9 9 9 9 . . . . . 
            . f 9 9 9 9 9 9 9 9 9 . . . . . 
            . . . . . 9 9 9 9 9 9 9 9 9 9 9 
            . . f f f f f . . . . . . . . 9 
            . f 6 6 6 6 f . . . . . . . . 9 
            . . f f f f f . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . 9 9 . . . . . . . . . 
            . . . . . . 9 f f f f f . . . . 
            . . . . . . 9 f f f f f f 2 2 4 
            . . . . . 9 9 9 9 9 9 9 9 9 9 9 
            . 9 9 9 9 9 9 9 9 9 9 f f 2 4 9 
            . f 9 9 9 9 9 9 9 9 9 f f . . 9 
            . 9 9 9 9 9 9 9 9 9 9 . . . . . 
            . f 9 9 9 9 9 9 9 9 9 . . . . . 
            . . . . . . 9 9 9 9 9 9 9 9 9 9 
            . . . . f f f f f . . . . . . 9 
            . . . f 6 6 6 6 f . . . . . . 9 
            . . . . f f f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . 9 . . . . . . . . . 
            . . . . . . 9 f f f f f . . . . 
            . . . . . . 9 9 f f f f f 2 2 4 
            . . . . . 9 9 9 9 9 9 9 9 9 9 9 
            . 9 9 9 9 9 9 9 9 9 9 f f 2 4 9 
            . f 9 9 9 9 9 9 9 9 9 f f . . 9 
            . 9 9 9 9 9 9 9 9 9 9 . . . . . 
            . f 9 9 9 9 9 9 9 9 9 . . . . . 
            . . . . . 9 9 9 9 9 9 9 9 9 9 9 
            . . f f f f f . . . . . . . . 9 
            . f 6 6 6 6 f . . . . . . . . 9 
            . . f f f f f . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 9 9 9 9 . . . . 
            . . . . . . . . f 9 f 9 . . . . 
            . . . . . . . . 9 9 9 9 . . . . 
            . . . . . . . . 9 9 9 9 . . . . 
            . . . . . . . 9 9 9 9 9 9 . . . 
            . . f f f f f 9 9 9 9 9 9 9 9 . 
            . f 6 6 6 6 f 9 9 9 9 9 9 . . 9 
            . . f f f f f 9 9 9 9 9 9 . . . 
            . . . . . . . 9 9 9 9 9 9 . . . 
            . . . . . . . 9 9 9 9 9 9 . . . 
            . . . . . . . 9 . . . . 9 . . . 
            . . . . . . . 9 . . . . 9 . . . 
            . . . . . . . 9 . . . . 9 . . . 
            . . . . . . . 9 . . . . 9 . . . 
            . . . . . 9 9 9 . . 9 9 9 . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 9 9 9 9 . . . . 
            . . . . . . . . f 9 f 9 . . . . 
            . . . . . . . . 9 9 9 9 . . . . 
            . . . . . . . . 9 9 9 9 . . . . 
            . . . . . . . 9 9 9 9 9 9 . . . 
            . . f f f f f 9 9 9 9 9 9 9 9 . 
            . f 6 6 6 6 f 9 9 9 9 9 9 . 9 . 
            . . f f f f f 9 9 9 9 9 9 . 9 . 
            . . . . . . . 9 9 9 9 9 9 . . . 
            . . . . . . . 9 9 9 9 9 9 . . . 
            . . . . . . . 9 . . . . 9 . . . 
            . . . . . . . 9 . . . . 9 . . . 
            . . . . . . . 9 . . . . 9 . . . 
            . . . . . . 9 . . . . 9 . . . . 
            . . . . 9 9 9 . . 9 9 9 . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 9 9 9 9 . . . . 
            . . . . . . . . f 9 f 9 . . . . 
            . . . . . . . . 9 9 9 9 . . . . 
            . . . . . . . . 9 9 9 9 . . . . 
            . . . . . . . 9 9 9 9 9 9 . . . 
            . . f f f f f 9 9 9 9 9 9 9 9 9 
            . f 6 6 6 6 f 9 9 9 9 9 9 . . . 
            . . f f f f f 9 9 9 9 9 9 . . . 
            . . . . . . . 9 9 9 9 9 9 . . . 
            . . . . . . . 9 9 9 9 9 9 . . . 
            . . . . . . . 9 . . . . 9 . . . 
            . . . . . . . 9 . . . . 9 . . . 
            . . . . . . . 9 . . . . 9 . . . 
            . . . . . . . . 9 . . . . 9 . . 
            . . . . . . 9 9 9 . . 9 9 9 . . 
            `],
        100,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile42`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level8`)
    boss = sprites.create(img`
        ....fff.....ffff..............
        ....f22f...f2222f.............
        ....f22f..f222222f............
        .fff222f.f2222222f....f.......
        f2222ff.f222222222f..f2f......
        f2ff222f22222222222f.f22f.....
        .ff2ff22fff222fff222f.f2f.....
        ..f2f22222fffff222222ff2f.....
        ..f2f22222222222222222f2f.....
        ...f2222fff222fff2222222f.....
        ...f2222fff222fff2222222ff....
        ..222222fff222fff222222222f...
        .f22222222222f2222222222222ff.
        f22222222222f4f2222222222222f.
        f2222222222f444f2222222222222f
        f222222222f44444f222222222222f
        f222222222f444444f22222222222f
        f2222222ff44444444f2222222222f
        f222222f44444444444f22222222f.
        f22222ff444444444444f222222f..
        f2222f44444445444444f222222f..
        f222f444444455544444f22222f...
        f2222ff44444555544444f2222f...
        f2222f444444555544f44f2222f...
        f22222f4444444444f2fff222f....
        f22222f444444444f2222222f.....
        .ff2222ffffff44f22222fff......
        ...f22222222fff2222ff.........
        ....f22222222222222f..........
        ....fffffffffffffff...........
        `, SpriteKind.bosss)
    tiles.placeOnRandomTile(boss, assets.tile`myTile36`)
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.value = 100
    statusbar.attachToSprite(boss)
    statusbar.setLabel("HP")
    statusbar.setBarBorder(1, 15)
    mySprite.sayText("There's a Boss!?", 1000, false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    if (info.life() >= 3) {
        game.showLongText("Full Health Already!", DialogLayout.Bottom)
    } else {
        info.changeLifeBy(1)
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (withJetpack == 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f . . . . . 
            . . . . 9 9 9 . . f 6 f . . . . 
            . . . . f 9 f . . f 6 f . . . . 
            . . . . 9 9 9 . . f 6 f . . . . 
            . . . 9 9 9 9 9 9 f 6 f . . . . 
            . . 9 9 9 9 9 9 9 f f f . . . . 
            . 9 9 9 9 9 9 9 9 . . . . . . . 
            . 9 f 9 9 9 9 9 9 . . . . . . . 
            . f f 9 9 9 9 9 9 . . . . . . . 
            . f f 9 9 9 9 9 9 . . . . . . . 
            . f f 9 f f . . 9 . . . . . . . 
            . . f 9 f f . . 9 . . . . . . . 
            . . 2 9 2 . . . 9 . . . . . . . 
            . . 2 9 4 . . . 9 . . . . . . . 
            . . 4 9 9 9 . . 9 9 9 . . . . . 
            `],
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . 9 9 9 9 . . . . . . . . 
            . . . . 9 f 9 f . . . . . . . . 
            . . . . 9 9 9 9 . . . . . . . . 
            . . . . 9 9 9 9 . . . . . . . . 
            . . . 9 9 9 9 9 9 . . . . . . . 
            . 9 9 9 9 9 9 9 9 f f f f f . . 
            . 9 . 9 9 9 9 9 9 f 6 6 6 6 f . 
            . 9 . 9 9 9 9 9 9 f f f f f . . 
            . . . 9 9 9 9 9 9 . . . . . . . 
            . . . 9 9 9 9 9 9 . . . . . . . 
            . . . 9 . . . . 9 . . . . . . . 
            . . . 9 . . . . 9 . . . . . . . 
            . . . 9 . . . . 9 . . . . . . . 
            . . . 9 . . . . 9 . . . . . . . 
            . . . 9 9 9 . . 9 9 9 . . . . . 
            `],
        500,
        false
        )
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (withJetpack == 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f . . . . . 
            . . . . 9 9 9 . . f 6 f . . . . 
            . . . . f 9 f . . f 6 f . . . . 
            . . . . 9 9 9 . . f 6 f . . . . 
            . . . 9 9 9 9 9 9 f 6 f . . . . 
            . . 9 9 9 9 9 9 9 f f f . . . . 
            . 9 9 9 9 9 9 9 9 . . . . . . . 
            . 9 f 9 9 9 9 9 9 . . . . . . . 
            . f f 9 9 9 9 9 9 . . . . . . . 
            . f f 9 9 9 9 9 9 . . . . . . . 
            . f f 9 f f . . 9 . . . . . . . 
            . . f 9 f f . . 9 . . . . . . . 
            . . 2 9 2 . . . 9 . . . . . . . 
            . . 2 9 4 . . . 9 . . . . . . . 
            . . 4 9 9 9 . . 9 9 9 . . . . . 
            `],
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 9 9 9 9 . . . . 
            . . . . . . . . f 9 f 9 . . . . 
            . . . . . . . . 9 9 9 9 . . . . 
            . . . . . . . . 9 9 9 9 . . . . 
            . . . . . . . 9 9 9 9 9 9 . . . 
            . . f f f f f 9 9 9 9 9 9 9 9 . 
            . f 6 6 6 6 f 9 9 9 9 9 9 . 9 . 
            . . f f f f f 9 9 9 9 9 9 . 9 . 
            . . . . . . . 9 9 9 9 9 9 . . . 
            . . . . . . . 9 9 9 9 9 9 . . . 
            . . . . . . . 9 . . . . 9 . . . 
            . . . . . . . 9 . . . . 9 . . . 
            . . . . . . . 9 . . . . 9 . . . 
            . . . . . . . 9 . . . . 9 . . . 
            . . . . . 9 9 9 . . 9 9 9 . . . 
            `],
        500,
        false
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    game.showLongText("Invasion captain, remember to get points by killing enemies and to collect the orbs in every level to move on. Good luck", DialogLayout.Bottom)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    animation.runImageAnimation(
    boss,
    [img`
        ............ffffff............
        ...ff......f22222ff...........
        ...fff....f2222222f....ffff...
        ...f2f...ff2222222ff..ff22f...
        ..ff22ff.f222222222ffff22ff...
        .f22222fff2222222222ff22ff....
        ffffff22222222222222222ff.....
        .....f22fff222ffff2222ff......
        ....f222222fff22222222ff......
        ....f222fff222fff222222fff....
        ...f2222fff222fff22222222ff...
        .ff22222fff222fff2222222222ff.
        ff22222222222222222222222222f.
        f2222222222222222222222222222f
        f222222222fff222ffff222222222f
        f2222222ff44fffff44ff22222222f
        f2222222f4444444444ff222222fff
        f222222f4455455544ff22222ff...
        f22222ff45555544fff22222ff....
        f22222f44555554ff2222222f.....
        f22222f44555544f2222222f......
        f22222f44555444f222222ff......
        f22222f4444444ff22222ff.......
        f222222ff444fff22222ff........
        .f2222222ffff222222ff.........
        ..f22222222222222ff...........
        ..f2222222222222ff............
        ..ff22222222222ff.............
        ...ff2222222222f..............
        ....fffffffffff...............
        `,img`
        ............ffffff............
        ...ff......f22222ff...........
        ...fff....f2222222f....ffff...
        ...f2f...ff2222222ff..ff22f...
        ..ff22ff.f222222222ffff22ff...
        .f22222fff2222222222ff22ff....
        ffffff22fffffffff222222ff.....
        .....f2222222222222222ff......
        ....f22222222222222222ff......
        ....f222fff222fff222222fff....
        ...f2222fff222fff22222222ff...
        .ff22222fff222fff2222222222ff.
        ff22222222222222222222222222f.
        f2222222222222222222222222222f
        f222222222fff222ffff222222222f
        f2222222ff44fffff44ff22222222f
        f2222222f4444444444ff222222fff
        f222222f44554555444f22222ff...
        f22222ff4555555544f22222ff....
        f22222f44555555544f22222f.....
        f22222f4455555444f22222f......
        f22222f445555544f22222ff......
        f22222f4444444ff22222ff.......
        f222222ff444fff22222ff........
        .f2222222ffff222222ff.........
        ..f22222222222222ff...........
        ..f2222222222222ff............
        ..ff22222222222ff.............
        ...ff2222222222f..............
        ....fffffffffff...............
        `,img`
        ............ffffff............
        ...ff......f22222ff...........
        ...fff....f2222222f....ffff...
        ...f2f...ff2222222ff..ff22f...
        ..ff22ff.f222222222ffff22ff...
        .f22222fff2222222222ff22ff....
        ffffff22fff222ff2222222ff.....
        .....f2ff222222ffff222ff......
        ....f2ff2222222222ff22ff......
        ....f2f2fff222fff22f222fff....
        ...f2222fff222fff22222222ff...
        .ff22222fff222fff2222222222ff.
        ff22222222222222222222222222f.
        f2222222222222222222222222222f
        f222222222fff222ffff222222222f
        f2222222ff44fffff44ff22222222f
        f2222222f4444444444ff222222fff
        f222222f44554555444f22222ff...
        f22222ff4555555544f22222ff....
        f22222f44555555544f22222f.....
        f22222f4455555444f22222f......
        f22222f445555544f22222ff......
        f22222f4444444ff22222ff.......
        f222222ff444fff22222ff........
        .f2222222ffff222222ff.........
        ..f22222222222222ff...........
        ..f2222222222222ff............
        ..ff22222222222ff.............
        ...ff2222222222f..............
        ....fffffffffff...............
        `,img`
        ............ff.fff............
        ...ff......f22222ff...........
        ....ff....f2222222f....ffff...
        ...f2f...ff2222.22ff..ff2.f...
        ..f.22.f.f22.222222ffff.2ff...
        .f22222fff2222222222ff22ff....
        ffffff.2fff222ff222.222ff.....
        .....f2ff2222.2ffff222ff......
        ....f2ff2222222222ff22ff......
        ....f2f2fff2.2fff22f222fff....
        ...f2222fff222fff22222222ff...
        .ff22.22fff222ff.222.222.22ff.
        ff2222222222222222222222.222f.
        f2222222.2222222222.22.222222f
        f222222222fff222ffff2222222.2f
        f222.222ff44fffff44ff2222.222f
        f2222.22f4444444444ff222222fff
        f222222f44554555444f22222f....
        f22222ff.555555544f222.2ff....
        f2.222f445.5555.44f22222f.....
        f22222f4455555444f22222f......
        f22222f445555544f22222ff......
        f222.2f4444444ff22222ff.......
        f222222ff444fff222.2ff........
        .f2222222ffff222222ff.........
        ..f2222222222.222ff...........
        ..f2.22222.22222ff............
        ..ff22222222222ff.............
        ...ff2222222222f..............
        ....fffffffffff...............
        `,img`
        ............ff.fff............
        ...ff......f22...ff...........
        ....ff......22...2f....ffff...
        ...f2f......22...2ff..ff2.f...
        ..f....f.....22...2ff...2ff...
        .f2...2fff22222...22f...ff....
        fff....2...222f...2.2...f.....
        .....f2f...22.2f...222ff......
        ....f2ff...22222...f22ff......
        ....f2f2fff2.2ff...f222fff....
        ...f2222f...22f...2...222ff...
        ......22f...22f...2...22.22ff.
        f....2222...222...2...22.222f.
        f....222.2222222222....222222f
        f222222222f...22fff...2222...f
        ..22.222......fff44...222....f
        ..222.22.........44ff22222...f
        ..22222f...545...44...222f....
        f...22ff.55555...4f....2ff....
        f....2f445.5555.44f...22f.....
        f....2f4455555444f22222f......
        f2...2f445555544f22222ff......
        f222.2f4444444ff22222ff.......
        f2222...f444...222.2ff........
        .f222...2f.....2222ff.........
        ..f22...22.....22ff...........
        ..f2.22......222ff............
        ..ff222...22222ff.............
        ...ff22...22222f..............
        ....fffffffffff...............
        `,img`
        ............ff.fff............
        ...ff.........................
        ....ff.................ffff...
        ...f2f................ff2.f...
        ..f....f................2ff...
        .f2...2.................ff....
        fff...........f.........f.....
        .....f2.......2f......ff......
        ....f.........22......ff......
        ....f........2ff...f2.........
        ....2.......22f...2.......f...
        ............22............2ff.
        ............22............22f.
        ..........2222............222f
        f2222.....f...........2222...f
        ......................222....f
        .................44ff22222...f
        ...........54.....4...222f....
        ..........555.....f....2ff....
        ..................f...........
        ..................22..........
        ..............................
        ..............................
        f2222...f4....................
        .f222...2f....................
        ..f...........................
        ..f..............f............
        ..f........2..................
        ...........2..................
        ...........f..................
        `,img`
        ..............................
        ...ff.........................
        ....ff....................f...
        ...f2f....................f...
        ..f....f..................f...
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..........................f...
        ..........................2ff.
        ..........................22f.
        ..........................222f
        .............................f
        .............................f
        .............................f
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..f..............f............
        ..f...........................
        ...........2..................
        ...........f..................
        `,img`
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `],
    100,
    false
    )
    mySprite.sayText("That wasn't very hard", 2000, false)
    tiles.setTileAt(tiles.getTileLocation(21, 20), assets.tile`myTile40`)
    tiles.setTileAt(tiles.getTileLocation(22, 18), assets.tile`transparency16`)
    tiles.setTileAt(tiles.getTileLocation(22, 19), assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile40`, function (sprite, location) {
    mySprite.startEffect(effects.halo)
    withOrb += 1
    tiles.setTileAt(location, assets.tile`transparency16`)
    mySprite.sayText("Got the orb!", 500, false)
    effects.clearParticles(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    withJetpack = 1
    controller.moveSprite(mySprite, 100, 100)
    effects.confetti.startScreenEffect()
    game.showLongText("You got the Jetpack! Fly to your hearts content.", DialogLayout.Bottom)
    effects.confetti.endScreenEffect()
    tiles.setTileAt(location, assets.tile`transparency16`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (withJetpack == 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f 9 9 . . . . . . . 
            4 2 2 f f f f f 9 9 . . . . . . 
            9 9 9 9 9 9 9 9 9 9 9 . . . . . 
            9 4 2 f f 9 9 9 9 9 9 9 9 9 9 . 
            9 . . f f 9 9 9 9 9 9 9 9 9 f . 
            . . . . . 9 9 9 9 9 9 9 9 9 9 . 
            . . . . . 9 9 9 9 9 9 9 9 9 f . 
            9 9 9 9 9 9 9 9 9 9 9 . . . . . 
            9 . . . . . . . . f f f f f . . 
            9 . . . . . . . . f 6 6 6 6 f . 
            . . . . . . . . . f f f f f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . 9 9 . . . . . 
            . . . . f f f f f 9 . . . . . . 
            4 2 2 f f f f f f 9 . . . . . . 
            9 9 9 9 9 9 9 9 9 9 9 . . . . . 
            9 4 2 f f 9 9 9 9 9 9 9 9 9 9 . 
            9 . . f f 9 9 9 9 9 9 9 9 9 f . 
            . . . . . 9 9 9 9 9 9 9 9 9 9 . 
            . . . . . 9 9 9 9 9 9 9 9 9 f . 
            9 9 9 9 9 9 9 9 9 9 . . . . . . 
            9 . . . . . . f f f f f . . . . 
            9 . . . . . . f 6 6 6 6 f . . . 
            . . . . . . . f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . 9 . . . . . . 
            . . . . f f f f f 9 . . . . . . 
            4 2 2 f f f f f 9 9 . . . . . . 
            9 9 9 9 9 9 9 9 9 9 9 . . . . . 
            9 4 2 f f 9 9 9 9 9 9 9 9 9 9 . 
            9 . . f f 9 9 9 9 9 9 9 9 9 f . 
            . . . . . 9 9 9 9 9 9 9 9 9 9 . 
            . . . . . 9 9 9 9 9 9 9 9 9 f . 
            9 9 9 9 9 9 9 9 9 9 9 . . . . . 
            9 . . . . . . . . f f f f f . . 
            9 . . . . . . . . f 6 6 6 6 f . 
            . . . . . . . . . f f f f f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . 9 9 9 9 . . . . . . . . 
            . . . . 9 f 9 f . . . . . . . . 
            . . . . 9 9 9 9 . . . . . . . . 
            . . . . 9 9 9 9 . . . . . . . . 
            . . . 9 9 9 9 9 9 . . . . . . . 
            . 9 9 9 9 9 9 9 9 f f f f f . . 
            9 . . 9 9 9 9 9 9 f 6 6 6 6 f . 
            . . . 9 9 9 9 9 9 f f f f f . . 
            . . . 9 9 9 9 9 9 . . . . . . . 
            . . . 9 9 9 9 9 9 . . . . . . . 
            . . . 9 . . . . 9 . . . . . . . 
            . . . 9 . . . . 9 . . . . . . . 
            . . . 9 . . . . 9 . . . . . . . 
            . . . 9 . . . . 9 . . . . . . . 
            . . . 9 9 9 . . 9 9 9 . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . 9 9 9 9 . . . . . . . . 
            . . . . 9 f 9 f . . . . . . . . 
            . . . . 9 9 9 9 . . . . . . . . 
            . . . . 9 9 9 9 . . . . . . . . 
            . . . 9 9 9 9 9 9 . . . . . . . 
            . 9 9 9 9 9 9 9 9 f f f f f . . 
            . 9 . 9 9 9 9 9 9 f 6 6 6 6 f . 
            . 9 . 9 9 9 9 9 9 f f f f f . . 
            . . . 9 9 9 9 9 9 . . . . . . . 
            . . . 9 9 9 9 9 9 . . . . . . . 
            . . . 9 . . . . 9 . . . . . . . 
            . . . 9 . . . . 9 . . . . . . . 
            . . . 9 . . . . 9 . . . . . . . 
            . . . . 9 . . . . 9 . . . . . . 
            . . . . 9 9 9 . . 9 9 9 . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . 9 9 9 9 . . . . . . . . 
            . . . . 9 f 9 f . . . . . . . . 
            . . . . 9 9 9 9 . . . . . . . . 
            . . . . 9 9 9 9 . . . . . . . . 
            . . . 9 9 9 9 9 9 . . . . . . . 
            9 9 9 9 9 9 9 9 9 f f f f f . . 
            . . . 9 9 9 9 9 9 f 6 6 6 6 f . 
            . . . 9 9 9 9 9 9 f f f f f . . 
            . . . 9 9 9 9 9 9 . . . . . . . 
            . . . 9 9 9 9 9 9 . . . . . . . 
            . . . 9 . . . . 9 . . . . . . . 
            . . . 9 . . . . 9 . . . . . . . 
            . . . 9 . . . . 9 . . . . . . . 
            . . 9 . . . . 9 . . . . . . . . 
            . . 9 9 9 . . 9 9 9 . . . . . . 
            `],
        100,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile7`, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    if (withJetpack == 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . 9 9 9 9 . . . . . . . . 
            . . . . 9 f 9 f . . . . . . . . 
            . . . . 9 9 9 9 . . . . . . . . 
            . . . . 9 9 9 9 . . . . . . . . 
            . . . 9 9 9 9 9 9 f f f f f . . 
            . . 9 9 9 9 9 9 9 f 6 6 6 6 f . 
            . 9 9 9 9 9 9 9 9 f f f f f . . 
            . 9 f 9 9 9 9 9 9 . . . . . . . 
            . f f 9 9 9 9 9 9 . . . . . . . 
            . f f 9 9 9 9 9 9 . . . . . . . 
            . f f 9 f f . . 9 . . . . . . . 
            . . f 9 f f . . 9 . . . . . . . 
            . . 2 9 2 . . . 9 . . . . . . . 
            . . 4 9 2 . . . 9 . . . . . . . 
            . . 4 9 9 9 . . 9 9 9 . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . 9 9 9 9 . . . . . . . . 
            . . . . 9 f 9 f . . . . . . . . 
            . . . . 9 9 9 9 . . . . . . . . 
            . . . . 9 9 9 9 . . . . . . . . 
            . . . 9 9 9 9 9 9 f f f f f . . 
            . . 9 9 9 9 9 9 9 f 6 6 6 6 f . 
            . 9 9 9 9 9 9 9 9 f f f f f . . 
            . 9 f 9 9 9 9 9 9 . . . . . . . 
            . f f 9 9 9 9 9 9 . . . . . . . 
            . f f 9 9 9 9 9 9 . . . . . . . 
            . f f 9 f f . . 9 . . . . . . . 
            . . f 9 f f . . 9 . . . . . . . 
            . . 2 9 2 . . . 9 . . . . . . . 
            . . 2 9 4 . . . 9 . . . . . . . 
            . . 4 9 9 9 . . 9 9 9 . . . . . 
            `],
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . 9 9 9 9 . . . . . . . . 
            . . . . 9 f 9 f . . . . . . . . 
            . . . . 9 9 9 9 . . . . . . . . 
            . . . . 9 9 9 9 . . . . . . . . 
            . . . 9 9 9 9 9 9 . . . . . . . 
            . 9 9 9 9 9 9 9 9 f f f f f . . 
            . 9 . 9 9 9 9 9 9 f 6 6 6 6 f . 
            . 9 . 9 9 9 9 9 9 f f f f f . . 
            . . . 9 9 9 9 9 9 . . . . . . . 
            . . . 9 9 9 9 9 9 . . . . . . . 
            . . . 9 . . . . 9 . . . . . . . 
            . . . 9 . . . . 9 . . . . . . . 
            . . . 9 . . . . 9 . . . . . . . 
            . . . 9 . . . . 9 . . . . . . . 
            . . . 9 9 9 . . 9 9 9 . . . . . 
            `],
        500,
        false
        )
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (withJetpack == 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 9 9 9 . . . . . . . . . 
            . . . . 9 9 9 . . . . . . . . . 
            . . . . f 9 f . . . . . . . . . 
            . . f 9 9 9 9 9 f f f . . . . . 
            . . 9 9 9 9 9 9 f 6 f . . . . . 
            . 9 9 9 9 9 9 9 f 6 f . . . . . 
            . 9 f 9 9 9 9 9 f 6 f . . . . . 
            . 9 f 9 9 9 9 9 f 6 f . . . . . 
            . . f 9 9 9 9 9 . f . . . . . . 
            . . f 9 f f f 9 f . . . . . . . 
            . . . 9 4 2 4 9 . . . . . . . . 
            . . . 9 . 2 . 9 . . . . . . . . 
            . . . 9 . . . 9 . . . . . . . . 
            . . . 9 9 9 . 9 9 9 . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . 9 9 9 . . . . . . . . . 
            . . . . 9 9 9 . . . . . . . . . 
            . . . . f 9 f . . . . . . . . . 
            . . . 9 9 9 9 9 f f f . . . . . 
            . . 9 9 9 9 9 9 f 6 f . . . . . 
            . 9 9 9 9 9 9 9 f 6 f . . . . . 
            . 9 f 9 9 9 9 9 f 6 f . . . . . 
            . 9 f 9 9 9 9 9 f 6 f . . . . . 
            . . f 9 9 9 9 9 . f . . . . . . 
            . . . 9 f f f 9 . . . . . . . . 
            . . . 9 4 2 4 9 . . . . . . . . 
            . . . 9 9 9 . 9 9 9 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 9 9 9 . . . . . . . . . 
            . . . . 9 9 9 . . . . . . . . . 
            . . . . f 9 f . . . . . . . . . 
            . . . 9 9 9 9 9 f f f . . . . . 
            . . 9 9 9 9 9 9 f 6 f . . . . . 
            . 9 9 9 9 9 9 9 f 6 f . . . . . 
            . 9 . 9 9 9 9 9 f 6 f . . . . . 
            . 9 . 9 9 9 9 9 f 6 f . . . . . 
            . . . 9 9 9 9 9 . f . . . . . . 
            . . . 9 . . . 9 . . . . . . . . 
            . . . 9 . . . 9 . . . . . . . . 
            . . . 9 . . . 9 . . . . . . . . 
            . . . 9 . . . 9 . . . . . . . . 
            . . . 9 9 9 . 9 9 9 . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . 9 9 9 . . . . . . . . . 
            . . . . 9 9 9 . . . . . . . . . 
            . . . . f 9 f . . . . . . . . . 
            . . . 9 9 9 9 9 f f f . . . . . 
            . . 9 9 9 9 9 9 f 6 f . . . . . 
            . 9 9 9 9 9 9 9 f 6 f . . . . . 
            . 9 . 9 9 9 9 9 f 6 f . . . . . 
            . 9 . 9 9 9 9 9 f 6 f . . . . . 
            . . . 9 9 9 9 9 . f . . . . . . 
            . . . 9 . . . 9 . . . . . . . . 
            . . . 9 . . . 9 . . . . . . . . 
            . . . 9 9 9 . 9 9 9 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    }
})
info.onLifeZero(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.bosss, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    if (with_battery > 0) {
        statusbar.value += -10
    } else {
        statusbar.value += -3
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    with_battery += 1
    game.showLongText("This will let me do more damage!", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.bossProjectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile27`, function (sprite, location) {
    if (withOrb > 0) {
        scene.setBackgroundImage(img`
            ccccccccccfffffffffffffcccccccccccccccccccccccfffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffccccccccccccccccc
            ccccccccccfffffffffffffcccccccccccccccccccccccfffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffccccccccccccccccc
            ccccccccccfffffffffffffcccccccccccccccccccccccfffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffcccccccccccccccccc
            ccccccccccfffffffffffffcccccccccccccccccccccccfffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffcccccccccccccccccc
            ccccccccccfffffffffffffcccccccccccccccccccccccfffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffcccccccccccccccccc
            ccccccccccfffffffffffffcccccccccccccccccccccccfffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffcccccccccccccccccc
            ccccccccccfffffffffffffcccccccccccccccccccccccfffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffcccccccccccccccccc
            cccccccccfffffffffffffffcccccccccccccccccccccffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffcccccccccccccccccc
            ccccccccffffffffffffffffcccccccccccccccccccccffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffcccccccccccccccccc
            cccccccffffffffffffffffffcccccccccccccccccccfffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffcccccccccccccccccc
            ccccccffffffffffffffffffffcccccccccccccccccffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffcccccccccccccccccc
            fffffffffffffffffffffffffffcccccccccccccccfffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffccccccccccccccccc
            ffffffffffffffffffffffffffffcccccccccccccffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffccccccccccccccccc
            ffffffffffffffffffffffffffffffcccccccccffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffcccccccccccccccf
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffcccccccccccccff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffcccccccccffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffcccccccccffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccf
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccc
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccc
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccc
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccc
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccc
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccc
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccc
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccc
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccc
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccc
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccc
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccc
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccc
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccf
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fcccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            cccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            cccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccfffffffffffffffffffffffffffffff
            cccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccfffffffffffffffffffffffffffff
            cccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccfffffffffffffffffffffffffff
            ccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccffffffffffffffffffffffffff
            ccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccfffffffffffffffffffffffff
            ccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccffffffffffffffffffffffff
            ccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccffffffffffffffffffffffff
            ccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccfffffffffffffffffffffff
            ccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccfffffffffffffffffffffff
            ccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccffffffffffffffffffffff
            ccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccffffffffffffffffffffff
            ccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccffffffffffffffffffffff
            ccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccffffffffffffffffffffff
            ccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccffffffffffffffffffffff
            cccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccffffffffffffffffffffff
            cccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccffffffffffffffffffffff
            ccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccfffffffffffffffffccccc
            cccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccffffffffffffffffcccccc
            ccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccfffffffffffffffccccccc
            cccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccffffffffffffffcccccccc
            ccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccfffffffffffffffcccccccc
            fcccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccfffffffffffffffcccccccc
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccffffffffffffffffcccccccc
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccffffffffffffffffcccccccc
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccfffffffffffffffffcccccccc
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccffffffffffffffffffcccccccc
            `)
        tiles.setCurrentTilemap(tilemap`level4`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile29`)
        mySprite.sayText("Gotta get through this cave!", 1000, false)
        mySprite.sayText("Gravity feels different down here", 100, false)
        withOrb = 0
        withJetpack = 0
    } else {
        game.showLongText("Collect the orb to move on.", DialogLayout.Bottom)
        mySprite.x += -27
    }
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile25`, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
function shooting () {
    if (mySprite.vx < 0) {
        if (withJetpack == 1) {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . f . . . . . . . . . . . 
                . . . f 6 f . . . 9 9 9 . . . . 
                . . . f 6 6 f . . f 9 9 . . . . 
                . . . f 6 6 f f . 9 9 9 . . . . 
                . . . . f 6 6 f 9 9 9 9 9 f f f 
                . . . . f 6 6 f 9 9 9 9 9 f f f 
                . . . . . f 6 f 9 9 9 9 9 f f f 
                . . . . . . f f 9 9 9 9 9 f f f 
                . . . . . . . . 9 9 9 9 9 f f f 
                . . . . . . . . 9 9 9 9 9 f f . 
                . . . . . . . . 9 . . . 9 4 4 . 
                . . . . . . . . 9 . . . 9 4 2 . 
                . . . . . . . . 9 . . . 9 2 . . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . 9 9 9 . 9 9 9 . . . 
                `,img`
                . . . 7 7 8 . . . . . . . . . . 
                . . 7 8 f 8 . . . . . . . . . . 
                . . . f 6 f . . . 9 9 9 . . . . 
                . . . f 6 6 f . . f 9 9 . . . . 
                . . . f 6 6 f f . 9 9 9 . . . . 
                . . . . f 6 6 f 9 9 9 9 9 f f f 
                . . . . f 6 6 f 9 9 9 9 9 f f f 
                . . . . . f 6 f 9 9 9 9 9 f f f 
                . . . . . . f f 9 9 9 9 9 f f f 
                . . . . . . . . 9 9 9 9 9 f f . 
                . . . . . . . . 9 9 9 9 9 2 2 . 
                . . . . . . . . 9 . . . 9 2 4 . 
                . . . . . . . . 9 . . . 9 . 4 . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . 9 9 9 . 9 9 9 . . . 
                `,img`
                . 8 8 7 7 7 . . . . . . . . . . 
                . 8 7 8 f 8 . . . . . . . . . . 
                . 8 . f 6 f . . . 9 9 9 . . . . 
                . . . f 6 6 f . . f 9 9 . . . . 
                . . . f 6 6 f f . 9 9 9 . . . . 
                . . . . f 6 6 f 9 9 9 9 9 f f f 
                . . . . f 6 6 f 9 9 9 9 9 f f f 
                . . . . . f 6 f 9 9 9 9 9 f f f 
                . . . . . . f f 9 9 9 9 9 f f f 
                . . . . . . . . 9 9 9 9 9 f f . 
                . . . . . . . . 9 9 9 9 9 2 2 . 
                . . . . . . . . 9 . . . 9 2 2 . 
                . . . . . . . . 9 . . . 9 4 4 . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . 9 9 9 . 9 9 9 . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . 9 9 9 . . . . 
                . 7 . . . . . . . f 9 9 . . . . 
                8 7 8 . . . . . . 9 9 9 . . . . 
                7 7 8 . . . . . 9 9 9 9 9 f f f 
                7 8 f f f f f f 9 9 9 9 9 f f f 
                . f 6 6 6 6 6 f 9 9 9 9 9 f f f 
                . . f f f f f f 9 9 9 9 9 f f f 
                . . . . . . . . 9 9 9 9 9 f f . 
                . . . . . . . . 9 9 9 9 9 4 2 . 
                . . . . . . . . 9 . . . 9 4 2 . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . 9 9 9 . 9 9 9 . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . 9 9 9 . . . . 
                . . . . . . . . . f 9 9 . . . . 
                . . . . . . . . . 9 9 9 . . . . 
                . . . . . . . . 9 9 9 9 9 f f f 
                . . f f f f f f 9 9 9 9 9 f f f 
                . f 6 6 6 6 6 f 9 9 9 9 9 f f f 
                . . f f f f f f 9 9 9 9 9 f f f 
                . . . . . . . . 9 9 9 9 9 f f . 
                . . . . . . . . 9 9 9 9 9 2 4 . 
                . . . . . . . . 9 . . . 9 4 2 . 
                . . . . . . . . 9 . . . 9 2 . . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . 9 9 9 . 9 9 9 . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . 9 9 9 . . . . 
                . . . . . . . . . f 9 9 . . . . 
                . . . . . . . . . 9 9 9 . . . . 
                . . . . . . . . 9 9 9 9 9 f f f 
                . . f f f f f f 9 9 9 9 9 f f f 
                . f 6 6 6 6 6 f 9 9 9 9 9 f f f 
                . . f f f f f f 9 9 9 9 9 f f f 
                . . . . . . . . 9 9 9 9 9 f f . 
                . . . . . . . . 9 9 9 9 9 2 4 . 
                . . . . . . . . 9 . . . 9 . 2 . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . 9 9 9 . 9 9 9 . . . 
                `],
            50,
            false
            )
        } else {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . f . . . . . . . . . . . 
                . . . f 6 f . . . 9 9 9 . . . . 
                . . . f 6 6 f . . f 9 9 . . . . 
                . . . f 6 6 f f . 9 9 9 . . . . 
                . . . . f 6 6 f 9 9 9 9 9 . . . 
                . . . . f 6 6 f 9 9 9 9 9 . . . 
                . . . . . f 6 f 9 9 9 9 9 . . . 
                . . . . . . f f 9 9 9 9 9 . . . 
                . . . . . . . . 9 9 9 9 9 . . . 
                . . . . . . . . 9 9 9 9 9 . . . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . 9 9 9 . 9 9 9 . . . 
                `,img`
                . . . 7 7 8 . . . . . . . . . . 
                . . 7 8 f 8 . . . . . . . . . . 
                . . . f 6 f . . . 9 9 9 . . . . 
                . . . f 6 6 f . . f 9 9 . . . . 
                . . . f 6 6 f f . 9 9 9 . . . . 
                . . . . f 6 6 f 9 9 9 9 9 . . . 
                . . . . f 6 6 f 9 9 9 9 9 . . . 
                . . . . . f 6 f 9 9 9 9 9 . . . 
                . . . . . . f f 9 9 9 9 9 . . . 
                . . . . . . . . 9 9 9 9 9 . . . 
                . . . . . . . . 9 9 9 9 9 . . . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . 9 9 9 . 9 9 9 . . . 
                `,img`
                . 8 8 7 7 7 . . . . . . . . . . 
                . 8 7 8 f 8 . . . . . . . . . . 
                . 8 . f 6 f . . . 9 9 9 . . . . 
                . . . f 6 6 f . . f 9 9 . . . . 
                . . . f 6 6 f f . 9 9 9 . . . . 
                . . . . f 6 6 f 9 9 9 9 9 . . . 
                . . . . f 6 6 f 9 9 9 9 9 . . . 
                . . . . . f 6 f 9 9 9 9 9 . . . 
                . . . . . . f f 9 9 9 9 9 . . . 
                . . . . . . . . 9 9 9 9 9 . . . 
                . . . . . . . . 9 9 9 9 9 . . . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . 9 9 9 . 9 9 9 . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . 9 9 9 . . . . 
                . 7 . . . . . . . f 9 9 . . . . 
                8 7 8 . . . . . . 9 9 9 . . . . 
                7 7 8 . . . . . 9 9 9 9 9 . . . 
                7 8 f f f f f f 9 9 9 9 9 . . . 
                . f 6 6 6 6 6 f 9 9 9 9 9 . . . 
                . . f f f f f f 9 9 9 9 9 . . . 
                . . . . . . . . 9 9 9 9 9 . . . 
                . . . . . . . . 9 9 9 9 9 . . . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . 9 9 9 . 9 9 9 . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . 9 9 9 . . . . 
                . . . . . . . . . f 9 9 . . . . 
                . . . . . . . . . 9 9 9 . . . . 
                . . . . . . . . 9 9 9 9 9 . . . 
                . . f f f f f f 9 9 9 9 9 . . . 
                . f 6 6 6 6 6 f 9 9 9 9 9 . . . 
                . . f f f f f f 9 9 9 9 9 . . . 
                . . . . . . . . 9 9 9 9 9 . . . 
                . . . . . . . . 9 9 9 9 9 . . . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . 9 9 9 . 9 9 9 . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . 9 9 9 . . . . 
                . . . . . . . . . f 9 9 . . . . 
                . . . . . . . . . 9 9 9 . . . . 
                . . . . . . . . 9 9 9 9 9 . . . 
                . . f f f f f f 9 9 9 9 9 . . . 
                . f 6 6 6 6 6 f 9 9 9 9 9 . . . 
                . . f f f f f f 9 9 9 9 9 . . . 
                . . . . . . . . 9 9 9 9 9 . . . 
                . . . . . . . . 9 9 9 9 9 . . . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . . . 9 . . . 9 . . . 
                . . . . . . 9 9 9 . 9 9 9 . . . 
                `],
            50,
            false
            )
        }
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 8 8 8 8 8 8 8 8 6 
            . . . . . . . 6 6 6 6 6 6 6 6 6 
            . . . . . . . 8 8 8 8 8 8 8 8 6 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, -150, 0)
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        animation.runImageAnimation(
        projectile,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            7 8 8 8 8 8 8 8 8 . . . . . . . 
            7 7 7 7 7 7 7 7 7 . . . . . . . 
            7 8 8 8 8 8 8 8 8 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            8 7 7 7 7 7 7 7 7 . . . . . . . 
            8 8 8 8 8 8 8 8 8 . . . . . . . 
            8 7 7 7 7 7 7 7 7 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    } else {
        if (withJetpack == 1) {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . f . . . . 
                . . . . 9 9 9 . . . f 6 f . . . 
                . . . . 9 9 f . . f 6 6 f . . . 
                . . . . 9 9 9 . f f 6 6 f . . . 
                f f f 9 9 9 9 9 f 6 6 f . . . . 
                f f f 9 9 9 9 9 f 6 6 f . . . . 
                f f f 9 9 9 9 9 f 6 f . . . . . 
                f f f 9 9 9 9 9 f f . . . . . . 
                f f f 9 9 9 9 9 . . . . . . . . 
                . f f 9 9 9 9 9 . . . . . . . . 
                . 4 4 9 . . . 9 . . . . . . . . 
                . 2 4 9 . . . 9 . . . . . . . . 
                . . 2 9 . . . 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 9 9 . 9 9 9 . . . . . . 
                `,img`
                . . . . . . . . . . 8 7 7 . . . 
                . . . . . . . . . . 8 f 8 7 . . 
                . . . . 9 9 9 . . . f 6 f . . . 
                . . . . 9 9 f . . f 6 6 f . . . 
                . . . . 9 9 9 . f f 6 6 f . . . 
                f f f 9 9 9 9 9 f 6 6 f . . . . 
                f f f 9 9 9 9 9 f 6 6 f . . . . 
                f f f 9 9 9 9 9 f 6 f . . . . . 
                f f f 9 9 9 9 9 f f . . . . . . 
                . f f 9 9 9 9 9 . . . . . . . . 
                . 2 2 9 9 9 9 9 . . . . . . . . 
                . 4 2 9 . . . 9 . . . . . . . . 
                . 4 . 9 . . . 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 9 9 . 9 9 9 . . . . . . 
                `,img`
                . . . . . . . . . . 7 7 7 8 8 . 
                . . . . . . . . . . 8 f 8 7 8 . 
                . . . . 9 9 9 . . . f 6 f . 8 . 
                . . . . 9 9 f . . f 6 6 f . . . 
                . . . . 9 9 9 . f f 6 6 f . . . 
                f f f 9 9 9 9 9 f 6 6 f . . . . 
                f f f 9 9 9 9 9 f 6 6 f . . . . 
                f f f 9 9 9 9 9 f 6 f . . . . . 
                f f f 9 9 9 9 9 f f . . . . . . 
                . f f 9 9 9 9 9 . . . . . . . . 
                . 2 2 9 9 9 9 9 . . . . . . . . 
                . 2 2 9 . . . 9 . . . . . . . . 
                . 4 4 9 . . . 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 9 9 . 9 9 9 . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . 9 9 9 . . . . . . . . . 
                . . . . 9 9 f . . . . . . . 7 . 
                . . . . 9 9 9 . . . . . . 8 7 8 
                f f f 9 9 9 9 9 . . . . . 8 7 7 
                f f f 9 9 9 9 9 f f f f f f 8 7 
                f f f 9 9 9 9 9 f 6 6 6 6 6 f . 
                f f f 9 9 9 9 9 f f f f f f . . 
                . f f 9 9 9 9 9 . . . . . . . . 
                . 2 4 9 9 9 9 9 . . . . . . . . 
                . 2 4 9 . . . 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 9 9 . 9 9 9 . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . 9 9 9 . . . . . . . . . 
                . . . . 9 9 f . . . . . . . . . 
                . . . . 9 9 9 . . . . . . . . . 
                f f f 9 9 9 9 9 . . . . . . . . 
                f f f 9 9 9 9 9 f f f f f f . . 
                f f f 9 9 9 9 9 f 6 6 6 6 6 f . 
                f f f 9 9 9 9 9 f f f f f f . . 
                . f f 9 9 9 9 9 . . . . . . . . 
                . 4 2 9 9 9 9 9 . . . . . . . . 
                . 2 4 9 . . . 9 . . . . . . . . 
                . . 2 9 . . . 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 9 9 . 9 9 9 . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . 9 9 9 . . . . . . . . . 
                . . . . 9 9 f . . . . . . . . . 
                . . . . 9 9 9 . . . . . . . . . 
                f f f 9 9 9 9 9 . . . . . . . . 
                f f f 9 9 9 9 9 f f f f f f . . 
                f f f 9 9 9 9 9 f 6 6 6 6 6 f . 
                f f f 9 9 9 9 9 f f f f f f . . 
                . f f 9 9 9 9 9 . . . . . . . . 
                . 4 2 9 9 9 9 9 . . . . . . . . 
                . 2 . 9 . . . 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 9 9 . 9 9 9 . . . . . . 
                `],
            50,
            false
            )
        } else {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . f . . . . 
                . . . . 9 9 9 . . . f 6 f . . . 
                . . . . 9 9 f . . f 6 6 f . . . 
                . . . . 9 9 9 . f f 6 6 f . . . 
                . . . 9 9 9 9 9 f 6 6 f . . . . 
                . . . 9 9 9 9 9 f 6 6 f . . . . 
                . . . 9 9 9 9 9 f 6 f . . . . . 
                . . . 9 9 9 9 9 f f . . . . . . 
                . . . 9 9 9 9 9 . . . . . . . . 
                . . . 9 9 9 9 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 9 9 . 9 9 9 . . . . . . 
                `,img`
                . . . . . . . . . . 8 7 7 . . . 
                . . . . . . . . . . 8 f 8 7 . . 
                . . . . 9 9 9 . . . f 6 f . . . 
                . . . . 9 9 f . . f 6 6 f . . . 
                . . . . 9 9 9 . f f 6 6 f . . . 
                . . . 9 9 9 9 9 f 6 6 f . . . . 
                . . . 9 9 9 9 9 f 6 6 f . . . . 
                . . . 9 9 9 9 9 f 6 f . . . . . 
                . . . 9 9 9 9 9 f f . . . . . . 
                . . . 9 9 9 9 9 . . . . . . . . 
                . . . 9 9 9 9 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 9 9 . 9 9 9 . . . . . . 
                `,img`
                . . . . . . . . . . 7 7 7 8 8 . 
                . . . . . . . . . . 8 f 8 7 8 . 
                . . . . 9 9 9 . . . f 6 f . 8 . 
                . . . . 9 9 f . . f 6 6 f . . . 
                . . . . 9 9 9 . f f 6 6 f . . . 
                . . . 9 9 9 9 9 f 6 6 f . . . . 
                . . . 9 9 9 9 9 f 6 6 f . . . . 
                . . . 9 9 9 9 9 f 6 f . . . . . 
                . . . 9 9 9 9 9 f f . . . . . . 
                . . . 9 9 9 9 9 . . . . . . . . 
                . . . 9 9 9 9 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 9 9 . 9 9 9 . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . 9 9 9 . . . . . . . . . 
                . . . . 9 9 f . . . . . . . 7 . 
                . . . . 9 9 9 . . . . . . 8 7 8 
                . . . 9 9 9 9 9 . . . . . 8 7 7 
                . . . 9 9 9 9 9 f f f f f f 8 7 
                . . . 9 9 9 9 9 f 6 6 6 6 6 f . 
                . . . 9 9 9 9 9 f f f f f f . . 
                . . . 9 9 9 9 9 . . . . . . . . 
                . . . 9 9 9 9 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 9 9 . 9 9 9 . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . 9 9 9 . . . . . . . . . 
                . . . . 9 9 f . . . . . . . . . 
                . . . . 9 9 9 . . . . . . . . . 
                . . . 9 9 9 9 9 . . . . . . . . 
                . . . 9 9 9 9 9 f f f f f f . . 
                . . . 9 9 9 9 9 f 6 6 6 6 6 f . 
                . . . 9 9 9 9 9 f f f f f f . . 
                . . . 9 9 9 9 9 . . . . . . . . 
                . . . 9 9 9 9 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 9 9 . 9 9 9 . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . 9 9 9 . . . . . . . . . 
                . . . . 9 9 f . . . . . . . . . 
                . . . . 9 9 9 . . . . . . . . . 
                . . . 9 9 9 9 9 . . . . . . . . 
                . . . 9 9 9 9 9 f f f f f f . . 
                . . . 9 9 9 9 9 f 6 6 6 6 6 f . 
                . . . 9 9 9 9 9 f f f f f f . . 
                . . . 9 9 9 9 9 . . . . . . . . 
                . . . 9 9 9 9 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 . . . 9 . . . . . . . . 
                . . . 9 9 9 . 9 9 9 . . . . . . 
                `],
            50,
            false
            )
        }
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 8 8 8 8 8 8 8 8 6 
            . . . . . . . 6 6 6 6 6 6 6 6 6 
            . . . . . . . 8 8 8 8 8 8 8 8 6 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 150, 0)
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        animation.runImageAnimation(
        projectile,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 8 8 8 8 8 8 8 8 7 
            . . . . . . . 7 7 7 7 7 7 7 7 7 
            . . . . . . . 8 8 8 8 8 8 8 8 7 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 7 7 7 7 7 7 7 7 8 
            . . . . . . . 8 8 8 8 8 8 8 8 8 
            . . . . . . . 7 7 7 7 7 7 7 7 8 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite, location) {
    scene.cameraShake(4, 100)
    info.changeLifeBy(-1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile30`, function (sprite, location) {
    mySprite.startEffect(effects.halo)
    withOrb += 1
    tiles.setTileAt(location, assets.tile`transparency16`)
    mySprite.sayText("Got the orb!", 500, false)
    effects.clearParticles(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile26`, function (sprite, location) {
    if (withOrb > 0) {
        scene.setBackgroundImage(img`
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111166666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111116666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666661111111111111111111111666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111111111111116666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111166666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111116666666666666666666666666666
            6666666611111116666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111116666666666666666666666666666
            6666661111111111166666111111166666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111111666666666666666666666666666
            6666611111111111116661111111116666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111111666666666666666666666666666
            6666611111111111111111111111116666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111111666666666666666666666666666
            6666111111111111111111111111116666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111111666666666666666666666666666
            6666111111111111111111111111116666666666111111166666666666666666666666666666666666666666666666666666666111111111111111111111111111111666666666666666666666666666
            6666111111111111111111111111116666666661111111116666666666666666666666666666666666666666666666666666666611111111111111111111111111111666666611111116666666666666
            6666111111111111111111111111116666666661111111116666666666666666666666666666666666666666666666666666666661111111111111111111111111111666666111111111666666666666
            6666111111111111111111111111116666666661111111116666666666666666666111111111666666666666666666666666666666111111111111111111111111111666661111111111166666666666
            6666111111111111111111111111166666666111111111116666666666666666661111111111166666666666666666666666666666611111111111111111111111111666661111111111166666666666
            6666111111111111111111166666666666661111111111116666666666666666611111111111116666611111116666666666666666666666611111111111111111116666661111111111166666666666
            6666611111111111111111166666666666611111111111116666666666666666111111111111111661111111111166666666666666666666611111111111111111116666661111111111166666666666
            6666611111111111111111666666666666111111111111111666666666666661111111111111111111111111111116666666666666666666661111111111111111166666661111111111111111666666
            6666661111111111111116666666666661111111111111111166666666666661111111111111111111111111111116666666666666666666666111111111111111666666661111111111111111166666
            6666666611111116666666666666666661111111111111111166666666666661111111111111111111111111111111666666666666666666666611111111111116666666661111111111111111116666
            6666666666666666666666666666666661111111111111111166666666666661111111111111111111111111111111666666666666666666666666111111111666666666666111111111111111111666
            6666666666666666666666666666666661111111111111111166666666666661111111111111111111111111111111666666666666666666666666666666666666666666666611111111111111111666
            6666666666666666666666666666666661111111111111111166666666666661111111111111111111111111111111666666666666666666666666666666666666666666666666661111111111111666
            6666666666666666666666666666666661111111111111111166666666666661111111111111111111111111111111666666666666666666666666666666666666666666666666661111111111111666
            6666666666666666666666666666666661111111111111111166666666666661111111111111111111111111111111666666666666666666666666666666666666666666666666661111111111111666
            6666661111111666666666666666666661111111111111111166666666666661111111111111111111111111111111666666666666666666666666666666666666666666666666661111111111111666
            6666111111111116666666666666666661111111111111111166666666666666111111111111111611111111111116666666666666666666666666666666666666666666666666661111111111111666
            6661111111111111666666666666666666111111111111111666666666666666611111111111116611111111111116666666666666666666666666666666666666666666666666666111111111116666
            6661111111111111661111111116666666611111111111116666666666666666661111111111166661111111111166666666666666666666666666666666666666666666666666666611111111166666
            6611111111111111111111111111166666661111111111166666666666666666666111111111666666611111116666666666666666666666666666666666666666666666666666666661111111666666
            6611111111111111111111111111116666666111111111666666666666666666666666666666666666666666666666666666666666666666666666666111111111666666666666666666666666666666
            6611111111111111111111111111111666666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111116666666666666666666666666666
            6611111111111111111111111111111166666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111666666666666666666666666666
            6611111111111111111111111111111116666666666666666666666666666666666666666666666666666666666666666666666666666666666661111111111111111111116666666666666666666666
            6611111111111111111111111111111116666666666666666666666666666666666666666666666666666666666666666666666666666666666661111111111111111111111666666666666666666666
            6611111111111111111111111111111111666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111111111111166666666666666666666
            6661111111111111111111111111111111666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111111111111166666666666666666666
            6661111111111111111111111111111111666666666666666666666666666666666111111111666666666666666666666666666666666666666611111111111111111111111166666666666666666666
            6666111111111111111111111111111111666666666666666666666666666666611111111111116666666666666666666666666666666666666611111111111111111111111166666666666666666666
            6666661111111111111111111111111111666666666666666666666666666666111111111111111666666666666666666666666666666666666611111111111111111111111166666666666666666666
            6666666666611111111111111111111111666666666666666666666666666661111111111111111166666666666666666666666666666666666611111111111111111111111166666666666666666666
            6666666666611111111111111111111111666666666666666666666666111111111111111111111116666666666666666666666666666666666611111111111111111111111116666666666666666666
            6666666666611111111111111111111111666666666666666666666661111111111111111111111116666666666666666666666666666666666611111111111111111111111116666666666666666666
            6666666666611111111111111111111111666666666666666666666611111111111111111111111111666666666666666666666666666666666611111111111111111111111116666666666666666666
            6666666666661111111111111111111116666666666666666666666111111111111111111111111111666666666666666666666666666666666661111111111111111111111116666666666666666666
            6666666666661111111111111111111116666666666666666666666111111111111111111111111111666666666666666666666666666666666661111111111111111111111116666666666666666666
            6666666666666111111111111111111166666666666666666666666111111111111111111111111111666666666666666666666666666666666666111111111111111661111166666666666666666666
            6666666666666611111111111111111666666666666666666666666111111111111111111111111111666666666666666666666666666666666666611111111111116666666666666666666666666666
            6666666666666661111111111111116666666666666666666666666111111111111111111111111111666666666666666666666666666666666666666111111111666666666666666666666666666666
            6666666666666666111111111111166666666666666666666666666111111111111111111111111111666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666661111111116666666666666666666666666666111111111111111111111111111666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666611111111111111111111111111666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666661111111111111111111111116666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666111111111111111111111116666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666661111111111111111166666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666111111111111111666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666611111111111116666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666111111111666666666666666666666666666666666666666666666666666666666661111111116666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111166666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666661111111111111116666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111111666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111111666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111166666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111166666666666
            6666666666666666666611111111166666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111166666666666
            6666666666666666661111111111111666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111166666666666
            6666666666666666611111111111111166666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111166666666666
            6666666666666666111111111111111116666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111111
            6666666666666661111111111111111111166666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111111
            6666666666666661111111111111111111111666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111111
            6666666666666611111111111111111111111166666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111111
            6666666666666666111111111111111111111116666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111111111111111111
            6666666666666666611111111111111111111111666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111111111111111111
            6666666666666666666111111111111111111111166666666666666666666666666666666666666666666666666666666666666666666666666666666666666666661111111111111111111111111111
            6666666666666666666611111111111111111111166666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111
            6666666666666666666661111111111111111111116666666666666666666666666666666666666666666666666666666611111116666666666666666666666666666661111111111111111111111111
            6666666666666666666661111111111111111111116666666666666666666666666666666666666666666666666666666111111111666666666666666666666666666666666666111111111111111111
            6666666666666666666666111111111111111111116666666666666666666661111111116666666666666666666666661111111111166666666666666666666666666666666666111111111111111111
            6666666666666666666666611111111111111111116666666666666666666611111111111666666666666666666661111111111111116666666666666666666666666666666666111111111111111111
            6666666666666666666666611111111111111111116666666666666666666111111111111166666666666666666611111111111111116666666666666666666666666666666666111111111111111111
            6666666666666666666666611111111111111111116666666666666666661111111111111116666666666666666111111111111111116666666666666666666666666666666666111111111111111111
            6666666666666666666666611111111111111111116666666666666666611111111111111111666666666666661111111111111111116666666666666666666666666666666666111111111111111111
            6666666666666666666666611111111111111111116666666666666666611111111111111111666666666666661111111111111111116666666666666666666666666666666666111111111111111111
            6666666666666666666666611111111111111111116666666666666666611111111111111111666666666666661111111111111111116666666666666666666666666666666666111111111111111111
            6666666666666666666666611111111111111111166666666666666666611111111111111111666666666666661111111111111111116666666666666666666666666666666666111111111111111111
            6666666666666666666666666661111111111111166666666666666666611111111111111111666666666666661111111111111111166666666666666666666666666666666666611111111111111111
            6666666666666666666666666666111111111111666666666666666666611111111111111111666666666666661111111111111111666666666666666666666666666666666666661111111111111111
            6666666666666666666666666666111111111116666666666666666666611111111111111111666666666666661111111111111116666666666666666666666666666666666666661111111111111111
            6666666666666666666666666666111111111166666666666666666666111111111111111111666666666666666111111111116666666666666666666666666666666666666666666111111111111111
            6666666666666666666666666666111111111666666666666666666661111111111111111111666666666666666611111111166666666666666666666666666666666666666666666611111111111111
            6666666666666666666666666666111111166666666666666666666611111111111111111116666666666666666661111111666666666666666666666611111116666666666666666666111111111111
            6666666666666666666666666666666666666666666666666666666111111111111111111166666666666666666666666666666666666666666666666111111111666666666666666666611111111111
            6666666666666666666666666666666666666666666666666666661111111111111111111666666666666666666666666666666666666666666666661111111111111111666666666666666666666666
            6666666666666666666666666666666666666666666666666666661111111111111111116666666666666666666666666666666666666666666666611111111111111111166666666666666666666666
            6666666666666666666666666666666666666666666666666666661111111111111111166666666666666666666666666666666666666666666666611111111111111111166666666666666666666666
            6666666666666666666666666666666666666666666666666666661111111111111111166666666666666666666666666666666666666666666666611111111111111111166666666666666666666666
            6666666666666666666666666666666666666666666666666666661111111111111111166666666666666666666666666666666666666666666666611111111111111111166666666666666666666666
            6666666666666666666666666666666666666666666666666666661111111111111111166666666666666666666666666666666666666666666666611111111111111111166666666666666666666666
            6666666666666666666666666666666666666666666666666666661111111111111111166666666666666666666666666666666666666666666666611111111111111111166666666666666666666666
            6666666666666666666666666666666666666666666666666666661111111111111111166666666666666666666666661111111666666666666666611111111111111111166666666666666666666666
            6666666666666666666666666666666666666666666666666666661111111111111111166666666666666666666666611111111166666666666666661111111111111111666666666666666666666666
            6666666666666666666666666666666666666666666666666666666111111111111111666666666666666666666666611111111166666666666666666111111111666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666611111111111116666666666666666666666666611111111166666666666666666611111116666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666661111111111166666666666666666666666666611111111166666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666111111111666666666666666666666666666611111111166666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111166666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111116666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666661111111111111111166666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666661111111111111111166666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111111116666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111111116666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111111116666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111111116666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111111116666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111111116666666666666666666666666666666666666666666666666666
            `)
        tiles.setCurrentTilemap(tilemap`level9`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile35`)
        withOrb = 0
    } else {
        game.showLongText("Collect the orb to move on.", DialogLayout.Bottom)
        mySprite.x += -27
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile28`, function (sprite, location) {
    if (withOrb > 0) {
        scene.setBackgroundImage(img`
            ccccccccccfffffffffffffcccccccccccccccccccccccfffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffccccccccccccccccc
            ccccccccccfffffffffffffcccccccccccccccccccccccfffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffccccccccccccccccc
            ccccccccccfffffffffffffcccccccccccccccccccccccfffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffcccccccccccccccccc
            ccccccccccfffffffffffffcccccccccccccccccccccccfffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffcccccccccccccccccc
            ccccccccccfffffffffffffcccccccccccccccccccccccfffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffcccccccccccccccccc
            ccccccccccfffffffffffffcccccccccccccccccccccccfffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffcccccccccccccccccc
            ccccccccccfffffffffffffcccccccccccccccccccccccfffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffcccccccccccccccccc
            cccccccccfffffffffffffffcccccccccccccccccccccffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffcccccccccccccccccc
            ccccccccffffffffffffffffcccccccccccccccccccccffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffcccccccccccccccccc
            cccccccffffffffffffffffffcccccccccccccccccccfffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffcccccccccccccccccc
            ccccccffffffffffffffffffffcccccccccccccccccffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffcccccccccccccccccc
            fffffffffffffffffffffffffffcccccccccccccccfffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffccccccccccccccccc
            ffffffffffffffffffffffffffffcccccccccccccffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffccccccccccccccccc
            ffffffffffffffffffffffffffffffcccccccccffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffcccccccccccccccf
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffcccccccccccccff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffcccccccccffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffcccccccccffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccf
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccc
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccc
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccc
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccc
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccc
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccc
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccc
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccc
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccc
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccc
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccc
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccc
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccc
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccf
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fcccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            cccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            cccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccfffffffffffffffffffffffffffffff
            cccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccfffffffffffffffffffffffffffff
            cccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccfffffffffffffffffffffffffff
            ccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccffffffffffffffffffffffffff
            ccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccfffffffffffffffffffffffff
            ccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccffffffffffffffffffffffff
            ccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccffffffffffffffffffffffff
            ccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccfffffffffffffffffffffff
            ccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccfffffffffffffffffffffff
            ccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccffffffffffffffffffffff
            ccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccffffffffffffffffffffff
            ccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccffffffffffffffffffffff
            ccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccffffffffffffffffffffff
            ccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccffffffffffffffffffffff
            cccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccffffffffffffffffffffff
            cccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccffffffffffffffffffffff
            ccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccfffffffffffffffffccccc
            cccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccffffffffffffffffcccccc
            ccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccfffffffffffffffccccccc
            cccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccffffffffffffffcccccccc
            ccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccfffffffffffffffcccccccc
            fcccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccfffffffffffffffcccccccc
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccffffffffffffffffcccccccc
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccffffffffffffffffcccccccc
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccfffffffffffffffffcccccccc
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccffffffffffffffffffcccccccc
            `)
        tiles.setCurrentTilemap(tilemap`level4`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile29`)
        mySprite.sayText("Gotta get through this cave!", 1000, false)
        mySprite.sayText("Gravity feels different down here", 100, false)
        withOrb = 0
        withJetpack = 0
    } else {
        game.showLongText("Collect the orb to move on.", DialogLayout.Bottom)
        mySprite.x += 27
    }
})
let with_battery = 0
let statusbar: StatusBarSprite = null
let boss: Sprite = null
let battery: Sprite = null
let bossProjectile: Sprite = null
let withOrb = 0
let withJetpack = 0
let mySprite: Sprite = null
let projectile: Sprite = null
startingStuff()
