var island=0;
var island2=0;
var island3=0;
var degree=0;

$(document).ready(function(){
	$(window).bind('scroll',function(event) {
		parallax(event);
	});

	$("#island3").click(function(){
		$(".form").addClass('visible');
		$(window).scrollTop(6300);
		island3=61;
	});

	$('.home').click(function(){
		$(window).scrollTop(0);
		$('.boat').css('left',0+'px');

		return false;
		});
		
	$('.about').click(function(){
		$(window).scrollTop(1600);
		$('.boat').css('left',0+'px');
		island=80;
		island2=80;
		island3=80;
		$(".island1text").addClass("visible");

		return false;
		});
		
	$('.skills').click(function(){
		$(window).scrollTop(3540);
		$('.boat').css('left',680+'px');
		island=80;
		island2=80;
		island3=80;
		$(".island2text").addClass("visible");		
		return false;
		});
		
	$('.contact').click(function(){
		$(window).scrollTop(5730);
		$('.boat').css('left',830+'px');
		island=80;
		island2=80;
		island3=80;
		$(".island3text").addClass("visible");		
		return false;
		});
		
});
	//var lastStartPos;

function parallax(event)
{
	/*
	
	if(event.which==38)
		$('.boat').addClass('rotate');
	else
		$('.boat').removeClass('rotate');

	*/
	

	var scrollPos=$(window).scrollTop();
	//$('.req').text(scrollPos+"");
	if(scrollPos>560)         //Website has entered full map area
	{
		//alert(scrollPos);
		if(scrollPos<1500)
			{
				$('.boat').css('top',(-600+1.3*(scrollPos-100)+'px'));
				//lastStartPos=(-600+1.3*(scrollPos-100));
				//alert(lastStartPos);
			}
		else if(scrollPos<1600)
		{
			//alert(lastStartPos);
			$('.boat').css('top',((-280+scrollPos)+'px'));
		}
		else if(scrollPos>=1600&&island<30)
		{
			if(island==0)
				$(".island1text").addClass("visible");
			$(window).scrollTop(1600);
			island++;
		}
		else if(scrollPos<2000)
		{
			//alert(lastStartPos);
			$('.boat').css('top',((-280+scrollPos)+'px'));
		}
		else if(scrollPos<2870)
		{
			$('.boat').css('left',(-1600+0.8*scrollPos)+'px');
			$('.boat').css('top',((-280+scrollPos)+'px'));
		}
		else if(scrollPos<3540)
		{
			$('.boat').css('top',((-280+scrollPos)+'px'));
		}
		else if(scrollPos>=3540&&island2<30)
		{
			if(island2===0)
				$('.island2text').addClass('visible');
			$(window).scrollTop(3540);
			island2++;
		}
		else if(scrollPos<3750)
		{
			$('.boat').css('top',((-280+scrollPos)+'px'));
		}
		else if(scrollPos<5430)
		{
			$('.boat').css('top',((-280+scrollPos)+'px'));
			$('.boat').css('left',(300+0.1*scrollPos)+'px');

		}
		else if(scrollPos<5730)
		{
			$('.boat').css('top',((-280+scrollPos)+'px'));
		}
		else if(scrollPos>=5730&&island3<30)
		{
			if(island3===0)
				$('.island3text').addClass('visible');
			$(window).scrollTop(5730);
			island3++;
		}
		else
		{
			$('.boat').css('top',((-280+scrollPos)+'px'));
		}

	}
}
