class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}
class Line {
    constructor(diemA, diemB){
        this.diemA = diemA;
        this.diemB = diemB;
    }
    getLength() {           
        const dx = this.diemB.x - this.diemA.x;
        const dy = this.diemB.y - this.diemA.y;
        return Math.sqrt(dx*dx + dy*dy);
    }
    
}

class Triagle{
    constructor(diemA, diemB, diemC) {
    this.diemA = diemA;
    this.diemB = diemB;
    this.diemC = diemC;
    this.hi = () =>console.log('hello') ;
    }
//static class    2 doi tuong trong class
    static compare(t1,t2){
        this.t1 = new Triagle(this.diemA, this.diemB, this.diemC);
        this.t2 = new Triagle(this.diemA, this.diemB, this.diemC);
        const cv1 = t1.getChuVi();
        const cv2 = t2.getChuVi();
        let msg;
// ifelse        
        msg= cv1 > cv2 ? 'tam giac 1 lon hon':'Tam giac 2 lon hon';
        msg= cv1 === cv2 ? '2 tam giac = nhau':msg;//

        return msg;
        
    }

    getChuVi() {
        const AB = new Line(this.diemA, this.diemB);
        const BC = new Line(this.diemB, this.diemC);
        const AC = new Line(this.diemA, this.diemC);
        return AB.getLength() + BC.getLength() + AC.getLength();
    }
    show(){
        console.log(this.getChuVi()) ;
    }
}

const A = new Line(0,0);
const B = new Line(1,0);
const C = new Line(0,1);
const ABC = new Triagle(A,B,C);
const BAC = new Triagle(B,A,C);


ABC.hi();
//k run dc STATIC
//STATIC co the dung o ngoai
/* vi du:
class sanpham{
    static getAllProduct(){

    }
}
*/
//ABC.compare();

Triagle.compare();