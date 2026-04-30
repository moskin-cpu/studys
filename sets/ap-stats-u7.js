// AP Statistics Unit 7: Inference for Means
window.QUIZ_SET = {
  id: "ap-stats-u7",
  title: "AP Stats Unit 7 Review",
  description: "10 questions on inference for means - confidence intervals and significance tests",
  questions: [
    {
      id: 1,
      question: "A researcher wants to estimate the mean weight of apples from a certain orchard. A random sample of 25 apples has a mean weight of 150 grams and a standard deviation of 12 grams. What is the standard error of the mean?",
      options: ["2.4 grams", "12 grams", "0.48 grams", "60 grams"],
      correct: 0,
      explanation: "Standard error = s/√n = 12/√25 = 12/5 = 2.4 grams"
    },
    {
      id: 2,
      question: "When constructing a confidence interval for a population mean with unknown population standard deviation, which distribution should be used?",
      options: ["Normal (z) distribution", "t-distribution", "Chi-square distribution", "F-distribution"],
      correct: 1,
      explanation: "When σ is unknown and we use sample standard deviation s, we use the t-distribution"
    },
    {
      id: 3,
      question: "A 95% confidence interval for the mean height of students is (165, 175) cm. What is the margin of error?",
      options: ["5 cm", "10 cm", "2.5 cm", "170 cm"],
      correct: 0,
      explanation: "Margin of error = (upper - lower)/2 = (175-165)/2 = 5 cm"
    },
    {
      id: 4,
      question: "For a t-confidence interval with sample size n=20, what are the degrees of freedom?",
      options: ["20", "19", "18", "21"],
      correct: 1,
      explanation: "Degrees of freedom for t-distribution = n - 1 = 20 - 1 = 19"
    },
    {
      id: 5,
      question: "A hypothesis test for a population mean has H₀: μ = 100 and Hₐ: μ > 100. If the p-value is 0.03 and α = 0.05, what is the conclusion?",
      options: ["Fail to reject H₀", "Reject H₀", "Accept H₀", "Cannot determine"],
      correct: 1,
      explanation: "Since p-value (0.03) < α (0.05), we reject the null hypothesis"
    },
    {
      id: 6,
      question: "Which condition is NOT required for a one-sample t-interval?",
      options: ["Random sample", "Normal population or large sample (n≥30)", "Known population standard deviation", "Independence of observations"],
      correct: 2,
      explanation: "The t-interval is used specifically when the population standard deviation is UNKNOWN"
    },
    {
      id: 7,
      question: "A 99% confidence interval will be _____ than a 95% confidence interval (all else equal).",
      options: ["Narrower", "Wider", "The same width", "Cannot determine"],
      correct: 1,
      explanation: "Higher confidence level requires a wider interval to be more certain of capturing the true parameter"
    },
    {
      id: 8,
      question: "In a paired t-test, what are we actually testing?",
      options: ["Two independent means", "The mean of differences", "Two proportions", "The difference of proportions"],
      correct: 1,
      explanation: "A paired t-test analyzes the mean of the differences between paired observations"
    },
    {
      id: 9,
      question: "If a confidence interval for μ is (45, 55), which values would NOT be rejected in a two-sided hypothesis test at the same confidence level?",
      options: ["40", "50", "60", "Both 40 and 60"],
      correct: 1,
      explanation: "50 is within the interval (45, 55), so it would not be rejected. Values outside the interval would be rejected."
    },
    {
      id: 10,
      question: "What happens to the margin of error as sample size increases?",
      options: ["It increases", "It decreases", "It stays the same", "It depends on the confidence level only"],
      correct: 1,
      explanation: "Margin of error = t* × (s/√n). As n increases, √n increases, so the margin of error decreases"
    }
  ]
};
