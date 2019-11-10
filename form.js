class form{
    constructor(){}
    display(){
    var title=createElement('h2')
    title.html("car racing game")
    title.position(300,100);
    var name=createInput("name")
    var button=createButton("PLAY");
    button.position(200,350);
    name.position(150,250);
    var greeting=createElement('h3')
    button.mousePressed(function(){
        name.hide()
        button.hide()
        var input=name.value()
        greeting.html("welcome"+name)
        greeting.position(200,200);
        playercount=playercount+1;
        player.updatecount(playercount)
        player.update(input)
    })
}
}