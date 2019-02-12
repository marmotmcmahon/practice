class Solution {
    function longestCommonPrefix($strs) {
        
        $output = "";
        
        $dictionary = [];
        
        for ($i = 0; $i <= strlen($strs[0]); $i++) {
            $current = substr($strs[0], 0, $i);
            forEach($strs as $key => $value) {
                if (substr($value, 0, $i) == $current) {
                    if (!array_key_exists($current, $dictionary)) {
                        $dictionary[$current] = 1;
                    } else {
                        $dictionary[$current] += 1;
                    }
                }
            }
        }
        
        $dictionary = array_reverse($dictionary);
        
        forEach($dictionary as $key => $value) {
            if ($value == count($strs)) {
                return $key;
            }
        }
        
        return $output;
    }
}
