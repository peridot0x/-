// DOM이 완전히 로드된 후 실행
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 친구 추가 기능 예시 구현
    const addBtn = document.getElementById('add-btn');
    const friendCodeInput = document.getElementById('friend-code-input');

    if (addBtn) {
        addBtn.addEventListener('click', () => {
            const code = friendCodeInput.value.trim();
            if (code === '') {
                alert('친구의 공유 코드를 입력해주세요!');
                return;
            }
            alert(`"${code}" 코드를 가진 친구가 성공적으로 추가되었습니다!`);
            friendCodeInput.value = '';
        });
    }

    // 2. 친구 선택 및 공강 비교 기능 예시 구현
    const compareBtn = document.getElementById('compare-btn');
    const friendSelect = document.getElementById('friend-select');
    const resultBox = document.getElementById('result-box');

    if (compareBtn) {
        compareBtn.addEventListener('click', () => {
            const selectedFriend = friendSelect.value;
            
            if (!selectedFriend) {
                alert('비교할 친구를 선택해주세요.');
                return;
            }

            // 시뮬레이션 데이터 연출
            resultBox.innerHTML = `
                <strong>[공강 매칭 완료!]</strong><br>
                선택하신 친구와 오늘 <strong>12:00 ~ 14:00 (2시간)</strong> 동안 공강 시간이 겹칩니다!<br>
                학식이나 학교 카페에서 만나는 것을 추천해요 ☕
            `;
            resultBox.style.backgroundColor = '#e3f2fd';
            resultBox.style.borderLeftColor = '#1976d2';
        });
    }

    // 3. CONTACT 폼 제출 이벤트
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('메시지가 성공적으로 전송되었습니다. 소중한 의견 감사합니다!');
            contactForm.reset();
        });
    }

});