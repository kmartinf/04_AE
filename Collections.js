//JSON file connections

jsonFile = footage("fileName.json").sourceData;  //first establish variable and Location

//then extract information from it

//each piece of the AE layering can be used as a variable name for example
compName = thisComp.name;
layerName = thisLayer.name;
propertyName = thisProperty.name;
effectName = thisProperty.propertyGroup(1).name

//you can split the name by using a split NAME = Grill_Cheese
Grill = thisComp.name.split("_")[0];
Cheese = thisComp.name.split("_")[1];

//extracting information 
//use . for hard code label
//use []  for inderect expression code label
//use [" "] for direct expression code label
//use [" "] for strings

addr = jsonFile.mainLabel.secondaryLabel.etc;
addr = jsonFile[compName][layerName][etc];

//it better to make it a var before but if you cant, here how it is:
addr = jsonFile["thisComp.name"]["thislayer.name"]["thisEtc.name"]; 
addr = jsonFile["thisComp.name" + "_" + "thisComp.name"]["etc"];  


//hardcoded value for AE is 

value[0] = //the value you manually put
value[1] = //the second value you put if it is an array
value[2] = //the thrid value you put if it is a 3d Point for example

//you can use linear expression for keyframes
nameVar = linear(time, t1, t2, v1, v2); // v1 and v2 are the value you are going "from and to" "from 0 to 100"
nameVar = easeIn(time, 2, 10, 0, 100); //t1 and t2 is in Seconds



//you can use text as a source of code
//eval( ) transform text string into javascript code
//this code goes into multiple layers that you want all to centrally link to a single text expression
eval(thisComp.layer("name of the text layer").text.sourceText.value)




//you can use conditional statement for specific keyframe areas
if (time < key(2).time) 
numberIn= linear(time, t1, t2, 0, v1)

else if (time < key(3).time)
v1

else
numberOut= linear(time, t3, t4, v1, 0)




//for loops to look at JSON data array - you need to used "break" to stop the loop
sourcesName = jsonFile[mainLabel][secondLabel] //"from" Json variable
thisSourcesName = thisLayer.name; //this layer name

for(var i = 0; i < sourcesName.length; i++) {           
    if(thisSourcesName == metaballSources[i]) {
        val = 1;
		break;
    }   
    else {
        val = 2;
		break;
    }
}


