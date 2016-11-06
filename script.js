window.onload = function() {

var questionArea = document.getElementsByClassName('questions')[0],
    answerArea = document.getElementsByClassName('answers')[0],
    checker = document.getElementsByClassName('checker')[0],
    current = 0,

    allQuestions = {
        'pcfff': ['pcfff', 'apfab', 'escqe', 'nahsk', 'vuzal', 0],
        'rgclt': ['rgclt', 'ptovy', 'svmcx', 'gvcnx', 'bpgas', 0],
        'gipqh': ['ojyoy', 'rbcww', 'gipqh', 'stmzx', 'luizd', 2],
        'fipyv': ['xektl', 'fipyv', 'heega', 'xxvfg', 'zkxff', 1],
        'bdzzr': ['ugvha', 'efnik', 'xjgfj', 'bdzzr', 'qkcad', 3],
        'qorqn': ['mqbvu', 'sgobe', 'pknnh', 'qorqn', 'dqrkv', 3],
        'olndo': ['cxxjg', 'kngdv', 'olndo', 'mhvls', 'iqpvn', 2],
        'heudl': ['uxecc', 'bzzpj', 'kvdgo', 'heudl', 'wdtrq', 3],
        'ylpph': ['xzorj', 'ylpph', 'klube', 'pjuvj', 'arphe', 1],
        'aixkq': ['jjglp', 'nkvhb', 'aixkq', 'xhbcc', 'pdlem', 2],
        
        'gvapla': ['irpmsv', 'mdetdo', 'ijalgh', 'gvapla', 'lnshwb', 3],
        'cirerb': ['pygvne', 'cirerb', 'tdnmdg', 'yqjttk', 'kdljom', 1],
        'mzhiqz': ['moudzx', 'potgwz', 'tbmybl', 'mzhiqz', 'mhcmhm', 3],
        'nxqtty': ['nxqtty', 'ktohkk', 'xflwct', 'fkshnc', 'tiboiy', 0],
        'exnsli': ['tpahjl', 'exnsli', 'sbszkp', 'freppr', 'aasauy', 1],
        'mwxtmc': ['yftoai', 'mybffi', 'mwxtmc', 'rrddeu', 'wkhlba', 2],
        'ptadei': ['mkcyfc', 'ptadei', 'rtpcuy', 'bdeeyw', 'wipxqp', 1],
        'rtepdd': ['rtepdd', 'ovaqfr', 'seguar', 'gfbfzn', 'flvhrx', 0],
        'jundya': ['crngcm', 'hqbvsa', 'jundya', 'bttsrt', 'zpzzgl', 2],
        'arxnrh': ['voxunp', 'arxnrh', 'ixgwdk', 'jfbfrl', 'yzucdf', 1],
        
        'axwopqq': ['bknairr', 'isqghjr', 'axwopqq', 'nlbxipd', 'nmumefi', 2],
        'geeixny': ['ntdcvyn', 'pknfxzk', 'vzbzrhp', 'geeixny', 'edkzksc', 3],
        'obzjavf': ['ruwfdvh', 'vftzzae', 'uonmqrc', 'obzjavf', 'ujsxlrx', 3],
        'bwqepri': ['jhbafxq', 'bwqepri', 'wplfivb', 'tnykrdt', 'qfrxevk', 1],
        'usztqga': ['washipf', 'usztqga', 'iwimrzk', 'weihcwl', 'qammvky', 1],
        'aiahnrp': ['xzymcvi', 'nczemgy', 'lwteaol', 'peliigs', 'aiahnrp', 4],
        'gwpwwja': ['isvzvpl', 'vhlfzvf', 'ymhvwrc', 'zvrlqvq', 'gwpwwja', 4],
        'oegjsfg': ['uwlmovc', 'oegjsfg', 'miyredb', 'seoqgtx', 'hunuxmc', 1],
        'effslyo': ['pqmmxnj', 'ueifhur', 'fndlzjn', 'effslyo', 'eyebwql', 3],
        'swkqkhs': ['frbeywf', 'qqrjymm', 'sgmkope', 'swkqkhs', 'lobprmf', 3],
        
        'ooailbdn': ['ewewnicr', 'escyietb', 'ucqumper', 'ggwnaxcn', 'ooailbdn', 4],
        'nqfohiqx': ['nqfohiqx', 'lyldebnq', 'tgpxfrmm', 'stglsofn', 'eedmozcb', 0],
        'najjcwkm': ['pseofgbs', 'najjcwkm', 'njtzpiua', 'tmfahtwh', 'acaltzow', 1],
        'rizsgfde': ['axdgxjnu', 'rizsgfde', 'upaxavcw', 'vowbnsyz', 'thmkjyjf', 1],
        'tfhuyvak': ['fcivcewd', 'xyqrepqz', 'wxgukekm', 'xdgwbnwa', 'tfhuyvak', 4],
        'ceatcnoc': ['nizwdhsc', 'ceatcnoc', 'ivbqecip', 'ftrqtvyh', 'nmfsfkdz', 1],
        'foxnawvd': ['nbgaobgx', 'ddqielpm', 'foxnawvd', 'tkcuovue', 'yauxxlga', 2],
        'jptpufad': ['uwbmsapt', 'jcsunuzh', 'yikubqyw', 'jptpufad', 'qubrzlgm', 3],
        'tgwomttn': ['lpyyamgb', 'fbzmpsxp', 'tgwomttn', 'hnqymqjj', 'hrzcnffs', 2],
        'yzcpidqn': ['hucjyezz', 'pmkpjyqo', 'rdbzprfo', 'yzcpidqn', 'gdxnczge', 3],
        
        'zzwifwfcfr': ['oooqkqlch', 'zwifwfcfr', 'wbhqazrtn', 'qjlblqxnd', 'lqhkeoxyn', 1],
        'zvigvsxiw': ['tnrqrjiqa', 'tzcuifgnj', 'kaqufkjqv', 'pzynukwpu', 'zvigvsxiw', 4],
        'cvplhcjhx': ['cvplhcjhx', 'tcokkphfs', 'znlgalpwc', 'hjfyeygwk', 'gjslxkjln', 0],
        'myqkzkjer': ['wdxnkczfg', 'myqkzkjer', 'nggkcjqsk', 'nlbufwzbs', 'fomubespa', 1],
        'afrlhspce': ['opkqnbdrs', 'tfzrctzpc', 'afrlhspce', 'wyilaucqy', 'dbfidjqcs', 2],
        'huksmnkuw': ['vxyqopmob', 'ttakshwve', 'cusbywuch', 'dyuearboc', 'huksmnkuw', 4],
        'zvtcjfqba': ['uxryvrece', 'zvtcjfqba', 'eyftedzth', 'ruknpetcr', 'xcuztewuw', 1],
        'aqmkrgsnc': ['njgnptaca', 'znykthizb', 'ulmgqnsxf', 'aqmkrgsnc', 'iehrbbgua', 3],
        'pjznhbyeq': ['snarewuwk', 'pjznhbyeq', 'srnsvukuu', 'ebbqsjpbk', 'luupxcwwh', 1],
        'mmardfjjw': ['zzrpdymsc', 'rbfhmvbtt', 'nwfqclplp', 'mmardfjjw', 'cgkdkkxmr', 3],
        
        'usukjbwbdr': ['dnudgynvpj', 'hseigmyvga', 'usukjbwbdr', 'pgnrsofpoi', 'dqiazrgmng', 2],
        'zkgbcdwllm': ['pzftmzeuqh', 'zkgbcdwllm', 'hltpphorvj', 'gtntdgfnrj', 'qtgzctqghx', 1],
        'rexlaohzgg': ['srexkjownq', 'ypcfjqywiw', 'rdyynnfyyg', 'rexlaohzgg', 'jyvcwtsyiq', 3],
        'oiasbmtrvx': ['zvabalnqhy', 'mwpetigxcw', 'xnxslvfntm', 'oiasbmtrvx', 'keuoaptxxe', 3],
        'dmfxdkzepz': ['jikpksyaqc', 'pnqoccodjd', 'azpfycxajn', 'dmfxdkzepz', 'ffsgwifpaa', 3],
        'jqbtoidyyr': ['jqbtoidyyr', 'gbgzblkopj', 'xhzqbmdjca', 'sbugegjefa', 'xlvcyrklon', 0],
        'lfydymamaj': ['citvcqlsug', 'lfydymamaj', 'deufrycldz', 'cydrghvcza', 'qsegrdxqpr', 1],
        'mnbbnvvmzg': ['wzwwtpkbju', 'ymnfdctfll', 'mnbbnvvmzg', 'ufslvknoge', 'acmyssspgl', 2],
        'cvtvgnjgpp': ['cvtvgnjgpp', 'ypduhgmgbk', 'jjymistgdy', 'mqpmjkvtzs', 'aelewgoxoe', 0],
        'efqlawnkxb': ['zvqzcouuna', 'cnqcuvzyzv', 'efqlawnkxb', 'zfefwjgonf', 'nhpgjaibau', 2]
    };


    function loadQuestion(curr) {
  // This function loads all the question into the questionArea
  // It grabs the current question based on the 'current'-variable
  
    var question = Object.keys(allQuestions)[curr];
    
    questionArea.innerHTML = '';
    questionArea.innerHTML = question;    
  }
  
  function loadAnswers(curr) {
  // This function loads all the possible answers of the given question
  // It grabs the needed answer-array with the help of the current-variable
  // Every answer is added with an 'onclick'-function
  
    var answers = allQuestions[Object.keys(allQuestions)[curr]];
    
    answerArea.innerHTML = '';
    
    for (var i = 0; i < answers.length -1; i += 1) {
      var createDiv = document.createElement('div'),
          text = document.createTextNode(answers[i]);
      
      createDiv.appendChild(text);      
      createDiv.addEventListener("click", checkAnswer(i, answers));
      
      
      answerArea.appendChild(createDiv);
    }
  }
  
  function checkAnswer(i, arr) {
    // This is the function that will run, when clicked on one of the answers
    // Check if givenAnswer is sams as the correct one
    // After this, check if it's the last question:
    // If it is: empty the answerArea and let them know it's done.
    
    return function () {
      var givenAnswer = i,
          correctAnswer = arr[arr.length-1];
      
      if (givenAnswer === correctAnswer) {
        addChecker(true);             
      } else {
        addChecker(false);                        
      }
      
      if (current < Object.keys(allQuestions).length -1) {
        current += 1;
        
        loadQuestion(current);
        loadAnswers(current);
      } else {
        questionArea.innerHTML = 'Done!';
        answerArea.innerHTML = '';
      }
                              
    };
  }
  
  function addChecker(bool) {
  // This function adds a div element to the page
  // Used to see if it was correct or false
  
    var createDiv = document.createElement('div'),
        txt       = document.createTextNode(current + 1);
    
    createDiv.appendChild(txt);
    
    if (bool) {
      
      createDiv.className += 'correct';
      checker.appendChild(createDiv);
    } else {
      createDiv.className += 'false';
      checker.appendChild(createDiv);
    }
  }
  
  loadQuestion(current);
  loadAnswers(current);

};