
const FaqItem = ({faq,index}) => {
  return (
    <div>
        <div className="faq-question">{faq.question}</div>
        <button className="faq-button">&gt;</button>
        <div className="faq-answer">{faq.answer}</div>
    </div>
  )
}

export default FaqItem