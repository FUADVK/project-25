class Paper{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
    var options = {

		'restitution':0.3,
          'friction':0,
          'density':1.2
	}

		this.x=x;
		this.y=y;
		this.r=r
        this.image = loadImage( "paper.png");
        image.scale = 0.3;
		this.body=Bodies.circle(this.x, this.y, (this.r-10)/2, options);
		World.add(world, this.body);
		
	}
	display()
	{
		   
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			imageMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
            image(this.image,0,0,this.r,this.r);
			
           

			pop()
	}

}