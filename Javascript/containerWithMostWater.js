/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    let start = 0;
    let end = height.length - 1;
    if (!height || height.length < 2) {
		return 0;
	}
    while(start < end){
        let currentArea = (end - start) * (height[start] > height[end] ? height[end] : height[start]);
        if(currentArea > maxArea){
            maxArea = currentArea;
        }
        if(height[start] > height[end]){
            end = end - 1;
        }else{
            start = start + 1;
        }
    }
    return maxArea;
};
