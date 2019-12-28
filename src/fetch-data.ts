export const fetchData = (url: string, config: Record<string, any>) => {
    return  fetch(url, config).then(res => {
        if(res.status !== 200) {
            return res.text().then(err => { throw err });
        }

        const contentType = res.headers.get('content-type');

        if(contentType && contentType.indexOf('application/json') !== -1) {
            return res.json();
        }

        return res.text();
    });
};
