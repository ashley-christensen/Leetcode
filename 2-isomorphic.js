function ismorphic(s, t) {
 if (s.length !== t.length) return false;

 for (let i = 0; i < s.length; i++) {
  const a = s.indexOf(s[i]);
  const b = t.indexOf(t[i]);
  if (s[b] !== s[i] || t[a] !== t[i]) {
   return false;
  }
 }
 return true;
}
