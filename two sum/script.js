var twoSum= function(nums,target){
    for (let i=0;i<nums.length;i++){
        for (let j=0;j<nums.length;j++){
            if(nums[i]+nums[i+1]===target){
                return [i,j]
            }
        }
        
    }
}

console.log(twoSum([1,2,5,4],9))
