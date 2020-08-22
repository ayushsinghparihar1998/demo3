export default {
  alphaOnly: '^[a-zA-Z .]*$', // alphabet space and dot
  // alphaOnlyNoSpace: '^[a-zA-Z.]*$', // alphabet and dot

  passwordPattern:
    '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$',
  passwordSpaceRemove: '^[ A-Za-z0-9()[]+-*/%]*$',
  numberOnly: '^[0-9]*$',
  validUrl:
    '((http|ftp|https)://)?(www.)?([w_-]+(?:(?:.[w_-]+)+))([w.,@?^=%&:/~+#-]*[w@?^=%&/~+#-])?',
  googleDocUrl: ' /([w-_]{15,})\\/(.*?gid=(d+))?'
};
