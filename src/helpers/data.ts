/* 
    处理post请求data数据发送
    MDN:A body of data to be sent in the XHR request. This can be:
    A Document, in which case it is serialized before being sent.
    An XMLHttpRequestBodyInit, which per the Fetch spec can be a Blob, BufferSource, FormData, URLSearchParams, or USVString object.
    null
    平常我们传递的JSON对象并不能被send，所以通常我们是使用JSON.stringify()转为字符串，此时他就是USVString类型了。可以调用xhr.send方法进行http传输了。
*/
import { isPlaneObject } from './utlis'
export function transformRequest(data: any): any {
  if (isPlaneObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

export function transformResponse(data: any): any {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch {
      // do nothing
    }
  }
  return data
}
