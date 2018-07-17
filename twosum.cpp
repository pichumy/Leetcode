#include <iostream>
#include <vector>

using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
  // IntArray. Solution in O(n) speed, but also O(n) space.
  unordered_map<int, int> previously_viewed;
  vector<int> result;
  for(int i = 0; i < nums.size(); i++){
    int complement = target - nums[i];

    if(previously_viewed.find(complement) != previously_viewed.end()){
      result.push_back(previously_viewed[complement]);
      result.push_back(i);
      return result;
    }
    previously_viewed[nums[i]] = i;
  }
  return result;
}

vector<int> twoSumInPlace(vector<int>& nums, int target){
  // n^2 solution. O(1) space.
  vector<int> result;
  for(int i = 0; i < nums.size(); i++){
    for(int j = i; j < nums.size(); j++){
      if(nums[i] + nums[j] == target){
        result.push_back(i);
        result.push_back(j);
        return result;
      }
    }
  }
  return result;
}
