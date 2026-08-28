# CAMS·TPAC 사례 입력 스키마

민감한 원본을 붙여넣지 말고, 적법하게 가명화한 필요한 사실만 제공한다. 빈 값은 `미확인`으로 남긴다.

```text
case_id: 가명 식별자
period: YYYY-MM-DD ~ YYYY-MM-DD
amount_and_currency: 범위 또는 통화
countries_or_regions: 국가·지역
transaction_type: 송금 | 무역대금 | 가상자산 | 지급결제 | 기타
counterparty_relationship: 고객·공급자·제3자 등 관계
observed_change: 과거 대비 변화
known_entity_identifier: corp_code | 종목코드 | 확인된 법인명 | 미확인
supporting_documents: 계약·인보이스·선하증권·지갑 통제·자금원천 등 존재 여부
analyst_question: 검토하고 싶은 질문
```

분석 전 `관찰 사실`, `사용자 해석`, `누락 정보`를 세 목록으로 분리한다. 자동 STR 결론, 제재 권고, 고객 조치는 산출하지 않는다.
