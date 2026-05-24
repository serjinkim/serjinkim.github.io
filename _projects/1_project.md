---
layout: page
title: Why do CEOs get fired?
description: A machine learning study predicting forced CEO turnover using US firm and executive data (1992–2022)
img:
importance: 1
category: research
github: https://github.com/serjinkim/ceo-turnover-ml
---

This project investigates the determinants of forced CEO turnover using a dataset of US public firms from 1992 to 2022, combining executive compensation data (Execucomp) with firm financial data (WRDS).

To address data imbalance, we employed matched case-control sampling (1:1 and 1:2 ratios, repeated 3 times each). We compared three modeling approaches: Boosting + Logistic Regression, Lasso + Logistic Regression, and a baseline logistic model without variable selection.

**Key findings:**

- Best model: Boosting + Logistic (AUC = 0.8072), outperforming Lasso + Logistic (0.7684) and the baseline (0.7669)
- Most important executive features: gender, bonus, option grants, age, and tenure
- Most important firm features: profitability metrics (income before extraordinary items, pre-tax income), followed by capital expenditure and receivables
- Post-financial crisis shift: firms place greater weight on financial soundness (debt-to-assets, quick ratio) over short-term profitability
- CEOs with low firm profitability but high compensation face *higher* firing risk

The model was applied to Samsung (0.6654, high-risk), Meritz Securities (0.1219, low-risk), and Hyundai (0.3501, medium-risk) as real-world demonstrations.

*Team project for Data Mining Labs and Methods, Seoul National University (June 2025). Co-authored with Sungwon Ryu and Jihee Lee.*
