

const Gallery = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Image 1 */}
            <div>
                <img src="https://i.ibb.co/vDJKTwn/pexels-anete-lusina-4792494.jpg" alt="Image 1" className="w-full h-56 rounded-lg" />
            </div>

            {/* Image 2 */}
            <div>
                <img src="https://i.ibb.co/37k81zd/pexels-conojeghuo-175709.jpg" alt="Image 2" className="w-full h-56 rounded-lg" />
            </div>

            {/* Image 3 */}
            <div>
                <img src="https://i.ibb.co/Xx3Bv4g/pexels-cottonbro-6692604.jpg" alt="Image 3" className="w-full h-56 rounded-lg" />
            </div>

            {/* Image 4 */}
            <div>
                <img src="https://i.ibb.co/xqQGwFq/pexels-kevinmenajang-982657.jpg" alt="Image 4" className="w-full h-56 rounded-lg" />
            </div>

            {/* Image 5 */}
            <div>
                <img src="https://i.ibb.co/bW2YnWM/pexels-punchbrandstock-2249429.jpg" alt="Image 5" className="w-full h-56 rounded-lg" />
            </div>

            {/* Image 6 */}
            <div>
                <img src="https://i.ibb.co/Yh7f8Dz/pexels-rethaferguson-3817644.jpg" alt="Image 6" className="w-full h-56 rounded-lg" />
            </div>

            {/* Image 7 */}
            <div>
                <img src="https://i.ibb.co/F6dPqRR/pexels-teona-swift-6850547.jpg" alt="Image 7" className="w-full h-56 rounded-lg" />
            </div>

            {/* Image 8 */}
            <div>
                <img src="https://i.ibb.co/x38Bz5q/pexels-tiana-18128-2900935.jpg" alt="Image 8" className="w-full h-56 rounded-lg" />
            </div>
        </div>
    );
};

export default Gallery;