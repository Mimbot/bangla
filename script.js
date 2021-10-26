var b = document.getElementById("b");
        var ctx = b.getContext("2d");

        //making the canvas full screen
        b.height = window.innerHeight;
        b.width = window.innerWidth;

        //bangla characters - taken from the unicode charset
        var bangla = "অআইইউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভময়ড়ঢ়যরলহশষসৎংঃঽ১২৩৪৫৬৭৮৯০";
        //converting the string into an array of single characters
        bangla = bangla.split("");

        var font_size = 12;
        var columns = b.width/font_size;             //number of columns for the rain
        //an array of drops - one per column
        var drops = [];
        //x below is the x coordinate
        //1 = y co-ordinate of the drop(same for every drop initially)
        for(var x = 0; x < columns; x++)
            drops[x] = 1; 

        //drawing the characters
        function draw()
        {
            //Black BG for the canvas
            //translucent BG to show trail
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, b.width, b.height);

            ctx.fillStyle = "#0F0"; //green text
            ctx.font = font_size + "px arial";
            //looping over drops
            for(var i = 0; i < drops.length; i++)
            {
                //a random bangla character to print
                var text = bangla[Math.floor(Math.random()*bangla.length)];
                //x = i*font_size, y = value of drops[i]*font_size
                ctx.fillText(text, i*font_size, drops[i]*font_size);

                //sending the drop back to the top randomly after it has crossed the screen
                //adding a randomness to the reset to make the drops scattered on the Y axis
                if(drops[i]*font_size > b.height && Math.random() > 0.947)
                    drops[i] = 0;

                //incrementing Y coordinate
                drops[i]++;
            }
        }

        setInterval(draw, 50);