// 删除域名
export function delDomainName(url) {
    return url.replace(/^(?:https?:\/\/)?[^/]+/, '');
}