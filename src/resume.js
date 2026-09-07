import resumePdfUrl from '../SamarthRavindraKamat_Goa Institute of Management .pdf?url'
import resumeImgUrl from '../Samarth_Resume.png'

export const RESUME_PDF = resumePdfUrl
export const RESUME_IMG = resumeImgUrl
export const RESUME_FILENAME = 'SamarthRavindraKamat_Goa Institute of Management.pdf'

export function downloadResume(asImageFallback = false) {
  const url = asImageFallback ? RESUME_IMG : RESUME_PDF
  const name = asImageFallback ? 'Samarth_Resume.png' : RESUME_FILENAME
  try {
    const a = document.createElement('a')
    a.href = url
    a.download = name
    a.rel = 'noopener noreferrer'
    a.target = '_blank'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  } catch (e) {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
}

export function viewResume() {
  window.open(RESUME_PDF, '_blank', 'noopener,noreferrer')
}
