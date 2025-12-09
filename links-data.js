const levelLinksNoise = Array.from(
    { length: 200 },
    (_, i) => `https://example${i + 1}.com/path${i + 1}`
);

levelLinksNoise[122] = "https://hackit-opk2.onrender.com";

const REAL_LEVEL4_INDEX = 122;

function getLevel4Url() {
    return levelLinksNoise[REAL_LEVEL4_INDEX];
}
