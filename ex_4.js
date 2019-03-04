function student(name, kor, eng, math){
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.math = math;
    this.avg;

    this.calcAvg = function(){
        this.avg = (kor + eng + math) / 3.0;
    }

    this.toString = function(){
        return Number(this.avg);
    }
}
