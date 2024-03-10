
            var img=document.getElementById('img');
            var images=['nike1.jpg','nike2.jpg','nike3.jpg'];
            var x=0;
            function slide()
            {
                if(x<images.length){x=x+1;
                }else{
                    x=1;
                }
                img.innerHTML="<img src="+images[x-1]+">";
            }
            //auto slide
            setInterval(slide,3000);
           
        
        