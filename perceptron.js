//perceptron object
function Perceptron(no, rate) {
    this.weight = [];//weigth randomly
    this.bias = 1;//for zero value
    this.prate = rate;//perceptron rate
    
    for(let i=0; i<=no; i++)
    {
        this.weight[i] = Math.random()*2 - 1; //-1 to 1
    }    
    //create activate function
    this.activate = function (inputs) {
        let sum = 0; 
        inputs.push(this.bias);//push bias

        for(let i=0; i<inputs.length ; i++)
        {
            sum += inputs[i]*this.weight[i];
        }
        //return value    
        if(sum > 0) return 1;
        else return 0;
    }
    //create train function
    this.train = function (input, output){
        let guess = this.activate(input);//return activate value
        input.push(this.bias);//push bias

        let error = output - guess; //error value
        //revalue the weight
        if(error != 0)
        {
            for(let i=0; i<input.length; i++)
                this.weight[i] += this.prate*error*input[i];
        }
    }
}