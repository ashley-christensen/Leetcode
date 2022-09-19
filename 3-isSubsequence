function isSubsequence(s, t) {
 if (s.length === 0) return true;
 if (t.length === 0) return false;

 if (s[0] === t[0]) {
  return isSubsequence(s.slice(1), t.slice(1));
 } else {
  return isSubsequence(s, t.slice(1));
 }
}