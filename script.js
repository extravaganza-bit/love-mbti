const questions = [
  {
    tag: "첫 만남",
    title: "마음에 드는 사람을 만났을 때 나는?",
    answers: [
      { text: "먼저 말을 걸고 분위기를 편하게 만든다", type: "E" },
      { text: "상대가 다가올 수 있게 자연스럽게 신호를 보낸다", type: "I" }
    ]
  },
  {
    tag: "연락 스타일",
    title: "좋아하는 사람과 연락할 때 더 가까운 쪽은?",
    answers: [
      { text: "짧아도 자주, 일상의 작은 순간을 나눈다", type: "E" },
      { text: "천천히 깊게, 의미 있는 대화를 좋아한다", type: "I" }
    ]
  },
  {
    tag: "데이트 계획",
    title: "데이트 코스를 정할 때 나는?",
    answers: [
      { text: "새로 생긴 곳, 즉흥적인 코스가 끌린다", type: "N" },
      { text: "검증된 맛집과 편안한 동선을 선호한다", type: "S" }
    ]
  },
  {
    tag: "호감 포인트",
    title: "상대에게 더 설레는 순간은?",
    answers: [
      { text: "미래 이야기를 같이 상상해줄 때", type: "N" },
      { text: "내가 말한 작은 취향을 기억해줄 때", type: "S" }
    ]
  },
  {
    tag: "갈등 상황",
    title: "서운한 일이 생기면 나는 보통?",
    answers: [
      { text: "감정을 먼저 확인하고 다정하게 풀고 싶다", type: "F" },
      { text: "상황을 차분히 정리하고 해결책을 찾고 싶다", type: "T" }
    ]
  },
  {
    tag: "사랑의 언어",
    title: "내가 더 크게 감동하는 표현은?",
    answers: [
      { text: "진심이 느껴지는 말과 따뜻한 공감", type: "F" },
      { text: "필요한 순간에 딱 맞는 도움과 행동", type: "T" }
    ]
  },
  {
    tag: "약속",
    title: "중요한 데이트 전날 나는?",
    answers: [
      { text: "예약, 시간, 옷차림까지 미리 정리한다", type: "J" },
      { text: "큰 틀만 정하고 그날의 분위기를 즐긴다", type: "P" }
    ]
  },
  {
    tag: "관계 속도",
    title: "연애가 시작될 때 더 편한 흐름은?",
    answers: [
      { text: "관계의 방향을 어느 정도 확인하고 싶다", type: "J" },
      { text: "서로를 알아가며 자연스럽게 깊어지고 싶다", type: "P" }
    ]
  },
  {
    tag: "친구 소개",
    title: "연인을 친구들에게 소개하는 건?",
    answers: [
      { text: "좋은 사람이라면 빨리 함께 어울리고 싶다", type: "E" },
      { text: "둘 사이가 충분히 안정된 뒤가 좋다", type: "I" }
    ]
  },
  {
    tag: "기념일",
    title: "기념일을 준비한다면 더 끌리는 쪽은?",
    answers: [
      { text: "둘만 아는 의미를 담은 특별한 이벤트", type: "N" },
      { text: "취향에 맞춘 선물과 맛있는 식사", type: "S" }
    ]
  },
  {
    tag: "위로 방식",
    title: "상대가 힘들어할 때 나는?",
    answers: [
      { text: "곁에 있어주며 감정을 충분히 들어준다", type: "F" },
      { text: "현실적으로 도움이 될 방법을 같이 찾는다", type: "T" }
    ]
  },
  {
    tag: "주말 데이트",
    title: "갑자기 생긴 자유로운 주말, 더 좋은 건?",
    answers: [
      { text: "미리 골라둔 코스를 차근차근 즐기기", type: "J" },
      { text: "걷다가 끌리는 곳에 들어가는 즉흥 데이트", type: "P" }
    ]
  }
];

const resultData = {
  ENFJ: ["다정한 관계 리더", "상대의 마음을 잘 살피고 관계의 분위기를 따뜻하게 이끄는 타입이에요.", "표현과 배려가 자연스러워 상대가 사랑받는다고 느끼기 쉬워요.", "혼자 너무 많이 책임지려 하지 말고 내 감정도 같은 무게로 챙겨보세요."],
  ENFP: ["설렘 가득 로맨티스트", "새로운 경험과 솔직한 감정 표현으로 연애에 생기를 불어넣는 타입이에요.", "함께 있으면 즐겁고, 관계가 지루해지지 않게 만드는 힘이 있어요.", "순간의 감정이 커질 때 약속과 현실적인 리듬도 같이 확인해보세요."],
  ENTJ: ["확신 있는 직진러", "좋아하는 마음이 분명해지면 관계의 방향을 적극적으로 만들어가는 타입이에요.", "결정이 빠르고 책임감 있는 태도로 안정감을 줘요.", "상대의 속도가 나와 다를 수 있다는 점을 조금 더 기다려주세요."],
  ENTP: ["톡톡 튀는 플러팅 장인", "재치 있는 대화와 새로운 아이디어로 호감을 키워가는 타입이에요.", "상대에게 지적 자극과 재미를 동시에 줄 수 있어요.", "장난스러운 표현 뒤에 숨은 진심도 가끔은 또렷하게 말해주세요."],
  ESFJ: ["세심한 케어 메이트", "작은 취향과 약속을 잘 기억하며 안정적인 애정을 보여주는 타입이에요.", "상대가 필요한 순간을 놓치지 않고 따뜻하게 챙겨요.", "모두를 만족시키려 애쓰기보다 나의 기준도 분명히 말해보세요."],
  ESFP: ["오늘이 영화 같은 연인", "지금 이 순간의 즐거움과 표현을 중요하게 여기는 타입이에요.", "밝은 에너지와 행동력으로 데이트를 생생하게 만들어요.", "즐거움만큼 장기적인 약속도 가볍게 점검하면 더 단단해져요."],
  ESTJ: ["믿음직한 현실 파트너", "관계를 말보다 행동과 책임으로 증명하려는 타입이에요.", "계획적이고 성실해서 오래 만날수록 신뢰가 쌓여요.", "정답을 빨리 제시하기 전에 상대의 감정을 먼저 들어보면 좋아요."],
  ESTP: ["심장 뛰는 데이트 메이커", "활동적이고 솔직해서 연애에 속도감과 활기를 주는 타입이에요.", "망설이기보다 직접 부딪히며 추억을 만들어가요.", "즉흥적인 선택 전 상대의 컨디션도 한 번 확인해주세요."],
  INFJ: ["깊은 마음의 관찰자", "천천히 다가가지만 한번 마음을 열면 깊고 진실한 사랑을 하는 타입이에요.", "상대의 말 뒤에 있는 마음까지 읽어주는 섬세함이 있어요.", "혼자 해석하고 참기보다 확인하는 대화를 조금 더 해보세요."],
  INFP: ["순도 높은 감성러", "사랑의 의미와 진심을 중요하게 여기며 섬세한 애정을 쌓는 타입이에요.", "상대의 특별함을 발견하고 아름답게 표현할 줄 알아요.", "기대가 커질수록 현실의 작은 차이를 너무 아프게 받아들이지 않아도 돼요."],
  INTJ: ["신중한 미래 설계자", "쉽게 흔들리지 않고 깊이 생각한 뒤 관계를 선택하는 타입이에요.", "진지한 마음과 장기적인 시야로 안정적인 사랑을 만들어요.", "완벽한 타이밍을 기다리다 표현이 늦어지지 않게 해보세요."],
  INTP: ["느리지만 진심인 탐구자", "감정을 과장하기보다 함께 맞는 방식을 조용히 찾아가는 타입이에요.", "상대의 생각을 존중하고 독립적인 공간을 잘 지켜줘요.", "마음속 결론만 갖고 있지 말고 애정 표현을 조금 더 밖으로 꺼내주세요."],
  ISFJ: ["오래가는 온기", "익숙한 안정감과 꾸준한 배려로 사랑을 깊게 만드는 타입이에요.", "작은 약속과 일상을 소중히 여겨 상대에게 편안함을 줘요.", "상대가 알아주길 기다리기보다 원하는 것을 직접 말해도 괜찮아요."],
  ISFP: ["잔잔한 감성 데이트러", "말보다 분위기와 행동으로 마음을 전하는 부드러운 타입이에요.", "자연스럽고 편안한 매력으로 상대를 안심시켜요.", "불편한 상황을 피하기만 하면 오해가 쌓일 수 있어요."],
  ISTJ: ["한결같은 약속 지킴이", "말한 것은 지키고 관계를 차근차근 쌓아가는 타입이에요.", "성실함과 안정감이 커다란 매력으로 느껴져요.", "예상 밖의 변화도 상대의 애정 표현일 수 있다는 여지를 남겨보세요."],
  ISTP: ["담백한 실전형 연인", "과한 말보다 필요한 행동으로 마음을 보여주는 타입이에요.", "독립적이고 솔직해서 관계가 부담스럽지 않게 느껴져요.", "상대가 불안해하지 않도록 가끔은 마음을 말로 확인해주세요."]
};

const typeVisuals = {
  ENFJ: { symbol: "RJ", caption: "마음을 이끄는 따뜻한 리더", colors: ["#ff6f61", "#62c8b6"] },
  ENFP: { symbol: "SR", caption: "설렘을 번지게 하는 로맨티스트", colors: ["#ff7f7a", "#f8c85e"] },
  ENTJ: { symbol: "DC", caption: "확신 있게 다가가는 직진형", colors: ["#df4f49", "#4f6fdc"] },
  ENTP: { symbol: "FL", caption: "대화로 호감을 여는 플러터", colors: ["#7c5cff", "#62c8b6"] },
  ESFJ: { symbol: "CM", caption: "세심하게 챙기는 케어 메이트", colors: ["#ff8a5c", "#6ac7a8"] },
  ESFP: { symbol: "MV", caption: "하루를 영화처럼 만드는 연인", colors: ["#ff6f61", "#f8c85e"] },
  ESTJ: { symbol: "TR", caption: "믿음을 쌓는 현실 파트너", colors: ["#315b7d", "#62c8b6"] },
  ESTP: { symbol: "DM", caption: "심장을 뛰게 하는 데이트 메이커", colors: ["#ff5a5f", "#2bb3a3"] },
  INFJ: { symbol: "OB", caption: "깊은 마음을 읽는 관찰자", colors: ["#6b6fd6", "#9bd8c4"] },
  INFP: { symbol: "DR", caption: "진심을 오래 품는 감성러", colors: ["#d86ba7", "#f8c85e"] },
  INTJ: { symbol: "AR", caption: "미래를 설계하는 신중한 연인", colors: ["#3d405b", "#7bc6b8"] },
  INTP: { symbol: "SQ", caption: "느리지만 깊게 알아가는 탐구자", colors: ["#577590", "#b8d8ba"] },
  ISFJ: { symbol: "WT", caption: "오래 남는 온기를 주는 타입", colors: ["#e07a5f", "#81b29a"] },
  ISFP: { symbol: "SM", caption: "잔잔하게 스며드는 감성 데이트러", colors: ["#f28482", "#84a59d"] },
  ISTJ: { symbol: "PR", caption: "한결같이 약속을 지키는 사람", colors: ["#3d5a80", "#f2cc8f"] },
  ISTP: { symbol: "AC", caption: "담백하게 행동으로 보여주는 타입", colors: ["#2f4858", "#86bbd8"] }
};

const dailyFortuneLines = [
  "먼저 다가가면 가벼운 대화가 의외의 인연으로 이어질 수 있어요.",
  "오늘은 눈이 자주 마주치는 사람에게 작은 호감의 신호가 생기기 쉬운 날이에요.",
  "연락을 미루지 않으면 관계의 온도가 한 단계 올라갈 수 있어요.",
  "평소와 다른 장소에서 새로운 설렘을 마주칠 확률이 높아요.",
  "솔직한 칭찬 한마디가 생각보다 오래 남는 하루예요.",
  "기다리던 답장이 오거나, 멈춰 있던 대화가 다시 부드럽게 흐를 수 있어요.",
  "과하게 꾸미기보다 자연스러운 모습이 더 매력적으로 보이는 날이에요.",
  "친구의 소개나 우연한 약속에서 좋은 기운이 들어올 수 있어요."
];

const traitReading = {
  E: {
    love: "관계의 분위기를 빠르게 풀고 상대가 편하게 웃을 수 있게 만드는 힘이 있어요.",
    some: "썸 단계에서는 먼저 말을 걸고 약속을 제안하는 추진력이 강점으로 보여요.",
    approach: "좋아하는 사람에게 다가갈 때 밝은 리액션과 자연스러운 질문으로 문을 열 수 있어요.",
    contact: "연락에서는 짧은 안부와 일상 공유를 자주 건네며 친밀감을 쌓기 좋아요.",
    date: "데이트에서는 새로운 장소와 사람 많은 공간에서도 어색함을 줄이는 매력이 있어요.",
    conflict: "갈등이 생겨도 대화를 시작하는 속도가 빨라 오해를 오래 두지 않는 편이에요.",
    long: "오래 만날수록 함께하는 시간을 풍성하게 만들고 관계에 생기를 불어넣어요.",
    caution: "표현이 빠른 만큼 상대가 따라올 시간을 충분히 주는 것이 좋아요.",
    someCaution: "썸에서는 확신을 빨리 확인하려 하기보다 작은 반응을 차분히 봐주세요.",
    partnerFortune: "먼저 산책이나 짧은 통화를 제안하면 관계의 온도가 부드럽게 올라가요.",
    singleFortune: "사람이 모이는 자리나 친구와의 약속에서 새로운 호감 신호를 발견하기 쉬워요.",
    crushFortune: "가벼운 질문 하나로 대화를 시작하면 생각보다 자연스럽게 이어질 수 있어요.",
    talkFortune: "말을 많이 하기보다 상대가 답하기 쉬운 질문을 섞으면 매력이 더 잘 전해져요."
  },
  I: {
    love: "차분하게 상대를 관찰하고 진심이 쌓인 뒤 깊이 다가가는 안정감이 있어요.",
    some: "썸 단계에서는 과한 표현보다 꾸준한 관심과 기억력으로 신뢰를 만들어요.",
    approach: "좋아하는 사람에게 다가갈 때 조용하지만 정확한 배려로 존재감을 남길 수 있어요.",
    contact: "연락에서는 길고 진솔한 대화가 강점이라 상대에게 특별함을 느끼게 해요.",
    date: "데이트에서는 둘만 집중할 수 있는 공간에서 편안하고 깊은 분위기를 만들어요.",
    conflict: "갈등이 생기면 감정을 정리한 뒤 말하려는 태도가 관계를 차분하게 지켜줘요.",
    long: "오래 만날수록 말보다 행동으로 보여주는 신뢰가 큰 매력으로 쌓여요.",
    caution: "마음을 너무 오래 숨기면 상대가 확신을 얻기 어려울 수 있어요.",
    someCaution: "썸에서는 관심이 있어도 무심해 보일 수 있으니 작은 표현을 의식해보세요.",
    partnerFortune: "조용한 공간에서 진심 어린 한마디를 건네면 연인이 크게 안심할 수 있어요.",
    singleFortune: "낯선 만남보다 익숙한 사람과의 대화 속에서 설렘이 생기기 쉬워요.",
    crushFortune: "긴 고백보다 짧은 관심 표현이 오늘은 더 자연스럽게 닿을 수 있어요.",
    talkFortune: "답장을 너무 늦추지 않고 한 문장이라도 따뜻하게 남기면 흐름이 살아나요."
  },
  N: {
    love: "상대와 미래를 상상하고 관계에 특별한 의미를 부여하는 로맨틱한 힘이 있어요.",
    some: "썸 단계에서는 뻔하지 않은 질문과 상상력 있는 대화로 깊은 인상을 남겨요.",
    approach: "좋아하는 사람에게 다가갈 때 둘만의 취향이나 가능성을 이야기하면 설렘이 커져요.",
    contact: "연락에서는 감정, 취향, 앞으로 해보고 싶은 일을 나누며 관계를 넓혀가요.",
    date: "데이트에서는 새로운 경험을 제안해 평범한 하루도 오래 기억되는 장면으로 만들어요.",
    conflict: "갈등 속에서도 관계가 더 좋아질 방향을 떠올리며 의미 있게 풀어가려 해요.",
    long: "오래 만날수록 둘만의 세계와 이야기를 만들어가는 매력이 강해져요.",
    caution: "상상한 기대가 커질수록 현실의 작은 차이를 서운하게 느끼기 쉬워요.",
    someCaution: "썸에서는 상대의 실제 행동을 충분히 보지 않고 가능성만 키우지 않게 조심하세요.",
    partnerFortune: "연인과 앞으로 가보고 싶은 곳을 이야기하면 관계에 새 기대가 생겨요.",
    singleFortune: "평소와 다른 취향의 모임이나 콘텐츠에서 의외의 인연 힌트가 보여요.",
    crushFortune: "상대의 관심사를 물어보고 그 안에서 공통점을 찾으면 대화가 깊어져요.",
    talkFortune: "큰 의미를 담기보다 오늘 있었던 작은 설렘을 가볍게 나누면 좋아요."
  },
  S: {
    love: "상대의 말과 취향을 구체적으로 기억하고 현실적인 배려로 마음을 보여줘요.",
    some: "썸 단계에서는 약속을 잘 지키고 필요한 순간을 챙기는 모습이 강점이에요.",
    approach: "좋아하는 사람에게 다가갈 때 부담 없는 도움이나 실질적인 제안이 잘 어울려요.",
    contact: "연락에서는 구체적인 안부와 일상적인 관심으로 안정적인 호감을 쌓아요.",
    date: "데이트에서는 동선, 시간, 취향을 세심하게 맞춰 편안한 만족감을 줘요.",
    conflict: "갈등이 생기면 실제로 바꿀 수 있는 부분을 찾으며 관계를 단단하게 만들어요.",
    long: "오래 만날수록 꾸준함과 생활 속 배려가 믿음직한 사랑으로 느껴져요.",
    caution: "익숙한 방식만 고집하면 상대가 설렘이 부족하다고 느낄 수 있어요.",
    someCaution: "썸에서는 편안함만 주기보다 가끔은 특별한 표현으로 분위기를 바꿔보세요.",
    partnerFortune: "연인이 좋아하는 음식이나 작은 필요를 챙기면 애정이 선명하게 전달돼요.",
    singleFortune: "일상 동선 안에서 자주 마주치는 사람과 호감이 생길 가능성이 있어요.",
    crushFortune: "상대가 전에 말한 취향을 기억해 언급하면 좋은 인상을 남길 수 있어요.",
    talkFortune: "구체적인 약속이나 실제 가능한 제안을 건네면 대화가 현실적으로 이어져요."
  },
  F: {
    love: "상대의 감정을 섬세하게 살피고 따뜻한 공감으로 사랑받는 느낌을 주는 타입이에요.",
    some: "썸 단계에서는 다정한 말투와 진심 어린 리액션으로 상대의 마음을 편하게 열어요.",
    approach: "좋아하는 사람에게 다가갈 때 상대의 기분을 배려하는 표현이 큰 장점이에요.",
    contact: "연락에서는 말의 온도가 좋아서 짧은 메시지도 오래 기억되게 만들어요.",
    date: "데이트에서는 분위기와 감정을 잘 읽어 상대가 존중받고 있다고 느끼게 해요.",
    conflict: "갈등이 생기면 마음을 먼저 이해하려는 태도로 관계의 상처를 줄일 수 있어요.",
    long: "오래 만날수록 깊은 정서적 연결과 편안한 애착을 만들어가는 힘이 있어요.",
    caution: "상대의 감정을 챙기느라 내 마음을 뒤로 미루면 지칠 수 있어요.",
    someCaution: "썸에서는 상대를 배려하다가 내 호감 표현이 흐려지지 않게 해주세요.",
    partnerFortune: "연인에게 고마웠던 점을 직접 말하면 오늘 관계가 더 다정해져요.",
    singleFortune: "부드러운 말투와 공감 능력이 새로운 사람에게 좋은 첫인상을 남겨요.",
    crushFortune: "상대의 기분을 살피는 메시지가 호감의 문을 조용히 열 수 있어요.",
    talkFortune: "감정 표현은 좋지만 답을 재촉하지 않으면 더 편안한 흐름이 돼요."
  },
  T: {
    love: "상황을 객관적으로 보고 필요한 행동을 해내며 믿음직한 안정감을 줘요.",
    some: "썸 단계에서는 과장된 말보다 일관된 태도와 실질적인 도움으로 신뢰를 얻어요.",
    approach: "좋아하는 사람에게 다가갈 때 솔직하고 담백한 표현이 오히려 매력적으로 보여요.",
    contact: "연락에서는 핵심을 잘 짚고 상대에게 필요한 정보를 놓치지 않는 편이에요.",
    date: "데이트에서는 계획과 선택을 현실적으로 정리해 상대가 편하게 기대게 만들어요.",
    conflict: "갈등이 생기면 문제의 원인을 찾고 해결책을 제시해 관계를 회복시키려 해요.",
    long: "오래 만날수록 책임감과 현실적인 판단이 든든한 사랑으로 쌓여요.",
    caution: "맞는 말을 해도 상대가 감정적으로 받아들일 준비가 필요할 수 있어요.",
    someCaution: "썸에서는 효율적인 답변만 반복하면 관심이 적어 보일 수 있어요.",
    partnerFortune: "연인에게 해결책보다 먼저 한 번 공감해주면 대화가 훨씬 부드러워져요.",
    singleFortune: "깔끔한 태도와 신뢰감 있는 말투가 좋은 인상을 만들기 쉬워요.",
    crushFortune: "담백하게 관심을 표현하되 상대의 감정을 묻는 질문을 더하면 좋아요.",
    talkFortune: "조언을 하기 전 '네 마음은 어땠어?' 같은 질문을 넣으면 호감이 커져요."
  },
  J: {
    love: "관계의 방향을 안정적으로 잡고 약속을 지키며 상대에게 확신을 주는 힘이 있어요.",
    some: "썸 단계에서는 애매한 흐름을 정리하고 다음 만남을 자연스럽게 제안하는 데 강해요.",
    approach: "좋아하는 사람에게 다가갈 때 분명한 관심과 성실한 태도가 신뢰로 이어져요.",
    contact: "연락에서는 꾸준함과 예측 가능한 리듬으로 상대를 불안하게 만들지 않아요.",
    date: "데이트에서는 미리 준비한 코스와 세심한 체크로 좋은 시간을 만들 수 있어요.",
    conflict: "갈등이 생기면 관계를 회복하기 위한 기준과 약속을 세우는 데 능해요.",
    long: "오래 만날수록 책임감과 계획성이 안정적인 미래를 상상하게 만들어요.",
    caution: "계획대로 되지 않을 때 상대를 평가하거나 재촉하는 말이 나올 수 있어요.",
    someCaution: "썸에서는 관계의 답을 너무 빨리 정하려 하면 부담이 될 수 있어요.",
    partnerFortune: "연인과 작은 계획을 함께 정하면 안정감과 설렘이 같이 살아나요.",
    singleFortune: "오늘은 즉흥보다 약속된 자리에서 좋은 인연을 만날 가능성이 높아요.",
    crushFortune: "다음에 같이 할 수 있는 구체적인 제안을 던지면 호감이 선명해져요.",
    talkFortune: "일정을 정할 때 선택지를 두 개 정도 주면 상대가 편하게 반응해요."
  },
  P: {
    love: "상황에 맞춰 유연하게 반응하고 관계를 답답하지 않게 만드는 자유로운 매력이 있어요.",
    some: "썸 단계에서는 자연스러운 흐름과 편안한 농담으로 부담 없는 호감을 만들어요.",
    approach: "좋아하는 사람에게 다가갈 때 가볍고 열린 태도가 어색함을 줄여줘요.",
    contact: "연락에서는 순간의 감정과 재미있는 이야기를 나누며 생동감을 줘요.",
    date: "데이트에서는 즉흥적인 발견과 즐거운 변화를 만들어 특별한 추억을 남겨요.",
    conflict: "갈등이 생기면 분위기를 너무 무겁게 만들지 않고 다시 대화할 틈을 찾아요.",
    long: "오래 만날수록 관계가 고정되지 않고 계속 새롭게 움직이게 하는 힘이 있어요.",
    caution: "자유로운 태도가 때로는 불확실함으로 느껴질 수 있어요.",
    someCaution: "썸에서는 편한 흐름만 믿기보다 최소한의 약속과 표현을 분명히 해주세요.",
    partnerFortune: "연인에게 작은 즉흥 데이트를 제안하면 하루가 산뜻하게 바뀔 수 있어요.",
    singleFortune: "갑자기 생긴 약속이나 우연한 이동에서 설레는 장면이 생기기 쉬워요.",
    crushFortune: "부담 없는 농담이나 짧은 공유로 대화를 시작하면 자연스럽게 가까워져요.",
    talkFortune: "자유롭게 말하되 오늘은 약속 하나를 분명히 남기면 신뢰가 올라가요."
  }
};

const mbtiPattern = /^[EI][NS][FT][JP]$/;
const siteName = "연애 MBTI 테스트";
const kakaoJavaScriptKey = "YOUR_KAKAO_JAVASCRIPT_KEY";

const screens = {
  start: document.querySelector("#start-screen"),
  quiz: document.querySelector("#quiz-screen"),
  result: document.querySelector("#result-screen")
};

const startButton = document.querySelector("#start-button");
const backButton = document.querySelector("#back-button");
const retryButton = document.querySelector("#retry-button");
const copyButton = document.querySelector("#copy-button");
const progressFill = document.querySelector("#progress-fill");
const progressText = document.querySelector("#progress-text");
const questionTag = document.querySelector("#question-tag");
const questionTitle = document.querySelector("#question-title");
const answersEl = document.querySelector("#answers");
const fortuneForm = document.querySelector("#fortune-form");
const mbtiInput = document.querySelector("#mbti-input");
const fortuneError = document.querySelector("#fortune-error");
const startFortuneCard = document.querySelector("#start-fortune-card");
const startFortuneLabel = document.querySelector("#start-fortune-label");
const startFortuneTitle = document.querySelector("#start-fortune-title");
const startFortuneSummary = document.querySelector("#start-fortune-summary");
const startRatingStars = document.querySelector("#start-rating-stars");
const startRatingScore = document.querySelector("#start-rating-score");
const startStrengthText = document.querySelector("#start-strength-text");
const startTipText = document.querySelector("#start-tip-text");
const startFortuneText = document.querySelector("#start-fortune-text");
const resultFortuneLabel = document.querySelector("#result-fortune-label");
const resultRatingStars = document.querySelector("#result-rating-stars");
const resultRatingScore = document.querySelector("#result-rating-score");
const resultFortuneText = document.querySelector("#result-fortune-text");
const resultTypeImage = document.querySelector("#result-type-image");
const resultImageSymbol = document.querySelector("#result-image-symbol");
const resultImageTitle = document.querySelector("#result-image-title");
const resultImageCaption = document.querySelector("#result-image-caption");
const shareScene = document.querySelector("#share-scene");
const shareTitle = document.querySelector("#share-title");
const shareSummary = document.querySelector("#share-summary");
const shareTestButton = document.querySelector("#share-test-button");
const kakaoShareButton = document.querySelector("#kakao-share-button");
const xShareButton = document.querySelector("#x-share-button");
const facebookShareButton = document.querySelector("#facebook-share-button");

let latestShareData = null;

let currentIndex = 0;
let selections = [];

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("active"));
  screens[name].classList.add("active");
}

function normalizeMbti(value) {
  return value.trim().toUpperCase();
}

function getTodayKey() {
  const today = new Date();
  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
}

function getDailyIndex(code) {
  const seed = `${code}-${getTodayKey()}`;
  let total = 0;

  for (let index = 0; index < seed.length; index += 1) {
    total += seed.charCodeAt(index) * (index + 1);
  }

  return total;
}

function getLoveScore(code) {
  return 2.5 + (getDailyIndex(code) % 6) * 0.5;
}

function splitCode(code) {
  return {
    energy: code[0],
    information: code[1],
    decision: code[2],
    lifestyle: code[3]
  };
}

function getStrengthReading(code) {
  const { energy, information, decision, lifestyle } = splitCode(code);

  return [
    `연애 시 장점: ${traitReading[energy].love}`,
    `썸 단계에서의 강점: ${traitReading[energy].some}`,
    `좋아하는 사람에게 다가갈 때의 강점: ${traitReading[information].approach}`,
    `연락과 표현의 강점: ${traitReading[decision].contact}`,
    `데이트에서 빛나는 점: ${traitReading[lifestyle].date}`,
    `갈등을 풀 때의 장점: ${traitReading[decision].conflict}`,
    `오래 만날수록 보이는 매력: ${traitReading[lifestyle].long}`
  ].join("\n");
}

function getTipReading(code) {
  const { energy, information, decision, lifestyle } = splitCode(code);

  return [
    `연애 시 주의할 점: ${traitReading[energy].caution}`,
    `썸 단계에서 조심할 점: ${traitReading[energy].someCaution}`,
    `좋아하는 사람에게 다가갈 때: 마음이 앞설수록 상대의 실제 반응과 속도를 함께 살피는 게 좋아요.`,
    `연락할 때 주의할 점: ${traitReading[decision].someCaution}`,
    `연인과 있을 때: ${traitReading[decision].caution}`,
    `기대가 커질 때: ${traitReading[information].caution}`,
    `관계를 오래 이어가려면: ${traitReading[lifestyle].someCaution}`
  ].join("\n");
}

function getLoveFortune(code) {
  const { energy, information, decision, lifestyle } = splitCode(code);
  const dailyLine = dailyFortuneLines[getDailyIndex(code) % dailyFortuneLines.length];

  return [
    `오늘의 흐름: ${dailyLine}`,
    `현재 연인이 있다면: ${traitReading[decision].partnerFortune} ${traitReading[lifestyle].partnerFortune}`,
    `현재 연인이 없다면: ${traitReading[energy].singleFortune} ${traitReading[information].singleFortune}`,
    `좋아하는 사람이 있다면: ${traitReading[information].crushFortune} ${traitReading[decision].crushFortune}`,
    `먼저 다가가고 싶다면: ${traitReading[energy].approach} 다만 상대가 편하게 반응할 여지를 남겨두면 더 좋아요.`,
    `대화와 연락 팁: ${traitReading[decision].talkFortune} ${traitReading[lifestyle].talkFortune}`,
    `오늘의 마무리 조언: 큰 결론을 내리기보다 오늘 생긴 좋은 신호를 차분히 이어가보세요.`
  ].join("\n");
}

function renderRating(code, starsEl, scoreEl) {
  const score = getLoveScore(code);
  starsEl.innerHTML = "";

  for (let index = 1; index <= 5; index += 1) {
    const star = document.createElement("span");
    const fill = Math.max(0, Math.min(1, score - (index - 1))) * 100;
    star.className = "star";
    star.style.setProperty("--fill", `${fill}%`);
    starsEl.appendChild(star);
  }

  scoreEl.textContent = `${score.toFixed(1)} / 5`;
}

function renderFortune(code, labelEl, textEl, starsEl, scoreEl) {
  labelEl.textContent = `${code} 오늘의 연애 운세`;
  textEl.textContent = getLoveFortune(code);

  if (starsEl && scoreEl) {
    renderRating(code, starsEl, scoreEl);
  }
}

function renderTypeImage(code) {
  const visual = typeVisuals[code];
  const [title] = resultData[code];
  resultTypeImage.style.setProperty("--type-a", visual.colors[0]);
  resultTypeImage.style.setProperty("--type-b", visual.colors[1]);
  resultImageSymbol.textContent = visual.symbol;
  resultImageTitle.textContent = title;
  resultImageCaption.textContent = visual.caption;
}

function renderStartReading(code) {
  const [title, description] = resultData[code];
  startFortuneLabel.textContent = `${code} 오늘의 연애 리딩`;
  startFortuneTitle.textContent = title;
  startFortuneSummary.textContent = description;
  renderRating(code, startRatingStars, startRatingScore);
  startStrengthText.textContent = getStrengthReading(code);
  startTipText.textContent = getTipReading(code);
  startFortuneText.textContent = getLoveFortune(code);
}

function renderShareScene(code, title, description) {
  latestShareData = {
    code,
    title,
    description,
    siteName,
    url: window.location.href.split("#")[0]
  };

  shareTitle.textContent = `${siteName} - ${code} ${title}`;
  shareSummary.textContent = description;
  shareScene.hidden = false;
}

function getShareText() {
  if (!latestShareData) return siteName;
  return `${latestShareData.siteName}: 나의 결과는 ${latestShareData.code} ${latestShareData.title}`;
}

function openShareUrl(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function renderQuestion() {
  const question = questions[currentIndex];
  questionTag.textContent = question.tag;
  questionTitle.textContent = question.title;
  progressFill.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;
  progressText.textContent = `${currentIndex + 1} / ${questions.length}`;
  backButton.style.visibility = currentIndex === 0 ? "hidden" : "visible";

  answersEl.innerHTML = "";
  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.innerHTML = `<span>${index + 1}</span><span>${answer.text}</span>`;
    button.addEventListener("click", () => chooseAnswer(answer.type));
    answersEl.appendChild(button);
  });
}

function chooseAnswer(type) {
  selections[currentIndex] = type;

  if (currentIndex < questions.length - 1) {
    currentIndex += 1;
    renderQuestion();
    return;
  }

  renderResult();
}

function calculateCode() {
  const pairs = [
    ["E", "I"],
    ["N", "S"],
    ["F", "T"],
    ["J", "P"]
  ];

  return pairs.map(([a, b]) => {
    const first = selections.filter((type) => type === a).length;
    const second = selections.filter((type) => type === b).length;
    return first >= second ? a : b;
  }).join("");
}

function renderResult() {
  const code = calculateCode();
  const [title, description] = resultData[code];
  document.querySelector("#result-code").textContent = code;
  document.querySelector("#result-title").textContent = title;
  document.querySelector("#result-description").textContent = description;
  renderTypeImage(code);
  document.querySelector("#result-strength").textContent = getStrengthReading(code);
  document.querySelector("#result-tip").textContent = getTipReading(code);
  renderFortune(code, resultFortuneLabel, resultFortuneText, resultRatingStars, resultRatingScore);
  shareScene.hidden = true;
  showScreen("result");
}

fortuneForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const code = normalizeMbti(mbtiInput.value);

  if (!mbtiPattern.test(code)) {
    fortuneError.textContent = "ENFP처럼 MBTI 4글자를 정확히 입력해주세요.";
    startFortuneCard.hidden = true;
    return;
  }

  fortuneError.textContent = "";
  mbtiInput.value = code;
  renderStartReading(code);
  startFortuneCard.hidden = false;
});

mbtiInput.addEventListener("input", () => {
  mbtiInput.value = mbtiInput.value.toUpperCase();
  fortuneError.textContent = "";
});

startButton.addEventListener("click", () => {
  currentIndex = 0;
  selections = [];
  showScreen("quiz");
  renderQuestion();
});

backButton.addEventListener("click", () => {
  if (currentIndex === 0) return;
  selections.pop();
  currentIndex -= 1;
  renderQuestion();
});

retryButton.addEventListener("click", () => {
  currentIndex = 0;
  selections = [];
  showScreen("quiz");
  renderQuestion();
});

copyButton.addEventListener("click", async () => {
  const code = document.querySelector("#result-code").textContent;
  const title = document.querySelector("#result-title").textContent;
  const description = document.querySelector("#result-description").textContent;
  const strength = document.querySelector("#result-strength").textContent;
  const tip = document.querySelector("#result-tip").textContent;
  const score = resultRatingScore.textContent;
  const fortune = resultFortuneText.textContent;
  const siteUrl = window.location.href.split("#")[0];
  const text = [
    `${siteName} 결과 장면`,
    `${code} - ${title}`,
    description,
    `오늘의 연애 별점: ${score}`,
    "",
    "[연애 강점]",
    strength,
    "",
    "[주의할 점]",
    tip,
    "",
    "[오늘의 연애 운세]",
    fortune,
    "",
    "테스트 해보기",
    siteUrl
  ].join("\n");

  try {
    await navigator.clipboard.writeText(text);
    renderShareScene(code, title, description);
    copyButton.textContent = "복사 완료";
    setTimeout(() => {
      copyButton.textContent = "결과 복사";
    }, 1400);
  } catch {
    copyButton.textContent = "복사 실패";
  }
});

shareTestButton.addEventListener("click", () => {
  currentIndex = 0;
  selections = [];
  shareScene.hidden = true;
  showScreen("quiz");
  renderQuestion();
});

kakaoShareButton.addEventListener("click", async () => {
  if (!latestShareData) return;

  if (window.Kakao && kakaoJavaScriptKey !== "YOUR_KAKAO_JAVASCRIPT_KEY") {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(kakaoJavaScriptKey);
    }

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: getShareText(),
        description: latestShareData.description,
        imageUrl: `${latestShareData.url.replace(/\/[^/]*$/, "")}/assets/romance-hero.png`,
        link: {
          mobileWebUrl: latestShareData.url,
          webUrl: latestShareData.url
        }
      },
      buttons: [
        {
          title: "테스트 해보기",
          link: {
            mobileWebUrl: latestShareData.url,
            webUrl: latestShareData.url
          }
        }
      ]
    });
    return;
  }

  await navigator.clipboard.writeText(`${getShareText()}\n테스트 해보기: ${latestShareData.url}`);
  kakaoShareButton.textContent = "카카오톡 준비중";
  setTimeout(() => {
    kakaoShareButton.textContent = "카카오톡";
  }, 1400);
});

xShareButton.addEventListener("click", () => {
  if (!latestShareData) return;
  const params = new URLSearchParams({
    text: getShareText(),
    url: latestShareData.url
  });
  openShareUrl(`https://twitter.com/intent/tweet?${params.toString()}`);
});

facebookShareButton.addEventListener("click", () => {
  if (!latestShareData) return;
  const params = new URLSearchParams({
    u: latestShareData.url,
    quote: getShareText()
  });
  openShareUrl(`https://www.facebook.com/sharer/sharer.php?${params.toString()}`);
});

function initAdSenseSlots() {
  const slots = [...document.querySelectorAll(".adsbygoogle")];
  const hasRealClient = slots.some((slot) => /^ca-pub-\d+$/.test(slot.dataset.adClient || ""));

  if (!hasRealClient) return;

  slots.forEach((slot) => {
    const fallback = slot.parentElement?.querySelector(".ad-fallback");
    if (fallback) fallback.hidden = true;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      if (fallback) fallback.hidden = false;
    }
  });
}

initAdSenseSlots();
