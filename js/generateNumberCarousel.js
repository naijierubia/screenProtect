/* 获取父元素，生成一个可以无缝切换的数列 */
class generateVessel{
    constructor(parentVessel,startNumber,endNumber,config={}){
        this.parentVessel = parentVessel;
        this.startNumber = startNumber;
        this.endNumber = endNumber;
        this.margin = margin;
        this.config = config;
    }

    createVessel(){
        let numberVessel = document.createElement("div");
        for(let i = this.startNumber; i<=this.endNumber; i++){
            this.parentVessel.appendChild(numberVessel)
            this.parentVessel.childNodes[i].inertHTML = i;
        }
        //创造数列
    }
        

}