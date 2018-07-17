#include <iostream>

int lengthOfLongestSubstring(std::string s) {
    std::string longest;
    std::string substring;
    for(std::string::iterator it=s.begin(); it < s.end(); ++it){
      std::size_t found = substring.find(*it);
        if(found!=std::string::npos){
            if(substring.length() > longest.length()){
                longest = substring;
            }
            substring = substring + *it;
            substring = substring.substr(found + 1, substring.length() - found - 1);
        }else{
            substring = substring + *it;
        }
    }
    if (substring.length() > longest.length()){
      return substring.length();
    }else{
      return longest.length();
    }
}

int main(){
  std::string input = "pwwkew";
  std::cout << lengthOfLongestSubstring(input);
  return 0;
}

// pwwkew
// substring = p
// substring = pw
// FOUND w at [1]
// longest = pw
// substring =
