export default {
  swiper() {
    const { content, playduration: duration } = store.news.SuperNews
    const timeout = +store.sysparams['swiper_interval_second'] || 5
    setTimeout(back, +duration * 1000)

    new Swiper({
      pics: Array.isArray(content) ? content : [content],
      img: createImg(),
      timeout,
    }).start()
  },
  start() {
    return window.slLog('xxx')
    let { type, starttime: start, endtime: end } = store.news.SuperNews
    // 没有消息
    if (!type) back(0)

    if ([start, end].inPeriod()) {
      type === types.picture ? this.swiper() : this.video()
    } else {
      back(1)
    }
  },
  video() {
    const { content: id, playduration: times } = store.news.SuperNews
    if (!id || id === '0') return back(2)

    let i = 0
    videoHandler
      .init({
        page: 'force',
        controller: 0,
        events: {
          event_media_end() {
            if (++i >= times) {
              back(3)
            }
          },
        },
      })
      .start(
        {
          fullscreen: 1,
        },
        id,
      )
  },
}
