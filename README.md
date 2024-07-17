## 프로젝트 목적
Cypress를 사용하여 E2E 테스트 코드와 CI/CD를 학습 및 실습해보는 프로젝트 입니다.
프로젝트 실습을 위해 React를 사용하여 간단한 TodoList를 구현하였습니다.

## Test Enviroment
<table>
 <tr>
  <td>
   <b>Broser</b>
  </td>
  <td>
   - Chrome - 버전 126.0.6478.127(공식 빌드) (64비트)<br>
   - Edge - 버전 126(64비트)
  </td>
 </tr>
 <tr>
  <td>
   <b>Test Device</b>
  </td>
  <td>
   - PC - Web
  </td>
 </tr>
  <tr>
  <td>
   <b>Test URL</b>
  </td>
  <td>
   - http://localhost:3000/
  </td>
 </tr>
</table>

## 기능 소개
#### TodoList는 다음과 같은 기능들을 제공합니다.

1. 할 일 추가
 - 사용자는 입력 필드를 통해 새로운 할 일을 추가할 수 있습니다.
 - Enter 키를 누르거나 '추가' 버튼을 클릭하여 새로운 할 일을 추가할 수 있습니다.
 - 할 일은 최대 100자 입력 가능하며 한글, 영어, 특수문자, 숫자가 모두 입력 가능하다.
 - 할 일이 너무 긴경우 ...으로 줄여들며 마우스 오버시 ToolTip으로 보여진다.
 - 할 일의 개수가 많아진 경우 스크롤로 표시 된다.
   
2. 할 일 수정
 - 사용자는 Edit 버튼을 클릭해 Edit 모달에서 작성한 내용을 변경할 수 있습니다.
 - Edit 모달에서는 내용을 수정하고 [저장] 버튼 혹은 [Enter]키를 통해 변경 사항을 저장할 수 있습니다.
 - ESC 키를 눌러 편집 모달을 종료할 수 있습니다.
 - "[X]" 버튼을 클릭하여 편집 모달을 종료할 수 있습니다.\
 - 아무런 데이터를 입력 하지 않고 저장을 했을 경우에는 이전 데이터를 유지합니다.

3. 할 일 삭제
 - 각 할 일 항목 옆에 있는 삭제 버튼을 클릭하여 해당 항목을 삭제할 수 있습니다.

4. 할 일 완료/미완료
 - 각 할 일 항목을 클릭하여 완료 상태로 변경할 수 있습니다.
 - 완료된 할 일은 취소선이 나타나며, 다시 클릭하여 미완료 상태로 변경할 수 있습니다.


## UI
![image](https://github.com/user-attachments/assets/15221299-e2ae-41f2-b55a-15f702209fd9)

## TestCase
[TC 바로가기](https://docs.google.com/spreadsheets/d/1M8znB8AjMz3_I2Q9O3Xuk9-1kRuwMkn--X2LcxzuiGQ/edit?usp=sharing)

## 테스트 전략
Git Action을 사용해 작성한 E2E테스트 코드를 수행합니다.
