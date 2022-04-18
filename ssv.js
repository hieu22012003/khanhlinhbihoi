var flag;

flag=1;

ans_no = document.getElementById("ans_no")

function yes() {
    alert("do do hoi")
}
function no() {
    if (flag ==1){
        ans_no.style.top='90px';
        ans_no.style.left='500px';
        flag =2
    } else if (flag==2){
        ans_no.style.top='180px';
        ans_no.style.left='50px';
        flag =3
    } else if (flag==3){
        ans_no.style.top='255px';
        ans_no.style.left='368px';
        flag =1
    }
}