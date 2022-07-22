async function sleep(ms, msg = `[HOST] System initialization in progress - waiting ${ms / 1000} seconds...`) {
  if (msg) console.log(msg)
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function main() {
  await sleep(5000, '[HOST] System initialization started - waiting 5 seconds...')

  console.log('[HOST] Dynamically importing react and react-dom/client exports...')
  const { default: React } = await import('react')
  const { default: ReactDOM } = await import('react-dom/client')
  console.log('[HOST] Libraries loaded:')
  console.log('[HOST] > React =', React)
  console.log('[HOST] > ReactDOM =', ReactDOM)
  console.log('')

  await sleep(1000)

  console.log('[HOST] Dynamically importing library1 exports...')
  const { Hello } = await import('library1')
  console.log('[HOST] Exports loaded:')
  console.log('[HOST] > Hello =', Hello)
  console.log('')

  await sleep(1000)

  console.log('[HOST] Creating react.js app with Hello component from library1')
  const app = ReactDOM.createRoot(document.getElementById('app'))
  app.render(React.createElement(Hello, { name: 'Jane Smith' }))
  console.log('[HOST] app =', app)
  console.log('')

  await sleep(1000)

  console.log('[HOST] System initialized.')
}

main()
