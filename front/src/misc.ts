export const sleep = (delayMillisec: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, delayMillisec)
  })
}
