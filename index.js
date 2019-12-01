
var person1 = [];
var person2 = [];
var flag=true;

function isWinner(person){
   console.log(person);

  var len = person.length;

  for (var i=0;i<len;i++)
  	for (var j=i+1;j<len;j++)
  		  for(var k=j+1;k<len;k++){
if(person[i].charAt(0)==person[j].charAt(0) && person[j].charAt(0)==person[k].charAt(0)){
	      console.log("condition 1")
                return true;  		  
  		  }
  		  else{
  		  	if(person[i].charAt(1)==person[j].charAt(1) && person[j].charAt(1)==person[k].charAt(1)){
                 console.log("condition 2")
                return true;  		  
  		      }
  		      else{
if(((person[i].charAt(0)==0 && person[i].charAt(1)==0)||(person[j].charAt(0)==0 && person[j].charAt(1)==0)||(person[k].charAt(0)==0 && person[k].charAt(1)==0)) && ((person[j].charAt(0)==1 && person[j].charAt(1)==1)||(person[i].charAt(0)==1 && person[i].charAt(1)==1)||(person[k].charAt(0)==1 && person[k].charAt(1)==1)) && ((person[k].charAt(0)==2 && person[k].charAt(1)==2)||(person[i].charAt(0)==2 && person[i].charAt(1)==2)||(person[j].charAt(0)==2 && person[j].charAt(1)==2))){
                console.log("condition 3")
                return true;  		  
  		      }
  		      else{
  		      	if(((person[i].charAt(0)==0 && person[i].charAt(1)==2)||(person[j].charAt(0)==0 && person[j].charAt(1)==2)||(person[k].charAt(0)==0 && person[k].charAt(1)==2)) && ((person[j].charAt(0)==1 && person[j].charAt(1)==1)||(person[k].charAt(0)==1 && person[k].charAt(1)==1)||(person[i].charAt(0)==1 && person[i].charAt(1)==1)) && ((person[k].charAt(0)==2 && person[k].charAt(1)==0)||(person[i].charAt(0)==2 && person[i].charAt(1)==0)||(person[j].charAt(0)==2 && person[j].charAt(1)==0))){
                 console.log("condition 4")
                return true;  		  
  		      }

  		      }

  		      }
  		  }
  		}
  		return false;
  	}

function takeInput(column_value) {
	console.log(column_value);
	if(column_value=='00'){
		if(flag){
			person1.push('00');
			document.querySelector('.zerozero').innerHTML='<h1>O</h1>';
		}
		else{
			person2.push('00')
			document.querySelector('.zerozero').innerHTML='<h1>X</h1>';
		}
		if(person1.length > 2){
			  const res = isWinner(person1)
			  console.log("person1"+res);
			  if(res==true){
			  	document.querySelector('.result').innerHTML='<p>Person 1 Wins</p>';
			  	document.querySelector('.game-container').style.pointerEvents='none';
			  	return ;
			  }
		}
		if(person2.length > 2){
			const res = isWinner(person2)
			  console.log("person2"+res);
			  if(res==true){
			  	document.querySelector('.result').innerHTML='<p>Person 2 Wins</p>';
			  	document.querySelector('.game-container').style.pointerEvents='none';
			  	return ;
			  }
		}
		flag=!flag
		document.querySelector('.zerozero').style.pointerEvents='none';
		
	}
	if(column_value=='01'){
		if(flag){
			person1.push('01');
			document.querySelector('.zeroone').innerHTML='<h1>O</h1>';
		}
		else{
			person2.push('01')
			document.querySelector('.zeroone').innerHTML='<h1>X</h1>';

		}
		if(person1.length > 2){
			  const res = isWinner(person1)
			  console.log("person1"+res);
			  if(res==true){
			  	document.querySelector('.result').innerHTML='<p>Person 1 Wins</p>';
			  	document.querySelector('.game-container').style.pointerEvents='none';
			  	return  ;
			  }
		}
		if(person2.length > 2){
			const res = isWinner(person2)
			  console.log("person2"+res);
			  if(res==true){
			  	document.querySelector('.result').innerHTML='<p>Person 2 Wins</p>';
			  	document.querySelector('.game-container').style.pointerEvents='none';
			  	return  ;
			  }
		}
		flag=!flag
		document.querySelector('.zeroone').style.pointerEvents='none';
	}
	if(column_value=='02'){
		if(flag){
			person1.push('02');
			document.querySelector('.zerotwo').innerHTML='<h1>O</h1>';
		}
		else{
			person2.push('02')
			document.querySelector('.zerotwo').innerHTML='<h1>X</h1>';
		}
		if(person1.length > 2){
			  const res = isWinner(person1)
			  console.log("person1"+res);
			  if(res==true){
			  	document.querySelector('.result').innerHTML='<p>Person 1 Wins</p>';
			  	document.querySelector('.game-container').style.pointerEvents='none';
			  	return  ;
			  }
		}
		if(person2.length > 2){
			const res = isWinner(person2)
			  console.log("person2"+res);
			  if(res==true){
			  	document.querySelector('.result').innerHTML='<p>Person 2 Wins</p>';
			  	document.querySelector('.game-container').style.pointerEvents='none';
			  	return  ;
			  }
		}
		flag=!flag
		document.querySelector('.zerotwo').style.pointerEvents='none';
	}
	if(column_value=='10'){
		if(flag){
			person1.push('10');
			document.querySelector('.onezero').innerHTML='<h1>O</h1>';
		}
		else{
			person2.push('10')
			document.querySelector('.onezero').innerHTML='<h1>X</h1>';
		}
		if(person1.length > 2){
			  const res = isWinner(person1)
			  console.log("person1"+res);
			  if(res==true){
			  	document.querySelector('.result').innerHTML='<p>Person 1 Wins</p>';
			  	document.querySelector('.game-container').style.pointerEvents='none';
			  	return  ;
			  }
		}
		if(person2.length > 2){
			const res = isWinner(person2)
			  console.log("person2"+res);
			  if(res==true){
			  	document.querySelector('.result').innerHTML='<p>Person 2 Wins</p>';
			  	document.querySelector('.game-container').style.pointerEvents='none';
			  	return  ;
			  }
		}
		flag=!flag
		document.querySelector('.onezero').style.pointerEvents='none';
	}
	if(column_value=='11'){
		if(flag){
			person1.push('11');
			document.querySelector('.oneone').innerHTML='<h1>O</h1>';
		}
		else{
			person2.push('11')
			document.querySelector('.oneone').innerHTML='<h1>X</h1>';
		}
		if(person1.length > 2){
			  const res = isWinner(person1)
			  console.log("person1"+res);
			  if(res==true){
			  	document.querySelector('.result').innerHTML='<p>Person 1 Wins</p>';
			  	document.querySelector('.game-container').style.pointerEvents='none';
			  	return  ;
			  }
		}
		if(person2.length > 2){
			const res = isWinner(person2)
			  console.log("person2"+res);
			  if(res==true){
			  	document.querySelector('.result').innerHTML='<p>Person 2 Wins</p>';
			  	document.querySelector('.game-container').style.pointerEvents='none';
			  	return  ;
			  }
		}
		flag=!flag
		document.querySelector('.oneone').style.pointerEvents='none';
	}
	if(column_value=='12'){
		if(flag){
			person1.push('12');
			document.querySelector('.onetwo').innerHTML='<h1>O</h1>';
		}
		else{
			person2.push('12')
			document.querySelector('.onetwo').innerHTML='<h1>X</h1>';
		}
		if(person1.length > 2){
			  const res = isWinner(person1)
			  console.log("person1"+res);
			  if(res==true){
			  	document.querySelector('.result').innerHTML='<p>Person 1 Wins</p>';
			  	document.querySelector('.game-container').style.pointerEvents='none';
			  	return  ;
			  }
		}
		if(person2.length > 2){
			const res = isWinner(person2)
			  console.log("person2"+res);
			  if(res==true){
			  	document.querySelector('.result').innerHTML='<p>Person 2 Wins</p>';
			  	document.querySelector('.game-container').style.pointerEvents='none';
			  	return  ;
			  }
		}
		flag=!flag
		document.querySelector('.onetwo').style.pointerEvents='none';
	}
	if(column_value=='20'){
		if(flag){
			person1.push('20');
			document.querySelector('.twozero').innerHTML='<h1>O</h1>';
		}
		else{
			person2.push('20')
			document.querySelector('.twozero').innerHTML='<h1>X</h1>';
		}
		if(person1.length > 2){
			  const res = isWinner(person1)
			  console.log("person1"+res);
			  if(res==true){
			  	document.querySelector('.result').innerHTML='<p>Person 1 Wins</p>';
			  	document.querySelector('.game-container').style.pointerEvents='none';
			  	return  ;
			  }
		}
		if(person2.length > 2){
			const res = isWinner(person2)
			  console.log("person2"+res);
			  if(res==true){
			  	document.querySelector('.result').innerHTML='<p>Person 2 Wins</p>';
			  	document.querySelector('.game-container').style.pointerEvents='none';
			  	return  ;
			  }
		}
		flag=!flag
		document.querySelector('.twozero').style.pointerEvents='none';
	}
	if(column_value=='21'){
		if(flag){
			person1.push('21');
			document.querySelector('.twoone').innerHTML='<h1>O</h1>';
		}
		else{
			person2.push('21')
			document.querySelector('.twoone').innerHTML='<h1>X</h1>';
		}
		if(person1.length > 2){
			  const res = isWinner(person1)
			  console.log("person1"+res);
			  if(res==true){
			  	document.querySelector('.result').innerHTML='<p>Person 1 Wins</p>';
			  	document.querySelector('.game-container').style.pointerEvents='none';
			  	return  ;
			  }
		}
		if(person2.length > 2){
			const res = isWinner(person2)
			  console.log("person2"+res);
			  if(res==true){
			  	document.querySelector('.result').innerHTML='<p>Person 2 Wins</p>';
			  	document.querySelector('.game-container').style.pointerEvents='none';
			  	return  ;
			  }
		}
		flag=!flag
		document.querySelector('.twoone').style.pointerEvents='none';
	}
	if(column_value=='22'){
		if(flag){
			person1.push('22');
			document.querySelector('.twotwo').innerHTML='<h1>O</h1>';
		}
		else{
			person2.push('22')
			document.querySelector('.twotwo').innerHTML='<h1>X</h1>';
		}
		if(person1.length > 2){
			  const res = isWinner(person1)
			  console.log("person1"+res);
			  if(res==true){
			  	document.querySelector('.result').innerHTML='<p>Person 1 Wins</p>';
			  	document.querySelector('.game-container').style.pointerEvents='none';
			  	return  ;
			  }
		}
		if(person2.length > 2){
			const res = isWinner(person2)
			  console.log("person2"+res);
			  if(res==true){
			  	document.querySelector('.result').innerHTML='<p>Person 2 Wins</p>';
			  	document.querySelector('.game-container').style.pointerEvents='none';
			  	return  ;
			  }
		}
		flag=!flag
		document.querySelector('.twotwo').style.pointerEvents='none';
	}
	
}