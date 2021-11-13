window.onload = showpages;  
const n = "'";
const r = '"';
const y = "+";
var nul = "";
let luascriptOffset = false;
let offset_freeze = false;
var firstCount2;
firstCount2 = 0;
var countsMenu=0;
var lastValue11=9;
var lastValue9=9;
var lastValue7=9;
var lastValue5=9;
var lastValue2=9;
var lastValue=9;
var ifValueM1=0;
var Hc=0;
var Aas = "検索値";
var Bas = "リファイン";
var Cas = "リザルト";
var Das = "変更値";
var Eas = "め";
var Ead = "こ";
var Eaf = "さ";
var Eag = "し";
var Eah = "す";
var Eaj = "せ";
var Eak = "そ";
var Eal = "た";
var Eaz = "ち";
var Eax = "つ";
var Mas = "タイプ";
var Nas = "メモリ範囲";
var u = "lua";
var MAXvalue = 999;
let result_out = false;
let edit_out = false;
let offsetFunction = "local offSET = {}\nfunction offset(addrs, type, editVal, bool)\nif gg.getResultsCount() == 0 then\ngg.alert("+n+"後藤する値が見つかりません"+n+")\nelse\noffset = gg.getResults(1)\noffSET[1] = {}\noffSET[1].address = offset[1].address + addrs\noffSET[1].flags = type\noffSET[1].value = editVal\nif bool then\noffSET[1].freeze = true\nelse\noffSET[1].freeze = false\nend\ngg.setValues(offSET)\nend\nend\n";
status = 1;
makevalue = 1;//表示
judgevalue = 1;
memoryValue=1;
typevalue1 = 0;//butt
JHh=0;
CHh=0;
CAh=0;
CDh=0;
CBh=0;
PSh=0;
Ah=0;
Jh=0;
Sh=0;
Ash=0;
Vh=0;
Oh=0;
Bh=0;
Xah=0;
Xsh=0;
ArrayOnly = ["gg.REGION_JAVA_HEAP","gg.REGION_C_HEAP","gg.REGION_C_ALLOC","gg.REGION_C_DATA","gg.REGION_C_BSS","gg.REGION_PPSSPP","gg.REGION_ANONYMOUS","gg.REGION_JAVA","gg.REGION_STACK","gg.REGION_ASHMEM","gg.REGION_VIDEO","gg.REGION_OTHER","gg.REGION_BAD","gg.REGION_CODE_APP","gg.REGION_CODE_SYS"];
Array = [y+ArrayOnly[0],y+ArrayOnly[1],y+ArrayOnly[2],y+ArrayOnly[3],y+ArrayOnly[4],y+ArrayOnly[5],y+ArrayOnly[6],y+ArrayOnly[7],y+ArrayOnly[8],y+ArrayOnly[9],y+ArrayOnly[10],y+ArrayOnly[11],y+ArrayOnly[12],y+ArrayOnly[13],y+ArrayOnly[14]]; 
function showpages() {
 $('#close1').show();
 $('#offset').hide();
 $('#offset_type').hide();
 $('#offset_add').hide();
 $('#memorycheckbox').hide();
 $('#databutton').hide();
 $('#editsValue_offset').hide();
 $('#MAINf').hide();
 $('#lua').hide();
 $('#seekBarShow').hide();
 $('#SeekSetting').hide();
 $('#imgs').hide();
 $('#over').hide();
 }
function button1() {
 if (judgevalue == 1) {
	 alert("メニューが作成されていません。");
	}else{
	 if(makevalue == 11) {
		 alert("作成できるメインメニューの最大は10          こまでです。");
	  makevalue = 10;
		}else{
		 next1bytton();
		}}}
promptn = function() {
 makevalue3 = 1;
 judgevalue = 1;		
	makevalue++;
	let menu = `メインメニュー【${makevalue}】を作成中`;
 document.getElementById("AA1").innerHTML = menu;
   const OBJECT9 = "メニュー【1】を作成中";   
   document.getElementById("AA2").innerHTML = OBJECT9;
   makevalue2=1;
}   
next1bytton=function(){
main = prompt(`メインメニュー${makevalue}の名前を入力してください。`);
if(!(main=="" || main==null)){
ifStrMenu2();
Hc++;
ifValueM1=0;
ifStr();
mainReplace();
promptn();
}}
nextbutton841 = function(){
if (!(JH.checked||CH.checked||CA.checked||CD.checked||CB.checked||PS.checked||A.checked||J.checked||S.checked||As.checked||V.checked||O.checked||B.checked||Xa.checked||Xs.checked)){
alert("メモリ範囲が選択されていません。");
}else{
nextbutton11();
}}
nextbutton11 = function(){
if (searchvalue.value==nul||searchvalue.value==null){
alert("検索値が入力されていません。");
}else{
resultxxx();
editxxx();
if (result_out){
alert("getresult値が入力されていません。");
}else{
if(edit_out){
alert("変更値が入力されていません。");
}else{
if (menuvalue.value==nul|| menuvalue.value==null){
alert("メニュー名が入力されていません。");
}else{
if(seekBar.checked){
SeekJudge()	;
}else{
if(offset_c.checked){
offsetJudge();
}else{
nextbutton907();
}}}}}}
result_out=false;
edit_out=false;
};
resultxxx = function(){
if(!(offset_c.checked)){
if(getresultvalue.value==nul||getresultvalue.value==null){
result_out=true;
}}}
editxxx = function(){
if(!(seekBar.checked)){
if(!(offset_c.checked)){
if(editvalue.value==nul||editvalue.value==null){
edit_out=true;
}}}}
getElementsValue2 = function(){
editValue_offset = document.getElementById("editvalue_offset").value
type_offset = document.getElementById("offset_type_opt").value
offset_value_offset = document.getElementById("offset_value").value
}
getElementsValue = function(){
mins = document.getElementById("minSeekValue").value
maxs = document.getElementById("maxSeekValue").value
firsts = document.getElementById("firstValue").value
sstr = document.getElementById("showSeekValue").value
}
offsetJudge = function(){
getElementsValue2();
if(editValue_offset==null || editValue_offset==nul){
		alert("後藤した値の変更値が入力されていません。");
}else{
if(offset_value_offset==null || offset_value_offset==nul){
				alert("検索結果と変更したいアドレスとの距離が入力されていません。");
}else{
nextbutton907();
}}}
SeekJudge = function(){
getElementsValue();
if(firsts==null || firsts==nul){
alert("seekBarの初期値が入力されていません。");
}else{
if(maxs==null || maxs==nul){
alert("seekBarの最大値が入力されていません。");
}else{
if(mins==null || mins==nul){
alert("seekBarの最小値が入力されていません。");
}else{
if(sstr==null || sstr==nul){
alert("seekBarの表示する文字が入力されていません。");
}else{
if(maxs==mins || maxs<mins || maxs<firsts || mins>firsts){
alert("seekBarの設定値が有効ではありません。");
}else{
nextbutton907();
}}}}}}
nextbutton907 = function(){
judgevalue = MAXvalue;
makevalue2++;
makevalue3 = makevalue2-1;
if (makevalue2 == 12) {
ifStr2();
alert("これ以上メニューを作成することはできません。");
makevalue2	= 10;
makevalue3 = makevalue2-1;
}else { 
ifValueM1++;
nextbutton1();
}}
nextbutton1 = function() {
let OBJECT9 = `メニュー【${makevalue2}】を作成中`;
document.getElementById("AA2").innerHTML = OBJECT9;
luasc();
}
buttonEnd=function(){
if(!(makevalue==1)){
buttonEnd2();
}else{
alert("作成されていません。");
}};
buttonEnd2=function(){
if (confirm("完成保存しても宜しいですか？")){
promptEnd=prompt("制作者名を入力してください。","制作者:");
if (!(promptEnd==""||promptEnd==null||promptEnd=="制作者:")){
let ends = document.getElementById(u).textContent;
let mainend = ends.replace("制作者",promptEnd);
document.getElementById(u).innerHTML = mainend;
fileName();
ALLedit();
}} else {}}
  fileName=function(){
  fName=prompt("ファイル名を入力して下さい。","○○.lua");
  if(!(fName==null || fName=="○○.lua" || fName=="")){
 fileNameWrite = fName;
  }
  }
menuReplaceEnd=function(stringMenu){
countsMenu=-1;
nilnull='"';
for (R999=0; R999<10; R999++){ 
countsMenu++;
primaryMenu=nilnull+stringMenu+countsMenu+nilnull+",";
let menuResetFunc = document.getElementById(u).textContent;
let mainLasta = menuResetFunc.replace(primaryMenu,"");
document.getElementById(u).innerHTML = mainLasta;}}
allReset=function(countsR){
retur=countsR;
for(R=0; R<retur; R++){
let allResets=Nas+lastValue;
lastValue++;
let last = document.getElementById(u).textContent;
let mainLast = last.replace(allResets,ArrayOnly[0]);
document.getElementById(u).innerHTML = mainLast;}}
allReset2=function(countsR2,lastEdit){
retur2=countsR2;
for(R2=0; R2<retur2; R2++){
let allResets2=Nas+lastEdit
let last2 = document.getElementById(u).textContent;
let mainLast2 = last2.replace(allResets2,ArrayOnly[0]);
document.getElementById(u).innerHTML = mainLast2;}}
seaReset=function(seaCo){
retur3=seaCo;
for(R3=0; R3<retur3; R3++){
let sResets=Aas+lastValue2;
lastValue2++;
let last3 = document.getElementById(u).textContent;
let mainLast3 = last3.replace(sResets,"1");
document.getElementById(u).innerHTML = mainLast3;}}
seaReset2=function(countsR3,lastEdit2){
retur4=countsR3;
for(R4=0; R4<retur4; R4++){
let allResets3=Aas+lastEdit2
let last4 = document.getElementById(u).textContent;
let mainLast4 = last4.replace(allResets3,"1");
document.getElementById(u).innerHTML = mainLast4;}}
typeReset=function(typeCo){
retur5=typeCo;
for(R5=0; R5<retur5; R5++){
let tResets=Mas+lastValue5;
lastValue5++;
for(xp=0; xp<4; xp++){
let last5 = document.getElementById(u).textContent;
let mainLast5 = last5.replace(tResets,"DWORD");
document.getElementById(u).innerHTML = mainLast5;}}}
typeReset2=function(countsR6,lastEdit6){
retur6=countsR6;
for(R6=0; R6<retur6; R6++){
let allResets6=Mas+lastEdit6;
for(xp2=0; xp2<4; xp2++){
let last6 = document.getElementById(u).textContent;
let mainLast6 = last6.replace(allResets6,"DWORD");
document.getElementById(u).innerHTML = mainLast6;}}}
reReset=function(reCo){
retur7=reCo;
for(R7=0; R7<retur7; R7++){
let reResets=Bas+lastValue7;
lastValue7++;
let last7 = document.getElementById(u).textContent;
let mainLast7 = last7.replace(reResets,"1");
document.getElementById(u).innerHTML = mainLast7;}}
reReset2=function(countsR8,lastEdit8){
retur8=countsR8;
for(R8=0; R8<retur8; R8++){
let allResets8=Bas+lastEdit8
let last8 = document.getElementById(u).textContent;
let mainLast8 = last8.replace(allResets8,"1");
document.getElementById(u).innerHTML = mainLast8;}}
resReset=function(resCo){
retur9=resCo;
for(R9=0; R9<retur9; R9++){
let resResets=Cas+lastValue9;
lastValue9++;
let last9 = document.getElementById(u).textContent;
let mainLast9 = last9.replace(resResets,"1");
document.getElementById(u).innerHTML = mainLast9;}}
resReset2=function(countsR10,lastEdit10){
retur10=countsR10;
for(R10=0; R10<retur10; R10++){
let allResets10=Cas+lastEdit10
let last10 = document.getElementById(u).textContent;
let mainLast10 = last10.replace(allResets10,"1");
document.getElementById(u).innerHTML = mainLast10;}}
editReset=function(editCo){
retur11=editCo;
for(R11=0; R11<retur11; R11++){
let editResets=Das+lastValue11;
lastValue11++;
let last11 = document.getElementById(u).textContent;
let mainLast11 = last11.replace(editResets,"1");
document.getElementById(u).innerHTML = mainLast11;}}
editReset2=function(countsR12,lastEdit12){
retur12=countsR12;
for(R12=0; R12<retur12; R12++){
let allResets12=Das+lastEdit12
let last12 = document.getElementById(u).textContent;
let mainLast12 = last12.replace(allResets12,"1");
document.getElementById(u).innerHTML = mainLast12;}}
yq=function(hq){
editEnds=hq;
let enda = document.getElementById(u).textContent;
let mainenda = enda.replace(editEnds,"");
document.getElementById(u).innerHTML = mainenda;}
BR=function(){
let brs = document.getElementById(u).textContent;
let mainendabr = brs.replace(/br999/g,"<br>");
document.getElementById(u).innerHTML = mainendabr;
}


let noact = false;
hides = function(){
if(seekBar.checked){
hides4();
}else{
noact = false;
$('#editsValue').show();
$('#seekBarShow').hide();
$('#SeekSetting').hide();
}}
hides2 = function(){
if(offset_c.checked){
hides5();
}else{ 
noact = false;
$('#editsValue').show();
$('#mmm').show();
$('#offset').hide();
$('#offset_type').hide();
$('#offset_add').hide();
$('#editsValue_offset').hide();
}}
hides4=function(){
if(!noact){
noact = true;
$('#editsValue').hide();
$('#seekBarShow').show();
$('#SeekSetting').show();
}else{
$("#seekBar").prop("checked", false);
}
}
hides5=function(){
				if(!noact){
		noact = true;
$('#editsValue').hide();
$('#mmm').hide();
$('#offset').show();
$('#offset_type').show();
$('#offset_add').show();
$('#editsValue_offset').show();
}else{
$("#offset_c").prop("checked", false);
}}
$(function(){ $('input#memorychecked[type=checkbox]').click(function(){
if ($(this).prop('checked')){
$('#memorycheckbox').show(); 
}else{
$('#memorycheckbox').hide(); 
}})});
$(function(){ $('input#datachecked[type=checkbox]').click(function() { 
if ($(this).prop('checked')){
$('#databutton').show();
} else {
$('#databutton').hide(); 
}})});
menuReplace=function () {
let mainreplace = document.getElementById(u).textContent;
let mains = mainreplace.replace(mainR,main);
document.getElementById(u).innerHTML = mains;}
ifStr=function(){
let QAZW=
"if AK == "+Hc+" then A"+Hc+"() end	"
let ifs = document.getElementById(u).textContent;
let mainenda1 = ifs.replace("QAZG"+Hc,QAZW);
document.getElementById(u).innerHTML = mainenda1;}
ifStr2=function(){
Hc++;
let QAZW2=
"if AK == "+Hc+" then A4455() end"
let ifs2 = document.getElementById(u).textContent;
let mainendai2 = ifs2.replace("QAZG11",QAZW2);
document.getElementById(u).innerHTML = mainendai2;}


ifStrMenu1 = function(){
if(makevalue==1){o("SK", "h", "QAZ2G");}
if(makevalue==2){o("SKA", "P", "QAZ3G")}
if(makevalue==3){o("SKB", "KA", "QAZ4G")}
if(makevalue==4){o("SKC", "LA", "QAZ5G")}
if(makevalue==5){o("SKD", "MA", "QAZ6G")}
if(makevalue==6){o("SKE", "NA", "QAZ7G")}
if(makevalue==7){o("SKF", "BA", "QAZ8G")}
if(makevalue==8){o("SKG", "VA", "QAZ9G")}
if(makevalue==9){o("SKH", "CA", "QAZ10G")}
if(makevalue==10){o("SKI", "XA", "QAZ11G")}}
o = function(Mename, Mename2, beforeStr){
Mename1=Mename;
Mename3=Mename2;
beforeStr1=beforeStr;
let QAZW22=
"if "+Mename1+"["+ifValueM1+"] == true then "+Mename3+ifValueM1+"() end"
let ifs22 = document.getElementById(u).textContent;
let mainenda22 = ifs22.replace(beforeStr1+ifValueM1,QAZW22);
document.getElementById(u).innerHTML = mainenda22;
}
ifStrMenu2 = function(){
ifValueM1++;
let QAZW23=
"if "+Mename1+"["+ifValueM1+"] == true then Main() end"
let ifs24 = document.getElementById(u).textContent;
let mainendai25 = ifs24.replace(beforeStr1+"11",QAZW23);
document.getElementById(u).innerHTML = mainendai25;
}
offsetReset = function(offsetCount){
for(sek2=0; sek2<offsetCount; sek2++){
let offsetGet = document.getElementById(u).textContent;
let offsetReplace = offsetGet.replace("offsetAddbr999","");
document.getElementById(u).innerHTML = offsetReplace;}}

seekBarReset = function(seekCount){
for(sek=0; sek<seekCount; sek++){
let seekGet = document.getElementById(u).textContent;
let seekReplace = seekGet.replace("seekBarbr999","");
document.getElementById(u).innerHTML = seekReplace;}}

cu = function(){
searchStr=Aas+java;
refineStr=Bas+java;
typee=Mas+java;
editMemory=Nas+java;
resultStr=Cas+java;
editStr=Das+java;
ifStrMenu1();//ok
searchfunc2();
refinefunc2();
resultfunc2();
notCh();//seekBar作成 or clear
notCh2();//
editRepS();
menufunc2();
typeWrite();
check();//count
if (count==1){
memoryNumberSearch();//memoryOnlyOneに
memoryReplace();
}else{
if (!(count==1)){
bigCheck();
memoryWhat();
memoryBigCheck();
memorysReplace();
reset();}}}
editRepS = function(){
if(!seekBar.checked || !offset_c.checked){
editfunc2();//通常に変更値
}
}
notCh = function(){
if(!(seekBar.checked)){
seekBarReset(1);//上をひとつけす
}else{
let seekTemp = "n = gg.prompt({"+n+sstr+" ["+mins+"; "+maxs+"]"+n+"},{"+firsts+"}, {"+n+"number"+n+"})br999if n == nil then Main() end"
let truSeek = document.getElementById(u).textContent;
let falSeek = truSeek.replace("seekBar",seekTemp);
document.getElementById(u).innerHTML = falSeek;
if(!(offset_c.checked)){
seekBarReplace2();
}
}
}
freezeF  = function() {
				if(freeze_c.checked){
								offset_freeze = "true";
				}else{
								offset_freeze = "false";
				}
				
}
notCh2 = function () {
if(!(offset_c.checked)){
offsetReset(1);//上をひとつけす
}else{
luascriptOffset = true;
let offsetTemp = "offset("+offset_value_offset+","+type_offset+","+editValue_offset+","+offset_freeze+")";
let truoffset = document.getElementById(u).textContent;
let faloffset = truoffset.replace("offsetAdd",offsetTemp);
document.getElementById(u).innerHTML = faloffset;




if(!(seekBar.checked)){
offsetReplace2();
}
}
}
brn = function () {//この関数ゴミボツ
let getL = document.getElementById(u).textContent;
innerL = getL.replace(/\r?\n/g,"");
document.getElementById(u).innerHTML = innerL;
}



seekBarReplace2 = function(){
const vvv = '"';
let xxx = document.getElementById(u).textContent;
let xxxx = xxx.replace(vvv+editStr+vvv,"n[1]");
document.getElementById(u).innerHTML = xxxx;
}

offsetReplace2=function(){
let xxx2 = document.getElementById(u).textContent;
//出来ればリファイン不使用の場合の分岐
let xxxx2 = xxx2.replace(r+editStr+r,r+refinevalue.value+r);
document.getElementById(u).innerHTML = xxxx2;
}



searchfunc2=function(){
 searchvaluef = document.getElementById("searchvalue").value;
let OBJE = document.getElementById(u).textContent;
let searchsearch = OBJE.replace(searchStr,searchvaluef);
document.getElementById(u).innerHTML = searchsearch;}
refinefunc2=function(){
var refinevaluef = document.getElementById("refinevalue").value;
if(refinevaluef=="" || refinevaluef==null){
let refineObjectn = document.getElementById(u).textContent;
let refinerefinen = refineObjectn.replace(refineStr,searchvaluef);
document.getElementById(u).innerHTML = refinerefinen;
}else{
let refineObject = document.getElementById(u).textContent;
let refinerefine = refineObject.replace(refineStr,refinevaluef);
document.getElementById(u).innerHTML = refinerefine;}}

resultfunc2=function(){
let resultObject = document.getElementById(u).textContent;
if(offset_c.checked){
let resultresult2 = resultObject.replace(resultStr,1);
document.getElementById(u).innerHTML = resultresult2;
}else{
let resultvaluef = document.getElementById("getresultvalue").value;
let resultresult = resultObject.replace(resultStr,resultvaluef);
document.getElementById(u).innerHTML = resultresult;}}

editfunc2 = function(){
let editvaluef = document.getElementById("editvalue").value;
let editObject = document.getElementById(u).textContent;
let editedit = editObject.replace(editStr,editvaluef);
document.getElementById(u).innerHTML = editedit;}

menufunc2=function(){
let menuvaluef = document.getElementById("menuvalue").value;
let menuObject = document.getElementById(u).textContent;
let menumenu = menuObject.replace(menuStr,menuvaluef);
document.getElementById(u).innerHTML = menumenu;}

typeWrite=function(){
for (LUAj=0; LUAj<4; LUAj++){
if (typedjudge==MAXvalue){
let OBJECT9 = document.getElementById(u).textContent;
let result = OBJECT9.replace(typee,"DWORD");
document.getElementById(u).innerHTML = result;
 }else{
if (typefjudge==MAXvalue){
let OBJECT9 = document.getElementById(u).textContent;
let result = OBJECT9.replace(typee, "FLOAT");
   document.getElementById(u).innerHTML = result;
}else{
   if (typedojudge==MAXvalue){
let OBJECT9 = document.getElementById(u).textContent;
let result = OBJECT9.replace(typee, "DOUBLE");
document.getElementById(u).innerHTML = result;
}else{
   if (typehjudge==MAXvalue){
let OBJECT9 = document.getElementById(u).textContent;
let result = OBJECT9.replace(typee, "BYTE");
document.getElementById(u).innerHTML = result;
}else{
if (typeajudge==MAXvalue){
let OBJECT9 = document.getElementById(u).textContent;
let result = OBJECT9.replace(typee, "AUTO");
document.getElementById(u).innerHTML = result;
}}}}}}}

//メモリ範囲1
check = function(){
count = 0; 	
for (i=0; i<15; i++) 
if (document.memoryFORM.elements[i].checked)
count++; 
}

memoryReplace=function(){
var sex = document.getElementById(u).textContent;
var rem = sex.replace(editMemory,memoryOnlyOne);
   document.getElementById(u).innerHTML = rem;
}
reset=function(){
				JHh=0;
  				CHh=0;
  				CAh=0;
  				CDh=0;
  				CBh=0;
  				PSh=0;
  				Ah=0;
  				Jh=0;
  				Sh=0;
  				Ash=0;
  				Vh=0;
  				Oh=0;
  				Bh=0;
  				Xah=0;
  				Xsh=0;
  				memoryValue=1;}	
memorysReplace=function(){
let memre = document.getElementById(u).textContent;
let replacem = memre.replace(editMemory,memoryReplacestr);
document.getElementById(u).innerHTML = replacem;}
function DWORDr(){ 
typevalue1 = MAXvalue;
FLOATa.checked = false;
DOUBLEa.checked = false;
HEXa.checked = false;
AUTOa.checked = false;
typedjudge=MAXvalue;
typefjudge=0;
typedojudge=0;
typehjudge=0;
typeajudge=0;
}
function FLOATr(){
typevalue1 = MAXvalue;
DWORDa.checked = false;
DOUBLEa.checked = false;
HEXa.checked = false;
AUTOa.checked = false;
typedjudge=0;
typefjudge=MAXvalue;
typedojudge=0;
typehjudge=0;
typeajudge=0;
}
function DOUBLEr(){
typevalue1 = MAXvalue;
FLOATa.checked = false;
DWORDa.checked = false;
HEXa.checked = false;
AUTOa.checked = false;
typedjudge=0;
typefjudge=0;
typedojudge=MAXvalue;
typehjudge=0;
typeajudge=0;
}
function HEXr(){
typevalue1 = MAXvalue;
FLOATa.checked = false;
DOUBLEa.checked = false;
DWORDa.checked = false;
AUTOa.checked = false;
typedjudge=0;
typefjudge=0;
typedojudge=0;
typehjudge=MAXvalue;
typeajudge=0;
}
function AUTOr(){
typevalue1 = MAXvalue;
FLOATa.checked = false;
DOUBLEa.checked = false;
HEXa.checked = false;
DWORDa.checked = false;
typedjudge=0;
typefjudge=0;
typedojudge=0;
typehjudge=0;
typeajudge=MAXvalue;
}
