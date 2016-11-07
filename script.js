window.onload = function() {

var questionArea = document.getElementsByClassName('questions')[0],
    answerArea = document.getElementsByClassName('answers')[0],
    checker = document.getElementsByClassName('checker')[0],
    current = 0,

    allQuestions = {
        'pcfff': ['pcfff', 'ppfaf', 'escqe', 'pahsk', 'pufff', 0],
        'rgclt': ['rgclt', 'ptovy', 'rcclt', 'rgcll', 'rpgas', 0],
        'gipqh': ['ipqhy', 'gicww', 'gipqh', 'igpzx', 'luizd', 2],
        'fipyv': ['xektl', 'fipyv', 'heega', 'fipvy', 'fixff', 1],
        'bdzzr': ['bdzzz', 'efnik', 'xjgfj', 'bdzzr', 'bdrzr', 3],
        'qorqn': ['mqbvu', 'porqn', 'pknnh', 'qorqn', 'dorqn', 3],
        'olndo': ['olnxg', 'kngdv', 'olndo', 'mhvls', 'olnod', 2],
        'heudl': ['leuhd', 'hodle', 'hedgo', 'heudl', 'wdtrq', 3],
        'ylpph': ['ylorj', 'ylpph', 'ylphp', 'yjuvj', 'arphe', 1],
        'aixkq': ['aikkq', 'nkvhb', 'aixkq', 'xhbcc', 'aixkp', 2],
        
        'gvapla': ['gvapal', 'mdetdo', 'igvapl', 'gvapla', 'gvqhwb', 3],
        'cirerb': ['cirvne', 'cirerb', 'tdnmdg', 'cirerp', 'kdljom', 1],
        'mzhiqz': ['moudzx', 'mhziqz', 'tbmybl', 'mzhiqz', 'mhcmhm', 3],
        'nxqtty': ['nxqtty', 'ntohkk', 'nxlwct', 'fkshnc', 'niboiy', 0],
        'exnsli': ['exahjl', 'exnsli', 'sbszkp', 'freppr', 'exnsll', 1],
        'mwxtmc': ['yftoai', 'mybffi', 'mwxtmc', 'mwtxmc', 'wkhlba', 2],
        'ptadei': ['ptadie', 'ptadei', 'rtpcuy', 'bdeeyw', 'piwxqp', 1],
        'rtepdd': ['rtepdd', 'rteqfr', 'seguar', 'trefzn', 'flvhrx', 0],
        'jundya': ['junday', 'hqbvsa', 'jundya', 'bttsrt', 'jpzzgl', 2],
        'arxnrh': ['abxunp', 'arxnrh', 'ixgwdk', 'arxnhr', 'yzucdf', 1],
        
        'axwopqq': ['bknairr', 'axwghjr', 'axwopqq', 'awxxipd', 'nmumefi', 2],
        'geeixny': ['ntdcvyn', 'geefxzk', 'vzbzrhp', 'geeixny', 'gedkzsc', 3],
        'obzjavf': ['ruwfdvh', 'oftzzae', 'obnmqrc', 'obzjavf', 'ujsxlrx', 3],
        'bwqepri': ['bwqperi', 'bwqepri', 'wplfivb', 'bqwepri', 'pfrxevk', 1],
        'usztqga': ['washipf', 'usztqga', 'uzstqga', 'weihcwl', 'uammvky', 1],
        'aiahnrp': ['aiahrnp', 'aiihnrp', 'lwteaol', 'peliigs', 'aiahnrp', 4],
        'gwpwwja': ['gwpzvpl', 'vhlfzvf', 'gwpwwaj', 'zvrlqvq', 'gwpwwja', 4],
        'oegjsfg': ['uwlmovc', 'oegjsfg', 'oeyredb', 'qegjsfg', 'hunuxmc', 1],
        'effslyo': ['eqmmxnj', 'ueifhur', 'efflzjn', 'effslyo', 'eyebwql', 3],
        'swkqkhs': ['frbeywf', 'qqrjymm', 'sgmkope', 'swkqkhs', 'lobprmf', 3],
        
        'ooailbdn': ['ooialbdn', 'escyietb', 'ooailbnd', 'ggwnaxcn', 'ooailbdn', 4],
        'nqfohiqx': ['nqfohiqx', 'lyldebnq', 'nqpxfrmm', 'stglsofn', 'nedmozcb', 0],
        'najjcwkm': ['pseofgbs', 'najjcwkm', 'njtzpiua', 'njajcwkm', 'acaltzow', 1],
        'rizsgfde': ['axdgxjnu', 'rizsgfde', 'rizsgfed', 'vowbnsyz', 'rimkjyjf', 1],
        'tfhuyvak': ['fcivcewd', 'xyqrepqz', 'wxgukekm', 'tfhubnwa', 'tfhuyvak', 4],
        'ceatcnoc': ['ceatdhsc', 'ceatcnoc', 'ivbqecip', 'ftrceatc', 'nmfsfkdz', 1],
        'foxnawvd': ['nbgaobgx', 'foxnalpm', 'foxnawvd', 'tkcuovue', 'fauxxlga', 2],
        'jptpufad': ['uwbmsapt', 'jcsunuzh', 'yikubqyw', 'jptpufad', 'jubrzlgm', 3],
        'tgwomttn': ['tjhdamgb', 'tbzmpsxp', 'tgwomttn', 'hnqymqjj', 'hrzcnffs', 2],
        'zzcpidqn': ['hucjyezz', 'zydrunas', 'zdbzprfo', 'zzcpidqn', 'gdxnczge', 3],
        
        'zzwifwfcf': ['zwifwfcfr', 'zzwifwfcf', 'kbhqazrtn', 'zwoffofff', 'lqhkeoxyn', 1],
        'zvigvsxiw': ['zvigvsxwi', 'tzcuifgnj', 'svzufkjqv', 'zvinukwpu', 'zvigvsxiw', 4],
        'cvplhcjhx': ['cvplhcjhx', 'tcokkphfs', 'cvplhlpwc', 'cvfyeygwk', 'gjslxkjln', 0],
        'myqkzkjer': ['wdxnkczfg', 'myqkzkjer', 'nggkcjqsk', 'nlbufwzbs', 'myqubespa', 1],
        'afrlhspce': ['apkqnbdrs', 'afzrctzpc', 'afrlhspce', 'wyilaucqy', 'aflrhspce', 2],
        'huksmnkuw': ['huksopmob', 'ttakshwve', 'cusbywuch', 'huuearboc', 'huksmnkuw', 4],
        'zvtcjfqba': ['zxryvrece', 'zvtcjfqba', 'eyftedzth', 'suznpetcr', 'xcuztewuw', 1],
        'aqmkrgsnc': ['aqmkptaca', 'znykthizb', 'aqmgqnsxf', 'aqmkrgsnc', 'iehrbbgua', 3],
        'pjznhbyeq': ['snarewuwk', 'pjznhbyeq', 'prnsvukuu', 'ebbqsjpbk', 'pulsxcwwh', 1],
        'mmardfjjw': ['mmardymsc', 'rbfhmvbtt', 'mmaqclplp', 'mmardfjjw', 'cgkdkkxmr', 3],
        
        'usukjbwbdr': ['dnudgynvpj', 'hseigmyvga', 'usukjbwbdr', 'pgnrsofpoi', 'dqiazrgmng', 2],
        'dyebcdwllm': ['dyelbrolol', 'dyebcdwllm', 'deybcdwllm', 'gtntdgfnrj', 'qtgzctqghx', 1],
        'rexlaohzgg': ['yexxkjownq', 'ypcfjqywiw', 'rexxynfyyg', 'rexlaohzgg', 'ryvcwtsyiq', 3],
        'oiasbmtrvx': ['oiasbtmrvx', 'mwpetigxcw', 'oiasbmtrxv', 'oiasbmtrvx', 'keuoaptxxe', 3],
        'dmfxdkzepz': ['dmxfdkzepz', 'dmfxdkzezp', 'dmffsfzepz', 'dmfxdkzepz', 'dmsgwifpaa', 3],
        'jqbtoidyyr': ['jqbtoidyyr', 'jbgzblkopj', 'jpddbmdjca', 'sbugegjefa', 'xlvcyrklon', 0],
        'lfydymamaj': ['litvcqlsug', 'lfydymamaj', 'deufrycldz', 'lfyrghvcza', 'qsegrdxqpr', 1],
        'squatnoats': ['nobenchpls', 'squadctfll', 'squatnoats', 'ufslvknoge', 'sqmyssspgl', 2],
        'cvtvgnjgpp': ['cvtvgnjgpp', 'cvtvggmgbk', 'jjymistgdy', 'cvtvgnjggp', 'aelewgoxoe', 0],
        'efqlawnkxb': ['evqzcouuna', 'eflqawnkxb', 'efqlawnkxb', 'zfefwjgonf', 'nefgjaibau', 2]
    };


    function loadQuestion(curr) {
  // This function loads all the question into the questionArea
  // It grabs the current question based on the 'current'-variable
  
    var question = Object.keys(allQuestions)[curr];
    
    questionArea.innerHTML = '';
    questionArea.innerHTML = question.toUpperCase();    
  }
  
  function loadAnswers(curr) {
  // This function loads all the possible answers of the given question
  // It grabs the needed answer-array with the help of the current-variable
  // Every answer is added with an 'onclick'-function
  
    var answers = allQuestions[Object.keys(allQuestions)[curr]];
    
    answerArea.innerHTML = '';
    
    for (var i = 0; i < answers.length -1; i += 1) {
      var createDiv = document.createElement('div'),
          text = document.createTextNode(answers[i].toUpperCase());
      
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
