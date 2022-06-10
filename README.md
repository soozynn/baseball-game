# 기능목록

- 숫자 입력 form 및 입력 버튼 구현
- 랜덤 숫자 뽑는 함수 구현 & Hint 알고리즘 기능 구현
- 실행결과 목록 기능 구현
- 게임 재시작 및 게임 종료 모달 기능 구현
- 남은 횟수(5번의 기회) & 게임 설명 아이콘
- test case 추가

## 실행방법

```
git clone https://github.com/soozynn/baseball-game.git

npm install
```

설치 후,

```
npm start
```

실행시켜주세요.

## 기술스택 및 버전

```
"react": "^18.1.0",
"react-dom": "^18.1.0",
"styled-components": "^5.3.5",
```

## 게임설명

5번의 주어진 기회 안에 1부터 9까지의 숫자 중 3자리 숫자를 맞추는 게임입니다.

1. 3자리 숫자와 위치가 모두 맞아야 성공입니다.
2. 숫자는 1~9까지 구성되어 있으며, 각 숫자는 한번 씩만 사용 가능합니다.
3. 입력한 숫자에 따라 컴퓨터는 Hint를 알려줍니다.
   숫자와 자리의 위치가 맞으면 Strike, 숫자만 맞으면 Ball 입니다.
4. 숫자가 하나도 맞지 않을 경우 Nothing 으로 표시됩니다.
5. 5번의 기회에 숫자를 맞추지 못할 경우 게임은 지게됩니다.

### About..

여러 기술 스택에 시도와 도전을 해보고 싶었으나 주고받는 props가 적어 전역 상태를 관리해줄 필요성이 없을 것 같아 redux를 쓰지 않고 react로만 간단하게 만들어보았습니다. 요구사항 중 메서드 분리에 있어서 최대한 지키도록 노력하였습니다. 다만, 프리티어 설정과 가독성을 위해 조금씩 공백을 추가해주어 길이가 조금 긴 함수들도 존재하는 것 같습니다. 제출 후에도 나은 방향성은 없는지에 더 고민해보도록 하겠습니다. 감사합니다!
