

var removeDuplicates = function(nums) {


    /*


    let frequency = new Map();
    let i = 1;
    let current = nums[0];
    let k =1;
    let currentFrequency = 1;
    
    frequency.set(current,currentFrequency);

    while(i<nums.length){
        if(current == nums[i]){
            if(currentFrequency == 2){
                nums[i] = false;
            } else{
                currentFrequency+=1;
            }
        } else{
            current = nums[i];
            currentFrequency = 1;
        }
        frequency.set(current,currentFrequency);
        i++;
    }

    let index = 0;


    
    for(let key of frequency.keys()){
        let value = frequency.get(key);
        while(value){
            nums[index] = key;
            value--;
            index++;
        }
    }
    // console.log(nums);
    return index;


    */

    if(nums.length > 2){

        let k =2;
        let i = 2;

        while(i<nums.length){
            if(nums[i] != nums[k-2]){
                nums[k] = nums[i];
                k++;
            }
            i++;
        }
        return k;
    } else{
        return nums.length;
    }
};

removeDuplicates([0,0])