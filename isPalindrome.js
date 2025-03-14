function isPalindrome(s) {
    var cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    function check(l, r) {
        if (l >= r)
            return true;
        if (cleaned[l] !== cleaned[r])
            return false;
        return check(l + 1, r - 1);
    }
    return check(0, cleaned.length - 1);
}
