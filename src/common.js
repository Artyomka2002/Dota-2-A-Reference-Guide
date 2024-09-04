export function sort(post, links) {
    const postName = post?.localized_name;
    const sortImg = links.map(item => ({
        name: item.localized_name,
        img: item.src || null
    }));
    const foundImage = sortImg.find(item => item.name === postName);
    const imgSrc = foundImage ? foundImage.img : 'false';
    return imgSrc;
}

export const win = (wins, picks) => {
    let nums = []
    for (let i = 0; i < picks.length; i++) {
        let ar = (wins[i] / picks[i] * 100).toFixed(2)
        nums.push(ar)
    }
    return nums
}

