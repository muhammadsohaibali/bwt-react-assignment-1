import { faqsArray } from '../utils/FAQArray'

type FaqItem = {
  question: string
  answer: string
  icon?: React.ReactNode
  link?: {
    text: string
    href: string
  }
}

const FAQ = () => {
  const halfwayIndex = Math.ceil(faqsArray.length / 2)

  function renderFaqGroup(group: FaqItem[]) {
    return group.map((faq) => {
      let formattedAnswer = faq.answer
      if (faq.link?.text && faq.link?.href) {
        const { text, href } = faq.link
        formattedAnswer = formattedAnswer.includes(text)
          ? formattedAnswer.replaceAll(
            text,
            `<a href="${href}" class="text-primary-600 font-medium underline">${text}</a>`
          )
          : `${formattedAnswer}<br><a href="${href}" class="text-primary-600 font-medium underline">${text}</a>`
      }

      return (
        <div key={faq.question} className="mb-10">
          <h3 className="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white">
            {faq.icon}
            {faq.question}
          </h3>
          <p
            className="text-gray-500 dark:text-gray-400"
            dangerouslySetInnerHTML={{ __html: formattedAnswer }}
          />
        </div>
      )
    })
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="grid border-t border-gray-200 pt-8 text-left md:grid-cols-2 md:gap-16 dark:border-gray-700">
          <div>{renderFaqGroup(faqsArray.slice(0, halfwayIndex))}</div>
          <div>{renderFaqGroup(faqsArray.slice(halfwayIndex))}</div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
